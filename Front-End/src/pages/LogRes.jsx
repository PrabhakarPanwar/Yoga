import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LogRes() {
  const [reglog, setReglog] = useState(true);
  const [formData, setFormData] = useState({ password: "", name: "", email: "", role: "user" });
  const navigate = useNavigate();

  // Matched to process.env.PORT = 5000 from your .env
  const API = "http://localhost:5000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post(`${API}/auth/register`, formData);
      toast.success(res.data.msg || "Account created successfully! Please login.");
      setReglog(true);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Registration failed!");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      toast.success(res.data.msg || "Logged in successfully!");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.user?.name);

      setTimeout(() => {
        if (res.data.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }, 1000);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Invalid email or password!");
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
                  className="bg-slate-900 text-white rounded-full font-bold w-[60%] p-2 hover:bg-slate-800 transition"
                  onClick={handleLogin}
                >
                  Log In
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
                <div className="flex items-center gap-2 pt-2">
                  <label htmlFor="role" className="text-sm font-semibold text-gray-600">
                    Register As:
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="p-1 border rounded text-sm outline-none"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </section>
              <section className="flex flex-col gap-4">
                <button
                  className="bg-slate-900 text-white rounded-full font-bold w-[60%] p-2 hover:bg-slate-800 transition"
                  onClick={handleRegister}
                >
                  Register
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