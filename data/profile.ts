export const SITE_URL = 'https://gauravwagh.tech';

export const profile = {
  name: 'Gaurav Wagh',
  role: 'Full Stack .NET Developer',
  location: 'Rajkot, Gujarat, India',
  /** Kept in one place so the hero, About and schema.org never disagree. */
  experienceYears: '2.5+ years',
  email: 'wgaurav801@gmail.com',
  phoneDisplay: '+91 88497 31117',
  phoneE164: '918849731117',
  resumePath: '/Gaurav-Wagh-Resume.pdf',
  links: {
    github: 'https://github.com/wgaurav801',
    linkedin: 'https://www.linkedin.com/in/wagh-gaurav/',
  },
  /** Hero headline, split so the accent span can be styled independently. */
  headline: {
    lead: 'I build production',
    accent: 'enterprise systems',
    trail: 'with .NET and Angular.',
  },
  summary:
    'Full Stack .NET Developer with 2.5+ years building production enterprise web applications on ASP.NET Core, Angular, Entity Framework Core and SQL Server/PostgreSQL — owning features end-to-end from relational schema design through Web API and Angular UI to CI/CD deployment.',
  education: {
    degree: 'BE, Computer Engineering',
    institution: 'Government Engineering College',
    university: 'Gujarat Technological University',
    period: '2020 – 2024',
    grade: 'CGPA 7.8 / 10.0',
  },
} as const;

/** Domains the author has shipped production software into. */
export const domains = [
  'Manufacturing',
  'Fintech',
  'Agriculture',
  'Retail / F&B',
] as const;

/** How the author works — supported by the resume's architecture section. */
export const principles = [
  {
    title: 'Own the feature end-to-end',
    body: 'Requirements and relational schema design through ASP.NET Core Web API, Angular UI, and CI/CD-driven deployment — not a slice of the stack handed off at each boundary.',
  },
  {
    title: 'Structure for the second year',
    body: 'Clean Architecture, Domain-Driven Design, the Repository pattern and SOLID, applied so multi-module codebases stay maintainable as they grow rather than as decoration.',
  },
  {
    title: 'Secure every API surface',
    body: 'JWT authentication and role-based access control applied consistently across endpoints, so authorisation is a property of the system rather than a per-controller afterthought.',
  },
  {
    title: 'Design the schema for the workload',
    body: 'Query and schema optimisation for high-volume transactional systems, because in business applications the database is usually where performance is decided.',
  },
] as const;
