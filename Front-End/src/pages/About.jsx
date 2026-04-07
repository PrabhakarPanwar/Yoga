import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { shubhPic } from "../assets/product";

const About = () => {
  return (
    <div className="w-[90%] mx-auto mt-5">



      {/* 🔹 FULL SCREEN IMAGE SECTION */}
<div className="relative">

  <img
    src={shubhPic[4]}
    alt="yoga full"
    className="h-[600px] w-full object-cover object-[center_70%]"
  />

  {/* 🔻 ARROW */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    <FaArrowDown className="text-white text-3xl" />
  </div>

</div>





      {/* 🔹 TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">
            Hey! My name is Shubham Pundir
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            I first started yoga as a way to gain strength and core muscles to
            support my oddly super natural flexible body. As I started to gain
            the strength I needed to support myself, yoga felt less like working
            out, and more like a rewarding experience.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Achieving asanas I thought my body could never attempt is a
            satisfying feeling as well as the ease it brings to the mind as you
            focus on clearing your thoughts and balancing.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            I started my journey October 2015, and I have learned so much and met
            so many people through social media.
          </p>

          <p className="text-gray-600">
            Take a look around, and shoot me a message if you would like to chat!
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={shubhPic[5]}
            alt="yoga"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* 🔹 GALLERY */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
  {shubhPic.slice(11,15 ).map((img, index) => (
    <div key={index}>
      <img
        src={img}
        className="w-full h-[190px] object-cover object-[center_80%]"
        alt=""
      />
      <p className="text-center text-sm text-gray-500 mt-2">
        Yoga moment
      </p>
    </div>
  ))}
</div>





    </div>
  );
};

export default About;
