"use client"
import { smoothScrollTo } from "@/utils/smoothScroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

   const handleNavClick = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      smoothScrollTo(id);
    }, 100); // Small delay to allow menu to close before scrolling
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md py-4 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Adinda Khaerani
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button  className="hover:text-blue-600 transition hover:cursor-pointer"  onClick={() => handleNavClick('about')}>
            About
          </button>
          <button className="hover:text-blue-600 transition hover:cursor-pointer" onClick={() => handleNavClick('portfolio')}>
            Portfolio
          </button>
          <button  className="hover:text-blue-600 transition hover:cursor-pointer" onClick={() => handleNavClick('services')}>
            Services
          </button>
          <button  className="hover:text-blue-600 transition hover:cursor-pointer" onClick={() => handleNavClick('experience')}>
            Experience
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <Link 
              href="#about" 
              className="hover:text-blue-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#portfolio" 
              className="hover:text-blue-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="#services" 
              className="hover:text-blue-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#experience" 
              className="hover:text-blue-600 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}