import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="container navbar-container" aria-label="Main navigation">
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
          aria-label="Enyew Getnet, home"
        >
          Enyew<span>.dev</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
        )}

        <ul
          id="primary-navigation"
          className={`nav-menu ${isOpen ? "active" : ""}`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
