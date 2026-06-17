import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaYoutube, FaWhatsapp, FaGraduationCap, FaHeart, FaUsers, FaFacebookF } from "react-icons/fa";
import { shubhPic } from "../assets/product";

// ── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { number: "7+",   label: "Years Teaching"    },
  { number: "500+", label: "Lives Transformed" },
  { number: "6",    label: "Programs Offered"  },
  { number: "2026", label: "Shala Founded"     },
];

const QUALIFICATIONS = [
  {
    icon: <FaGraduationCap />,
    degree: "BA in Yoga Science (2019–2022)",
    detail: "Foundation in classical yoga theory, anatomy, philosophy and teaching methodology",
  },
  {
    icon: <FaGraduationCap />,
    degree: "MA in Yoga Science (2022–2024)",
    detail: "Advanced study in therapeutic yoga, pranayama, research methodology — certified Master of Yoga Science",
  },
  {
    icon: <FaHeart />,
    degree: "5 Years Freelance Teaching · Rishikesh",
    detail: "Independent yoga instruction across Rishikesh — transforming 500+ lives from all walks of life",
  },
  {
    icon: <FaUsers />,
    degree: "Chaitanya Wellness Yoga Academy · Bengaluru",
    detail: "2 years as a certified yoga instructor at Chaitanya Wellness Yoga Academy, Bengaluru (2024–2026)",
  },
  {
    icon: <FaGraduationCap />,
    degree: "Founded Shubh YogShala · 2026",
    detail: "Launched his own academy in Kasavanahalli, Bengaluru — a space built on the belief that yoga is a way of life",
  },
];

const VALUES = [
  {
    emoji: "🧘",
    title: "Mindfulness",
    desc: "Every session at Shubh YogShala begins with intention and breath. Shubham teaches yoga not as exercise but as a dialogue between the self and stillness.",
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
    desc: "Transformation begins with a single breath taken with full awareness. That is the seed from which every practice at Shubh YogShala grows.",
  },
];

const PROGRAMS = [
  { label: "Personal Yoga Classes",    slug: "personal-yoga"    },
  { label: "Online Yoga Classes",      slug: "online-yoga"      },
  { label: "Corporate Yoga Classes",   slug: "corporate-yoga"   },
  { label: "Group Yoga Classes",       slug: "group-yoga"       },
  { label: "Therapeutic Yoga classes", slug: "therapeutic-yoga" },
  { label: "Kids Yoga Classes",        slug: "kids-yoga"        },
];

const TIMELINE = [
  { year: "2018", event: "Completed 12th grade — discovered yoga and began teaching informally, laying the foundation for a lifelong path" },
  { year: "2019–2022", event: "Pursued BA in Yoga Science — simultaneously worked as a freelance yoga instructor across Rishikesh, building hands-on teaching experience" },
  { year: "2022–2024", event: "Completed MA in Yoga Science — continued freelancing in Rishikesh, deepening expertise in therapeutic yoga and pranayama. Transformed 500+ lives across all age groups" },
  { year: "2024", event: "Joined Chaitanya Wellness Yoga Academy, Bengaluru as a certified yoga instructor — bringing classical yoga to the heart of Karnataka" },
  { year: "2024–2026", event: "Served for 2 years at Chaitanya Wellness Yoga Academy — refining teaching methods, expanding student base, and building a reputation in Bengaluru" },
  { year: "2026", event: "Founded Shubh YogShala in Kasavanahalli, Bengaluru — a step forward to create his own space where yoga is lived, not just practised" },
];

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Sub-components ────────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ text }) {
  return (
    <p className="text-[10px] tracking-[0.4em] text-[#c8763a] uppercase mb-2 font-serif">
      {text}
    </p>
  );
}

function SectionHeading({ children, light = false }) {
  return (
    <h2
      className={`font-serif font-light leading-snug mb-6 ${
        light ? "text-[#f5ede3]" : "text-[#3b2a1a]"
      }`}
      style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
    >
      {children}
    </h2>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

const About = () => {
  const [hoveredProgram, setHoveredProgram] = useState(null);

  return (
    <div className="w-full font-serif text-[#3b2a1a] mt-8 overflow-x-hidden">

      
      {/* ── HERO ── */}
<section className="relative w-full">
  <div className="relative w-full h-screen">
    <img
      src={shubhPic[23]}
      alt="Shubham Pundir"
      className="absolute inset-0 w-full h-full object-cover object-[center_80%]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,10,3,0.88)] via-[rgba(20,10,3,0.30)] to-transparent" />

    <div className="hidden md:block absolute bottom-8 left-8 text-white">
      <p className="text-[10px] tracking-[0.4em] text-[rgba(245,201,138,0.8)] mb-2 uppercase font-serif">
        The Man Behind the Mat
      </p>
      <h1
        className="font-serif font-light leading-none mb-2"
        style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
      >
        Shubham{" "}
        <span className="italic text-[#f5c98a]">Pundir</span>
      </h1>
      <p className="text-[13px] text-white/70 tracking-[0.1em] font-sans">
        Founder · Shubh YogShala · MA Yoga Science · 7+ Years Teaching
      </p>
    </div>

    <div className="hidden md:block absolute bottom-8 right-8 text-[#f5c98a] text-2xl animate-bounce">↓</div>
  </div>
</section>

      {/* ── STATS ── */}
      <section className="bg-[#3b2a1a] py-10 px-4">
        <div
          className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4"
          style={{ gap: "1px", background: "rgba(200,118,58,0.2)" }}
        >
          {STATS.map((s, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="text-center py-6 px-4 bg-[#3b2a1a]">
                <p
                  className="font-bold text-[#c8763a] m-0"
                  style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}
                >
                  {s.number}
                </p>
                <p className="text-[10px] text-[#c8a882] tracking-[0.25em] uppercase mt-1 font-sans">
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="bg-[#fdf8f2] py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <FadeIn>
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div
                className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={shubhPic[5]}
                  alt="Shubham practicing"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-5 right-5 bg-[#c8763a] text-white rounded-xl px-5 py-3 text-center shadow-xl shadow-[rgba(200,118,58,0.4)]">
                <p className="text-2xl font-bold leading-none m-0">7+</p>
                <p className="text-[10px] tracking-[0.1em] mt-0.5 font-sans">Years Teaching</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="pb-4 pt-8 lg:pt-0">
            <SectionLabel text="My Story" />
            <SectionHeading>
              Hi, I'm{" "}
              <span className="italic text-[#c8763a]">Shubham Pundir</span>
            </SectionHeading>

            <div className="space-y-4 text-[#5a3e2b] leading-relaxed text-[15px] font-sans">
              <p>
                My journey with yoga began right after completing my 12th in 2018 — what started as
                curiosity quickly became a calling. I began teaching while simultaneously pursuing my
                BA in Yoga Science (2019–2022), spending those years as a freelance instructor across
                the spiritual heartland of Rishikesh.
              </p>
              <p>
                I went on to complete my MA in Yoga Science (2022–2024), becoming a certified Master
                of Yoga Science. Through those years of freelancing in Rishikesh, I had the privilege
                of transforming 500+ lives — students from across India and the world who came seeking
                strength, healing, or simply stillness.
              </p>
              <p>
                After completing my masters, I joined{" "}
                <strong className="text-[#3b2a1a]">Chaitanya Wellness Yoga Academy</strong> in
                Bengaluru, where I taught for two fulfilling years. In 2026, I took my next step —
                founding <strong className="text-[#3b2a1a]">Shubh YogShala</strong> in
                Kasavanahalli, Bengaluru. This is my own space, built on the belief that yoga is not
                a trend — it is a way of life.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-7">
              {[
                "BA Yoga Science",
                "MA Yoga Science",
                "5 Yrs · Rishikesh",
                "Chaitanya Wellness Academy",
                "Founded 2026",
              ].map((q, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-[#f5e8d8] text-[#7a4f2a] px-3 py-1.5 rounded-full tracking-[0.05em] font-sans"
                >
                  {q}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ── */}
      <section className="bg-[#c8763a] py-14 sm:py-16 px-4 sm:px-6 text-center">
        <p className="text-[10px] tracking-[0.4em] text-white/60 mb-4 uppercase font-sans">
          The Philosophy at Shubh YogShala
        </p>
        <blockquote
          className="italic font-light text-white max-w-2xl mx-auto leading-relaxed mb-4 font-serif"
          style={{ fontSize: "clamp(1.1rem, 3.5vw, 2rem)" }}
        >
          "Yoga is not about touching your toes. It is about what you learn on the way down."
        </blockquote>
        <p className="text-white/60 text-sm font-sans">— Shubham Pundir</p>
      </section>

      {/* ── QUALIFICATIONS / TIMELINE ── */}
      <section className="bg-[#fdf8f2] py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel text="Education & Journey" />
            <SectionHeading>
              The Path That{" "}
              <span className="italic text-[#c8763a]">Shaped the Teacher</span>
            </SectionHeading>
          </FadeIn>

          <div className="relative pl-5 sm:pl-6 border-l-2 border-[rgba(200,118,58,0.25)] flex flex-col gap-7 sm:gap-8 mb-14 sm:mb-16">
            {TIMELINE.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="relative">
                  <div className="absolute -left-[1.85rem] sm:-left-[2.1rem] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#c8763a] border-[3px] border-[#fdf8f2] shadow-[0_0_0_2px_#c8763a]" />
                  <p className="text-[11px] text-[#c8763a] tracking-[0.2em] mb-1 font-sans">{item.year}</p>
                  <p className="text-sm text-[#5a3e2b] leading-relaxed font-sans">{item.event}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {QUALIFICATIONS.map((q, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white border border-[#e8d5c0] rounded-2xl p-4 sm:p-5 flex gap-3 items-start hover:shadow-md hover:border-[#c8763a] transition-all duration-300">
                  <span className="text-[#c8763a] text-lg mt-0.5 shrink-0">{q.icon}</span>
                  <div>
                    <p className="font-semibold text-[13px] text-[#3b2a1a] mb-1 font-sans">{q.degree}</p>
                    <p className="text-[12px] text-[#7a6352] leading-relaxed font-sans">{q.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#3b2a1a] py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <SectionLabel text="What I Believe In" />
            <SectionHeading light>
              My Practice{" "}
              <span className="italic text-[#f5c98a]">Philosophy</span>
            </SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
            {VALUES.map((v, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white/5 border border-[rgba(200,118,58,0.2)] rounded-2xl p-6 sm:p-7 text-left hover:bg-white/10 hover:border-[rgba(200,118,58,0.5)] transition-all duration-300 h-full">
                  <p className="text-3xl mb-4">{v.emoji}</p>
                  <h3 className="text-[15px] font-semibold text-[#f5c98a] mb-2 font-serif">{v.title}</h3>
                  <p className="text-[13px] text-[#a89885] leading-relaxed font-sans">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="bg-[#fdf8f2] py-14 sm:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionLabel text="What Shubham Offers" />
            <SectionHeading>
              6 Programs,{" "}
              <span className="italic text-[#c8763a]">One Purpose</span>
            </SectionHeading>
            <p className="text-[14px] text-[#7a6352] max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed font-sans">
              Each program is rooted in classical yoga principles and shaped by 7 years of real teaching experience.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROGRAMS.map(({ label, slug }, i) => (
              <NavLink
                key={i}
                to={`/yoga-programs/${slug}`}
                onMouseEnter={() => setHoveredProgram(i)}
                onMouseLeave={() => setHoveredProgram(null)}
                className={`block px-5 py-4 rounded-xl border text-[13px] font-medium tracking-[0.05em] font-sans transition-all duration-250 no-underline ${
                  hoveredProgram === i
                    ? "bg-[#c8763a] border-[#c8763a] text-white shadow-lg shadow-[rgba(200,118,58,0.3)]"
                    : "bg-white border-[#e8d5c0] text-[#3b2a1a] hover:border-[#c8763a]"
                }`}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-[#fdf8f2] pb-14 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel text="Gallery" />
            <SectionHeading>
              Moments{" "}
              <span className="italic text-[#c8763a]">in Motion</span>
            </SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {shubhPic.slice(11, 15).map((img, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <img
                    src={img}
                    alt={`Yoga moment ${i + 1}`}
                    className="w-full h-full object-cover object-[center_80%] transition-transform duration-500 hover:scale-105 block"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#3b2a1a] py-14 sm:py-20 px-4 sm:px-6 text-center">
        <FadeIn>
          <p className="text-[10px] tracking-[0.4em] text-[#c8763a] uppercase mb-4 font-sans">
            Begin Today
          </p>
          <h2
            className="font-serif font-light text-[#f5ede3] mb-4"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
          >
            Ready to Start Your{" "}
            <span className="italic text-[#f5c98a]">Journey?</span>
          </h2>
          <p className="text-[14px] text-[#a89885] max-w-sm mx-auto mb-8 sm:mb-10 leading-relaxed font-sans">
            Whether you're curious, committed, or coming back to yoga — Shubham and Shubh YogShala
            welcome you exactly as you are.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <NavLink
              to="/reglog"
              className="bg-[#c8763a] hover:bg-[#a85e2a] text-white px-8 py-3.5 text-[11px] tracking-[0.3em] uppercase font-sans no-underline transition-colors duration-300 inline-block rounded-sm text-center"
            >
              Book a Free Trial Class
            </NavLink>
            <a
              href={`https://wa.me/918532064201?text=${encodeURIComponent(
                "Hello Shubham, I'm reaching out from Shubh YogShala and I'm interested in yoga."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[rgba(245,201,138,0.5)] hover:bg-[rgba(245,201,138,0.1)] text-[#f5c98a] px-8 py-3.5 text-[11px] tracking-[0.3em] uppercase font-sans no-underline transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-sm"
            >
              <FaWhatsapp /> Message Shubham
            </a>
          </div>

          {/* Social row */}
          <div className="flex justify-center gap-4">
            {[
              { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/shubh.yogshala?igsh=MTM1eDQ4c2NlNHoyZg%3D%3D&utm_source=qr" },
              { Icon: FaFacebookF, label: "Facebook",  href: "https://www.facebook.com/share/1DW9egtanT/?mibextid=wwXIfr" },
              { Icon: FaWhatsapp,  label: "WhatsApp",  href: "https://wa.me/918532064201" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-[rgba(200,118,58,0.4)] flex items-center justify-center text-[#c8a882] text-base no-underline hover:border-[#c8763a] hover:text-[#c8763a] transition-all duration-250"
              >
                <Icon />
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

    </div>
  );
};

export default About;