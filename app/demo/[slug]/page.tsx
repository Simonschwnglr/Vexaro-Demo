import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

interface DemoData {
  [key: string]: {
    name: string;
    branche: string;
    anschrift?: string;
    telefon?: string;
    oeffnungszeiten?: string;
    beschreibung: string;
    usps: string[];
    farbe: string;
    demo_type: string;
  };
}

function getDemoData(slug: string): DemoData[string] | null {
  try {
    const filePath = path.join(process.cwd(), 'data', 'demos.json');
    const json = fs.readFileSync(filePath, 'utf8');
    const data: DemoData = JSON.parse(json);
    return data[slug] || null;
  } catch {
    return null;
  }
}

export default function DemoPage({ params }: { params: { slug: string } }) {
  const demo = getDemoData(params.slug);

  if (!demo) {
    notFound();
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        padding: '40px 20px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: demo.farbe,
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          fontWeight: 'bold'
        }}>
          {demo.name.charAt(0)}
        </div>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>{demo.name}</h1>
        <p style={{ color: '#a0a0b0', fontSize: 18 }}>{demo.beschreibung}</p>
      </header>

      {/* USP Section */}
      <section style={{ padding: '60px 20px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, color: demo.farbe, marginBottom: 30 }}>
          Das bieten wir
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 20
        }}>
          {demo.usps.map((usp, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: 30,
              border: `1px solid rgba(255,255,255,0.1)`,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: demo.farbe,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                flexShrink: 0
              }}>
                ✓
              </div>
              <span style={{ fontSize: 16, fontWeight: 500 }}>{usp}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 20px',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.02)'
      }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
          Jetzt eigene Website?
        </h2>
        <p style={{ color: '#a0a0b0', marginBottom: 30, fontSize: 16 }}>
          Vexaro Studio baut Ihre individuelle Website — modern, schnell & mobile-ready
        </p>
        <a href="https://vexaro.design" style={{
          display: 'inline-block',
          background: demo.farbe,
          color: '#fff',
          padding: '16px 40px',
          borderRadius: 12,
          fontSize: 16,
          fontWeight: 600,
          textDecoration: 'none'
        }}>
          Kostenlose Beratung →
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        color: '#606070',
        fontSize: 14
      }}>
        Demo erstellt von <a href="https://vexaro.design" style={{ color: demo.farbe }}>Vexaro Studio</a>
      </footer>
    </div>
  );
}