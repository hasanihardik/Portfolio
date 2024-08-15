import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Link from "next/link";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Head>
        <title>My Porfolio</title>
      </Head>

      <Header />
      <section id="hero" className=" snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className=" snap-end">
        <Projects />
      </section>
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-end px-10">
          <Link href="#hero">
            <ChevronDoubleUpIcon className="w-8 h-8 bg-gray-600/10 rounded-full text-[#f7ab0a]/50 filter grayscale hover:grayscale-0" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
