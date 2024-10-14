'use client'

import Boxes from '@/components/Boxes';
import { motion } from 'framer-motion';
import { useState,  useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { TbCircleFilled } from "react-icons/tb";
import Projects from '@/components/Projects';
import Link from 'next/link';
import Image from "next/image";

const dropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 1.5,
      ease: "easeIn"
    }
  }
};

const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 1,
      ease: "easeInOut"
    }
  }
};

const Home = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  //const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="sm:px-12 px-6 mt-32 sm:mt-40 mb-4 flex flex-col items-center justify-center">
        <motion.h1
          variants={dropVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-7xl text-center sm:w-display w-feature font-curved"
        >{`I'm Tebe Tisloh`}</motion.h1>
        <motion.h1
          variants={dropVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl sm:text-4xl md:text-6xl text-center sm:w-display w-feature font-curved sec-text"
        >
          <span className="sec-text italic">
            {showTypewriter && (
              <Typewriter
                words={['I Am Glad You are here!', 'I Am A Fullstack Developer', 'I Am At Your Service']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={120}
                deleteSpeed={200}
                delaySpeed={2000}
              />
            )}
          </span>
        </motion.h1>
      </div>

      <Boxes />

      <section className="sm:px-28 px-6 mt-32 w-screen pt-32 flex flex-col rounded-t-top dark:bg-dark-2 bg-light-2">
        <motion.h1
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl mb-4 font-curved text-both">Featured Projects</motion.h1>
        <motion.div
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between">
          <p className="sm:w-input">{`I've been working as a developer for the last 3 years across user experience, interaction design, and visual design. My strength is strategic product thinking across systems and organizations. Outside of “work-work," I love designing side projects, some of which are shown here.`}</p>
          <div className="flex flex-col">
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-3 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48">
              <TbCircleFilled className="mt-1" />
              <span> Collaborative Project</span>
            </h3>
          </div>
        </motion.div>

        <div className="w-full flex flex-col justify-around sm:grid sm:grid-cols-2 sm:grid-rows-6 sm:gap-x-4 sm:gap-y-2 my-24">
          {Projects.map((project: Project) => (
            <Link
              key={project.id}
              href="/projects/inventory"
              className=" flex flex-col pl-left rounded-xl col-start-1 col-end-3 row-span-1 my-9 sm:mb-12 duration-500 hover:shadow-md hover:shadow-dark"
            >
              <Image src={project.dp} alt="Description" width={12} height={12} className="w-large sm:w-image sm:h-large h-tiny rounded-3xl" />
              <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
                <TbCircleFilled className="mt-1" />
                <span> Solo Project</span>
              </h3>
              <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">{project.title}</h2>
              <p className="font-curved text-justify w-nine">{project.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
