import React from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import './GitHub.css';

const GitHub = () => {
  return (
    <section id="github" className="github-section">
      <div className="container">
        <h2 className="section-title">GitHub Profile</h2>
        <div className="github-content">
          <div className="github-card">
            <div className="github-icon">
              <FaGithub />
            </div>
            <h3>Check out my code</h3>
            <p>
              Visit my GitHub profile to see all my projects, contributions, and 
              coding activity. I'm constantly learning and building new things!
            </p>
            <div className="github-stats">
              <div className="stat-item">
                <FaCodeBranch />
                <span>Public Repositories</span>
              </div>
              <div className="stat-item">
                <FaStar />
                <span>Open Source Contributions</span>
              </div>
            </div>
            <a 
              href="https://github.com/enu-style" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-button"
            >
              <FaGithub /> Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
