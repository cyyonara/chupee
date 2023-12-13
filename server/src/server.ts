import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import http from "http";
import morgan from "morgan";
import { notFound } from "./middlewares/errorHandler";
import authRouter from "./routes/authRouter";
import productRouter from "./routes/productRouter";
import checkoutRouter from "./routes/checkoutRouter";
import mysql from "mysql2";

dotenv.config();
const port = process.env.PORT || 4001;

const app: Application = express();
const server = http.createServer(app);

export const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  })
  .promise();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/checkout", checkoutRouter);

app.use(notFound);

server.listen(port, () => console.log(`server is listening at port ${port}`));
