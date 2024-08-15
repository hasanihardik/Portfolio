import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pt-10">
        About
      </h3>
      <div className="flex flex-col items-center md:flex-row">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="md:mb-0 mb-5 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[450px]"
          src="/images/zebra.jpg"
        />
        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-2xl md:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#f7ab0a]/80">little</span>{" "}
            background
          </h4>
          <p className="text-sm md:text-base">
          Hi, I’m Hardik Hasani, a third-year Computer Science and Engineering student at VIT Chennai. 
          I’m passionate about solving complex problems and driven by a love for technology. 
          My journey so far has been defined by a dedication to innovation and a commitment to tackling challenging projects.
          <br/> 
          I thrive in collaborative environments and enjoy working on diverse projects that push the boundaries of what’s possible. 
          As I continue my studies, I’m excited to explore new opportunities and contribute to impactful solutions.
          <br/>
          Feel free to browse my portfolio to see my work, 
          and don’t hesitate to reach out for potential collaborations or opportunities.
          <br/>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
