import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-neutral-800 py-32"
    >
      <Container>
        <SectionTitle
          number="03"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my technical skills and problem-solving approach."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-neutral-800 bg-[#0d0d0d] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-sm"
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
                  className="rounded-md border border-neutral-700 px-4 py-2 hover:border-[#CCFF00]"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-[#CCFF00] px-4 py-2 font-semibold text-black"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;