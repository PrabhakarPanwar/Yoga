import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs]     = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/reglog"); return; }

    axios.get("http://localhost:8000/blog", { headers: { token } })
      .then(res => {
        if (res.data.success) setBlogs(res.data.blogs);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf8f2]">
      <p className="text-[#c8763a] text-lg animate-pulse">Loading blogs...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-24 pb-16 px-4 md:px-10"
      style={{ fontFamily: "'Georgia', serif" }}>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] text-[#c8763a] uppercase mb-2">Shubh Yog Shala</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#3b2a1a] mb-4">
            Yoga <span className="italic text-[#c8763a]">Insights</span>
          </h1>
          <p className="text-[#7a6352] text-sm max-w-md mx-auto">
            Thoughts, guides, and wisdom from Shubham Pundir's practice and teaching.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20 text-[#a89885]">
            <p className="text-5xl mb-4">🧘</p>
            <p>No blogs published yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <NavLink
                key={blog._id}
                to={`/blog/${blog.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e8d5c0] hover:shadow-lg hover:border-[#c8763a] transition-all duration-300 group block"
              >
                {/* Cover */}
                {blog.coverImage ? (
                  <img
                    src={`http://localhost:8000/uploads/${blog.coverImage}`}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-[#f5e8d8] to-[#e8d5c0] flex items-center justify-center text-5xl">
                    🌿
                  </div>
                )}

                <div className="p-6">
                  {/* Tags */}
                  {blog.tags?.length > 0 && (
                    <div className="flex gap-2 flex-wrap mb-3">
                      {blog.tags.slice(0, 2).map((tag, j) => (
                        <span key={j} className="text-[10px] bg-[#f5e8d8] text-[#c8763a] px-2 py-1 rounded-full tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="text-[#3b2a1a] font-semibold text-lg leading-snug mb-2 group-hover:text-[#c8763a] transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-[#7a6352] text-sm leading-relaxed line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[#c8a882]">
                    <span>{new Date(blog.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span className="text-[#c8763a] group-hover:translate-x-1 transition-transform duration-300">
                      Read → 
                    </span>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;