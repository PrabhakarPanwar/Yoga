import React, { useContext } from "react";
import Half from "../components/Half";
import { UserContext } from "../context/UserContext";

function Teacher() {
  const { yogaPose } = useContext(UserContext);

  return (
    <div>
      <Half />
    </div>
  );
}

export default Teacher;
