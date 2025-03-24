import CVButton from "@/components/CVButton";

const HomePage = () => {
  return (
    <div className="h-screen bg-transparent w-full px-[1rem] sm:px-[8rem] pt-[2rem]">
        <div className="flex flex-row justify-between items-center w-[100%] mb-[4rem] h-[3rem]">
          <div className="flex flex-row items-center">
            <div className="relative flex mr-4">
              <div className="absolute inline-flex w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
              <div className="relative inline-flex w-[6px] h-[6px] rounded-full bg-green-500" />
            </div>
            <h4 className="text-[#fff] text-justify font-bold sm:text-[16px] text-[14px]">
              Open To Work
            </h4>
          </div>
          <CVButton />
        </div>

        <div className="flex flex-col justify-start mt-[15rem] sm:mt-[12rem] items-start w-[100%] mb-[2rem]">
          <h2 className="text-[#ffc107] text-justify text-[14px] md:text-[28px] md-[2rem] font-black">SOFTWARE DEVELOPER</h2>
          <h1 className="text-[#fff] text-justify text-[36px] hidden md:flex md:text-[68px] font-black scale-x-[1.3] origin-left text-shadow">Tebe Tisloh</h1>
          <h1 className="text-[#fff] text-justify text-[48px] md:hidden inline md:text-[44px] font-black scale-x-[1.5] md:scale-x-[1.3] origin-left text-shadow">Tebe <br /> Tisloh</h1>
        </div>
    </div>
  )
};

export default HomePage