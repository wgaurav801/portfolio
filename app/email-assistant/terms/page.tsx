import type { Metadata } from "next";
import Link from "next/link";
import styles from "../email-assistant.module.css";

export const metadata: Metadata = {
  title: "Terms of Service — Email Assistant",
  description:
    "Terms of Service for Email Assistant, a personal Gmail-based job-application tool.",
  alternates: { canonical: "/email-assistant/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main id="main" className={styles.legalPage}>
      <article className={styles.legalArticle}>
        <h1 className={styles.legalTitle}>
          Email Assistant — Terms of Service
        </h1>
        <p className={styles.legalDate}>Last updated: October 1, 2026</p>

        <section className={styles.legalSection}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using Email Assistant, you agree to these Terms of Service. If
            you do not agree with these terms, please do not use the
            application.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>2. Description of the Service</h2>
          <p>
            Email Assistant is a productivity tool intended to help users
            prepare and manage job-application emails and interact with Gmail
            through authorised Google APIs.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>3. Google Account Authorisation</h2>
          <p>
            Users may authorise Email Assistant to access specific Gmail
            functionality through Google&apos;s OAuth authorisation system.
          </p>
          <p>
            Users are responsible for reviewing the permissions requested by
            the application before granting access.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>4. User Responsibility</h2>
          <p>
            Users are responsible for reviewing emails, recipients,
            attachments, and other information before sending messages.
          </p>
          <p>
            The user is responsible for ensuring that their use of the
            application complies with applicable laws, employment requirements,
            and the terms of service of any third-party platforms they use.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>5. No Guarantee</h2>
          <p>
            Email Assistant is provided on an &quot;as is&quot; basis.
            Availability, functionality, and compatibility may change over
            time.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>6. Changes to the Service</h2>
          <p>
            The application may be modified, updated, suspended, or
            discontinued at any time without prior notice.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>7. Contact</h2>
          <p>
            Questions regarding these Terms of Service can be sent to:
          </p>
          <p className={styles.legalEmail}>wgaurav801@gmail.com</p>
        </section>

        <footer className={styles.legalFooter}>
          <Link href="/email-assistant" className={styles.legalFooterLink}>
            ← Email Assistant
          </Link>
          <span className={styles.separator} aria-hidden="true">·</span>
          <Link
            href="/email-assistant/privacy"
            className={styles.legalFooterLink}
          >
            Privacy Policy
          </Link>
        </footer>
      </article>
    </main>
  );
}
