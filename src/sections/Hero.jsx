import React from "react";
import profile from "../assets/profile.png";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiFlutter, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mohamed-raashid/" },
  { icon: <FaGithub />, url: "https://github.com/Raashi-d" },
  { icon: <FaEnvelope />, url: "mailto:raashidm862@gmail.com" },
];

const Hero = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 pt-24 pb-10 px-4 md:pl-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated looping SVG wave background */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        initial={{ x: 0 }}
        animate={{ x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <motion.path
            d="M0,400 Q360,300 720,400 T1440,400 V600 H0 Z"
            fill="#3b82f6"
            fillOpacity="0.08"
            animate={{
              d: [
                "M0,400 Q360,300 720,400 T1440,400 V600 H0 Z",
                "M0,400 Q360,350 720,350 T1440,400 V600 H0 Z",
                "M0,400 Q360,300 720,400 T1440,400 V600 H0 Z",
              ],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,500 Q360,420 720,500 T1440,500 V600 H0 Z"
            fill="#6366f1"
            fillOpacity="0.10"
            animate={{
              d: [
                "M0,500 Q360,420 720,500 T1440,500 V600 H0 Z",
                "M0,500 Q360,470 720,470 T1440,500 V600 H0 Z",
                "M0,500 Q360,420 720,500 T1440,500 V600 H0 Z",
              ],
            }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
      <motion.img
        src={profile}
        alt="Profile"
        className="relative z-10 w-40 h-40 rounded-full shadow-lg object-cover border-4 border-blue-400 mb-6 md:mb-0"
        initial={{ opacity: 0, y: -40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      />

      {/* Floating tech stack icons for right side */}
      <div
        className="hidden md:flex flex-col items-center justify-center relative z-10"
        style={{ minWidth: "220px" }}
      >
        <motion.div
          className="flex flex-col gap-6 items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-full p-3 shadow-lg"
          >
            <FaReact className="text-4xl text-blue-500" title="React" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-full p-3 shadow-lg"
          >
            <SiFlutter className="text-4xl text-sky-400" title="Flutter" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-full p-3 shadow-lg"
          >
            <FaNodeJs className="text-4xl text-green-600" title="Node.js" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-full p-3 shadow-lg"
          >
            <SiMongodb className="text-4xl text-green-700" title="MongoDB" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="flex-1 flex flex-col items-center md:items-start relative z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Mohamed Raashid
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Full-Stack Developer
        </motion.h2>
        <motion.p
          className="max-w-xl text-gray-700 dark:text-gray-200 mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          I'm a passionate developer specializing in Flutter, React, and
          Node.js. I love building modern, scalable mobile and web apps and
          solving real-world problems.
        </motion.p>
        <motion.div
          className="flex gap-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
              whileHover={{ scale: 1.3, color: "#2563eb" }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.a
          href="/src/assets/Mohamed Raashid.pdf"
          download
          className="px-5 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition font-medium"
          whileHover={{ scale: 1.07, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
