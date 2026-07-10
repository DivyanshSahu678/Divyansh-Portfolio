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
  Python: <FaPython size={42} />,
  "C++": <SiCplusplus size={42} />,
  Java: <FaJava size={42} />,
  React: <FaReact size={42} />,
  HTML: <FaHtml5 size={42} />,
  CSS: <FaCss3Alt size={42} />,
  JavaScript: <FaJs size={42} />,
  MySQL: <FaDatabase size={42} />,
  Git: <FaGitAlt size={42} />,
  GitHub: <FaGithub size={42} />,
  "Machine Learning": <SiTensorflow size={42} />,
  "Data Science": <SiScikitlearn size={42} />,
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

        <div className="mb-14 flex flex-wrap justify-center gap-5">

  <div className="rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-6 py-3 text-[#CCFF00]">
    12 Technologies
  </div>

  <div className="rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-6 py-3 text-[#CCFF00]">
    AI / ML
  </div>

  <div className="rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-6 py-3 text-[#CCFF00]">
    Full Stack
  </div>

</div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="group rounded-2xl border border-neutral-800 bg-[#0d0d0d] p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#CCFF00] hover:shadow-[0_0_30px_rgba(204,255,0,0.25)]"
            >
              <div className="mb-6 flex justify-center text-[#CCFF00] transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6">
                {icons[skill]}
              </div>

              <h3 className="text-center text-lg font-bold tracking-wide">
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