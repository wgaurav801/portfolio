import type { Metadata } from "next";
import Link from "next/link";
import styles from "./email-assistant.module.css";

export const metadata: Metadata = {
  title: "Email Assistant",
  description:
    "A personal productivity tool that helps prepare and manage job-application emails using the Gmail API.",
  alternates: { canonical: "/email-assistant" },
  robots: { index: true, follow: true },
};

export default function EmailAssistantPage() {
  return (
    <main id="main" className={styles.page}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <span className="eyebrow">Personal tool</span>

        <h1 className={styles.heading}>Email&nbsp;Assistant</h1>

        <p className={styles.lead}>
          A personal productivity application designed to help prepare and
          manage job-application emails — powered by the Gmail API.
        </p>

        <div className={styles.links}>
          <Link href="/email-assistant/privacy" className={styles.linkBtn}>
            Privacy Policy
          </Link>
          <Link href="/email-assistant/terms" className={styles.linkBtn}>
            Terms of Service
          </Link>
        </div>
      </header>

      {/* ── Sections ─────────────────────────────────────────── */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            What does Email Assistant do?
          </h2>
          <p>
            Email Assistant helps the user draft and send job-application emails
            directly from their Gmail account. The application generates a draft
            message, lets the user review and edit it, then sends it — all
            through actions explicitly initiated by the user.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Google Gmail access</h2>
          <p>
            The application requests access to Gmail through Google&apos;s OAuth
            authorisation system. The only Gmail permission requested is the{" "}
            <strong>Compose</strong> scope, which allows the application to
            create and send email messages on behalf of the authenticated user.
          </p>
          <p>
            The application does <strong>not</strong> request permission to
            read the user&apos;s existing Gmail inbox, contacts, calendar, or
            any other Google services unless such permissions are explicitly
            added in a future version.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>User control</h2>
          <p>
            Users grant access through Google&apos;s standard OAuth consent
            screen — no credentials are ever collected by this application.
            Access can be revoked at any time through{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              Google Account → Security → Third-party access
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            Who uses this application?
          </h2>
          <p>
            Email Assistant is a personal tool built and used by a single
            developer for their own job search. It is not a commercial product
            or a public SaaS platform.
          </p>
        </section>

        {/* ── Footer links ──────────────────────────────────── */}
        <footer className={styles.footer}>
          <Link href="/email-assistant/privacy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <span className={styles.separator} aria-hidden="true">
            ·
          </span>
          <Link href="/email-assistant/terms" className={styles.footerLink}>
            Terms of Service
          </Link>
        </footer>
      </div>
    </main>
  );
}
