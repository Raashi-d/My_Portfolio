import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow flex items-center justify-between px-6 py-3">
      <div className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
        Raashid
      </div>
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-blue-500 transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Hamburger icon */}
      <button
        className="md:hidden text-2xl text-gray-700 dark:text-gray-200 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center gap-4 py-6 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-2 text-lg text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
