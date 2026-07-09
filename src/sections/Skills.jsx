import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import skills from "../data/skills";

import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiTensorflow,
  SiScikitlearn,
} from "react-icons/si";

const icons = {
  Python: <FaPython size={40} />,
  "C++": <SiCplusplus size={40} />,
  Java: <FaJava size={40} />,
  React: <FaReact size={40} />,
  HTML: <FaHtml5 size={40} />,
  CSS: <FaCss3Alt size={40} />,
  JavaScript: <FaJs size={40} />,
  MySQL: <FaDatabase size={40} />,
  Git: <FaGitAlt size={40} />,
  GitHub: <FaGithub size={40} />,
  "Machine Learning": <SiTensorflow size={40} />,
  "Data Science": <SiScikitlearn size={40} />,
};

function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>

        <SectionTitle
          number="02"
          title="Skills"
          subtitle="Technologies I use to build modern applications."
        />

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="group rounded-xl border border-neutral-800 bg-[#0d0d0d] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00] hover:shadow-[0_0_25px_rgba(204,255,0,0.3)]"
            >
              <div className="mb-5 text-[#CCFF00] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {icons[skill]}
              </div>

              <h3 className="text-lg font-semibold">
                {skill}
              </h3>

              <p className="mt-2 text-sm text-gray-400 group-hover:text-white">
                Learning • Building • Improving
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Skills;