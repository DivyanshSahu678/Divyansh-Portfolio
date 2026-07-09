function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-20 md:px-20">
      <div className="max-w-5xl">

        <p className="mb-6 tracking-[0.35em] uppercase text-[#ccff00]">
          AI • ML • DATA SCIENCE
        </p>

        <h1 className="text-6xl font-black leading-none md:text-8xl lg:text-[9rem]">
          DIVYANSH
          <br />
          SAHU
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-400">
          Passionate Computer Science student focused on Artificial Intelligence,
          Machine Learning and Data Science. I enjoy building intelligent,
          scalable and user-centric software solutions.
        </p>

        <div className="mt-10 flex gap-4">

          <a
            href="https://github.com/DivyanshSahu678"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-[#ccff00] px-6 py-3 font-semibold text-black"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/divyansh-sahu-34a026345"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-700 px-6 py-3"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;