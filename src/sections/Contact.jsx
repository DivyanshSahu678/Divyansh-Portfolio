import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
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
        toast.success("Message sent successfully!");
        form.current.reset();
      })
     .catch((error) => {
  console.log("EMAILJS ERROR:", error);
      toast.error("Failed to send message!");
  alert(
    `Error: ${error?.text || error?.message || JSON.stringify(error)}`
  );
});
  };

  return (
    <section
      id="contact"
      className="bg-[#050505] py-32 text-white"
    >
      <Container>

        <SectionTitle
          number="06"
          title="Contact Me"
          subtitle="Let's build something amazing together."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <h2 className="text-4xl font-bold">
              Get In Touch
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I'm always interested in internships, freelance work,
              collaborations and AI / ML projects.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-5">

                <FaEnvelope className="text-2xl text-[#CCFF00]" />

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

                <FaPhone className="text-2xl text-[#CCFF00]" />

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

                <FaMapMarkerAlt className="text-2xl text-[#CCFF00]" />

                <div>
                  <h4 className="font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Ujjain, Madhya Pradesh
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-10 flex gap-6">

              <a
                href="https://github.com/DivyanshSahu678"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-[#CCFF00]"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/divyansh-sahu-34a026345"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-[#CCFF00]"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-3xl border border-neutral-800 bg-[#0b0b0b] p-8"
          >

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-neutral-700 bg-black px-5 py-4 outline-none focus:border-[#CCFF00]"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-neutral-700 bg-black px-5 py-4 outline-none focus:border-[#CCFF00]"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-neutral-700 bg-black px-5 py-4 outline-none focus:border-[#CCFF00]"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Message"
                required
                className="w-full resize-none rounded-xl border border-neutral-700 bg-black px-5 py-4 outline-none focus:border-[#CCFF00]"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#CCFF00] py-4 font-bold text-black transition hover:scale-105"
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