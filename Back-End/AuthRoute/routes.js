import express from "express";
import { dashboard, login, register } from "../AuthController/controller.js";
import verfifyToken from "../middleware/auth.js";

//Post
let every = express.Router();

every.post("/register", register);
every.post("/login", login);
every.get("/admin/dashboard", verfifyToken, dashboard);

export default every;
