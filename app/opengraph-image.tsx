import { ImageResponse } from 'next/og';

export const alt =
  'Mohammad Keshtkar — Founder building privacy-preserving verification, blockchain, and AI products';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #4c1d95 100%)',
          color: 'white',
          padding: '72px',
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: 26,
            opacity: 0.7,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background:
                'linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
            }}
          />
          mohammad.biz
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: 28,
              maxWidth: 1000,
            }}
          >
            Mohammad Keshtkar
          </div>
          <div
            style={{
              fontSize: 38,
              opacity: 0.88,
              lineHeight: 1.2,
              maxWidth: 1000,
              fontWeight: 400,
            }}
          >
            Founder building privacy-preserving verification — where blockchain,
            AI, and design meet.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            fontSize: 22,
            opacity: 0.7,
          }}
        >
          <div
            style={{
              padding: '10px 18px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 999,
            }}
          >
            EPO-confirmed patent
          </div>
          <div
            style={{
              padding: '10px 18px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 999,
            }}
          >
            8+ years shipping
          </div>
          <div
            style={{
              padding: '10px 18px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 999,
            }}
          >
            Imperial College London
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
