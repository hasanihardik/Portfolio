import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className=" sticky top-0 flex items-start justify-between mx-auto max-w-7xl p-5 z-20">
      {/* Social Icons */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.youtube.com/c/howtohardik"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/hardikhasani"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/hasanihardik"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

        
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-400 cursor-pointer p-3"
      >
  
        <Link href='#contact' className="flex gap-3 items-center">
        <EnvelopeIcon className="w-7 h-7"/>
        <p className="uppercase hidden md:inline-flex text-sm">
          get in touch
        </p>
        </Link>
        
      </motion.div>
    </header>
  );
}

export default Header;
