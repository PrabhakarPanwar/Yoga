import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Hero() {
  const { assets } = useContext(UserContext);
  return (
    <div>
      <section className="relative z-0 font-[PoiretOne]">
        <video
          className="w-screen h-[600px] object-[38%_center] object-cover py-8 "
          autoPlay
          loop
          muted
          src={assets.heroAbstract}
        ></video>

        <p className="absolute z-10 top-[15%] left-[4%] text-3xl ">
          Find Your Inner <br></br>
          <span className="absolute z-10 top-[90%] left-[15%] text-7xl ">
            Peace
          </span>
        </p>

        <p className="absolute z-10 bottom-[45%] right-[6%] text-7xl ">
          With Yoga
        </p>
      </section>
    </div>
  );
}

export default Hero;
