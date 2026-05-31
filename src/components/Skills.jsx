import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
      color: '#E34F26',
      description: 'Semantic markup & accessibility'
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt />,
      color: '#1572B6',
      description: 'Responsive design & animations'
    },
    {
      name: 'React',
      icon: <FaReact />,
      color: '#61DAFB',
      description: 'Component-based UI development',
      badge: 'Learning Deeply'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      color: '#339933',
      description: 'Backend & API development'
    },
    {
      name: 'Java',
      icon: <FaJava />,
      color: '#007396',
      description: 'OOP & software design'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="skills-subtitle">
          Technologies I work with and continue to learn
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.badge && (
                <span className="skill-badge">{skill.badge}</span>
              )}
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
