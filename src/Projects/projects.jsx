import React, { useState, useEffect } from "react";
import { useTheme } from "../App";
import { motion } from "framer-motion";

const ProjectItem = ({ image, title, description, link, index }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl rounded-lg bg-opacity-20 hover:bg-opacity-30"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.img
      src={image}
      alt={title}
      className="w-32 h-32 mb-4 rounded-full"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    />
    <motion.h3
      className="text-2xl font-semibold mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {title}
    </motion.h3>
    <motion.p
      className="text-lg text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {description}
    </motion.p>
  </motion.a>
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
    className={`min-h-screen w-full py-16 px-4 ${
      isDarkMode 
        ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" 
        : "bg-gradient-to-br from-blue-100 via-white to-blue-100"
    } ${isDarkMode ? "text-white" : "text-gray-800"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          PROJECTS
        </motion.h2>
        {isVisible && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;