'use client';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">👋 Hello, I&apos;m</div>
          <h1 className="hero-name">
            Gaurav <span className="gradient-text">Wagh</span>
          </h1>
          <p className="hero-title">Full Stack Developer</p>
          <p className="hero-tagline">
            I build modern web applications and software solutions with a passion for
            clean code, scalable architecture, and algorithmic trading systems.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>⚡</span> View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>💬</span> Contact Me
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number gradient-text">3+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number gradient-text">10+</span>
              <span className="hero-stat-label">Projects Built</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number gradient-text">5+</span>
              <span className="hero-stat-label">Technologies</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-code-block">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
              <span className="code-filename">developer.js</span>
            </div>
            <pre className="code-body">
{`const developer = {
  name: "Gaurav Wagh",
  role: "Full Stack Developer",
  skills: [
    ".NET", "Angular", "Node.js",
    "TypeScript", "SQL", "MQ5"
  ],
  passion: "Building solutions",
  coffee: true ☕
};`}
            </pre>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}
