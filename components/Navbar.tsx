import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Theme from './Theme'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between w-full h-[5rem]">
      <Logo />

      <div className="flex-row justify-between duration-100 hidden md:flex bg:light w-display">
        <div className="left-96 flex-row duration-100 hidden md:flex">
          <div className="flex flex-col">
            <Link className="mr-4 text-2xl hover:underline hover:scale-105 duration-500" href="/">Portfolio</Link>
          </div>
          <div className="flex flex-col">
            <Link className="ml-2 text-2xl hover:underline hover:scale-105 duration-500" href="/about">About</Link>
          </div>
          <div className="flex flex-col">
            <Link className="mr-4 text-2xl hover:underline hover:scale-105 duration-500" href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <Theme />
    </div>
  )
}

export default Navbar