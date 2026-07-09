import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import certificates from "../data/certificates";
import { FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <Container>

        <SectionTitle
          number="04"
          title="Certificates"
          subtitle="Courses and certifications that strengthened my skills."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0d0d0d] transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00] hover:shadow-[0_0_25px_rgba(204,255,0,0.25)]"
            >

              <div className="overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-52 w-full object-cover transition duration-500 hover:scale-110"
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
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#CCFF00] px-4 py-2 font-semibold text-black transition hover:scale-105"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Certificates;