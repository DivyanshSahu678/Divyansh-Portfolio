import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="border-t border-neutral-800 py-32"
    >
      <Container>
        <SectionTitle
          number="05"
          title="Education"
          subtitle="My academic journey."
        />

        {education.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-neutral-800 bg-[#0d0d0d] p-8"
          >
            <h3 className="text-3xl font-bold">
              {item.degree}
            </h3>

            <p className="mt-2 text-[#CCFF00]">
              {item.branch}
            </p>

            <p className="mt-5 text-gray-400">
              {item.college}
            </p>

            <p className="mt-2 text-gray-500">
              {item.duration}
            </p>

            <span className="mt-6 inline-block rounded-full bg-[#CCFF00] px-4 py-2 text-black">
              {item.status}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Education;