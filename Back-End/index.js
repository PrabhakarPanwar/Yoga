import express from "express";
import cors from "cors";
import connect from "./database/connection.js";
import authRoutes from "./AuthRoute/routes.js";
import blogRoutes from "./AuthRoute/blogRoutes.js";

const app = express();

connect();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/auth", authRoutes);   // /auth/register  /auth/login
app.use("/blog", blogRoutes);   // /blog/...

app.listen(8000, () => console.log("🚀 Server running on port 8000"));