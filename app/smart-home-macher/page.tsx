const DEMOS: Record<string, {
  name: string; contact: string; branche: string; anschrift: string; telefon: string; email: string;
  beschreibung: string; usps: string[]; farbe: string;
}> = {
  'smart-home-macher': {
    name: 'SmartHome-Macher', contact: 'Simon Himmler', branche: 'Smart Home & Elektroinstallation',
    anschrift: 'Meisterstraße 12, 70173 Stuttgart-Mitte', telefon: '+49 711 123 45 67', email: 'info@smart-home-macher.de',
    beschreibung: 'Intelligente Elektroinstallation für das moderne Zuhause. Wir planen, installieren und vernetzen — von KNX-Systemen über PV-Anlagen bis zur E-Mobilität.',
    usps: ['KNX-Bussysteme', 'Smart Home Integration', 'PV-Anlagen & Speicher', 'E-Mobilität & Wallboxen', 'Energieberatung', 'Wartung & Service'],
    farbe: '#3b82f6'
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SmartHomeMacherPage({ params }: PageProps) {
  const { slug } = await params;
  const demo = DEMOS[slug];

  if (!demo) {
    return <div style={{ padding: 40, color: '#fff' }}>Demo nicht gefunden.</div>;
  }

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
          linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px),
          linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Blueprint Corner Marks */}
      <div style={{ position: 'fixed', top: 20, left: 20, color: demo.farbe, fontSize: 10, opacity: 0.4, fontFamily: '"Space Mono", monospace' }}>A1</div>
      <div style={{ position: 'fixed', top: 20, right: 20, color: demo.farbe, fontSize: 10, opacity: 0.4, fontFamily: '"Space Mono", monospace' }}>B1</div>
      <div style={{ position: 'fixed', bottom: 20, left: 20, color: demo.farbe, fontSize: 10, opacity: 0.4, fontFamily: '"Space Mono", monospace' }}>A2</div>
      <div style={{ position: 'fixed', bottom: 20, right: 20, color: demo.farbe, fontSize: 10, opacity: 0.4, fontFamily: '"Space Mono", monospace' }}>B2</div>

      {/* Header */}
      <header style={{
        position: 'relative', zIndex: 1,
        padding: '60px 40px 40px',
        borderBottom: `2px dashed ${demo.farbe}`,
        margin: '40px 40px 0'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40 }}>
          {/* Logo */}
          <div style={{
            width: 100, height: 100,
            border: `2px dashed ${demo.farbe}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, fontWeight: 'bold', color: demo.farbe,
            flexShrink: 0, background: 'rgba(59,130,246,0.05)'
          }}>
            SHM
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: demo.farbe, marginBottom: 8, letterSpacing: 2 }}>TECHNISCHE SPEZIFIKATION // UNTERNEHMENSPROFIL</div>
            <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8, color: '#fff' }}>{demo.name}</h1>
            <p style={{ color: demo.farbe, fontSize: 14 }}>{demo.beschreibung}</p>
          </div>
        </div>

        {/* Technical Specs Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          marginTop: 40,
          paddingTop: 30,
          borderTop: '1px solid rgba(59,130,246,0.2)'
        }}>
          <div>
            <div style={{ fontSize: 9, color: demo.farbe, marginBottom: 4, letterSpacing: 1 }}>STANDORT</div>
            <div style={{ fontSize: 13 }}>{demo.anschrift}</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: demo.farbe, marginBottom: 4, letterSpacing: 1 }}>ANSPRECHPARTNER</div>
            <div style={{ fontSize: 13 }}>{demo.contact}</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: demo.farbe, marginBottom: 4, letterSpacing: 1 }}>TELEFON</div>
            <div style={{ fontSize: 13 }}>{demo.telefon}</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: demo.farbe, marginBottom: 4, letterSpacing: 1 }}>E-MAIL</div>
            <div style={{ fontSize: 13 }}>{demo.email}</div>
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
          <div style={{ fontSize: 12, color: '#3b82f6', marginBottom: 20 }}>SYSTEM_MAPPING: SERVICES[]</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 15
          }}>
            {demo.usps.map((usp, i) => (
              <div key={i} style={{
                border: `1px solid rgba(59,130,246,0.3)`,
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                background: 'rgba(59,130,246,0.02)'
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

      {/* Why Section */}
      <section style={{
        position: 'relative', zIndex: 1,
        padding: '60px 40px',
        borderTop: `2px dashed ${demo.farbe}`,
        margin: '0 40px'
      }}>
        <div style={{ fontSize: 10, color: demo.farbe, marginBottom: 20, letterSpacing: 2 }}>TECHNISCHE VORTEILE // DIFFERENZIERUNG</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20
        }}>
          {[
            { title: 'KNX-PROTOKOLL', desc: 'Offener internationaler Standard für Gebäudeautomation. Wir sind zertifizierte KNX-Partner.' },
            { title: 'E-MOBILITAET', desc: 'Komplettlösungen für E-Mobilität: Wallbox-Installation, Lastmanagement und PV-Integration.' },
            { title: 'ENERGIEFFIZIENZ', desc: 'Photovoltaik-Anlagen mit Speicher, smartes Lastmanagement und Verbrauchsoptimierung.' }
          ].map((item, i) => (
            <div key={i} style={{
              border: `1px solid rgba(59,130,246,0.2)`,
              padding: '24px',
              background: 'rgba(59,130,246,0.02)'
            }}>
              <div style={{ fontSize: 10, color: demo.farbe, marginBottom: 10, letterSpacing: 2 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: '#a0b8d0', lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        position: 'relative', zIndex: 1,
        padding: '60px 40px',
        borderTop: `2px dashed ${demo.farbe}`,
        margin: '0 40px 40px'
      }}>
        <div style={{ fontSize: 10, color: demo.farbe, marginBottom: 20, letterSpacing: 2 }}>ANFRAGE // KONTAKT</div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20,
          alignItems: 'center'
        }}>
          <a href="mailto:info@smart-home-macher.de" style={{
            display: 'inline-block',
            background: demo.farbe,
            color: '#fff',
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
        borderTop: `1px solid rgba(59,130,246,0.2)`,
        fontSize: 11,
        color: '#405060'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>DEMO_BUILD: vexaro-demo // ROUTE: /smart-home-macher</span>
          <a href="https://vexaro.design" style={{ color: demo.farbe }}>Vexaro Studio</a>
        </div>
      </footer>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: 'smart-home-macher' }];
}
