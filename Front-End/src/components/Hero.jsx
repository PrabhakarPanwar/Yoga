import React from "react";
import { shubhPic } from "../assets/product.js";
import {
  FaUser,
  FaLaptop,
  FaBuilding,
  FaUsers,
  FaHeartbeat,
  FaChild,
} from "react-icons/fa";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOUNDER = {
  name: "Shubham Pundir",
  title: "Founder & Lead Yoga Instructor",
  founded: "April 2022",
  experience: "7+ Years",
  qualifications: ["B.Sc. in Yoga Science", "M.Sc. in Yoga Science"],
  bio: [
    `Shubh Yog Shala was born from a singular conviction — that yoga is not a trend, it is a way of life. Founded in April 2022 by Shubham Pundir, the shala carries his name and his purpose: to share the ancient science of yoga with every kind of seeker.`,
    `Shubham holds a Bachelor's and Master's degree in Yoga Science and brings over 7 years of hands-on teaching experience. He does not teach yoga as exercise — he teaches it as a dialogue between the self and stillness. Every session at Shubh Yog Shala reflects his belief that transformation begins with a single breath taken with full awareness.`,
    `Whether you are a complete beginner stepping onto the mat for the first time, a working professional seeking calm in chaos, or someone healing through therapeutic practice — Shubham and Shubh Yog Shala welcome you exactly as you are.`,
  ],
};

const STATS = [
  { value: "7+",   label: "Years of Experience" },
  { value: "2022", label: "Year Founded"         },
  { value: "500+", label: "Lives Transformed"    },
  { value: "6",    label: "Programs Offered"     },
];

const programs = [
  {
    title: "Personal Yoga",
    desc:  "One-on-one sessions tailored precisely to your body, breath, and goals.",
    icon:  <FaUser />,
  },
  {
    title: "Online Yoga",
    desc:  "Live guided sessions you can join from anywhere in the world.",
    icon:  <FaLaptop />,
  },
  {
    title: "Corporate Yoga",
    desc:  "Structured wellness programs that bring calm and focus to your workplace.",
    icon:  <FaBuilding />,
  },
  {
    title: "Group Yoga",
    desc:  "Practise alongside others in a warm, encouraging group setting.",
    icon:  <FaUsers />,
  },
  {
    title: "Therapeutic Yoga",
    desc:  "Carefully designed sequences for injury recovery and chronic conditions.",
    icon:  <FaHeartbeat />,
  },
  {
    title: "Kids Yoga",
    desc:  "Joyful, age-appropriate yoga that builds focus and confidence in children.",
    icon:  <FaChild />,
  },
];

const TESTIMONIALS = [
  {
    quote: "Shubham's teaching is unlike any class I have attended. He doesn't just correct your posture — he helps you understand why.",
    name:  "Priya M.",
    tag:   "Personal Yoga Student",
  },
  {
    quote: "After three months at Shubh Yog Shala, my chronic back pain reduced significantly. I feel stronger and calmer every single day.",
    name:  "Rajesh K.",
    tag:   "Therapeutic Yoga",
  },
  {
    quote: "We enrolled our entire office team. The corporate sessions transformed Monday mornings completely.",
    name:  "Sneha T.",
    tag:   "Corporate Program",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const ProgramCard = ({ title, desc, icon, align = "right" }) => {
  const isLeft = align === "left";
  return (
    <div className={`flex items-start gap-4 ${isLeft ? "flex-row-reverse text-right" : "flex-row text-left"}`}>
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-[#c8763a] rounded-full text-[#c8763a] text-xl mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-[#3b2a1a] tracking-wide">{title}</h3>
        <p className="text-sm text-[#7a6352] mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

const StatBlock = ({ value, label }) => (
  <div className="text-center px-4">
    <p className="text-3xl md:text-4xl font-bold text-[#c8763a]">{value}</p>
    <p className="text-xs md:text-sm text-[#c8a882] mt-1 tracking-wide uppercase">{label}</p>
  </div>
);

const TestimonialCard = ({ quote, name, tag }) => (
  <div className="bg-[#fffaf5] border border-[#e8d5c0] rounded-2xl p-6 shadow-sm flex flex-col gap-4">
    <p className="text-[#4a3728] text-sm leading-relaxed italic">"{quote}"</p>
    <div>
      <p className="text-[#3b2a1a] font-semibold text-sm">{name}</p>
      <p className="text-[#c8763a] text-xs tracking-wide">{tag}</p>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Hero = () => {
  return (
    <div className="w-full mt-5" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${shubhPic[13]})`, backgroundPosition: "center 80%" }}
        />

        {/* Warm saffron-to-dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e05]/60 via-[#3b1e08]/30 to-[#1a0e05]/70" />

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-14 py-6 text-white z-20">
          <div>
            <h1 className="text-lg md:text-2xl tracking-[0.2em] font-normal">
              SHUBH YOG SHALA
            </h1>
            <p className="text-[10px] tracking-[0.3em] text-[#f5c98a] opacity-80 uppercase mt-0.5">
              with Shubham Pundir
            </p>
          </div>
          <button className="border border-[#f5c98a] text-[#f5c98a] px-5 py-2 text-xs tracking-widest hover:bg-[#f5c98a] hover:text-[#1a0e05] transition-all duration-300">
            BOOK A SESSION
          </button>
        </nav>

        {/* Centre content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
          <p className="text-[#f5c98a] text-xs tracking-[0.4em] uppercase mb-4">
            Est. April 2022
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            Where Breath
            <br />
            <span className="italic text-[#f5c98a]">Becomes Practice</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm md:text-base opacity-80 leading-relaxed font-light">
            Founded by Shubham Pundir — M.Sc. Yoga, 7 years of teaching —
            Shubh Yog Shala is a space for every seeker, every stage.
          </p>
          <button className="mt-8 bg-[#c8763a] text-white px-8 py-3 text-xs tracking-[0.3em] uppercase hover:bg-[#a85e2a] transition-all duration-300">
            EXPLORE PROGRAMS
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#f5c98a] text-lg animate-bounce">
          ↓
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="w-full bg-[#3b2a1a] py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-[#5a3e2b]">
          {STATS.map((s, i) => <StatBlock key={i} {...s} />)}
        </div>
      </section>

      {/* ── FOUNDER / ABOUT SECTION ── */}
      <section className="w-full bg-[#fdf8f2] py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left — image with badge */}
          <div className="relative">
            <div
              className="w-full h-[350px] md:h-[480px] bg-cover bg-center rounded-2xl shadow-xl"
              style={{ backgroundImage: `url(${shubhPic[13]})`, backgroundPosition: "center 50%" }}
            />
            <div className="absolute -bottom-5 right-4 md:right-6 bg-[#c8763a] text-white px-5 py-4 rounded-xl shadow-lg text-center">
              <p className="text-2xl font-bold">7+</p>
              <p className="text-xs tracking-wide">Years Teaching</p>
            </div>
          </div>

          {/* Right — founder story */}
          <div className="space-y-6">
            <p className="text-[#c8763a] text-xs tracking-[0.4em] uppercase">
              The Founder's Story
            </p>

            <h2 className="text-3xl md:text-4xl font-light text-[#3b2a1a] leading-snug">
              Meet{" "}
              <span className="italic font-normal text-[#c8763a]">
                Shubham Pundir
              </span>
            </h2>

            {/* Qualification badges */}
            <div className="flex gap-3 flex-wrap">
              {FOUNDER.qualifications.map((q, i) => (
                <span key={i} className="text-xs bg-[#f5e8d8] text-[#7a4f2a] px-3 py-1 rounded-full tracking-wide">
                  {q}
                </span>
              ))}
              <span className="text-xs bg-[#f5e8d8] text-[#7a4f2a] px-3 py-1 rounded-full tracking-wide">
                Founded April 2022
              </span>
            </div>

            {FOUNDER.bio.map((para, i) => (
              <p key={i} className="text-[#5a3e2b] text-sm md:text-base leading-relaxed">
                {para}
              </p>
            ))}

            <button className="mt-2 bg-[#3b2a1a] text-[#f5c98a] px-7 py-3 text-xs tracking-[0.3em] uppercase rounded-full hover:bg-[#c8763a] hover:text-white transition-all duration-300">
              LEARN MORE ABOUT SHUBHAM →
            </button>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ── */}
      <section className="w-full bg-[#c8763a] py-14 px-6 text-center">
        <p className="text-white/70 text-xs tracking-[0.4em] uppercase mb-3">
          The Philosophy at Shubh Yog Shala
        </p>
        <blockquote className="text-white text-2xl md:text-4xl font-light italic max-w-3xl mx-auto leading-snug">
          "Yoga is not about touching your toes. It is about what you learn on the way down."
        </blockquote>
        <p className="mt-4 text-white/60 text-sm">— Shubham Pundir</p>
      </section>

      {/* ── PROGRAMS SECTION ── */}
      <section className="w-full bg-[#fdf8f2] py-20 md:py-28 px-6 md:px-16 text-center">
        <p className="text-[#c8763a] text-xs tracking-[0.4em] uppercase mb-3">What We Offer</p>
        <h2 className="text-3xl md:text-5xl font-light text-[#3b2a1a] mb-4">Our Programs</h2>
        <p className="text-[#7a6352] text-sm max-w-xl mx-auto mb-16 leading-relaxed">
          Six thoughtfully designed programs, each rooted in classical yoga principles
          and shaped by Shubham's 7 years of real teaching experience.
        </p>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Left column */}
          <div className="space-y-10">
            {programs.slice(0, 3).map((item, i) => (
              <ProgramCard key={i} {...item} align="left" />
            ))}
          </div>

          {/* Centre image */}
          <div className="flex justify-center">
            <div
              className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-cover bg-center shadow-2xl border-4 border-[#c8763a]"
              style={{ backgroundImage: `url(${shubhPic[13]})`, backgroundPosition: "center 60%" }}
            />
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {programs.slice(3, 6).map((item, i) => (
              <ProgramCard key={i} {...item} align="right" />
            ))}
          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ── */}
      <section className="w-full bg-[#3b2a1a] py-20 px-6 md:px-16">
        <div className="text-center mb-12">
          <p className="text-[#f5c98a] text-xs tracking-[0.4em] uppercase mb-3">Student Stories</p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Lives Changed at{" "}
            <span className="italic text-[#f5c98a]">Shubh Yog Shala</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="w-full bg-[#fdf8f2] py-20 px-6 text-center">
        <p className="text-[#c8763a] text-xs tracking-[0.4em] uppercase mb-3">Begin Today</p>
        <h2 className="text-3xl md:text-5xl font-light text-[#3b2a1a] mb-6">
          Your First Step
          <br />
          <span className="italic text-[#c8763a]">Starts with One Breath</span>
        </h2>
        <p className="text-[#7a6352] text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Whether you are curious, committed, or coming back to yoga — Shubham
          and Shubh Yog Shala are here for every stage of your journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#c8763a] text-white px-8 py-3 text-xs tracking-[0.3em] uppercase hover:bg-[#a85e2a] transition-all duration-300">
            BOOK A FREE TRIAL CLASS
          </button>
          <button className="border border-[#3b2a1a] text-[#3b2a1a] px-8 py-3 text-xs tracking-[0.3em] uppercase hover:bg-[#3b2a1a] hover:text-white transition-all duration-300">
            CONTACT SHUBHAM
          </button>
        </div>
      </section>

    </div>
  );
};

export default Hero;