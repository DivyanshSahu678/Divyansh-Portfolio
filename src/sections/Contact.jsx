import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
    >
      <Container>

        <SectionTitle
          number="06"
          title="Contact Me"
          subtitle="Let's build something amazing together."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="text-4xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I'm always interested in internship opportunities,
              freelance work, collaborations and exciting AI /
              Machine Learning projects. Feel free to contact me.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-5">

                <FaEnvelope
                  size={24}
                  className="text-[#CCFF00]"
                />

                <div>

                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    sahudivyansh965@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-5">

                <FaPhone
                  size={24}
                  className="text-[#CCFF00]"
                />

                <div>

                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +91 9303684263
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-5">

                <FaMapMarkerAlt
                  size={24}
                  className="text-[#CCFF00]"
                />

                <div>

                  <h4 className="font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Ujjain, Madhya Pradesh, India
                  </p>

                </div>

              </div>

            </div>

            {/* Social Links */}

            <div className="mt-10 flex gap-6">

              <a
                href="https://github.com/DivyanshSahu678"
                target="_blank"
                rel="noreferrer"
                className="text-3xl transition hover:text-[#CCFF00]"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/divyansh-sahu-34a026345"
                target="_blank"
                rel="noreferrer"
                className="text-3xl transition hover:text-[#CCFF00]"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-neutral-800 bg-[#0b0b0b] p-8 shadow-2xl"
          >

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

                          {/* Full Name */}

              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-neutral-700 bg-black px-5 py-4 outline-none transition duration-300 focus:border-[#CCFF00]"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-neutral-700 bg-black px-5 py-4 outline-none transition duration-300 focus:border-[#CCFF00]"
                />
              </div>

              {/* Subject */}

              <div>
                <label className="mb-2 block font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project / Collaboration"
                  required
                  className="w-full rounded-xl border border-neutral-700 bg-black px-5 py-4 outline-none transition duration-300 focus:border-[#CCFF00]"
                />
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-neutral-700 bg-black px-5 py-4 outline-none transition duration-300 focus:border-[#CCFF00]"
                ></textarea>
              </div>

              {/* Button */}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#CCFF00] py-4 text-lg font-bold text-black transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)]"
              >
                Send Message 🚀
              </button>

            </form>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;