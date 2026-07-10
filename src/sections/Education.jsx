import { motion } from "framer-motion";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="bg-[#050505] py-24 text-white"
    >
      <Container>

        <SectionTitle
          number="05"
          title="Education"
          subtitle="My academic journey."
        />

        <div className="relative mt-16 ml-4 border-l-2 border-neutral-800">

          {education.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative mb-14 ml-8"
            >

              {/* Timeline Dot */}

              <span className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-black bg-[#CCFF00]" />

              {/* Duration */}

              <p className="font-semibold text-[#CCFF00]">
                {item.duration}
              </p>

              {/* Degree */}

              <h3 className="mt-2 text-2xl font-bold">
                {item.degree}
              </h3>

              {/* Institute */}

              <h4 className="mt-1 text-gray-400">
                {item.institute}
              </h4>

              {/* Description */}

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Education;