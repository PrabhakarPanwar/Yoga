import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Half() {
  const { pose } = useContext(UserContext)
  return (

    <main className="py-10">
      <section className="flex flex-col lg:flex-row">
        <img className="flex-1 h-[90vh] lg:w-[50%] " src={pose[0].image} alt={pose[0].name} />
        <div className="flex-1 h-[90vh] flex flex-col justify-center ">
          <div className="w-[70%] mx-auto">
            <h1>{pose[0].heading}</h1>
            <p>
              {pose[0].para}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row">
        <div className="flex-1 h-[90vh] flex flex-col justify-center ">
          <div className="w-[70%] mx-auto">
            <h1>{pose[1].heading}</h1>
            <p>
              {pose[1].para}
            </p>
          </div>
        </div>
        <img className="flex-1 h-[90vh] lg:w-[50%]" src={pose[1].image} alt={pose[1].name} />
      </section>
      <section className="flex flex-col lg:flex-row">
        <img className="flex-1 h-[90vh] lg:w-[50%]" src={pose[2].image} alt={pose[2].name} />
        <div className="flex-1 h-[90vh] flex flex-col justify-center ">
          <div className="w-[70%] mx-auto">
            <h1>{pose[2].heading}</h1>
            <p>
              {pose[2].para}
            </p>
          </div>
        </div>
      </section>
    </main>


  );
}

export default Half;
