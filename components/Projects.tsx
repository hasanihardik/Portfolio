import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:mt-12 mt-20">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center md:mt-0 pt-20 mt-10 px-20 h-screen"
          >
            <motion.img
            initial={{y:-300,opacity:0}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
              src="/images/myimg.jpg"
              height={200}
              width={200}
              alt="img"
              className="h-32 w-32 md:h-64 md:w-64"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-5xl">
              <h4 className="text-xl md:text-3xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {index + 1} of {projects.length} :
                </span>{" "}
                MYIMG
              </h4>
              <p className="text-sm md:text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur doloribus, id perferendis quaerat fugiat labore
                mollitia inventore suscipit officia, aspernatur architecto alias
                aperiam explicabo modi ipsam quasi est harum fugit?
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
