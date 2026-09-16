import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  children: ReactNode;
  /** Applies the alternate surface tone. */
  toned?: boolean;
  className?: string;
}

/**
 * Every top-level section renders through this component so that vertical
 * rhythm, scroll offset and landmark semantics are defined in exactly one
 * place.
 */
export function Section({ id, children, toned, className }: SectionProps) {
  const classes = [styles.section, toned ? styles.toned : undefined, className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes} aria-labelledby={`${id}-title`}>
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  id: string;
  /** Two-digit section number, e.g. "02". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  id,
  index,
  eyebrow,
  title,
  description,
  centered,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={[styles.header, centered ? styles.headerCentered : undefined]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="eyebrow">
        <span className={styles.index}>{index}</span>
        {eyebrow}
      </p>
      <h2 id={`${id}-title`} className={styles.title}>
        {title}
      </h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </Reveal>
  );
}
