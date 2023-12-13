import express, { IRouter } from "express";
import { protect } from "../middlewares/protect";
import { getCheckedoutProducts, checkoutOrder } from "../controllers/checkoutController";

const router: IRouter = express.Router();

// @GET - private - /api/checkout/
router.get("/", protect, getCheckedoutProducts);

// @POST - pirvate - /api/checkout/
router.post("/", protect, checkoutOrder);

export default router;
