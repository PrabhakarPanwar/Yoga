import React, { useContext, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import {
  FaUser,
  FaLaptop,
  FaBuilding,
  FaUsers,
  FaHeartbeat,
  FaChild,
  FaWhatsapp,
} from "react-icons/fa";

// ── Yoga Programs Data (same 6 from Hero) ──────────────────────────────────
const YOGA_PROGRAMS = [
  {
    title: "Personal Yoga",
    desc: "One-on-one tailored sessions",
    icon: <FaUser />,
    slug: "personal-yoga",
  },
  {
    title: "Online Yoga",
    desc: "Live sessions from anywhere",
    icon: <FaLaptop />,
    slug: "online-yoga",
  },
  {
    title: "Corporate Yoga",
    desc: "Workplace wellness programs",
    icon: <FaBuilding />,
    slug: "corporate-yoga",
  },
  {
    title: "Group Yoga",
    desc: "Warm group practice setting",
    icon: <FaUsers />,
    slug: "group-yoga",
  },
  {
    title: "Therapeutic Yoga",
    desc: "Healing & recovery sequences",
    icon: <FaHeartbeat />,
    slug: "therapeutic-yoga",
  },
  {
    title: "Kids Yoga",
    desc: "Joyful yoga for children",
    icon: <FaChild />,
    slug: "kids-yoga",
  },
];

// ── WhatsApp config ────────────────────────────────────────────────────────
const WA_NUMBER = "919548648227";
const WA_MSG = encodeURIComponent(
  "Hello Shubham, I am messaging you from Shubh Yog Shala and I am interested in yoga learning."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

function Navbar() {
  const { assets } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [logOut, setlogOut] = useState(true);
  const [programsOpen, setProgramsOpen] = useState(false); // mobile programs accordion
  const hoverTimeout = useRef(null);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/reglog";
  }

  const handleClose = () => {
    setOpen(false);
    setProgramsOpen(false);
  };

  // Desktop hover handlers with small delay to avoid flicker
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setProgramsOpen(true);
  };
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setProgramsOpen(false), 150);
  };

  return (
    <>
      {/* ── MAIN NAV ─────────────────────────────────────────────────────── */}
      <nav className="w-full bg-black/40 backdrop-blur-md fixed top-0 left-0 z-50 text-white">
        <main className="flex justify-between items-center px-4 md:px-10 py-3 relative">

          {/* LOGO */}
          <NavLink to="/" onClick={handleClose}>
            <h3 className="text-lg md:text-xl font-semibold tracking-wider">
              Logo
            </h3>
          </NavLink>

          {/* ── MOBILE MENU ─────────────────────────────────────────────── */}
          <section className="md:hidden flex flex-col items-end z-50 absolute top-3 right-4">
            <img
              className="h-7 w-7 transition-transform duration-300 cursor-pointer active:scale-110 invert"
              onClick={() => setOpen(!open)}
              src={open ? `${assets.cancel}` : `${assets.menu}`}
              alt="menu"
            />

            <div
              className={`${
                open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out bg-black/90 backdrop-blur-lg rounded-xl mt-3 w-56 p-4 space-y-2`}
            >
              <NavLink to="/" onClick={handleClose}>
                <h3 className="py-1">Home</h3>
                <hr className="border-white/20" />
              </NavLink>

              {/* Programs accordion in mobile */}
              <div>
                <button
                  className="flex justify-between items-center w-full py-1 text-left"
                  onClick={() => setProgramsOpen(!programsOpen)}
                >
                  <h3>Yoga Programs</h3>
                  <span className="text-xs ml-2">{programsOpen ? "▲" : "▼"}</span>
                </button>
                <hr className="border-white/20" />

                <div
                  className={`${
                    programsOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden transition-all duration-300`}
                >
                  {YOGA_PROGRAMS.map((p) => (
                    <NavLink
                      key={p.slug}
                      to={`/yoga-programs/${p.slug}`}
                      onClick={handleClose}
                      className="flex items-center gap-2 py-2 px-2 text-sm text-[#f5c98a] hover:text-white transition"
                    >
                      <span className="text-xs">{p.icon}</span>
                      {p.title}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink to="/YogaRetreat" onClick={handleClose}>
                <h3 className="py-1">Yoga Retreat</h3>
                <hr className="border-white/20" />
              </NavLink>

              <NavLink to="/about" onClick={handleClose}>
                <h3 className="py-1">About</h3>
                <hr className="border-white/20" />
              </NavLink>

              {logOut ? (
                <NavLink
                  onClick={() => { setlogOut(!logOut); handleClose(); }}
                  to="/reglog"
                >
                  <h3 className="py-1">Login</h3>
                  <hr className="border-white/20" />
                </NavLink>
              ) : (
                <button onClick={() => { logout(); handleClose(); }} className="w-full text-left">
                  <h3 className="py-1">Logout</h3>
                  <hr className="border-white/20" />
                </button>
              )}
            </div>
          </section>

          {/* ── DESKTOP MENU ────────────────────────────────────────────── */}
          <div className="md:flex text-lg gap-6 hidden items-center">
            <NavLink to="/">
              <h3 className="hover:text-orange-300 transition">Home</h3>
            </NavLink>

            {/* Programs with hover dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="hover:text-orange-300 transition cursor-pointer flex items-center gap-1">
                Yoga Programs
                <span className="text-xs">▾</span>
              </h3>

              {/* DROPDOWN */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-[#1a0e05]/95 backdrop-blur-xl border border-[#c8763a]/30 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-3 transition-all duration-300 ${
                  programsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* Small arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a0e05] border-l border-t border-[#c8763a]/30 rotate-45" />

                {YOGA_PROGRAMS.map((p) => (
                  <NavLink
                    key={p.slug}
                    to={`/yoga-programs/${p.slug}`}
                    onClick={() => setProgramsOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#c8763a]/20 transition group"
                  >
                    <span className="text-[#c8763a] text-base mt-0.5 group-hover:scale-110 transition-transform">
                      {p.icon}
                    </span>
                    <div>
                      <p className="text-white text-sm font-medium leading-tight">
                        {p.title}
                      </p>
                      <p className="text-white/50 text-xs mt-0.5">{p.desc}</p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/YogaRetreat">
              <h3 className="hover:text-orange-300 transition">Yoga Retreat</h3>
            </NavLink>

            <NavLink to="/about">
              <h3 className="hover:text-orange-300 transition">About</h3>
            </NavLink>
          </div>

          {/* LOGIN / LOGOUT (DESKTOP) */}
          <div className="md:flex text-lg gap-4 hidden">
            {logOut ? (
              <NavLink onClick={() => setlogOut(!logOut)} to="/reglog">
                <h3 className="hover:text-orange-300 transition">Login</h3>
              </NavLink>
            ) : (
              <button onClick={logout}>
                <h3 className="hover:text-orange-300 transition">Logout</h3>
              </button>
            )}
          </div>
        </main>
      </nav>

      {/* ── WHATSAPP FLOATING BUTTON ──────────────────────────────────────── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
        style={{ backgroundColor: "#25D366" }}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl" />
        {/* Pulse ring */}
        <span
          className="absolute inline-flex w-full h-full rounded-full opacity-50 animate-ping"
          style={{ backgroundColor: "#25D366" }}
        />
      </a>
    </>
  );
}

export default Navbar;