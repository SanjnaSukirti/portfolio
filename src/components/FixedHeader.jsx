import resume from "../assets/resume.pdf";

const FixedHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800/85 backdrop-blur-md text-white flex justify-between items-center px-6 py-4 z-50 shadow-md">
      {/* Logo / Name */}
      <a
        href="#home"
        className="text-2xl font-bold hover:text-pink-400 transition-colors duration-300"
      >
        R. Sanjna Sukirti
      </a>

      {/* Navigation */}
      <nav className="flex items-center gap-6 font-bold text-lg">
        <a
          href="#about"
          className="hover:text-pink-400 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:text-pink-400 transition-colors duration-300"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="hover:text-pink-400 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#achievementsCerts"
          className="hover:text-pink-400 transition-colors duration-300"
        >
          Achievements & Certifications
        </a>
        <a
          href="#internships"
          className="hover:text-pink-400 transition-colors duration-300"
        >
          Internships
        </a>
        <a
          href="#contact"
          className="hover:text-pink-400 transition-colors duration-300"
        >
          Contact
        </a>

        {/* Download Resume Button */}
        <a
          href={resume}
          download
          className="bg-pink-200 text-black px-3 py-1 rounded-lg text-base flex items-center justify-center hover:bg-pink-400 transition-colors"
        >
          Download Resume
        </a>
      </nav>
    </header>
  );
};

export default FixedHeader;
