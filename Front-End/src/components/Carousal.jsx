import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { UserContext } from "../context/UserContext";
import { motion } from "framer-motion";

function Carousal() {
  const { courses } = useContext(UserContext);

  return (
    <div className="w-[92%] mx-auto py-16">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
        swipeable={true}
        interval={4500}
        transitionTime={900} // 🔥 smoother slide
        stopOnHover={true}
        className="rounded-3xl overflow-hidden"
      >
        {courses.map((i, index) => (
          <div key={index}>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-10 
              bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl 
              p-6 md:p-10"
            >

              {/* 🔥 IMAGE */}
              <motion.div
                className="flex-1 w-full overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  className="w-full h-[45vh] md:h-[55vh] object-cover object-[center_80%] rounded-2xl"
                  src={i.image}
                  alt={i.name}
                />
              </motion.div>

              {/* 🔥 TEXT */}
              <motion.section
                className="flex-1 text-left"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <div className="w-[90%] mx-auto">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">
                    {i.heading}
                  </h1>

                  <ul className="space-y-3 text-gray-600 text-[15px] md:text-base leading-relaxed">
                    {i.point.map((para, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-green-500 mt-1">•</span>
                        {para.p}
                      </motion.li>
                    ))}
                  </ul>

                  {/* 🔥 BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-gradient-to-r 
                    from-green-500 to-emerald-600 
                    text-white rounded-full shadow-lg 
                    hover:shadow-xl transition-all duration-300"
                  >
                    Explore Now
                  </motion.button>
                </div>
              </motion.section>

            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousal;
