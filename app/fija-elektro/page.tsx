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
            24/7 Notdienst verfügbar
          </div>
          <h1 className="heroTitle">
            Elektrotechnik,<br />
            der Sie <em>vertrauen</em><br />
            können.
          </h1>
          <p className="heroSubtitle">
            FIJA Elektro steht für präzise Handwerkskunst, modernste Technik
            und zuverlässigen Service — von der einfachen Installation bis zum
            intelligenten Smart-Home-System.
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
            <div className="heroCardIcon">⚡</div>
            <div className="heroCardTitle">Ihr Elektrofachbetrieb</div>
            <div className="heroCardSubtitle">
              Zertifiziert, versichert und seit über 15 Jahren Ihr Partner
              für alle elektrischen Anlagen.
            </div>
            <div className="heroStats">
              <div className="heroStat">
                <span className="heroStatNum">15+</span>
                <span className="heroStatLabel">Jahre Erfahrung</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">500+</span>
                <span className="heroStatLabel">Projekte</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">24/7</span>
                <span className="heroStatLabel">Notdienst</span>
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
    icon: '🔌',
    title: 'Elektroinstallation',
    desc: 'Von der Neuinstallation bis zur vollständigen Renovierung elektrischer Anlagen — wir planen, installieren und prüfen nach den neuesten VDE-Normen.',
    features: [
      'Neu- und Erweiterungsinstallationen',
      'Unterverteilungen & Zählerschränke',
      'Leitungsverlegung & Kabeltrassen',
      'Prüfung nach DGUV V3',
    ],
  },
  {
    icon: '🛡️',
    title: 'Sicherheitstechnik',
    desc: 'Schützen Sie Ihr Eigentum und Ihre Familie mit modernster Sicherheitstechnik. Wir planen und installieren maßgeschneiderte Lösungen für Privat und Gewerbe.',
    features: [
      'Einbruchmeldeanlagen (EMA)',
      'Videoüberwachungssysteme (CCTV)',
      'Brandmelde- und Rauchmeldeanlagen',
      'Zutrittskontrollsysteme',
    ],
  },
  {
    icon: '🚨',
    title: 'Elektro-Notdienst',
    desc: 'Stromausfall, Kurzschluss oder defekte Absicherung — unser Notdienst ist 365 Tage im Jahr rund um die Uhr für Sie erreichbar und schnell vor Ort.',
    features: [
      '24 Stunden, 7 Tage die Woche',
      'Reaktionszeit unter 60 Minuten',
      'Privatpersonen & Unternehmen',
      'Festpreisgarantie für Notfalleinsätze',
    ],
  },
  {
    icon: '🏠',
    title: 'Smart Home',
    desc: 'Erleben Sie ein Zuhause, das mitdenkt. Wir integrieren KNX, Loxone und andere Systeme für automatisierte Beleuchtung, Heizung, Sicherheit und mehr.',
    features: [
      'KNX & Loxone Systeme',
      'Automatisierte Lichtsteuerung',
      'Rollladen- & Klimasteuerung',
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
          <h2 className="sectionTitle">Was wir für Sie tun</h2>
          <p className="sectionSubtitle">
            Als Elektrofachbetrieb bieten wir Ihnen das komplette Spektrum
            moderner Elektrotechnik — zuverlässig, sauber und termingerecht.
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
  { num: '15+', label: 'Jahre Berufserfahrung' },
  { num: '500+', label: 'abgeschlossene Projekte' },
  { num: '24/7', label: 'Notdienst-Erreichbarkeit' },
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
              Erfahrung, die<br />man spürt.
            </h2>
            <p>
              FIJA Elektro ist ein inhabergeführter Elektrofachbetrieb mit über
              15 Jahren Erfahrung. Unser Team aus qualifizierten Elektroinstallateuren
              und Meistern betreut Privatkunden, Gewerbetreibende und
              Industriebetriebe in ganz Deutschland.
            </p>
            <p>
              Wir legen größten Wert auf Qualität, Transparenz und pünktliche
              Ausführung. Jedes Projekt — ob kleiner Reparatureinsatz oder
              komplexe Industrieanlage — wird mit derselben Sorgfalt geplant
              und umgesetzt.
            </p>
            <div className="aboutHighlights">
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Alle Arbeiten nach aktuellen VDE- und DIN-Normen</span>
              </div>
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Meisterbetrieb mit geprüften Elektrofachkräften</span>
              </div>
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Umfassende Haftpflicht- und Betriebsversicherung</span>
              </div>
              <div className="aboutHighlight">
                <span>✓</span>
                <span>Kostenlose Erstberatung und transparente Angebote</span>
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
    initials: 'KR',
    name: 'Klaus Richter',
    role: 'Hauseigentümer, München',
    quote:
      'FIJA Elektro hat unsere komplette Elektroanlage im Altbau erneuert — pünktlich, sauber und zum vereinbarten Preis. Der Notdienst war nach einem Stromausfall in unter 45 Minuten bei uns. Absolute Empfehlung!',
  },
  {
    initials: 'SB',
    name: 'Sandra Bauer',
    role: 'Geschäftsführerin, Bauer Immobilien GmbH',
    quote:
      'Wir beauftragen FIJA Elektro regelmäßig für unsere Gewerbeobjekte. Die Qualität der Arbeit ist konstant hoch, die Kommunikation unkompliziert und die Dokumentation lückenlos. Ein verlässlicher Partner für unser Unternehmen.',
  },
  {
    initials: 'TM',
    name: 'Thomas Müller',
    role: 'Bauleiter, Müller Bau GmbH',
    quote:
      'Im Schlüsselfertigbau kommt es auf Termintreue an. FIJA Elektro hat bei mehreren Projekten geliefert, was versprochen wurde — auch wenn es mal eng wurde. Das Smart-Home-System für unser Wohnbauprojekt war technisch einwandfrei.',
  },
]

function Testimonials() {
  return (
    <section className="section testimonialsSection" id="referenzen">
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
              Bereit für Ihr<br />Projekt?
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
                  <div className="contactInfoValue">info@fija-elektro.de</div>
                </div>
              </div>
              <div className="contactInfoItem">
                <div className="contactInfoIcon">🚨</div>
                <div>
                  <div className="contactInfoLabel">Notdienst</div>
                  <div className="contactInfoValue">24/7 erreichbar</div>
                </div>
              </div>
              <div className="contactInfoItem">
                <div className="contactInfoIcon">🕐</div>
                <div>
                  <div className="contactInfoLabel">Bürozeiten</div>
                  <div className="contactInfoValue">Mo–Fr 07:00–18:00 Uhr</div>
                </div>
              </div>
              <div className="contactInfoItem">
                <div className="contactInfoIcon">📍</div>
                <div>
                  <div className="contactInfoLabel">Einsatzgebiet</div>
                  <div className="contactInfoValue">Bundesweit / ganz Deutschland</div>
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
                    <input className="formInput" type="email" placeholder="max@beispiel.de" required />
                  </div>
                  <div className="formGroup">
                    <label className="formLabel">Leistung</label>
                    <select className="formSelect">
                      <option value="">Bitte wählen...</option>
                      <option>Elektroinstallation</option>
                      <option>Sicherheitstechnik</option>
                      <option>Elektro-Notdienst</option>
                      <option>Smart Home</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div className="formGroup">
                    <label className="formLabel">Nachricht</label>
                    <textarea
                      className="formTextarea"
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
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
                <rect width="28" height="28" rx="7" fill="#3b82f6" fillOpacity="0.15" />
                <path d="M8 20L14 8L20 20" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 16h8" stroke="#3b82f6" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              FIJA <span>Elektro</span>
            </div>
            <p className="footerBrandDesc">
              Ihr zuverlässiger Elektrofachbetrieb für Installation,
              Sicherheitstechnik, Notdienst und Smart Home.
            </p>
          </div>

          <div>
            <div className="footerColTitle">Leistungen</div>
            <ul className="footerLinks">
              <li><a href="#leistungen">Elektroinstallation</a></li>
              <li><a href="#leistungen">Sicherheitstechnik</a></li>
              <li><a href="#leistungen">Elektro-Notdienst</a></li>
              <li><a href="#leistungen">Smart Home</a></li>
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
              <li><span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Mo–Fr 07:00–18:00</span></li>
              <li><span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Notdienst: 24/7</span></li>
            </ul>
          </div>
        </div>

        <div className="footerBottom">
          <p className="footerCopy">
            © {new Date().getFullYear()} FIJA Elektro. Alle Rechte vorbehalten.
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
