import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import education from "../data/education";

function Education() {
  return (
    <section id="education" className="py-24">
      <Container>

        <SectionTitle
          number="05"
          title="Education"
          subtitle="My academic journey."
        />

        <div className="relative border-l-2 border-neutral-800 ml-4">

          {education.map((item) => (
            <div key={item.id} className="mb-12 ml-8 relative">

              <span className="absolute -left-[42px] top-2 h-5 w-5 rounded-full bg-[#CCFF00] border-4 border-black"></span>

              <p className="text-[#CCFF00] font-semibold">
                {item.duration}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {item.degree}
              </h3>

              <h4 className="mt-1 text-gray-400">
                {item.institute}
              </h4>

              <p className="mt-3 text-gray-400 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Education;