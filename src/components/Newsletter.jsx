import React from "react";

function Newsletter() {
  return (
    <center className="flex flex-col gap-5 py-5">
      <h3 className="text-3xl">Stay Up to Date</h3>
      <h2 className="text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        alias.
      </h2>
      <input
        className="p-3 shadow-lg lg:w-[20%] mx-auto"
        type="email"
        placeholder="Email address"
      />
      <button className="p-3 mt-3 lg:w-[20%] mx-auto rounded-full bg-green-200">
        Sign Up To The Newsletter
      </button>
    </center>
  );
}

export default Newsletter;
