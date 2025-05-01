import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaDownload, FaUser, FaLaptopCode, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#111111] shadow-md py-0">
      <div className="flex items-center justify-between px-12 py-4">

        {/* Social Icons (Left) */}
        <div className="flex space-x-4">
          <a
            href="https://scholar.google.com/citations?user=zcsC9EMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl hover:text-[#DAA520] transition"
          >
            <SiGooglescholar />
          </a>
          <a
            href="https://www.linkedin.com/in/khanzarrar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl hover:text-[#DAA520] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:zarrar85@gmail.com"
            className="text-gray-300 text-xl hover:text-[#DAA520] transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right-side: nav menu + hamburger */}
        <div className="flex items-center ml-auto">
          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-white items-center">
            <li>
              <a href="#about" className="flex items-center gap-1 hover:text-[#DAA520]">
                <FaUser className="text-sm" /> About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="flex items-center gap-1 hover:text-[#DAA520]">
                <FaLaptopCode className="text-sm" /> Portfolio
              </a>
            </li>
            <li>
              <a href="#publications" className="flex items-center gap-1 hover:text-[#DAA520]">
                <FaBookOpen className="text-sm" /> Publications
              </a>
            </li>
            <li>
              <a href="#presentations" className="flex items-center gap-1 hover:text-[#DAA520]">
                <FaChalkboardTeacher className="text-sm" /> Presentations
              </a>
            </li>
            {/*<li>
              <a
                href="ZarrarKhanCV.pdf"
                download="ZarrarKhanCV.pdf"
                className="flex items-center gap-1 hover:text-[#DAA520]"
              >
                CV <FaDownload className="text-sm" />
              </a>
            </li>
            */}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#DAA520] transition ml-4 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-[#292929] text-white flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <FaUser className="text-sm" /> About
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <FaLaptopCode className="text-sm" /> Portfolio
            </a>
          </li>
          <li>
            <a href="#publications" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <FaBookOpen className="text-sm" /> Publications
            </a>
          </li>
          <li>
            <a href="#presentations" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <FaChalkboardTeacher className="text-sm" /> Presentations
            </a>
          </li>
          <li>
            <a
              href="ZarrarKhanCV.pdf"
              download="ZarrarKhanCV.pdf"
              className="flex items-center gap-1 hover:text-[#DAA520]"
            >
              CV <FaDownload className="text-sm" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
