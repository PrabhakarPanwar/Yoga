import React from "react";

function Half({ image1, image2, image3 }) {
  return (
    <main className="py-10">
      <section className="flex">
        <img className="flex-1 h-[90vh] w-[50%] " src={image1} />
        <div className="flex-1 h-[90vh] flex flex-col justify-center ">
          <div className="w-[70%] mx-auto">
            <h1 className="font-bold text-3xl">Heading For This Image</h1>
            <p className="text-lg mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              adipisci! Consectetur, corrupti nesciunt in iure labore laborum
              temporibus, fugit blanditiis et, recusandae magni nulla ut quaerat
              expedita adipisci illo velit.
            </p>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="flex-1 h-[90vh] flex flex-col justify-center ">
          <div className="w-[70%] mx-auto">
            <h1 className="font-bold text-3xl">Heading For This Image</h1>
            <p className="text-lg mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              adipisci! Consectetur, corrupti nesciunt in iure labore laborum
              temporibus, fugit blanditiis et, recusandae magni nulla ut quaerat
              expedita adipisci illo velit.
            </p>
          </div>
        </div>
        <img className="flex-1 h-[90vh] bg-black w-[50%]" src={image2} />
      </section>
      <section className="flex">
        <img className="flex-1 h-[90vh] bg-black w-[50%]" src={image3} />
        <div className="flex-1 h-[90vh] flex flex-col justify-center ">
          <div className="w-[70%] mx-auto">
            <h1 className="font-bold text-3xl">Heading For This Image</h1>
            <p className="text-lg mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              adipisci! Consectetur, corrupti nesciunt in iure labore laborum
              temporibus, fugit blanditiis et, recusandae magni nulla ut quaerat
              expedita adipisci illo velit.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Half;
