import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center space-y-8 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for current profieciency
      </h3>
      <div className="grid grid-cols-4 gap-5 xl:gap-8 ">
        <Skill src="/images/zebra.jpg/" percent="100%"/>
        <Skill src="/images/zebra.jpg/" percent="100%"/>
        <Skill src="/images/zebra.jpg/" percent="100%"/>
        <Skill src="/images/zebra.jpg/" percent="100%"/>
        <Skill src="/images/zebra.jpg/" percent="100%"/>
        <Skill src="/images/zebra.jpg/" percent="100%"/>
        <Skill src="/images/zebra.jpg/" percent="100%"/>
        <Skill src="/images/zebra.jpg/" percent="100%"/>
        <Skill src="/images/zebra.jpg/" percent="100%"/>
        <Skill src="/images/zebra.jpg/" percent="100%"/>
      </div>
    </motion.div>
  );
}

export default Skills;
