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
            <rect width="28" height="28" rx="7" fill="#3b82f6" fillOpacity="0.15" />
            <path d="M8 20L14 8L20 20" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 16h8" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          FIJA <span>Elektro</span>
        </a>

        <ul className="navLinks" style={open ? { display: 'flex' } : {}}>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#ueber-uns">Über uns</a></li>
          <li><a href="#referenzen">Referenzen</a></li>
          <li><a href="#kontakt" className="navCta">Angebot anfragen</a></li>
        </ul>

        <button className="navToggle" onClick={() => setOpen(!open)} aria-label="Menü">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
const ACCENT = '#3b82f6'

function Hero() {
  return (
    <section className="hero" style={{ '--page-accent': ACCENT } as React.CSSProperties}>
      <div className="heroBg" />
      <div className="heroInner">
        <div className="heroContent">
          <div className="heroBadge">24/7 Notdienst verfügbar</div>
          <h1 className="heroTitle">
            Elektrotechnik,<br />
            die Sie <em>vertrauen</em><br />
            können.
          </h1>
          <p className="heroSubtitle">
            Seit über 15 Jahren stehen wir für Handwerk, das hält — und für
            Beratung, die ehrlich ist. Von der Sicherung bis zum Smart Home.
          </p>
          <div className="heroCtas">
            <a href="#kontakt" className="btnPrimary">Kostenloses Angebot →</a>
            <a href="#leistungen" className="btnSecondary">Mehr erfahren</a>
          </div>
        </div>
        <div className="heroVisual">
          <div className="heroStats">
            <div className="heroStat">
              <span className="heroStatNum">15+</span>
              <span className="heroStatLabel">Jahre Erfahrung</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">500+</span>
              <span className="heroStatLabel">Projekte abgeschlossen</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">24/7</span>
              <span className="heroStatLabel">Notdienst-Bereitschaft</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">98%</span>
              <span className="heroStatLabel">Kundenzufriedenheit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────
const services = [
  {
    title: 'Elektroinstallation',
    desc: 'Komplette Elektroinstallationen für Wohn- und Gewerbegebäude. Von der Planung bis zur Abnahme — alles aus einer Hand.',
    features: ['Neubau & Sanierung', 'Zählerschränke', 'Verkabelung', 'Beleuchtungskonzepte']
  },
  {
    title: 'Sicherheitstechnik',
    desc: 'Einbruchschutz und Rauchmelder — für Ihre Sicherheit und die Ihrer Familie. Zertifizierte Fachkraft.',
    features: ['Rauchmelder nach Landesrecht', 'Alarmanlagen', 'Videoüberwachung', 'Zutrittskontrolle']
  },
  {
    title: 'Smart Home',
    desc: 'Intelligente Gebäudeautomation, die Ihr Leben leichter macht — ohne Science-Fiction, aber mit echtem Mehrwert.',
    features: ['KNX-Systeme', 'Beleuchtungssteuerung', 'Heizungsintegration', 'Sprachsteuerung']
  },
  {
    title: 'Elektro-Notdienst',
    desc: 'Wenn der Strom weg ist, sind wir schnell da. Rund um die Uhr, 365 Tage im Jahr — direkt vor Ort.',
    features: ['Stromausfall-Notdienst', 'Kurzschluss-Behebung', 'Sicherungstausch', 'Sofort-Volldiagnose']
  }
]

function Services() {
  return (
    <section className="section servicesSection" id="leistungen">
      <div className="container">
        <div className="servicesHeader">
          <div className="sectionLabel">Leistungen</div>
          <h2 className="sectionTitle">Was wir für Sie tun.</h2>
          <p className="sectionSubtitle">
            Vier Bereiche, in denen wir zu Hause sind. Keine Auftragsverwaltung —
            echte Beratung und saubere Ausführung.
          </p>
        </div>
        <div className="servicesGrid">
          {services.map((s, i) => (
            <div key={i} className="serviceCard">
              <div className="serviceIcon">⚡</div>
              <h3 className="serviceTitle">{s.title}</h3>
              <p className="serviceDesc">{s.desc}</p>
              <ul className="serviceFeatures">
                {s.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="section" id="ueber-uns">
      <div className="container">
        <div className="aboutInner">
          <div className="aboutImage">⚡</div>
          <div className="aboutText">
            <div className="sectionLabel">Über uns</div>
            <h2 className="sectionTitle">Handwerk mit Haltung.</h2>
            <p>
              FIJA Elektro wurde 2009 in Augsburg gegründet. Was als
              Ein-Mann-Betrieb begann, ist heute ein Team von sechs
              qualifizierten Elektrotechnikern — aber die Grundhaltung ist
              dieselbe geblieben: sauber arbeiten, ehrlich beraten, fair
              kalkulieren.
            </p>
            <p>
              Wir spezialisieren uns auf installationsnahe Arbeit für
              Privatgebäude und kleinere Gewerbeobjekte. Große Industrieprojekte
              machen wir bewusst nicht — dort geht die persönliche Note verloren.
            </p>
            <div className="statsGrid" style={{ marginTop: 40 }}>
              <div className="statCard">
                <span className="statNum">2009</span>
                <span className="statLabel">Gegründet in Augsburg</span>
              </div>
              <div className="statCard">
                <span className="statNum">6</span>
                <span className="statLabel">Fachkräfte im Team</span>
              </div>
              <div className="statCard">
                <span className="statNum">Meister</span>
                <span className="statLabel">Betrieb mit IHK-Abschluss</span>
              </div>
              <div className="statCard">
                <span className="statNum">100%</span>
                <span className="statLabel">Eigene Mitarbeiter</span>
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
    quote: 'FIJA hat bei unserem Altbau in der Innenstadt die komplette Elektrik erneuert — inklusive neuer Verteiler, Erdung und Rauchmelder. Saubere Arbeit, faire Kosten. Würde ich jederzeit wieder nehmen.',
    name: 'Thomas Berger',
    role: 'Eigentümer, Altbau Augsburg',
    initials: 'TB'
  },
  {
    quote: 'Wir haben FIJA für die Elektroinstallation in unserem Hotel mit 40 Zimmern beauftragt. Pünktlich, zuverlässig, und die Kommunikation war ausgezeichnet. Das Team war jederzeit erreichbar.',
    name: 'Marion Schneider',
    role: 'Hotel Schwarzwald Panorama, Freiburg',
    initials: 'MS'
  },
  {
    quote: 'Nach dem Blitzschaden war schnelle Hilfe gefragt. FIJA war innerhalb von 2 Stunden vor Ort und hatte die Anlage am nächsten Morgen wieder instand gesetzt. Top Reaktionszeit.',
    name: 'Frank Heilig',
    role: 'Heilig Gebäudemanagement, München',
    initials: 'FH'
  }
]

function Testimonials() {
  return (
    <section className="section testimonialsSection" id="referenzen">
      <div className="container">
        <div className="testimonialsHeader">
          <div className="sectionLabel">Referenzen</div>
          <h2 className="sectionTitle">Was Kunden sagen.</h2>
          <p className="sectionSubtitle">
            Demo-Webseite — Kundenstimmen sind illustrativ / beispielhaft.
          </p>
        </div>
        <div className="testimonialsGrid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonialCard">
              <p className="testimonialQuote">"{t.quote}"</p>
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

// ── Contact ────────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section className="section" id="kontakt">
      <div className="container">
        <div className="contactInner">
          <div className="contactInfo">
            <div className="sectionLabel">Kontakt</div>
            <h2 className="sectionTitle">Sprechen Sie mit uns.</h2>
            <p className="sectionSubtitle">
              Anfragen beantworten wir innerhalb von 24 Stunden. Für dringende
              Fälle sind wir auch telefonisch erreichbar.
            </p>

            <div className="contactInfoItem">
              <div className="contactInfoIcon">📍</div>
              <div>
                <div className="contactInfoLabel">Adresse</div>
                <div className="contactInfoValue">Augsburg, Bayern (Deutschland)</div>
              </div>
            </div>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">📞</div>
              <div>
                <div className="contactInfoLabel">Telefon</div>
                <div className="contactInfoValue">+49 821 123 4567</div>
              </div>
            </div>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">✉️</div>
              <div>
                <div className="contactInfoLabel">E-Mail</div>
                <div className="contactInfoValue">info@fija-elektro.de</div>
              </div>
            </div>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">🕐</div>
              <div>
                <div className="contactInfoLabel">Öffnungszeiten</div>
                <div className="contactInfoValue">Mo–Fr 07:00–18:00 | Notdienst: 24/7</div>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <div className="formTitle">Anfrage senden</div>
            <div className="formSubtitle">Wir melden uns innerhalb von 24 Stunden.</div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">Name</label>
                  <input className="formInput" type="text" placeholder="Ihr Name" />
                </div>
                <div className="formGroup">
                  <label className="formLabel">E-Mail</label>
                  <input className="formInput" type="email" placeholder="ihre@email.de" />
                </div>
              </div>
              <div className="formGroup">
                <label className="formLabel">Betreff</label>
                <select className="formSelect">
                  <option>Elektroinstallation</option>
                  <option>Sicherheitstechnik</option>
                  <option>Smart Home</option>
                  <option>Elektro-Notdienst</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="formGroup">
                <label className="formLabel">Nachricht</label>
                <textarea className="formTextarea" placeholder="Beschreiben Sie kurz Ihr Anliegen..." />
              </div>
              <button type="submit" className="formSubmit">Absenden →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerTop">
          <div>
            <div className="footerBrand">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="7" fill="#3b82f6" fillOpacity="0.15" />
                <path d="M8 20L14 8L20 20" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 16h8" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              FIJA <span>Elektro</span>
            </div>
            <p className="footerBrandDesc">
              Elektrotechnik mit Vertrauen. Seit 2009 in Augsburg.
            </p>
          </div>
          <div>
            <div className="footerColTitle">Leistungen</div>
            <ul className="footerLinks">
              <li><a href="#leistungen">Elektroinstallation</a></li>
              <li><a href="#leistungen">Sicherheitstechnik</a></li>
              <li><a href="#leistungen">Smart Home</a></li>
              <li><a href="#leistungen">Elektro-Notdienst</a></li>
            </ul>
          </div>
          <div>
            <div className="footerColTitle">Unternehmen</div>
            <ul className="footerLinks">
              <li><a href="#ueber-uns">Über uns</a></li>
              <li><a href="#referenzen">Referenzen</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <div className="footerColTitle">Kontakt</div>
            <ul className="footerLinks">
              <li><a href="mailto:info@fija-elektro.de">info@fija-elektro.de</a></li>
              <li><a href="#">+49 821 123 4567</a></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: 14 }}>Mo–Fr 07:00–18:00</span></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p className="footerCopy">© {new Date().getFullYear()} FIJA Elektro. Alle Rechte vorbehalten.</p>
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