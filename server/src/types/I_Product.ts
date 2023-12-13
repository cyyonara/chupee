import { RowDataPacket } from "mysql2";

export interface IProduct extends RowDataPacket {
  id: number;
  product_name: string;
  product_description: string;
  price: number;
  quantity: number;
  image: any;
}
