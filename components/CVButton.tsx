import { Download } from "lucide-react";
import { motion } from "framer-motion";

const CVButton = () => {
  return (
    <motion.a
      href="/Tisloh_Resume.pdf"
      download="Tisloh_Resume.pdf"
      className="text-black py-4 px-8 bg-[#ffc107] absolute top-2 right-3 rounded-full font-bold shadow-md hover:bg-white overflow-hidden flex flex-row items-center justify-center w-[150px] text-[14px] md:text-[16px] md:w-[170px] h-[50px]"
    >
      Download CV
      {/* <motion.span
        className="opacity-0"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
      >
        <Download className="w-6 h-6 text-black" />
      </motion.span> */}
    </motion.a>
  );
};

export default CVButton;
