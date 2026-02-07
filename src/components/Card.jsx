import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Card() {
  const { pic } = useContext(UserContext);

  return (
    <div className="flex flex-wrap items-center lg:gap-16 lg:w-[70%]  gap-10 py-10 justify-center mx-auto">
      {pic.map((i, index) => (
        <div
          key={index}
          className="w-[250px] text-center shadow-lg rounded-3xl overflow-hidden hover:scale-[1.1] duration-500 cursor-pointer "
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
