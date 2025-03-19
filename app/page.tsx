'use client';

import { useRef } from "react";
import Navbar from "../components/Navbar";
import CVButton from "@/components/CVButton";

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
    <div className="w-[100vw] py-[2rem]">
      <section ref={refs.home} id="home" className="h-screen bg-transparent w-full px-[3rem] md:px-[8rem]">
        <div className="flex flex-row justify-between items-center w-[100%] mb-[4rem] h-[3rem]">
          <div className="flex flex-row items-center">
            <div className="relative flex mr-4">
              <div className="absolute inline-flex w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
              <div className="relative inline-flex w-[6px] h-[6px] rounded-full bg-green-500" />
            </div>
            <h4 className="text-[#fff] text-justify font-bold sm:text-[16px] text-[14px]">
              Open To Work
            </h4>
          </div>
          <CVButton />
        </div>

        <div className="flex flex-col justify-start mt-[12rem]">
          <h2 className="text-[#ffc107] text-justify text-[18px] md:text-[28px] md-[2rem] font-bold">SOFTWARE DEVELOPER</h2>
          <h1 className="text-[#fff] text-justify text-[36px] hidden md:inline md:text-[68px] font-bold">Tebe Tisloh</h1>
          <h1 className="text-[#fff] text-justify text-[48px] md:hidden inline md:text-[44px] font-bold">Tebe <br /> Tisloh</h1>
        </div>
      </section>
      <section ref={refs.summary} id="summary" className="h-screen bg-gray-200 w-full">Summary Section</section>
      <section ref={refs.experience} id="experience" className="h-screen bg-gray-300 w-full">Experience Section</section>
      <section ref={refs.skills} id="skills" className="h-screen bg-gray-400 w-full">Skills Section</section>
      <section ref={refs.links} id="links" className="h-screen bg-gray-500 w-full">Links Section</section>

      <Navbar scrollToSection={scrollToSection} refs={refs} />
    </div>
  );
};

export default Home;
