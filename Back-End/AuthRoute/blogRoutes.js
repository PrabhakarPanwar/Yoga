import express from "express";
import verifyToken from "../middleware/auth.js";
import isAdmin from "../middleware/isAdmin.js";
import upload from "../middleware/multer.js";
import {
  getPublishedBlogs,
  getBlogBySlug,
  getAllBlogsAdmin,
  createBlog,
  updateBlog,
  deleteBlog,
  toggleBlogStatus,
} from "../AuthController/blogController.js";

const router = express.Router();

// USER — must be logged in to read blogs
router.get("/",           verifyToken, getPublishedBlogs);
router.get("/post/:slug", verifyToken, getBlogBySlug);

// ADMIN only
router.get("/admin/all",           verifyToken, isAdmin, getAllBlogsAdmin);
router.post("/admin/create",       verifyToken, isAdmin, upload.single("coverImage"), createBlog);
router.put("/admin/update/:id",    verifyToken, isAdmin, upload.single("coverImage"), updateBlog);
router.delete("/admin/delete/:id", verifyToken, isAdmin, deleteBlog);
router.patch("/admin/toggle/:id",  verifyToken, isAdmin, toggleBlogStatus);

export default router;