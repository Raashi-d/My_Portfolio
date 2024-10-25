import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const About: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/mohamed-raashid/',
      label: 'LinkedIn'
    },
    {
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/Raashi-d',
      label: 'GitHub'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/raashidh.raashidh',
      label: 'Facebook'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/raashi__d/',
      label: 'Instagram'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 px-4 ${loaded ? 'animate-fadeIn' : ''}`}>
      <div className="container mx-auto max-w-4xl">
        <h1 className="section-title">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className={`bg-gray-900 dark:bg-gray-100 p-6 rounded-lg ${loaded ? 'animate-slideInLeft' : ''}`}>
              <h2 className="section-subtitle">Personal Information</h2>
              <ul className="space-y-3 text-gray-300 dark:text-gray-700">
                <li><span className="text-yellow-400">Name:</span> Mohamed Raashid</li>
                <li><span className="text-yellow-400">Date of Birth:</span> February 23, 2001</li>
                <li><span className="text-yellow-400">Age:</span> 23</li>
                <li><span className="text-yellow-400">Phone:</span> +94 778 253 443</li>
                <li><span className="text-yellow-400">Address:</span> 32/2, Polgolla Road, Udathalawinna, Kandy, Sri Lanka</li>
              </ul>
            </div>
            
            <div className={`bg-gray-900 dark:bg-gray-100 p-6 rounded-lg ${loaded ? 'animate-slideInRight' : ''}`}>
              <h2 className="section-subtitle">Connect With Me</h2>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-300 dark:text-gray-700 hover:text-yellow-400 hover:shadow-glow transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className={`w-full aspect-square rounded-lg overflow-hidden group ${loaded ? 'animate-fadeInUp' : ''}`}>
              <img
                src="./My_Portfolio/profile.png"
                alt="Mohamed Raashid"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;