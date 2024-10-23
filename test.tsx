import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './footer';
import Boxes from '../features/boxes';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { TbCircleFilled } from "react-icons/tb";
import { MdFileDownload } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import image from '../assets/images/e-commerce.png';
import expense from '../assets/images/expense.png';
import chat from '../assets/images/chat.png';
import crowdFunding from '../assets/images/crowdFunding.jpg';
import recipe from '../assets/images/recipe.png';
import book from '../assets/images/book.png';
import weather from '../assets/images/weather.png';
import todo from '../assets/images/todo.png';
import oop from '../assets/images/oop.png';
import pokemon from '../assets/images/pokemon.png';
import phanox from '../assets/images/phanox.png';
import podcastr from '../assets/images/podcastr.png';
import launch from '../assets/images/launch.png';
import Tisloh_Pam_Resume from '../assets/stylesheet/Tisloh_Pam_Resume.pdf';

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

const dropVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      delay: 1,
      ease: "easeInOut"
    }
  }
};

const secondVariants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.6,
      ease: "easeInOut"
    }
  }
};

const rightVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeInOut"
    }
  }
};

const leftVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeInOut"
    }
  }
};

const Portfolio = () => {
  const scrollRef = useRef(null);

  const AnimatedLink = motion(Link);

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = Tisloh_Pam_Resume;
    downloadLink.download = 'Tisloh_Pam_Resume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 5000); // 5 seconds delay

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-full mt-4 pt-12">
      <div className="sm:px-12 px-6 mt-12 flex flex-col items-center justify-center">
        <motion.h1
          variants={dropVariants}
          initial="hidden"
          whileInView="visible"
          className="text-5xl sm:text-7xl text-center sm:w-display w-feature font-curved"
        >I'm Tebe Tisloh</motion.h1>
        <motion.h1
          variants={secondVariants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl sm:text-7xl text-center sm:w-display w-feature font-curved sec-text"
        >
          I Am <span className="sec-text">
            {showTypewriter && (
              <Typewriter
                words={['Glad You are here!', 'A Fullstack Developer', 'At Your Service']}
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

        <Boxes />
      </div>
      <section
        ref={scrollRef}
        className="sm:px-28 px-6 mt-32 w-screen pt-32 flex flex-col rounded-t-top dark:bg-dark-2 bg-light-2">
        <motion.h1
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="text-3xl sm:text-5xl mb-4 font-curved text-both">Featured Projects</motion.h1>
        <motion.div
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="flex flex-col sm:flex-row justify-between">
          <p className="sm:w-input">I've been working as a developer for the last 2 years across user experience, interaction design, and visual design. My strength is strategic product thinking across systems and organizations. Outside of “work-work," I love designing side projects, some of which are shown here.</p>
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
          {/* <* STARTED *********************************** HERE*> */}
          <AnimatedLink
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            to="/projects/inventory"
            className=" flex flex-col pl-left rounded-xl col-start-1 col-end-3 row-span-1 my-9 sm:mb-12 duration-500 hover:shadow-md hover:shadow-dark"
          >
            <img src={phanox} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl" />
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Inventory Management</h2>
            <p className="font-curved text-justify w-nine">The Inventory Management System is designed to streamline and automate the process of managing inventory in a business environment. This system aims to enhance the efficiency of inventory tracking, and provide real-time data to support decision-making processes.</p>
          </AnimatedLink>
          
          <AnimatedLink
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            to="/projects/podcastr"
            className="flex flex-col pl-left rounded-xl col-span-1 row-start-2 my-9 sm:mb-8 duration-500 hover:shadow-md dark:hover:shadow-dark hover:shadow-light"
          >
            <img src={podcastr} alt="Description" className="w-large sm:w-small sm:h-small h-tiny rounded-3xl" />
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Podcastr</h2>
            <p className="font-curved text-justify w-nine">A cutting-edge AI SaaS platform that enables users to create, discover, and enjoy podcasts with advanced features like text-to-audio conversion with multi-voice AI, podcast thumbnail Image generation and seamless playback.</p>
          </AnimatedLink>
          <AnimatedLink
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            to="/projects/launch"
            className="flex flex-col pl-left rounded-xl col-span-1 row-start-2 my-9 sm:mb-8 duration-500 hover:shadow-md dark:hover:shadow-dark hover:shadow-light"
          >
            <img src={launch} alt="Description" className="w-large sm:w-small sm:h-small h-tiny rounded-3xl" />
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48 my-6">
              <TbCircleFilled className="mt-1" />
              <span> Collaborative Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Launch AI</h2>
            <p className="font-curved text-justify w-nine">Launch AI is revolutionizing the startup ecosystem by offering a cutting-edge platform tailored for student-founders. Our AI-driven tools, namely the Dashboard, the MVP builder and the User Feedback Analyzer, streamline the startup journey, enabling rapid iterations and precise market validation.
            </p>
          </AnimatedLink>
          <AnimatedLink
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            to="/projects/book-store"
            className="flex flex-col pl-left rounded-xl pb-8 col-start-1 col-end-3 row-start-3 my-9 sm:mb-12 duration-500 hover:shadow-md dark:hover:shadow-dark hover:shadow-light"
          >
            <img src={book} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl" />
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Online BookStore</h2>
            <p className="font-curved text-justify w-nine">This app will allow you to log the books you start, record your current page numbers as you read, and mark books as finished when completed. Stay organized and monitor your reading habits and pace.</p>
          </AnimatedLink>
          <AnimatedLink
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            to="/projects/ai-Chat"
            className="flex flex-col pl-left rounded-xl col-span-1 row-start-4 my-9 sm:mb-8 duration-500 hover:shadow-md dark:hover:shadow-dark hover:shadow-light"
          >
            <img src={chat} alt="Description" className="w-large sm:w-small sm:h-small h-tiny rounded-3xl" />
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">AI-Chat APP</h2>
            <p className="font-curved text-justify w-nine">A full-stack app using OpenAi and ChatEngine Api. This app allows user to chat with other users and also with the AI.</p>
          </AnimatedLink>
          <AnimatedLink
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            to="/projects/web3-Crowd"
            className="flex flex-col pl-left rounded-xl col-span-1 row-start-4 my-9 sm:mb-8 duration-500 hover:shadow-md dark:hover:shadow-dark hover:shadow-light"
          >
            <img src={crowdFunding} alt="Description" className="w-large sm:w-small sm:h-small h-tiny rounded-3xl" />
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Web3-Crowd Funding</h2>
            <p className="font-curved text-justify w-nine">A full-stack app with metamask pairing, smart contracts interaction, which sends ethereum devnet tokens  to campaign wallets.</p>
          </AnimatedLink>
          <AnimatedLink
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            to="/projects/rover-app"
            className=" flex flex-col pl-left rounded-xl col-start-1 col-end-3 row-start-5 my-9 sm:mb-12 duration-500 hover:shadow-md hover:shadow-dark"
          >
            <img src={image} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl" />
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48 my-6">
              <TbCircleFilled className="mt-1" />
              <span> Collaborative Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Land Rover: E-Commerce</h2>
            <p className="font-curved text-justify w-nine">Make reservations for the rovers. Find the rover that fits your taste and go for a test drive.</p>
          </AnimatedLink>
          <AnimatedLink
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            to="/projects/expense-tracker"
            className="flex flex-col pl-left rounded-xl col-span-1 row-start-6 my-9 sm:mb-8 duration-500 hover:shadow-md dark:hover:shadow-dark hover:shadow-light"
          >
            <img src={expense} alt="Description" className="w-large sm:w-small sm:h-small h-tiny rounded-3xl" />
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Expense Tracker</h2>
            <p className="font-curved text-justify w-nine">A budget app to track spending by categories like 'Food' or 'Transport,' helping you manage your expenses effortlessly.</p>
          </AnimatedLink>
          <AnimatedLink
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            to="/projects/recipe-app"
            className="flex flex-col pl-left rounded-xl col-span-1 row-start-6 my-9 sm:mb-8 duration-500 hover:shadow-md dark:hover:shadow-dark hover:shadow-light"
          >
            <img src={recipe} alt="Description" className="w-large sm:w-small sm:h-small h-tiny rounded-3xl" />
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48 my-6">
              <TbCircleFilled className="mt-1" />
              <span> Collaborative Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Social Recipe</h2>
            <p className="font-curved text-justify w-nine">Create new food recipes and share them online. You can choose to make them private and can generate a shopping list for the recipes.</p>
          </AnimatedLink>
        </div>
        <div>
          <motion.h1
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-2xl sm:text-4xl font-curved text-both">Other Projects</motion.h1>
          <motion.p
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="font-curved text-justify"
          >Smaller projects that I worked on.</motion.p>
          <div className="mt-8">
            <motion.a
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Booze33/Ruby-Capstone"
              className="flex flex-row my-4">
              <img src={oop} alt="description" className="w-img h-img sm:w-img2 sm:h-img2 rounded-2xl" />
              <div className="ml-3 sm:ml-5">
                <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Backend_Library</h2>
                <p className="font-curved text-justify text-sm sm:text-xl">We create a console app that will help user to keep a record of different types of things their own: books, music albums, and games. Everything will be based on a UML class diagram.</p>
              </div>
            </motion.a>
            <motion.a
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              target="_blank"
              rel="noreferrer"
              href="https://charming-nougat-0d03a1.netlify.app/"
              className="flex flex-row my-4">
              <img src={pokemon} alt="description" className="w-img h-img sm:w-img2 sm:h-img2 rounded-2xl" />
              <div className="ml-3 sm:ml-5">
                <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Pokemon Cards</h2>
                <p className="font-curved text-justify text-sm sm:text-xl">In this project, We build a basic webapp which contains pokemon cards and display information from the API.</p>
              </div>
            </motion.a>
            <motion.a
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
              target="_blank"
              rel="noreferrer"
              href="https://weather-web-bp0r.onrender.com/"
              className="flex flex-row my-4">
              <img src={weather} alt="description" className="w-img h-img sm:w-img2 sm:h-img2 rounded-2xl" />
              <div className="ml-3 sm:ml-5">
                <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Weather</h2>
                <p className="font-curved text-justify text-sm sm:text-xl">Detailed forecasts, and a wealth of pertinent information for cities worldwide.</p>
              </div>
            </motion.a>
            <motion.a
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              target="_blank"
              rel="noreferrer"
              href="https://booze33.github.io/Web-pack-To-Do-lsit/dist/"
              className="flex flex-row my-4">
              <img src={todo} alt="description" className="w-img h-img sm:w-img2 sm:h-img2 rounded-2xl" />
              <div className="ml-3 sm:ml-5">
                <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">To-do List</h2>
                <p className="font-curved text-justify text-sm sm:text-xl">The purpose of this project is to help you keep record of your daily task. Set your daily goals so you can achieve it.</p>
              </div>
            </motion.a>
            
          </div>
          <div className="flex sm:flex-row flex-col justify-center items-center mb-16">
            <button onClick={handleDownload} className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
              <span>Get Resume</span>
              <MdFileDownload className="mt-1 text-2xl" />
            </button>
            <Link to="/about" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:ml-4 my-4 text-xl">
              <span>About Me</span>
              <FaPerson className="mt-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;