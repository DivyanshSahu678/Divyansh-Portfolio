import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import profile from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="border-t border-neutral-800 py-32"
    >
      <Container>

        <SectionTitle
          number="01"
          title="About Me"
          subtitle="Who I am and what I love building."
        />

        <div className="grid gap-14 lg:grid-cols-2">

          <div>

            <p className="text-lg leading-9 text-gray-300">
              {profile.bio}
            </p>

          </div>

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              Current Focus
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {profile.currentFocus.map((item) => (

                <div
                  key={item}
                  className="rounded-md border border-neutral-800 bg-[#0d0d0d] p-4 transition hover:border-[#CCFF00]"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default About;