'use client';

import { Button } from "./ui/button";
import { Download, Sun, Moon } from 'lucide-react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useTheme } from './ThemeContext';

const Topbar = () => {
  const router = useRouter();
  const { darkMode, toggleTheme } = useTheme();

  const DownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Tisloh_FullStack_Resume.pdf';
    link.download = 'Tisloh_FullStack_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="z-10 h-[4rem] w-[100vw] fixed top-0 flex flex-row justify-between items-center px-6"
    >
      <motion.div
        onClick={() => router.push('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="sm:text-3xl text-xl font-black gradient-text hover:cursor-pointer"
      >
        Tebe Tisloh
      </motion.div>

      <div className="flex flex-row">
        <Button onClick={DownloadResume} className="rounded-full sm:flex hidden flex-row bg-[var(--chart-5)] font-bold mr-6">
          <Download />
          <span>Download CV</span>
        </Button>

        <Button 
          className="w-8 h-8 rounded-full hover:bg-[var(--chart-5)] dark:bg-[var(--bg-secondary)] bg-[var(--dark-bg-secondary)]" 
          onClick={toggleTheme}
        >
          {darkMode ? (
            <Sun color="#1e293b" />
          ) : (
            <Moon color="#fff" />
          )}
        </Button>
      </div>
    </motion.div>
  );
}

export default Topbar;