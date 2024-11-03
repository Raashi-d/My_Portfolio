import React, { useEffect, useState } from 'react';

const Skills: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Flutter', rating: 60 },
        { name: 'React', rating: 40 },
        { name: 'HTML', rating: 60 },
        { name: 'CSS', rating: 60 },
        { name: 'JavaScript', rating: 50 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', rating: 50 },
        { name: 'Express', rating: 40 },
        { name: 'REST APIs', rating: 50 }
      ]
    },
    {
      title: 'Database Systems',
      skills: [
        { name: 'MongoDB', rating: 50 },
        { name: 'MySQL', rating: 30 }
      ]
    },
    {
      title: 'Tools and Platforms',
      skills: [
        { name: 'VSCode', rating: 60 },
        { name: 'Figma', rating: 75 },
        { name: 'Photoshop', rating: 70 },
        { name: 'Git', rating: 60 }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', rating: 50 },
        { name: 'Java', rating: 50 }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="section-title">My Skills</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-gray-900 p-6 rounded-lg">
              <h2 className="section-subtitle">{category.title}</h2>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-300">{skill.rating}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-yellow-400 rounded-full transition-all duration-500 ${loaded ? 'fill-animation' : ''}`}
                        style={{ '--fill-width': `${skill.rating}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;