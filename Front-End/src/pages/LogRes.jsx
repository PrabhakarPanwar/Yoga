import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function LogRes() {
  const [reglog, setReglog] = useState(true);
  const [formData, setFormData] = useState({ pwd: "", name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = async () => {
    const res = await axios.post("http://localhost:8000/auth/register", formData);
    if (res.data.success) {
      toast.success("Registered! Please login.");
      setReglog(true);
    } else {
      toast.error(res.data.msg);
    }
  };

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:8000/auth/login", formData);
    if (res.data.success) {
      toast.success("Logged in!");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role",  res.data.role);
      localStorage.setItem("name",  res.data.name);
      setTimeout(() => {
        window.location.href = res.data.role === "admin" ? "/admin/dashboard" : "/";
      }, 1000);
    } else {
      toast.error(res.data.msg);
    }
  };

  return (
    <main className="md:flex flex-col md:flex-row overflow-hidden">
      <div className="flex z-10 flex-1 justify-center items-center h-screen">
        <div className="flex justify-center h-[80vh] sm:h-[45vh] flex-col gap-5 w-[55%]">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600 text-5xl">
            Come On In.
          </h1>

          {reglog ? (
            <>
              <section className="flex flex-col gap-3">
                <input className="p-2 border-b-2" type="email" placeholder="Email" id="email" onChange={handleChange} />
                <input className="p-2 border-b-2" type="password" placeholder="Password" id="pwd" onChange={handleChange} />
              </section>
              <section className="flex flex-col gap-4">
                <button className="bg-slate-900 text-white rounded-full font-bold w-[60%] p-2" onClick={handleLogin}>
                  Log In
                </button>
                <button onClick={() => setReglog(false)} className="text-left font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600">
                  Create an Account
                </button>
              </section>
            </>
          ) : (
            <>
              <section className="flex flex-col gap-3">
                <input className="p-2 border-b-2" type="text"     id="name"  placeholder="Name"     onChange={handleChange} />
                <input className="p-2 border-b-2" type="email"    id="email" placeholder="Email"    onChange={handleChange} />
                <input className="p-2 border-b-2" type="password" id="pwd"   placeholder="Password" onChange={handleChange} />
              </section>
              <section className="flex flex-col gap-4">
                <button className="bg-slate-900 text-white rounded-full font-bold w-[60%] p-2" onClick={handleRegister}>
                  Register
                </button>
                <button onClick={() => setReglog(true)} className="text-left font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600">
                  Have an Account
                </button>
              </section>
            </>
          )}
        </div>
      </div>
      <div className="md:flex hidden flex-1 h-screen">
        <img className="w-screen object-cover" src="/src/assets/logPose.jpg" alt="" />
      </div>
    </main>
  );
}

export default LogRes;