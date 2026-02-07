import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { UserContext } from "../context/UserContext";

function Carousal() {
  const { courses } = useContext(UserContext);
  return (
    <Carousel
      className="font-semibold py-10 px-5"
      autoPlay
      infiniteLoop
      showThumbs={false}
      showArrows={true}
      showIndicators={false}
      swipeable={true}
    >
      <div className="sm:flex text-start items-center">
        <img
          className=" flex-1  h-[50vh] object-contain overflow-hidden"
          src={courses.onlineYoga}
          alt="onlineYoga"
        />
        <section className="flex-1">
          <ol className="list-disc mx-auto w-[70%]">
            <h1>Online-Yoga</h1>
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
        </section>
      </div>
      <div className="sm:flex text-start items-center ">
        <img
          className="flex-1  h-[50vh] shadow-md rounded-full object-cover overflow-hidden"
          src={courses.studioYoga}
          alt="studioYoga"
        />
        <section className="flex-1">
          <ol className="list-disc mx-auto w-[70%]">
            <h1>Studio-Yoga</h1>
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
        </section>
      </div>
      <div className="sm:flex text-start items-center">
        <img
          className=" flex-1  h-[50vh] shadow-md rounded-full object-cover overflow-hidden"
          src={courses.preRecorded}
          alt="preRecorded"
        />
        <section className="flex-1">
          <ol className=" list-disc mx-auto w-[70%]">
            <h1>Pre-Record Yoga Classes</h1>
            <li>On-demand video lessons you can watch anytime.</li>
            <li>Structured playlists (beginner, intermediate, advanced).</li>
            <li>Replay option to refine postures at your own pace.</li>
            <li>
              Downloadable resources like PDFs for sequences or breathing
              guides.
            </li>
          </ol>
        </section>
      </div>
    </Carousel>
  );
}

export default Carousal;
