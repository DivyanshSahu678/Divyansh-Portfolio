import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

import Container from "./Container";
import SectionTitle from "./SectionTitle";


function GithubContribution() {
  return (
    <section
      id="github"
      className="py-24 bg-[#050505] text-white"
    >

      <Container>

        <SectionTitle
          number="07"
          title="GitHub Contributions"
          subtitle="My coding activity and consistency."
        />


        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center overflow-x-auto rounded-2xl border border-neutral-800 bg-[#0b0b0b] p-8"
        >

          <GitHubCalendar
            username="DivyanshSahu678"
            colorScheme="dark"
            fontSize={14}
            blockSize={15}
            blockMargin={5}
            theme={{
              dark: [
                "#161616",
                "#2d2d2d",
                "#5f7f00",
                "#8fb300",
                "#CCFF00",
              ],
            }}
          />

        </motion.div>


      </Container>

    </section>
  );
}


export default GithubContribution;