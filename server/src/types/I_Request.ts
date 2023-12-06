import { Request } from "express";

export interface I_Request extends Request {
  user?: {
    userId: number;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
  };
}
