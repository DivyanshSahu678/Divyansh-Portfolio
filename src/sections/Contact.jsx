import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import profile from "../data/profile";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>

        <SectionTitle
          number="06"
          title="Contact"
          subtitle="Let's connect and build something amazing together."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-[#CCFF00]" />
              <a
                href={`mailto:${profile.email}`}
                className="text-gray-300 hover:text-[#CCFF00]"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-[#CCFF00]" />
              <span>{profile.phone}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-[#CCFF00]" />
              <span>{profile.location}</span>
            </div>

            <div className="flex gap-5 pt-6">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-[#CCFF00]"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-[#CCFF00]"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-neutral-700 bg-[#0d0d0d] p-4 outline-none focus:border-[#CCFF00]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-neutral-700 bg-[#0d0d0d] p-4 outline-none focus:border-[#CCFF00]"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-lg border border-neutral-700 bg-[#0d0d0d] p-4 outline-none focus:border-[#CCFF00]"
            />

            <button
              className="rounded-lg bg-[#CCFF00] px-8 py-3 font-semibold text-black transition hover:scale-105"
            >
              Send Message
            </button>

          </form>

        </div>

      </Container>
    </section>
  );
}

export default Contact;