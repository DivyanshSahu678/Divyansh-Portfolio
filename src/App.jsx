import Navbar from "./components/layout/Navbar";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Footer from "./components/layout/Footer";
import PageWrapper from "./components/layout/PageWrapper";


function App() {
  return (
    <>
    
      <Navbar />
<PageWrapper>
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Certificates />

      <Education />

      <Contact />

      <Footer />

    </PageWrapper>
    </>
  );
}

export default App;