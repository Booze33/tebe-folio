import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

const Links = () => {
  return (
    <div className="h-screen bg-black/30 backdrop-blur-3xl w-full px-[1rem] sm:px-[8rem] pt-[2rem]">
        <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Links</h1>
        <div className="flex flex-row justify-around items-center w-[90%] sm:w-[40vw] mb-[4rem] ml-[-2.5rem]">
          <a href="https://www.linkedin.com/in/tebe-tisloh-847956225/" className='flex justify-center items-center w-[50px] h-[50px] bg-[#167edb] rounded'>
            <Linkedin color='#fff' size='25px' />
          </a>
          <a href="https://github.com/Booze33" className='flex justify-center items-center w-[50px] h-[50px] bg-[#000] rounded'>
            <Github color='#fff' size='25px' />
          </a>
          <a href="https://x.com/Tebe95645832" className='flex justify-center items-center w-[50px] h-[50px] bg-[#167edb] rounded'>
            <Twitter color='#fff' size='25px' />
          </a>
        </div>
        <div className="flex flex-col w-[100%] mb-[6rem]">
          <div className='flex flex-row mb-4'>
            <Mail color='#ffc107' size='25px' />
            <span className="text-[#fff] text-justify text-[18px] ml-4 font-bold">ttisloh@gmail.com</span>
          </div>
          <div className='flex flex-row my-4'>
            <Phone color='#ffc107' size='25px' />
            <span className="text-[#fff] text-justify text-[18px] ml-4 font-bold">+48 739-483-758</span>
          </div>
        </div>
        <h3 className="text-[#fff] text-justify text-[18px] ml-4 font-bold">Copyright © 2025 Tebe Tisloh. All rights reserved.</h3>
    </div>
  )
};

export default Links