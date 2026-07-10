import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#050505] py-24 text-white"
    >
      <Container>

        <SectionTitle
          number="04"
          title="Certificates"
          subtitle="Courses and certifications that strengthened my skills."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-neutral-800 bg-[#0b0b0b] transition-all duration-300 hover:border-[#CCFF00] hover:shadow-[0_0_35px_rgba(204,255,0,0.18)]"
            >

              <div className="overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  {certificate.issuer}
                </p>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#CCFF00] px-5 py-3 font-semibold text-black transition hover:scale-105"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Certificates;