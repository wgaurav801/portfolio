'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['.NET / C#', 'Node.js', 'ADO.NET', 'Entity Framework', 'REST APIs', 'Web APIs'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['Microsoft SQL Server', 'PostgreSQL', 'Database Design', 'Query Optimization'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'Visual Studio', 'VS Code', 'Appsmith', 'Azure DevOps', 'Postman'],
  },
  {
    title: 'Trading Development',
    icon: '📊',
    skills: ['MQ5 / MetaTrader 5', 'Expert Advisors', 'Algorithmic Strategies', 'Backtesting'],
  },
];

export default function Skills() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern applications
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={cat.title} className={`glass-card skill-card animate-on-scroll delay-${i + 1}`}>
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
