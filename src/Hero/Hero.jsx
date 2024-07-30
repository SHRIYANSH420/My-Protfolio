import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";
import { useTheme } from "../App";

const DeveloperProfile = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`mt-5 flex items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`rounded-lg shadow-lg p-8 m-4 max-w-xl w-full flex flex-col md:flex-row items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
          isDarkMode
            ? "bg-gray-800 text-white hover:bg-gray-750"
            : "bg-white text-black hover:bg-gray-50"
        }`}
      >
        <div className="md:w-2/3 text-center md:text-left md:pr-8">
          <h1 className="text-4xl font-bold mb-2">SHRIYANSH RAUTHAN</h1>
          <h2
            className={`text-xl mb-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            FRONTEND DEVELOPER
          </h2>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a
              href="#"
              className="transform transition-transform duration-300 hover:scale-125 hover:rotate-12"
            >
              <Twitter
                className={`w-6 h-6 ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-blue-400`}
              />
            </a>
            <a
              href="#"
              className="transform transition-transform duration-300 hover:scale-125 hover:-rotate-12"
            >
              <Github
                className={`w-6 h-6 ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-purple-600`}
              />
            </a>
            <a
              href="#"
              className="transform transition-transform duration-300 hover:scale-125 hover:rotate-12"
            >
              <Linkedin
                className={`w-6 h-6 ${
                  isDarkMode ? "text-white" : "text-black"
                } hover:text-blue-600`}
              />
            </a>
          </div>
          <p
            className={`mb-6 text-center md:text-left ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            With a passion for developing modern React web apps for commercial
            businesses.
          </p>
          <a href="../assets/Shriyansh's Resume.pdf" download="Resume">
            <button
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isDarkMode
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Resume
            </button>
          </a>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full transition-transform duration-300 transform hover:scale-110 hover:rotate-6">
            <img
              src="/src/assets/Untitled design.png"
              alt="Developer profile"
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
