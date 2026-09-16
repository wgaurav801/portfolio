import { domains, profile } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowIcon, DownloadIcon } from '@/components/ui/Icon';
import styles from './Hero.module.css';

/**
 * The hero answers three questions above the fold: who, what stack, and what
 * kind of systems. No invented counters — the facts rail carries only values
 * that are supported by the résumé.
 */
export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className={styles.available}>
            <span className={styles.dot} aria-hidden="true" />
            Open to new opportunities
          </p>

          <p className={styles.name}>{profile.name}</p>

          <h1 className={styles.headline}>
            {profile.headline.lead}{' '}
            <span className={styles.accent}>{profile.headline.accent}</span>{' '}
            {profile.headline.trail}
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <p className={styles.summary}>{profile.summary}</p>
        </Reveal>

        <Reveal delay={140}>
          <div className={styles.actions}>
            <a className="btn btnPrimary" href="#projects">
              View projects
              <ArrowIcon size={16} />
            </a>
            <a className="btn btnSecondary" href={profile.resumePath} download>
              <DownloadIcon size={16} />
              Download résumé
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <dl className={styles.facts}>
            <div className={styles.fact}>
              <dt>Experience</dt>
              <dd>{profile.experienceYears}</dd>
            </div>
            <div className={styles.fact}>
              <dt>Core stack</dt>
              <dd>.NET &middot; Angular &middot; SQL</dd>
            </div>
            <div className={styles.fact}>
              <dt>Domains shipped</dt>
              <dd className={styles.domains}>
                {domains.map((domain) => (
                  <span key={domain} className="chip">
                    {domain}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
