import { motion } from "framer-motion";
import React from "react";

type Props = {};

const projects = [
  {
    id: 1,
    imageSrc: "/images/netflix.png",
    title: "Netflix Clone",
    description: "Netflix Clone is a web application that mimics the Netflix streaming experience. Built with React and styled using Tailwind CSS, it offers features like user authentication, dynamic content display, and responsive design. Leveraging Firebase for backend services and the TMDb API for movie data, this project showcases advanced web development skills. The interactive UI and real-time data management demonstrate proficiency in modern web technologies and user-centric design."
  },
  {
    id: 2,
    imageSrc: "/images/movie.png",
    title: "CineSangam",
    description: "CineSangam is an innovative social platform designed for movie enthusiasts to connect and share their passion for films. Developed using JavaScript, HTML, and CSS for a seamless and interactive user experience, CineSangam allows users to join watch parties, exchange reviews, and discuss both the latest releases and timeless classics. The platform leverages Python and Django for robust backend functionality, with Beautiful Soup employed for web scraping and gathering movie data. With personalized recommendations, trending film lists, and interactive features, CineSangam blends cutting-edge technology with a love for cinema, offering users a dynamic and engaging social experience."
  },
  {
    id: 3,
    imageSrc: "/images/imdb.png",
    title: "CineVault",
    description: "CineVault is a comprehensive movie database application that mirrors the functionality of IMDB. Developed with React for a dynamic front-end experience, it utilizes the OMDB API for extensive movie data and integrates advanced search capabilities, user ratings, and detailed film information. The application is styled using Tailwind CSS, ensuring a responsive and modern design. This project highlights proficiency in API integration, state management, and creating an engaging user interface."
  },
  {
    id: 4,
    imageSrc: "/images/crowd.png",
    title: "Fundify",
    description: "Fundify is a modern online crowdfunding platform featuring a reward-based system. Built with React and Node.js, Fundify allows users to create and support campaigns while offering various rewards for contributors. It includes secure payment processing, user authentication, and campaign management. Styled with Tailwind CSS, the platform provides a seamless and attractive user experience. This project demonstrates skills in full-stack development, including backend integration and front-end design."
  }
];

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:mt-12 mt-20">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center md:mt-0 pt-20 mt-10 px-20 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.imageSrc}
              alt={project.title}
              className="h-48 w-48 md:h-80 md:w-80 object-contain" // Adjust height and width
            />
            <div className="space-y-10 px-0 md:px-10 max-w-5xl">
              <h4 className="text-xl md:text-3xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {project.id} of {projects.length} :
                </span>{" "}
                {project.title}
              </h4>
              <p className="text-sm md:text-lg text-center md:text-left">
                {project.description}
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
