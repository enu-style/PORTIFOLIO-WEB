import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Enyew Getnet</span>
            </h1>
            <h2 className="hero-subtitle">
              Aspiring Software Engineer Looking for an Internship
            </h2>
            <p className="hero-description">
              I'm a passionate 3rd-year Software Engineering student at Injibara University, 
              eager to learn and build real-world projects. I love solving problems with code 
              and I'm currently diving deep into React to expand my skills.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/enu-style" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/enyewgetnet" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="/images/enu.jpg" alt="Enyew Getnet" className="profile-image" />
            </div>
          </div>
        </div>
        <a href="/resume.pdf" download className="resume-download">
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
