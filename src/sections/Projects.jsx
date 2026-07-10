import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24"
    >
      <Container>

        <SectionTitle
          number="03"
          title="Projects"
          subtitle="Some of my recent work and personal projects."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .2,
              }}
              whileHover={{
                y: -12,
              }}
              className="group overflow-hidden rounded-3xl border border-neutral-800 bg-[#0b0b0b] shadow-xl transition-all duration-500 hover:border-[#CCFF00]"
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                {index === 0 && (

                  <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-bold text-black">

                    <FaStar />

                    Featured

                  </div>

                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              </div>

              {/* Content */}

              <div className="p-7">

                <h2 className="text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-6 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-neutral-700 px-4 py-2 text-sm transition group-hover:border-[#CCFF00]"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                                {/* Buttons */}

                <div className="mt-8 flex items-center gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 font-medium transition-all duration-300 hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-[#CCFF00] px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;