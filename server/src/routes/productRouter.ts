import express, { IRouter } from "express";
import { getProducts, getSingleProduct, searchProduct } from "../controllers/productController";
import { protect } from "../middlewares/protect";

const router: IRouter = express.Router();

// @GET - public - /api/products
router.get("/", getProducts);

// @GET - public = /api/products/search?keyword=?
router.get("/search", searchProduct);

// @GET - public - /api/products/checkout
router.get("/checkout", protect);

// @GET - public - /api/products/:id
router.get("/:id", getSingleProduct);

export default router;
