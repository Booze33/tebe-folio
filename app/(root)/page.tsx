'use client'

import Boxes from '@/components/Boxes';
import { motion } from 'framer-motion';
import { useState,  useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { TbCircleFilled } from "react-icons/tb";
import Projects from '@/components/Projects';
import Others from '@/components/Others';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

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
          className="text-3xl sm:text-5xl md:text-7xl text-center sm:w-display w-feature font-curved h-14 sm:h-32"
        >{`I'm Tebe Tisloh`}</motion.h1>
        <motion.h1
          variants={dropVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl sm:text-4xl md:text-6xl text-center sm:w-display w-feature font-curved sec-text h-12 sm:h-28"
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

      <section className="sm:px-28 px-2 mt-32 w-screen pt-32 flex flex-col rounded-t-top dark:bg-dark-2 bg-light-2">
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

        <div className="w-[24rem] bg-green-400 sm:w-full flex flex-col justify-around sm:grid sm:grid-cols-2 sm:grid-rows-card sm:gap-x-4 sm:gap-y-2 my-4">
          {Projects.map((project: Project) => (
            <CardContainer key={project.id}>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[23rem] sm:w-[26rem] h-[36rem] rounded-xl p-6 border">
                <Link href={`/projects/${project.id}`}>
                  <CardItem translateZ="70" className="w-[26rem] ml-[-1.5rem] mt-[-1.6rem]">
                    <Image src={project.dp} alt={project.title} width={10} height={10} className=" sm:w-[26rem] w-[23rem] sm:h-large rounded-xl h-60 object-cover group-hover/card:shadow-xl" />
                  </CardItem>
                  {(project.type === 'solo' ? 
                    <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
                      <TbCircleFilled className="mt-1" />
                    <span> Solo Project</span>
                  </h3>
                  : <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl my-6 flex flex-row w-48">
                      <TbCircleFilled className="mt-1" />
                    <span> Collaborative Project</span>
                </h3>
                  )}
                  <h2 className="text-2xl sm:text-3xl mb-2 font-curved font-semibold">{project.title}</h2>
                  <p className="font-curved sm:text-justify text-[14px] w-nine">{project.text}</p>
                </Link>
              </CardBody>
              
            </CardContainer>
          ))}
        </div>

        <motion.h1
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl mb-4 font-curved text-both">Other Projects</motion.h1>
        <motion.p
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-curved text-justify"
        >Smaller projects that I worked on.</motion.p>

        <div className="mt-8">
          {Others.map((project: Others) => (
            <Link href={project.href} key={project.id} className="flex flex-row my-4">
              <Image src={project.dp} alt={project.text} width={10} height={10} className="w-img h-img sm:w-img2 sm:h-img2 rounded-2xl" />
              <div className="ml-3 sm:ml-5">
                <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">{project.title}</h2>
                <p className="font-curved text-justify text-sm sm:text-xl">{project.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
