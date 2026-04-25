import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube, FaWhatsapp, FaGraduationCap, FaHeart, FaUsers } from "react-icons/fa";
import { shubhPic } from "../assets/product";

// ── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { number: "7+",   label: "Years Teaching"     },
  { number: "500+", label: "Lives Transformed"  },
  { number: "6",    label: "Programs Offered"    },
  { number: "2022", label: "Shala Founded"      },
];

const QUALIFICATIONS = [
  {
    icon: <FaGraduationCap />,
    degree: "B.Sc. in Yoga Science",
    detail: "Foundation in classical yoga theory, anatomy, and philosophy",
  },
  {
    icon: <FaGraduationCap />,
    degree: "M.Sc. in Yoga Science",
    detail: "Advanced study in therapeutic yoga, pranayama, and research methodology",
  },
  {
    icon: <FaHeart />,
    degree: "7+ Years of Teaching",
    detail: "Hands-on experience with students across all levels and backgrounds",
  },
  {
    icon: <FaUsers />,
    degree: "Founded Shubh Yog Shala",
    detail: "April 2022 — a space built on the belief that yoga is a way of life",
  },
];

const VALUES = [
  {
    emoji: "🧘",
    title: "Mindfulness",
    desc: "Every session at Shubh Yog Shala begins with intention and breath. Shubham teaches yoga not as exercise but as a dialogue between the self and stillness.",
  },
  {
    emoji: "🌿",
    title: "Authenticity",
    desc: "Yoga is taught here as an ancient science — not a trend. Each class is rooted in classical principles, adapted with care for the modern practitioner.",
  },
  {
    emoji: "💪",
    title: "Transformation",
    desc: "Whether healing, growing, or simply beginning — every student is welcomed exactly as they are. Progress, not perfection, is what we celebrate.",
  },
  {
    emoji: "🔥",
    title: "Awareness",
    desc: "Transformation begins with a single breath taken with full awareness. That is the seed from which every practice at Shubh Yog Shala grows.",
  },
];

const PROGRAMS = [
  { label: "Personal Yoga",    slug: "personal-yoga"     },
  { label: "Online Yoga",       slug: "online-yoga"       },
  { label: "Corporate Yoga",    slug: "corporate-yoga"    },
  { label: "Group Yoga",        slug: "group-yoga"        },
  { label: "Therapeutic Yoga",  slug: "therapeutic-yoga"  },
  { label: "Kids Yoga",         slug: "kids-yoga"         },
];

const TIMELINE = [
  { year: "2015", event: "Began personal yoga practice to build strength and core stability" },
  { year: "2018", event: "Completed B.Sc. in Yoga Science — began teaching formally" },
  { year: "2021", event: "Completed M.Sc. in Yoga Science with focus on therapeutic practice" },
  { year: "2022", event: "Founded Shubh Yog Shala in April — a shala for every kind of seeker" },
  { year: "2024", event: "500+ students guided across personal, group, corporate, and kids programs" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

const SectionLabel = ({ text }) => (
  <p style={{
    fontSize: "10px",
    letterSpacing: "0.4em",
    color: "#c8763a",
    textTransform: "uppercase",
    marginBottom: "0.5rem",
    fontFamily: "'Georgia', serif",
  }}>
    {text}
  </p>
);

const SectionHeading = ({ children }) => (
  <h2 style={{
    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
    fontWeight: 300,
    color: "#3b2a1a",
    lineHeight: 1.25,
    marginBottom: "1.5rem",
    fontFamily: "'Georgia', serif",
  }}>
    {children}
  </h2>
);

// ── Main Component ────────────────────────────────────────────────────────────

const About = () => {
  const [hoveredProgram, setHoveredProgram] = useState(null);

  return (
    <div style={{ width: "100%", fontFamily: "'Georgia', 'Times New Roman', serif", color: "#3b2a1a", marginTop: "20px" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", width: "92%", margin: "0 auto", borderRadius: "20px", overflow: "hidden" }}>
        <img
          src={shubhPic[4]}
          alt="Shubham Pundir"
          style={{ width: "100%", height: "clamp(320px, 65vh, 600px)", objectFit: "cover", objectPosition: "center 70%", display: "block" }}
        />
        {/* Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(20,10,3,0.85) 0%, rgba(20,10,3,0.3) 50%, transparent 100%)",
        }} />

        {/* Hero text */}
        <div style={{ position: "absolute", bottom: "2rem", left: "2rem", color: "#fff" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "rgba(245,201,138,0.8)", marginBottom: "0.5rem", textTransform: "uppercase" }}>
            The Man Behind the Mat
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 300, margin: "0 0 0.4rem", lineHeight: 1.1 }}>
            Shubham{" "}
            <span style={{ fontStyle: "italic", color: "#f5c98a" }}>Pundir</span>
          </h1>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: 0, letterSpacing: "0.1em" }}>
            Founder · Shubh Yog Shala · M.Sc. Yoga Science · 7+ Years Teaching
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2rem", right: "2rem", color: "#f5c98a", fontSize: "22px", animation: "bounce 1.5s infinite" }}>
          ↓
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#3b2a1a", padding: "2.5rem 1rem" }}>
        <div style={{
          maxWidth: "900px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px", background: "rgba(200,118,58,0.2)",
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "1.5rem 1rem", background: "#3b2a1a" }}>
              <p style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", fontWeight: 700, color: "#c8763a", margin: 0 }}>{s.number}</p>
              <p style={{ fontSize: "10px", color: "#c8a882", letterSpacing: "0.25em", textTransform: "uppercase", marginTop: "0.25rem" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section style={{ background: "#fdf8f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "center" }}>

          {/* Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", height: "clamp(320px, 55vh, 520px)",
              borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 60px rgba(59,42,26,0.2)",
            }}>
              <img
                src={shubhPic[5]}
                alt="Shubham practicing"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
              />
            </div>
            {/* Badge */}
            <div style={{
              position: "absolute", bottom: "-1.2rem", right: "1.2rem",
              background: "#c8763a", color: "#fff",
              borderRadius: "12px", padding: "0.8rem 1.2rem",
              textAlign: "center", boxShadow: "0 8px 24px rgba(200,118,58,0.4)",
            }}>
              <p style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>7+</p>
              <p style={{ fontSize: "10px", letterSpacing: "0.1em", margin: 0 }}>Years Teaching</p>
            </div>
          </div>

          {/* Text */}
          <div style={{ paddingBottom: "1rem" }}>
            <SectionLabel text="My Story" />
            <SectionHeading>
              Hi, I'm{" "}
              <span style={{ fontStyle: "italic", color: "#c8763a" }}>Shubham Pundir</span>
            </SectionHeading>

            <p style={{ color: "#5a3e2b", lineHeight: 1.9, marginBottom: "1.2rem", fontSize: "15px" }}>
              I first came to yoga seeking strength — my body was naturally flexible but lacked the muscular foundation to explore it safely. What began as a physical pursuit became something far deeper. Yoga stopped feeling like exercise and started feeling like a conversation with myself.
            </p>
            <p style={{ color: "#5a3e2b", lineHeight: 1.9, marginBottom: "1.2rem", fontSize: "15px" }}>
              Holding a B.Sc. and M.Sc. in Yoga Science, I bring both academic grounding and lived experience to every class. I don't teach postures — I teach awareness. Every asana is an opportunity to listen to your body, quiet your mind, and grow from the inside out.
            </p>
            <p style={{ color: "#5a3e2b", lineHeight: 1.9, marginBottom: "2rem", fontSize: "15px" }}>
              In April 2022, I founded <strong style={{ color: "#3b2a1a" }}>Shubh Yog Shala</strong> — born from the conviction that yoga is not a trend, it is a way of life. Whether you're a complete beginner, a professional seeking calm, or someone healing through therapeutic practice — you are welcome here, exactly as you are.
            </p>

            {/* Qualification pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["B.Sc. Yoga Science", "M.Sc. Yoga Science", "Founded April 2022", "7+ Years Experience"].map((q, i) => (
                <span key={i} style={{
                  fontSize: "11px", background: "#f5e8d8", color: "#7a4f2a",
                  padding: "5px 12px", borderRadius: "999px", letterSpacing: "0.05em",
                }}>
                  {q}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ── */}
      <section style={{ background: "#c8763a", padding: "4rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "rgba(255,255,255,0.6)", marginBottom: "1rem", textTransform: "uppercase" }}>
          The Philosophy at Shubh Yog Shala
        </p>
        <blockquote style={{
          fontSize: "clamp(1.2rem, 3.5vw, 2rem)",
          fontStyle: "italic",
          fontWeight: 300,
          color: "#fff",
          maxWidth: "700px",
          margin: "0 auto 1rem",
          lineHeight: 1.5,
        }}>
          "Yoga is not about touching your toes. It is about what you learn on the way down."
        </blockquote>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>— Shubham Pundir</p>
      </section>

      {/* ── QUALIFICATIONS / TIMELINE ── */}
      <section style={{ background: "#fdf8f2", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionLabel text="Education & Journey" />
          <SectionHeading>The Path That <span style={{ fontStyle: "italic", color: "#c8763a" }}>Shaped the Teacher</span></SectionHeading>

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: "1.5rem", borderLeft: "2px solid rgba(200,118,58,0.25)", display: "flex", flexDirection: "column", gap: "2rem" }}>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ position: "relative" }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: "-2.1rem", top: "4px",
                  width: "16px", height: "16px", borderRadius: "50%",
                  background: "#c8763a", border: "3px solid #fdf8f2",
                  boxShadow: "0 0 0 2px #c8763a",
                }} />
                <p style={{ fontSize: "11px", color: "#c8763a", letterSpacing: "0.2em", marginBottom: "0.3rem" }}>{item.year}</p>
                <p style={{ fontSize: "14px", color: "#5a3e2b", lineHeight: 1.6, margin: 0 }}>{item.event}</p>
              </div>
            ))}
          </div>

          {/* Qualification cards */}
          <div style={{
            marginTop: "4rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}>
            {QUALIFICATIONS.map((q, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #e8d5c0",
                borderRadius: "16px",
                padding: "1.25rem",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}>
                <span style={{ color: "#c8763a", fontSize: "18px", marginTop: "2px", flexShrink: 0 }}>{q.icon}</span>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "13px", color: "#3b2a1a", margin: "0 0 4px" }}>{q.degree}</p>
                  <p style={{ fontSize: "12px", color: "#7a6352", lineHeight: 1.6, margin: 0 }}>{q.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: "#3b2a1a", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <SectionLabel text="What I Believe In" />
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 300, color: "#f5ede3", marginBottom: "3rem", fontFamily: "'Georgia', serif" }}>
            My Practice <span style={{ fontStyle: "italic", color: "#f5c98a" }}>Philosophy</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1.25rem" }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(200,118,58,0.2)",
                borderRadius: "16px",
                padding: "2rem 1.5rem",
                textAlign: "left",
              }}>
                <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>{v.emoji}</p>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#f5c98a", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ fontSize: "13px", color: "#a89885", lineHeight: 1.8, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section style={{ background: "#fdf8f2", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <SectionLabel text="What Shubham Offers" />
          <SectionHeading>6 Programs, <span style={{ fontStyle: "italic", color: "#c8763a" }}>One Purpose</span></SectionHeading>
          <p style={{ fontSize: "14px", color: "#7a6352", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            Each program is rooted in classical yoga principles and shaped by 7 years of real teaching experience.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {PROGRAMS.map(({ label, slug }, i) => (
              <NavLink
                key={i}
                to={`/yoga-programs/${slug}`}
                style={{
                  display: "block",
                  padding: "1rem 1.25rem",
                  background: hoveredProgram === i ? "#c8763a" : "#fff",
                  border: "1px solid",
                  borderColor: hoveredProgram === i ? "#c8763a" : "#e8d5c0",
                  borderRadius: "12px",
                  color: hoveredProgram === i ? "#fff" : "#3b2a1a",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "all 0.25s",
                }}
                onMouseEnter={() => setHoveredProgram(i)}
                onMouseLeave={() => setHoveredProgram(null)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ background: "#fdf8f2", padding: "0 1.5rem 5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel text="Gallery" />
          <SectionHeading>Moments <span style={{ fontStyle: "italic", color: "#c8763a" }}>in Motion</span></SectionHeading>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
            {shubhPic.slice(11, 15).map((img, i) => (
              <div key={i} style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "4/5" }}>
                <img
                  src={img}
                  alt={`Yoga moment ${i + 1}`}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    objectPosition: "center 80%",
                    transition: "transform 0.5s",
                    display: "block",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#3b2a1a", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#c8763a", textTransform: "uppercase", marginBottom: "1rem" }}>
          Begin Today
        </p>
        <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", fontWeight: 300, color: "#f5ede3", marginBottom: "1rem", fontFamily: "'Georgia', serif" }}>
          Ready to Start Your <span style={{ fontStyle: "italic", color: "#f5c98a" }}>Journey?</span>
        </h2>
        <p style={{ fontSize: "14px", color: "#a89885", maxWidth: "420px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
          Whether you're curious, committed, or coming back to yoga — Shubham and Shubh Yog Shala welcome you exactly as you are.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
          <NavLink
            to="/reglog"
            style={{
              background: "#c8763a", color: "#fff",
              padding: "0.85rem 2rem", fontSize: "11px",
              letterSpacing: "0.3em", textTransform: "uppercase",
              textDecoration: "none", display: "inline-block",
              transition: "background 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#a85e2a")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c8763a")}
          >
            Book a Free Trial Class
          </NavLink>

          <a
            href={`https://wa.me/919548648227?text=${encodeURIComponent("Hello Shubham, I'm reaching out from Shubh Yog Shala and I'm interested in yoga.")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid rgba(245,201,138,0.5)", color: "#f5c98a",
              padding: "0.85rem 2rem", fontSize: "11px",
              letterSpacing: "0.3em", textTransform: "uppercase",
              textDecoration: "none", display: "inline-flex",
              alignItems: "center", gap: "8px",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(245,201,138,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            <FaWhatsapp /> Message Shubham
          </a>
        </div>

        {/* Social row */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          {[
            { Icon: FaInstagram, label: "Instagram", href: "#" },
            { Icon: FaYoutube,   label: "YouTube",   href: "#" },
            { Icon: FaWhatsapp,  label: "WhatsApp",  href: `https://wa.me/919548648227` },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: "42px", height: "42px",
                borderRadius: "50%",
                border: "1px solid rgba(200,118,58,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#c8a882", fontSize: "16px",
                textDecoration: "none", transition: "all 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8763a"; e.currentTarget.style.color = "#c8763a"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,118,58,0.4)"; e.currentTarget.style.color = "#c8a882"; }}
            >
              <Icon />
            </a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;