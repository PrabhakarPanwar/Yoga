import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function LogRes() {
  const [reglog, setReglog] = useState(true);
  const [formData, setFormData] = useState({ pwd: "", name: "", email: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleRegister = async () => {
    let res = await axios.post("http://localhost:8000/register", formData)
    // console.log(res)
    if (res.data.success) {
      toast.success("User Id created")
      setTimeout(() => {
        window.location.href = "http://localhost:5173/reglog"
      }, 1000)
    }
  }

  const handleLogin = async () => {
    let res = await axios.post("http://localhost:8000/login", formData)
    if (res.data.success) {
      toast.success("Successfully Login")
      setTimeout(() => {
        window.location.href = "http://localhost:5173/",
          window.localStorage.setItem("token", res.data.token)
      }, 2000)
    }
    if (!res.data.success) {
      toast.error(res.data.msg)
    }
  }




  return (
    <main className="md:flex flex-col md:flex-row overflow-hidden">
      <div className="flex z-10 flex-1 justify-center items-center  h-screen">
        <div className="flex justify-center h-[80vh] sm:h-[45vh] flex-col gap-5 w-[55%]">
          <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-red-600 text-5xl ">
            Come On In.
          </h1>

          {reglog ? (
            <>
              <section className="flex flex-col gap-3">
                <input
                  className="p-2 border-b-2"
                  type="email"
                  placeholder="Username"
                  id="email"
                  onChange={handleChange}
                />
                <input
                  className="p-2 border-b-2 "
                  type="password"
                  placeholder="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </section>
              <section className="flex flex-col gap-4">
                <button
                  className=" bg-slate-900 text-white rounded-full font-bold w-[60%] p-2"
                  type="submit"
                  id="btn"
                  onClick={handleLogin}
                >
                  Log In
                </button>
                <button
                  onClick={() => setReglog(!reglog)}
                  className="md:w-[50%] w-[100%] bg-gradient-to-r bg-clip-text text-transparent text-left font-bold from-blue-600 to-red-600"
                >
                  Create an Account
                </button>
              </section>
            </>
          ) : (
            <>
              <section className="flex flex-col gap-3">
                <input
                  className="p-2 border-b-2"
                  type="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                />
                <input
                  className="p-2 border-b-2"
                  type="email"
                  id="email"
                  placeholder="Email address"
                  onChange={handleChange}
                />
                <input
                  className="p-2 border-b-2 "
                  type="password"
                  placeholder="Set password"
                  id="pwd"
                  onChange={handleChange}
                />
              </section>
              <section className="flex flex-col gap-4">
                <button
                  className=" bg-slate-900 text-white rounded-full font-bold w-[60%] p-2"
                  type="submit"
                  id="btn"
                  onClick={handleRegister}
                >
                  Register
                </button>
                <button
                  onClick={() => setReglog(!reglog)}
                  className="w-[100%] bg-gradient-to-r bg-clip-text text-transparent text-left font-bold from-blue-600 to-red-600"
                >
                  Have an Account
                </button>
              </section>
            </>
          )}
        </div>
      </div>
      <div className="md:flex hidden md:absolute lg:static flex-1 h-screen ">
        <img className="w-screen"
          src="\src\assets\logPose.jpg"
          alt=""
        />
      </div>
    </main>
  );
}

export default LogRes;
