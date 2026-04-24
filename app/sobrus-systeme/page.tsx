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
            <rect width="28" height="28" rx="7" fill="#7C3AED" fillOpacity="0.15" />
            <rect x="7" y="7" width="6" height="6" rx="1.5" fill="#7C3AED" />
            <rect x="15" y="7" width="6" height="6" rx="1.5" fill="#7C3AED" fillOpacity="0.6" />
            <rect x="7" y="15" width="6" height="6" rx="1.5" fill="#7C3AED" fillOpacity="0.6" />
            <rect x="15" y="15" width="6" height="6" rx="1.5" fill="#7C3AED" />
          </svg>
          Sobrus <span>Systeme</span>
        </a>

        <ul className="navLinks" style={open ? { display: 'flex' } : {}}>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#ueber-uns">Über uns</a></li>
          <li><a href="#kundenstimmen">Kundenstimmen</a></li>
          <li><a href="#kontakt" className="navCta">Kontakt aufnehmen</a></li>
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
            IT &amp; Elektrotechnik aus einer Hand
          </div>
          <h1 className="heroTitle">
            Technik, die<br />
            Ihr Unternehmen <em>voranbringt.</em>
          </h1>
          <p className="heroSubtitle">
            Sobrus Systeme ist Ihr zuverlässiger Partner für Netzwerktechnik,
            Elektroinstallation, IT-Services und Smart Home — professionell
            geplant, sauber umgesetzt und langfristig betreut.
          </p>
          <div className="heroCtas">
            <a href="#kontakt" className="btnPrimary">
              Projekt anfragen →
            </a>
            <a href="#leistungen" className="btnSecondary">
              Unsere Leistungen
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroCard">
            <div className="heroCardGlow" />
            <div className="heroCardIcon">🖥️</div>
            <div className="heroCardTitle">Ihr IT-Systemhaus</div>
            <div className="heroCardSubtitle">
              Zertifiziert, versichert und seit über 10 Jahren Ihr Ansprechpartner
              für IT-Infrastruktur und Elektrotechnik.
            </div>
            <div className="heroStats">
              <div className="heroStat">
                <span className="heroStatNum">10+</span>
                <span className="heroStatLabel">Jahre Erfahrung</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">300+</span>
                <span className="heroStatLabel">Projekte</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">24/7</span>
                <span className="heroStatLabel">IT-Support</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">100%</span>
                <span className="heroStatLabel">Zufriedenheit</span>
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
    icon: '🌐',
    title: 'Netzwerktechnik',
    desc: 'Von der strukturierten Verkabelung bis zum vollständig verwalteten Netzwerk — wir planen, installieren und konfigurieren Ihre IT-Infrastruktur nach Ihren Anforderungen.',
    features: [
      'Strukturierte Gebäudeverkabelung (Cat6/Cat7)',
      'WLAN-Ausleuchtung & Access-Point-Planung',
      'Managed Switches & Router-Konfiguration',
      'VPN & Netzwerksicherheit',
    ],
  },
  {
    icon: '⚡',
    title: 'Elektroinstallation',
    desc: 'Professionelle Elektroarbeiten für Gewerbe und Industrie — von der Zuleitung bis zur Unterverteilung, stets nach aktuellen VDE-Normen und mit vollständiger Dokumentation.',
    features: [
      'Neu- und Erweiterungsinstallationen',
      'Unterverteilungen & Zählerschränke',
      'Leitungsverlegung & Kabeltrassen',
      'Prüfprotokoll nach DGUV V3',
    ],
  },
  {
    icon: '💻',
    title: 'IT-Services',
    desc: 'Wir übernehmen die komplette IT-Betreuung Ihres Unternehmens — von der Einrichtung einzelner Arbeitsplätze bis zum Full-Managed-Service für Ihre gesamte IT-Landschaft.',
    features: [
      'Server- und Client-Administration',
      'Microsoft 365 & Cloud-Dienste',
      'IT-Sicherheit & Backup-Konzepte',
      'Helpdesk & Vor-Ort-Support',
    ],
  },
  {
    icon: '🏠',
    title: 'Smart Home',
    desc: 'Intelligente Gebäudetechnik, die Komfort, Sicherheit und Energieeffizienz verbindet. Wir integrieren KNX, Loxone und weitere Systeme für Wohn- und Gewerbeimmobilien.',
    features: [
      'KNX & Loxone Systeme',
      'Automatisierte Licht- und Beschattungssteuerung',
      'Heizungsregelung & Energiemanagement',
      'App-Steuerung & Sprachassistenten',
    ],
  },
]

function Services() {
  return (
    <section className="section servicesSection" id="leistungen">
      <div className="container">
        <div className="servicesHeader">
          <div className="sectionTag">Leistungen</div>
          <h2 className="sectionTitle">Was wir für Sie leisten</h2>
          <p className="sectionSubtitle">
            Als Systemhaus für IT und Elektrotechnik bieten wir Ihnen das
            komplette Spektrum moderner Infrastrukturlösungen — alles aus
            einer Hand, termingerecht und mit Festpreisgarantie.
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
  { num: '10+', label: 'Jahre Berufserfahrung' },
  { num: '300+', label: 'abgeschlossene Projekte' },
  { num: '24/7', label: 'IT-Support-Erreichbarkeit' },
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
              IT trifft<br />Elektrotechnik.
            </h2>
            <p>
              Sobrus Systeme ist ein inhabergeführtes Unternehmen mit über
              10 Jahren Erfahrung in der IT- und Elektrotechnikbranche. Unser
              Team aus qualifizierten Technikern und zertifizierten IT-Fachleuten
              betreut mittelständische Unternehmen, Gewerbeobjekte und
              anspruchsvolle Privatkunden.
            </p>
            <p>
              Wir verstehen, dass Infrastruktur das Rückgrat jedes Betriebs ist.
              Deshalb arbeiten wir sorgfältig, transparent und termingerecht —
              ob bei der Neuvernetzung eines Bürogebäudes, der Modernisierung
              einer Elektroanlage oder der Implementierung eines Smart-Home-Systems.
            </p>
            <div className="aboutHighlights">
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Elektroarbeiten nach VDE- und DIN-Normen, vollständig dokumentiert</span>
              </div>
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Zertifizierte IT-Fachkräfte mit Herstellerzertifizierungen</span>
              </div>
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Umfassende Betriebs- und Haftpflichtversicherung</span>
              </div>
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Kostenlose Erstberatung und transparente Festpreisangebote</span>
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
    name: 'Markus Hoffmann',
    role: 'Geschäftsführer, Hoffmann Logistik GmbH',
    quote:
      'Sobrus Systeme hat unsere gesamte IT-Infrastruktur erneuert — Netzwerk, Server, Arbeitsplätze. Die Planung war durchdacht, die Umsetzung reibungslos und das Ergebnis übertrifft unsere Erwartungen. Endlich ein Partner, dem man die IT anvertrauen kann.',
  },
  {
    initials: 'LW',
    name: 'Laura Wenzel',
    role: 'Inhaberin, Praxis Wenzel',
    quote:
      'Nach dem Umzug unserer Praxis hat Sobrus Systeme in kürzester Zeit Netzwerk und Elektrik komplett neu aufgebaut. Sauber, professionell und ohne einen einzigen Betriebsausfall. Der Smart-Home-Empfangsbereich ist das Highlight — unsere Patienten sind begeistert.',
  },
  {
    initials: 'RK',
    name: 'Roland Koch',
    role: 'Bauleiter, Koch & Partner Immobilien',
    quote:
      'Wir setzen Sobrus Systeme auf mehreren Bauprojekten als Generalunternehmer für IT und Elektrik ein. Termintreue, saubere Dokumentation, kompetente Ansprechpartner — genau das braucht man im Bauprojektgeschäft. Klare Empfehlung.',
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
            Demo-Webseite — Kundenstimmen sind illustrativ / beispielhaft.
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
              Bereit für Ihr<br />nächstes Projekt?
            </h2>
            <p className="sectionSubtitle" style={{ marginBottom: '48px' }}>
              Kontaktieren Sie uns für ein kostenloses und unverbindliches
              Angebot. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            <div className="contactInfo">
              <div className="contactInfoItem">
                <div className="contactInfoIcon">📧</div>
                <div>
                  <div className="contactInfoLabel">E-Mail</div>
                  <div className="contactInfoValue">sobrus.systeme@gmail.com</div>
                </div>
              </div>
              <div className="contactInfoItem">
                <div className="contactInfoIcon">💻</div>
                <div>
                  <div className="contactInfoLabel">IT-Support</div>
                  <div className="contactInfoValue">24/7 für Bestandskunden erreichbar</div>
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
                <div className="contactInfoIcon">📍</div>
                <div>
                  <div className="contactInfoLabel">Einsatzgebiet</div>
                  <div className="contactInfoValue">Deutschlandweit</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contactForm">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 className="formTitle">Nachricht gesendet!</h3>
                <p className="formSubtitle">
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von
                  24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <>
                <h3 className="formTitle">Anfrage senden</h3>
                <p className="formSubtitle">
                  Kostenloses Angebot in wenigen Minuten
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
                    <input className="formInput" type="email" placeholder="max@unternehmen.de" required />
                  </div>
                  <div className="formGroup">
                    <label className="formLabel">Unternehmen (optional)</label>
                    <input className="formInput" type="text" placeholder="Mustermann GmbH" />
                  </div>
                  <div className="formGroup">
                    <label className="formLabel">Leistung</label>
                    <select className="formSelect">
                      <option value="">Bitte wählen...</option>
                      <option>Netzwerktechnik</option>
                      <option>Elektroinstallation</option>
                      <option>IT-Services</option>
                      <option>Smart Home</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div className="formGroup">
                    <label className="formLabel">Nachricht</label>
                    <textarea
                      className="formTextarea"
                      placeholder="Beschreiben Sie kurz Ihr Anliegen oder Projekt..."
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
                <rect width="28" height="28" rx="7" fill="#7C3AED" fillOpacity="0.15" />
                <rect x="7" y="7" width="6" height="6" rx="1.5" fill="#7C3AED" />
                <rect x="15" y="7" width="6" height="6" rx="1.5" fill="#7C3AED" fillOpacity="0.6" />
                <rect x="7" y="15" width="6" height="6" rx="1.5" fill="#7C3AED" fillOpacity="0.6" />
                <rect x="15" y="15" width="6" height="6" rx="1.5" fill="#7C3AED" />
              </svg>
              Sobrus <span>Systeme</span>
            </div>
            <p className="footerBrandDesc">
              Ihr Systemhaus für IT-Infrastruktur, Netzwerktechnik,
              Elektroinstallation und Smart Home.
            </p>
          </div>

          <div>
            <div className="footerColTitle">Leistungen</div>
            <ul className="footerLinks">
              <li><a href="#leistungen">Netzwerktechnik</a></li>
              <li><a href="#leistungen">Elektroinstallation</a></li>
              <li><a href="#leistungen">IT-Services</a></li>
              <li><a href="#leistungen">Smart Home</a></li>
            </ul>
          </div>

          <div>
            <div className="footerColTitle">Unternehmen</div>
            <ul className="footerLinks">
              <li><a href="#ueber-uns">Über uns</a></li>
              <li><a href="#kundenstimmen">Kundenstimmen</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <div className="footerColTitle">Kontakt</div>
            <ul className="footerLinks">
              <li><a href="mailto:sobrus.systeme@gmail.com">sobrus.systeme@gmail.com</a></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Mo–Fr 08:00–17:00</span></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>IT-Support: 24/7</span></li>
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <p className="footerCopy">
            © {new Date().getFullYear()} Sobrus Systeme. Alle Rechte vorbehalten.
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
