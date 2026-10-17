import React from "react";
import { FaCertificate, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import "./Certifications.css";

const certifications = [
  {
    title: "Programming Fundamentals",
    issuer: "5MCoder",
    date: "February 2026",
    description:
      "Foundational programming concepts and problem-solving skills.",
    file: "5MCoder.pdf",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "5MCoder",
    date: "February 2026",
    description:
      "Fundamental concepts and introductory knowledge of artificial intelligence.",
    file: "5MCoder.pdf",
  },
  {
    title: "Data Analysis Fundamentals",
    issuer: "5MCoder",
    date: "February 2026",
    description:
      "Foundational knowledge of data analysis and working with information.",
    file: "5MCoder.pdf",
  },
  {
    title: "Android Developer Fundamentals",
    issuer: "5MCoder",
    date: "February 2026",
    description:
      "An introduction to Android development concepts and mobile applications.",
    file: "5MCoder.pdf",
  },
  {
    title: "E-Learning",
    issuer: "E-Learning",
    date: "Course certificate",
    description:
      "A certificate documenting additional learning and professional development.",
    file: "e-learning.pdf",
  },
];

const Certifications = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">LEARNING & ACHIEVEMENTS</span>
          <h2>
            My <span className="highlight">certifications</span>
          </h2>
          <p>
            Certificates that reflect my commitment to learning new technologies
            and developing my software engineering skills.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => {
            const certificateUrl = `${baseUrl}${certificate.file}`;

            return (
              <article className="certification-card" key={certificate.title}>
                <div className="certification-card-top">
                  <div className="certification-icon">
                    <FaCertificate aria-hidden="true" />
                  </div>
                  <span className="certification-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="certification-issuer">
                  {certificate.issuer}
                </span>

                <h3>{certificate.title}</h3>

                <p className="certification-description">
                  {certificate.description}
                </p>

                <div className="certification-date">{certificate.date}</div>

                <a
                  className="certificate-link"
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFilePdf aria-hidden="true" />
                  View Certificate
                  <FaExternalLinkAlt
                    className="certificate-link-icon"
                    aria-hidden="true"
                  />
                </a>
              </article>
            );
          })}
        </div>

        <p className="certifications-note">
          Keep learning. Keep building. Keep improving.
        </p>
      </div>
    </section>
  );
};

export default Certifications;
