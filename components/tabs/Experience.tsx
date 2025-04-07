"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Projects from "../Projects";

const experiences = [
  {
    position: "LLM Developer",
    company: "Mercor.ai",
    time: "2023-2024",
    address: "Remote",
    description: "Analyzed complex scenarios to evaluate LLM performance using specific languages and frameworks. Identified and articulated strengths and weaknesses of LLMs in different contexts, enhancing AI capability and performance benchmarking."
  },
  {
    position: " Web3 Developer",
    company: "Calyptus",
    time: "2024-2024",
    address: "Remote",
    description: "Collaborated with design and backend teams to build modern web applications. Implemented smart contracts and advanced blockchain technologies on Ethereum and Solana."
  },
  {
    position: "Full Stack Web Developer & Mentor",
    company: "Microverse",
    time: "2023-Present",
    address: "Remote",
    description: "Developed over 30 web projects focusing on user-facing features using React.js and Next.js, ensuring optimal performance and security. Built reusable components and front-end libraries, enhancing maintainability and code scalability.  Led technical assessments and participated actively in code reviews to ensure high-quality standards. Engaged in pair-programming and mentoring, enhancing peer learning and engineering maturity across teams."
  }
];

interface ExperienceItemProps {
  position: string;
  company: string;
  time: string;
  address: string;
  description: string;
}

interface CardItemProps {
  id: number;
  title: string;
  type: string;
  img: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ position, company, time, address, description }) => {
 
  return (
    <div className="mb-12 relative w-full sm:w-[40vw]">
      <div className="ml-8 relative">
        <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#ffc107]" />
        <h3 className="text-[#ffc107] text-xl font-bold">{position}</h3>
        <h4 className="text-white text-lg mb-2">{company}</h4>
        <div className="flex flex-wrap gap-x-4 text-white text-sm mb-2">
          <span>{time}</span>
          <span>{address}</span>
        </div>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
};

const CardItem: React.FC<CardItemProps> = ({ id, title, type, img }) => {
 
  return (
    <div className="mb-12 relative w-[150px] h-[25rem] rounded-lg sm:w-[40vw] bg-white">
      <div className="ml-8 relative">
        <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-[#ffc107]" />
        <h3 className="text-[#ffc107] text-xl font-bold">{title}</h3>
        <h4 className="text-white text-lg mb-2">{type}</h4>
      </div>
    </div>
  );
};

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
    container: containerRef
  });

  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-auto bg-black/30 backdrop-blur-3xl w-full px-[1rem] sm:px-[8rem] pt-[2rem] pb-[4rem] z-0"
    >
      <div className="relative" ref={ref}>
        <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Work Experience</h1>
        
        <div className="relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0 top-2 w-1 h-full origin-top bg-gray-300"
          />
          
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              position={experience.position}
              company={experience.company}
              time={experience.time}
              address={experience.address}
              description={experience.description}
            />
          ))}

          <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[30px] font-black scale-x-[1.3] origin-left ml-[2rem]">Highlited Projects</h1>

          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
            {Projects.map((project, index) => (
              <CardItem
                key={index}
                id={project.id}
                title={project.title}
                type={project.type}
                img={project.dp}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;