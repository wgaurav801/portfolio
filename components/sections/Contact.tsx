'use client';

import { useId, useState, type FormEvent } from 'react';
import { profile } from '@/data/profile';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from '@/components/ui/Icon';
import styles from './Contact.module.css';

/**
 * Web3Forms access keys are public by design — the key identifies the
 * destination inbox, it does not authorise anything. It is read from the
 * environment so it can be rotated without a code change if the endpoint
 * starts attracting spam.
 */
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? 'e2404a01-ecf2-420f-804d-276e64e12a53';

type Status = 'idle' | 'sending' | 'success' | 'error';

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35a9.93 9.93 0 004.87 1.25h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0012.04 2zm0 18.17h-.01a8.27 8.27 0 01-4.21-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.24 8.24 0 01-1.26-4.39c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 012.42 5.85c0 4.57-3.71 8.25-8.28 8.25zm4.54-6.18c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12s-.64.8-.79.97c-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23a7.5 7.5 0 01-1.38-1.72c-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.55-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.2 3.7.59.26 1.04.4 1.4.52.59.18 1.12.16 1.55.1.47-.07 1.46-.6 1.67-1.18.2-.57.2-1.07.14-1.17-.06-.11-.23-.17-.48-.29z" />
    </svg>
  );
}

export function Contact() {
  const formId = useId();
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const sending = status === 'sending';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never see this field, bots fill everything.
    if (data.get('company')) {
      setStatus('success');
      form.reset();
      return;
    }

    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          subject: `Portfolio enquiry from ${data.get('name')}`,
          from_name: 'gauravwagh.tech',
        }),
      });

      const result: { success?: boolean; message?: string } =
        await response.json();

      if (result.success) {
        setStatus('success');
        setMessage('Thanks — your message is on its way. I’ll reply by email.');
        form.reset();
      } else {
        setStatus('error');
        setMessage(
          result.message ?? 'Something went wrong. Please email me directly.'
        );
      }
    } catch {
      setStatus('error');
      setMessage(
        'Network error — please check your connection, or email me directly.'
      );
    }
  }

  return (
    <Section id="contact" toned>
      <SectionHeader
        id="contact"
        index="06"
        eyebrow="Contact"
        title="Get in touch"
        description="Open to full-stack .NET roles and interesting engineering problems. The fastest route is email — I read everything."
      />

      <div className={styles.layout}>
        <Reveal>
          <div className={styles.channels}>
            <a className={styles.channel} href={`mailto:${profile.email}`}>
              <span className={styles.channelIcon}>
                <MailIcon size={18} />
              </span>
              <span>
                <span className={styles.channelLabel}>Email</span>
                <span className={styles.channelValue}>{profile.email}</span>
              </span>
            </a>

            <a
              className={styles.channel}
              href={`https://wa.me/${profile.phoneE164}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.channelIcon}>
                <WhatsAppIcon />
              </span>
              <span>
                <span className={styles.channelLabel}>WhatsApp</span>
                <span className={styles.channelValue}>
                  {profile.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              className={styles.channel}
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.channelIcon}>
                <LinkedInIcon size={18} />
              </span>
              <span>
                <span className={styles.channelLabel}>LinkedIn</span>
                <span className={styles.channelValue}>wagh-gaurav</span>
              </span>
            </a>

            <a
              className={styles.channel}
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.channelIcon}>
                <GitHubIcon size={18} />
              </span>
              <span>
                <span className={styles.channelLabel}>GitHub</span>
                <span className={styles.channelValue}>wgaurav801</span>
              </span>
            </a>

            <a
              className={`btn btnSecondary ${styles.resume}`}
              href={profile.resumePath}
              download
            >
              <DownloadIcon size={16} />
              Download résumé (PDF)
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor={`${formId}-name`}>
                Name
              </label>
              <input
                className={styles.input}
                id={`${formId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                required
                disabled={sending}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor={`${formId}-email`}>
                Email
              </label>
              <input
                className={styles.input}
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={sending}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor={`${formId}-message`}>
                Message
              </label>
              <textarea
                className={styles.textarea}
                id={`${formId}-message`}
                name="message"
                rows={5}
                required
                disabled={sending}
              />
            </div>

            <div className={styles.honeypot} aria-hidden="true">
              <label htmlFor={`${formId}-company`}>
                Company (leave this empty)
              </label>
              <input
                id={`${formId}-company`}
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Announced to assistive tech without moving focus. */}
            <p aria-live="polite" className="visuallyHidden">
              {status === 'sending' ? 'Sending your message' : message}
            </p>

            {message ? (
              <p
                className={`${styles.status} ${
                  status === 'success' ? styles.statusSuccess : styles.statusError
                }`}
              >
                {message}
              </p>
            ) : null}

            <button
              type="submit"
              className={`btn btnPrimary ${styles.submit}`}
              disabled={sending}
            >
              {sending ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
