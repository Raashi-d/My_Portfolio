import React from "react";
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
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Dart", icon: <SiDart className="text-blue-400" /> },
  { name: "Java", icon: <FaDatabase className="text-orange-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "AWS S3", icon: <FaAws className="text-yellow-600" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Bitbucket", icon: <SiBitbucket className="text-blue-700" /> },
];

const Skills = () => (
  <section id="skills" className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-4">
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
