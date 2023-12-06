import { pool } from "../server";
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";

interface IProduct extends RowDataPacket {
  id: number;
  product_name: string;
  product_description: string;
  price: number;
  quantity: number;
  image: any;
}

interface ICount {
  count: number;
}

// @GET - public - /api/products
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page, limit } = req.query;
    const queryLimit = limit ? parseInt(limit as string) : 10;
    const currentPage = page ? parseInt(page as string) : 1;
    const sql = "SELECT * FROM products ORDER BY price DESC LIMIT ? OFFSET ?";
    const [result] = await pool.query(sql, [queryLimit, (currentPage - 1) * queryLimit]);

    const sql2 = "SELECT COUNT(*) as count FROM products";
    const [result2] = await pool.query(sql2);

    const products = result as IProduct[];
    const countArray = result2 as ICount[];
    const totalPages = Math.ceil(countArray[0].count / queryLimit);

    res.status(200).json({ data: products, totalPages, hasNextPage: !(currentPage >= totalPages) });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// @GET - public - /api/products/:id
export const getSingleProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const productId = parseInt(id);
    const sql = "SELECT * FROM products WHERE product_id = ?";
    const [result] = await pool.query(sql, [productId]);
    const product = result as IProduct[];
    res.status(200).json({ data: product[0] });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @GET - public - /api/products/search?keyword=?
export const searchProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const keyword = req.query.keyword;
    const sql = `SELECT * FROM products WHERE product_name LIKE '%${keyword}%' LIMIT 5`;
    const [result] = await pool.query(sql);
    res.status(200).json({ data: result });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
