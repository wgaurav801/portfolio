import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { profile, SITE_URL } from '@/data/profile';
import { ThemeScript } from '@/components/layout/ThemeScript';
import './globals.css';

/*
 * Self-hosted via next/font: no third-party connection, no render-blocking
 * stylesheet, and size-adjust metrics that remove the swap layout shift.
 * Both families are variable, so this is two files rather than the seven
 * static weights the previous build requested.
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono-jetbrains',
});

const title = `${profile.name} — ${profile.role}`;
const description =
  'Full Stack .NET Developer with 2.5+ years building production enterprise web applications on ASP.NET Core, Angular, Entity Framework Core and SQL Server across manufacturing, fintech, agriculture and retail.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    '.NET Developer',
    'Full Stack .NET Developer',
    'ASP.NET Core Developer',
    'Angular Developer',
    'C# Developer',
    'Web API',
    'Entity Framework Core',
    'SQL Server',
    'Software Developer',
    profile.name,
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    siteName: `${profile.name} — Portfolio`,
    title,
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0b0d' },
    { media: '(prefers-color-scheme: light)', color: '#fbfaf9' },
  ],
};

/** schema.org Person, so search engines resolve the identity correctly. */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_URL,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  worksFor: { '@type': 'Organization', name: 'Tark Technologies LLP' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rajkot',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: profile.education.university,
  },
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: [
    'C#',
    '.NET',
    'ASP.NET Core',
    'Web API',
    'Entity Framework Core',
    'Angular',
    'TypeScript',
    'SQL Server',
    'PostgreSQL',
    'Clean Architecture',
    'Domain-Driven Design',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          // Static, author-controlled JSON — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
