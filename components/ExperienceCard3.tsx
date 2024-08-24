import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
        src="/images/solve.png"
      />
      <div className="px-5 md:px-10 py-3">
        <h4 className="text-3xl tracking-wider font-light">Organizer - SolveAThon</h4>
        <p className="font-semibold text-xl mt-1">VIT&apos;s Official Hackathon</p>
        <p className="text-sm uppercase py-5 text-gray-300">Jan 2024 - April 2024</p>
        <ul className="list-disc space-y-4 ml-5 text-base">
            <li>
            Organized Solve-A-Thon, the official hackathon led by the Hostel 
            Authority at VIT Chennai. Managed sponsorships, securing major partners 
            like Pepsi and others, and oversaw the entire event management, 
            including logistics and discipline. Ensured a smooth and engaging 
            experience for all participants while integrating sponsor contributions effectively.
            </li>
        </ul>
      </div>
    </article>
  );
}
