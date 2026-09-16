import { principles, profile } from '@/data/profile';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import styles from './About.module.css';

export function About() {
  const { education } = profile;

  return (
    <Section id="about" toned>
      <SectionHeader
        id="about"
        index="01"
        eyebrow="About"
        title="Enterprise systems, owned end to end"
      />

      <div className={styles.layout}>
        <Reveal className={styles.bio}>
          <div className="prose">
            <p>
              I&apos;m a Full Stack .NET Developer at{' '}
              <strong>Tark Technologies LLP</strong>, where I build client-facing
              enterprise applications across manufacturing, fintech, agriculture
              and retail. The work is mostly the unglamorous kind that businesses
              actually run on: production traceability, order lifecycles,
              financial document processing, point of sale.
            </p>
            <p>
              What I enjoy about it is the breadth. A feature typically starts as
              a conversation about how an operation really works, becomes a
              relational schema, then an <strong>ASP.NET Core</strong> Web API,
              then an <strong>Angular</strong> interface, and finally something
              deployed through CI/CD. Owning that whole path means the data model
              and the interface get designed against each other rather than
              negotiated across a handover.
            </p>
            <p>
              Most of my systems are multi-module and expected to grow, so I lean
              on Clean Architecture, Domain-Driven Design and the Repository
              pattern — not as ceremony, but because the alternative gets
              expensive by the second year.
            </p>
          </div>

          <div className={styles.education}>
            <p className={styles.educationLabel}>Education</p>
            <p className={styles.degree}>{education.degree}</p>
            <p className={styles.institution}>
              {education.institution} &middot; {education.university}
            </p>
            <p className={styles.eduMeta}>
              {education.period} &middot; {education.grade}
            </p>
          </div>
        </Reveal>

        <div className={styles.principles}>
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 60}>
              <article className={styles.principle}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleBody}>{principle.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
