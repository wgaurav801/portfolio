import { profile } from '@/data/profile';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/ui/Icon';
import styles from './Footer.module.css';

const SECTIONS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#algo-lab', label: 'Algo Lab' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.identity}>
            <p className={styles.brand}>{profile.name}</p>
            <p className={styles.tagline}>
              {profile.role} based in {profile.location}. Building enterprise web
              applications on .NET and Angular.
            </p>
            <div className={styles.social}>
              <a
                className={styles.socialLink}
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <GitHubIcon size={17} />
              </a>
              <a
                className={styles.socialLink}
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <LinkedInIcon size={17} />
              </a>
              <a
                className={styles.socialLink}
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.name}`}
              >
                <MailIcon size={17} />
              </a>
            </div>
          </div>

          <nav className={styles.column} aria-label="Footer">
            <h2 className={styles.columnTitle}>Sections</h2>
            <ul>
              {SECTIONS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${profile.phoneE164}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={profile.resumePath} download>
                  Download résumé
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {profile.name}
          </p>
          <p className={styles.built}>Next.js · TypeScript · CSS Modules</p>
        </div>
      </div>
    </footer>
  );
}
