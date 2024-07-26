import React, { useState } from "react";
import { Twitter, Github, Linkedin, Sun, Moon, Check } from "lucide-react";

const ProjectItem = ({ image, title, description }) => (
  <div className="flex flex-col items-center p-4">
    <img src={image} alt={title} className="w-24 h-24 mb-2" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-center">{description}</p>
  </div>
);

const SkillItem = ({ skill }) => (
  <div className="flex items-center">
    <Check className="w-4 h-4 mr-2" />
    <span>{skill}</span>
  </div>
);

const DeveloperProfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects] = useState([
    {
      image: "/api/placeholder/96/96",
      title: "Viberr",
      description: "Streaming App",
    },
    {
      image: "/api/placeholder/96/96",
      title: "Fresh Burger",
      description: "Restaurant Shop",
    },
    {
      image: "/api/placeholder/96/96",
      title: "Hipster",
      description: "Glasses Shop",
    },
    {
      image: "/api/placeholder/96/96",
      title: "FitLift",
      description: "Fitness App",
    },
  ]);
  const [skills] = useState([
    ["HTML", "CSS", "JavaScript", "TypeScript", "Node"],
    ["React", "Angular", "Vue", "Tailwind CSS"],
    ["Redux", "Webpack", "Git", "Jest", "Bootstrap"],
  ]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
    >
      {/* Profile Section */}
      <div
        className={`flex items-center justify-center min-h-screen p-4 transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"
          }`}
      >
        <div
          className={`rounded-lg shadow-lg p-8 m-4 max-w-xl w-full flex flex-col md:flex-row items-center transition-colors duration-300 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <div className="md:w-2/3 text-center md:text-left md:pr-8">
            <h1 className="text-4xl font-bold mb-2">SHRIYANSH RAUTHAN</h1>
            <h2
              className={`text-xl mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
            >
              FRONTEND DEVELOPER
            </h2>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <Twitter className="w-6 h-6" />
              <Github className="w-6 h-6" />
              <Linkedin className="w-6 h-6" />
            </div>
            <p
              className={`mb-6 text-center md:text-left ${isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
            >
              With a passion for developing modern React web apps for commercial
              businesses.
            </p>
            <button
              className={`px-6 py-2 rounded-full transition-colors ${isDarkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
                }`}
            >
              Resume
            </button>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <img
              src="/src/assets/Untitled design.png"
              alt="Developer profile"
              className="rounded-full w-48 h-48 mx-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        className={`mt-12 max-w-4xl mx-auto ${isDarkMode ? "text-white" : "text-black"
          }`}
      >
        <h2 className="text-3xl font-bold text-center mb-8">PROJECTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div
        className={`mt-12 max-w-4xl mx-auto ${isDarkMode ? "text-white" : "text-black"
          }`}
      >
        <h2 className="text-3xl font-bold text-center mb-8">SKILLS</h2>
        <div className="flex flex-col items-center">
          {skills.map((skillGroup, index) => (
            <div key={index} className="w-full max-w-2xl mb-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {skillGroup.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} skill={skill} />
                ))}
              </div>
              {index < skills.length - 1 && (
                <hr
                  className={`my-4 ${isDarkMode ? "border-gray-700" : "border-gray-300"
                    }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-2 rounded-full ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default DeveloperProfile;
