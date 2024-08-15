import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import htmlIcon from '../public/images/html-icon.png'

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="mt-10 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="w-32 h-32 rounded-full object-cover"
        src="/images/zebra.jpg"
      />
      <div className="px-5 md:px-10 py-3">
        <h4 className="text-3xl tracking-wider font-light">CEO of ZEBRAA</h4>
        <p className="font-semibold text-xl mt-1">ZEBRAA Company</p>
        <div className="flex space-x-2 my-2 ">
            <Image className="w-7 h-7 rounded-full" src={htmlIcon} alt="icon" />
            <Image className="w-7 h-7 rounded-full" src={htmlIcon} alt="icon" />
            <Image className="w-7 h-7 rounded-full" src={htmlIcon} alt="icon" />
        </div>
        <p className="text-sm uppercase py-5 text-gray-300">Start - End</p>
        <ul className="list-disc space-y-4 ml-5 text-base">
            <li>Summary Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dicta.</li>
            <li>Summary Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dicta.</li>
        </ul>
      </div>
    </article>
  );
}
