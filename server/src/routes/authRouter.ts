import express, { IRouter } from "express";
import { login, signup, logout } from "../controllers/authController";

const router: IRouter = express.Router();

// @POST - public - /api/auth/signup
router.post("/signup", signup);

// @POST - public - /api/auth/login
router.post("/login", login);

// @GET - public - /api/auth/logout
router.get("/logout", logout);

export default router;
