'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tark Technologies LLP',
    period: 'Present',
    description:
      'Building and maintaining enterprise web applications using modern technologies. Working across the full stack to deliver scalable, high-quality software solutions.',
    responsibilities: [
      'Developing and maintaining web applications using .NET and Angular',
      'Designing and implementing RESTful APIs and microservices',
      'Database design and optimization with MSSQL and PostgreSQL',
      'Implementing responsive and intuitive user interfaces',
      'Code reviews, testing, and deployment processes',
      'Collaborating with cross-functional teams for product delivery',
    ],
    technologies: ['.NET', 'Angular', 'TypeScript', 'MSSQL', 'PostgreSQL', 'Entity Framework'],
  },
];

export default function Experience() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="experience" className="section experience-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I&apos;ve Worked</h2>
          <p className="section-subtitle">
            Professional experience building real-world applications
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-item animate-on-scroll delay-1">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="glass-card experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company gradient-text">{exp.company}</p>
                  </div>
                  <span className="experience-period tag">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j}>
                        <span className="resp-bullet">▸</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="experience-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
