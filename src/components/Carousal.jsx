import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { UserContext } from "../context/UserContext";

function Carousal() {
  const { courses } = useContext(UserContext);
  return (
    <Carousel
      className="font-semibold py-10"
      autoPlay
      infiniteLoop
      showThumbs={false}
      showArrows={true}
      showIndicators={false}
      swipeable={true}
    >
      <div className="flex text-start items-center">
        <img
          className="flex-1 h-[50vh] object-cover "
          src={courses.onlineYoga}
          alt="onlineYoga"
        />
        <ol className="flex-1 ml-5 list-disc">
          <h1 className="text-3xl font-bold mb-8">Online-Yoga</h1>
          <li>
            Live interactive classes via Zoom/Google Meet for real-time
            guidance.
          </li>
          <li>Pre-recorded video lessons for flexible practice.</li>
          <li>Assignments & practice logs to track progress.</li>
          <li>
            Community support through discussion forums or WhatsApp groups.
          </li>
        </ol>
      </div>
      <div className="flex text-start items-center">
        <img
          className="flex-1 h-[50vh] shadow-md rounded-full object-cover"
          src={courses.studioYoga}
          alt="studioYoga"
        />
        <ol className="flex-1 ml-5 list-disc">
          <h1 className="text-3xl font-bold mb-8">Studio-Yoga</h1>
          <li>
            Dedicated yoga space with mats, props, mirrors, and calming
            ambiance.
          </li>
          <li>Group practice that builds community and motivation.</li>
          <li>
            Hands-on adjustments from instructors for correct posture and
            alignment.
          </li>
          <li>
            Atmosphere often enhanced with music, incense, or meditation
            corners.
          </li>
        </ol>
      </div>
      <div className="flex text-start items-center">
        <img
          className="flex-1 h-[50vh] shadow-md rounded-full object-cover"
          src={courses.preRecorded}
          alt="preRecorded"
        />
        <ol className="flex-1 ml-5 list-disc">
          <h1 className="text-3xl font-bold mb-8">Pre-Record Yoga Classes</h1>
          <li>On-demand video lessons you can watch anytime.</li>
          <li>Structured playlists (beginner, intermediate, advanced).</li>
          <li>Replay option to refine postures at your own pace.</li>
          <li>
            Downloadable resources like PDFs for sequences or breathing guides.
          </li>
        </ol>
      </div>
    </Carousel>
  );
}

export default Carousal;
