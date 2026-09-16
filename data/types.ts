/**
 * Content model for the portfolio.
 *
 * Every value rendered on the site is sourced from `data/` so that content
 * changes never require touching a component. Content itself is sourced from
 * the resume in `public/Gaurav-Wagh-Resume.pdf` — nothing here is invented.
 */

export type ProjectStatus = 'shipped' | 'in-development';

export interface Project {
  /** Stable slug, used for DOM ids and React keys. */
  id: string;
  name: string;
  /** Short label, e.g. "Manufacturing / Food Production". */
  domain: string;
  /** One-line positioning statement shown under the title. */
  summary: string;
  status: ProjectStatus;
  /** The operational problem the software was built to solve. */
  problem: string;
  /** How the system addresses that problem. */
  solution: string;
  /** Specific, verifiable contributions. */
  contributions: string[];
  stack: string[];
  /** Optional ordered workflow rendered as a diagram. */
  workflow?: string[];
}

export interface Role {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  /** ISO dates for <time dateTime>. */
  startISO: string;
  endISO?: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface StackGroup {
  title: string;
  /** Rendered as the group's icon. */
  icon: IconName;
  items: string[];
}

export interface AlgoProject {
  id: string;
  name: string;
  status: 'built' | 'in-development';
  description: string;
  details: string[];
}

export interface AlgoCapability {
  title: string;
  description: string;
  icon: IconName;
}

export interface FlowNode {
  label: string;
  /** Optional second line, e.g. the technology involved. */
  meta?: string;
  /** Highlights the node as the part the author wrote. */
  emphasis?: boolean;
}

export type IconName =
  | 'server'
  | 'layout'
  | 'database'
  | 'terminal'
  | 'shield'
  | 'blueprint'
  | 'activity'
  | 'link'
  | 'cloud'
  | 'sliders';
