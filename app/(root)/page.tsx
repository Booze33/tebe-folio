'use client'

import Boxes from '@/components/Boxes';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

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
      ease: "easeInOut"
    }
  }
};

const Home = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

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
          className="text-3xl sm:text-5xl md:text-7xl text-center sm:w-display w-feature font-curved"
        >{`I'm Tebe Tisloh`}</motion.h1>
        <motion.h1
          variants={dropVariants}
          initial="hidden"
          whileInView="visible"
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
    </div>
  );
}

export default Home;
