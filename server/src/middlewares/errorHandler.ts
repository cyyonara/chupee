import { Request, Response } from "express";

export const notFound = (req: Request, res: Response): void => {
  res.status(401).json({ message: "Resource not found" });
};
