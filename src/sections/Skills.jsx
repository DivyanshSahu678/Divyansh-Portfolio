import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-neutral-800 py-32"
    >
      <Container>
        <SectionTitle
          number="02"
          title="Skills"
          subtitle="Technologies I use to build intelligent and modern applications."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group cursor-pointer rounded-lg border border-neutral-800 bg-[#0d0d0d] p-6 transition-all duration-300 hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>

              <p className="mt-2 text-sm opacity-70 group-hover:opacity-100">
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