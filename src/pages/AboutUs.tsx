import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LandingPage.scss";
import "./AboutUs.scss";

const AboutUs = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const logoUrl = `${process.env.PUBLIC_URL || ""}/logo.svg`;

  return (
    <div className="about-us-page">
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
            <a href="#integrations" onClick={(e) => handleNavClick(e, "integrations")}>
              Integrations
            </a>
            <a href="/about-us">About Us</a>
          </nav>
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </header>

      <main className="about-us-content">
        <div className="about-us-container">
          <h1>About Biometrica Health</h1>
          <p className="about-intro">
            Biometrica Health is dedicated to simplifying remote patient monitoring for health
            systems.
          </p>
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We believe health systems shouldn't be locked into vendor-specific RPM solutions. Our
              device-agnostic platform gives healthcare organizations the freedom to choose the best
              devices for their patients while maintaining a single, unified monitoring platform.
            </p>
          </section>
          <section className="about-section">
            <h2>Our Approach</h2>
            <p>
              By standardizing data ingestion and workflows across devices and vendors, Biometrica
              Health reduces operational complexity while enabling health systems to scale their RPM
              programs.
            </p>
          </section>
          <section className="about-section founder-section">
            <h2>Our Founder's Story</h2>
            <div className="founder-content">
              <div className="founder-text">
                <h3>Words from Our Founder</h3>
                <p>
                  Born in London and raised in Minnesota since age two, Anthony Dann's early years
                  were defined by a rare chronic illness and a life-saving surgery at Mayo Clinic --
                  a turning point that shaped his mission to expand access to quality care. After
                  studying entrepreneurship at the University of St. Thomas, he co-founded a
                  healthcare finance company supporting rural hospitals, then went on to lead major
                  health technology initiatives with Mayo Clinic, Cardinal Health, and Optum. Today,
                  as CEO of Biometrica Health, Anthony draws on both his lived patient experience
                  and professional expertise to redefine remote patient monitoring and bring
                  life-saving innovation to under-served communities.
                </p>
              </div>
              <div className="founder-image">
                <img
                  src={`${process.env.PUBLIC_URL || ""}/founders-story.png`}
                  alt="Anthony Dann, CEO of Biometrica Health"
                />
              </div>
            </div>
          </section>
          <section className="about-section team-section">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-member-image">
                  <div className="team-placeholder"></div>
                </div>
                <h3>Anthony Dann, PMP, CSM, ITIL</h3>
                <p className="team-title">Chief Executive Officer</p>
              </div>
              <div className="team-member">
                <div className="team-member-image">
                  <div className="team-placeholder"></div>
                </div>
                <h3>Nick Myers, MBA</h3>
                <p className="team-title">Chief Operating Officer</p>
              </div>
              <div className="team-member">
                <div className="team-member-image">
                  <div className="team-placeholder"></div>
                </div>
                <h3>Chris Tignanelli, MD, MBA, MS, FACS, FAMIA</h3>
                <p className="team-title">Chief Medical Officer</p>
              </div>
              <div className="team-member">
                <div className="team-member-image">
                  <div className="team-placeholder"></div>
                </div>
                <h3>Scott Campbell</h3>
                <p className="team-title">Chief Technology Officer</p>
              </div>
              <div className="team-member">
                <div className="team-member-image">
                  <div className="team-placeholder"></div>
                </div>
                <h3>Nichole Klatt</h3>
                <p className="team-title">Chief Scientific Officer</p>
              </div>
              <div className="team-member">
                <div className="team-member-image">
                  <div className="team-placeholder"></div>
                </div>
                <h3>Theodore Thompson, JD, LLM, CIPP-US</h3>
                <p className="team-title">Regulatory Counsel</p>
              </div>
            </div>
          </section>
          <section className="about-section contact-section">
            <h2>Contact Us</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>
                  Have questions about Biometrica Health or want to learn more about our platform?
                  We'd love to hear from you.
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <strong>Email:</strong>
                    <a href="mailto:info@biometricahealth.com">info@biometricahealth.com</a>
                  </div>
                  <div className="contact-item">
                    <strong>Phone:</strong>
                    <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

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
                Biometrica Health. Device-agnostic RPM platform for health systems
              </p>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#how-it-works">How It Works</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#integrations">Integrations</a>
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

export default AboutUs;
