import React from "react";

function Half({ image1, image2, image3 }) {
  return (
    <main className="py-10">
      <section className="flex flex-col lg:flex-row">
        <img className="flex-1 h-[90vh] lg:w-[50%] " src={image1} />
        <div className="flex-1 h-[90vh] flex flex-col justify-center ">
          <div className="w-[70%] mx-auto">
            <h1>Find Your Inner Balance</h1>
            <p>
              Discover the transformative power of yoga—where movement meets
              mindfulness. Whether you're a beginner or a seasoned practitioner,
              each pose invites you to reconnect with your body, calm your mind,
              and awaken your spirit. Embrace flexibility, build strength, and
              cultivate inner peace through guided sessions designed to
              harmonize your physical and emotional well-being. Step onto the
              mat and begin your journey toward clarity, vitality, and serenity.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row">
        <div className="flex-1 h-[90vh] flex flex-col justify-center ">
          <div className="w-[70%] mx-auto">
            <h1>Embrace Your Flexibility</h1>
            <p>
              Unfold your body, quiet your mind, and embrace the serenity
              within. This pose is more than a stretch—it's a moment of
              connection between breath and movement, strength and surrender.
              Whether you're easing into your day or winding down from it, let
              each motion guide you toward clarity, calm, and confidence. Our
              yoga practice is designed to help you build flexibility, release
              tension, and cultivate a deeper awareness of your physical and
              emotional well-being. Step into this space and allow yourself to
              grow, one breath at a time.
            </p>
          </div>
        </div>
        <img className="flex-1 h-[90vh] lg:w-[50%]" src={image2} />
      </section>
      <section className="flex flex-col lg:flex-row">
        <img className="flex-1 h-[90vh] lg:w-[50%]" src={image3} />
        <div className="flex-1 h-[90vh] flex flex-col justify-center ">
          <div className="w-[70%] mx-auto">
            <h1>Embrace the Downward Flow</h1>
            <p>
              Step into the classic Downward Dog and allow yourself to feel both
              grounded and uplifted. This pose is your personal invitation to
              stretch out the tension of the day, lengthen your spine, and find
              a moment of peaceful alignment. Here, on the mat, you'll discover
              how each breath can help you release the old and welcome the new,
              creating space for both strength and serenity. Let this simple yet
              powerful posture guide you toward a balanced and centered self.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Half;
