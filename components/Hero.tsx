import Image from "next/image";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import myimg from "../public/images/myimg.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Hello.", "My name is Hardik Hasani.", "Welcome to my Portfolio site."],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={myimg}
        alt="profile"
      />
      
        <h2 className="text-sm uppercase text-gray-500 p-2 tracking-[15px]">
          Full stack Developer
        </h2>
        <div className="z-20">
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="red" />
        </h1>
        </div>
        
        <div className="pt-5 flex flex-col gap-2 md:flex-row z-20">
            <Link href='#about'>
                <button className="heroButton">About</button>
            </Link>
            <Link href='#experience'>
                <button className="heroButton">Experience</button>
            </Link>
            <Link href='#skills'>
                <button className="heroButton">Skills</button>
            </Link>
            <Link href='#projects'>
                <button className="heroButton">Projects</button>
            </Link>
            
        
      </div>
    </div>
  );
}
