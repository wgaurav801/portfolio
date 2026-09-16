import { projects } from '@/data/projects';
import type { Project } from '@/data/types';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FlowDiagram } from '@/components/ui/FlowDiagram';
import { LockIcon } from '@/components/ui/Icon';
import styles from './Projects.module.css';

const STATUS_LABEL: Record<Project['status'], string> = {
  shipped: 'Shipped',
  'in-development': 'In development',
};

function ProjectCard({ project }: { project: Project }) {
  const statusClass =
    project.status === 'shipped' ? styles.shipped : styles.building;

  return (
    <article className={styles.project} aria-labelledby={`${project.id}-name`}>
      <div className={styles.head}>
        <div>
          <p className={styles.domain}>{project.domain}</p>
          <h3 id={`${project.id}-name`} className={styles.name}>
            {project.name}
          </h3>
        </div>
        <p className={`${styles.status} ${statusClass}`}>
          <span className={styles.statusDot} aria-hidden="true" />
          {STATUS_LABEL[project.status]}
        </p>
      </div>

      <p className={styles.summary}>{project.summary}</p>

      <div className={styles.analysis}>
        <div>
          <h4 className={styles.blockLabel}>Problem</h4>
          <p className={styles.blockBody}>{project.problem}</p>
        </div>
        <div>
          <h4 className={styles.blockLabel}>Solution</h4>
          <p className={styles.blockBody}>{project.solution}</p>
        </div>
      </div>

      <div className={styles.contributionsGroup}>
        <h4 className={styles.blockLabel}>My contribution</h4>
        <ul className={styles.contributions}>
          {project.contributions.map((contribution) => (
            <li key={contribution} className={styles.contribution}>
              {contribution}
            </li>
          ))}
        </ul>
      </div>

      {project.workflow ? (
        <div className={styles.workflow}>
          <h4 className={styles.blockLabel}>Modelled workflow</h4>
          <FlowDiagram
            compact
            label={`${project.name} workflow`}
            nodes={project.workflow.map((label) => ({ label }))}
          />
        </div>
      ) : null}

      <ul className={styles.stack}>
        {project.stack.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" toned>
      <SectionHeader
        id="projects"
        index="03"
        eyebrow="Projects"
        title="Client systems I've built"
        description="Four production systems delivered at Tark Technologies, across four business domains. Each is described by the problem it solves and the architecture behind it."
      />

      <Reveal className={styles.note}>
        <LockIcon size={16} className={styles.noteIcon} />
        <p className={styles.noteText}>
          These are client projects. Source code and interfaces are covered by
          NDA, so there are no repositories or screenshots to link — what follows
          is the business problem, the system design, and my own contribution to
          each.
        </p>
      </Reveal>

      <div className={styles.list}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index === 0 ? 0 : 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
