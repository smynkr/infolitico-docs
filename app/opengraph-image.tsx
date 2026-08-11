import { ImageResponse } from 'next/og';

export const alt = 'Infolitico — an autonomous newsroom, start to finish';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The flame brand mark (public/logo.svg), inlined as a data URI so satori
// renders the real mark without raster assets.
const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><path d="M32 6 C24 15 14 24 14 36 a18 18 0 0 0 36 0 C50 24 40 15 32 6 Z" fill="#C2566B"/><path d="M32 20 C27 26 22 31 22 38 a10 10 0 0 0 20 0 C42 31 37 26 32 20 Z" fill="#E8A4B1"/></svg>`;
const MARK_URI = `data:image/svg+xml;base64,${Buffer.from(MARK_SVG).toString('base64')}`;

/**
 * Branded homepage Open Graph image. The void, the signal, the flame mark —
 * rendered as a static card in the Infolitico identity: near-black field,
 * one deliberate point of warm burgundy light.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0A0A0F',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Ambient burgundy glow — the point of light in the void. */}
        <div
          style={{
            position: 'absolute',
            top: -180,
            left: '50%',
            width: 1000,
            height: 560,
            transform: 'translateX(-50%)',
            background: 'radial-gradient(ellipse, rgba(194,86,107,0.15), transparent 65%)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 90px' }}>
          <img
            src={MARK_URI}
            width={96}
            height={96}
            style={{ marginBottom: 32, borderRadius: 20 }}
            alt=""
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: '#C2566B',
                display: 'flex',
              }}
            />
            <span
              style={{
                color: '#C2566B',
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 6,
                textTransform: 'uppercase',
              }}
            >
              Infolitico
            </span>
          </div>

          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: '#FFFFFF',
            }}
          >
            An autonomous newsroom,
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: '#C2566B',
            }}
          >
            start to finish.
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 40,
              color: '#8F8F8F',
              fontSize: 26,
            }}
          >
            Research, writing, and publication — zero manual steps, every edition
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
