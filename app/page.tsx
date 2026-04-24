import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center', maxWidth: 500, padding: 40 }}>
        <div style={{
          width: 80,
          height: 80,
          borderRadius: 20,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          margin: '0 auto 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          fontWeight: 'bold'
        }}>
          V
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Vexaro Demo</h1>
        <p style={{ color: '#a0a0b0', fontSize: 18, marginBottom: 40 }}>
          Individuelle Website-Demos für lokale Unternehmen
        </p>
        <Link href="https://vexaro.design" style={{
          display: 'inline-block',
          background: '#6366f1',
          color: '#fff',
          padding: '16px 40px',
          borderRadius: 12,
          fontSize: 16,
          fontWeight: 600,
          textDecoration: 'none'
        }}>
          Vexaro Studio besuchen →
        </Link>
      </div>
    </div>
  );
}