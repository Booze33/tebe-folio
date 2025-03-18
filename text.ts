import { Download } from "lucide-react";
import { motion } from "framer-motion";

const CVButton = () => {
  return (
    <motion.a
      href="/Tisloh_Resume.pdf"
      download="Tisloh_Resume.pdf"
      className="text-black py-4 px-8 bg-[#ffc107] md:absolute top-2 right-0 rounded-full font-bold shadow-md hover:bg-white relative overflow-hidden flex flex-col items-center justify-center w-[200px] h-[50px]"
    >
      <motion.span
        className="text-black w-full h-full"
        initial={{ y: 0, opacity: 1 }}
        whileHover={{ y: -20, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
      >
        Download CV
      </motion.span>
      {/* <motion.span
        className="opacity-0 w-full h-full"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
      >
        <Download className="w-6 h-6 text-black" />
      </motion.span> */}
    </motion.a>
  );
};

export default CVButton;
