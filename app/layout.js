import './globals.css';
import './components.css';

export const metadata = {
  title: 'Gaurav Wagh | Full Stack Developer',
  description:
    'Full Stack Developer experienced in .NET, Angular, Node.js, and algorithmic trading development. Building modern web applications and software solutions.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    '.NET Developer',
    'Angular Developer',
    'Node.js',
    'Software Engineer',
    'Gaurav Wagh',
    'Algorithmic Trading',
    'MQ5',
  ],
  authors: [{ name: 'Gaurav Wagh' }],
  openGraph: {
    title: 'Gaurav Wagh | Full Stack Developer',
    description:
      'Full Stack Developer experienced in building modern web applications, software solutions, and algorithmic trading systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaurav Wagh | Full Stack Developer',
    description:
      'Full Stack Developer experienced in building modern web applications and software solutions.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-glow bg-glow-1" aria-hidden="true" />
        <div className="bg-glow bg-glow-2" aria-hidden="true" />
        <div className="bg-glow bg-glow-3" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
