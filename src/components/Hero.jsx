import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="status-dot" />
              Software Engineering Student
            </div>

            <h1 className="hero-title">
              Hi, I'm
              <br />
              <span className="highlight">Enyew Getnet.</span>
            </h1>

            <h2 className="hero-subtitle">
              I build digital experiences
              <span> with code.</span>
            </h2>

            <p className="hero-description">
              I'm a Software Engineering student at Injibara University
              passionate about building useful web applications, solving
              real-world problems, and continuously growing as a developer.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore my work <FaArrowRight aria-hidden="true" />
              </a>

              <a href="#contact" className="btn btn-secondary">
                Get in touch
              </a>
            </div>

            <div className="hero-social">
              <span className="hero-social-label">Find me online</span>

              <a
                href="https://github.com/enu-style"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                title="GitHub"
              >
                <FaGithub aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/in/enyew-getnet-109217349/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                title="LinkedIn"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <div className="hero-image-topline">
                <span />
                <span />
                <span />
                <p>developer.profile</p>
              </div>

              <div className="image-container">
                <img
                  src={`${baseUrl}images/enu.jpg`}
                  alt="Portrait of Enyew Getnet"
                  className="profile-image"
                  fetchPriority="high"
                />
              </div>

              <div className="hero-image-caption">
                <div className="hero-code-icon">
                  <FaCode aria-hidden="true" />
                </div>
                <div>
                  <strong>Enyew Getnet</strong>
                  <span>Learning · Building · Growing</span>
                </div>
                <span className="hero-caption-dot" />
              </div>
            </div>

            <div className="hero-floating-card" aria-hidden="true">
              <span className="floating-card-icon">
                <FaCode />
              </span>
              <span>
                <strong>Code with purpose</strong>
                <small>Build. Test. Improve.</small>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <a href="#about" className="hero-scroll">
            <span className="scroll-line" />
            Scroll to explore
          </a>

          <a href={`${baseUrl}resume.pdf`} download className="resume-download">
            <FaDownload aria-hidden="true" />
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
