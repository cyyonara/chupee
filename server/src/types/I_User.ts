import { RowDataPacket } from "mysql2";

export interface IUser extends RowDataPacket {
  user_id: number;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
}
