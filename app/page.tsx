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
      <section ref={refs.home} id="home" className="h-screen bg-transparent w-full px-[1rem] sm:px-[8rem]">
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

        <div className="flex flex-col justify-start mt-[15rem] sm:mt-[12rem] items-start w-[100%] mb-[2rem]">
          <h2 className="text-[#ffc107] text-justify text-[16px] md:text-[28px] md-[2rem] font-black">SOFTWARE DEVELOPER</h2>
          <h1 className="text-[#fff] text-justify text-[36px] hidden md:flex md:text-[68px] font-black scale-x-[1.3] origin-left text-shadow">Tebe Tisloh</h1>
          <h1 className="text-[#fff] text-justify text-[48px] md:hidden inline md:text-[44px] font-black scale-x-[1.5] md:scale-x-[1.3] origin-left text-shadow">Tebe <br /> Tisloh</h1>
        </div>

        {/* <div className="flex sm:grid sm:grid-cols-2 sm:grid-rows-2 bg-white gap-4 w-[80vw] sm:w-[50vw] h-[16rem]"></div> */}
      </section>

      <section ref={refs.summary} id="summary" className="h-screen bg-black/30 backdrop-blur-3xl w-full  px-[1rem] sm:px-[8rem] py-[3rem]">
        <div className="sm:w-[50vw] w-[100%] flex flex-col justify-start mt-[3rem] ">
          <h1 className="mb-[4rem> text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Summary</h1>
          <p className="text-[#fff] text-[16px] text-justify mb-4">I am an experienced and detail-oriented Software Developer dedicated to creating intuitive and impactful digital experiences. Over the years, I have honed my skills in user research, wireframing, prototyping, and visual design, always striving to balance user needs with business objectives. My passion lies in understanding how people interact with technology and crafting solutions that are both functional and aesthetically pleasing.</p>
          <p className="text-[#fff] text-[16px] text-justify">I have collaborated with diverse teams, including developers, marketers, and product managers, to bring concepts to life, ensuring seamless integration of design and functionality. My design philosophy centers on empathy and innovation—placing the user at the heart of every decision while leveraging the latest tools and trends to stay ahead in the field.</p>
        </div>
      </section>
      <section ref={refs.experience} id="experience" className="h-screen bg-gray-300 w-full">Experience Section</section>
      <section ref={refs.skills} id="skills" className="h-screen bg-gray-400 w-full">Skills Section</section>
      <section ref={refs.links} id="links" className="h-screen bg-gray-500 w-full">Links Section</section>

      <Navbar scrollToSection={scrollToSection} refs={refs} />
    </div>
  );
};

export default Home;
