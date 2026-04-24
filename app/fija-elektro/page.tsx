'use client'

import { useState } from 'react'

const ACCENT = '#00d4ff'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="navInner">
        <a href="#" className="navLogo">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect width="26" height="26" rx="5" fill="#00d4ff" fillOpacity="0.12" />
            <path d="M7 19L13 7L19 19" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 15h8" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          FIJA <span>ELEKTRO</span>
        </a>
        <ul className="navLinks" style={open ? { display: 'flex' } : {}}>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#ueber-uns">Über uns</a></li>
          <li><a href="#referenzen">Referenzen</a></li>
          <li><a href="#kontakt" className="navCta">Angebot</a></li>
        </ul>
        <button className="navToggle" onClick={() => setOpen(!open)} aria-label="Menü"><span /><span /><span /></button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" style={{ '--page-accent': ACCENT } as React.CSSProperties}>
      <div className="heroBg" />
      <div className="heroInner">
        <div className="heroContent">
          <div className="heroBadge">VOLT:// 24/7 NOTDIENST — 365 Tage</div>
          <h1 className="heroTitle">
            Elektro,<br />
            die <em>hält</em>.<br />
            Einfach.
          </h1>
          <p className="heroSubtitle">
            Seit 2009 verlässliche Elektroarbeit für Privatkunden und
            Mittelstand in Augsburg und Umgebung. Keine Ausreden, saubere
            Ausführung, faire Preise.
          </p>
          <div className="heroCtas">
            <a href="#kontakt" className="btnPrimary">Angebot anfordern →</a>
            <a href="#leistungen" className="btnSecondary">Leistungen</a>
          </div>
        </div>
        <div className="heroVisual">
          <div className="heroStats">
            <div className="heroStat">
              <span className="heroStatNum">15+</span>
              <span className="heroStatLabel">Jahre Betrieb</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">98%</span>
              <span className="heroStatLabel">Weiterempfehlung</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">24/7</span>
              <span className="heroStatLabel">Notdienst</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">500+</span>
              <span className="heroStatLabel">Projekte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    tag: 'SYS:// INSTALL',
    title: 'Elektroinstallation',
    desc: 'Komplette Neuinstallationen und Sanierungen — für Wohngebäude, Büros und kleinere Gewerbeobjekte. Von der Kalkulation bis zur Abnahme.',
    features: ['Neubau & Altbau', 'Zählerschränke bis 250A', 'Schaltschrank-Verdrahtung', 'Beleuchtungskonzepte']
  },
  {
    tag: 'SYS:// SECURITY',
    title: 'Sicherheitstechnik',
    desc: 'Rauchmelder nach Bayerischer Landesbauordnung, Einbruchschutz und Zutrittskontrolle. Zertifiziert und dokumentiert.',
    features: ['Rauchmelder-Pflicht erfüllt', 'Alarmanlagen', 'Videoüberwachung', 'Elektrische SchlieSSysteme']
  },
  {
    tag: 'SYS:// SMART',
    title: 'Smart Home',
    desc: 'KNX-basierte Gebäudeautomation — nicht Spielerei, sondern sinnvolle Automation. Aufgeschaltet auf Ihre Bedürfnisse.',
    features: ['KNX-Systeme', 'Beleuchtungssteuerung', 'Heizungsintegration', 'Visualisierung']
  },
  {
    tag: 'SYS:// EMERGENCY',
    title: 'Elektro-Notdienst',
    desc: 'Wenn der Strom weg ist, sind wir innerhalb von 2 Stunden vor Ort. 24 Stunden, 7 Tage die Woche, 365 Tage im Jahr.',
    features: ['Stromausfall-Notdienst', 'Kurzschluss-Behebung', 'Sicherungsservice', 'Sofort-Diagnose']
  }
]

function Services() {
  return (
    <section className="section servicesSection" id="leistungen">
      <div className="container">
        <div className="servicesHeader">
          <div className="sectionLabel">Leistungen</div>
          <h2 className="sectionTitle">Was wir machen.</h2>
          <p className="sectionSubtitle">Vier Bereiche. Sauber dokumentiert, pünktlich fertig, fair kalkuliert.</p>
        </div>
        <div className="servicesGrid">
          {services.map((s, i) => (
            <div key={i} className="serviceCard">
              <div className="serviceTag">{s.tag}</div>
              <h3 className="serviceTitle">{s.title}</h3>
              <p className="serviceDesc">{s.desc}</p>
              <ul className="serviceFeatures">{s.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="ueber-uns">
      <div className="container">
        <div className="aboutInner">
          <div className="aboutImage">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="10" y="10" width="60" height="60" rx="8" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M25 55L40 25L55 55" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 45h20" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
              <circle cx="40" cy="20" r="4" fill="#00d4ff" opacity="0.6" />
            </svg>
          </div>
          <div className="aboutText">
            <div className="sectionLabel">Über uns</div>
            <h2 className="sectionTitle">Gegründet 2009.<br />Keine Subunternehmer.</h2>
            <p>
              FIJA Elektro wurde von Fatih Yilmaz in Augsburg gegründet — nach 10 Jahren Festanstellung bei einem größeren Elektrobetrieb. Der Ansatz war einfach: keine Verwaltung, keineOverhead-Kosten, einfach saubere Arbeit zu fairen Preisen.
            </p>
            <p>
              Heute sind wir sechs Elektrotechniker mit IHK-Meisterbrief und arbeiten ausschließlich mit eigenen Leuten. Für Aufträge, die wir nicht selbst abdecken, geben wir ehrlich Entwarnung — anstatt zu übernehmen und zu delegieren.
            </p>
            <div className="statsGrid" style={{ marginTop: 36 }}>
              <div className="statCard"><span className="statNum">2009</span><span className="statLabel">Gegründet / Augsburg</span></div>
              <div className="statCard"><span className="statNum">6</span><span className="statLabel">Fachkräfte / IHK-M.</span></div>
              <div className="statCard"><span className="statNum">100%</span><span className="statLabel">Eigenes Personal</span></div>
              <div className="statCard"><span className="statNum">0</span><span className="statLabel">Subunternehmer</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: 'FIJA hat die komplette Elektrik in unserem Altbau in der Augsburger Innenstadt erneuert — inklusive neuer Zähler, FI-Schalter und Rauchmelder nach Bayerischer Vorgabe. Saubere Arbeit, keine Nachträge. Top.',
    name: 'Thomas Berger',
    role: 'Eigentümer / Privathaus Augsburg',
    initials: 'TB'
  },
  {
    quote: 'Wir haben FIJA für die Elektroinstallation in unserem Hotel mit 38 Zimmern beauftragt. Pünktlich, zuverlässig, und die Kommunikation war erstklassig. Das Team war jederzeit erreichbar — auch für kurzfristige Änderungen.',
    name: 'Marion Schneider',
    role: 'Hotel Schwarzwald Panorama / Freiburg',
    initials: 'MS'
  },
  {
    quote: 'Nach dem Blitzschaden im August war schnelle Hilfe gefragt. FIJA war innerhalb von 90 Minuten vor Ort und hatte die Anlage am nächsten Morgen wieder instand gesetzt. Notstrom für die Server im Büro war ebenfalls schnell gelöst.',
    name: 'Frank Heilig',
    role: 'Heilig Gebäudemanagement / München',
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
          <p className="sectionSubtitle">Demo-Webseite — Kundenstimmen sind illustrativ / beispielhaft.</p>
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

function Contact() {
  return (
    <section className="section" id="kontakt">
      <div className="container">
        <div className="contactInner">
          <div className="contactInfo">
            <div className="sectionLabel">Kontakt</div>
            <h2 className="sectionTitle">Sprechen Sie mit uns.</h2>
            <p className="sectionSubtitle">Anfragen beantworten wir innerhalb von 24 Stunden. Für dringende Fälle: 24/7 Notdienst.</p>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">📍</div>
              <div>
                <div className="contactInfoLabel">Standort</div>
                <div className="contactInfoValue">Augsburg, Bayern</div>
              </div>
            </div>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">📞</div>
              <div>
                <div className="contactInfoLabel">Notdienst</div>
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
                <div className="contactInfoLabel">Bürozeiten</div>
                <div className="contactInfoValue">Mo–Fr 07:00–18:00</div>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <div className="formTitle">Anfrage einreichen</div>
            <div className="formSubtitle">SPEC:// Wir melden uns innerhalb von 24h.</div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">Name</label>
                  <input className="formInput" type="text" placeholder="Max Mustermann" />
                </div>
                <div className="formGroup">
                  <label className="formLabel">Telefon</label>
                  <input className="formInput" type="tel" placeholder="+49 821 000 0000" />
                </div>
              </div>
              <div className="formGroup">
                <label className="formLabel">Leistung</label>
                <select className="formSelect">
                  <option>Elektroinstallation</option>
                  <option>Sicherheitstechnik</option>
                  <option>Smart Home</option>
                  <option>Elektro-Notdienst</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="formGroup">
                <label className="formLabel">Beschreibung</label>
                <textarea className="formTextarea" placeholder="Kurze Beschreibung des Vorhabens..." />
              </div>
              <button type="submit" className="formSubmit">Absenden //</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerTop">
          <div>
            <div className="footerBrand">
              <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
                <rect width="26" height="26" rx="5" fill="#00d4ff" fillOpacity="0.12" />
                <path d="M7 19L13 7L19 19" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 15h8" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />
              </svg>
              FIJA <span>ELEKTRO</span>
            </div>
            <p className="footerBrandDesc">Elektrotechnik in Augsburg. Seit 2009. Keine Ausreden.</p>
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
              <li><span style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>Mo–Fr 07–18 Uhr</span></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p className="footerCopy">© {new Date().getFullYear()} FIJA Elektro — Augsburg. Alle Rechte vorbehalten.</p>
          <div className="footerLegal">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (<><Navbar /><main><Hero /><Services /><About /><Testimonials /><Contact /></main><Footer /></>)
}