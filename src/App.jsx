import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import About from "./components/About";
import SelectedWork from "./components/SelectedWork";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Community from "./components/Community";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import FullmapperCaseStudy from "./pages/FullmapperCaseStudy";
import GenAIAdoptionCaseStudy from "./pages/GenAIAdoptionCaseStudy";
import Skills from "./components/Skills";

import OpticCaseStudy from "./pages/OpticCaseStudy";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <SelectedWork />
        <Experience />
        <Education />
        <Skills />
        <Community />
        <Hobbies />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/optic" element={<OpticCaseStudy />} />
      <Route path="/work/fullmapper" element={<FullmapperCaseStudy />} />
      <Route path="/work/genai-adoption" element={<GenAIAdoptionCaseStudy />} />
    </Routes>
  );
}