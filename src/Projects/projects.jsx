import React from "react";
import { useState } from "react";
import { useTheme } from "../App";

const ProjectItem = ({ image, title, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg bg-opacity-20 hover:bg-opacity-30"
  >
    <img src={image} alt={title} className="w-32 h-32 mb-4" />
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-lg text-center">{description}</p>
  </a>
);

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [projects] = useState([
    {
      image: "/src/assets/management.png",
      title: "Management",
      description: "Management App",
      link: "https://github.com/SHRIYANSH420/management.git",
    },
    {
      image: "/src/assets/regression-analysis.png",
      title: "ModelOut",
      description: "Regression model",
      link: "https://github.com/SHRIYANSH420/Logistic-Regression.git",
    },
    {
      image: "/src/assets/admin.png",
      title: "FullStack Admin",
      description: "Admin Dashboard",
      link: "https://github.com/SHRIYANSH420/fullstack-admin-master.git",
    },
    {
      image: "/src/assets/GOLDEN HOUR.png",
      title: "Golden Hour",
      description: "Fitness App",
      link: "https://example.com/goldenhour",
    },
  ]);

  return (
    <div
      className={`min-h-screen w-full py-12 px-4 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;