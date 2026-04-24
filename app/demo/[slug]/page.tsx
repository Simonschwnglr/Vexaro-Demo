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
    farbe: '#f97316'
  },
  'elektro-heinze': {
    name: 'Elektro & System-Technik Heinze', branche: 'Elektrotechnik / Systemtechnik',
    anschrift: 'Lindenring 87, 04824 Beucha', telefon: '034292 51 91 62', email: '',
    beschreibung: 'Ihr Fachbetrieb fuer Elektroinstallationen und Systemtechnik in Beucha bei Leipzig. Praezise. Zuverlaessig. Qualifiziert.',
    usps: ['Elektroinstallationen', 'Systemtechnik', 'Wartung & Pruefung', 'Sicherheitstechnik', 'Industrieelektrik', 'E-Check / Pruefberichte'],
    farbe: '#f97316'
  },
  'smart-home-macher': {
    name: 'SmartHome-Macher', branche: 'Smart Home & Elektroinstallation',
    anschrift: 'Meisterstra\u00dfe 12, 70173 Stuttgart-Mitte', telefon: '+49 711 123 45 67', email: 'info@smart-home-macher.de',
    beschreibung: 'Intelligente Elektroinstallation fuer das moderne Zuhause. Wir planen, installieren und vernetzen — von KNX-Systemen ueber PV-Anlagen bis zur E-Mobilitaet.',
    usps: ['KNX-Bussysteme', 'Smart Home Integration', 'PV-Anlagen & Speicher', 'E-Mobilitaet & Wallboxen', 'Energieberatung', 'Wartung & Service'],
    farbe: '#f97316'
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

  const isBlueprint = demo.farbe === '#f97316' || demo.farbe === '#22c55e';

  if (isBlueprint) {
    const accentColor = demo.farbe;
    return (
      <div style={{
        minHeight: '100vh',
        background: '#18181b',
        color: '#e4e4e7',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Grid */}
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Header */}
        <header style={{
          position: 'relative', zIndex: 1,
          padding: '80px 40px 60px',
          borderBottom: `1px solid rgba(255,255,255,0.08)`,
          margin: '40px 40px 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40 }}>
            {/* Logo */}
            <div style={{
              width: 90, height: 90,
              background: accentColor,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32, fontWeight: '800', color: '#fff',
              flexShrink: 0, borderRadius: 16
            }}>
              {demo.name.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: accentColor, marginBottom: 12, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600 }}>{demo.branche}</div>
              <h1 style={{ fontSize: 42, fontWeight: '800', marginBottom: 12, color: '#fff', letterSpacing: '-0.5px' }}>{demo.name}</h1>
              <p style={{ color: '#a1a1aa', fontSize: 16, lineHeight: 1.6 }}>{demo.beschreibung}</p>
            </div>
          </div>

          {/* Info Row */}
          <div style={{
            display: 'flex',
            gap: 40,
            marginTop: 40,
            paddingTop: 30,
            borderTop: '1px solid rgba(255,255,255,0.06)'
          }}>
            {demo.anschrift && (
              <div>
                <div style={{ fontSize: 10, color: '#71717a', marginBottom: 6, letterSpacing: 2, textTransform: 'uppercase' }}>Adresse</div>
                <div style={{ fontSize: 14, color: '#e4e4e7' }}>{demo.anschrift}</div>
              </div>
            )}
            {demo.telefon && (
              <div>
                <div style={{ fontSize: 10, color: '#71717a', marginBottom: 6, letterSpacing: 2, textTransform: 'uppercase' }}>Telefon</div>
                <div style={{ fontSize: 14, color: '#e4e4e7' }}>{demo.telefon}</div>
              </div>
            )}
            {demo.email && (
              <div>
                <div style={{ fontSize: 10, color: '#71717a', marginBottom: 6, letterSpacing: 2, textTransform: 'uppercase' }}>E-Mail</div>
                <div style={{ fontSize: 14, color: accentColor }}>{demo.email}</div>
              </div>
            )}
          </div>
        </header>

        {/* Services */}
        <section style={{ position: 'relative', zIndex: 1, padding: '60px 40px' }}>
          <div style={{ fontSize: 11, color: '#71717a', marginBottom: 24, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600 }}>Unsere Leistungen</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16
          }}>
            {demo.usps.map((usp, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: 16
              }}>
                <div style={{
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: accentColor,
                  flexShrink: 0
                }} />
                <span style={{ fontSize: 15, fontWeight: '500', color: '#e4e4e7' }}>{usp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          position: 'relative', zIndex: 1,
          padding: '60px 40px',
          margin: '0 40px 40px'
        }}>
          <div style={{
            background: `linear-gradient(135deg, ${accentColor}18 0%, ${accentColor}08 100%)`,
            border: `1px solid ${accentColor}30`,
            borderRadius: 20,
            padding: '48px'
          }}>
            <h2 style={{ fontSize: 28, fontWeight: '700', marginBottom: 12, color: '#fff' }}>Gefällt Ihnen, was Sie sehen?</h2>
            <p style={{ color: '#a1a1aa', marginBottom: 32, fontSize: 16 }}>Wir bauen fuer Sie eine professionelle Website – modern, mobil-optimiert und genau auf Ihr Unternehmen zugeschnitten.</p>
            <a href="https://vexaro.design" style={{
              display: 'inline-block',
              background: accentColor,
              color: '#fff',
              padding: '16px 36px',
              fontSize: 15,
              fontWeight: '700',
              textDecoration: 'none',
              borderRadius: 10
            }}>
              Kostenlose Beratung anfragen
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          position: 'relative', zIndex: 1,
          padding: '30px 40px',
          marginTop: 20,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          fontSize: 12,
          color: '#52525b'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Website demo erstellt von Vexaro Studio</span>
            <a href="https://vexaro.design" style={{ color: accentColor }}>vexaro.design</a>
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
