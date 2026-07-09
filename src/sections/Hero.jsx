import Container from "../components/Container";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#CCFF00]">
              AI • ML • DATA SCIENCE
            </p>

            <h1 className="text-6xl font-black leading-none md:text-8xl lg:text-[8rem]">
              DIVYANSH
              <br />
              SAHU
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              B.Tech Computer Science student passionate about Artificial
              Intelligence, Machine Learning, Data Science and building
              modern software experiences.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-md bg-[#CCFF00] px-7 py-4 font-semibold text-black transition hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-md border border-gray-700 px-7 py-4 transition hover:border-[#CCFF00]"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex items-center justify-center">

            <div className="flex h-[420px] w-[420px] items-center justify-center rounded-full border border-[#CCFF00]/40">

              <div className="flex h-[320px] w-[320px] items-center justify-center rounded-full border border-gray-700">

                <div className="flex h-[220px] w-[220px] items-center justify-center rounded-full border border-[#CCFF00]">

                  <span className="text-4xl font-bold text-[#CCFF00]">
                    DS
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;