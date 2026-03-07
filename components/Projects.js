'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    title: 'Enterprise Web Application',
    description:
      'A full-stack enterprise application for business operations management, featuring role-based access, real-time dashboards, and comprehensive reporting.',
    technologies: ['.NET', 'Angular', 'MSSQL', 'TypeScript'],
    github: '#',
    demo: '#',
    icon: '🏢',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Modern e-commerce platform with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.',
    technologies: ['Node.js', 'Angular', 'PostgreSQL', 'REST API'],
    github: '#',
    demo: '#',
    icon: '🛒',
  },
  {
    title: 'Trading Bot — Liquidity Sweep EA',
    description:
      'MetaTrader 5 Expert Advisor that identifies liquidity sweeps during Asian session and executes trades on London session Break of Structure signals.',
    technologies: ['MQ5', 'MetaTrader 5', 'Algorithmic Trading'],
    github: '#',
    demo: null,
    icon: '📈',
  },
  {
    title: 'Low-Code Business App',
    description:
      'Business management application built using Appsmith low-code platform, integrating with REST APIs and SQL databases for rapid deployment.',
    technologies: ['Appsmith', 'REST API', 'PostgreSQL', 'JavaScript'],
    github: '#',
    demo: '#',
    icon: '⚡',
  },
  {
    title: 'Auto Fibonacci EA',
    description:
      'Multi-timeframe Expert Advisor using Fibonacci retracement levels for automated trade entries, with configurable risk management and trailing stops.',
    technologies: ['MQ5', 'MetaTrader 5', 'Technical Analysis'],
    github: '#',
    demo: null,
    icon: '📊',
  },
  {
    title: 'API Gateway Service',
    description:
      'Centralized API gateway for microservices architecture with authentication, rate limiting, request routing, and logging capabilities.',
    technologies: ['.NET', 'C#', 'Entity Framework', 'MSSQL'],
    github: '#',
    demo: null,
    icon: '🔗',
  },
];

export default function Projects() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I&apos;ve Built</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my skills across different domains
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card project-card animate-on-scroll delay-${(i % 3) + 1}`}
            >
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && project.github !== '#' ? (
                  <a
                    href={project.github}
                    className="btn btn-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⌨️ GitHub
                  </a>
                ) : (
                  <a href="#" className="btn btn-secondary btn-sm">⌨️ GitHub</a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
