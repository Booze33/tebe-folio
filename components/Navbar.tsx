'use client';

import { motion } from "framer-motion";
import { UserRound, BriefcaseBusiness, FileText, ChevronsUpDown, Link } from 'lucide-react';

const iconMap = {
  'Home': <UserRound />,
  'Summary': <BriefcaseBusiness />,
  'Experience': <FileText />,
  'Skills': <ChevronsUpDown />,
  'Links': <Link />
};

const Navbar = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <nav className="fixed bottom-16 left-[10vw] p-[3px] w-[80vw] h-[3.5rem] bg-white/30 backdrop-blur-sm shadow-md flex gap-4 justify-center rounded-full z-2">
      {tabs.map((item) => {
        const isSelected = item.name === selectedTab.name;
        return (
          <motion.button
            key={item.name}
            className={`flex items-center justify-center h-[3rem] w-[3rem] lg:w-[12rem] transition hover:cursor-pointer ${
              isSelected ? 'bg-white text-black rounded-full' : 'bg-transparent text-white'
            }`}
            onClick={() => setSelectedTab(item)}
          >
            {iconMap[item.name]}
            <span className="hidden lg:inline ml-2 font-bold">{item.name}</span>
          </motion.button>
        );
      })}
    </nav>
  );
}

export default Navbar;