import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import profile from "../../data/profile";

function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>
          <h2 className="text-xl font-bold">
            {profile.name}
          </h2>

          <p className="mt-2 text-gray-400">
            AI/ML & Data Science Enthusiast
          </p>

          <p className="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-2xl transition hover:text-[#CCFF00]"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-2xl transition hover:text-[#CCFF00]"
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
            className="rounded-full bg-[#CCFF00] p-3 text-black transition hover:scale-110"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;