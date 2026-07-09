import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="border-t border-neutral-800 py-32"
    >
      <Container>

        <SectionTitle
          number="04"
          title="Certificates"
          subtitle="Continuous learning through industry-recognized certifications."
        />

        <div className="grid gap-6 lg:grid-cols-2">

          {certificates.map((certificate) => (

            <div
              key={certificate.id}
              className="rounded-xl border border-neutral-800 bg-[#0d0d0d] p-8 transition-all duration-300 hover:border-[#CCFF00]"
            >

              <p className="mb-3 text-sm uppercase tracking-widest text-[#CCFF00]">
                {certificate.issuer}
              </p>

              <h3 className="text-2xl font-bold">
                {certificate.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {certificate.description}
              </p>

              <p className="mt-6 text-sm text-gray-500">
                {certificate.year}
              </p>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Certificates;