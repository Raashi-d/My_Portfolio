import React, { useEffect, useState } from 'react';

const Education: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const education = [
    {
      institution: 'University of Moratuwa',
      period: 'Dec 2022 - Present',
      degree: 'National Diploma in Technology - Information Technology',
      logo: './My_Portfolio/itum1.jpeg'
    },
    {
      institution: 'Zahira College Mawanella',
      period: 'Mar 2018 - Nov 2020',
      degree: 'Physical Science',
      logo: './My_Portfolio/zahira1.png'
    },
    {
      institution: "St. Sylvester's College Kandy",
      period: 'Jan 2011 - Dec 2017',
      degree: 'Ordinary Level',
      logo: './My_Portfolio/ssck.jpg'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="section-title">Education</h1>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.institution}
              className={`bg-gray-900 p-6 rounded-lg flex items-center gap-6 transform hover:scale-[1.02] transition-transform duration-300 ${loaded ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/96';
                  }}
                />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-yellow-400">{edu.institution}</h2>
                <p className="text-gray-400">{edu.period}</p>
                <p className="text-gray-300 mt-2">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;