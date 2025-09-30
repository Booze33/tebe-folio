'use client';

import FloatingElements from "../components/3d/FloatingElements";
import { useTheme } from "../components/ThemeContext";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const { darkMode } = useTheme();

  const DownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Tisloh_FullStack_Resume.pdf';
    link.download = 'Tisloh_FullStack_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-primary)] w-[100vw] h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FloatingElements darkMode={darkMode} />
      </div>

      <div 
        className="absolute inset-0 z-1"
        style={{
          background: darkMode 
            ? 'radial-gradient(circle at center, rgba(10, 14, 26, 0.1) 0%, rgba(10, 14, 26, 0.8) 100%)'
            : 'radial-gradient(circle at center, rgba(254, 254, 254, 0.1) 0%, rgba(254, 254, 254, 0.8) 100%)'
        }}
      />

      <div className="relative z-20 text-center px-6 mt-[6rem] max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p 
            className="text-lg mb-6 font-black text-[var(--text-primary)] dark:text-[var(--dark-text-tertiary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Full-Stack Developer
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight dark:text-[var(--dark-text-secondary)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Crafting Digital
            <br />
            <span className="gradient-text">Experiences</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I build beautiful, scalable web applications with modern technologies 
            and thoughtful user experiences.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/projects">
              <motion.button
                className="group px-8 py-4 rounded-full font-semibold text-white flex items-center gap-3 text-lg"
                style={{ background: 'var(--chart-1)' }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <motion.button
              className="px-8 py-4 rounded-full font-semibold border-2 flex items-center gap-3 text-lg dark:text-white bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={DownloadResume}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { icon: Github, href: "https://github.com/Booze33", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tebe-tisloh-847956225/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ttisloh@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] border border-[var(--border)] hover:scale-110 hover:bg-[var(--chart-1)] transition-transform"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-6 h-6" color={darkMode ? '#fff' : '#334155'} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;