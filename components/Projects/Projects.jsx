"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
import { images } from "../../constants";

const catagories = ["all", "front end", "back end", "others"];

const projects = [
  {
    title: "DevEleven Website",
    image: images.project_develeven,
    live: "https://develeven.vercel.app/",
    github: "https://github.com/DEVELEVEN-io/develeven-io",
    category: "front end",
    tags: ["TypeScript", "React", "Next.js", "CSS"],
    description: "",
  },
  {
    title: "Ragib's Portfolio",
    image: images.project_ragib_portfolio,
    live: "https://ragibalasad.me/",
    github: "https://github.com/ragibalasad/ragib-portfolio",
    category: "front end",
    tags: ["JavaScript", "Next.js", "Tailwind CSS", "Framer"],
    description: "Ragib Al Asad's portfolio website. Not Complete Yet",
  },
  {
    title: "Test Project 1",
    image: images.project_develeven,
    live: "https://ragibalasad.me/",
    github: "https://github.com/ragibalasad/ragib-portfolio",
    category: "back end",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    description: "",
  },
  {
    title: "Test Project 2",
    image: images.project_develeven,
    live: "https://ragibalasad.me/",
    github: "https://github.com/ragibalasad/ragib-portfolio",
    category: "back end",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    description: "",
  },
];

const Projects = () => {
  // Distribute project items into three arrays
  const grid1Items = projects.filter((_, index) => index % 3 === 0);
  const grid2Items = projects.filter((_, index) => index % 3 === 1);
  const grid3Items = projects.filter((_, index) => index % 3 === 2);

  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const transitionEffects = {
    hidden: { opacity: 0, scale: 0.95, x: 50 }, // Slight scaling and moving to the right when hidden
    show: { opacity: 1, scale: 1, x: 0 }, // Moving back into position with full opacity
    exit: { opacity: 0, scale: 0.9, x: -50, transition: { duration: 0.3 } }, // Exit by moving to the left and shrinking
  };

  return (
    <section
      id="projects"
      className="projectsSection relative my-24 dark:bg-slate-900/70 max-sm:px-6"
    >
      <div className="container mx-auto h-auto py-16 sm:w-4/5">
        <p className="border-l-4 border-cyan-400 pl-4 font-semibold dark:text-slate-300">
          Projects
        </p>

        <div className="mb-6 flex py-6 max-sm:flex-col max-sm:gap-10">
          <h1 className="text-4xl font-semibold dark:text-slate-300">
            {"Works I've Done"}
          </h1>

          <ul className="flex select-none flex-wrap text-sm font-medium sm:ml-auto">
            {/* Filter Buttons loop */}
            {catagories.map((catagory, index) => (
              <li
                key={index}
                className={`cursor-pointer rounded-lg px-4 py-2 font-medium capitalize text-cyan-600 dark:text-cyan-400 ${filter === catagory ? "bg-white dark:bg-slate-700/70" : ""}`}
                onClick={() => setFilter(catagory)}
              >
                {catagory}
              </li>
            ))}
          </ul>
        </div>

        {/* Display Filtered Projects */}
        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title} // Use title as unique key to prevent index clashes
                className="h-fit overflow-hidden rounded-lg bg-white shadow dark:bg-slate-900"
                layout
                variants={transitionEffects}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transitions
              >
                <div className="overflow-hidden">
                  <Image
                    className="transition-all hover:scale-110"
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <div className="flex">
                    <h1 className="text-base font-semibold dark:text-slate-200">
                      {project.title}
                    </h1>
                    <div className="ml-auto flex gap-4 text-xl">
                      <a
                        className="rounded-full transition hover:text-cyan-400"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEye />
                      </a>
                      <a
                        className="rounded-full transition hover:text-cyan-400"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <div className="project-tags flex flex-wrap space-x-2 py-4">
                    <span class="">JavaScript</span>
                    <span class="">Python</span>
                    <span class="">HTML</span>
                    <span class="">CSS</span>
                  </div>
                  <div className="mt-1 text-sm">{project.description}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
