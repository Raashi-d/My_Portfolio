import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TrackTempo - Smart Travel Mobile Application",
    description:
      "A comprehensive travel app offering destination recommendations, weather updates, currency conversions, and event updates.",
    technologies: ["Flutter", "Node.js", "React", "MongoDB", "APIs"],
    appLink: "https://github.com/Raashi-d/TrackTempo-App",
    adminLink: "https://github.com/Raashi-d/TrackTempo-Admin",
    image: "/src/assets/projects_img/trackTempo.jpg",
  },
  {
    title: "Bill Genius - Billing App",
    description:
      "A Flutter app for creating customizable invoices, allowing users to generate, save, and share professional invoices as PDFs. Designed for small businesses to streamline billing and record-keeping with ease.",
    technologies: ["Flutter"],
    appLink: "",
    image: "/src/assets/projects_img/billgenius.jpg",
  },
  {
    title: "Hot N' Fast - E-commerce Restaurant Platform",
    description:
      "An interactive dining platform with secure user authentication and customizable menus.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    appLink: "https://github.com/Raashi-d/Hot-N-Fast",
    image: "/src/assets/projects_img/hotnfast.jpeg",
  },
  {
    title: "Todo App",
    description:
      "A task management app that enables users to efficiently create, complete, and delete tasks, helping them stay organized and productive.",
    technologies: ["Flutter", "Dart"],
    appLink: "https://github.com/Raashi-d/Todo-App",
    image: "/src/assets/projects_img/todo.jpg",
  },
  {
    title: "Weather Forecast Web Application",
    description:
      "A web application that utilizes the OpenWeather API to provide real-time weather data and 5-day forecasts for user-specified locations.",
    technologies: ["HTML", "CSS", "JavaScript", "APIs"],
    appLink: "https://github.com/Raashi-d/Weather_Application",
    image: "/src/assets/projects_img/weatherapp.jpg",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-4">
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
