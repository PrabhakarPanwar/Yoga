
import Carousal from "../components/Carousal";
import Hero from "../components/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  // useGSAP(() => {
  //   gsap.to(".card", {
  //     x: 100,
  //     y: 100,
  //     scale: 0,
  //     rotate: 90,
  //     repeat: -1,
  //     yoyo: true,
  //     duration: 2,
  //     ease: "power3.inOut",
  //   });
  // }, []);

  return (
    <div>
      <Hero />
      <Carousal />
    </div>
  );
}

export default Home;
