import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Card() {
  const { pic } = useContext(UserContext);

  return (
    <div className="flex flex-wrap gap-5 py-10 justify-center">
      {pic.map((i, index) => (
        <div
          key={index}
          className="w-[250px] text-center shadow-lg rounded-3xl overflow-hidden hover:scale-[1.1] duration-500 cursor-pointer"
        >
          <img className="w-[250px] h-[250px]" src={i.image} alt={i.name} />
          <p>{i.name}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default Card;
