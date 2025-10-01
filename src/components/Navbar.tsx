'use client';

import { House, BriefcaseBusiness, FileText, UserRound, Mail } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const NavMap = [
  {
    tab: 'Home',
    icon: <House />,
    route: '/',
  },
  {
    tab: 'About',
    icon: <UserRound />,
    route: '/about',
  },
  {
    tab: 'Projects',
    icon: <BriefcaseBusiness />,
    route: '/projects',
  },
  {
    tab: 'Experience',
    icon: <FileText />,
    route: '/experience',
  },
  {
    tab: 'Contacts',
    icon: <Mail />,
    route: '/contacts',
  }
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleRoute = (text: string) => {
    router.push(text);
  }

  return (
    <div className="z-10 h-[3.5rem] w-[90vw] fixed rounded-full bottom-8 flex flex-row justify-around items-center glass-effect-nav">
      {NavMap.map((item) => {
        const isActive = pathname === item.route;
        return (
          <div 
            key={item.tab}
            onClick={() => handleRoute(item.route)} 
            className={`underline-animated flex flex-row items-center text-[var(--text-secondary)] hover:cursor-pointer py-2 transition-all duration-300 group ${
              isActive ? 'gradient-text' : 'gradient-text-nav'
            }`}
          >
            <div className={`transition-all duration-300 ${isActive ? 'gradient-text' : 'group-hover:gradient-text'}`}>
              {item.icon}
            </div>
            <h3 className="ml-2 font-bold hidden md:block">{item.tab}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Navbar;