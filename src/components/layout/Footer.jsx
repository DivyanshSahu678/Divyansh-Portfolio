import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import profile from "../../data/profile";

function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#050505] py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Left */}

        <div>

          <h2 className="text-2xl font-bold">
            {profile.name}
          </h2>

          <p className="mt-2 text-gray-400">
            AI / ML Engineer • Data Science Enthusiast • Full Stack Developer
          </p>

          <p className="mt-3 text-sm text-gray-500">
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-700 p-3 text-xl transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-700 p-3 text-xl transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
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
            className="rounded-full bg-[#CCFF00] p-3 text-black transition duration-300 hover:scale-110"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;