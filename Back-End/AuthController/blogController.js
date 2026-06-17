import Blog from "../models/blogSchema.js";

// helper to generate slug
const makeSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-") + "-" + Date.now();

export const getPublishedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "published" })
      .populate("author", "name")
      .select("-content")
      .sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (err) {
    res.json({ success: false, msg: "Failed to fetch blogs." });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug, status: "published" },
      { $inc: { views: 1 } },
      { new: true }
    ).populate("author", "name");

    if (!blog) return res.json({ success: false, msg: "Blog not found." });
    res.json({ success: true, blog });
  } catch (err) {
    res.json({ success: false, msg: "Failed to fetch blog." });
  }
};

export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (err) {
    res.json({ success: false, msg: "Failed to fetch blogs." });
  }
};

export const createBlog = async (req, res) => {
  try {
    console.log("=== CREATE BLOG HIT ===");
    console.log("req.user:", req.user);
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    const { title, content, excerpt, tags, status } = req.body;

    if (!title || !content) {
      return res.json({ success: false, msg: "Title and content required." });
    }

    const slug       = makeSlug(title);
    const coverImage = req.file ? req.file.filename : "";

    const blog = new Blog({
      title,
      slug,
      content,
      excerpt:     excerpt || content.substring(0, 150),
      tags:        tags ? tags.split(",").map(t => t.trim()) : [],
      coverImage,
      status:      status || "draft",
      author:      req.user.id,
    });

    await blog.save();

    console.log("Blog created:", blog._id);
    res.json({ success: true, msg: "Blog created.", blog });

  } catch (err) {
    console.error("createBlog ERROR:", err.message);
    res.json({ success: false, msg: err.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.json({ success: false, msg: "Blog not found." });

    const { title, content, excerpt, tags, status } = req.body;

    if (title)   { blog.title = title; blog.slug = makeSlug(title); }
    if (content)  blog.content    = content;
    if (excerpt)  blog.excerpt    = excerpt;
    if (status)   blog.status     = status;
    if (tags)     blog.tags       = tags.split(",").map(t => t.trim());
    if (req.file) blog.coverImage = req.file.filename;

    await blog.save();
    res.json({ success: true, msg: "Blog updated.", blog });

  } catch (err) {
    console.error("updateBlog ERROR:", err.message);
    res.json({ success: false, msg: err.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, msg: "Blog deleted." });
  } catch (err) {
    res.json({ success: false, msg: "Failed to delete." });
  }
};

export const toggleBlogStatus = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.json({ success: false, msg: "Blog not found." });

    blog.status = blog.status === "published" ? "draft" : "published";
    await blog.save();

    res.json({ success: true, msg: `Blog is now ${blog.status}.`, status: blog.status });
  } catch (err) {
    res.json({ success: false, msg: "Failed to toggle." });
  }
};