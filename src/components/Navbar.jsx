import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <section className="flex justify-between p-5 mx-auto">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex text-xl gap-4">
          <NavLink to="/">
            Home <hr />
          </NavLink>
          <NavLink to="/teacher">
            Teachers
            <hr />
          </NavLink>
          <NavLink to="/magazine">
            Magazine <hr />
          </NavLink>
          <NavLink to="/academy">
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
          <NavLink to="/reglog">Login</NavLink>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
