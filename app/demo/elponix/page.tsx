'use client';

export default function Elponix() {
  return (
    <>
      <style>{`
        :root {
          --purple: #a855f7;
          --purple-dim: rgba(168, 85, 247, 0.15);
          --purple-glow: rgba(168, 85, 247, 0.07);
          --border-purple: rgba(168, 85, 247, 0.35);
          --bg-primary: #080c14;
          --bg-card: #0d1520;
          --bg-elevated: #111d2e;
          --text-primary: #e8edf5;
          --text-muted: #6b7a94;
          --border: rgba(255, 255, 255, 0.08);
          --font-mono: 'Space Mono', monospace;
          --font-sans: 'Inter', system-ui, sans-serif;
        }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; color-scheme: dark; }

        body {
          font-family: var(--font-sans);
          background: var(--bg-primary);
          color: var(--text-primary);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          line-height: 1.6;
          font-size: 16px;
        }

        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; }

        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(8, 12, 20, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-purple);
        }
        .navInner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .navLogo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .navLogo span { color: var(--purple); }
        .navLinks {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }
        .navLinks a {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          font-family: var(--font-mono);
        }
        .navLinks a:hover { color: var(--purple); }
        .navCta {
          background: var(--purple) !important;
          color: #fff !important;
          padding: 8px 18px;
          border-radius: 4px;
          font-size: 12px !important;
          font-weight: 700;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          transition: opacity 0.2s !important;
          font-family: var(--font-mono) !important;
        }
        .navCta:hover { opacity: 0.85; }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }
        .section { padding: 90px 0; position: relative; z-index: 1; }
        .sectionLabel {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--purple);
          margin-bottom: 18px;
          font-family: var(--font-mono);
        }
        .sectionLabel::before { content: '//'; opacity: 0.5; }
        .sectionTitle {
          font-family: var(--font-mono);
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.1;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .sectionSubtitle {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 500px;
        }
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 64px;
          position: relative;
          overflow: hidden;
        }
        .heroBg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 60% at 85% 50%, var(--purple-glow) 0%, transparent 65%),
            linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-card) 100%);
        }
        .heroInner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 32px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .heroContent { max-width: 600px; }
        .heroBadge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--purple-dim);
          border: 1px dashed var(--border-purple);
          color: var(--purple);
          padding: 6px 14px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 28px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: var(--font-mono);
        }
        .heroTitle {
          font-family: var(--font-mono);
          font-size: clamp(40px, 6.5vw, 76px);
          font-weight: 700;
          letter-spacing: -1.5px;
          line-height: 1;
          margin-bottom: 24px;
          text-transform: uppercase;
        }
        .heroTitle em {
          font-style: normal;
          color: var(--purple);
          display: block;
        }
        .heroSubtitle {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 36px;
          max-width: 480px;
        }
        .heroCtas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .btnPrimary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--purple);
          color: #fff;
          padding: 13px 26px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 700;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: opacity 0.2s;
          border: none;
        }
        .btnPrimary:hover { opacity: 0.85; }
        .btnSecondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--text-primary);
          padding: 13px 26px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 700;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid var(--border);
          transition: border-color 0.2s;
        }
        .btnSecondary:hover { border-color: var(--purple); }
        .heroVisual { display: flex; justify-content: flex-end; }
        .heroStats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 100%;
          max-width: 380px;
        }
        .heroStat {
          background: var(--bg-card);
          border: 1px dashed var(--border-purple);
          border-radius: 6px;
          padding: 22px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s;
        }
        .heroStat::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 100%;
          background: var(--purple);
        }
        .heroStat:hover { border-color: var(--purple); }
        .heroStatNum {
          font-size: 28px;
          font-weight: 700;
          color: var(--purple);
          display: block;
          font-family: var(--font-mono);
          margin-bottom: 4px;
        }
        .heroStatLabel {
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: var(--font-mono);
        }
        .servicesSection {
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .servicesHeader { margin-bottom: 60px; }
        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .serviceCard {
          background: var(--bg-primary);
          border: 1px dashed var(--border-purple);
          border-radius: 6px;
          padding: 28px;
          position: relative;
          transition: border-color 0.25s;
        }
        .serviceCard:hover { border-color: var(--purple); }
        .serviceCard::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 40px;
          height: 40px;
          border-top: 2px solid var(--purple);
          border-right: 2px solid var(--purple);
          border-radius: 0 6px 0 0;
          opacity: 0.4;
        }
        .serviceCard:hover::after { opacity: 1; }
        .serviceTag {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--purple);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }
        .serviceTitle {
          font-family: var(--font-mono);
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
        }
        .serviceDesc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 18px;
        }
        .serviceFeatures {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .serviceFeatures li {
          font-size: 13px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
        }
        .serviceFeatures li::before {
          content: '→';
          color: var(--purple);
          font-weight: 700;
          font-size: 11px;
        }
        .aboutInner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .aboutImage {
          aspect-ratio: 4/3;
          background: var(--bg-card);
          border: 1px dashed var(--border-purple);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 56px;
          position: relative;
          overflow: hidden;
        }
        .aboutImage::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--purple-glow) 0%, transparent 50%);
        }
        .statsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .statCard {
          background: var(--bg-card);
          border: 1px dashed var(--border-purple);
          border-radius: 6px;
          padding: 20px;
          text-align: left;
          transition: border-color 0.2s;
        }
        .statCard:hover { border-color: var(--border-purple); }
        .statNum {
          font-size: 30px;
          font-weight: 700;
          color: var(--purple);
          display: block;
          font-family: var(--font-mono);
          margin-bottom: 2px;
        }
        .statLabel {
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-family: var(--font-mono);
          line-height: 1.4;
        }
        .aboutText p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.85;
          margin-bottom: 18px;
        }
        .testimonialsSection {
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .testimonialsHeader { margin-bottom: 52px; }
        .testimonialsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .testimonialCard {
          background: var(--bg-elevated);
          border: 1px dashed var(--border-purple);
          border-radius: 6px;
          padding: 26px;
          position: relative;
          transition: border-color 0.2s;
        }
        .testimonialCard::before {
          content: '"';
          font-family: var(--font-mono);
          font-size: 48px;
          color: var(--purple);
          opacity: 0.25;
          position: absolute;
          top: 8px;
          left: 20px;
          line-height: 1;
        }
        .testimonialQuote {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          padding-top: 20px;
        }
        .testimonialAuthor {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .testimonialAvatar {
          width: 38px;
          height: 38px;
          border-radius: 4px;
          background: var(--purple-dim);
          border: 1px dashed var(--border-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          color: var(--purple);
          flex-shrink: 0;
          font-family: var(--font-mono);
        }
        .testimonialName {
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font-mono);
        }
        .testimonialRole {
          font-size: 11px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .contactInner {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 72px;
          align-items: start;
        }
        .contactInfo { display: flex; flex-direction: column; gap: 24px; }
        .contactInfoItem {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .contactInfoIcon {
          width: 40px;
          height: 40px;
          background: var(--purple-dim);
          border: 1px dashed var(--border-purple);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }
        .contactInfoLabel {
          font-size: 10px;
          color: var(--text-muted);
          margin-bottom: 2px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-family: var(--font-mono);
          font-weight: 700;
        }
        .contactInfoValue {
          font-size: 14px;
          font-weight: 500;
          font-family: var(--font-mono);
        }
        .contactForm {
          background: var(--bg-card);
          border: 1px dashed var(--border-purple);
          border-radius: 6px;
          padding: 32px;
        }
        .formTitle {
          font-family: var(--font-mono);
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .formSubtitle {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 22px;
          font-family: var(--font-mono);
        }
        .formGroup { margin-bottom: 12px; }
        .formLabel {
          display: block;
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-family: var(--font-mono);
        }
        .formInput, .formTextarea, .formSelect {
          width: 100%;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 11px 14px;
          font-size: 14px;
          color: var(--text-primary);
          font-family: var(--font-mono);
          transition: border-color 0.2s;
          outline: none;
        }
        .formInput:focus, .formTextarea:focus, .formSelect:focus {
          border-color: var(--purple);
        }
        .formTextarea { resize: vertical; min-height: 100px; }
        .formRow {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .formSubmit {
          width: 100%;
          background: var(--purple);
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 13px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 6px;
          transition: opacity 0.2s;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .formSubmit:hover { opacity: 0.85; }
        .footer {
          background: var(--bg-card);
          border-top: 1px dashed var(--border);
          padding: 52px 0 28px;
        }
        .footerInner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .footerTop {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        .footerBrand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }
        .footerBrand span { color: var(--purple); }
        .footerBrandDesc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 220px;
          font-family: var(--font-mono);
        }
        .footerColTitle {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 14px;
          font-family: var(--font-mono);
        }
        .footerLinks { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .footerLinks a {
          font-size: 13px;
          color: var(--text-muted);
          transition: color 0.2s;
          font-family: var(--font-mono);
        }
        .footerLinks a:hover { color: var(--purple); }
        .footerBottom {
          border-top: 1px solid var(--border);
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footerCopy { font-size: 12px; color: var(--text-muted); font-family: var(--font-mono); }
        .footerLegal { display: flex; gap: 20px; }
        .footerLegal a {
          font-size: 12px;
          color: var(--text-muted);
          transition: color 0.2s;
          font-family: var(--font-mono);
        }
        .footerLegal a:hover { color: var(--text-primary); }
        @media (max-width: 900px) {
          .navLinks { display: none; }
          .heroInner { grid-template-columns: 1fr; gap: 48px; }
          .heroCtas { justify-content: flex-start; }
          .servicesGrid { grid-template-columns: 1fr; }
          .aboutInner { grid-template-columns: 1fr; gap: 48px; }
          .testimonialsGrid { grid-template-columns: 1fr; }
          .contactInner { grid-template-columns: 1fr; gap: 48px; }
          .footerTop { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 600px) {
          .section { padding: 70px 0; }
          .heroTitle { font-size: 36px; }
          .heroStats { max-width: 100%; }
          .formRow { grid-template-columns: 1fr; }
          .footerTop { grid-template-columns: 1fr; }
          .footerBottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navInner">
          <div className="navLogo">
            <span>◈</span> ELPONIX
          </div>
          <ul className="navLinks">
            <li><a href="#leistungen">Leistungen</a></li>
            <li><a href="#ueber">Über uns</a></li>
            <li><a href="#kunden">Referenzen</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
          <a href="#kontakt" className="navCta">Anfrage starten</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="heroBg" />
        <div className="container heroInner">
          <div className="heroContent">
            <div className="heroBadge">Elektrotechnik · Industrie · Gebäudetechnik</div>
            <h1 className="heroTitle">
              Präzision in<br /><em>Elektrotechnik.</em>
            </h1>
            <p className="heroSubtitle">
              Elponix steht für zuverlässige Elektroinstallationen und maßgeschneiderte 
              Gebäudetechnik in Ostwestfalen. Seit über 20 Jahren setzen wir Standards in 
              Qualität, Sicherheit und Innovation.
            </p>
            <div className="heroCtas">
              <a href="#kontakt" className="btnPrimary">
                Kostenlose Beratung →
              </a>
              <a href="#leistungen" className="btnSecondary">
                Leistungen ansehen
              </a>
            </div>
          </div>
          <div className="heroVisual">
            <div className="heroStats">
              <div className="heroStat">
                <span className="heroStatNum">20+</span>
                <span className="heroStatLabel">Jahre Erfahrung</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">350+</span>
                <span className="heroStatLabel">Projekte abgeschlossen</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">100%</span>
                <span className="heroStatLabel">Normenkonform</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">98%</span>
                <span className="heroStatLabel">Kundenzufriedenheit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="section servicesSection">
        <div className="container">
          <div className="servicesHeader">
            <p className="sectionLabel">Leistungen</p>
            <h2 className="sectionTitle">Was wir für Sie tun</h2>
            <p className="sectionSubtitle">
              Alles aus einer Hand — von der Beratung über die Planung bis zur fertigen Ausführung nach VDE/DIN-Normen.
            </p>
          </div>
          <div className="servicesGrid">
            {[
              {
                tag: '01 // INSTALLATION',
                title: 'Elektroinstallation',
                desc: 'Vollständige Elektroinstallationen für Wohn- und Gewerbeobjekte. Planung, Montage und Abnahme aus einer Hand.',
                features: ['Haus- und Wohnungsinstallation', 'Gewerbe- und Industrieanlagen', 'Smart-Home-Verkabelung', 'Prüfprotokoll & VDE-Abnahme']
              },
              {
                tag: '02 // AUTOMATION',
                title: 'Gebäudeautomation',
                desc: 'Intelligente Steuerungs- und Automatisierungslösungen für Effizienz und Komfort in Gebäuden jeder Art.',
                features: ['KNX/EIB-Systeme', 'Beleuchtungssteuerung', 'HLK-Automation', 'Visualisierung & Fernzugriff']
              },
              {
                tag: '03 // INDUSTRIE',
                title: 'Industrieelektrik',
                desc: 'Spezialisierte Elektroinstallationen für Produktions- und Fertigungsanlagen nach höchsten Sicherheitsstandards.',
                features: ['Schaltschrankbau', 'Antriebstechnik', 'Messerfassung & Qualität', 'Explosionsschutz (ATEX)']
              },
              {
                tag: '04 // SERVICE',
                title: 'Wartung & Prüfung',
                desc: 'Regelmäßige Wartung, wiederkehrende Prüfungen und schnelle Störungsbehebung für maximale Anlagensicherheit.',
                features: ['Wartungsverträge', 'DGUV V3 Prüfungen', ' thermo-graphische Untersuchung', '24/7 Störungsdienst']
              }
            ].map((s, i) => (
              <div key={i} className="serviceCard">
                <div className="serviceTag">{s.tag}</div>
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
            <div className="aboutImage">
              ⚡
            </div>
            <div className="aboutText">
              <p className="sectionLabel">Über uns</p>
              <h2 className="sectionTitle">Qualität seit 2004</h2>
              <p>
                Elponix mit Sitz in Bielefeld ist Ihr regionaler Fachbetrieb für Elektrotechnik und Gebäudetechnik. 
                Unser Team aus Meistern und Gesellen verbindet handwerkliche Präzision mit technischer Innovation — 
                für Ergebnisse, die halten.
              </p>
              <p>
                Von der einfachen Steckdose bis zur komplexen Industrieanlage: Wir liefern normenkonforme Lösungen, 
                transparente Angebote und termingerechte Umsetzung. Faire Preise, keine versteckten Kosten.
              </p>
              <div className="statsGrid" style={{ marginTop: 32 }}>
                <div className="statCard">
                  <span className="statNum">350+</span>
                  <span className="statLabel">Projekte</span>
                </div>
                <div className="statCard">
                  <span className="statNum">20+</span>
                  <span className="statLabel">Jahre Erfahrung</span>
                </div>
                <div className="statCard">
                  <span className="statNum">98%</span>
                  <span className="statLabel">Kundenzufriedenheit</span>
                </div>
                <div className="statCard">
                  <span className="statNum">12</span>
                  <span className="statLabel">Mitarbeiter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="kunden" className="section testimonialsSection">
        <div className="container">
          <div className="testimonialsHeader">
            <p className="sectionLabel">Referenzen</p>
            <h2 className="sectionTitle">Das sagen unsere Kunden</h2>
          </div>
          <div className="testimonialsGrid">
            {[
              {
                quote: 'Elponix hat unsere neue Produktionshalle komplett verkabelt — termingerecht, präzise und fair im Preis. Top Partner für Industrieprojekte.',
                name: 'Markus Henning',
                role: 'Geschäftsführer, Henning Metallverarbeitung GmbH'
              },
              {
                quote: 'Die KNX-Installation in unserem Bürogebäude war komplex, aber das Elponix-Team hat alles professionell umgesetzt. Absolut empfehlenswert.',
                name: 'Sandra Kemper',
                role: 'Projektleiterin, Kemper & Kollegen Architekten'
              },
              {
                quote: 'Schneller Notdienst, faire Preise und die Anlage läuft einwandfrei seit Jahren. Da machen wir gerne weiter.',
                name: 'Jürgen Wellmann',
                role: 'Inhaber, Wellmann Fensterbau'
              }
            ].map((t, i) => (
              <div key={i} className="testimonialCard">
                <p className="testimonialQuote">{t.quote}</p>
                <div className="testimonialAuthor">
                  <div className="testimonialAvatar">{t.name.split(' ').map(n => n[0]).join('')}</div>
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

      {/* Contact */}
      <section id="kontakt" className="section servicesSection">
        <div className="container">
          <div className="contactInner">
            <div>
              <p className="sectionLabel">Kontakt</p>
              <h2 className="sectionTitle">Sprechen Sie mit uns</h2>
              <p className="sectionSubtitle">
                Haben Sie ein Projekt? Wir beraten Sie kostenlos und unverbindlich.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
                {[
                  { label: 'Adresse', value: 'Elektrozentrale Bielefeld · Stapenhorststraße 38, 33615 Bielefeld' },
                  { label: 'Telefon', value: '+49 521 987 65 43' },
                  { label: 'E-Mail', value: 'info@elponix.de' },
                  { label: 'Öffnungszeiten', value: 'Mo–Do: 07:30–17:00 Uhr · Fr: 07:30–15:00 Uhr' }
                ].map((item, i) => (
                  <div key={i} className="contactInfoItem">
                    <div className="contactInfoIcon">
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
            <div className="contactForm">
              <div className="formTitle">Anfrage senden</div>
              <div className="formSubtitle">Wir melden uns innerhalb von 24 Stunden.</div>
              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">Name</label>
                  <input type="text" className="formInput" placeholder="Ihr Name" />
                </div>
                <div className="formGroup">
                  <label className="formLabel">Telefon</label>
                  <input type="tel" className="formInput" placeholder="+49 ..." />
                </div>
              </div>
              <div className="formGroup">
                <label className="formLabel">E-Mail</label>
                <input type="email" className="formInput" placeholder="ihre@firma.de" />
              </div>
              <div className="formGroup">
                <label className="formLabel">Leistung</label>
                <select className="formSelect" style={{ color: '#6b7a94' }}>
                  <option value="">— Bitte wählen —</option>
                  <option>Elektroinstallation</option>
                  <option>Gebäudeautomation</option>
                  <option>Industrieelektrik</option>
                  <option>Wartung & Prüfung</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="formGroup">
                <label className="formLabel">Nachricht</label>
                <textarea className="formTextarea" placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..." />
              </div>
              <button className="formSubmit">Anfrage senden →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerTop">
            <div>
              <div className="footerBrand"><span>◈</span> ELPONIX</div>
              <p className="footerBrandDesc">
                Ihr Fachbetrieb für Elektrotechnik und Gebäudetechnik in Bielefeld und Umgebung.
              </p>
            </div>
            <div>
              <div className="footerColTitle">Leistungen</div>
              <ul className="footerLinks">
                <li><a href="#leistungen">Elektroinstallation</a></li>
                <li><a href="#leistungen">Gebäudeautomation</a></li>
                <li><a href="#leistungen">Industrieelektrik</a></li>
                <li><a href="#leistungen">Wartung & Prüfung</a></li>
              </ul>
            </div>
            <div>
              <div className="footerColTitle">Unternehmen</div>
              <ul className="footerLinks">
                <li><a href="#ueber">Über uns</a></li>
                <li><a href="#kunden">Referenzen</a></li>
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
            <span className="footerCopy">© 2024 Elponix GmbH · Stapenhorststraße 38, 33615 Bielefeld</span>
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