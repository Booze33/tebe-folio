'use client';

import { useRef } from "react";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  const refs = {
    home: useRef<HTMLElement>(null),
    summary: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    links: useRef<HTMLElement>(null)
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} refs={refs} />

      <section ref={refs.home} id="home" className="h-screen bg-transparent">Home Section</section>
      <section ref={refs.summary} id="summary" className="h-screen bg-gray-200">Summary Section</section>
      <section ref={refs.experience} id="experience" className="h-screen bg-gray-300">Experience Section</section>
      <section ref={refs.skills} id="skills" className="h-screen bg-gray-400">Skills Section</section>
      <section ref={refs.links} id="links" className="h-screen bg-gray-500">Links Section</section>
    </div>
  );
};

export default Home;
