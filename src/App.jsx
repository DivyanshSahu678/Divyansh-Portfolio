import { useEffect, useState } from "react";

import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageWrapper from "./components/layout/PageWrapper";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Contact from "./sections/Contact";


function App() {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);


    return () => clearTimeout(timer);

  }, []);


  if (loading) {
    return <Loader />;
  }


  return (
    <>

      <Navbar />

      <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: "#0b0b0b",
      color: "#fff",
      border: "1px solid #CCFF00",
    },
  }}
/>
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