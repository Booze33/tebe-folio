import { ScrollArea } from "@/components/ui/scroll-area";

const Skills = () => {
  return (
    <ScrollArea className="h-screen bg-black/30 backdrop-blur-3xl w-full px-[1rem] sm:px-[8rem] pt-[2rem]">
      <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Skills & Tools</h1>
      <div className="flex sm:grid sm:grid-cols-2 gap-4 flex-col">
        <div className="flex flex-row items-center my-[1rem]">
          <div className="mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Problem Solving</span>
        </div>
        <div className="flex flex-row items-center my-[1rem]">
          <div className="mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Collaboration</span>
        </div>
        <div className="flex flex-row items-center my-[1rem]">
          <div className="mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Communication</span>
        </div>
        <div className="flex flex-row items-center my-[1rem]">
          <div className="mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Code Review</span>
        </div>
        <div className="flex flex-row items-center my-[1rem]">
          <div className="mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Software Requirements Analysis </span>
        </div>
      </div>

      <div className="my-[6rem] grid grid-cols-4 gap-4">
        <img src="/tech/css.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/docker.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/figma.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/git.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/html.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/javascript.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/mongodb.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/nodejs.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/rails.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/reactjs.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/redux.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/ruby.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/tailwind.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
        <img src="/tech/threejs.svg" alt="img" className="w-[50px] h-[50px] my-[1rem] bg-white" />
        <img src="/tech/typescript.png" alt="img" className="w-[50px] h-[50px] my-[1rem]" />
      </div>

      <h1 className="mb-[2rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Education</h1>
      <div className="flex sm:grid sm:grid-cols-2 gap-4 flex-col mb-[6rem]">
        <div className="flex flex-row items-center my-[1rem]">
          <div className="mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <div className="flex flex-col">
            <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Microverse</span>
            <span className="text-[#ffc107] text-justify text-[16px] ml-[2rem]">2022 - 2023</span>
          </div>
        </div>
        <div className="flex flex-row items-center my-[1rem]]">
          <div className="mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <div className="flex flex-col">
            <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Warsaw University of Technology</span>
            <span className="text-[#ffc107] text-justify text-[16px] ml-[2rem]">2023 - Date</span>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
};

export default Skills