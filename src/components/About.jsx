import React from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaBullseye,
} from "react-icons/fa";
import "./About.css";

const highlights = [
  {
    icon: <FaGraduationCap aria-hidden="true" />,
    title: "My education",
    description:
      "Studying Software Engineering at Injibara University and strengthening my computer science foundations.",
  },
  {
    icon: <FaLaptopCode aria-hidden="true" />,
    title: "What I build",
    description:
      "Developing web applications and exploring frontend and backend technologies through practical projects.",
  },
  {
    icon: <FaLightbulb aria-hidden="true" />,
    title: "How I learn",
    description:
      "Learning by building, debugging, asking questions, and improving my code one step at a time.",
  },
  {
    icon: <FaBullseye aria-hidden="true" />,
    title: "My goal",
    description:
      "Grow into a capable software engineer and contribute to useful, real-world software projects.",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">GET TO KNOW ME</span>
          <h2>
            A little about <span className="highlight">me</span>
          </h2>
          <p>
            My journey into software development, what motivates me, and where I
            want to go.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-story">
            <div className="about-label">
              <span className="about-label-line" />
              MY STORY
            </div>

            <h3>
              Turning curiosity into
              <span className="highlight"> working software.</span>
            </h3>

            <p>
              I'm Enyew Getnet, a Software Engineering student at Injibara
              University with an interest in building practical software and
              solving problems through technology.
            </p>

            <p>
              I enjoy exploring how websites and applications work, developing
              my programming skills, and turning ideas into projects that people
              can use. Every project gives me an opportunity to learn something
              new and become a better developer.
            </p>

            <p>
              I'm working toward becoming a professional software engineer,
              gaining practical experience, and collaborating with others to
              build useful digital solutions.
            </p>

            <a href="#contact" className="about-contact-link">
              Contact <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <article className="about-card" key={item.title}>
                <div className="about-card-icon">{item.icon}</div>

                <div className="about-card-content">
                  <span className="about-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
