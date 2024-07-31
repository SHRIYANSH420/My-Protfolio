import React, { useState, createContext, useContext, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Make sure framer-motion is installed
import DeveloperProfile from "./Hero/Hero";
import Projects from "./Projects/projects";
import Skills from "./Skills/Skills";
import Contactus from "./Contactus/Contactus";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.round(scrollPosition / windowHeight);
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const yOffset = -20;
    const element = document.getElementById(`section-${index}`);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const sections = [
    { component: <DeveloperProfile />, name: "Home" },
    { component: <Projects />, name: "Projects" },
    { component: <Skills />, name: "Skills" },
    { component: <Contactus />, name: "Contact" }
  ];

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        className={`transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
            : "bg-gradient-to-br from-blue-100 via-white to-blue-100"
        }`}
      >
        <motion.button
          onClick={toggleTheme}
          className={`fixed top-4 right-4 p-2 rounded-full z-20 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDarkMode ? "moon" : "sun"}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10">
          <ul>
            {sections.map((section, index) => (
              <motion.li key={index} className="mb-4">
                <motion.button
                  onClick={() => scrollToSection(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeSection === index
                      ? isDarkMode ? "bg-white" : "bg-gray-900"
                      : isDarkMode ? "bg-gray-600" : "bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={section.name}
                />
              </motion.li>
            ))}
          </ul>
        </nav>

        {sections.map((section, index) => (
          <motion.section
            key={index}
            id={`section-${index}`}
            className="min-h-screen flex items-center justify-center p-4 snap-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {section.component}
          </motion.section>
        ))}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;