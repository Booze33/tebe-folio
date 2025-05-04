'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { HomePage, Summary, Experience, Skills, Links } from "@/components/tabs";

type TabName = 'Home' | 'Summary' | 'Experience' | 'Skills' | 'Links';

interface Tab {
  name: TabName;
  component: JSX.Element;
}

const tabs: Tab[] = [
  {
    name: 'Home',
    component: <HomePage />
  },
  {
    name: 'Summary',
    component: <Summary />
  },
  {
    name: 'Experience',
    component: <Experience />
  },
  {
    name: 'Skills',
    component: <Skills />
  },
  {
    name: 'Links',
    component: <Links />
  }
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  return (
    <div className="bg-[url(/image/bg-img.png)] min-h-screen bg-fixed bg-no-repeat bg-contain bg-right-bottom">
      <Navbar tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <main className="">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.name : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.component : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}