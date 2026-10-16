import React from "react";
import { FaCode, FaDesktop, FaServer, FaTools } from "react-icons/fa";
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend development",
    description: "Building user interfaces for the web.",
    icon: <FaDesktop aria-hidden="true" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
  },
  {
    title: "Programming",
    description: "Developing logical solutions to problems.",
    icon: <FaCode aria-hidden="true" />,
    skills: ["JavaScript", "Java", "Problem Solving"],
  },
  {
    title: "Backend & databases",
    description: "Learning how applications manage data and services.",
    icon: <FaServer aria-hidden="true" />,
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & workflow",
    description: "Tools used to develop and maintain projects.",
    icon: <FaTools aria-hidden="true" />,
    skills: ["Git", "GitHub", "VS Code", "npm", "Vite"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">MY TOOLKIT</span>
          <h2>
            Skills & <span className="highlight">technologies</span>
          </h2>
          <p>
            The languages, technologies, and tools I use or am learning to build
            software projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-top">
                <div className="skill-icon">{group.icon}</div>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{group.title}</h3>
              <p className="skill-description">{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="skills-note">
          My toolkit continues to grow as I learn and build new projects.
        </p>
      </div>
    </section>
  );
};

export default Skills;
