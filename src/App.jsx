import React, { useState, createContext, useContext, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
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
    const yOffset = -20; // Small offset to account for potential browser inconsistencies
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
      <div className={`transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}>
        <button
          onClick={toggleTheme}
          className={`fixed top-4 right-4 p-2 rounded-full z-20 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>
        <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-10">
          <ul>
            {sections.map((section, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => scrollToSection(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeSection === index
                      ? isDarkMode ? "bg-white" : "bg-gray-900"
                      : isDarkMode ? "bg-gray-600" : "bg-gray-400"
                  }`}
                  aria-label={section.name}
                />
              </li>
            ))}
          </ul>
        </nav>
        {sections.map((section, index) => (
          <section
            key={index}
            id={`section-${index}`}
            className="min-h-screen flex items-center justify-center p-4 snap-start"
          >
            {section.component}
          </section>
        ))}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;