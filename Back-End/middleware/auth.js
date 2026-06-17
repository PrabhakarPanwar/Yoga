import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

function verifyToken(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ success: false, msg: "No token. Please login." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, msg: "Token invalid or expired." });
  }
}

export default verifyToken;