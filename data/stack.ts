import type { StackGroup } from './types';

/**
 * Mirrors the Technical Skills section of the resume. Nothing is listed here
 * that does not appear there.
 */
export const stackGroups: StackGroup[] = [
  {
    title: 'Backend',
    icon: 'server',
    items: [
      'C#',
      '.NET Core',
      'ASP.NET Core',
      'Web API',
      'REST APIs',
      'Entity Framework Core',
      'LINQ',
      'SignalR',
    ],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    items: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'PrimeNG',
    ],
  },
  {
    title: 'Data',
    icon: 'database',
    items: [
      'SQL',
      'SQL Server',
      'PostgreSQL',
      'Relational Database Design',
      'Query Optimization',
    ],
  },
  {
    title: 'Architecture & Practices',
    icon: 'blueprint',
    items: [
      'Clean Architecture',
      'Domain-Driven Design',
      'Repository Pattern',
      'SOLID',
      'OOP',
      'Dependency Injection',
    ],
  },
  {
    title: 'Security',
    icon: 'shield',
    items: [
      'JWT Authentication',
      'Authorization',
      'Role-Based Access Control',
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'terminal',
    items: [
      'Git',
      'Docker',
      'CI/CD',
      'GitHub Actions',
      'Azure DevOps',
    ],
  },
];
