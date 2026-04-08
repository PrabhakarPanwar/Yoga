import React from 'react'
import { shubhPic } from '../assets/product.js'

const Hero = () => {
  return (
    <div className='w-full mt-5'>

      {/* 🔥 HERO SECTION (PARALLAX) */}
      <section className="relative w-full h-[75vh] md:h-screen overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: `url(${shubhPic[13]})`,
            backgroundPosition: "center 84%",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* NAVBAR */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 md:py-6 text-white z-20">
          <h1 className="text-lg md:text-xl font-semibold tracking-widest">
            Shubh Yog <br /> Shala
          </h1>
        </div>

        {/* SCROLL ICON */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl md:text-2xl z-10 animate-bounce">
          ↓
        </div>

      </section>


      {/* 🔥  SECTION (CARDS) */}
      <div className="w-full min-h-screen bg-[#2c2f4a] flex items-center py-12 md:py-16">

        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* CARD 1 */}
          <div className="text-white">
            <div
              className="h-[250px] md:h-[350px] w-full bg-cover"
              style={{
                backgroundImage: `url(${shubhPic[6]})`,
                backgroundPosition: "center 70%"
              }}
            ></div>

            <h2 className="mt-4 text-lg md:text-xl font-medium">
              200-hr Yoga Teacher Training
            </h2>

            <p className="mt-2 text-orange-300 text-sm cursor-pointer hover:underline">
              learn more →
            </p>
          </div>

          {/* CARD 2 */}
          <div className="text-white">
            <div
              className="h-[250px] md:h-[350px] w-full bg-cover"
              style={{
                backgroundImage: `url(${shubhPic[5]})`,
                backgroundPosition: "center 70%"
              }}
            ></div>

            <h2 className="mt-4 text-lg md:text-xl font-medium">
              Flow Study Journal
            </h2>

            <p className="mt-2 text-orange-300 text-sm cursor-pointer hover:underline">
              read the blog →
            </p>
          </div>

          {/* CARD 3 */}
          <div className="text-white">
            <div
              className="h-[250px] md:h-[350px] w-full bg-cover"
              style={{
                backgroundImage: `url(${shubhPic[14]})`,
                backgroundPosition: "center 100%"
              }}
            ></div>

            <h2 className="mt-4 text-lg md:text-xl font-medium">
              Purchase a Gift Card
            </h2>

            <p className="mt-2 text-orange-300 text-sm cursor-pointer hover:underline">
              gift cards →
            </p>
          </div>

        </div>

      </div>


      {/* 🔥 SECOND PARALLAX IMAGE */}
      <div
        className="w-full h-[60vh] md:h-[80vh] bg-cover bg-center md:bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: `url(${shubhPic[4]})`,
          backgroundPosition: "center 70%"
        }}
      >
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4">
          Breathe • Relax • Align
        </h1>
      </div>


      <section className="w-full min-h-screen flex flex-col md:flex-row">

        {/* 🔹 LEFT SIDE */}
        <div className="w-full md:w-1/2 bg-[#f5f3ef] flex items-center justify-center px-6 md:px-16 py-12 md:py-16">
          <div className="max-w-md">

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#b76e4d] mb-6">
              Meet the Yogis
            </h1>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              We are passionate students and teachers dedicated to making yoga
              accessible, inspiring, and transformative.
            </p>

            <button className="bg-[#2f2f4f] text-white px-6 md:px-8 py-3 md:py-4 tracking-widest text-xs md:text-sm hover:opacity-90 transition">
              OUR TEAM
            </button>

          </div>
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <img
            src={shubhPic[4]} 
            alt="Yoga Team"
            className="w-full h-full object-cover"
          />
        </div>

      </section>
    </div>
  )
}

export default Hero
