import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API = "http://localhost:8000";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // --- LOGIN USER ---
        const res = await axios.post(`${API}/auth/login`, {
          email: formData.email,
          password: formData.password,
        });

        if (res.data.success) {
          // Save credentials for Dashboard authorization
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.role);

          toast.success("Login successful!");

          // Redirect based on role
          if (res.data.role === "admin") {
            window.location.href = "/dashboard";
          } else {
            window.location.href = "/";
          }
        }
      } else {
        // --- CREATE NEW ACCOUNT ---
        const res = await axios.post(`${API}/auth/register`, formData);

        if (res.data.success) {
          toast.success("Account created! Please log in.");
          setIsLogin(true); // Switch to login tab
          setFormData({ name: "", email: "", password: "" });
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.msg || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#fdf8f2] flex items-center justify-center px-4"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <div className="bg-white border border-[#e8d5c0] w-full max-w-md p-8 rounded-2xl shadow-xl">
        <p className="text-xs tracking-[0.3em] text-[#c8763a] uppercase text-center mb-1">
          Welcome
        </p>
        <h2 className="text-2xl font-light text-[#3b2a1a] text-center mb-6">
          {isLogin ? "Sign In to Your Account" : "Create a New Account"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="text-xs tracking-widest text-[#c8763a] uppercase">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border-b-2 border-[#e8d5c0] focus:border-[#c8763a] outline-none py-2 text-[#3b2a1a] mt-1 bg-transparent"
              />
            </div>
          )}

          <div>
            <label className="text-xs tracking-widest text-[#c8763a] uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border-b-2 border-[#e8d5c0] focus:border-[#c8763a] outline-none py-2 text-[#3b2a1a] mt-1 bg-transparent"
            />
          </div>

          <div>
            <label className="text-xs tracking-widest text-[#c8763a] uppercase">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border-b-2 border-[#e8d5c0] focus:border-[#c8763a] outline-none py-2 text-[#3b2a1a] mt-1 bg-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-[#c8763a] text-white py-3 text-sm tracking-widest uppercase hover:bg-[#a85e2a] transition rounded-xl disabled:opacity-50"
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-[#7a6352]">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-[#c8763a] font-semibold hover:underline ml-1"
              >
                Create Account
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-[#c8763a] font-semibold hover:underline ml-1"
              >
                Log In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;