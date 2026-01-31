import React, { useState } from "react";

function LogRes() {
  const [reglog, setReglog] = useState("true");
  return (
    <main className="md:flex overflow-hidden">
      <div className="flex flex-1 justify-center items-center  ">
        <div className="flex flex-col gap-5 w-[55%]">
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
                  id="logname"
                />
                <input
                  className="p-2 border-b-2 "
                  type="password"
                  placeholder="password"
                  name=""
                  id="logpwd"
                />
              </section>
              <section className="flex flex-col gap-4">
                <button
                  className=" bg-slate-900 text-white rounded-full font-bold w-[60%] p-2"
                  type="submit"
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
                  id="regname"
                  placeholder="Name"
                />
                <input
                  className="p-2 border-b-2"
                  type="email"
                  id="regemail"
                  placeholder="Email address"
                />
                <input
                  className="p-2 border-b-2 "
                  type="password"
                  placeholder="Set password"
                  name=""
                  id="regpwd"
                />
              </section>
              <section className="flex flex-col gap-4">
                <button
                  className=" bg-slate-900 text-white rounded-full font-bold w-[60%] p-2"
                  type="submit"
                  id="regbtn"
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
      <div className="md:flex flex-1 hidden h-screen bg-blue-500 "></div>
    </main>
  );
}

export default LogRes;
