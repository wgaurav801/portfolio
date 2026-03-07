'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="navbar-logo">
              <span className="gradient-text">&lt;GW /&gt;</span>
            </span>
            <p className="footer-tagline">Building the future, one line of code at a time.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <a href="https://github.com/wgaurav801" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/wagh-gaurav/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:wgaurav801@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Gaurav Wagh. All rights reserved.</p>
          <p>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
