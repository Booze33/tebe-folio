const Skills = () => {
  return (
    <div className="h-screen bg-transparent w-full px-[1rem] sm:px-[8rem] pt-[2rem]">
      <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Skills & Tools</h1>
      <div className="flex sm:grid sm:grid-cols-2 gap-4 flex-col">
        <div className="flex flex-row items-center my-[1rem]">
          <div className="absolute mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Problem Solving</span>
        </div>
        <div className="flex flex-row items-center my-[1rem]">
          <div className="absolute mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Collaboration</span>
        </div>
        <div className="flex flex-row items-center my-[1rem]">
          <div className="absolute mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Communication</span>
        </div>
        <div className="flex flex-row items-center my-[1rem]">
          <div className="absolute mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Code Review</span>
        </div>
        <div className="flex flex-row items-center my-[1rem]">
          <div className="absolute mr-4 mt-[2px] w-4 h-4 rounded-full bg-[#ffc107]" />
          <span className="text-[#fff] text-justify text-[20px] ml-[2rem] font-bold">Software Requirements Analysis </span>
        </div>
      </div>

      <div className="my-[2rem]"></div>
    </div>
  )
};

export default Skills