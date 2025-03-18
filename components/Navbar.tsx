'use client';
import { useState, useEffect } from 'react';
import { UserRound, BriefcaseBusiness, FileText, ChevronsUpDown, Link } from 'lucide-react';

interface SectionRefs {
  [key: string]: React.RefObject<HTMLElement>;
}

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  refs: SectionRefs;
}

const Menu = [
  {
    name: 'Home',
    icon: <UserRound />
  },
  {
    name: 'Summary',
    icon: <BriefcaseBusiness />
  },
  {
    name: 'Experience',
    icon: <FileText />
  },
  {
    name: 'Skills',
    icon: <ChevronsUpDown />
  },
  {
    name: 'Links',
    icon: <Link />
  }
];

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, refs }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.6};

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(refs).forEach((ref) => {
      if (ref?.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [refs]);

  return (
    <nav className="fixed bottom-16 left-[10vw] p-[3px] w-[80vw] h-[3.5rem] bg-white/30 backdrop-blur-sm shadow-md flex gap-4 justify-center rounded-full">
      {Menu.map((item) => {
        const isActive = activeSection === item.name.toLowerCase();
        return (
          <button
            key={item.name}
            onClick={() => scrollToSection(refs[item.name.toLowerCase()])}
            className= {`flex items-center justify-center h-[3rem] w-[3rem] lg:w-[12rem] transition ${ isActive ? 'bg-[#fff] text-black rounded-full' : 'bg-transparent text-[#fff]' }`}
          >
            {item.icon}
            <span className="hidden lg:inline font-bold">{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;