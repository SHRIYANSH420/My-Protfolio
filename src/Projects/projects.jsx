import React from "react";
import { useState } from "react";
import { useTheme } from "../App";

const ProjectItem = ({ image, title, description }) => (
  <div className="flex flex-col items-center p-4">
    <img src={image} alt={title} className="w-24 h-24 mb-2" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-center">{description}</p>
  </div>
);

const Projects = () => {
  const { isDarkMode } = useTheme();
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

  return (
    <div
      className={`mt-12 max-w-4xl mx-auto ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-8">PROJECTS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
