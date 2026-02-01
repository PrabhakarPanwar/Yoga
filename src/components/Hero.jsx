import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Hero() {
  const { assets } = useContext(UserContext);
  return (
    <div>
      <section className="relative z-0 font-[PoiretOne]">
        <video
          className="w-screen h-[100vh] object-[38%_center] object-cover py-4 "
          autoPlay
          loop
          muted
          src={assets.heroAbstract}
        ></video>

        <p className="absolute top-[15%] left-[4%] text-5xl ">
          Find Your Inner <br></br>
          <span className="absolute  top-[90%] left-[15%] text-7xl ">
            Peace
          </span>
        </p>

        <p className="absolute bottom-[45%] right-[6%] text-8xl ">
          With Yoga
        </p>
      </section>
    </div>
  );
}

export default Hero;
