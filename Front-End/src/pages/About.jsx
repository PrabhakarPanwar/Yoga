import React from "react";
import { FaArrowDown, FaInstagram, FaYoutube, FaLeaf } from "react-icons/fa";
import { shubhPic } from "../assets/product";

const stats = [
  { number: "8+", label: "Years of Practice" },
  { number: "500+", label: "Students Guided" },
  { number: "50+", label: "Poses Mastered" },
  { number: "2015", label: "Journey Started" },
];

const values = [
  {
    icon: "🧘",
    title: "Mindfulness",
    desc: "Every session begins with intention and breath. Yoga is as much about the mind as the body.",
  },
  {
    icon: "💪",
    title: "Strength",
    desc: "Building a strong foundation so your body can explore the full depth of each posture.",
  },
  {
    icon: "🌿",
    title: "Growth",
    desc: "Every practitioner is on their own path. Progress, not perfection, is what we celebrate.",
  },
];

const About = () => {
  return (
    <div className="w-full font-sans text-gray-800">

      {/* ── HERO ── */}
      <div className="relative w-[90%] mx-auto mt-[50px]">
        <img
          src={shubhPic[4]}
          alt="yoga full"
          className="h-[50vh] sm:h-[70vh] w-full object-cover object-[center_70%] rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

        {/* Hero text */}
        <div className="absolute bottom-8 left-6 sm:left-10 text-white">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-white/70 mb-1">About Me</p>
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight">Shubham Pundir</h1>
          <p className="text-sm sm:text-base text-white/80 mt-1">Yoga Practitioner · Since 2015</p>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-6 right-6 animate-bounce">
          <FaArrowDown className="text-white text-xl sm:text-2xl" />
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="w-[90%] mx-auto mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center"
          >
            <p className="text-2xl sm:text-3xl font-bold text-stone-800">{s.number}</p>
            <p className="text-xs text-stone-500 mt-1 uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── INTRO SECTION ── */}
      <div className="w-[90%] mx-auto mt-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">My Story</p>
          <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-5">
            Hey! My name is <span className="text-amber-600">Shubham Pundir</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            I first started yoga as a way to gain strength and core muscles to
            support my oddly super-natural flexible body. As I began building the
            strength I needed, yoga felt less like working out and more like a
            deeply rewarding experience.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
            Achieving asanas I thought my body could never attempt is a
            satisfying feeling — as well as the ease it brings to the mind as
            you focus on clearing your thoughts and finding balance.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            I started my journey in October 2015, and I have learned so much
            and met so many wonderful people through this practice and social
            media.{" "}
            <span className="font-medium text-gray-800">
              Take a look around, and shoot me a message if you'd like to chat!
            </span>
          </p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src={shubhPic[5]}
            alt="Shubham yoga"
            className="w-full h-[340px] sm:h-[460px] object-cover"
          />
        </div>
      </div>

      {/* ── VALUES ── */}
      <div className="w-[90%] mx-auto mt-16">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">What I believe in</p>
        <h2 className="text-xl sm:text-2xl font-semibold mb-8">My Practice Philosophy</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-amber-50 border border-amber-100 rounded-2xl p-6"
            >
              <p className="text-3xl mb-3">{v.icon}</p>
              <h3 className="font-semibold text-base mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── QUOTE BANNER ── */}
      <div className="w-[90%] mx-auto mt-16 bg-stone-800 text-white rounded-2xl px-6 sm:px-12 py-10 text-center">
        <FaLeaf className="text-amber-400 text-2xl mx-auto mb-4" />
        <p className="text-lg sm:text-2xl font-light italic leading-relaxed max-w-2xl mx-auto">
          "Yoga is not about touching your toes. It's about what you learn on
          the way down."
        </p>
        <p className="text-stone-400 text-sm mt-4">— A truth I carry every day</p>
      </div>

      {/* ── GALLERY ── */}
      <div className="w-[90%] mx-auto mt-16">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Gallery</p>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Moments in Motion</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {shubhPic.slice(11, 15).map((img, index) => (
            <div key={index} className="group overflow-hidden rounded-xl">
              <img
                src={img}
                className="w-full h-[160px] sm:h-[200px] object-cover object-[center_80%] group-hover:scale-105 transition-transform duration-500"
                alt={`Yoga moment ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      {/* ── CTA ── */}
<div className="w-[90%] mx-auto mt-16 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 border border-stone-200 rounded-2xl p-6 sm:p-8">
  <div>
    <h3 className="text-lg sm:text-xl font-semibold mb-1">Want to connect?</h3>
    <p className="text-sm text-gray-500">Follow my journey or drop me a message anytime.</p>
  </div>
  <div className="flex gap-3">
    {/* ADD THE 'a' TAGS BELOW */}
    <a 
      href="#" 
      className="flex items-center gap-2 bg-stone-800 text-white text-sm px-5 py-2.5 rounded-full hover:bg-stone-700 transition"
    >
      <FaInstagram /> Instagram
    </a>

    <a 
      href="#" 
      className="flex items-center gap-2 border border-stone-300 text-stone-700 text-sm px-5 py-2.5 rounded-full hover:bg-stone-100 transition"
    >
      <FaYoutube /> YouTube
    </a>
  </div>
</div>
      </div>

  );
};

export default About;