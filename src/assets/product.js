import heroAbstract from "../assets/heroAbstract.mp4";
import cancel from "../assets/cancel.jpg";
import menu from "../assets/menu.jpg";
import logPose from "../assets/logPose.jpg";

// For card component

import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";
import book6 from "../assets/book6.jpg";

// For Carousal component

import onlineYoga from "../assets/onlineYoga.jpg";
import preRecorded from "../assets/preRecorded.jpg";
import studioYoga from "../assets/studioYoga.jpg";

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

export const assets = {
  heroAbstract,
  cancel,
  menu,
  logPose,
};

export const courses = {
  onlineYoga,
  preRecorded,
  studioYoga,
};

export const yogaPose = [
  {
    name: "Yoga Pose 1",
    image: YogaPose1,
  },
  {
    name: "Yoga Pose 2",
    image: YogaPose2,
  },
  {
    name: "Yoga Pose 3",
    image: YogaPose3,
  },
];

export const pic = [
  {
    name: "Power of Yoga",
    image: book1,
  },
  {
    name: "Textbook of Yoga",
    image: book2,
  },
  {
    name: "Book of Yoga",
    image: book3,
  },
  {
    name: "Power of Yoga",
    image: book4,
  },
  {
    name: "Yoga for Children",
    image: book5,
  },
  {
    name: "Light on Yoga",
    image: book6,
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
