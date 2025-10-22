import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TrackTempo - Smart Travel Mobile Application",
    description:
      "A comprehensive travel app offering destination recommendations, weather updates, currency conversions, and event updates.",
    technologies: ["Flutter", "Node.js", "React", "MongoDB", "APIs"],
    appLink: "https://github.com/Raashi-d/TrackTempo-App",
    adminLink: "https://github.com/Raashi-d/TrackTempo-Admin",
    image: "/projects_img/trackTempo.jpg",
  },
  {
    title: "Bill Genius - Billing App",
    description:
      "A Flutter app for creating customizable invoices, allowing users to generate, save, and share professional invoices as PDFs. Designed for small businesses to streamline billing and record-keeping with ease.",
    badge: "Now available on Google Play Store!",
    technologies: ["Flutter", "Hive"],
    appLink: "https://play.google.com/store/apps/details?id=com.orbit.billgenius&hl=en",
    image: "/projects_img/billgenius.jpg",
  },
  {
    title: "Hot N' Fast - E-commerce Restaurant Platform",
    description:
      "An interactive dining platform with secure user authentication and customizable menus.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    appLink: "https://github.com/Raashi-d/Hot-N-Fast",
    image: "/projects_img/hotnfast.jpeg",
  },
  {
    title: "Todo App",
    description:
      "A task management app that enables users to efficiently create, complete, and delete tasks, helping them stay organized and productive.",
    technologies: ["Flutter", "Dart"],
    appLink: "https://github.com/Raashi-d/Todo-App",
    image: "/projects_img/todo.jpg",
  },
  {
    title: "Weather Forecast Web Application",
    description:
      "A web application that utilizes the OpenWeather API to provide real-time weather data and 5-day forecasts for user-specified locations.",
    technologies: ["HTML", "CSS", "JavaScript", "APIs"],
    appLink: "https://github.com/Raashi-d/Weather_Application",
    image: "/projects_img/weatherapp.jpg",
  },
];

const Projects = () => (
  <section
    id="projects"
    className="relative py-16 bg-white dark:bg-gray-900 overflow-hidden"
  >
    {/* Animated background bubbles */}
    <motion.div
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.13 }}
      style={{ filter: "blur(32px)" }}
    >
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute left-16 top-16 w-44 h-44 rounded-full bg-purple-200 dark:bg-purple-900"
      />
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, delay: 2 }}
        className="absolute right-16 bottom-16 w-36 h-36 rounded-full bg-indigo-200 dark:bg-indigo-900"
      />
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 14, delay: 1 }}
        className="absolute left-1/2 top-1/3 w-28 h-28 rounded-full bg-fuchsia-100 dark:bg-fuchsia-800"
      />
    </motion.div>
    <div className="relative max-w-5xl mx-auto px-4 z-10">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                style={{ maxHeight: "260px" }}
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {project.title}
                </h3>
                {project.badge && (
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-full text-sm font-bold">
                      {project.badge}
                    </span>
                  </div>
                )}
                <p className="text-gray-700 dark:text-gray-200 mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                {project.appLink && (
                  <a
                    href={project.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    App <FaExternalLinkAlt className="inline" />
                  </a>
                )}
                {project.adminLink && (
                  <a
                    href={project.adminLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    Admin <FaExternalLinkAlt className="inline" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
