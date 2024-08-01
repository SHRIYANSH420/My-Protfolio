import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";
import { useTheme } from "../App";
import { motion } from "framer-motion";

const DeveloperProfile = () => {
  const { isDarkMode } = useTheme();
/*flex items-center justify-center p-4 transition-colors duration-300 */
  return (
    <div
    className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 w-full ${
      isDarkMode 
        ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" 
        : "bg-gradient-to-br from-blue-100 via-white to-blue-100"
    } ${isDarkMode ? "text-white" : "text-gray-800"}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`rounded-lg shadow-2xl p-12 m-4 w-full max-w-6xl flex flex-col lg:flex-row items-center transition-all duration-300 transform hover:shadow-3xl ${
          isDarkMode
            ? "bg-gray-800 text-white hover:bg-gray-750"
            : "bg-white text-black hover:bg-gray-50"
        }`}
      >
        <div className="lg:w-2/3 text-center lg:text-left lg:pr-12">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            SHRIYANSH RAUTHAN
          </motion.h1>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`text-3xl mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            FRONTEND DEVELOPER
          </motion.h2>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center lg:justify-start space-x-6 mb-8"
          >
            <a
              href="https://x.com/Shriyansh200"
              className="transform transition-transform duration-300 hover:scale-125 hover:rotate-12"
            >
              <Twitter
                className={`w-8 h-8 ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-blue-400`}
              />
            </a>
            <a
              href="https://github.com/SHRIYANSH420"
              className="transform transition-transform duration-300 hover:scale-125 hover:-rotate-12"
            >
              <Github
                className={`w-8 h-8 ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-purple-600`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/shriyansh-rauthan-950929299/"
              className="transform transition-transform duration-300 hover:scale-125 hover:rotate-12"
            >
              <Linkedin
                className={`w-8 h-8 ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-blue-600`}
              />
            </a>
          </motion.div>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`mb-8 text-center lg:text-left text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            With a passion for developing modern React web apps for commercial
            businesses. Committed to creating responsive, user-friendly
            interfaces that drive engagement and deliver exceptional user
            experiences.
          </motion.p>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="../assets/Shriyansh's Resume.pdf" download="Resume">
              <button
                className={`px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isDarkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Download Resume
              </button>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="lg:w-1/3 mt-12 lg:mt-0"
        >
          <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full transition-transform duration-300 transform hover:scale-110 hover:rotate-6">
            <img
              src="/src/assets/Untitled design.png"
              alt="Developer profile"
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DeveloperProfile;