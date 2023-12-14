import express, { IRouter } from "express";
import { protect } from "../middlewares/protect";
import { addToCart, getCart, deleteCartItem } from "../controllers/cartController";

const router: IRouter = express.Router();

// @POST - private - /api/cart/
router.post("/", protect, addToCart);

// @GET - private - /api/cart/
router.get("/", protect, getCart);

// @PUT - private - /api/cart/
router.put("/", protect, deleteCartItem);

export default router;
