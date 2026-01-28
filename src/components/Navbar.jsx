import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <main>
      <section className="flex justify-between px-5 w-[85%] mx-auto">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex text-xl gap-4">
          <NavLink to="/classes">
            {" "}
            Classes <hr />
          </NavLink>
          <NavLink to="/teacher">
            {" "}
            Teachers
            <hr />
          </NavLink>
          <NavLink to="magzine">
            {" "}
            Magzine <hr />
          </NavLink>
          <NavLink to="academy">
            {" "}
            Academy <hr />
          </NavLink>
        </div>
        <div className="flex text-xl gap-4">
          <select name="" id="">
            <option className="text-sm" value="">
              English
            </option>
            <option className="text-sm " value="">
              Hindi
            </option>
          </select>
          <button>Login</button>
        </div>
      </section>
    </main>
  );
}

export default Navbar;
