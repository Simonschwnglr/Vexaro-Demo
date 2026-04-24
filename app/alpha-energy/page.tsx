'use client'

import { useState } from 'react'

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navInner">
        <a href="#" className="navLogo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="#D97706" fillOpacity="0.15" />
            <path d="M14 5L6 16h8l-2 7 10-11h-8l2-7z" fill="#D97706" />
          </svg>
          Alpha <span>Energy</span>
        </a>

        <ul className="navLinks" style={open ? { display: 'flex' } : {}}>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#ueber-uns">Über uns</a></li>
          <li><a href="#kundenstimmen">Referenzen</a></li>
          <li><a href="#kontakt" className="navCta">Angebot anfragen</a></li>
        </ul>

        <button
          className="navToggle"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="heroGlow" />
      <div className="heroInner">
        <div>
          <div className="heroBadge">
            <span className="heroBadgeDot" />
            Zertifizierter Solarteur & Elektrofachbetrieb
          </div>
          <h1 className="heroTitle">
            Energie der Zukunft.<br />
            Heute bei <em>Ihnen</em><br />
            zuhause.
          </h1>
          <p className="heroSubtitle">
            Alpha Energy GmbH plant und installiert Photovoltaikanlagen,
            Wallboxen und Smart-Home-Systeme — für eine nachhaltige, unabhängige
            Energieversorgung in Privat- und Gewerbeimmobilien.
          </p>
          <div className="heroCtas">
            <a href="#kontakt" className="btnPrimary">
              Kostenloses Angebot →
            </a>
            <a href="#leistungen" className="btnSecondary">
              Unsere Leistungen
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroCard">
            <div className="heroCardGlow" />
            <div className="heroCardIcon">☀️</div>
            <div className="heroCardTitle">Ihr Energiepartner</div>
            <div className="heroCardSubtitle">
              Zertifiziert, förderfähig und mit über 10 Jahren Erfahrung
              in der Energietechnik.
            </div>
            <div className="heroStats">
              <div className="heroStat">
                <span className="heroStatNum">10+</span>
                <span className="heroStatLabel">Jahre Erfahrung</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">300+</span>
                <span className="heroStatLabel">PV-Anlagen</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">100%</span>
                <span className="heroStatLabel">Ökostrom</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">5 ★</span>
                <span className="heroStatLabel">Kundenbewertung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Services ─────────────────────────────────────────────────────────────────
const services = [
  {
    icon: '🌞',
    title: 'Photovoltaik',
    desc: 'Wir planen, dimensionieren und installieren Ihre Solaranlage maßgeschneidert — vom Einfamilienhaus bis zur Gewerbehalle. Inklusive Batteriespeicher, Monitoring und vollständiger Förderberatung nach EEG.',
    features: [
      'Dach- und Fassadenanlagen (bis 1 MWp)',
      'Batteriespeicher & Energiemanagement',
      'Netzeinspeisung & Eigenverbrauchsoptimierung',
      'Förderberatung (KfW, BAFA, Länderförderungen)',
    ],
  },
  {
    icon: '⚡',
    title: 'Wallbox & E-Mobilität',
    desc: 'Laden Sie Ihr Elektrofahrzeug intelligent und sicher zuhause. Wir installieren eichrechtskonforme Wallboxen und vernetzen diese mit Ihrer Solaranlage für maximalen Eigenverbrauch.',
    features: [
      'Wallbox-Installation (11 kW – 22 kW)',
      'Solar-Überschussladen & Lastmanagement',
      'OCPP-fähige Systeme für Flottenmanagement',
      'Förderung über Arbeitgeber und KfW möglich',
    ],
  },
  {
    icon: '🏠',
    title: 'Smart Home & Energie',
    desc: 'Vernetzen Sie Ihre Energiequellen, Haushaltsgeräte und Heizsysteme zu einem intelligenten Ökosystem. Reduzieren Sie Ihren Verbrauch durch smarte Automatisierung und Echtzeit-Monitoring.',
    features: [
      'Energiemanagementsysteme (HEMS)',
      'Smart Meter & Verbrauchscontrolling',
      'Wärmepumpen- und Heizungsintegration',
      'App-Steuerung & Sprachassistenten (Alexa, Google)',
    ],
  },
  {
    icon: '🔌',
    title: 'Elektroinstallation',
    desc: 'Von der Unterverteilung bis zur kompletten Neuverkabelung — unsere Elektrofachkräfte installieren nach aktuellen VDE-Normen, sauber, termingerecht und mit lückenloser Dokumentation.',
    features: [
      'Neu- und Erweiterungsinstallationen',
      'Zählerschränke & Unterverteilungen',
      'Prüfung nach DGUV V3 / VDE 0100',
      'Leerrohrsysteme für spätere PV-Nachrüstung',
    ],
  },
]

function Services() {
  return (
    <section className="section servicesSection" id="leistungen">
      <div className="container">
        <div className="servicesHeader">
          <div className="sectionTag">Leistungen</div>
          <h2 className="sectionTitle">Nachhaltige Energie aus einer Hand</h2>
          <p className="sectionSubtitle">
            Von der ersten Beratung bis zur Inbetriebnahme — Alpha Energy
            begleitet Sie durch den gesamten Prozess Ihrer Energiewende.
          </p>
        </div>
        <div className="servicesGrid">
          {services.map((s) => (
            <div key={s.title} className="serviceCard">
              <div className="serviceIcon">{s.icon}</div>
              <h3 className="serviceTitle">{s.title}</h3>
              <p className="serviceDesc">{s.desc}</p>
              <ul className="serviceFeatures">
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────────────────────────
const stats = [
  { num: '10+', label: 'Jahre Branchenerfahrung' },
  { num: '300+', label: 'installierte PV-Anlagen' },
  { num: '1,2 MWh', label: 'installierte Speicherkapazität' },
  { num: '100%', label: 'zertifizierte Fachkräfte' },
]

function About() {
  return (
    <section className="section" id="ueber-uns">
      <div className="container">
        <div className="aboutInner">
          <div className="statsGrid">
            {stats.map((s) => (
              <div key={s.label} className="statCard">
                <span className="statNum">{s.num}</span>
                <span className="statLabel">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="aboutText">
            <div className="sectionTag">Über uns</div>
            <h2 className="sectionTitle">
              Die Energie<br />von morgen —<br />schon heute.
            </h2>
            <p>
              Alpha Energy GmbH ist ein inhabergeführtes Unternehmen für
              Energietechnik mit Schwerpunkt auf Photovoltaik, E-Mobilität
              und nachhaltiger Gebäudetechnik. Seit über zehn Jahren helfen
              wir Privathaushalten und Gewerbebetrieben, sich unabhängiger
              von steigenden Energiepreisen zu machen.
            </p>
            <p>
              Unser interdisziplinäres Team vereint Elektrofachkräfte,
              zertifizierte Solareure und Energieberater unter einem Dach.
              Wir arbeiten herstellerneutral und empfehlen nur Lösungen,
              die wirklich zu Ihren Bedürfnissen passen.
            </p>
            <div className="aboutHighlights">
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Zertifizierter Elektrofachbetrieb nach VDE und DIN</span>
              </div>
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Zugelassener Solarteur & Energieberater (BAFA)</span>
              </div>
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Herstellerunabhängige Beratung und Planung</span>
              </div>
              <div className="aboutHighlight">
                <span>✓</span>
                <span>10 Jahre Garantie auf Montage und Systemkomponenten</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    initials: 'MH',
    name: 'Michael Hartmann',
    role: 'Privatkundin, Einfamilienhaus in Augsburg',
    quote:
      'Alpha Energy hat unsere 9,8 kWp Anlage inklusive 10 kWh Speicher in nur zwei Tagen installiert. Die Planung war transparent, die Förderanträge wurden komplett übernommen. Unser Strombezug aus dem Netz ist seitdem um über 70 % gesunken.',
  },
  {
    initials: 'KS',
    name: 'Katharina Schmid',
    role: 'Geschäftsführerin, Schmid Logistik GmbH',
    quote:
      'Wir haben unser Betriebsgelände mit einer 120 kWp Gewerbeanlage ausstatten lassen. Alpha Energy hat die gesamte Projektabwicklung — Genehmigung, Installation, Netzanmeldung — in unter sechs Wochen abgeschlossen. Vorbildlich professionell.',
  },
  {
    initials: 'TR',
    name: 'Thomas Reiter',
    role: 'Bauleiter, Reiter Wohnbau GmbH',
    quote:
      'Für unser Mehrfamilienprojekt mit 12 Einheiten hat Alpha Energy ein durchdachtes Mieterstrom-Konzept entwickelt. Die technische Umsetzung war einwandfrei, die Kommunikation jederzeit klar und verlässlich. Wir planen bereits das nächste Projekt zusammen.',
  },
]

function Testimonials() {
  return (
    <section className="section testimonialsSection" id="kundenstimmen">
      <div className="container">
        <div className="testimonialsHeader">
          <div className="sectionTag">Kundenstimmen</div>
          <h2 className="sectionTitle">Was unsere Kunden sagen</h2>
          <p className="sectionSubtitle">
            Über 300 erfolgreich installierte Anlagen sprechen für sich.
            Lesen Sie, was Privat- und Gewerbekunden über Alpha Energy berichten.
          </p>
        </div>
        <div className="testimonialsGrid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonialCard">
              <div className="testimonialStars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="testimonialStar">★</span>
                ))}
              </div>
              <p className="testimonialQuote">„{t.quote}"</p>
              <div className="testimonialAuthor">
                <div className="testimonialAvatar">{t.initials}</div>
                <div>
                  <div className="testimonialName">{t.name}</div>
                  <div className="testimonialRole">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section" id="kontakt">
      <div className="container">
        <div className="contactInner">
          <div>
            <div className="sectionTag">Kontakt</div>
            <h2 className="sectionTitle">
              Starten Sie Ihre<br />Energiewende.
            </h2>
            <p className="sectionSubtitle" style={{ marginBottom: '48px' }}>
              Fordern Sie jetzt Ihr kostenloses und unverbindliches
              Angebot an. Wir melden uns innerhalb eines Werktages bei Ihnen.
            </p>
            <div className="contactInfo">
              <div className="contactInfoItem">
                <div className="contactInfoIcon">📧</div>
                <div>
                  <div className="contactInfoLabel">E-Mail</div>
                  <div className="contactInfoValue">info@alpha-gmbh.com</div>
                </div>
              </div>
              <div className="contactInfoItem">
                <div className="contactInfoIcon">🌍</div>
                <div>
                  <div className="contactInfoLabel">Einsatzgebiet</div>
                  <div className="contactInfoValue">Bayern & ganz Deutschland</div>
                </div>
              </div>
              <div className="contactInfoItem">
                <div className="contactInfoIcon">🕐</div>
                <div>
                  <div className="contactInfoLabel">Bürozeiten</div>
                  <div className="contactInfoValue">Mo–Fr 08:00–17:00 Uhr</div>
                </div>
              </div>
              <div className="contactInfoItem">
                <div className="contactInfoIcon">💶</div>
                <div>
                  <div className="contactInfoLabel">Beratung</div>
                  <div className="contactInfoValue">Kostenlos & unverbindlich</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contactForm">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 className="formTitle">Anfrage erhalten!</h3>
                <p className="formSubtitle">
                  Vielen Dank für Ihr Interesse. Wir melden uns innerhalb
                  eines Werktages mit einem individuellen Angebot bei Ihnen.
                </p>
              </div>
            ) : (
              <>
                <h3 className="formTitle">Angebot anfragen</h3>
                <p className="formSubtitle">
                  Kostenlose Beratung in wenigen Minuten
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="formRow">
                    <div className="formGroup">
                      <label className="formLabel">Vorname</label>
                      <input className="formInput" type="text" placeholder="Max" required />
                    </div>
                    <div className="formGroup">
                      <label className="formLabel">Nachname</label>
                      <input className="formInput" type="text" placeholder="Mustermann" required />
                    </div>
                  </div>
                  <div className="formGroup">
                    <label className="formLabel">E-Mail</label>
                    <input className="formInput" type="email" placeholder="max@beispiel.de" required />
                  </div>
                  <div className="formGroup">
                    <label className="formLabel">Leistung</label>
                    <select className="formSelect">
                      <option value="">Bitte wählen...</option>
                      <option>Photovoltaikanlage</option>
                      <option>Batteriespeicher</option>
                      <option>Wallbox & E-Mobilität</option>
                      <option>Smart Home & Energiemanagement</option>
                      <option>Elektroinstallation</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div className="formGroup">
                    <label className="formLabel">Nachricht</label>
                    <textarea
                      className="formTextarea"
                      placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Frage..."
                      required
                    />
                  </div>
                  <button type="submit" className="formSubmit">
                    Jetzt anfragen →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerTop">
          <div>
            <div className="footerBrand">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="7" fill="#D97706" fillOpacity="0.15" />
                <path d="M14 5L6 16h8l-2 7 10-11h-8l2-7z" fill="#D97706" />
              </svg>
              Alpha <span>Energy</span>
            </div>
            <p className="footerBrandDesc">
              Ihr zertifizierter Partner für Photovoltaik, E-Mobilität,
              Smart Home und Elektroinstallation — nachhaltig und zukunftssicher.
            </p>
          </div>

          <div>
            <div className="footerColTitle">Leistungen</div>
            <ul className="footerLinks">
              <li><a href="#leistungen">Photovoltaik</a></li>
              <li><a href="#leistungen">Wallbox & E-Mobilität</a></li>
              <li><a href="#leistungen">Smart Home</a></li>
              <li><a href="#leistungen">Elektroinstallation</a></li>
            </ul>
          </div>

          <div>
            <div className="footerColTitle">Unternehmen</div>
            <ul className="footerLinks">
              <li><a href="#ueber-uns">Über uns</a></li>
              <li><a href="#kundenstimmen">Referenzen</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="footerColTitle">Kontakt</div>
            <ul className="footerLinks">
              <li><a href="mailto:info@alpha-gmbh.com">info@alpha-gmbh.com</a></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Mo–Fr 08:00–17:00</span></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Bayern & bundesweit</span></li>
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <p className="footerCopy">
            © {new Date().getFullYear()} Alpha Energy GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="footerLegal">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
