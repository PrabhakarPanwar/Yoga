import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/blog");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div className="p-10 text-center text-xl">Loading blogs...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600">
        Shubhi Yoga Articles & Insights
      </h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts found yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="border rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between">
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-44 object-cover"
                />
              )}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {blog.excerpt || blog.content.substring(0, 100) + "..."}
                  </p>
                </div>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="text-blue-600 font-semibold hover:underline mt-2 inline-block"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;