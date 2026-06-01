import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Grace Hotel Management System",
      description:
        "A comprehensive hotel management system for managing room bookings, guest check-ins/check-outs, billing, and staff management. Features include reservation tracking, room availability, payment processing, and detailed reporting.",
      techStack: ["Java", "PostgreSQL", "JDBC"],
      github: "https://github.com/enu-style/grace-hotel-management",
      demo: "#",
    },
    {
      title: "Apple Website Clone",
      description:
        "A pixel-perfect recreation of Apple's website homepage showcasing modern web design principles. Features responsive layout, smooth animations, product showcases, and interactive navigation with clean, minimalist design.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/enu-style/apple-website-clone",
      demo: "#",
    },
    {
      title: "Student Management System",
      description:
        "A robust system for managing student records, course enrollments, grades, and attendance. Features include student registration, course management, grade calculation, report generation, and administrative dashboard.",
      techStack: ["Java", "PostgreSQL", "Swing"],
      github: "https://github.com/enu-style/student-management-system",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some projects I've worked on during my studies
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </a>
                {project.demo && project.demo !== "#" ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                ) : (
                  <span className="project-link disabled">Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
