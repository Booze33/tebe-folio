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
    <nav className="fixed bottom-8 left-[10vw] w-[80vw] bg-white shadow-md p-4 flex gap-4 justify-center md:justify-start md:px-8">
      {Menu.map((item) => {
        const isActive = activeSection === item.name.toLowerCase();
        return (
          <button
            key={item.name}
            onClick={() => scrollToSection(refs[item.name.toLowerCase()])}
            className= {`flex items-center gap-2 px-4 rounded-md transition ${ isActive ? 'bg-blue-500 text-white' : 'bg-transparent text-black' } md:px-6`}
          >
            {item.icon}
            <span className="hidden lg:inline">{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;