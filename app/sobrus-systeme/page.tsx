'use client'

import { useState } from 'react'

const ACCENT = '#a855f7'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="navInner">
        <a href="#" className="navLogo">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect width="26" height="26" rx="5" fill="#a855f7" fillOpacity="0.12" />
            <path d="M7 19L13 7L19 19" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 15h8" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
          </svg>
          SOBRUS <span>SYSTEME</span>
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
          <div className="heroBadge">NET:// IT + ELEKTRO — SEIT 2006</div>
          <h1 className="heroTitle">
            Netzwerke,<br />
            die <em>laufen</em>.<br />
            Jeden Tag.
          </h1>
          <p className="heroSubtitle">
            Wir verbinden IT-Infrastruktur mit Elektrotechnik — für Unternehmen,
            die auf funktionierende Systeme angewiesen sind. Keine Buzzwords,
            keine Übertreibungen. Einfach zuverlässig.
          </p>
          <div className="heroCtas">
            <a href="#kontakt" className="btnPrimary">Beratung anfragen →</a>
            <a href="#leistungen" className="btnSecondary">Leistungen</a>
          </div>
        </div>
        <div className="heroVisual">
          <div className="heroStats">
            <div className="heroStat">
              <span className="heroStatNum">18+</span>
              <span className="heroStatLabel">Jahre Erfahrung</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">200+</span>
              <span className="heroStatLabel">Unternehmenskunden</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">99,7%</span>
              <span className="heroStatLabel">Verfügbarkeit</span>
            </div>
            <div className="heroStat">
              <span className="heroStatNum">24/7</span>
              <span className="heroStatLabel">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    tag: 'NET:// STRUCTURE',
    title: 'Netzwerktechnik',
    desc: 'Strukturierte Verkabelung, Switches, Router — von der Planung bis zur Dokumentation. Für Büros, Lager und Gewerbehallen.',
    features: ['Cat.6A / Cat.7 Verkabelung', 'WLAN-Ausleuchtung', 'Firewall-Konfiguration', 'Monitoring & Protokoll']
  },
  {
    tag: 'NET:// IT',
    title: 'IT-Services',
    desc: 'IT-Betreuung, die verständlich ist. Wir kümmern uns um Ihre IT, damit Sie sich auf Ihr Geschäft konzentrieren können.',
    features: ['Remote-Support', 'Backup-Lösungen', 'VPN-Setups', 'Lizenzmanagement']
  },
  {
    tag: 'ELEC:// INSTALL',
    title: 'Elektroinstallation',
    desc: 'Stromkreise, Verteiler, Beleuchtung — für Gewerbe und Industrie. Auch in Kombination mit IT-Projekten aus einer Hand.',
    features: ['Mittel- und Niederspannung', 'USV-Anlagen', 'Beleuchtungsmodernisierung', 'E-Check']
  },
  {
    tag: 'SYS:// BUILDING',
    title: 'Smart Building',
    desc: 'Gebäudeautomation, die nicht nur auf dem Papier smart ist — sondern im Alltag. Für Bürogebäude, Lager und Gewerbe.',
    features: ['Gebäudeautomatisierung', 'Zutritt & Alarm', 'Energiemonitoring', 'Schnittstellen-Integration']
  }
]

function Services() {
  return (
    <section className="section servicesSection" id="leistungen">
      <div className="container">
        <div className="servicesHeader">
          <div className="sectionLabel">Leistungen</div>
          <h2 className="sectionTitle">Was wir machen.</h2>
          <p className="sectionSubtitle">Vier Kernbereiche — alle aus einer Hand, alle mit dem gleichen Anspruch.</p>
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
              <rect x="10" y="10" width="60" height="60" rx="8" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M25 55L40 25L55 55" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 45h20" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
              <circle cx="40" cy="20" r="4" fill="#a855f7" opacity="0.6" />
            </svg>
          </div>
          <div className="aboutText">
            <div className="sectionLabel">Über uns</div>
            <h2 className="sectionTitle">Erfahrung,<br />die zählt.</h2>
            <p>Sobrus Systeme wurde 2006 in Stuttgart gegründet. Seitdem haben wir uns auf die Kombination von IT und Elektrotechnik spezialisiert — ein Bereich, der heute wichtiger ist als je zuvor.</p>
            <p>Unser Team besteht aus Netzwerktechnikern, IT-Fachleuten und Elektromeistern. Wir arbeiten nicht mit Subunternenehmern — jede Aufgabe wird von festangestellten Spezialisten erledigt, die wir kennen und die uns kennen.</p>
            <div className="statsGrid" style={{ marginTop: 36 }}>
              <div className="statCard"><span className="statNum">2006</span><span className="statLabel">Gegründet / Stuttgart</span></div>
              <div className="statCard"><span className="statNum">12</span><span className="statLabel">Festangestellte</span></div>
              <div className="statCard"><span className="statNum">200+</span><span className="statLabel">Unternehmenskunden</span></div>
              <div className="statCard"><span className="statNum">99%</span><span className="statLabel">Kundentreue</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: 'Wir haben Sobrus beauftragt, unsere komplette Netzwerkinfrastruktur inklusive WLAN und Serverraum zu erneuern. Die Beratung war ehrlich — sie haben uns auch davon abgeraten, Dinge zu kaufen, die wir nicht brauchen. Das hat mich überzeugt.',
    name: 'Michael Krüger',
    role: 'IT-Leiter / Krüger Maschinenbau GmbH / Stuttgart',
    initials: 'MK'
  },
  {
    quote: 'Nach einem Wasserschaden war die gesamte IT-Infrastruktur unserer Filiale zerstört. Sobrus hatte alles innerhalb von 3 Tagen wieder am Laufen — inklusive neuer Verkabelung und USV. Während andere noch Angebote schrieben, waren die schon vor Ort.',
    name: 'Sandra Brandt',
    role: 'Geschäftsführerin / Brandt Retail GmbH / München',
    initials: 'SB'
  },
  {
    quote: 'Der E-Check für unser neues Bürogebäude war gründlich und professionell. Sobrus hat sicherheitsrelevante Mängel gefunden, die der vorherige Elektriker übersehen hatte. Danke für die Sorgfalt.',
    name: 'Ralf Petersen',
    role: 'Facilities Manager / Petersen & Co. GmbH / Hamburg',
    initials: 'RP'
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
            <p className="sectionSubtitle">Für Unternehmen, die IT und Elektrotechnik zuverlässig brauchen. Ohne Buzzwords — direkt und klar.</p>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">📍</div>
              <div><div className="contactInfoLabel">Standort</div><div className="contactInfoValue">Stuttgart, Baden-Württemberg</div></div>
            </div>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">📞</div>
              <div><div className="contactInfoLabel">Telefon</div><div className="contactInfoValue">+49 711 987 6543</div></div>
            </div>
            <div className="contactInfoItem">
              <div className="contactInfoIcon">✉️</div>
              <div><div className="contactInfoLabel">E-Mail</div><div className="contactInfoValue">info@sobrus-systeme.de</div></div>
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
                <div className="formGroup"><label className="formLabel">Firma</label><input className="formInput" type="text" placeholder="Firma GmbH" /></div>
              </div>
              <div className="formGroup"><label className="formLabel">E-Mail</label><input className="formInput" type="email" placeholder="kontakt@firma.de" /></div>
              <div className="formGroup">
                <label className="formLabel">Leistung</label>
                <select className="formSelect">
                  <option>Netzwerktechnik</option>
                  <option>IT-Services</option>
                  <option>Elektroinstallation</option>
                  <option>Smart Building</option>
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
                <rect width="26" height="26" rx="5" fill="#a855f7" fillOpacity="0.12" />
                <path d="M7 19L13 7L19 19" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 15h8" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
              </svg>
              SOBRUS <span>SYSTEME</span>
            </div>
            <p className="footerBrandDesc">IT & Elektrotechnik — seit 2006 in Stuttgart. Zuverlässig, ehrlich, kompetent.</p>
          </div>
          <div>
            <div className="footerColTitle">Leistungen</div>
            <ul className="footerLinks">
              <li><a href="#leistungen">Netzwerktechnik</a></li>
              <li><a href="#leistungen">IT-Services</a></li>
              <li><a href="#leistungen">Elektroinstallation</a></li>
              <li><a href="#leistungen">Smart Building</a></li>
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
              <li><a href="mailto:info@sobrus-systeme.de">info@sobrus-systeme.de</a></li>
              <li><a href="#">+49 711 987 6543</a></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>Mo–Fr 08–17 Uhr</span></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p className="footerCopy">© {new Date().getFullYear()} Sobrus Systeme GmbH — Stuttgart. Alle Rechte vorbehalten.</p>
          <div className="footerLegal"><a href="#">Impressum</a><a href="#">Datenschutz</a></div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (<><Navbar /><main><Hero /><Services /><About /><Testimonials /><Contact /></main><Footer /></>)
}