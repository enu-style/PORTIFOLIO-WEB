import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipient = "getnetenyew65@gmail.com";
    const subject = `Portfolio message from ${formData.name.trim()}`;
    const body = [
      `Name: ${formData.name.trim()}`,
      `Reply email: ${formData.email.trim()}`,
      "",
      "Message:",
      formData.message.trim(),
    ].join("\n");

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus(
      "Your email app should open with your message ready to go. Just hit Send when you're ready.",
    );

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2>
            Have a question or an idea? <span className="highlight">Let's talk.</span>
          </h2>
          <p>
            I'm open to internships, collaborations, and projects that solve
            real problems. Feel free to reach out — I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <aside className="contact-info">
            <span className="contact-kicker">CONTACT DETAILS</span>
            <h3>Let's make something useful together.</h3>
            <p className="contact-intro">
              Whether you have a question, an opportunity, or an idea to
              discuss, I'd be happy to hear from you.
            </p>

            <a className="info-item" href="mailto:getnetenyew65@gmail.com">
              <span className="info-icon">
                <FaEnvelope aria-hidden="true" />
              </span>
              <span className="info-copy">
                <span className="info-label">EMAIL ME</span>
                <span className="info-value">getnetenyew65@gmail.com</span>
              </span>
              <FaArrowRight className="info-arrow" aria-hidden="true" />
            </a>

            <a className="info-item" href="tel:+251915275883" aria-label="Call +251915275883">
              <span className="info-icon">📞</span>
              <span className="info-copy">
                <span className="info-label">PHONE</span>
                <span className="info-value">+251915275883</span>
              </span>
              <span aria-hidden="true">→</span>
            </a>

            <div className="info-item info-location">
              <span className="info-icon">
                <FaMapMarkerAlt aria-hidden="true" />
              </span>
              <span className="info-copy">
                <span className="info-label">LOCATION</span>
                <span className="info-value">Ethiopia</span>
              </span>
            </div>

            <div className="social-links">
              <h4>Find me online</h4>
              <div className="social-icons">
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
              </div>
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <span className="contact-kicker">SEND A MESSAGE</span>
              <h3>Drop me a line</h3>
              <p>Fill in your details and I'll get back to you as soon as I can.</p>
            </div>

            <div className="form-group">
              <label htmlFor="contact-name">Your name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                autoComplete="name"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                autoComplete="email"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={5000}
                rows={5}
                placeholder="What would you like to talk about?"
              />
            </div>

            <button type="submit" className="submit-button">
              <FaPaperPlane aria-hidden="true" />
              Send message
              <FaArrowRight className="submit-arrow" aria-hidden="true" />
            </button>

            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}

            <p className="contact-form-note">
              This will open your email app with the message ready to send.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
