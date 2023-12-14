import { Response } from "express";
import { I_Request } from "../types/I_Request";
import { pool } from "../server";

interface INewCartProduct {
  productId: number;
  quantity: number;
}

// @POST - private - /api/cart/
export const addToCart = async (req: I_Request, res: Response) => {
  try {
    const { productId, quantity }: INewCartProduct = req.body;
    const sql = "SELECT * FROM cart WHERE customer_id = ? AND product_id = ?";
    const [result] = await pool.query(sql, [req.user?.userId, productId]);
    const cart = result as any[];

    if (cart.length > 0) {
      const sql2 =
        "UPDATE cart SET cart_quantity = cart_quantity + ? WHERE customer_id = ? AND product_id = ?";
      pool.query(sql2, [quantity, req.user?.userId, productId]);
    } else {
      const sql3 = "INSERT INTO cart(customer_id,product_id,cart_quantity) VALUES(?,?,?)";
      pool.query(sql3, [req.user?.userId, productId, quantity]);
    }
    res.status(201).json({ success: true });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @GET - private - /api/cart
export const getCart = async (req: I_Request, res: Response) => {
  try {
    const sql =
      "SELECT cart.product_id as productId, cart.cart_quantity as cartQuantity, products.product_name as productName, products.product_description as productDescription, products.price, products.quantity as currentQuantity, products.image FROM cart INNER JOIN products ON cart.product_id = products.product_id WHERE cart.customer_id = ?";
    const [result] = await pool.query(sql, [req.user?.userId]);
    res.status(200).json({ data: result });
  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

interface IDelete {
  productIds: number[];
}

// @PUT - private - /api/cart/
export const deleteCartItem = (req: I_Request, res: Response) => {
  try {
    const { productIds }: IDelete = req.body;
    const sql = `DELETE FROM cart WHERE customer_id = ? AND product_id IN (${productIds.join(
      ","
    )})`;
    pool.query(sql, [req.user?.userId]);
    res.status(201).json({ success: true });
  } catch (error: any) {
    res.status(201).json({ message: error.message });
  }
};
