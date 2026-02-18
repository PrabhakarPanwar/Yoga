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
      showArrows={false}
      showIndicators={true}
      swipeable={true}
    >
      {courses.map((i, index) => (

        <div key={index} className="sm:flex text-start items-center">
          <img
            className=" flex-1 h-[50vh] object-cover overflow-hidden"
            src={i.image}
            alt={i.name}
          />
          <section className="flex-1">
            <div className="list-disc mx-auto w-[70%]">
              <h1>{i.heading}</h1>
              {i.point.map((para, index) => (
                <li key={index}>{para.p}</li>
              ))}
            </div>
          </section>
        </div>
      ))}
    </Carousel>
  );
}

export default Carousal;
