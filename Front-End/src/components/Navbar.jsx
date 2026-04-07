import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { assets } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [logOut, setlogOut] = useState(true);

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/reglog";
  }

  // 🔥 CLOSE MENU FUNCTION
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="w-full bg-black/40 backdrop-blur-md fixed top-0 left-0 z-50 text-white">
      <main className="flex justify-between items-center px-4 md:px-10 py-3 relative">

        {/* LOGO */}
        <NavLink to="/" onClick={handleClose}>
          <h3 className="text-lg md:text-xl font-semibold tracking-wider">
            Logo
          </h3>
        </NavLink>

        {/* 🔥 MOBILE MENU */}
        <section className="md:hidden flex flex-col items-end z-50 absolute top-3 right-4">
          <img
            className="h-7 w-7 transition-transform duration-300 cursor-pointer active:scale-110 invert"
            onClick={() => setOpen(!open)}
            src={open ? `${assets.cancel}` : `${assets.menu}`}
            alt="menu"
          />

          {/* MENU BOX */}
          <div
            className={`${
              open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden transition-all duration-500 ease-in-out bg-black/90 backdrop-blur-lg rounded-xl mt-3 w-48 p-4 space-y-2`}
          >
            <NavLink to="/" onClick={handleClose}>
              <h3>Home</h3>
              <hr />
            </NavLink>

            <NavLink to="/teacher" onClick={handleClose}>
              <h3>Teachers</h3>
              <hr />
            </NavLink>

            <NavLink to="/YogaRetreat" onClick={handleClose}>
              <h3>YogaRetreat</h3>
              <hr />
            </NavLink>

            <NavLink to="/magazine" onClick={handleClose}>
              <h3>Magazine</h3>
              <hr />
            </NavLink>

            <NavLink to="/academy" onClick={handleClose}>
              <h3>Academy</h3>
              <hr />
            </NavLink>

            <NavLink to="/about" onClick={handleClose}>
              <h3>About</h3>
            </NavLink>

            {logOut ? (
              <NavLink
                onClick={() => {
                  setlogOut(!logOut);
                  handleClose();
                }}
                to="/reglog"
              >
                <h3>Login</h3>
                <hr />
              </NavLink>
            ) : (
              <NavLink
                onClick={() => {
                  logout();
                  handleClose();
                }}
              >
                <h3>Logout</h3>
                <hr />
              </NavLink>
            )}
          </div>
        </section>

        {/* 🔥 DESKTOP MENU */}
        <div className="md:flex text-lg gap-6 hidden items-center">
          <NavLink to="/">
            <h3 className="hover:text-orange-300 transition">Home</h3>
          </NavLink>

          <NavLink to="/teacher">
            <h3 className="hover:text-orange-300 transition">Teachers</h3>
          </NavLink>

          <NavLink to="/YogaRetreat">
            <h3 className="hover:text-orange-300 transition">YogaRetreat</h3>
          </NavLink>

          <NavLink to="/magazine">
            <h3 className="hover:text-orange-300 transition">Magazine</h3>
          </NavLink>

          <NavLink to="/academy">
            <h3 className="hover:text-orange-300 transition">Academy</h3>
          </NavLink>

          <NavLink to="/about">
            <h3 className="hover:text-orange-300 transition">About</h3>
          </NavLink>
        </div>

        {/* 🔥 LOGIN / LOGOUT (DESKTOP) */}
        <div className="md:flex text-lg gap-4 hidden">
          {logOut ? (
            <NavLink onClick={() => setlogOut(!logOut)} to="/reglog">
              <h3 className="hover:text-orange-300 transition">Login</h3>
            </NavLink>
          ) : (
            <NavLink onClick={logout}>
              <h3 className="hover:text-orange-300 transition">Logout</h3>
            </NavLink>
          )}
        </div>

      </main>
    </nav>
  );
}

export default Navbar;
