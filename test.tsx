'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image'

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'system');
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const onWindowMatch = () => {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)){
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(()=> {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if(!("theme" in localStorage)) {
      if(e.matches){
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  })
  return (
    <div className="z-10 duration-100 dark:bg-gold bg-gray-100 rounded-full md:mr-8">
      <Button  onClick={()=> setTheme('light')}>
        <Image src='/asset/icons/moon-outline.svg' alt="add" width={24} height={24} />
      </Button>

      <Button  className={`w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600"}`} onClick={()=> setTheme('dark')}>
        <Image src='/asset/icons/icons8-sun.svg' alt="add" width={24} height={24} />
      </Button>

      <Button  className={`w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600"}`} onClick={()=> setTheme('system')}>
        <Image src='/asset/icons/desktop-outline.svg' alt="add" width={24} height={24} />
      </Button>
    </div>
  )
}

export default Theme;
