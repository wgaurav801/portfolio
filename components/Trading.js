'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tradingProjects = [
  {
    title: 'Gold Liquidity Sweep EA',
    description:
      'Expert Advisor that identifies and trades liquidity sweeps during the Asian session, with entries triggered by Break of Structure (BOS) signals during the London session.',
    features: [
      'Asian session high/low detection',
      'Liquidity sweep identification',
      'BOS-based trade entries',
      'Automated risk management',
    ],
    icon: '🥇',
    status: 'Active',
  },
  {
    title: 'Auto Fibonacci Retracement EA',
    description:
      'Multi-timeframe Expert Advisor that automatically identifies price swings, waits for a touch of key Fibonacci levels, and enters trades with confirmation signals.',
    features: [
      'Multi-timeframe analysis',
      'ZigZag swing detection',
      '0.618 Fibonacci level entries',
      'Configurable trailing stop',
    ],
    icon: '📐',
    status: 'Active',
  },
  {
    title: 'Linear Grid Incremental Lot EA',
    description:
      'Grid trading Expert Advisor with customizable lot sizing that incrementally increases position sizes based on configurable parameters for optimized recovery.',
    features: [
      'Grid-based entry system',
      'Incremental lot sizing',
      'Customizable grid spacing',
      'Position management',
    ],
    icon: '📊',
    status: 'In Development',
  },
];

export default function Trading() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="trading" className="section trading-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Algorithmic Trading</span>
          <h2 className="section-title">MetaTrader 5 Strategies</h2>
          <p className="section-subtitle">
            Automated trading systems built with MQ5 for the financial markets
          </p>
        </div>

        <div className="trading-grid">
          {tradingProjects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card trading-card animate-on-scroll delay-${i + 1}`}
            >
              <div className="trading-card-header">
                <span className="trading-icon">{project.icon}</span>
                <span className={`trading-status ${project.status === 'Active' ? 'active' : 'dev'}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="trading-title">{project.title}</h3>
              <p className="trading-description">{project.description}</p>
              <div className="trading-features">
                {project.features.map((feature) => (
                  <div key={feature} className="trading-feature">
                    <span className="feature-check">✦</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
