import { motion } from "framer-motion";
import React from "react";
import ExperienceCard1 from "./ExperienceCard1";
import ExperienceCard2 from "./ExperienceCard2";
import ExperienceCard3 from "./ExperienceCard3";


type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex overflow-hidden flex-col text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pt-16">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll px-0 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <ExperienceCard1 />
        <ExperienceCard3 />
        <ExperienceCard2 />
      </div>
    </motion.div>
  );
}
