import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import profile from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="border-t border-neutral-800 py-32"
      className="py-24"
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

          <div className="mt-8">
  <span className="rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-5 py-2 text-sm font-semibold text-[#CCFF00]">
    🚀 Open for Internship
  </span>
</div>

          <div className="mt-10 grid grid-cols-2 gap-5">

  <div className="rounded-2xl border border-neutral-800 bg-[#0d0d0d] p-6 transition hover:border-[#CCFF00]">
    <h3 className="text-3xl font-black text-[#CCFF00]">
      10+
    </h3>

    <p className="mt-2 text-gray-400">
      Projects Built
    </p>
  </div>

  <div className="rounded-2xl border border-neutral-800 bg-[#0d0d0d] p-6 transition hover:border-[#CCFF00]">
    <h3 className="text-3xl font-black text-[#CCFF00]">
      12+
    </h3>

    <p className="mt-2 text-gray-400">
      Certifications
    </p>
  </div>

  <div className="rounded-2xl border border-neutral-800 bg-[#0d0d0d] p-6 transition hover:border-[#CCFF00]">
    <h3 className="text-3xl font-black text-[#CCFF00]">
      AI / ML
    </h3>

    <p className="mt-2 text-gray-400">
      Current Focus
    </p>
  </div>

  <div className="rounded-2xl border border-neutral-800 bg-[#0d0d0d] p-6 transition hover:border-[#CCFF00]">
    <h3 className="text-3xl font-black text-[#CCFF00]">
      3rd
    </h3>

    <p className="mt-2 text-gray-400">
      Year B.Tech CSE
    </p>
  </div>

</div>

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