import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Generated at build time so the social card never drifts from the site's
 * actual identity. The previous build declared `summary_large_image` with no
 * image at all, which produced a broken preview on every platform.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0b0d',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '3px',
              background: '#e0a24a',
            }}
          />
          <div
            style={{
              fontSize: '24px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#858b95',
            }}
          >
            gauravwagh.tech
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: '76px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#e9eaec',
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: '16px',
              fontSize: '40px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#e0a24a',
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              marginTop: '24px',
              maxWidth: '900px',
              fontSize: '28px',
              lineHeight: 1.45,
              color: '#a3a8b2',
            }}
          >
            Production enterprise web applications on ASP.NET Core, Angular and
            SQL Server.
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {['C#', 'ASP.NET Core', 'Angular', 'EF Core', 'SQL Server'].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: '1px solid #262a31',
                  background: '#101216',
                  fontSize: '24px',
                  color: '#a3a8b2',
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    ),
    size
  );
}
