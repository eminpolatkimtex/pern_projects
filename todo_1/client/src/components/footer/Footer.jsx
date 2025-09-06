import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-text">
        &copy; {new Date().getFullYear()} MyApp. Tüm hakları saklıdır.
      </span>
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
