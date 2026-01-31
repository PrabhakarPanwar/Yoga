import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { assets } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <main className="flex justify-between p-5 mx-auto ">
        {open ? (
          // True Part
          <section className="md:hidden">
            <img
              className="cursor-pointer ml-[85%]"
              onClick={()=>setOpen(!open)}
              src={assets.cancel}
              alt=""
            />
            <div className="w-[100vw] ">
              <div className="text-xl gap-4 w-fit mx-auto">
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
        <div className="md:flex text-xl gap-4 hidden">
          <NavLink to="/reglog">Login</NavLink>
        </div>
      </main>
    </nav>
  );
}

export default Navbar;
