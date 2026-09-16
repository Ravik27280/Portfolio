"use client";

import { useState } from "react";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EDUCATION", href: "#education" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-[#0d1224]/95 backdrop-blur-md border-b border-[#1b2c68a0]/40 transition-all">
      <div className="flex items-center justify-between py-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-[#16f2b3] text-2xl sm:text-3xl font-extrabold tracking-tight group-hover:text-pink-500 transition-colors">
            &lt;Ravi /&gt;
          </span>
          <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded bg-violet-950/70 text-violet-300 border border-violet-700/40">
            SWE @ Airbus
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-xs lg:text-sm font-semibold tracking-wider text-gray-300 hover:text-[#16f2b3] transition-colors rounded-md hover:bg-[#1a1443]/40"
            >
              {link.label}
            </Link>
          ))}

          {/* Quick Actions */}
          <div className="flex items-center gap-2 pl-3 ml-2 border-l border-[#25213b]">
            <Link
              href={personalData.github}
              target="_blank"
              aria-label="GitHub Profile"
              className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-violet-900/40 transition-all hover:scale-110"
            >
              <FaGithub size={18} />
            </Link>
            <Link
              href={personalData.resume}
              target="_blank"
              className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white hover:shadow-lg hover:shadow-pink-500/20 hover:scale-105 transition-all"
            >
              Resume
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none hover:bg-[#1a1443]/50"
        >
          {isOpen ? <IoClose size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1224] border-t border-[#1b2c68a0] px-4 pt-3 pb-6 flex flex-col space-y-3 animate-fadeIn shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#16f2b3] py-1 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#25213b] flex items-center justify-between">
            <Link
              href={personalData.github}
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </Link>
            <Link
              href={personalData.resume}
              target="_blank"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white"
            >
              Get Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
