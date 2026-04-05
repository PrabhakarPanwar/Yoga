import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { assets } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [logOut, setlogOut] = useState(true);

  function logout() {
    localStorage.removeItem("token")
    window.location.href = "/reglog"
  }

  return (
    <nav >
      <main className="flex justify-between items-center p-2 ">
        <NavLink to="/">
          <h3>Logo</h3>
        </NavLink>
        <section className="md:hidden flex flex-col items-end z-10 absolute top-2 right-2">
          <img
            className="h-7 w-7 transition-transform cursor-pointer active:scale-[1.1] invert"
            onClick={() => setOpen(!open)}
            src={open ? `${assets.cancel}` : `${assets.menu}`}
            alt=""
          />
          <div className={open ? "h-52 hamburgerAnimation" : " hamburgerAnimation h-0 invisible"}>
            <NavLink to="/">
              <h3>Home</h3>
              <hr />
            </NavLink>
            <NavLink to="/teacher">
              <h3>Teachers</h3> <hr />
            </NavLink>
            <NavLink to="/YogaRetreat"><h3>YogaRetreat</h3><hr /></NavLink>
            <NavLink to="/magazine">
              <h3>Magazine</h3> <hr />
            </NavLink>
            <NavLink to="/academy">
              <h3>Academy</h3> <hr />
            </NavLink>
            <NavLink to="/about">
              <h3>About</h3>
            </NavLink>
            {logOut ? (
              <NavLink onClick={() => setlogOut(!logOut)} to="/reglog">
                <h3>Login</h3> <hr />
              </NavLink>) :
              (<NavLink onClick={logout}>
                <h3>Logout</h3> <hr />
              </NavLink>)
            }
          </div>
        </section>
        {/* Hamburger End */}

        <div className="md:flex text-xl gap-4 hidden">
          <NavLink to="/">
            <h3>Home</h3>
            <hr />
          </NavLink>
          <NavLink to="/teacher">
            <h3>Teachers</h3> <hr />
          </NavLink>
          <NavLink to="/YogaRetreat"><h3>YogaRetreat</h3><hr /></NavLink>
          <NavLink to="/magazine">
            <h3>Magazine</h3> <hr />
          </NavLink>
          <NavLink to="/academy">
            <h3>Academy</h3> <hr />
          </NavLink>
          <NavLink to= "/about">
           <h3>About</h3>
          </NavLink>
        </div>
        <div className="md:flex text-xl gap-4 hidden">
          {logOut ? (
            <NavLink onClick={() => setlogOut(!logOut)} to="/reglog">
              <h3>Login</h3> <hr />
            </NavLink>) :
            (<NavLink onClick={logout}>
              <h3>Logout</h3> <hr />
            </NavLink>)
          }
        </div>
      </main>
    </nav>
  );
}

export default Navbar;
