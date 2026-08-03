import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function LogRes() {
  const [mode, setMode] = useState("login"); // "login" | "register" | "verify"
  const [formData, setFormData] = useState({ password: "", name: "", email: "" });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleAuthSuccess = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("name", data.user?.name || "");
    setTimeout(() => navigate(data.role === "admin" ? "/admin/dashboard" : "/"), 600);
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
      toast.success(res.data.msg || "OTP sent to your email.");
      setMode("verify");
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
      handleAuthSuccess(res.data);
    } catch (err) {
      const data = err.response?.data;
      if (data?.needsVerification) {
        toast.error("Please verify your email first. We've sent you an OTP.");
        setMode("verify");
        api.post("/auth/resend-otp", { email: formData.email }).catch(() => {});
      } else {
        toast.error(data?.msg || "Invalid email or password!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP sent to your email.");
      return;
    }
    setLoading(true);
    try {
      const res = await api.post("/auth/verify-otp", { email: formData.email, otp });
      toast.success(res.data.msg || "Email verified!");
      handleAuthSuccess(res.data);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Verification failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const res = await api.post("/auth/resend-otp", { email: formData.email });
      toast.success(res.data.msg || "OTP resent!");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Could not resend OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="md:flex flex-col md:flex-row overflow-hidden bg-white">
      <div className="flex z-10 flex-1 justify-center items-center h-screen">
        <div className="flex justify-center h-[80vh] sm:h-[45vh] flex-col gap-5 w-[55%]">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600 text-5xl font-bold">
            {mode === "verify" ? "Almost there." : "Come On In."}
          </h1>

          {mode === "login" && (
            <>
              <section className="flex flex-col gap-3">
                <input className="p-2 border-b-2 outline-none focus:border-blue-600" type="email" placeholder="Email" id="email" value={formData.email} onChange={handleChange} />
                <input className="p-2 border-b-2 outline-none focus:border-blue-600" type="password" placeholder="Password" id="password" value={formData.password} onChange={handleChange} />
              </section>
              <section className="flex flex-col gap-4">
                <button className="bg-slate-900 text-white rounded-full font-bold w-[60%] p-2 hover:bg-slate-800 transition disabled:opacity-50" onClick={handleLogin} disabled={loading}>
                  {loading ? "Logging in..." : "Log In"}
                </button>
                <button onClick={() => setMode("register")} className="text-left font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600">
                  Create an Account
                </button>
              </section>
            </>
          )}

          {mode === "register" && (
            <>
              <section className="flex flex-col gap-3">
                <input className="p-2 border-b-2 outline-none focus:border-blue-600" type="text" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input className="p-2 border-b-2 outline-none focus:border-blue-600" type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input className="p-2 border-b-2 outline-none focus:border-blue-600" type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
              </section>
              <section className="flex flex-col gap-4">
                <button className="bg-slate-900 text-white rounded-full font-bold w-[60%] p-2 hover:bg-slate-800 transition disabled:opacity-50" onClick={handleRegister} disabled={loading}>
                  {loading ? "Sending OTP..." : "Register"}
                </button>
                <button onClick={() => setMode("login")} className="text-left font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600">
                  Have an Account
                </button>
              </section>
            </>
          )}

          {mode === "verify" && (
            <>
              <p className="text-sm text-gray-600">
                Enter the 6-digit code sent to <span className="font-semibold">{formData.email}</span>
              </p>
              <section className="flex flex-col gap-3">
                <input
                  className="p-2 border-b-2 outline-none focus:border-blue-600 tracking-[0.5em] text-center text-xl"
                  type="text" inputMode="numeric" maxLength={6} placeholder="------"
                  value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                />
              </section>
              <section className="flex flex-col gap-4">
                <button className="bg-slate-900 text-white rounded-full font-bold w-[60%] p-2 hover:bg-slate-800 transition disabled:opacity-50" onClick={handleVerifyOtp} disabled={loading}>
                  {loading ? "Verifying..." : "Verify & Continue"}
                </button>
                <button onClick={handleResendOtp} disabled={loading} className="text-left text-sm text-gray-500 hover:underline">
                  Resend code
                </button>
                <button onClick={() => setMode("login")} className="text-left font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600">
                  ← Back to login
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