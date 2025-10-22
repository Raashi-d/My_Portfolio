import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFlutter,
  SiMongodb,
  SiFirebase,
  SiDart,
  SiBitbucket,
  SiExpress,
  SiGoogleplay,
} from "react-icons/si";

const skills = [
  { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
  { name: "Dart", icon: <SiDart className="text-blue-400" /> },
  // { name: "Java", icon: <FaDatabase className="text-orange-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "AWS S3", icon: <FaAws className="text-yellow-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  {
    name: "Google Play Console",
    icon: <SiGoogleplay className="text-green-500" />,
  },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Bitbucket", icon: <SiBitbucket className="text-blue-700" /> },
];

const Skills = () => (
  <section
    id="skills"
    className="relative py-16 bg-white dark:bg-gray-900 overflow-hidden"
  >
    {/* Animated background bubbles */}
    <motion.div
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.18 }}
      style={{ filter: "blur(32px)" }}
    >
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute left-10 top-10 w-40 h-40 rounded-full bg-blue-200 dark:bg-blue-900"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, delay: 2 }}
        className="absolute right-10 bottom-10 w-32 h-32 rounded-full bg-sky-200 dark:bg-sky-900"
      />
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, delay: 1 }}
        className="absolute left-1/2 top-1/2 w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-800"
      />
    </motion.div>
    <div className="relative max-w-5xl mx-auto px-4 z-10">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Technical Skills
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded shadow hover:scale-105 transition-transform"
          >
            <span className="text-4xl">{skill.icon}</span>
            <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
