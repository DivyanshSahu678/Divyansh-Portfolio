import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
       style={{ marginTop: "20px" }}
      className="bg-[#050505] mt-32 py-32 text-white"
    >
      <Container>

        <SectionTitle
          number="04"
          title="Certificates"
          subtitle="Courses and certifications that strengthened my skills."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

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
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0b] transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00] hover:shadow-[0_0_30px_rgba(204,255,0,0.18)]"
            >

              <div className="h-40 overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />

              </div>

              <div className="p-4">

                <h3 className="text-lg font-bold">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {certificate.issuer}
                </p>

                  <p className="mt-3 text-xs uppercase tracking-wider text-[#CCFF00]">
  Verified Certificate
</p>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#CCFF00] px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
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