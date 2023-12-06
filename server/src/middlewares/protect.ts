import jwt, { JwtPayload, JsonWebTokenError } from "jsonwebtoken";
import { I_Request } from "../types/I_Request";
import { Response, NextFunction } from "express";
import { pool } from "../server";

type J_Decoded = JwtPayload & {
  _id: number;
};

export const protect = async (req: I_Request, res: Response, next: NextFunction) => {
  const token = req.cookies.chupee_token;
  if (token) {
    try {
      console.log(token);
      const decoded: J_Decoded = jwt.verify(token, process.env.JWT_SECRET as string) as J_Decoded;

      console.log(decoded);
      //const sql = "SELECT * FROM users WHERE user_id = ?";
      //const [result] = await pool.query(sql, _id);

      //res.json({ user: result });
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
