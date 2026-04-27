import { ImageResponse } from 'next/og';

export const alt =
  'Privacy-Preserving Prediction Market — EPO-patented anonymous verification, no wallet linking';
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
            'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #6d28d9 100%)',
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
            gap: 14,
            fontSize: 24,
            opacity: 0.8,
          }}
        >
          <div
            style={{
              padding: '6px 14px',
              borderRadius: 999,
              background:
                'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: '0.05em',
            }}
          >
            FLAGSHIP
          </div>
          <span style={{ opacity: 0.7 }}>mohammad.biz</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: 24,
              maxWidth: 1050,
            }}
          >
            Privacy-Preserving Prediction Market
          </div>
          <div
            style={{
              fontSize: 32,
              opacity: 0.9,
              lineHeight: 1.3,
              maxWidth: 1050,
              fontWeight: 400,
            }}
          >
            Anonymous eligibility verification, wallet-free onboarding, and
            EPO-patented zero-knowledge trust technology.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 14,
            fontSize: 20,
            opacity: 0.75,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            Zero-knowledge proofs
          </div>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            Privacy-preserving KYC
          </div>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            Patent-backed
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
