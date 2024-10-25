import React, { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const projects = [
    {
      title: 'TrackTempo - Smart Travel Mobile Application',
      description: 'A comprehensive travel app offering destination recommendations, weather updates, currency conversions, and event updates.',
      technologies: ['Flutter', 'Node.js', 'React', 'MongoDB', 'APIs'],
      appLink: 'https://github.com/Raashi-d/TrackTempo-App',
      adminLink: 'https://github.com/Raashi-d/TrackTempo-Admin',
      image: './My_Portfolio/trackTempo.jpg'
    },
    {
      title: "Hot N' Fast - E-commerce Restaurant Platform",
      description: 'An interactive dining platform with secure user authentication and customizable menus.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      appLink: 'https://github.com/Raashi-d/Hot-N-Fast',
      image: './My_Portfolio/hotnfast.jpeg'
    },
    {
      title: 'Todo App',
      description: 'A task management app that enables users to efficiently create, complete, and delete tasks, helping them stay organized and productive.',
      technologies: ['Flutter', 'Dart'],
      appLink: 'https://github.com/Raashi-d/Todo-App',
      image: './My_Portfolio/todo.jpg'
    },
    {
      title: 'Weather Forecast Web Application',
      description: 'A web application that utilizes the OpenWeather API to provide real-time weather data and 5-day forecasts for user-specified locations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'APIs'],
      appLink: 'https://github.com/Raashi-d/Weather_Application',
      image: './My_Portfolio/weatherapp.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="section-title">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-gray-900 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full ${loaded ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="aspect-video">
                <img
                  src={`${project.image}?w=800&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                  {project.title}
                </h2>
                
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-yellow-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  {project.adminLink && (
                    <a
                      href={project.adminLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Admin Panel
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;