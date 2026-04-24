'use client'

import { useState } from 'react'

// Sobrus Systeme — IT & Elektrotechnik
// Accent: #7C3AED (purple)

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="navInner">
        <a href="#" className="navLogo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="#7C3AED" fillOpacity="0.15" />
            <path d="M8 20L14 8L20 20" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 16h8" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          Sobrus <span>Systeme</span>
        </a>
        <ul className="navLinks" style={open ? { display: 'flex' } : {}}>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#ueber-uns">Über uns</a></li>
          <li><a href="#kundenstimmen">Referenzen</a></li>
          <li><a href="#kontakt" className="navCta">Angebot anfragen</a></li>
        </ul>
        <button className="navToggle" onClick={() => setOpen(!open)} aria-label="Menü"><span /><span /><span /></button>
      </div>
    </nav>
  )
}

const ACCENT = '#7C3AED'

function Hero() {
  return (
    <section className="hero" style={{ '--page-accent': ACCENT } as React.CSSProperties}>
      <div className="heroBg" />
      <div className="heroInner">
        <div className="heroContent">
          <div className="heroBadge">IT & Elektrotechnik aus einer Hand</div>
          <h1 className="heroTitle">
            Netzwerke, die<br />
            <em>funktionieren</em> —<br />
            jeden Tag.
          </h1>
          <p className="heroSubtitle">
            Wir verbinden IT-Infrastruktur mit Elektrotechnik — für Unternehmen,
            die auf Zuverlässigkeit angewiesen sind. KeineBuzzwords, keine
            Übertreibungen. Einfach funktionierende Systeme.
          </p>
          <div className="heroCtas">
            <a href="#kontakt" className="btnPrimary">Beratung anfragen →</a>
            <a href="#leistungen" className="btnSecondary">Mehr erfahren</a>
          </div>
        </div>
        <div className="heroVisual">
          <div className="heroStats">
            <div className="heroStat"><span className="heroStatNum">18+</span><span className="heroStatLabel">Jahre Branchenerfahrung</span></div>
            <div className="heroStat"><span className="heroStatNum">200+</span><span className="heroStatLabel">Unternehmenskunden</span></div>
            <div className="heroStat"><span className="heroStatNum">99,7%</span><span className="heroStatLabel">Systemverfügbarkeit</span></div>
            <div className="heroStat"><span className="heroStatNum">24/7</span><span className="heroStatLabel">Support verfügbar</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  { title: 'Netzwerktechnik', desc: 'Strukturierte Verkabelung, Switches, Router — von der Planung bis zur Dokumentation. Für Büros, Lager und Gewerbehallen.', features: ['Cat.6A / Cat.7 Verkabelung', 'WLAN-Ausleuchtung', 'Firewall-Konfiguration', 'Monitoring & Wartung'] },
  { title: 'IT-Services', desc: 'IT-Betreuung, die verständlich ist. Kein Claim — wir kümmern uns um Ihre IT-Infrastruktur, damit Sie sich auf Ihr Geschäft konzentrieren können.', features: ['Remote-Support', 'Backup-Lösungen', 'VPN-Setups', 'Lizenzmanagement'] },
  { title: 'Elektroinstallation', desc: 'Stromkreise, Verteiler, Beleuchtung — für Gewerbe und Industrie. Auch in Kombination mit IT-Projekten aus einer Hand.', features: ['Mittel- und Niederspannung', 'USV-Anlagen', 'Beleuchtungsmodernisierung', 'E-Check'] },
  { title: 'Smart Building', desc: 'Gebäudeautomation, die nicht nur auf dem Papier smart ist — sondern im Alltag. Für Bürogebäude, Lager und Gewerbe.', features: ['Gebäudeautomatisierung', 'Zutritt & Alarm', 'Energiemonitoring', 'Schnittstellen-Integration'] }
]

function Services() {
  return (
    <section className="section servicesSection" id="leistungen">
      <div className="container">
        <div className="servicesHeader">
          <div className="sectionLabel">Leistungen</div>
          <h2 className="sectionTitle">Was wir für Sie tun.</h2>
          <p className="sectionSubtitle">Vier Kernbereiche — alle aus einer Hand, alle mit dem gleichen Anspruch an Qualität.</p>
        </div>
        <div className="servicesGrid">
          {services.map((s, i) => (
            <div key={i} className="serviceCard">
              <div className="serviceIcon">⚡</div>
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
          <div className="aboutImage">⚡</div>
          <div className="aboutText">
            <div className="sectionLabel">Über uns</div>
            <h2 className="sectionTitle">Erfahrung, die zählt.</h2>
            <p>Sobrus Systeme wurde 2006 in Stuttgart gegründet. Seitdem haben wir uns auf die Kombination von IT und Elektrotechnik spezialisiert — ein Bereich, der heute wichtiger ist als je zuvor.</p>
            <p>Unser Team besteht aus Netzwerktechnikern, IT-Fachleuten und Elektromeistern. Wir arbeiten nicht mit Subunternehmern — jede Aufgabe wird von festangestellten Spezialisten erledigt.</p>
            <div className="statsGrid" style={{ marginTop: 40 }}>
              <div className="statCard"><span className="statNum">2006</span><span className="statLabel">Gegründet in Stuttgart</span></div>
              <div className="statCard"><span className="statNum">12</span><span className="statLabel">Festangestellte Fachkräfte</span></div>
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
  { quote: 'Wir haben Sobrus beauftragt, unsere komplette Netzwerkinfrastruktur inklusive WLAN und Serverraum zu erneuern. Die Beratung war ehrlich — sie haben uns auch davon abgeraten, Dinge zu kaufen, die wir nicht brauchen. Das hat mich überzeugt.', name: 'Michael Krüger', role: 'IT-Leiter, Krüger Maschinenbau GmbH, Stuttgart', initials: 'MK' },
  { quote: 'Nach einem Wasserschaden war die gesamte IT-Infrastruktur unserer Filiale zerstört. Sobrus hatte alles innerhalb von 3 Tagen wieder am Laufen — inklusive neuer Verkabelung und USV. Während andere noch Angebote schrieben, waren die schon vor Ort.', name: 'Sandra Brandt', role: 'Geschäftsführerin, Brandt Retail GmbH, München', initials: 'SB' },
  { quote: 'Der E-Check für unser neues Bürogebäude war gründlich und professionell. Sobrus hat sicherheitsrelevante Mängel gefunden, die der vorherige Elektriker übersehen hatte. Danke für die Sorgfalt.', name: 'Ralf Petersen', role: 'Facilities Manager, Petersen & Co. GmbH, Hamburg', initials: 'RP' }
]

function Testimonials() {
  return (
    <section className="section testimonialsSection" id="kundenstimmen">
      <div className="container">
        <div className="testimonialsHeader">
          <div className="sectionLabel">Kundenstimmen</div>
          <h2 className="sectionTitle">Was Kunden sagen.</h2>
          <p className="sectionSubtitle">Demo-Webseite — Kundenstimmen sind illustrativ / beispielhaft.</p>
        </div>
        <div className="testimonialsGrid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonialCard">
              <p className="testimonialQuote">"{t.quote}"</p>
              <div className="testimonialAuthor">
                <div className="testimonialAvatar">{t.initials}</div>
                <div><div className="testimonialName">{t.name}</div><div className="testimonialRole">{t.role}</div></div>
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
              <div><div className="contactInfoLabel">Adresse</div><div className="contactInfoValue">Stuttgart, Baden-Württemberg</div></div>
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
              <div><div className="contactInfoLabel">Öffnungszeiten</div><div className="contactInfoValue">Mo–Fr 08:00–17:00 | 24/7 Notfall-Support</div></div>
            </div>
          </div>
          <div className="contactForm">
            <div className="formTitle">Anfrage senden</div>
            <div className="formSubtitle">Wir melden uns innerhalb von 24 Stunden.</div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="formRow">
                <div className="formGroup"><label className="formLabel">Name</label><input className="formInput" type="text" placeholder="Ihr Name" /></div>
                <div className="formGroup"><label className="formLabel">Firma</label><input className="formInput" type="text" placeholder="Firmenname" /></div>
              </div>
              <div className="formGroup"><label className="formLabel">E-Mail</label><input className="formInput" type="email" placeholder="kontakt@firma.de" /></div>
              <div className="formGroup">
                <label className="formLabel">Betreff</label>
                <select className="formSelect">
                  <option>Netzwerktechnik</option>
                  <option>IT-Services</option>
                  <option>Elektroinstallation</option>
                  <option>Smart Building</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="formGroup"><label className="formLabel">Nachricht</label><textarea className="formTextarea" placeholder="Beschreiben Sie kurz Ihr Anliegen..." /></div>
              <button type="submit" className="formSubmit">Absenden →</button>
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
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="7" fill="#7C3AED" fillOpacity="0.15" />
                <path d="M8 20L14 8L20 20" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 16h8" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              Sobrus <span>Systeme</span>
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
              <li><span style={{ color: 'var(--text-muted)', fontSize: 14 }}>Mo–Fr 08:00–17:00</span></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p className="footerCopy">© {new Date().getFullYear()} Sobrus Systeme GmbH. Alle Rechte vorbehalten.</p>
          <div className="footerLegal"><a href="#">Impressum</a><a href="#">Datenschutz</a></div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (<><Navbar /><main><Hero /><Services /><About /><Testimonials /><Contact /></main><Footer /></>)
}