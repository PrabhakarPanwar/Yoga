import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#021d1a] via-[#03332d] to-[#021d1a] text-white px-6 py-12">
      
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* 🌿 Brand */}
        <div>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            🕉️ Shubham Yoga
          </h2>

          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            Yoga is a journey back to yourself. Through mindful movement,
            breath and stillness, we help you find balance, strength and
            inner peace — one practice at a time.
          </p>

          <p className="mt-6 text-yellow-400 tracking-widest text-sm">
            FOLLOW THE JOURNEY
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {[FaInstagram, FaWhatsapp, FaYoutube, FaFacebookF, SiGmail].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:border-yellow-400 hover:text-yellow-400 transition cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* 🔗 Explore */}
        <div>
          <h3 className="text-yellow-400 tracking-widest mb-4">
            EXPLORE
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white transition cursor-pointer">— Home</li>
            <li className="hover:text-white transition cursor-pointer">— About</li>
            <li className="hover:text-white transition cursor-pointer">— Classes</li>
            <li className="hover:text-white transition cursor-pointer">— Schedule</li>
            <li className="hover:text-white transition cursor-pointer">— Contact</li>
          </ul>
        </div>

        {/* 🧘 Programs */}
        <div>
          <h3 className="text-yellow-400 tracking-widest mb-4">
            PROGRAMS
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Hatha Yoga</li>
            <li>Vinyasa Flow</li>
            <li>Pranayama & Meditation</li>
            <li>Private Sessions</li>
            <li>Corporate Wellness</li>
          </ul>
        </div>

        {/* 📍 Contact */}
        <div>
          <h3 className="text-yellow-400 tracking-widest mb-4">
            VISIT & CONTACT
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">

            <div className="flex gap-3 items-start">
              <FaLocationDot className="text-yellow-400 mt-1" />
              <p>
                Shubham Yoga Studio <br />
                Near Your Studio Address <br />
                India
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <FaPhone className="text-yellow-400" />
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div className="flex gap-3 items-center">
              <SiGmail className="text-yellow-400" />
              <p>hello@shubhamyoga.com</p>
            </div>

          </div>
        </div>
      </div>

      {/* ⚡ Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © 2026 Shubham Yoga. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
