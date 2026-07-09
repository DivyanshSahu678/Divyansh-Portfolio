import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#CCFF00]/10 blur-[180px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-24 pb-16 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="mb-6"
          >
            <span className="rounded-full border border-[#CCFF00]/40 bg-[#CCFF00]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#CCFF00]">
              Available For Internship
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="mb-4 text-lg uppercase tracking-[0.4em] text-gray-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl lg:text-[7rem]"
          >
            DIVYANSH
            <br />
            <span className="text-[#CCFF00]">SAHU</span>
          </motion.h1>

          <div className="mt-8 text-2xl font-bold md:text-4xl">
            <TypeAnimation
              sequence={[
                "AI / ML Engineer",
                2000,
                "Data Science Enthusiast",
                2000,
                "Full Stack Developer",
                2000,
                "Python Programmer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#CCFF00]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
          >
            Passionate Computer Science Engineering student focused on
            Artificial Intelligence, Machine Learning, Data Science and
            Full Stack Development. I enjoy building modern, scalable and
            user-friendly software solutions.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <a
              href="#projects"
              className="rounded-lg bg-[#CCFF00] px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-lg border border-neutral-700 px-8 py-4 transition hover:border-[#CCFF00]"
            >
              <FaDownload size={18} />
              Resume
            </a>
          </motion.div>

          {/* Contact */}

          <div className="mt-12 flex flex-wrap gap-8 text-gray-400">

            <div className="flex items-center gap-2">
              <FaEnvelope size={18} />
              sahudivyansh965@gmail.com
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt size={18} />
              Ujjain, India
            </div>

          </div>

          {/* Social */}

          <div className="mt-10 flex gap-6">

            <a
              href="https://github.com/DivyanshSahu678"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#CCFF00]"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/divyansh-sahu-34a026345"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#CCFF00]"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="mailto:sahudivyansh965@gmail.com"
              className="transition hover:text-[#CCFF00]"
            >
              <FaEnvelope size={30} />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-[#CCFF00]/20 blur-3xl"></div>

            <img
              src="/profile.png"
              alt="Divyansh Sahu"
              className="relative h-[430px] w-[430px] rounded-full border-4 border-[#CCFF00]/30 object-cover shadow-2xl"
            />

          </div>
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;