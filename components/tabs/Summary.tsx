import { ScrollArea } from "@/components/ui/scroll-area";

const Summary = () => {
  return (
    <ScrollArea className="h-screen bg-black/30 backdrop-blur-3xl w-full px-[1rem] sm:px-[8rem] pt-[2rem] pb-[4rem] z-0">
      <h1 className="mb-[4rem] text-[#ffc107] text-justify text-[32px] font-black scale-x-[1.3] origin-left">Summary</h1>
      <p className="w-[100%] sm:w-[40vw] text-[#fff] text-[16px] text-justify mb-4">
        I am an experienced and detail-oriented Software Developer dedicated to creating intuitive and impactful digital experiences. Over the years, I have honed my skills in user research, wireframing, prototyping, and visual design, always striving to balance user needs with business objectives. My passion lies in understanding how people interact with technology and crafting solutions that are both functional and aesthetically pleasing.
      </p>
      <p className="w-[100%] sm:w-[40vw] text-[#fff] text-[16px] text-justify">
        I have collaborated with diverse teams, including developers, marketers, and product managers, to bring concepts to life, ensuring seamless integration of design and functionality. My design philosophy centers on empathy and innovation—placing the user at the heart of every decision while leveraging the latest tools and trends to stay ahead in the field.
      </p>
      <div className="w-[100%] sm:w-[40vw] border-[#ffc107] border-l-2 border-solid my-[4rem] pl-[2rem]">
        <p className="text-[#fff] sm:text-[28px] text-[24px] text-justify mb-4">
          Driven by a curiosity to learn and improve, I continuously explore new tools and methodologies to enhance my work. Whether working on web applications, mobile interfaces, or design systems, I am committed to delivering high-quality results that make a difference for users and businesses alike.
        </p>
      </div>
    </ScrollArea>
  )
};

export default Summary