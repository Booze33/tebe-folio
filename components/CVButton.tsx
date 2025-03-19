import { Download } from "lucide-react";

const CVButton = () => {
  return (
    <a
      href="/Tisloh_Resume.pdf"
      download="Tisloh_Resume.pdf"
      className="button-hover"
    >
      <span className="icon">
        <Download />
      </span>
      <span className="text">Download CV</span>
    </a>
  );
};

export default CVButton;
