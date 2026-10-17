import React from "react";
import { FaHeart, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a
              className="footer-logo"
              href="#home"
              aria-label="Enyew.dev, back to home"
            >
              Enyew<span>.dev</span>
            </a>
            <p>
              Software Engineering student learning, building, and creating
              useful digital experiences.
            </p>
          </div>

          <div className="footer-navigation">
            <h3>Explore</h3>
            <nav aria-label="Footer navigation">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-connect">
            <h3>Connect</h3>
            <p>Let's learn and build something meaningful.</p>
            <div className="footer-socials">
              <a
                href="https://github.com/enu-style"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <FaGithub aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/enyew-getnet-109217349/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
              <a href="#home" aria-label="Back to top" title="Back to top">
                <FaArrowUp aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Enyew Getnet. All rights reserved.
          </p>
          <p className="footer-credit">
            Made with <FaHeart className="heart-icon" aria-label="love" /> and a
            commitment to learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
