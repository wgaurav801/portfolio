import type { Role } from './types';

export const roles: Role[] = [
  {
    title: 'Full Stack .NET Developer',
    company: 'Tark Technologies LLP',
    location: 'Rajkot, Gujarat',
    start: 'Jan 2024',
    end: 'Present',
    startISO: '2024-01',
    summary:
      'Deliver client-facing enterprise applications end-to-end — requirements, relational schema design, ASP.NET Core Web API development, Angular UI, and CI/CD-driven deployment — across manufacturing, fintech, agriculture and retail domains.',
    highlights: [
      'Build client-facing enterprise applications end-to-end using Entity Framework Core, LINQ, SQL Server, PostgreSQL and Git.',
      'Secure every API surface with JWT authentication and role-based access control.',
      'Structure codebases with Clean Architecture, Domain-Driven Design, the Repository pattern and SOLID principles so multi-module systems stay maintainable.',
      'Optimise queries and schema design for high-volume transactional workloads.',
    ],
    stack: [
      'ASP.NET Core',
      'Angular',
      'Entity Framework Core',
      'LINQ',
      'SQL Server',
      'PostgreSQL',
      'Git',
      'CI/CD',
    ],
  },
];
