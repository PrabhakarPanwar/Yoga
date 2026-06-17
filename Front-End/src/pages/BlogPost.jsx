import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function BlogPost() {
  const { slug }              = useParams();
  const [blog, setBlog]       = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate              = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { navigate("/reglog"); return; }

    axios.get(`http://localhost:8000/blog/post/${slug}`, { headers: { token } })
      .then(res => { if (res.data.success) setBlog(res.data.blog); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf8f2]">
      <p className="text-[#c8763a] animate-pulse">Loading...</p>
    </div>
  );

  if (!blog) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f2]">
      <p className="text-2xl text-[#3b2a1a] mb-4">Blog not found.</p>
      <NavLink to="/blog" className="text-[#c8763a]">← Back to Blogs</NavLink>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-24 pb-16 px-4"
      style={{ fontFamily: "'Georgia', serif" }}>
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <NavLink to="/blog" className="text-[#c8763a] text-sm hover:underline mb-8 inline-block">
          ← Back to Blogs
        </NavLink>

        {/* Cover */}
        {blog.coverImage && (
          <img
            src={`http://localhost:8000/uploads/${blog.coverImage}`}
            alt={blog.title}
            className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 shadow-lg"
          />
        )}

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-4">
            {blog.tags.map((tag, i) => (
              <span key={i} className="text-[10px] bg-[#f5e8d8] text-[#c8763a] px-3 py-1 rounded-full tracking-wide uppercase">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-light text-[#3b2a1a] leading-snug mb-4">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-[#c8a882] mb-8 pb-8 border-b border-[#e8d5c0]">
          <span>By {blog.author?.name || "Shubham Pundir"}</span>
          <span>·</span>
          <span>{new Date(blog.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>·</span>
          <span>👁 {blog.views} views</span>
        </div>

        {/* Content */}
        <div className="text-[#5a3e2b] leading-relaxed text-base space-y-4 font-sans">
          {blog.content.split("\n").map((para, i) =>
            para.trim() ? <p key={i}>{para}</p> : null
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#e8d5c0] text-center">
          <p className="text-[#c8763a] text-xs tracking-[0.3em] uppercase mb-2">Written by</p>
          <p className="text-[#3b2a1a] font-semibold">Shubham Pundir</p>
          <p className="text-[#a89885] text-xs mt-1">Founder · Shubh Yog Shala · M.Sc. Yoga Science</p>
          <NavLink
            to="/blog"
            className="inline-block mt-6 border border-[#c8763a] text-[#c8763a] px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#c8763a] hover:text-white transition"
          >
            ← All Blogs
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;