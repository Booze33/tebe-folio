import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from './Logo'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col w-screen h-[50vh] dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 justify-center items-center">
      <div className="flex flex-row">
        <Logo />
        <h1 className="text-5xl h-[3.5rem] font-cursive">Tebe Tisloh</h1>
      </div>
      <p className="text-center text-xl h-[1.8rem] font-curved">ttisloh[at]gmail[dot]com</p>
      <div className="flex justify-around mt-4">
        <Link
          className="mx-4"
          target="_blank"
          href="https://www.linkedin.com/in/tebe-tisloh/"
          rel="noreferrer"
        >
          <FaLinkedinIn className="text-xl" />
        </Link>
        <Link
          className="mx-4"
          target="_blank"
          href="https://github.com/Booze33"
          rel="noreferrer"
        >
          <FaGithub className="text-xl" />
        </Link>
        <Link
          className="mx-4"
          target="_blank"
          href="https://twitter.com/Tebe95645832"
          rel="noreferrer"
        >
          <FaXTwitter className="text-xl" />
        </Link>
      </div>
      <p className="mt-8 text-gray-500 font-curved">Copyright © 2023 Tebe Tisloh</p>
    </div>
  )
}

export default Footer;