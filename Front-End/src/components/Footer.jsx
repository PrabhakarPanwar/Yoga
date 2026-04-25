import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const SOCIAL = [
  { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: FaWhatsapp,  href: "https://wa.me/919548648227", label: "WhatsApp" },
  { Icon: FaYoutube,   href: "https://youtube.com", label: "YouTube" },
  { Icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { Icon: SiGmail,      href: "mailto:hello@shubhamyoga.com", label: "Gmail" },
];

const NAV_LINKS = [
  { label: "Home",      to: "/" },
  { label: "About",     to: "/about" },
  { label: "Programs",  to: "/yoga-programs/personal-yoga" },
  { label: "Schedule",  to: "/schedule" },
  { label: "Contact",   to: "/contact" },
];

const PROGRAMS = [
  "Personal Yoga",
  "Online Yoga",
  "Corporate Yoga",
  "Group Yoga",
  "Therapeutic Yoga",
  "Kids Yoga",
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0d1f1c 0%, #1a3530 50%, #0d1f1c 100%)",
        color: "#e8ded4",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* ── TOP STRIP ── */}
      <div
        style={{
          borderBottom: "1px solid rgba(200,118,58,0.25)",
          padding: "2rem 1.5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#c8763a", margin: 0 }}>
          SHUBH YOG SHALA
        </p>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
            fontWeight: 300,
            margin: 0,
            color: "#f5ede3",
            lineHeight: 1.2,
          }}
        >
          Begin Your Journey
          <br />
          <span style={{ fontStyle: "italic", color: "#c8763a" }}>with One Breath</span>
        </h2>
        <NavLink
          to="/reglog"
          style={{
            display: "inline-block",
            border: "1px solid #c8763a",
            color: "#c8763a",
            padding: "0.6rem 2rem",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textDecoration: "none",
            transition: "all 0.3s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#c8763a";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#c8763a";
          }}
        >
          BOOK A FREE CLASS
        </NavLink>
      </div>

      {/* ── MAIN GRID ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Brand */}
        <div style={{ gridColumn: "span 1" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1rem" }}>
            <span style={{ fontSize: "20px" }}>🕉️</span>
            <div>
              <p style={{ margin: 0, fontSize: "14px", letterSpacing: "0.15em", color: "#f5ede3" }}>
                SHUBH YOG SHALA
              </p>
              <p style={{ margin: 0, fontSize: "10px", color: "#c8a882", letterSpacing: "0.2em" }}>
                with Shubham Pundir
              </p>
            </div>
          </div>

          <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#a89885", margin: "0 0 1.25rem" }}>
            Yoga is a journey back to yourself — through breath, movement, and stillness.
            Founded in 2022 by Shubham Pundir, M.Sc. Yoga Science.
          </p>

          {/* Social */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(200,118,58,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c8a882",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "all 0.25s",
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#c8763a";
                  e.currentTarget.style.color = "#c8763a";
                  e.currentTarget.style.background = "rgba(200,118,58,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(200,118,58,0.4)";
                  e.currentTarget.style.color = "#c8a882";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "#c8763a",
              margin: "0 0 1rem",
              fontWeight: 400,
              fontFamily: "'Georgia', serif",
            }}
          >
            EXPLORE
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  style={{ color: "#a89885", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f5ede3")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#a89885")}
                >
                  <span style={{ color: "#c8763a", fontSize: "10px" }}>—</span> {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "#c8763a",
              margin: "0 0 1rem",
              fontWeight: 400,
            }}
          >
            PROGRAMS
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {PROGRAMS.map(p => (
              <li key={p} style={{ color: "#a89885", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "#c8763a", fontSize: "10px" }}>—</span> {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            style={{
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "#c8763a",
              margin: "0 0 1rem",
              fontWeight: 400,
            }}
          >
            VISIT & CONTACT
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                Icon: FaLocationDot,
                content: (
                  <>
                    Shubh Yog Shala<br />
                    Near Your Studio Address,<br />
                    India
                  </>
                ),
              },
              { Icon: FaPhone, content: "+91 95486 48227" },
              { Icon: SiGmail, content: "hello@shubhamyoga.com" },
            ].map(({ Icon, content }, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Icon style={{ color: "#c8763a", marginTop: "3px", flexShrink: 0, fontSize: "14px" }} />
                <p style={{ margin: 0, fontSize: "13px", color: "#a89885", lineHeight: 1.6 }}>
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DIVIDER WITH MANTRA ── */}
      <div
        style={{
          borderTop: "1px solid rgba(200,118,58,0.2)",
          margin: "0 1.5rem",
          padding: "1.25rem 0",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "12px", fontStyle: "italic", color: "#c8763a", letterSpacing: "0.05em" }}>
          "Yoga is not about touching your toes. It is about what you learn on the way down."
        </p>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1rem 1.5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <p style={{ margin: 0, fontSize: "11px", color: "#6b5a4e" }}>
          © 2026 Shubh Yog Shala. All Rights Reserved.
        </p>
        <p style={{ margin: 0, fontSize: "11px", color: "#6b5a4e" }}>
          Founded by Shubham Pundir · M.Sc. Yoga Science
        </p>
      </div>
    </footer>
  );
}