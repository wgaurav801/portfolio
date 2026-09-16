import {
  algoCapabilities,
  algoDisclaimer,
  algoIntro,
  algoProjects,
  copierFlow,
  signalFlow,
} from '@/data/algo';
import { SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FlowDiagram } from '@/components/ui/FlowDiagram';
import { Icon } from '@/components/ui/Icon';
import sectionStyles from '@/components/ui/Section.module.css';
import styles from './AlgoLab.module.css';

const ADVISOR_STATUS: Record<string, string> = {
  built: 'Built',
  'in-development': 'In development',
};

export function AlgoLab() {
  return (
    <section
      id="algo-lab"
      className={`${sectionStyles.section} ${styles.section}`}
      aria-labelledby="algo-lab-title"
    >
      <div className={styles.texture} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <SectionHeader
          id="algo-lab"
          index="05"
          eyebrow="Algo Lab"
          title="Personal technical exploration"
        />

        <Reveal className={styles.framing}>
          <span className={styles.framingLabel}>Side project</span>
          <span className={styles.framingText}>
            Not professional experience — this is what I build outside client
            work.
          </span>
        </Reveal>

        <Reveal>
          <p className={styles.intro}>{algoIntro}</p>
        </Reveal>

        {/* ---- Architecture ---- */}
        <div className={styles.architecture}>
          <Reveal>
            <div className={styles.diagram}>
              <div className={styles.diagramHead}>
                <h3 className={styles.diagramTitle}>
                  Signal path — alert to execution
                </h3>
                <p className={styles.diagramCaption}>
                  A TradingView alert fires a webhook into an ASP.NET Core
                  endpoint. The API is where the interesting work happens: it
                  authenticates the request, validates the payload against the
                  configured risk rules, and only then issues a command the
                  Expert Advisor acts on. Nothing reaches the terminal without
                  passing that gate.
                </p>
              </div>
              <FlowDiagram
                nodes={signalFlow}
                label="Signal path from TradingView alert through to trade execution"
              />
              <p className={styles.legend}>
                <span className={styles.legendSwatch} aria-hidden="true" />
                Components I wrote
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className={styles.diagram}>
              <div className={styles.diagramHead}>
                <h3 className={styles.diagramTitle}>
                  Trade copier — master to slave replication
                </h3>
                <p className={styles.diagramCaption}>
                  A second architecture I&apos;ve been working through: trade
                  events raised on a master terminal are normalised by the
                  communication layer and replayed against one or more slave
                  terminals. The problem it makes concrete is ordering and
                  idempotency — a replicated close that arrives twice, or out of
                  order, has to be harmless.
                </p>
              </div>
              <FlowDiagram
                nodes={copierFlow}
                label="Trade copier architecture from master terminal to slave terminal"
              />
              <p className={styles.legend}>
                <span className={styles.legendSwatch} aria-hidden="true" />
                Components I wrote
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---- Capabilities ---- */}
        <h3 className={styles.subhead}>What the platform handles</h3>
        <div className={styles.capabilities}>
          {algoCapabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={Math.min(index, 3) * 50}>
              <article className={styles.capability}>
                <span className={styles.capabilityIcon}>
                  <Icon name={capability.icon} size={17} />
                </span>
                <h4 className={styles.capabilityTitle}>{capability.title}</h4>
                <p className={styles.capabilityBody}>{capability.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ---- Expert Advisors ---- */}
        <h3 className={styles.subhead}>Expert Advisors</h3>
        <div className={styles.advisors}>
          {algoProjects.map((advisor, index) => (
            <Reveal key={advisor.id} delay={Math.min(index, 3) * 50}>
              <article className={styles.advisor}>
                <div className={styles.advisorHead}>
                  <h4 className={styles.advisorName}>{advisor.name}</h4>
                  <span className="chip">{ADVISOR_STATUS[advisor.status]}</span>
                </div>
                <p className={styles.advisorDescription}>{advisor.description}</p>
                <ul className={styles.advisorDetails}>
                  {advisor.details.map((detail) => (
                    <li key={detail} className={styles.advisorDetail}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <p className={styles.disclaimer}>{algoDisclaimer}</p>
      </div>
    </section>
  );
}
