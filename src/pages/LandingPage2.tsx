import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "./LandingPage2.scss";

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [problemRef, isProblemVisible] = useIntersectionObserver();
  const [howItWorksRef, isHowItWorksVisible] = useIntersectionObserver();
  const [platformRef, isPlatformVisible] = useIntersectionObserver();
  const [capabilitiesRef, isCapabilitiesVisible] = useIntersectionObserver();
  const [complianceRef, isComplianceVisible] = useIntersectionObserver();
  const [finalCTARef, isFinalCTAVisible] = useIntersectionObserver();

  const handleLoginClick = (): void => {
    window.location.href = "https://portal.biometricahealth.com";
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    e.preventDefault();

    // If we're not on the landing page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're already on the landing page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleHeroCTAClick = (): void => {
    const ctaSection = document.getElementById("schedule-cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCTAClick = (): void => {
    // For now, this could open a modal or scroll to a contact form
    // Placeholder: could integrate with Calendly or contact form
    alert("Schedule a call functionality - to be integrated with scheduling system");
  };

  const logoUrl = `${process.env.PUBLIC_URL || ""}/logo-green.png`;
  const heroImageUrl = `${process.env.PUBLIC_URL || ""}/hero.jpg`;

  return (
    <div className="landing-page">
      <div className="hero-wrapper">
        {/* Header */}
        <header className="header">
          <div className="header-container">
            <a href="/" className="logo">
              <img src={logoUrl} alt="Biometrica Health" className="logo-img" />
            </a>
            <nav className="nav">
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, "how-it-works")}>
                How It Works
              </a>
              <a href="#capabilities" onClick={(e) => handleNavClick(e, "capabilities")}>
                Capabilities
              </a>
              <a href="#integrations" onClick={(e) => handleNavClick(e, "compliance")}>
                Compliance
              </a>
              <a href="/about-us">About Us</a>
            </nav>
            <button className="login-button" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="hero" style={{ backgroundImage: `url(${heroImageUrl})` }}>
          <div className="hero-container">
            <h1>
              <span className="title-line-1">One RPM platform.</span>
              <br />
              <span className="title-line-2">Any device.</span>
            </h1>
            <h2>
              Biometrica Health is the first device-agnostic remote patient monitoring platform
              built for health systems.
            </h2>

            <div className="hero-cta">
              <button className="cta-button-primary" onClick={handleHeroCTAClick}>
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Problem Section */}
      <section className="section section-alt" id="problem" ref={problemRef}>
        <div className={`section-container section-fade-up ${isProblemVisible ? "visible" : ""}`}>
          <h2 className="section-headline">
            Remote patient monitoring shouldn't mean managing dozens of vendors.
          </h2>
          <div className="section-content">
            <p className="section-intro">
              Health systems want to expand RPM programs, but today they face significant
              challenges:
            </p>
            <div className="problem-cards">
              <div
                className={`problem-card card-fade-up ${isProblemVisible ? "visible" : ""}`}
                style={{ transitionDelay: "400ms" }}
              >
                <p>
                  RPM programs are tied to specific devices and vendors, creating lock-in that's
                  hard to unwind
                </p>
              </div>
              <div
                className={`problem-card card-fade-up ${isProblemVisible ? "visible" : ""}`}
                style={{ transitionDelay: "500ms" }}
              >
                <p>
                  Different service lines use different tools, leading to inconsistent workflows and
                  reporting
                </p>
              </div>
              <div
                className={`problem-card card-fade-up ${isProblemVisible ? "visible" : ""}`}
                style={{ transitionDelay: "600ms" }}
              >
                <p>
                  Adding new devices means new integrations, contracts, and training, slowing scale
                </p>
              </div>
              <div
                className={`problem-card card-fade-up ${isProblemVisible ? "visible" : ""}`}
                style={{ transitionDelay: "700ms" }}
              >
                <p>
                  Data remains siloed in vendors' systems instead of where it needs to be, in the
                  health system's EHR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section" id="how-it-works" ref={howItWorksRef}>
        <div
          className={`section-container section-fade-up ${isHowItWorksVisible ? "visible" : ""}`}
        >
          <h2 className="section-headline">A unified RPM platform, without the vendor lock-in</h2>

          <div className="steps">
            <div
              className={`step card-fade-up ${isHowItWorksVisible ? "visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Connect any FDA-cleared device</h3>
                <p>
                  Biometrica Health integrates with a wide range of FDA-cleared remote monitoring
                  devices across manufacturers and modalities.
                </p>
              </div>
            </div>
            <div
              className={`step card-fade-up ${isHowItWorksVisible ? "visible" : ""}`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Standardize data and workflows</h3>
                <p>
                  Device data is normalized into a single platform, giving care teams consistent
                  views, alerts, and workflows regardless of device source.
                </p>
              </div>
            </div>
            <div
              className={`step card-fade-up ${isHowItWorksVisible ? "visible" : ""}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Monitor and act within existing systems</h3>
                <p>
                  Insights and alerts flow into established care team workflows and EHR
                  environments, reducing friction and administrative burden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section" id="capabilities" ref={capabilitiesRef}>
        <div
          className={`section-container section-fade-up ${isCapabilitiesVisible ? "visible" : ""}`}
        >
          <h2 className="section-headline">A complete RPM platform for health systems</h2>
          <p className="section-intro">
            Biometrica Health provides the core capabilities required to operate remote patient
            monitoring programs at scale.
          </p>
          <div className="capability-grid">
            <div
              className={`capability-card card-fade-up ${isCapabilitiesVisible ? "visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3>Device-agnostic data ingestion</h3>
              <p>
                Connect FDA-cleared devices across manufacturers and modalities into a single
                platform.
              </p>
            </div>
            <div
              className={`capability-card card-fade-up ${isCapabilitiesVisible ? "visible" : ""}`}
              style={{ transitionDelay: "500ms" }}
            >
              <h3>Unified monitoring dashboard</h3>
              <p>View patient data, trends, and alerts across devices and programs in one place.</p>
            </div>
            <div
              className={`capability-card card-fade-up ${isCapabilitiesVisible ? "visible" : ""}`}
              style={{ transitionDelay: "600ms" }}
            >
              <h3>Configurable alerts and thresholds</h3>
              <p>
                Support clinical protocols with customizable alerting based on patient-specific
                criteria.
              </p>
            </div>
            <div
              className={`capability-card card-fade-up ${isCapabilitiesVisible ? "visible" : ""}`}
              style={{ transitionDelay: "700ms" }}
            >
              <h3>Care team workflows</h3>
              <p>Assign, review, escalate, and document RPM activity using consistent workflows.</p>
            </div>
            <div
              className={`capability-card card-fade-up ${isCapabilitiesVisible ? "visible" : ""}`}
              style={{ transitionDelay: "800ms" }}
            >
              <h3>EHR integration</h3>
              <p>Integrate RPM data and alerts into existing electronic health record systems.</p>
            </div>
            <div
              className={`capability-card card-fade-up ${isCapabilitiesVisible ? "visible" : ""}`}
              style={{ transitionDelay: "900ms" }}
            >
              <h3>Secure, compliant data handling</h3>
              <p>Time-stamped data capture, auditability, and role-based access controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section section-alt" id="compliance" ref={complianceRef}>
        <div
          className={`section-container section-fade-up ${isComplianceVisible ? "visible" : ""}`}
        >
          <h2 className="section-headline">Built for healthcare compliance from day one</h2>
          <p className="section-intro">
            Biometrica Health is designed to meet the security and compliance expectations of health
            systems.
          </p>
          <div className="compliance-grid">
            <div
              className={`compliance-card card-fade-up ${isComplianceVisible ? "visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="compliance-card-content">
                <h3>HIPAA-compliant platform</h3>
                <p>
                  Designed to support protected health information, with BAAs available for health
                  system partners.
                </p>
              </div>
            </div>
            <div
              className={`compliance-card card-fade-up ${isComplianceVisible ? "visible" : ""}`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="compliance-card-content">
                <h3>SOC 2 compliant</h3>
                <p>
                  Controls and processes aligned with SOC 2 requirements to support enterprise
                  security reviews.
                </p>
              </div>
            </div>
            <div
              className={`compliance-card card-fade-up ${isComplianceVisible ? "visible" : ""}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="compliance-card-content">
                <h3>Hosted in Microsoft Azure</h3>
                <p>
                  Deployed in a secure, enterprise-grade cloud environment designed for healthcare
                  workloads.
                </p>
              </div>
            </div>
            <div
              className={`compliance-card card-fade-up ${isComplianceVisible ? "visible" : ""}`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="compliance-card-content">
                <h3>Role-based access and auditability</h3>
                <p>
                  Access controls and audit logs to support clinical, operational, and IT oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta" id="schedule-cta" ref={finalCTARef}>
        <div
          className={`final-cta-container section-fade-up ${isFinalCTAVisible ? "visible" : ""}`}
        >
          <h2>Standardize remote patient monitoring without vendor lock-in</h2>
          <p>
            Biometrica Health gives health systems one platform for all RPM programs—independent of
            device vendors.
          </p>
          <button className="cta-button-primary" onClick={handleCTAClick}>
            Schedule a Call
          </button>
          <p className="final-cta-microcopy">
            We'll walk through your current RPM setup and show how Biometrica Health can empower
            your existing workflows.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <img
                src={`${process.env.PUBLIC_URL || ""}/logo-white.svg`}
                alt="Biometrica Health"
                className="footer-logo"
              />
              <p className="footer-tagline">
                Biometrica Health. The device-agnostic RPM platform for health systems
              </p>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#how-it-works">How It Works</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#compliance">Compliance</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Biometrica Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
