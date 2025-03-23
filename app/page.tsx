'use client';

import { useRef } from "react";
import Navbar from "../components/Navbar";
import CVButton from "@/components/CVButton";
import { useInView } from "react-intersection-observer";

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

  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [summaryRef, summaryInView] = useInView({ threshold: 0.75 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.75 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.75 });
  const [linksRef, linksInView] = useInView({ threshold: 0.5 });

  const shouldFadeOut = homeInView || linksInView;

  return (
    <div className="w-[100vw] py-[2rem]">
      <section 
        ref={(node) => {
          refs.home.current = node;
          homeRef(node);
        }} 
        id="home" 
        className="h-screen bg-transparent w-full px-[1rem] sm:px-[8rem]"
      >
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
      </section>

      <section
        ref={(node) => {
          refs.summary.current = node;
          summaryRef(node);
        }}
        id="summary"
        className={`h-[100%] w-full px-[1rem] sm:px-[8rem] py-[3rem] transition-all duration-500 ${
          shouldFadeOut ? "bg-transparent backdrop-blur-none" : "bg-black/30 backdrop-blur-3xl"
        }`}
      >
        <div className="sm:w-[40vw] w-[100%] flex flex-col justify-start mt-[3rem]">
          <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Summary</h1>
          <p className="text-[#fff] text-[16px] text-justify mb-4">
            I am an experienced and detail-oriented Software Developer dedicated to creating intuitive and impactful digital experiences. Over the years, I have honed my skills in user research, wireframing, prototyping, and visual design, always striving to balance user needs with business objectives. My passion lies in understanding how people interact with technology and crafting solutions that are both functional and aesthetically pleasing.
          </p>
          <p className="text-[#fff] text-[16px] text-justify">
            I have collaborated with diverse teams, including developers, marketers, and product managers, to bring concepts to life, ensuring seamless integration of design and functionality. My design philosophy centers on empathy and innovation—placing the user at the heart of every decision while leveraging the latest tools and trends to stay ahead in the field.
          </p>
          <div className="w-[100%] border-[#ffc107] border-l-2 border-solid mt-[4rem] pl-[2rem]">
            <p className="text-[#fff] text-[28px] text-justify mb-4">
              Driven by a curiosity to learn and improve, I continuously explore new tools and methodologies to enhance my work. Whether working on web applications, mobile interfaces, or design systems, I am committed to delivering high-quality results that make a difference for users and businesses alike.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={(node) => {
          refs.experience.current = node;
          experienceRef(node);
        }}
        id="experience"
        className={`h-screen w-full px-[1rem] sm:px-[8rem] py-[3rem] transition-all duration-500 ${
          shouldFadeOut ? "bg-transparent backdrop-blur-none" : "bg-black/30 backdrop-blur-3xl"
        }`}
      >
        <div className="sm:w-[50vw] w-[100%] flex flex-col justify-start mt-[3rem]">
          <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Experience</h1>
          <p className="text-[#fff] text-[16px] text-justify">
            Experience Section Content
          </p>
        </div>
      </section>

      <section
        ref={(node) => {
          refs.skills.current = node;
          skillsRef(node);
        }}
        id="skills"
        className={`h-screen w-full px-[1rem] sm:px-[8rem] py-[3rem] transition-all duration-500 ${
          shouldFadeOut ? "bg-transparent backdrop-blur-none" : "bg-black/30 backdrop-blur-3xl"
        }`}
      >
        <div className="sm:w-[50vw] w-[100%] flex flex-col justify-start mt-[3rem]">
          <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Skills</h1>
          <p className="text-[#fff] text-[16px] text-justify">
            Skills Section Content
          </p>
        </div>
      </section>

      <section 
        ref={(node) => {
          refs.links.current = node;
          linksRef(node);
        }}
        id="links" 
        className="h-screen w-full px-[1rem] sm:px-[8rem] py-[3rem] bg-transparent"
      >
        <div className="sm:w-[50vw] w-[100%] flex flex-col justify-start mt-[3rem]">
          <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Links</h1>
          <p className="text-[#fff] text-[16px] text-justify">
            Links Section Content
          </p>
        </div>
      </section>

      <Navbar scrollToSection={scrollToSection} refs={refs} />
    </div>
  );
};

export default Home;