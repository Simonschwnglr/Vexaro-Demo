'use client'

import { useState } from 'react'

const ACCENT = '#facc15'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="navInner">
        <a href="#" className="navLogo">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect width="26" height="26" rx="5" fill="#facc15" fillOpacity="0.12" />
            <path d="M7 19L13 7L19 19" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 15h8" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          </svg>
          ALPHA <span>ENERGY</span>
        </a>
        <ul className="navLinks" style={open ? { display: 'flex' } : {}}>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#ueber-uns">Über uns</a></li>
          <li><a href="#kundenstimmen">Referenzen</a></li>
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
          <div className="heroBadge">SUN:// SOLAR + ELEKTRO — SEIT 2012</div>
          <h1 className="heroTitle">
            Solar,<br />
            die sich <em>rechnet</em>.<br />
            Transparent.
          </h1>
          <p className="heroSubtitle">
            Wir planen und installieren Photovoltaikanlagen, die auf Ihre Immobilie
            zugeschnitten sind — nicht auf den Lieferanten. Faire Beratung,
            transparente Preise, fertige Anlagen.
          </p>
          <div className="heroCtas">
            <a href="#kontakt" className="btnPrimary">Kostenlose Beratung →</a>
            <a href="#leistungen" className="btnSecondary">Leistungen</a>
          </div>
        </div>
        <div className="heroVisual">
          <div className="heroStats">
            <div className="heroStat">
              <span className="heroStatNum">14+</span>
              <span className="heroStatLabel">Jahre Erfahrung</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">350+</span>
              <span className="heroStatLabel">Anlagen installiert</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">2.500</span>
              <span className="heroStatLabel">MWp Gesamtleistung</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">25J</span>
              <span className="heroStatLabel">Garantie Module</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    tag: 'PV:// PHOTOVOLTAIK',
    title: 'Photovoltaik',
    desc: 'Von der Standortanalyse bis zur Inbetriebnahme — wir begleiten den gesamten Prozess Ihrer PV-Anlage. Mit Speicheroptionen und Wallbox-Integration.',
    features: ['Dach- & Freiflächenanlagen', 'Batteriespeicher', 'Wallbox-Ladestationen', 'Notstrom-Fähigkeit']
  },
  {
    tag: 'SUN:// THERMAL',
    title: 'Solarthermie',
    desc: 'Warmwasserbereitung und Heizungsunterstützung durch Solarthermie. Ergänzend zur PV-Anlage oder als eigenständige Lösung.',
    features: ['Solarthermie-Kollektoren', 'Hybridmodule', 'Heizungsintegration', 'Warmwasserspeicher']
  },
  {
    tag: 'ELEC:// INSTALL',
    title: 'Elektroinstallation',
    desc: 'Neuinstallationen und Modernisierung elektrischer Anlagen — für Wohn- und Gewerbegebäude. Alles aus einer Hand, sauber dokumentiert.',
    features: ['E-Check & Prüfprotokoll', 'Zählerschrank-Modernisierung', 'Blitzschutz', 'Übergabepunkt']
  },
  {
    tag: 'MAINT:// SERVICE',
    title: 'Wartung & Service',
    desc: 'Nach der Installation kümmern wir uns um die laufende Wartung. Das sichert die Leistung und verlängert die Lebensdauer Ihrer Anlage.',
    features: ['Jährliche Inspektion', 'Reinigung & Wartung', 'Leistungsoptimierung', '24/7 Monitoring']
  }
]

function Services() {
  return (
    <section className="section servicesSection" id="leistungen">
      <div className="container">
        <div className="servicesHeader">
          <div className="sectionLabel">Leistungen</div>
          <h2 className="sectionTitle">Was wir machen.</h2>
          <p className="sectionSubtitle">Vier Kernbereiche — alle mit dem Anspruch, dass die Anlage hält, was sie verspricht.</p>
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
              <rect x="10" y="10" width="60" height="60" rx="8" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M25 55L40 25L55 55" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 45h20" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
              <circle cx="40" cy="20" r="4" fill="#facc15" opacity="0.6" />
            </svg>
          </div>
          <div className="aboutText">
            <div className="sectionLabel">Über uns</div>
            <h2 className="sectionTitle">Solar mit<br />Bodenhaftung.</h2>
            <p>Alpha Energy GmbH wurde 2012 in Dresden gegründet. Was als Spezialist für kleinere Anlagen begann, hat sich zu einem Full-Service-Anbieter für Photovoltaik und Elektrotechnik entwickelt — für Eigenheimbesitzer, Landwirte und kleinere Gewerbebetriebe.</p>
            <p>Wir arbeiten bewusst nicht mit Call-Center-Strukturen. Jeder Kunde wird von einem unserer Ingenieure beraten — nicht von einem Vertriebler, der Provision bekommt. Wir sagen auch, wenn eine größere Anlage sich nicht rechnet.</p>
            <div className="statsGrid" style={{ marginTop: 36 }}>
              <div className="statCard"><span className="statNum">2012</span><span className="statLabel">Gegründet / Dresden</span></div>
              <div className="statCard"><span className="statNum">8</span><span className="statLabel">Fachkräfte im Team</span></div>
              <div className="statCard"><span className="statNum">350+</span><span className="statLabel">Anlagen betreut</span></div>
              <div className="statCard"><span className="statNum">98%</span><span className="statLabel">Weiterempfehlung</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: 'Wir haben eine 30 kWp Anlage mit Speicher für unseren Hof installiert. Die Beratung war kompetent und ehrlich — sie haben uns sogar davon abgeraten, eine größere Anlage zu nehmen, weil der Mehraufwand nicht proportional gewesen wäre. Das zeugt von Ehrlichkeit.',
    name: 'Jürgen Hofmann',
    role: 'Landwirt / Hofmann Agrar GmbH / Sachsen',
    initials: 'JH'
  },
  {
    quote: 'Die PV-Anlage auf unserem Firmendach wurde in 5 Tagen installiert — inklusive Wallboxen für unsere Firmenfahrzeuge. Die Abnahme war unkompliziert und die Anlage läuft seit 18 Monaten ohne Probleme. Top.',
    name: 'Petra Lindner',
    role: 'Geschäftsführerin / Lindner Logistik GmbH / Leipzig',
    initials: 'PL'
  },
  {
    quote: 'Nach dem Neubau haben wir Alpha Energy mit der kompletten Elektroinstallation beauftragt — inklusive PV-Anlage mit Speicher. Alles aus einer Hand, sauber dokumentiert, pünktlich. Die Zusammenarbeit war angenehm.',
    name: 'Daniel Schreiber',
    role: 'Eigentümer / Schreiber Wohnbau GmbH / München',
    initials: 'DS'
  }
]

function Testimonials() {
  return (
    <section className="section testimonialsSection" id="kundenstimmen">
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
            <p className="sectionSubtitle">Für eine unverbindliche Beratung — ohne Verkaufsdruck, mit ehrlicher Einschätzung.</p>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">📍</div>
              <div><div className="contactInfoLabel">Standort</div><div className="contactInfoValue">Dresden, Sachsen</div></div>
            </div>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">📞</div>
              <div><div className="contactInfoLabel">Telefon</div><div className="contactInfoValue">+49 351 456 7890</div></div>
            </div>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">✉️</div>
              <div><div className="contactInfoLabel">E-Mail</div><div className="contactInfoValue">info@alpha-energy.de</div></div>
            </div>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">🕐</div>
              <div><div className="contactInfoLabel">Bürozeiten</div><div className="contactInfoValue">Mo–Fr 08:00–17:00</div></div>
            </div>
          </div>
          <div className="contactForm">
            <div className="formTitle">Anfrage einreichen</div>
            <div className="formSubtitle">SPEC:// Wir melden uns innerhalb von 24h.</div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="formRow">
                <div className="formGroup"><label className="formLabel">Name</label><input className="formInput" type="text" placeholder="Max Mustermann" /></div>
                <div className="formGroup"><label className="formLabel">E-Mail</label><input className="formInput" type="email" placeholder="ihre@email.de" /></div>
              </div>
              <div className="formGroup">
                <label className="formLabel">Leistung</label>
                <select className="formSelect">
                  <option>Photovoltaik</option>
                  <option>Solarthermie</option>
                  <option>Elektroinstallation</option>
                  <option>Wartung & Service</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="formGroup"><label className="formLabel">Beschreibung</label><textarea className="formTextarea" placeholder="Kurze Beschreibung des Vorhabens..." /></div>
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
                <rect width="26" height="26" rx="5" fill="#facc15" fillOpacity="0.12" />
                <path d="M7 19L13 7L19 19" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 15h8" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
              </svg>
              ALPHA <span>ENERGY</span>
            </div>
            <p className="footerBrandDesc">Solar & Elektrotechnik — seit 2012 in Dresden. Fair beraten, sauber installiert.</p>
          </div>
          <div>
            <div className="footerColTitle">Leistungen</div>
            <ul className="footerLinks">
              <li><a href="#leistungen">Photovoltaik</a></li>
              <li><a href="#leistungen">Solarthermie</a></li>
              <li><a href="#leistungen">Elektroinstallation</a></li>
              <li><a href="#leistungen">Wartung & Service</a></li>
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
              <li><a href="mailto:info@alpha-energy.de">info@alpha-energy.de</a></li>
              <li><a href="#">+49 351 456 7890</a></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>Mo–Fr 08–17 Uhr</span></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p className="footerCopy">© {new Date().getFullYear()} Alpha Energy GmbH — Dresden. Alle Rechte vorbehalten.</p>
          <div className="footerLegal"><a href="#">Impressum</a><a href="#">Datenschutz</a></div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (<><Navbar /><main><Hero /><Services /><About /><Testimonials /><Contact /></main><Footer /></>)
}