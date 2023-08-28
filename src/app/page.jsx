import About from "@/layout/About";
import Contact from "@/layout/Contact";
import Footer from "@/layout/Footer";
import Intro from "@/layout/Intro";
import Project from "@/layout/Project";
import Skills from "@/layout/Skills";

export default function Home() {
  return (
    <>
      <main>
        <Intro />
        <Skills />
        <Project />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
