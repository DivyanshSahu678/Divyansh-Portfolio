import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section
  id="hero"
  className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pt-24 text-white"
>
      {/* Background Glow */}

      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[#CCFF00]/10 blur-[140px]" />

      <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-20 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div>

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="rounded-full border border-[#CCFF00]/40 bg-[#CCFF00]/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#CCFF00]">
              Available For Internship
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-lg uppercase tracking-[0.35em] text-gray-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-black uppercase leading-[0.9] md:text-8xl lg:text-[7rem]"
          >
            DIVYANSH
            <br />

            <span className="text-[#CCFF00]">
              SAHU
            </span>

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
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
          >
            Passionate Computer Science Engineering student focused on
            Artificial Intelligence, Machine Learning, Data Science,
            and Full Stack Development. I love creating scalable,
            intelligent and modern software solutions.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-4"
          >

            <a
              href="#projects"
              className="rounded-lg bg-[#CCFF00] px-8 py-4 font-bold text-black transition duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/resume/Divyansh_Sahu_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[#CCFF00] px-6 py-4 font-semibold text-[#CCFF00] transition duration-300 hover:bg-[#CCFF00] hover:text-black"
            >
              <FaExternalLinkAlt />
              View Resume
            </a>

            <a
              href="/resume/Divyansh_Sahu_Resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-[#CCFF00] px-6 py-4 font-semibold text-[#CCFF00] transition duration-300 hover:bg-[#CCFF00] hover:text-black"
            >
              <FaDownload />
              Download Resume
            </a>

          </motion.div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-8">

            <div>
              <h2 className="text-4xl font-black text-[#CCFF00]">
                12+
              </h2>

              <p className="mt-2 text-gray-400">
                Certificates
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-[#CCFF00]">
                10+
              </h2>

              <p className="mt-2 text-gray-400">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-[#CCFF00]">
                2+
              </h2>

              <p className="mt-2 text-gray-400">
                Years Learning
              </p>
            </div>

          </div>

          {/* Contact */}

          <div className="mt-12 flex flex-wrap gap-8 text-gray-400">

            <div className="flex items-center gap-2">
              <FaEnvelope />
              sahudivyansh965@gmail.com
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
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

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-[#CCFF00]/20 blur-3xl"></div>

            {/* Floating Card 1 */}

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -left-10 top-10 rounded-xl border border-neutral-700 bg-black/70 px-4 py-3 backdrop-blur-md"
            >
              🐍 Python
            </motion.div>

            {/* Floating Card 2 */}

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-10 top-24 rounded-xl border border-neutral-700 bg-black/70 px-4 py-3 backdrop-blur-md"
            >
              ⚛ React
            </motion.div>

            {/* Floating Card 3 */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute left-16 -bottom-2 rounded-xl border border-neutral-700 bg-black/70 px-4 py-3 backdrop-blur-md"
            >
              🤖 AI / ML
            </motion.div>

            {/* Floating Card 4 */}

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute right-8 bottom-5 rounded-xl border border-neutral-700 bg-black/70 px-4 py-3 backdrop-blur-md"
            >
              💻 Full Stack
            </motion.div>

            {/* Profile Image */}

            <motion.img
              src="/profile.png"
              alt="Divyansh Sahu"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative h-[380px] w-[380px] rounded-full border-4 border-[#CCFF00]/30 object-cover shadow-[0_0_60px_rgba(204,255,0,.25)] lg:h-[430px] lg:w-[430px]"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;