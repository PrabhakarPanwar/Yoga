import React, { useContext } from "react";
import { assets } from "../assets/product";
import { UserContext } from "../context/UserContext";

function Card() {
  const { assets } = useContext(UserContext);

  return (
    <div>
      <div>
        <video
          className="h-[250px] w-[250px] bg-black"
          src={assets.heroAbstract}
          alt=""
        />
        <p className="bg-black"></p>
        <button></button>
      </div>
    </div>
  );
}

export default Card;
