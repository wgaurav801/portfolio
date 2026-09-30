import type { Metadata } from "next";
import Link from "next/link";
import styles from "../email-assistant.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Email Assistant",
  description:
    "Privacy Policy for Email Assistant, a personal Gmail-based job-application tool.",
  alternates: { canonical: "/email-assistant/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main" className={styles.legalPage}>
      <article className={styles.legalArticle}>
        <h1 className={styles.legalTitle}>
          Email Assistant — Privacy Policy
        </h1>
        <p className={styles.legalDate}>Last updated: October 1, 2026</p>

        <section className={styles.legalSection}>
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how Email Assistant handles
            information when you use the application. Email Assistant is a
            personal productivity application designed to assist with preparing
            and sending job-application emails through Gmail.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>2. Google Account and Gmail Data</h2>
          <p>
            Email Assistant uses Google&apos;s OAuth authorisation system to
            obtain permission to interact with Gmail. The application requests
            the Gmail Compose permission required to create and send email
            messages.
          </p>
          <p>
            The application does not request permission to read the
            user&apos;s Gmail inbox or retrieve existing email messages.
          </p>
          <p>
            Access to Google user data is limited to the purposes described in
            this Privacy Policy and to functionality explicitly requested by
            the user.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>3. How Google Data Is Used</h2>
          <p>
            Gmail data accessed through the application is used solely to
            provide email composition and sending functionality requested by
            the user.
          </p>
          <p>
            Email Assistant does not use Google user data for advertising,
            marketing profiling, or any unrelated purpose.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>4. Data Storage</h2>
          <p>
            Email Assistant does not intentionally store the contents of the
            user&apos;s Gmail messages on any server.
          </p>
          <p>
            OAuth credentials and authorisation tokens, when used, are handled
            only for the purpose of maintaining the authorised connection
            between the application and Google services.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>5. Data Sharing</h2>
          <p>Email Assistant does not sell Google user data.</p>
          <p>
            Google user data is not shared with third parties except where
            necessary to provide the functionality described in this Privacy
            Policy or where required by law.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>6. Data Security</h2>
          <p>
            Reasonable technical and organisational measures are used to
            protect application credentials and authorised access to Google
            services.
          </p>
          <p>
            No method of electronic transmission or storage is completely
            secure, and absolute security cannot be guaranteed.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>7. Revoking Google Access</h2>
          <p>
            Users can revoke Email Assistant&apos;s access to their Google
            Account through their{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              Google Account security settings
            </a>
            .
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>8. Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated when the application
            functionality or data practices change. The updated version will
            be published on this page with a revised effective date.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>9. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or Email
            Assistant&apos;s data practices, please contact:
          </p>
          <p className={styles.legalEmail}>wgaurav801@gmail.com</p>
        </section>

        <footer className={styles.legalFooter}>
          <Link href="/email-assistant" className={styles.legalFooterLink}>
            ← Email Assistant
          </Link>
          <span className={styles.separator} aria-hidden="true">·</span>
          <Link
            href="/email-assistant/terms"
            className={styles.legalFooterLink}
          >
            Terms of Service
          </Link>
        </footer>
      </article>
    </main>
  );
}
