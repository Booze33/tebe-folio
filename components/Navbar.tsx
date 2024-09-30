import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Theme from './Theme'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around md:justify-between w-full h-[5rem] mt-4 fixed ml-4">
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

      <Theme />
    </div>
  )
}

export default Navbar