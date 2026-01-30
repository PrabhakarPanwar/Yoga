import React, { useContext } from "react";
import Card from "../components/Card";
import Half from "../components/Half";
import Carousal from "../components/Carousal";
import { UserContext } from "../context/UserContext";
import Hero from "../components/Hero";

function Home() {
  const { yogaPose } = useContext(UserContext);
  return (
    <div>
      <Hero />
      <Carousal />
    </div>
  );
}

export default Home;
