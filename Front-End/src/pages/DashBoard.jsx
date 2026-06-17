import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API = "http://localhost:8000";

function DashBoard() {
  const [blogs, setBlogs]       = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const [loading, setLoading]   = useState(false);
  const [form, setForm]         = useState({
    title: "", content: "", excerpt: "", tags: "", status: "published",
  });
  const [image, setImage]     = useState(null);
  const [preview, setPreview] = useState("");

  const token = localStorage.getItem("token");

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API}/blog/admin/all`, {
        headers: { token },
      });
      if (res.data.success) setBlogs(res.data.blogs);
      else toast.error(res.data.msg);
    } catch (err) {
      console.error("fetchBlogs error:", err);
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") { window.location.href = "/"; return; }
    fetchBlogs();
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const openNew = () => {
    setEditBlog(null);
    setForm({ title: "", content: "", excerpt: "", tags: "", status: "published" });
    setImage(null);
    setPreview("");
    setShowForm(true);
  };

  const openEdit = (blog) => {
    setEditBlog(blog);
    setForm({
      title:   blog.title   || "",
      content: blog.content || "",
      excerpt: blog.excerpt || "",
      tags:    blog.tags?.join(", ") || "",
      status:  blog.status  || "draft",
    });
    setPreview(blog.coverImage ? `${API}/uploads/${blog.coverImage}` : "");
    setImage(null);
    setShowForm(true);
  };

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      toast.error("Title and content are required.");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("title",   form.title.trim());
      data.append("content", form.content.trim());
      data.append("excerpt", form.excerpt.trim());
      data.append("tags",    form.tags.trim());
      data.append("status",  form.status);
      if (image) data.append("coverImage", image);

      // Log what we're sending
      console.log("Sending token:", token);
      console.log("Sending to:", editBlog
        ? `${API}/blog/admin/update/${editBlog._id}`
        : `${API}/blog/admin/create`
      );

      const config = { headers: { token } };

      const res = editBlog
        ? await axios.put(`${API}/blog/admin/update/${editBlog._id}`, data, config)
        : await axios.post(`${API}/blog/admin/create`, data, config);

      console.log("Response:", res.data);

      if (res.data.success) {
        toast.success(editBlog ? "Blog updated!" : "Blog published!");
        setShowForm(false);
        setImage(null);
        setPreview("");
        fetchBlogs();
      } else {
        toast.error(res.data.msg || "Failed.");
      }
    } catch (err) {
      console.error("handleSubmit error:", err.response?.data || err.message);
      toast.error("Something went wrong. Check console.");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      const res = await axios.delete(`${API}/blog/admin/delete/${id}`, {
        headers: { token },
      });
      if (res.data.success) { toast.success("Deleted."); fetchBlogs(); }
      else toast.error(res.data.msg);
    } catch (err) {
      toast.error("Failed to delete.");
    }
  };

  const handleToggle = async (id) => {
    try {
      const res = await axios.patch(`${API}/blog/admin/toggle/${id}`, {}, {
        headers: { token },
      });
      if (res.data.success) { toast.success(res.data.msg); fetchBlogs(); }
      else toast.error(res.data.msg);
    } catch (err) {
      toast.error("Failed to toggle.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-20 px-4 md:px-10"
      style={{ fontFamily: "'Georgia', serif" }}>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-xs tracking-[0.3em] text-[#c8763a] uppercase">Admin Panel</p>
          <h1 className="text-3xl font-light text-[#3b2a1a]">Blog Manager</h1>
        </div>
        <button
          onClick={openNew}
          className="bg-[#c8763a] text-white px-6 py-2.5 text-sm tracking-widest uppercase hover:bg-[#a85e2a] transition"
        >
          + New Blog
        </button>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center overflow-y-auto py-10 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-semibold text-[#3b2a1a] mb-6">
              {editBlog ? "Edit Blog" : "Write New Blog"}
            </h2>

            <div className="flex flex-col gap-5">

              <div>
                <label className="text-xs tracking-widest text-[#c8763a] uppercase">Title *</label>
                <input
                  className="w-full border-b-2 border-[#e8d5c0] focus:border-[#c8763a] outline-none py-2 text-[#3b2a1a] mt-1 bg-transparent"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  placeholder="Blog title..."
                />
              </div>

              <div>
                <label className="text-xs tracking-widest text-[#c8763a] uppercase">Cover Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="mt-2 text-sm text-[#7a6352] block"
                />
                {preview && (
                  <img src={preview} alt="preview"
                    className="mt-3 w-full h-48 object-cover rounded-xl" />
                )}
              </div>

              <div>
                <label className="text-xs tracking-widest text-[#c8763a] uppercase">Short Description</label>
                <input
                  className="w-full border-b-2 border-[#e8d5c0] focus:border-[#c8763a] outline-none py-2 text-[#3b2a1a] mt-1 bg-transparent"
                  value={form.excerpt}
                  onChange={e => setForm({ ...form, excerpt: e.target.value })}
                  placeholder="Short description shown on blog listing..."
                />
              </div>

              <div>
                <label className="text-xs tracking-widest text-[#c8763a] uppercase">Content *</label>
                <textarea
                  rows={8}
                  className="w-full border-2 border-[#e8d5c0] focus:border-[#c8763a] outline-none p-3 text-[#3b2a1a] mt-1 rounded-xl resize-none bg-transparent"
                  value={form.content}
                  onChange={e => setForm({ ...form, content: e.target.value })}
                  placeholder="Write your blog content here..."
                />
              </div>

              <div>
                <label className="text-xs tracking-widest text-[#c8763a] uppercase">Tags</label>
                <input
                  className="w-full border-b-2 border-[#e8d5c0] focus:border-[#c8763a] outline-none py-2 text-[#3b2a1a] mt-1 bg-transparent"
                  value={form.tags}
                  onChange={e => setForm({ ...form, tags: e.target.value })}
                  placeholder="yoga, health, meditation"
                />
              </div>

              <div>
                <label className="text-xs tracking-widest text-[#c8763a] uppercase">Status</label>
                <select
                  className="w-full border-b-2 border-[#e8d5c0] focus:border-[#c8763a] outline-none py-2 text-[#3b2a1a] mt-1 bg-transparent"
                  value={form.status}
                  onChange={e => setForm({ ...form, status: e.target.value })}
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-[#c8763a] text-white py-3 text-sm tracking-widest uppercase hover:bg-[#a85e2a] transition rounded-xl disabled:opacity-50"
              >
                {loading ? "Saving..." : editBlog ? "Update Blog" : "Publish Blog"}
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 border border-[#e8d5c0] text-[#7a6352] py-3 text-sm tracking-widest uppercase hover:border-[#c8763a] transition rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BLOG LIST */}
      {blogs.length === 0 ? (
        <div className="text-center py-20 text-[#a89885]">
          <p className="text-5xl mb-4">✍️</p>
          <p className="text-lg">No blogs yet. Write your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id}
              className="bg-white rounded-2xl shadow-sm border border-[#e8d5c0] overflow-hidden hover:shadow-md transition">

              {blog.coverImage ? (
                <img
                  src={`${API}/uploads/${blog.coverImage}`}
                  alt={blog.title}
                  className="w-full h-44 object-cover"
                />
              ) : (
                <div className="w-full h-44 bg-[#f5e8d8] flex items-center justify-center text-4xl">
                  🧘
                </div>
              )}

              <div className="p-5">
                <span className={`text-[10px] tracking-widest uppercase px-2 py-1 rounded-full ${
                  blog.status === "published"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}>
                  {blog.status}
                </span>

                <h3 className="text-[#3b2a1a] font-semibold mt-2 mb-1 leading-snug line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-[#a89885] text-xs mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-[#c8a882] mb-4">
                  <span>{new Date(blog.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric", month: "short", year: "numeric"
                  })}</span>
                  <span>👁 {blog.views}</span>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => openEdit(blog)}
                    className="flex-1 border border-[#c8763a] text-[#c8763a] py-1.5 text-xs uppercase rounded-lg hover:bg-[#c8763a] hover:text-white transition">
                    Edit
                  </button>
                  <button onClick={() => handleToggle(blog._id)}
                    className="flex-1 border border-[#3b2a1a] text-[#3b2a1a] py-1.5 text-xs uppercase rounded-lg hover:bg-[#3b2a1a] hover:text-white transition">
                    {blog.status === "published" ? "Unpublish" : "Publish"}
                  </button>
                  <button onClick={() => handleDelete(blog._id)}
                    className="flex-1 border border-red-400 text-red-400 py-1.5 text-xs uppercase rounded-lg hover:bg-red-400 hover:text-white transition">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashBoard;