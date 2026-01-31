import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { assets } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <main className="flex justify-between items-center p-3 mx-auto ">
        {open ? (
          // True Part
          <section className="md:hidden">
            <img
              className="cursor-pointer ml-[85%]"
              onClick={() => setOpen(!open)}
              src={assets.cancel}
              alt=""
            />
            <div className="w-[100vw] text-center ">
              <div className="gap-4 w-min mx-auto">
                <NavLink to="/">
                  <h3>Home</h3>
                  <hr />
                </NavLink>
                <NavLink to="/teacher">
                  <h3>Teachers</h3> <hr />
                </NavLink>
                <NavLink to="/magazine">
                  <h3>Magazine</h3> <hr />
                </NavLink>
                <NavLink to="/academy">
                  <h3>Academy</h3> <hr />
                </NavLink>
                <NavLink to="/reglog">
                  <h3>Login</h3> <hr />
                </NavLink>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* False Part */}
            <div>
              <h3>Logo</h3>
            </div>
            <img
              className="cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
              src={assets.menu}
              alt=""
            />
          </>
        )}
        {/* Hamburger End */}

        <div className="md:flex text-xl gap-4 hidden">
          <NavLink to="/">
            <h3>Home</h3>
            <hr />
          </NavLink>
          <NavLink to="/teacher">
            <h3>Teachers</h3> <hr />
          </NavLink>
          <NavLink to="/magazine">
            <h3>Magazine</h3> <hr />
          </NavLink>
          <NavLink to="/academy">
            <h3>Academy</h3> <hr />
          </NavLink>
        </div>
        <div className="md:flex text-xl gap-4 hidden">
          <NavLink to="/reglog">
            <h3>Login</h3>
          </NavLink>
        </div>
      </main>
    </nav>
  );
}

export default Navbar;
