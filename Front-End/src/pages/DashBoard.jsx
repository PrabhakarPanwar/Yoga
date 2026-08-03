import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8000";

function DashBoard() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("blogs"); // 'blogs' or 'users'
  const [blogs, setBlogs]         = useState([]);
  const [users, setUsers]         = useState([]);
  const [showForm, setShowForm]   = useState(false);
  const [editBlog, setEditBlog]   = useState(null);
  const [loading, setLoading]     = useState(false);
  const [form, setForm]           = useState({
    title: "", content: "", excerpt: "", tags: "", status: "published",
  });
  const [image, setImage]         = useState(null);
  const [preview, setPreview]     = useState("");

  // User management state
  const [selectedUser, setSelectedUser] = useState(null);
  const [newPassword, setNewPassword]   = useState("");

  const token = localStorage.getItem("token");

 const handleLogout = () => {
  localStorage.clear();
  toast.success("Logged out successfully");
  navigate("/reglog");
};

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API}/blog/admin/all`, {
        headers: { token },
      });
      if (res.data.success) setBlogs(res.data.blogs);
      else toast.error(res.data.msg);
    } catch (err) {
      console.error("fetchBlogs error:", err);
      toast.error(err.response?.data?.msg || "Failed to load blogs.");
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API}/auth/admin/users`, {
        headers: { token },
      });
      if (res.data.success) setUsers(res.data.users);
      else toast.error(res.data.msg);
    } catch (err) {
      console.error("fetchUsers error:", err);
      toast.error(err.response?.data?.msg || "Failed to load users.");
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin" || !token) { 
      navigate("/login"); 
      return; 
    }
    fetchBlogs();
    fetchUsers();
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
    setPreview(blog.coverImage || "");
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

      const config = { headers: { token } };

      const res = editBlog
        ? await axios.put(`${API}/blog/admin/update/${editBlog._id}`, data, config)
        : await axios.post(`${API}/blog/admin/create`, data, config);

      if (res.data.success) {
        toast.success(editBlog ? "Blog updated!" : "Blog published!");
        setShowForm(false);
        setImage(null);
        setPreview("");
        fetchBlogs();
      } else {
        toast.error(res.data.msg || "Failed to save blog.");
      }
    } catch (err) {
      console.error("handleSubmit error:", err.response?.data || err.message);
      toast.error(err.response?.data?.msg || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await axios.delete(`${API}/blog/admin/delete/${id}`, {
        headers: { token },
      });
      if (res.data.success) { 
        toast.success("Blog deleted."); 
        fetchBlogs(); 
      } else {
        toast.error(res.data.msg);
      }
    } catch (err) {
      toast.error("Failed to delete blog.");
    }
  };

  const handleToggle = async (id) => {
    try {
      const res = await axios.patch(`${API}/blog/admin/toggle/${id}`, {}, {
        headers: { token },
      });
      if (res.data.success) { 
        toast.success(res.data.msg); 
        fetchBlogs(); 
      } else {
        toast.error(res.data.msg);
      }
    } catch (err) {
      toast.error("Failed to change blog status.");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!newPassword || !selectedUser) return;

    try {
      const res = await axios.patch(
        `${API}/auth/admin/reset-user-password`,
        { userId: selectedUser._id, newPassword },
        { headers: { token } }
      );

      if (res.data.success) {
        toast.success(`Password reset for ${selectedUser.email}`);
        setSelectedUser(null);
        setNewPassword("");
      } else {
        toast.error(res.data.msg);
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || "Failed to update user password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-20 px-4 md:px-10"
      style={{ fontFamily: "'Georgia', serif" }}>

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <p className="text-xs tracking-[0.3em] text-[#c8763a] uppercase">Admin Panel</p>
          <h1 className="text-3xl font-light text-[#3b2a1a]">Management Console</h1>
        </div>
        <div className="flex items-center gap-3">
          {activeTab === "blogs" && (
            <button
              onClick={openNew}
              className="bg-[#c8763a] text-white px-5 py-2 text-xs tracking-widest uppercase hover:bg-[#a85e2a] transition rounded-lg shadow-sm"
            >
              + New Blog
            </button>
          )}
          <button
            onClick={handleLogout}
            className="border border-[#3b2a1a] text-[#3b2a1a] px-5 py-2 text-xs tracking-widest uppercase hover:bg-[#3b2a1a] hover:text-white transition rounded-lg shadow-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="flex gap-4 border-b border-[#e8d5c0] mb-8">
        <button
          onClick={() => setActiveTab("blogs")}
          className={`pb-3 text-sm tracking-wider uppercase transition ${
            activeTab === "blogs"
              ? "border-b-2 border-[#c8763a] text-[#c8763a] font-semibold"
              : "text-[#a89885] hover:text-[#3b2a1a]"
          }`}
        >
          Blogs ({blogs.length})
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`pb-3 text-sm tracking-wider uppercase transition ${
            activeTab === "users"
              ? "border-b-2 border-[#c8763a] text-[#c8763a] font-semibold"
              : "text-[#a89885] hover:text-[#3b2a1a]"
          }`}
        >
          Registered Users ({users.length})
        </button>
      </div>

      {/* FORM MODAL FOR BLOGS */}
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
                    className="mt-3 w-full h-48 object-cover rounded-xl border border-[#e8d5c0]" />
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

      {/* TAB 1: BLOGS VIEW */}
      {activeTab === "blogs" && (
        blogs.length === 0 ? (
          <div className="text-center py-20 text-[#a89885]">
            <p className="text-5xl mb-4">✍️</p>
            <p className="text-lg">No blogs yet. Write your first one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {blogs.map((blog) => (
              <div key={blog._id}
                className="bg-white rounded-2xl shadow-sm border border-[#e8d5c0] overflow-hidden hover:shadow-md transition flex flex-col justify-between">

                <div>
                  {blog.coverImage ? (
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-44 object-cover"
                    />
                  ) : (
                    <div className="w-full h-44 bg-[#f5e8d8] flex items-center justify-center text-4xl">
                      🧘
                    </div>
                  )}

                  <div className="p-5">
                    <span className={`text-[10px] tracking-widest uppercase px-2 py-1 rounded-full font-bold ${
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
                      {blog.excerpt || blog.content}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between text-xs text-[#c8a882] mb-4">
                    <span>{new Date(blog.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric", month: "short", year: "numeric"
                    })}</span>
                    <span>👁 {blog.views || 0}</span>
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
        )
      )}

      {/* TAB 2: REGISTERED USERS VIEW */}
      {activeTab === "users" && (
        <div className="bg-white rounded-2xl border border-[#e8d5c0] p-6 shadow-sm mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[#3b2a1a]">
              <thead className="border-b border-[#e8d5c0] text-xs text-[#c8763a] uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Email / Username</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Joined Date</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u._id} className="border-b border-gray-100 hover:bg-[#fdf8f2]">
                    <td className="py-3 px-4 font-medium">{u.email}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-xs uppercase font-bold ${
                        u.role === "admin" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600"
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-500">
                      {new Date(u.createdAt).toLocaleDateString("en-IN")}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => setSelectedUser(u)}
                        className="text-xs text-[#c8763a] border border-[#c8763a] px-3 py-1 rounded-md hover:bg-[#c8763a] hover:text-white transition"
                      >
                        Reset Password
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* RESET USER PASSWORD MODAL */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl border border-[#e8d5c0]">
            <h3 className="text-lg font-semibold text-[#3b2a1a] mb-2">
              Reset Password for {selectedUser.email}
            </h3>
            <form onSubmit={handleResetPassword} className="flex flex-col gap-4 mt-4">
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="border-b-2 border-[#e8d5c0] focus:border-[#c8763a] outline-none py-2 text-[#3b2a1a]"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#c8763a] text-white py-2 text-xs uppercase tracking-wider rounded-lg hover:bg-[#a85e2a]"
                >
                  Save New Password
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedUser(null)}
                  className="flex-1 border border-gray-300 text-gray-600 py-2 text-xs uppercase tracking-wider rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default DashBoard;