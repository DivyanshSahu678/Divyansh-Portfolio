import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from "react-icons/fa";
import profile from "../../data/profile";

function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 text-center lg:flex-row lg:text-left">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-black tracking-wide text-[#CCFF00]">
            {profile.name}
          </h2>

          <p className="mt-3 text-gray-400">
            AI / ML Engineer • Data Science Enthusiast • Full Stack Developer
          </p>

          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 lg:justify-start">
            Built with React, Tailwind CSS & Framer Motion
            <FaHeart className="text-red-500" />
          </p>

          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-700 p-3 text-xl transition hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-700 p-3 text-xl transition hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black"
          >
            <FaLinkedin />
          </a>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full bg-[#CCFF00] p-3 text-black transition duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(204,255,0,0.5)]"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;