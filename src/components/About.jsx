import React from 'react';
import { FaUniversity, FaCode, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm Enyew Getnet, a 3rd-year Software Engineering student at 
              <strong> Injibara University</strong> in Ethiopia. I'm passionate about 
              technology and love the challenge of turning ideas into working software.
            </p>
            <p>
              Currently, I'm diving deep into <strong>React</strong> to strengthen my 
              front-end development skills. I believe in learning by doing, and I'm 
              constantly working on projects that push me to grow as a developer.
            </p>
            <p>
              I'm actively seeking an <strong>internship opportunity</strong> where I can 
              contribute to real-world projects, learn from experienced developers, and 
              grow both technically and professionally. I'm eager to bring my enthusiasm, 
              problem-solving skills, and willingness to learn to a dynamic team.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <div className="card-icon">
                <FaUniversity />
              </div>
              <h3>Education</h3>
              <p>3rd Year Software Engineering</p>
              <p className="card-detail">Injibara University</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <FaCode />
              </div>
              <h3>Focus</h3>
              <p>Full-Stack Development</p>
              <p className="card-detail">Learning React deeply</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <FaLightbulb />
              </div>
              <h3>Goal</h3>
              <p>Software Internship</p>
              <p className="card-detail">Ready to contribute & learn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
