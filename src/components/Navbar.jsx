import { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#111111] shadow-md">
      <div className="container flex justify-between items-center py-4 px-6">
        {/* No text/logo, just an empty space for balance */}
        {/* Social Icons (Now in Navbar, Top Left) */}
        <div className="flex space-x-4">
          <a
            href="https://scholar.google.com/citations?user=YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl hover:text-[#DAA520] transition"
          >
            <SiGooglescholar />
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_PROFILE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl hover:text-[#DAA520] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-300 text-xl hover:text-[#DAA520] transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white ml-auto">
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#about">About</a>
          </li>
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#projects">Portfolio</a>
          </li>
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#contact">Resume</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-[#DAA520] transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#292929] text-white flex flex-col items-center space-y-4 py-4">
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          <li className="transition hover:text-[#DAA520] px-2 py-1 rounded-md">
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
