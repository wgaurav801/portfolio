import type { IconName } from '@/data/types';

/**
 * Inline SVG icon set. Replaces the emoji the previous build used as
 * meaningful iconography — emoji are announced by screen readers as their
 * unicode names and render inconsistently across platforms.
 *
 * Icons are decorative by default (aria-hidden); when an icon is the only
 * content of a control, label the control itself.
 */

const paths: Record<IconName, React.ReactNode> = {
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M7 9.5l3 2.5-3 2.5M13 15h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5-7.5-9.5V6z" />
      <path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </>
  ),
  blueprint: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h5v11M13 4v6h8M13 15h3" />
    </>
  ),
  activity: <path d="M3 12h3.5l2.5-7 4 14 2.5-7H21" />,
  link: (
    <>
      <path d="M10 13.5a4 4 0 006 .5l2.5-2.5a4.2 4.2 0 00-6-6L11 7" />
      <path d="M14 10.5a4 4 0 00-6-.5L5.5 12.5a4.2 4.2 0 006 6L13 17" />
    </>
  ),
  cloud: (
    <>
      <path d="M17.5 18.5H7a4.5 4.5 0 01-.6-8.96A5.5 5.5 0 0117.3 10a4.25 4.25 0 01.2 8.5z" />
    </>
  ),
  sliders: (
    <>
      <path d="M5 20v-7M5 9V4M12 20v-10M12 6V4M19 20v-4M19 12V4" />
      <path d="M3 13h4M10 10h4M17 16h4" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 18, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Standalone glyphs used outside the themed set.
   -------------------------------------------------------------------------- */

interface GlyphProps {
  size?: number;
  className?: string;
}

function glyphProps(size: number, className?: string) {
  return {
    className,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
    focusable: 'false' as const,
  };
}

export function GitHubIcon({ size = 18, className }: GlyphProps) {
  return (
    <svg {...glyphProps(size, className)} fill="currentColor">
      <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0012 2z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, className }: GlyphProps) {
  return (
    <svg {...glyphProps(size, className)} fill="currentColor">
      <path d="M6.94 5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.3 8.4h3.28V21H3.3zM13.6 8.4c-1.6 0-2.5.83-2.93 1.6h-.05V8.4H7.5V21h3.28v-6.23c0-1.64.31-3.23 2.35-3.23 2 0 2.03 1.87 2.03 3.33V21H18.5v-6.8c0-3.2-.69-5.8-4.9-5.8z" />
    </svg>
  );
}

export function MailIcon({ size = 18, className }: GlyphProps) {
  return (
    <svg
      {...glyphProps(size, className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </svg>
  );
}

export function DownloadIcon({ size = 18, className }: GlyphProps) {
  return (
    <svg
      {...glyphProps(size, className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12M7.5 10.5L12 15l4.5-4.5M4 19h16" />
    </svg>
  );
}

export function ArrowIcon({ size = 16, className }: GlyphProps) {
  return (
    <svg
      {...glyphProps(size, className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h13M13 6.5L18.5 12 13 17.5" />
    </svg>
  );
}

export function LockIcon({ size = 14, className }: GlyphProps) {
  return (
    <svg
      {...glyphProps(size, className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 018 0v3" />
    </svg>
  );
}
