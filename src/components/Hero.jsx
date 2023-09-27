import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute 
        inset-0 top-[120px] max-w-7xl 
        mx-auto flex items-start flex-row gap-5`}
      >
        <div
          className="flex flex-col 
        justify-center items-center 
        mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div className={`${styles.heroHeadText} text-white`}>
          <h1>
            Hi, I'm <span className="text-[#915eff]">Manikandan</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div
        className="absolute w-full flex 
          justify-center items-center 
          bottom-32 xs:bottom-10"
      >
        <a href="#work">
          <div
            className="w-[35px] h-[64px] rounded-3xl
            border-4 border-secondary flex
            justify-center items-start p-2"
          >
            <motion.div /* Framer Motion circle with up and down */
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
