import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="border-t border-neutral-800 py-28"
    >
      <Container>

        <SectionTitle
          number="01"
          title="About Me"
          subtitle="A passionate learner driven by Artificial Intelligence, Data Science and modern software engineering."
        />

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <p className="mb-6 text-lg leading-9 text-gray-300">
              I'm Divyansh Sahu, a B.Tech Computer Science Engineering student
              with a deep passion for Artificial Intelligence, Machine Learning,
              Data Science and Software Development.
            </p>

            <p className="mb-6 text-lg leading-9 text-gray-400">
              I enjoy transforming ideas into practical software solutions while
              continuously exploring emerging technologies. My goal is to build
              impactful products that combine intelligence, scalability and
              exceptional user experience.
            </p>

            <p className="text-lg leading-9 text-gray-400">
              Currently, I'm strengthening my expertise in Python, React,
              Machine Learning and Full Stack Development while actively working
              on real-world projects.
            </p>

          </div>

          <div className="border border-neutral-800 bg-[#0d0d0d] p-10">

            <h3 className="mb-8 text-3xl font-bold">
              Current Focus
            </h3>

            <ul className="space-y-5 text-gray-300">

              <li>• Artificial Intelligence</li>

              <li>• Machine Learning</li>

              <li>• Data Science</li>

              <li>• Python Development</li>

              <li>• React Development</li>

              <li>• Problem Solving</li>

              <li>• Open Source Learning</li>

            </ul>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default About;