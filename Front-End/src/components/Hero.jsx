import React from 'react'
import { shubhPic } from '../assets/product.js'

const Hero = () => {
  return (
    <div>
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
        {/* <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-5xl lg:text-7xl font-bold tracking-wide">
          WELCOME HOME
        </h1>
      </div> */}

        {/* 🔹 SCROLL ICON */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl z-10">
          ↓
        </div>

        {/* starting the second part Here */}
      </section>

      {/* the second section */}

      <div className='flex flex-col items-center justify-center text-center mt-6 p-4'>
        <div className='text-center font-semibold text-2xl flex-1'>
          <h1>Your Space To Reset</h1>
        </div>
        <div className='flex items-center justify-center text-center gap-4  flex-1'>
          <div className='p-2 flex-1'>
            <p className='text-center text-2xl'>Yoga Off East is a big exhale, from the moment you walk through the door. We are a break from the busy, a space to ground during your day. Built for yoga, rooted in community.
            </p>
          </div>
          <div className='p-2 flex-1'>
            <p className='text-center text-lg'>Join us downtown Durham, NC for weekly non-heated yoga classes, workshops, and trainings. Step into a thoughtfully designed, fully renovated warehouse studio at the historic American Tobacco Campus. Our practice room is airy and light-filled from large historic windows.  Our team is passionate about creating a radically intentional space where you’re invited to ground, create new rituals, and prioritize your wellbeing.</p>
          </div>
        </div>
      </div>


      {/* creating the 3rd part  */}
      <div className="w-full min-h-screen bg-[#2c2f4a] flex items-center">
  
  <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

  {/* CARD 1 */}
  <div className="text-white">
    <div
      className="h-[350px] w-full bg-cover"
      style={{ 
        backgroundImage: `url(${shubhPic[6]})`,
        backgroundPosition: "center 50%"  // 🔥 adjust here
      }}
    ></div>

    <h2 className="mt-4 text-xl font-medium">
      200-hr Yoga Teacher Training
    </h2>

    <p className="mt-2 text-orange-300 text-sm cursor-pointer hover:underline">
      learn more →
    </p>
  </div>

  {/* CARD 2 */}
  <div className="text-white">
    <div
      className="h-[350px] w-full bg-cover"
      style={{ 
        backgroundImage: `url(${shubhPic[5]})`,
        backgroundPosition: "center 60%"  // 🔥 move more up
      }}
    ></div>

    <h2 className="mt-4 text-xl font-medium">
      Flow Study Journal
    </h2>

    <p className="mt-2 text-orange-300 text-sm cursor-pointer hover:underline">
      read the blog →
    </p>
  </div>

  {/* CARD 3 */}
  <div className="text-white">
    <div
      className="h-[350px] w-full bg-cover"
      style={{ 
        backgroundImage: `url(${shubhPic[14]})`,
        backgroundPosition: "center 100%"  // 🔥 move down
      }}
    ></div>

    <h2 className="mt-4 text-xl font-medium">
      Purchase a Gift Card
    </h2>

    <p className="mt-2 text-orange-300 text-sm cursor-pointer hover:underline">
      gift cards →
    </p>
  </div>

</div>


</div>

    </div>
  )
}

export default Hero
