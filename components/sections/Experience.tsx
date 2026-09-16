import { roles } from '@/data/experience';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        id="experience"
        index="02"
        eyebrow="Experience"
        title="Professional experience"
        description="Client-facing enterprise software delivered in a product engineering team."
      />

      <div className={styles.list}>
        {roles.map((role) => (
          <Reveal key={`${role.company}-${role.startISO}`}>
            <article className={styles.role}>
              <div className={styles.meta}>
                <p className={styles.period}>
                  <time dateTime={role.startISO}>{role.start}</time>
                  {' — '}
                  {role.endISO ? (
                    <time dateTime={role.endISO}>{role.end}</time>
                  ) : (
                    role.end
                  )}
                </p>
                <p className={styles.location}>{role.location}</p>
              </div>

              <div className={styles.body}>
                <span className={styles.marker} aria-hidden="true" />
                <h3 className={styles.title}>{role.title}</h3>
                <p className={styles.company}>{role.company}</p>
                <p className={styles.summary}>{role.summary}</p>

                <ul className={styles.highlights}>
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className={styles.highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className={styles.stack}>
                  {role.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
