import { Response } from "express";
import { I_Request } from "../types/I_Request";
import { pool } from "../server";
import { IProduct } from "../types/I_Product";

// @GET - private - /api/checkout/
export const getCheckedoutProducts = async (req: I_Request, res: Response) => {
  try {
    const productIdsString = req.query.products;
    const productIds = (productIdsString as string).replaceAll("-", ",");
    const sql = `SELECT * FROM products WHERE product_id IN (${productIds})`;
    const [result] = await pool.query(sql);
    const products = result as IProduct[];
    res.status(200).json({ data: products });
  } catch (error: any) {
    res.status(500).json({ message: "Internal server error" });
  }
};

interface ICheckout {
  products: { productId: number; quantity: number }[];
  total: number;
}

// @POST - private - /api/checkout/
export const checkoutOrder = async (req: I_Request, res: Response) => {
  try {
    const { products, total }: ICheckout = req.body;
    const sql = "INSERT INTO orders(customer_name,total,date) values(?,?,?)";
    const [result]: any = await pool.query(sql, [
      `${req.user!.firstName} ${req.user!.lastName}`,
      total,
      new Date(),
    ]);
    const orderId = result.insertId;

    products.forEach(({ productId, quantity }) => {
      const sql2 = "UPDATE products SET quantity = quantity - ? WHERE product_id = ?";
      pool.query(sql2, [quantity, productId]);
    });

    products.forEach(({ productId, quantity }) => {
      const sql3 = "INSERT INTO sold_products(product_id,order_id,quantity) VALUES(?,?,?)";
      pool.query(sql3, [productId, orderId, quantity]);
    });
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
