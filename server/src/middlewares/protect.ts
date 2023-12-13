import jwt, { JwtPayload, JsonWebTokenError } from "jsonwebtoken";
import { I_Request } from "../types/I_Request";
import { Response, NextFunction } from "express";
import { pool } from "../server";
import { IUser } from "../types/I_User";

interface J_Decoded extends JwtPayload {
  _id: number;
}

export const protect = async (req: I_Request, res: Response, next: NextFunction) => {
  const token = req.cookies.chupee_token;
  if (token) {
    try {
      const decoded: J_Decoded = jwt.verify(token, process.env.JWT_SECRET as string) as J_Decoded;
      const sql = "SELECT * FROM users WHERE user_id = ?";
      const [result] = await pool.query(sql, [decoded._id]);
      const users = result as IUser[];

      if (users.length > 0) {
        req.user = {
          userId: users[0].user_id,
          firstName: users[0].first_name,
          lastName: users[0].last_name,
          username: users[0].username,
          password: users[0].password,
        };
        next();
      } else {
        res.clearCookie("chupee_token").status(401).json({ message: "Unauthorized" });
      }
    } catch (error: any) {
      if (error instanceof JsonWebTokenError) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  } else {
    res.status(401).json({ message: "Token is required" });
  }
};
