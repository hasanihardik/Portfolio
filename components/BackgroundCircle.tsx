import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    animate={{
        opacity:[0.1,0.2,0.4,0.8,0.1,1],
        scale:[1,2,2,3,1],
        borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{
        duration:2.5
    }}
    className="relative flex justify-center items-center">
      <div className=" absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"></div>
      <div className=" absolute border border-[#333333]/10 rounded-full h-[300px] w-[300px] mt-52 "></div>
      <div className=" absolute border border-[#333333]/50 rounded-full h-[500px] w-[500px] mt-52 "></div>
      <div className=" absolute border border-[#F7Ab0a]/50 rounded-full h-[650px] w-[650px] mt-52 animate-pulse opacity-20"></div>
      <div className=" absolute border border-[#333333]/50 rounded-full h-[800px] w-[800px] mt-52 "></div>
    </motion.div>
  );
}
