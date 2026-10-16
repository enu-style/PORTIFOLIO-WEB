import React from "react";
import {
  FaGithub,
  FaCodeBranch,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./GitHub.css";

const GitHub = () => (
  <section id="github" className="github-section">
    <div className="container">
      <div className="section-heading">
        <span className="section-eyebrow">OPEN SOURCE & COLLABORATION</span>
        <h2>
          Code, learn, <span className="highlight">repeat.</span>
        </h2>
        <p>
          I use projects to strengthen my skills, explore new technologies, and
          turn ideas into working software.
        </p>
      </div>

      <div className="github-content">
        <div className="github-card">
          <div className="github-card-main">
            <div className="github-icon" aria-hidden="true">
              <FaGithub />
            </div>

            <div className="github-copy">
              <span className="github-label">MY DEVELOPER PROFILE</span>
              <h3>Explore my work on GitHub</h3>
              <p>
                Visit my profile to explore my repositories, review my code, and
                follow the projects I'm working on as I grow as a software
                engineer.
              </p>

              <a
                href="https://github.com/enu-style"
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                <FaGithub aria-hidden="true" />
                Visit my GitHub
                <FaArrowRight
                  className="github-button-arrow"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="github-card-side">
            <span className="github-side-icon">
              <FaCodeBranch aria-hidden="true" />
            </span>
            <h4>Building in public</h4>
            <p>
              Learning by building projects, improving code, and exploring
              software development one step at a time.
            </p>
            <a
              href="https://github.com/enu-style?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="github-repositories-link"
            >
              Browse repositories <FaExternalLinkAlt aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GitHub;
