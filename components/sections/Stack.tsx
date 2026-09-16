import { stackGroups } from '@/data/stack';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import styles from './Stack.module.css';

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeader
        id="stack"
        index="04"
        eyebrow="Stack"
        title="Technologies and practices"
        description="Grouped by the role each plays in the systems above, rather than as a flat list of logos."
      />

      <div className={styles.grid}>
        {stackGroups.map((group, index) => (
          <Reveal key={group.title} delay={Math.min(index, 3) * 50}>
            <section className={styles.group} aria-label={group.title}>
              <div className={styles.head}>
                <span className={styles.icon}>
                  <Icon name={group.icon} size={17} />
                </span>
                <h3 className={styles.title}>{group.title}</h3>
              </div>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
