//For Half component

import YogaPose1 from "../assets/YogaPose1.jpg";
import YogaPose2 from "../assets/YogaPose2.jpg";
import YogaPose3 from "../assets/YogaPose3.jpg";

//For Chakra component

import firstChakra from "../assets/firstChakra.jpg";
import secondChakra from "../assets/secondChakra.jpg";
import thirdChakra from "../assets/thirdChakra.jpg";
import fourthChakra from "../assets/fourthChakra.jpg";
import fifthChakra from "../assets/fifthChakra.jpg";
import sixthChakra from "../assets/sixthChakra.jpg";
import seventhChakra from "../assets/seventhChakra.jpg";

// For Carousal component

import onlineYoga from "../assets/onlineYoga.jpg";
import preRecorded from "../assets/preRecorded.jpg";
import studioYoga from "../assets/studioYoga.jpg";

export const pose = [
  {
    image: YogaPose1,
    name: "Yoga Pose 1",
    heading: "Find Your Inner Balance",
    para: "Discover the transformative power of yoga—where movement meets mindfulness. Whether you're a beginner or a seasoned practitioner, each pose invites you to reconnect with your body, calm your mind, and awaken your spirit. Embrace flexibility, build strength, and cultivate inner peace through guided sessions designed to harmonize your physical and emotional well-being. Step onto the mat and begin your journey toward clarity, vitality, and serenity.",
  },
  {
    image: YogaPose2,
    name: "Yoga Pose 2",
    heading: "Embrace Your Flexibility",
    para: "Unfold your body, quiet your mind, and embrace the serenity within. This pose is more than a stretch—it's a moment of connection between breath and movement, strength and surrender. Whether you're easing into your day or winding down from it, let each motion guide you toward clarity, calm, and confidence. Our yoga practice is designed to help you build flexibility, release tension, and cultivate a deeper awareness of your physical and emotional well-being. Step into this space and allow yourself to grow, one breath at a time.",
  },
  {
    image: YogaPose3,
    name: "Yoga Pose 3",
    heading: "Embrace the Downward Flow",
    para: "Step into the classic Downward Dog and allow yourself to feel both grounded and uplifted. This pose is your personal invitation to stretch out the tension of the day, lengthen your spine, and find a moment of peaceful alignment. Here, on the mat, you'll discover how each breath can help you release the old and welcome the new, creating space for both strength and serenity. Let this simple yet powerful posture guide you toward a balanced and centered self.",
  },
];


export const courses = [
  {
    image: onlineYoga,
    name: "onlineYoga",
    heading: "Online-Yoga",
    point: [
      {
        p: "Live interactive classes via Zoom/Google Meet for real-time guidance.",
      },
      { p: "Pre-recorded video lessons for flexible practice." },
      { p: "Assignments & practice logs to track progress." },
      { p: "Community support through discussion forums or WhatsApp groups." },
    ],
  },
  {
    image: preRecorded,
    name: "preRecorded",
    heading: "Pre-Recorded Yoga",
    point: [
      { p: "Pre-Record Yoga Classes" },
      { p: "On-demand video lessons you can watch anytime." },
      { p: "Structured playlists (beginner, intermediate, advanced)." },
      {
        p: "Downloadable resources like PDFs for sequences or breathing guides.",
      },
    ],
  },
  {
    image: studioYoga,
    name: "studioYoga",
    heading: "Studio-Yoga",
    point: [
      {
        p: "Dedicated yoga space with mats, props, mirrors, and calming ambiance.",
      },
      { p: "Group practice that builds community and motivation." },
      {
        p: "Hands-on adjustments from instructors for correct posture and alignment.",
      },
      {
        p: "Atmosphere often enhanced with music, incense, or meditation corners.",
      },
    ],
  },
];

export const sevenChakra = [
  { name: "Muladhara(Root Chakra)", color: "#FF474C", image: firstChakra },
  {
    name: "Svadhisthana(Sacral Chakra)",
    color: "#FDAA48",
    image: secondChakra,
  },
  {
    name: "Manipura(Solar Plexus Chakra)",
    color: "#FFF44F",
    image: thirdChakra,
  },
  { name: "Anahata (Heart Chakra)", color: "lightgreen", image: fourthChakra },
  { name: "Vishuddha (Throat Chakra)", color: "skyblue", image: fifthChakra },
  { name: "Ajna (Third Eye Chakra)", color: "#8773C5", image: sixthChakra },
  { name: "Sahasrara (Crown Chakra)", color: "violet", image: seventhChakra },
];