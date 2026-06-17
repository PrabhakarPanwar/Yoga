// Basic Assets (used in Navbar + AddProduct)
import cancel from "../assets/cancel.jpg";
import menu from "../assets/menu.jpg";
import uploadImg from "../assets/images.png";
import logoImg from "./logo.png";

// Shubh's photos (used in Hero, About, YogaRetreat)
import shubh from "../assets/shubh.jpeg";
import shubh1 from "../assets/shubh1.jpeg";
import shubh2 from "../assets/shubh2.jpeg";
import shubh3 from "../assets/shubh3.jpeg";
import shubh4 from "../assets/shubh4.jpeg";
import shubh5 from "../assets/shubh5.jpeg";
import shubh6 from "../assets/shubh6.jpeg";
import shubh7 from "../assets/shubh7.jpeg";
import shubh8 from "../assets/shubh8.jpeg";
import shubh9 from "../assets/shubh9.jpeg";
import shubh10 from "../assets/shubh10.jpeg";
import shubh11 from "../assets/shubh11.jpeg";
import shubh12 from "../assets/shubh12.jpeg";
import shubh13 from "../assets/shubh13.jpeg";
import shubh14 from "../assets/shubh14.jpeg";
import shubh15 from "../assets/shubh15.jpeg";
import shubh100 from "../assets/shubh100.jpeg";
import shubh16 from "../assets/shubhnew.thumbnail.jpg";
import shubh17 from "../assets/shubhnew2.thumbnail.jpg";
import shubh18 from "../assets/shubhnew3.thumbnail.jpg";
import shubh19 from "../assets/shubhnew4.thumbnail.jpg";
import shubh20 from "../assets/shubhnew5.thumbnail.jpg";
import shubh21 from "../assets/shubhnew6.thumbnail.jpg";
import shubh25 from "../assets/shubhnew7.thumbnail.jpeg";
import shubh26 from "../assets/shubhnew8.thumbnail.jpeg";
import shubh27 from "../assets/shubhnew9.thumbnail.jpeg";


import onlineYoga from "../assets/onlineYoga.jpg";
import preRecorded from "../assets/preRecorded.jpg";
import studioYoga from "../assets/studioYoga.jpg";

export const assets = {
  cancel,
  menu,
  uploadImg,
  logo: logoImg,
};

// Courses data — used by Carousal.jsx
export const courses = [
  {
    image: onlineYoga,
    name: "onlineYoga",
    heading: "Online-Yoga",
    point: [
      { p: "Live interactive classes via Zoom/Google Meet for real-time guidance." },
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
      { p: "Downloadable resources like PDFs for sequences or breathing guides." },
    ],
  },
  {
    image: studioYoga,
    name: "studioYoga",
    heading: "Studio-Yoga",
    point: [
      { p: "Dedicated yoga space with mats, props, mirrors, and calming ambiance." },
      { p: "Group practice that builds community and motivation." },
      { p: "Hands-on adjustments from instructors for correct posture and alignment." },
      { p: "Atmosphere often enhanced with music, incense, or meditation corners." },
    ],
  },
];

// Shubh's photo gallery — used by Hero.jsx, About.jsx, YogaRetreat.jsx
export const shubhPic = [
  shubh, shubh1, shubh2, shubh3, shubh4,
  shubh5, shubh6, shubh7, shubh8, shubh9,
  shubh10, shubh11, shubh12, shubh13, shubh14, shubh15,
  shubh16, shubh17, shubh18, shubh19, shubh20, shubh21, shubh100,shubh25,shubh26,shubh27
];