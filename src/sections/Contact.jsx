import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-800 py-32"
    >
      <Container>

        <SectionTitle
          number="06"
          title="Let's Connect"
          subtitle="I'm always open to discussing new opportunities, collaborations and innovative ideas."
        />

        <div className="rounded-xl border border-neutral-800 bg-[#0d0d0d] p-10">

          <h3 className="text-4xl font-bold">
            Get In Touch
          </h3>

          <div className="mt-8 space-y-4">

            <p>
              📧 sahudivyansh965@gmail.com
            </p>

            <p>
              📱 +91 9303684263
            </p>

            <p>
              📍 Ujjain, Madhya Pradesh
            </p>

          </div>

          <div className="mt-10 flex gap-4">

            <a
              href="mailto:sahudivyansh965@gmail.com"
              className="rounded-md bg-[#CCFF00] px-6 py-3 font-semibold text-black"
            >
              Email Me
            </a>

            <a
              href="https://github.com/DivyanshSahu678"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-neutral-700 px-6 py-3"
            >
              GitHub
            </a>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;