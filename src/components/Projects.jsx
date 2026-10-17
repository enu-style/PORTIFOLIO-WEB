import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaExternalLinkAlt as FaArrowUpRightFromSquare,
} from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Campus Problem Reporting System",
    category: "Full-stack web application",
    status: "In progress",
    description:
      "A campus-focused reporting platform designed to help students report problems such as water shortages, electrical issues, and toilet maintenance. The system includes authentication, complaint tracking, comments, and role-based access.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/enu-style/Campus-Problem-Reporting-System",
    featured: true,
  },
  {
    title: "Grace Hotel Management System",
    category: "Desktop application",
    description:
      "A hotel management project focused on organizing room bookings, guest check-ins and check-outs, billing, and staff operations.",
    techStack: ["Java", "PostgreSQL", "JDBC"],
    github: "https://github.com/enu-style/grace-hotel-management",
  },
  {
    title: "Apple Website Clone",
    category: "Frontend web project",
    description:
      "A recreation of Apple's website experience, practicing responsive layouts, product presentation, navigation, and modern web styling.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/enu-style/apple-website-clone",
  },
  {
    title: "Student Management System",
    category: "Academic project",
    description:
      "A student-record management project designed around organizing student information and supporting common academic administration tasks.",
    techStack: ["Java", "PostgreSQL", "Swing"],
    github: "https://github.com/enu-style/student-management-system",
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="container">
      <div className="section-heading">
        <span className="section-eyebrow">SELECTED WORK</span>
        <h2>
          Projects I've <span className="highlight">built</span>
        </h2>
        <p>
          A selection of academic and personal projects where I practice my
          skills, solve problems, and keep learning.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`project-card${project.featured ? " project-card-featured" : ""}`}
          >
            <div className="project-card-top">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project.status && (
                <span className="project-status">
                  <span className="project-status-dot" />
                  {project.status}
                </span>
              )}
              <FaArrowUpRightFromSquare
                className="project-card-icon"
                aria-hidden="true"
              />
            </div>

            <p className="project-category">{project.category}</p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech" aria-label="Technologies used">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-tag">
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
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <FaGithub aria-hidden="true" />
                View source
                <FaExternalLinkAlt
                  className="project-link-external"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer">
        <p>More ideas, experiments, and improvements are on the way.</p>
        <a
          href="https://github.com/enu-style"
          target="_blank"
          rel="noopener noreferrer"
          className="projects-github-link"
        >
          Explore my GitHub <FaExternalLinkAlt aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
