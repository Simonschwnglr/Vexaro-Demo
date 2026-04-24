export default function Neuverkabelt() {
  return (
    <>
      <style>{`
        :root {
          --amber: #f59e0b;
          --amber-dim: rgba(245, 158, 11, 0.15);
          --amber-glow: rgba(245, 158, 11, 0.07);
          --border-amber: rgba(245, 158, 11, 0.35);
        }
        /* Override blueprint grid from globals to amber */
        body::before {
          background-image:
            linear-gradient(rgba(245, 158, 11, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.04) 1px, transparent 1px) !important;
        }
        .sectionLabel { color: #f59e0b !important; }
        .heroBadge { color: #f59e0b !important; }
        .btnPrimary { background: #f59e0b !important; }
        .heroStat::before { background: #f59e0b !important; }
        .serviceCard::after { border-color: #f59e0b !important; }
        .formSubmit { background: #f59e0b !important; }
        .contactInfoIcon { background: rgba(245,158,11,0.1) !important; border-color: rgba(245,158,11,0.35) !important; }
        .footerBrand span { color: #f59e0b !important; }
        a:hover { color: #f59e0b !important; }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navInner">
          <div className="navLogo">
            <span style={{ color: '#f59e0b' }}>◈</span> NEUVERKABELT
          </div>
          <ul className="navLinks">
            <li><a href="#leistungen">Leistungen</a></li>
            <li><a href="#ueber">Über uns</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
          <a href="#kontakt" className="navCta">Anfrage starten</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="heroBg" style={{
          background: 'radial-gradient(ellipse 50% 60% at 85% 50%, rgba(245,158,11,0.08) 0%, transparent 65%), linear-gradient(180deg, #080c14 0%, #0d1520 100%)'
        }} />
        <div className="container heroInner">
          <div className="heroContent">
            <div className="heroBadge">Elektroinstallation &amp; Verkabelung</div>
            <h1 className="heroTitle" style={{ color: '#e8edf5' }}>
              Starke <em style={{ color: '#f59e0b' }}>Verkabelung.</em> Sichere Systeme.
            </h1>
            <p className="heroSubtitle">
              Professionelle Elektroinstallationen für Gewerbe und Privat. 
              Von der Planung bis zur fertigen Verkabelung — zuverlässig und normgerecht nach VDE.
            </p>
            <div className="heroCtas">
              <a href="#kontakt" className="btnPrimary" style={{ background: '#f59e0b' }}>
                Kostenlose Beratung →
              </a>
              <a href="#leistungen" className="btnSecondary">
                Leistungen ansehen
              </a>
            </div>
          </div>
          <div className="heroVisual">
            <div className="heroStats" style={{ '--page-accent': '#f59e0b', '--accent': '#f59e0b' } as React.CSSProperties}>
              <div className="heroStat" style={{ borderColor: 'rgba(245,158,11,0.3)' }}>
                <span className="heroStatNum" style={{ color: '#f59e0b' }}>15+</span>
                <span className="heroStatLabel">Jahre Erfahrung</span>
              </div>
              <div className="heroStat" style={{ borderColor: 'rgba(245,158,11,0.3)' }}>
                <span className="heroStatNum" style={{ color: '#f59e0b' }}>200+</span>
                <span className="heroStatLabel">Projekte abgeschlossen</span>
              </div>
              <div className="heroStat" style={{ borderColor: 'rgba(245,158,11,0.3)' }}>
                <span className="heroStatNum" style={{ color: '#f59e0b' }}>24h</span>
                <span className="heroStatLabel">Notdienst verfügbar</span>
              </div>
              <div className="heroStat" style={{ borderColor: 'rgba(245,158,11,0.3)' }}>
                <span className="heroStatNum" style={{ color: '#f59e0b' }}>100%</span>
                <span className="heroStatLabel">Normenkonform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="section servicesSection">
        <div className="container">
          <div className="servicesHeader">
            <p className="sectionLabel" style={{ color: '#f59e0b' }}>Leistungen</p>
            <h2 className="sectionTitle">Was wir für Sie tun</h2>
            <p className="sectionSubtitle">
              Alles aus einer Hand — von der Beratung über die Planung bis zur fertigen Ausführung.
            </p>
          </div>
          <div className="servicesGrid">
            {[
              {
                tag: '01 // INSTALLATION',
                title: 'Elektroinstallation',
                desc: 'Komplette Elektroinstallationen für Neu- und Altbauten nach aktuellen VDE-Normen. Von der Zählerschrankverkabelung bis zur Endmontage.',
                features: ['Hausinstallation & Wohnungsbau', 'Gewerbe- und Industrieinstallationen', 'Smart-Home-Verkabelung', 'Prüfprotokoll & Abnahme']
              },
              {
                tag: '02 // DATENNETZ',
                title: 'Netzwerkverkabelung',
                desc: 'Strukturierte Verkabelung für hohe Datenraten in Büros, Rechenzentren und Gewerbeflächen. Cat.7 / Cat.8 zertifiziert.',
                features: ['Cat.7 / Cat.8 Verkabelung', 'LWL-Verkabelung', 'Patchfelder & Schaltschränke', 'TDR-Messung & Zertifizierung']
              },
              {
                tag: '03 // SICHERHEIT',
                title: 'Sicherheitstechnik',
                desc: 'Elektrische Sicherheitslösungen für Gebäude und Anlagen. Fachgerechte Installation und Wartung aus einer Hand.',
                features: ['Blitzschutzsysteme', 'Überspannungsschutz', 'Notbeleuchtung', 'Sicherheitsbeleuchtung']
              },
              {
                tag: '04 // SERVICE',
                title: 'Wartung & Notdienst',
                desc: 'Regelmäßige Wartung und 24/7 Notdienst für Gewerbe und Industrie. Schnelle Reaktionszeiten bei Ausfällen.',
                features: ['Wartungsverträge', '24/7 Notfall-Service', 'Störungsbehebung', 'Jährliche Prüfungen']
              }
            ].map((s, i) => (
              <div key={i} className="serviceCard" style={{ borderColor: 'rgba(245,158,11,0.25)' }}>
                <div className="serviceTag" style={{ color: '#f59e0b' }}>{s.tag}</div>
                <div className="serviceTitle">{s.title}</div>
                <div className="serviceDesc">{s.desc}</div>
                <ul className="serviceFeatures">
                  {s.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="ueber" className="section">
        <div className="container">
          <div className="aboutInner">
            <div className="aboutImage" style={{ fontSize: 40 }}>
              ⚡
            </div>
            <div className="aboutText">
              <p className="sectionLabel" style={{ color: '#f59e0b' }}>Über uns</p>
              <h2 className="sectionTitle">Qualität seit über 15 Jahren</h2>
              <p>
                Neuverkabelt ist Ihr zuverlässiger Partner für Elektroinstallationen in Deutschland. 
                Unser Team aus qualifizierten Meistern und Gesellen steht für präzises Arbeiten, 
                transparente Kommunikation und termingerechte Umsetzung.
              </p>
              <p>
                Ob Neubau, Sanierung oder Notdienst — wir liefern normenkonforme Lösungen, 
                die halten, was sie versprechen. Faire Preise, keine versteckten Kosten.
              </p>
              <div className="statsGrid" style={{ marginTop: 32 }}>
                <div className="statCard" style={{ borderColor: 'rgba(245,158,11,0.25)' }}>
                  <span className="statNum" style={{ color: '#f59e0b' }}>200+</span>
                  <span className="statLabel">Projekte</span>
                </div>
                <div className="statCard" style={{ borderColor: 'rgba(245,158,11,0.25)' }}>
                  <span className="statNum" style={{ color: '#f59e0b' }}>15+</span>
                  <span className="statLabel">Jahre Erfahrung</span>
                </div>
                <div className="statCard" style={{ borderColor: 'rgba(245,158,11,0.25)' }}>
                  <span className="statNum" style={{ color: '#f59e0b' }}>98%</span>
                  <span className="statLabel">Kundenzufriedenheit</span>
                </div>
                <div className="statCard" style={{ borderColor: 'rgba(245,158,11,0.25)' }}>
                  <span className="statNum" style={{ color: '#f59e0b' }}>24h</span>
                  <span className="statLabel">Notdienst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="section servicesSection">
        <div className="container">
          <div className="contactInner">
            <div>
              <p className="sectionLabel" style={{ color: '#f59e0b' }}>Kontakt</p>
              <h2 className="sectionTitle">Sprechen Sie mit uns</h2>
              <p className="sectionSubtitle">
                Haben Sie ein Projekt? Wir beraten Sie kostenlos und unverbindlich.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
                {[
                  { label: 'Adresse', value: 'Industriestraße 12, 80331 München' },
                  { label: 'Telefon', value: '+49 89 123 456 78' },
                  { label: 'E-Mail', value: 'info@neuverkabelt.de' },
                  { label: 'Öffnungszeiten', value: 'Mo–Fr: 07:00–18:00 Uhr' }
                ].map((item, i) => (
                  <div key={i} className="contactInfoItem">
                    <div className="contactInfoIcon" style={{ borderColor: 'rgba(245,158,11,0.35)', background: 'rgba(245,158,11,0.1)' }}>
                      {i === 0 ? '📍' : i === 1 ? '📞' : i === 2 ? '✉' : '🕐'}
                    </div>
                    <div>
                      <div className="contactInfoLabel">{item.label}</div>
                      <div className="contactInfoValue">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="contactForm" style={{ borderColor: 'rgba(245,158,11,0.25)' }}>
              <div className="formTitle">Anfrage senden</div>
              <div className="formSubtitle">Wir melden uns innerhalb von 24 Stunden.</div>
              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">Name</label>
                  <input type="text" className="formInput" placeholder="Max Mustermann" />
                </div>
                <div className="formGroup">
                  <label className="formLabel">Telefon</label>
                  <input type="tel" className="formInput" placeholder="+49..." />
                </div>
              </div>
              <div className="formGroup">
                <label className="formLabel">E-Mail</label>
                <input type="email" className="formInput" placeholder="beispiel@firma.de" />
              </div>
              <div className="formGroup">
                <label className="formLabel">Leistung</label>
                <select className="formSelect" style={{ color: '#6b7a94' }}>
                  <option value="">— Bitte wählen —</option>
                  <option>Elektroinstallation</option>
                  <option>Netzwerkverkabelung</option>
                  <option>Sicherheitstechnik</option>
                  <option>Wartung & Notdienst</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="formGroup">
                <label className="formLabel">Nachricht</label>
                <textarea className="formTextarea" placeholder="Beschreiben Sie Ihr Projekt..." />
              </div>
              <button className="formSubmit" style={{ background: '#f59e0b' }}>Anfrage senden →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerTop">
            <div>
              <div className="footerBrand"><span style={{ color: '#f59e0b' }}>◈</span> NEUVERKABELT</div>
              <p className="footerBrandDesc">
                Professionelle Elektroinstallationen für Gewerbe und Privat in Deutschland.
              </p>
            </div>
            <div>
              <div className="footerColTitle">Leistungen</div>
              <ul className="footerLinks">
                <li><a href="#leistungen">Elektroinstallation</a></li>
                <li><a href="#leistungen">Netzwerkverkabelung</a></li>
                <li><a href="#leistungen">Sicherheitstechnik</a></li>
              </ul>
            </div>
            <div>
              <div className="footerColTitle">Unternehmen</div>
              <ul className="footerLinks">
                <li><a href="#ueber">Über uns</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <div className="footerColTitle">Rechtliches</div>
              <ul className="footerLinks">
                <li><a href="#">Impressum</a></li>
                <li><a href="#">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div className="footerBottom">
            <span className="footerCopy">© 2024 Neuverkabelt. Alle Rechte vorbehalten.</span>
            <div className="footerLegal">
              <a href="#">Impressum</a>
              <a href="#">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}