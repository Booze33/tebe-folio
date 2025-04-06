"use client";

import React, { RefObject, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area"

const experiences = [
  {
    position: "Senior Software Developer",
    company: "TechInnovate Solutions",
    time: "2021-Present",
    address: "Remote",
    description: "Led development of customer-facing applications using React, Next.js and TypeScript. Implemented responsive designs and optimized performance across all platforms."
  },
  {
    position: "Frontend Developer",
    company: "Digital Crafters Inc",
    time: "2018-2021",
    address: "Boston, MA",
    description: "Collaborated with design and backend teams to build modern web applications. Specialized in creating interactive UI components and implementing complex animations."
  },
  {
    position: "Web Developer",
    company: "CreativeWeb Agency",
    time: "2016-2018",
    address: "New York, NY",
    description: "Developed and maintained client websites across various industries. Utilized HTML, CSS, JavaScript and modern frameworks to deliver responsive and accessible web solutions."
  },
  {
    position: "Senior Software Developer",
    company: "TechInnovate Solutions",
    time: "2021-Present",
    address: "Remote",
    description: "Led development of customer-facing applications using React, Next.js and TypeScript. Implemented responsive designs and optimized performance across all platforms."
  },
  {
    position: "Frontend Developer",
    company: "Digital Crafters Inc",
    time: "2018-2021",
    address: "Boston, MA",
    description: "Collaborated with design and backend teams to build modern web applications. Specialized in creating interactive UI components and implementing complex animations."
  },
  {
    position: "Web Developer",
    company: "CreativeWeb Agency",
    time: "2016-2018",
    address: "New York, NY",
    description: "Developed and maintained client websites across various industries. Utilized HTML, CSS, JavaScript and modern frameworks to deliver responsive and accessible web solutions."
  }
];

interface ExperienceItemProps {
  position: string;
  company: string;
  time: string;
  address: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ position, company, time, address, description }) => {
  return (
    <div className="mb-12 relative">
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

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <ScrollArea className="h-screen bg-black/30 backdrop-blur-3xl w-full px-4 sm:px-8 pt-8 pb-16 z-0">
      <div ref={ref} className="relative">
        <h1 className="mb-16 text-[#ffc107] text-justify text-3xl font-black scale-x-110 origin-left">Work Experience</h1>
        
        {/* Single timeline line that scales based on scroll position */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-7 sm:left-9 top-0 w-1 h-full origin-top bg-white"
        />
        
        {/* Experience items */}
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
      </div>
    </ScrollArea>
  );
};

export default Experience;