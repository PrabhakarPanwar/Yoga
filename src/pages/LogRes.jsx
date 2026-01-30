import React, { useState } from "react";

function LogRes() {
  const [reglog, setReglog] = useState("true");
  return (
    <main className="flex">
      <div className="flex flex-1 justify-center items-center h-[90vh] ">
        <div className="flex flex-col gap-5 w-[55%]">
          <section className="bg-gradient-to-r bg-clip-text text-transparent font-bold from-blue-600 to-red-600 text-5xl">
            Come On In.
          </section>

          {reglog ? (
            <section className="flex flex-col gap-3">
              <input
                className="p-2 border-b-2"
                type="email"
                placeholder="Username"
              />
              <input
                className="p-2 border-b-2 "
                type="password"
                placeholder="password"
                name=""
                id=""
              />
            </section>
          ) : (
            <section className="flex flex-col gap-3">
              <input
                className="p-2 border-b-2"
                type="name"
                placeholder="Name"
              />
              <input
                className="p-2 border-b-2"
                type="email"
                placeholder="Email address"
              />
              <input
                className="p-2 border-b-2 "
                type="password"
                placeholder="Set password"
                name=""
                id=""
              />
            </section>
          )}
          <section className="flex flex-col gap-4">
            <button
              className=" bg-slate-900 text-white rounded-full font-bold w-[60%] p-2"
              type="submit"
            >
              {reglog ? "Login" : "Register"}
            </button>
            <button className="w-[40%] bg-gradient-to-r bg-clip-text text-transparent font-bold from-blue-600 to-red-600" onClick={() => setReglog(!reglog)}>
              {reglog ? "Create an Account" : "Have an Account !"}
            </button>
          </section>
        </div>
      </div>
      <div className="flex-1 h-[90vh] bg-blue-500 ">

        
      </div>
    </main>
  );
}

export default LogRes;
