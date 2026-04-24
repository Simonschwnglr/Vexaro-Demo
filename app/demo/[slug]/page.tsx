import { notFound } from 'next/navigation';

const DEMOS: Record<string, {
  name: string; branche: string; anschrift?: string; telefon?: string; email?: string;
  beschreibung: string; usps: string[]; farbe: string;
}> = {
  'demo-elektriker-mueller': {
    name: 'Elektriker Mueller', branche: 'Elektriker',
    anschrift: 'Berlin', telefon: '',
    beschreibung: 'Ihr zuverlaessiger Partner fuer Elektroinstallation, Smart Home und Reparaturen',
    usps: ['24/7 Notdienst', 'Festpreise', 'Meisterbetrieb'],
    farbe: '#1E40AF'
  },
  'demo-cafe-rosenthal': {
    name: 'Cafe Rosenthal', branche: 'Cafe',
    anschrift: 'Muenchen', telefon: '',
    beschreibung: 'Gemuetliches Cafe im Herzen Muenchens mit hausgemachten Kuchen',
    usps: ['Frische Kuchen taeglich', 'WLAN kostenlos', 'Sitzplaetze innen & aussen'],
    farbe: '#8B4513'
  },
  'demo-fija-elektro': {
    name: 'FIJA Elektro', branche: 'Elektrotechnik',
    anschrift: '', telefon: '',
    beschreibung: 'Professionelle Elektroinstallationen fuer Privat und Gewerbe',
    usps: ['Meisterbetrieb', 'Faire Preise', 'Zuverlaessig'],
    farbe: '#059669'
  },
  'demo-sobrus-systeme': {
    name: 'Sobrus Systeme', branche: 'IT & Elektrotechnik',
    anschrift: '', telefon: '',
    beschreibung: 'Moderne Elektro- und IT-Loesungen fuer Unternehmen',
    usps: ['IT-Systeme', 'Netzwerktechnik', 'Elektroinstallation'],
    farbe: '#7C3AED'
  },
  'demo-alpha-energy': {
    name: 'Alpha Energy GmbH', branche: 'Energietechnik',
    anschrift: '', telefon: '',
    beschreibung: 'Ihr Spezialist fuer nachhaltige Energieloesungen und Elektrotechnik',
    usps: ['Photovoltaik', 'E-Mobilitaet', 'Smart Home'],
    farbe: '#D97706'
  },
  'elektro-harak': {
    name: 'Elektro-Harak GmbH', branche: 'Elektrotechnik',
    anschrift: 'Reutlinger Str. 129, 70597 Stuttgart-Degerloch', telefon: '0711 7 65 32 07', email: 'info@elektro-harak.de',
    beschreibung: 'Ihr Fachbetrieb fuer Elektroinstallation, Photovoltaik und Altbausanierung in Stuttgart-Degerloch',
    usps: ['Elektroinstallation', 'Photovoltaik & Solaranlagen', 'E-Check', 'Netzwerktechnik', 'Sat-Anlagen', 'Altbausanierung'],
    farbe: '#00d4ff'
  },
  'elektro-heinze': {
    name: 'Elektro & System-Technik Heinze', branche: 'Elektrotechnik / Systemtechnik',
    anschrift: 'Lindenring 87, 04824 Beucha', telefon: '034292 51 91 62', email: '',
    beschreibung: 'Ihr Fachbetrieb fuer Elektroinstallationen und Systemtechnik in Beucha bei Leipzig. Praezise. Zuverlaessig. Qualifiziert.',
    usps: ['Elektroinstallationen', 'Systemtechnik', 'Wartung & Pruefung', 'Sicherheitstechnik', 'Industrieelektrik', 'E-Check / Pruefberichte'],
    farbe: '#22c55e'
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;
  const demo = DEMOS[slug];

  if (!demo) {
    notFound();
  }

  const isBlueprint = demo.farbe === '#00d4ff';

  if (isBlueprint) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0a1628',
        color: '#e0e8f0',
        fontFamily: '"Space Mono", monospace',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Blueprint Grid Overlay */}
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(0, 212, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Blueprint Corner Marks */}
        <div style={{ position: 'fixed', top: 20, left: 20, color: '#00d4ff', fontSize: 10, opacity: 0.4, fontFamily: '"Space Mono", monospace' }}>A1</div>
        <div style={{ position: 'fixed', top: 20, right: 20, color: '#00d4ff', fontSize: 10, opacity: 0.4, fontFamily: '"Space Mono", monospace' }}>B1</div>
        <div style={{ position: 'fixed', bottom: 20, left: 20, color: '#00d4ff', fontSize: 10, opacity: 0.4, fontFamily: '"Space Mono", monospace' }}>A2</div>
        <div style={{ position: 'fixed', bottom: 20, right: 20, color: '#00d4ff', fontSize: 10, opacity: 0.4, fontFamily: '"Space Mono", monospace' }}>B2</div>

        {/* Header */}
        <header style={{
          position: 'relative', zIndex: 1,
          padding: '60px 40px 40px',
          borderBottom: `2px dashed ${demo.farbe}`,
          margin: '40px 40px 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40 }}>
            {/* Logo Placeholder */}
            <div style={{
              width: 100, height: 100,
              border: `2px dashed ${demo.farbe}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 36, fontWeight: 'bold', color: demo.farbe,
              flexShrink: 0
            }}>
              EH
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: demo.farbe, marginBottom: 8, letterSpacing: 2 }}>TECHNISCHE SPEZIFIKATION // UNTERNEHMENSPROFIL</div>
              <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8, color: '#fff' }}>{demo.name}</h1>
              <p style={{ color: '#00d4ff', fontSize: 14 }}>{demo.beschreibung}</p>
            </div>
          </div>

          {/* Technical Specs Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
            marginTop: 40,
            paddingTop: 30,
            borderTop: '1px solid rgba(0,212,255,0.2)'
          }}>
            {demo.anschrift && (
              <div>
                <div style={{ fontSize: 9, color: '#00d4ff', marginBottom: 4, letterSpacing: 1 }}>STANDORT</div>
                <div style={{ fontSize: 13 }}>{demo.anschrift}</div>
              </div>
            )}
            {demo.telefon && (
              <div>
                <div style={{ fontSize: 9, color: '#00d4ff', marginBottom: 4, letterSpacing: 1 }}>TELEFON</div>
                <div style={{ fontSize: 13 }}>{demo.telefon}</div>
              </div>
            )}
            {demo.email && (
              <div>
                <div style={{ fontSize: 9, color: '#00d4ff', marginBottom: 4, letterSpacing: 1 }}>E-MAIL</div>
                <div style={{ fontSize: 13 }}>{demo.email}</div>
              </div>
            )}
            <div>
              <div style={{ fontSize: 9, color: '#00d4ff', marginBottom: 4, letterSpacing: 1 }}>STATUS</div>
              <div style={{ fontSize: 13, color: '#00ff88' }}>OPERATIV</div>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section style={{ position: 'relative', zIndex: 1, padding: '60px 40px' }}>
          <div style={{ fontSize: 10, color: demo.farbe, marginBottom: 20, letterSpacing: 2 }}>LEISTUNGSPROFIL // KERNGESCHAEFTE</div>
          <div style={{
            border: `2px dashed ${demo.farbe}`,
            padding: 30
          }}>
            <div style={{ fontSize: 12, color: '#00d4ff', marginBottom: 20 }}>SYSTEM_MAPPING: SERVICES[]</div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 15
            }}>
              {demo.usps.map((usp, i) => (
                <div key={i} style={{
                  border: `1px solid rgba(0,212,255,0.3)`,
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 15,
                  background: 'rgba(0,212,255,0.02)'
                }}>
                  <div style={{
                    width: 8, height: 8,
                    border: `2px solid ${demo.farbe}`,
                    transform: 'rotate(45deg)',
                    flexShrink: 0
                  }} />
                  <span style={{ fontSize: 14 }}>{usp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          position: 'relative', zIndex: 1,
          padding: '60px 40px',
          borderTop: `2px dashed ${demo.farbe}`,
          margin: '0 40px'
        }}>
          <div style={{ fontSize: 10, color: demo.farbe, marginBottom: 20, letterSpacing: 2 }}>ANFRAGE // KONTAKT</div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            alignItems: 'center'
          }}>
            <a href="https://vexaro.design" style={{
              display: 'inline-block',
              background: demo.farbe,
              color: '#0a1628',
              padding: '16px 40px',
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
              fontFamily: '"Space Mono", monospace'
            }}>
              ANGEBOT ANFORDERN →
            </a>
            <div style={{ fontSize: 12, color: '#607080' }}>
              Vexaro Studio — Webentwicklung fuer Handwerk & Mittelstand
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          position: 'relative', zIndex: 1,
          padding: '30px 40px',
          marginTop: 40,
          borderTop: `1px solid rgba(0,212,255,0.2)`,
          fontSize: 11,
          color: '#405060'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>DEMO_BUILD: vexaro-demo // ROUTE: /{slug}</span>
            <a href="https://vexaro.design" style={{ color: demo.farbe }}>Vexaro Studio</a>
          </div>
        </footer>
      </div>
    );
  }

  // Default style for other demos
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif'
    }}>
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
              border: '1px solid rgba(255,255,255,0.1)',
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
                &#10003;
              </div>
              <span style={{ fontSize: 16, fontWeight: 500 }}>{usp}</span>
            </div>
          ))}
        </div>
      </section>

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
