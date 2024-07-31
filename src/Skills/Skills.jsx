import React from "react";
import { useTheme } from "../App"; // Adjust the import path as needed
import { motion } from "framer-motion"; // Make sure framer-motion is installed

const SkillCard = ({ skill, icon }) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg ${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800"
      } transition-all duration-300`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{skill}</h3>
    </motion.div>
  );
};

const Skills = () => {
  const { isDarkMode } = useTheme();
  const skills = [
    { skill: "HTML", icon: "🌐" },
    { skill: "CSS", icon: "🎨" },
    { skill: "JavaScript", icon: "🚀" },
    { skill: "React", icon: "⚛️" },
    { skill: "Node.js", icon: "🖥️" },
    { skill: "Python", icon: "🐍" },
    { skill: "Git", icon: "📚" },
    { skill: "SQL", icon: "🗃️" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className={`min-h-screen w-full py-16 px-4 ${
        isDarkMode 
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" 
          : "bg-gradient-to-br from-blue-100 via-white to-blue-100"
      } ${isDarkMode ? "text-white" : "text-gray-800"}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
        >
          SKILLS
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;