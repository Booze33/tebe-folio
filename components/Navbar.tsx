'use client';

import { motion } from "framer-motion";
import { UserRound, BriefcaseBusiness, FileText, ChevronsUpDown, Link } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

type TabName = 'Home' | 'Summary' | 'Experience' | 'Skills' | 'Links';

const iconMap: Record<TabName, JSX.Element> = {
  'Home': <UserRound />,
  'Summary': <BriefcaseBusiness />,
  'Experience': <FileText />,
  'Skills': <ChevronsUpDown />,
  'Links': <Link />
};

interface Tab {
  name: TabName;
  component: JSX.Element;
}
interface NavbarProps {
  tabs: Tab[];
  selectedTab: Tab;
  setSelectedTab: Dispatch<SetStateAction<Tab>>;
}

const Navbar = ({ tabs, selectedTab, setSelectedTab }: NavbarProps) => {
  return (
    <nav className="fixed bottom-16 left-[10vw] p-[3px] w-[80vw] h-14 bg-white/30 backdrop-blur-sm shadow-md flex gap-4 justify-center rounded-full z-2">
      {tabs.map((item) => {
        const isSelected = item.name === selectedTab.name;
        return (
          <motion.button
            key={item.name}
            className={`flex items-center justify-center h-12 w-12 lg:w-48 transition hover:cursor-pointer ${
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