import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer className="p-5">
      <p className="text-center">
        At Shubham’s Yoga, we believe that yoga is not just a practice, but a
        journey back to oneself.<br /> Join our community to find balance,
        inner peace, and a healthier lifestyle through mindful movement and
        breath.
      </p>
      <Newsletter />
      <div className="flex items-center sm:w-[60%] pt-3 mx-auto ">
        <section className="footerSec text-bold ">
          <div className="flex  gap-2 sm:gap-3">
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaWhatsapp />
            </a>
            <a href="/">
              <SiGmail />
            </a>
            <a href="/">
              <FaYoutube />
            </a>
          </div>
          <h3>Near This address,India</h3>


        </section>
        <section className="footerSec">
          <a href="/">Lorem, ipsum.</a>
          <a href="/">Lorem, ipsum.</a>
          <a href="/">Lorem, ipsum.</a>
          <a href="/">Lorem, ipsum.</a>
        </section>
        <section className="footerSec ">
          <a href="/">Lorem, ipsum.</a>
          <a href="/">Lorem, ipsum.</a>
          <a href="/">Lorem, ipsum.</a>
          <a href="/">Lorem, ipsum.</a>
        </section>
      </div>

      <p className="text-center text-bold ">
        © 2026 Shubham Yoga. All Rights Reserved. Designed with peace and
        intention.
      </p>
    </footer>
  );
}

export default Footer;
