import React, { useContext } from "react";
import Half from "../components/Half";
import { UserContext } from "../context/UserContext";

function Teacher() {
  const { yogaPose } = useContext(UserContext);

  return (
    <div>
      <Half
        image1={yogaPose[0].image}
        image2={yogaPose[1].image}
        image3={yogaPose[2].image}
      />
    </div>
  );
}

export default Teacher;
