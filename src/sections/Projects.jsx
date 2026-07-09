import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import projects from "../data/projects";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>

        <SectionTitle
          number="03"
          title="Projects"
          subtitle="Some of my recent work."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00] hover:shadow-[0_0_30px_rgba(204,255,0,0.25)]"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-700 px-3 py-1 text-sm transition hover:border-[#CCFF00]"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md border border-neutral-700 px-4 py-2 transition hover:border-[#CCFF00]"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md bg-[#CCFF00] px-4 py-2 font-semibold text-black transition hover:scale-105"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;