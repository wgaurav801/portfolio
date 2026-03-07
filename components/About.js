'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Passionate Developer, Problem Solver</h2>
          <p className="section-subtitle">
            Crafting digital experiences with modern technologies
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text animate-on-scroll delay-1">
            <p>
              I&apos;m a <strong>Full Stack Developer</strong> with experience building and
              maintaining web applications using modern backend and frontend technologies.
              Currently working at <strong>Tark Technologies LLP</strong>, I specialize in creating
              scalable, performant software solutions.
            </p>
            <p>
              My expertise spans across the full development stack — from crafting responsive
              UIs with <strong>Angular</strong> and <strong>TypeScript</strong> to building
              robust APIs with <strong>.NET</strong> and <strong>Node.js</strong>. I also have
              a unique interest in <strong>algorithmic trading development</strong>, creating
              automated strategies for MetaTrader 5.
            </p>
            <p>
              I believe in writing clean, maintainable code and continuously learning new
              technologies. When I&apos;m not coding, I&apos;m exploring market strategies
              or contributing to open-source projects.
            </p>
          </div>

          <div className="about-highlights animate-on-scroll delay-2">
            <div className="about-highlight-card glass-card">
              <span className="about-icon">🎯</span>
              <h4>Clean Architecture</h4>
              <p>Building scalable systems with well-structured, maintainable code patterns.</p>
            </div>
            <div className="about-highlight-card glass-card">
              <span className="about-icon">⚡</span>
              <h4>Full Stack Expertise</h4>
              <p>End-to-end development from database design to pixel-perfect frontends.</p>
            </div>
            <div className="about-highlight-card glass-card">
              <span className="about-icon">📈</span>
              <h4>Algo Trading</h4>
              <p>Developing automated trading strategies and expert advisors for MetaTrader 5.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
