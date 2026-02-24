import express from "express";
import { login, register } from "../AuthController/controller.js";
import verifyToken from "../middleware/auth.js";

//Post
let every = express.Router();

every.post("/register", register);
every.post("/login", login);
every.get("/admin/dashboard", verifyToken);

export default every;
