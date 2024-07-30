import React, { useState } from 'react';
import { useTheme } from "../App";
import { Check } from 'lucide-react';  // Import the Check icon

const SkillItem = ({ skill }) => (
  <div className="flex items-center">
    <Check className="w-4 h-4 mr-2" />
    <span>{skill}</span>
  </div>
);

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [skills] = useState([
    ["HTML", "CSS", "JavaScript", "TypeScript", "Node"],
    ["React", "Angular", "Vue", "Tailwind CSS"],
    ["Redux", "Webpack", "Git", "Jest", "Bootstrap"],
  ]);

  return (
    <div
      className={`mt-12 max-w-4xl mx-auto ${
        isDarkMode ? "text-white" : "text-black"
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
                className={`my-4 ${
                  isDarkMode ? "border-gray-700" : "border-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;