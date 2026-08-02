import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function LogRes() {
  const [reglog, setReglog] = useState(true);
  const [formData, setFormData] = useState({ password: "", name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      toast.success(res.data.msg || "Account created successfully! Please login.");
      setReglog(true);
      setFormData({ password: "", name: "", email: "" });
    } catch (err) {
      toast.error(err.response?.data?.msg || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      toast.error("Please enter email and password.");
      return;
    }
    setLoading(true);
    try {
      const res = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      toast.success(res.data.msg || "Logged in successfully!");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.user?.name || "");

      setTimeout(() => {
        navigate(res.data.role === "admin" ? "/admin/dashboard" : "/");
      }, 800);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="md:flex flex-col md:flex-row overflow-hidden bg-white">
      <div className="flex z-10 flex-1 justify-center items-center h-screen">
        <div className="flex justify-center h-[80vh] sm:h-[45vh] flex-col gap-5 w-[55%]">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600 text-5xl font-bold">
            Come On In.
          </h1>

          {reglog ? (
            <>
              <section className="flex flex-col gap-3">
                <input
                  className="p-2 border-b-2 outline-none focus:border-blue-600"
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="p-2 border-b-2 outline-none focus:border-blue-600"
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </section>
              <section className="flex flex-col gap-4">
                <button
                  className="bg-slate-900 text-white rounded-full font-bold w-[60%] p-2 hover:bg-slate-800 transition disabled:opacity-50"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log In"}
                </button>
                <button
                  onClick={() => setReglog(false)}
                  className="text-left font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600"
                >
                  Create an Account
                </button>
              </section>
            </>
          ) : (
            <>
              <section className="flex flex-col gap-3">
                <input
                  className="p-2 border-b-2 outline-none focus:border-blue-600"
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  className="p-2 border-b-2 outline-none focus:border-blue-600"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="p-2 border-b-2 outline-none focus:border-blue-600"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </section>
              <section className="flex flex-col gap-4">
                <button
                  className="bg-slate-900 text-white rounded-full font-bold w-[60%] p-2 hover:bg-slate-800 transition disabled:opacity-50"
                  onClick={handleRegister}
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Register"}
                </button>
                <button
                  onClick={() => setReglog(true)}
                  className="text-left font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600"
                >
                  Have an Account
                </button>
              </section>
            </>
          )}
        </div>
      </div>
      <div className="md:flex hidden flex-1 h-screen">
        <img className="w-screen object-cover" src="/src/assets/logPose.jpg" alt="Yoga pose background" />
      </div>
    </main>
  );
}

export default LogRes;