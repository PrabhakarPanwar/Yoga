import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Chakra() {
  const { sevenChakra } = useContext(UserContext);
  const [desc, setDesc] = useState({ name: "chakra", color: "" });
  return (
    <div className="p-5">
      <center
        onClick={() => setDesc({ name: "chakra" })}
        className="py-20 text-5xl font-bold"
      >
        The Seven Chakras
      </center>
      <div className="flex gap-5 lg:flex-col justify-around items-center">
        <div className="lg:flex">
          {sevenChakra.map((i, index) => (
            <section
              key={index}
              className=" flex flex-col items-center text-center lg:py-10"
            >
              <img
                className="cursor-pointer rounded-full h-[100px] w-[100px]"
                onClick={() => setDesc({ name: i.name, color: i.color })}
                src={i.image}
                alt={i.name}
              />
              <p>{i.name}</p>
            </section>
          ))}
        </div>
        <div
          className=" sm:w-[40%] lg:w-[60%] p-7 rounded-2xl shadow-2xl "
          style={{ backgroundColor: desc.color }}
        >
          {desc.name === "chakra" && (
            <section>
              <h1>Origin & Meaning</h1>
              <p>
                <strong>Sanskrit Root:</strong> Cakra = “wheel” or “circle.”
              </p>
              <p>
                <strong>Concept:</strong> Chakras are visualized as spinning
                vortices of energy located along the spine.
              </p>
              <p>
                <strong>Traditions:</strong> Found in Hindu and Buddhist tantric
                practices, Ayurveda, and yoga philosophy.
              </p>
            </section>
          )}
          {desc.name === "Muladhara(Root Chakra)" && (
            <section>
              <h1>Location: Base of the spine</h1>
              <p>
                <strong>Color:</strong> Red
              </p>
              <p>
                <strong>Element:</strong> Earth
              </p>
              <p>
                <strong>Mantra:</strong> Lam
              </p>
              <p>
                <strong>Function:</strong> Represents stability, grounding, and
                survival instincts.
              </p>
              <p>
                <strong>Yoga Focus:</strong> Poses like Mountain Pose (Tadasana)
                and Warrior (Virabhadrasana) help strengthen grounding.
              </p>
              <p>
                <strong>Imbalance Signs:</strong> Fear, insecurity, financial
                instability.
              </p>
              <p>
                <strong>Balanced State:</strong> Feeling safe, secure, and
                connected to the physical world.
              </p>
            </section>
          )}
          {desc.name === "Svadhisthana(Sacral Chakra)" && (
            <section>
              <h1>Location: Lower abdomen, just below the navel</h1>
              <p>
                <strong>Color:</strong> Orange
              </p>
              <p>
                <strong>Element:</strong> Water
              </p>
              <p>
                <strong>Mantra:</strong> Vam
              </p>
              <p>
                <strong>Function:</strong> Governs creativity, sexuality, and
                emotional flow.
              </p>
              <p>
                <strong>Yoga Focus:</strong> Hip-opening poses like Bound Angle
                (Baddha Konasana) and Pigeon Pose.
              </p>
              <p>
                <strong>Imbalance Signs:</strong> Emotional instability, guilt,
                blocked creativity.
              </p>
              <p>
                <strong>Balanced State:</strong> Healthy relationships,
                creativity, and emotional expression.
              </p>
            </section>
          )}
          {desc.name === "Manipura(Solar Plexus Chakra)" && (
            <section>
              <h1>Location: Upper abdomen, near the stomach</h1>
              <p>
                <strong>Color:</strong> Yellow
              </p>
              <p>
                <strong>Element:</strong> Fire
              </p>
              <p>
                <strong>Mantra:</strong> Ram
              </p>
              <p>
                <strong>Function:</strong> Represents personal power,
                confidence, and willpower.
              </p>
              <p>
                <strong>Yoga Focus:</strong> Core-strengthening poses like Boat
                (Navasana) and Plank.
              </p>
              <p>
                <strong>Imbalance Signs:</strong> Low self-esteem, lack of
                motivation, digestive issues.
              </p>
              <p>
                <strong>Balanced State:</strong> Confidence, strong will, and
                healthy metabolism.
              </p>
            </section>
          )}
          {desc.name === "Anahata (Heart Chakra)" && (
            <section>
              <h1>Location: Center of the chest</h1>
              <p>
                <strong>Color:</strong> Green
              </p>
              <p>
                <strong>Element:</strong> Air
              </p>
              <p>
                <strong>Mantra:</strong> Yam
              </p>
              <p>
                <strong>Function:</strong> Governs love, compassion, and
                emotional healing.
              </p>
              <p>
                <strong>Yoga Focus:</strong> Backbends like Camel (Ustrasana)
                and Bridge (Setu Bandhasana).
              </p>
              <p>
                <strong>Imbalance Signs:</strong> Loneliness, jealousy,
                emotional coldness.
              </p>
              <p>
                <strong>Balanced State:</strong> Compassion, forgiveness, and
                unconditional love.
              </p>
            </section>
          )}
          {desc.name === "Vishuddha (Throat Chakra)" && (
            <section>
              <h1>Location: Throat</h1>
              <p>
                <strong>Color:</strong> Blue
              </p>
              <p>
                <strong>Element:</strong> Ether (Space)
              </p>
              <p>
                <strong>Mantra:</strong> Ham
              </p>
              <p>
                <strong>Function:</strong> Expression, communication, and truth.
              </p>
              <p>
                <strong>Yoga Focus:</strong> Shoulder Stand (Sarvangasana) and
                Fish Pose (Matsyasana).
              </p>
              <p>
                <strong>Imbalance Signs:</strong> Difficulty expressing oneself,
                dishonesty, throat issues.
              </p>
              <p>
                <strong>Balanced State:</strong> Clear communication,
                authenticity, and creativity.
              </p>
            </section>
          )}
          {desc.name === "Ajna (Third Eye Chakra)" && (
            <section>
              <h1>Location: Between the eyebrows</h1>
              <p>
                <strong>Color:</strong> Indigo
              </p>
              <p>
                <strong>Element:</strong> Light
              </p>
              <p>
                <strong>Mantra:</strong> Om
              </p>
              <p>
                <strong>Function:</strong> Intuition, wisdom, and inner vision.
              </p>
              <p>
                <strong>Yoga Focus:</strong> Meditation, Child’s Pose
                (Balasana), and forward bends.
              </p>
              <p>
                <strong>Imbalance Signs:</strong> Confusion, lack of focus,
                headaches.
              </p>
              <p>
                <strong>Balanced State:</strong> Strong intuition, clarity, and
                spiritual awareness.
              </p>
            </section>
          )}
          {desc.name === "Sahasrara (Crown Chakra)" && (
            <section>
              <h1>Location: Top of the head</h1>
              <p>
                <strong>Color:</strong> Violet or White
              </p>
              <p>
                <strong>Element:</strong> Cosmic Energy
              </p>
              <p>
                <strong>Mantra:</strong> Silence or Om
              </p>
              <p>
                <strong>Function:</strong> Connection to higher consciousness
                and universal energy.
              </p>
              <p>
                <strong>Yoga Focus:</strong> Meditation, Headstand (Sirsasana),
                and Corpse Pose (Savasana).
              </p>
              <p>
                <strong>Imbalance Signs:</strong> Spiritual disconnection,
                depression, confusion.
              </p>
              <p>
                <strong>Balanced State:</strong> Enlightenment, unity, and deep
                spiritual connection.
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chakra;
