import { ImageResponse } from 'next/og';

export const alt =
  'EPO-Confirmed Patent for Privacy-Preserving Verification — anonymous eligibility, wallet-free onboarding';
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
            'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #312e81 100%)',
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
              padding: '8px 18px',
              borderRadius: 999,
              border: '2px solid #fbbf24',
              color: '#fbbf24',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            EPO-CONFIRMED PATENT
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
            Privacy-Preserving Verification
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
            Prove eligibility without exposing identity. Wallet-free onboarding
            for blockchain. Compliance without data exposure.
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
            Anonymous KYC
          </div>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            Cross-jurisdiction
          </div>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            Wallet-free onboarding
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
