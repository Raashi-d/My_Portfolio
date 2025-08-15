import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const logos = {
  orbit: "/src/assets/education_places/Orbit.png",
  itum: "/src/assets/education_places/itum.jpeg",
  zahira: "/src/assets/education_places/zahira.png",
  ssck: "/src/assets/education_places/ssck.jpg",
};

const experience = [
  {
    title: "Software Developer Intern",
    company: "Orbit (PVT) Ltd",
    period: "Feb 2025 - Present",
    logo: logos.orbit,
    details: [
      "Develop and deploy cross-platform mobile applications using Flutter.",
      "Collaborate in agile development environment with a startup team.",
      "Participate in code reviews and maintain version control using Git.",
    ],
  },
];

const education = [
  {
    degree: "National Diploma in Technology - Information Technology",
    school: "University of Moratuwa",
    period: "Dec 2022 - Present",
    gpa: "3.45",
    logo: logos.itum,
  },
  {
    degree: "Physical Science (A/L)",
    school: "Zahira College Mawanella",
    period: "Mar 2018 - Nov 2020",
    gpa: "B 2C",
    logo: logos.zahira,
  },
  {
    degree: "Ordinary Level",
    school: "St. Sylvester's College Kandy",
    period: "Jan 2011 - Dec 2017",
    gpa: "9A",
    logo: logos.ssck,
  },
];

const ExperienceEducation = () => (
  <section
    id="experience"
    className="py-16 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
  >
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Experience & Education
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Experience */}
        <div className="flex-1">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            <FaBriefcase /> Experience
          </h3>
          <ul className="space-y-6">
            {experience.map((exp, i) => (
              <li
                key={i}
                className="bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-lg p-5 transition-transform hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700 flex gap-4 items-center"
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-14 h-14 object-contain rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-1"
                />
                <div className="flex-1">
                  <div className="font-bold text-lg">{exp.title}</div>
                  <div className="text-blue-500 font-medium">{exp.company}</div>
                  <div className="text-sm text-gray-500 mb-2">{exp.period}</div>
                  <ul className="list-disc ml-5 text-gray-700 dark:text-gray-200">
                    {exp.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Education */}
        <div className="flex-1">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            <FaGraduationCap /> Education
          </h3>
          <ul className="space-y-6">
            {education.map((edu, i) => (
              <li
                key={i}
                className="bg-white/90 dark:bg-gray-800/80 rounded-xl shadow-lg p-5 transition-transform hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700 flex gap-4 items-center"
              >
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-14 h-14 object-contain rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-1"
                />
                <div className="flex-1">
                  <div className="font-bold text-lg">{edu.degree}</div>
                  <div className="text-blue-500 font-medium">{edu.school}</div>
                  <div className="text-sm text-gray-500 mb-2">{edu.period}</div>
                  <div className="text-gray-700 dark:text-gray-200">
                    GPA/Results: {edu.gpa}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceEducation;
