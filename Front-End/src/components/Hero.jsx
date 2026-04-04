import React from 'react'
import { shubhPic } from '../assets/product.js'

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 🔹 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
       style={{
  backgroundImage: `url(${shubhPic[13]})`,
  backgroundPosition: "center 90%",
}}
      />

      {/* 🔹 OVERLAY (optional slight dark for readability) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 🔹 NAVBAR */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 text-white z-20">
        <h1 className="text-xl font-semibold tracking-widest">
          Shubh Yog <br /> Shala
        </h1>
      </div>

      {/* 🔹 CENTER TEXT */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-5xl lg:text-7xl font-bold tracking-wide">
          WELCOME HOME
        </h1>
      </div>

      {/* 🔹 SCROLL ICON */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl z-10">
        ↓
      </div>

    </section>
  )
}

export default Hero
