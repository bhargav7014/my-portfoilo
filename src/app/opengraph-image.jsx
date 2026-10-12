import { ImageResponse } from 'next/og'

export const alt = 'Bhargav HJ — Full Stack · Mobile · IoT Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'radial-gradient(circle at 75% 35%, #0a211d 0%, #020706 70%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: '#e8b243',
            marginBottom: 20,
            fontWeight: 700,
          }}
        >
          01 — FULL STACK / MOBILE / IoT
        </div>
        <div
          style={{
            fontSize: 66,
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: 24,
            letterSpacing: '-1.5px',
            color: '#f0fdf4',
          }}
        >
          Bhargav HJ
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#94a3b8',
            maxWidth: '920px',
            lineHeight: 1.4,
          }}
        >
          Building high-performance digital products across React, Next.js, React Native, TypeScript, Node.js and IoT/BLE.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 80,
            display: 'flex',
            alignItems: 'center',
            fontSize: 22,
            color: '#34d399',
            letterSpacing: '1px',
            fontWeight: 600,
          }}
        >
          bhargavhj.iotkit.in
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
