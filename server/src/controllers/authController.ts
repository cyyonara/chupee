import { Request, Response } from "express";
import { pool } from "../server";
import { IUser } from "../types/I_User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface I_Signup {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

// @POST - public - /api/auth/signup
export const signup = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username, password }: I_Signup = req.body;
    console.log(firstName);
    const sql = "SELECT * FROM users WHERE username = ? AND isAdmin = ?";
    const [result] = await pool.query(sql, [username, false]);
    const users = result as IUser[];

    if (users.length) return res.status(401).json({ message: "Username already exist" });
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql2 =
      "INSERT INTO users(first_name,last_name,username,password,isAdmin) VALUES(?,?,?,?,?)";
    const [result2] = await pool.query(sql2, [
      firstName,
      lastName,
      username,
      hashedPassword,
      false,
    ]);

    const newUserId = (result2 as any).insertId;
    const sql3 = "SELECT user_id, first_name, last_name, username FROM users WHERE user_id = ?";
    const [result3] = await pool.query(sql3, [newUserId]);
    const userCredentials = result3 as typeof users;

    const token = jwt.sign({ _id: userCredentials[0].user_id }, process.env.JWT_SECRET as string, {
      expiresIn: "60d",
    });

    res
      .cookie("chupee_token", token, { maxAge: 1000 * 60 * 60 * 24 * 60, httpOnly: true })
      .status(201)
      .json({
        auth: {
          userId: userCredentials[0].user_id,
          firstName: userCredentials[0].first_name,
          lastName: userCredentials[0].last_name,
          username: userCredentials[0].username,
        },
      });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

interface ILogin {
  username: string;
  password: string;
}

// @POST - public - /api/auth/login
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password }: ILogin = req.body;
    const sql = "SELECT * FROM users WHERE username = ? AND isAdmin = ?";

    const [result] = await pool.query(sql, [username, false]);
    const users = result as IUser[];
    if (!users.length) return res.status(401).json({ message: "Invalid username or password" });
    const isValidPassword = await bcrypt.compare(password, users[0].password);

    if (!isValidPassword) {
      res.status(401).json({ message: "Invalid username or password" });
    } else {
      const token = jwt.sign({ _id: users[0].user_id }, process.env.JWT_SECRET as string, {
        expiresIn: "60d",
      });

      res
        .cookie("chupee_token", token, { maxAge: 1000 * 60 * 60 * 24 * 60, httpOnly: true })
        .status(201)
        .json({
          auth: {
            userId: users[0].user_id,
            firstName: users[0].first_name,
            lastName: users[0].last_name,
            username: users[0].username,
          },
        });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req: Request, res: Response): void => {
  res.clearCookie("chupee_token").status(200).json({ success: true });
};
