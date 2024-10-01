'use client';

import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Theme from './Theme'
import { motion } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiMenu5Fill } from "react-icons/ri";

const containerVariants = {
  hidden: {
    y: -17,
  },
  visible: {
    opacity: 1,
    y: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    }
  },
}

const Navbar = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className="flex flex-row justify-between w-full h-[4rem] mt-4 pt-4 fixed ml-4 border-b-2 dark:border-indigo-200 border-indigo-950 dark:bg-dark bg-light z-20">
      <Logo />

      <div className="flex-row justify-between duration-100 hidden sm:flex bg:light w-display">
        <div className="left-96 flex-row duration-100 hidden sm:flex text-xl md:text-2xl">
          <div className="flex flex-col">
            <Link className="mr-4 hover:underline hover:scale-105 duration-500" href="/">Portfolio</Link>
          </div>
          <div className="flex flex-col">
            <Link className="ml-2 hover:underline hover:scale-105 duration-500" href="/about">About</Link>
          </div>
          <div className="flex flex-col">
            <Link className="ml-4 hover:underline hover:scale-105 duration-500" href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="sm:hidden block w-12 h-6">
          <RiMenu5Fill className="w-8 h-8" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-dark bg-light z-10 mt-6 mr-6 w-[231px] h-[15rem] flex justify-center items-center flex-col">
          <DropdownMenuItem>
            <Link className="mr-4 hover:underline hover:scale-105 duration-500" href="/">Portfolio</Link>
            <DropdownMenuSeparator />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-2 hover:underline hover:scale-105 duration-500" href="/about">About</Link>
            <DropdownMenuSeparator /> 
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="ml-4 hover:underline hover:scale-105 duration-500" href="/contact">Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Theme show={true} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Theme show={false} />
    </motion.div>
  )
}

export default Navbar