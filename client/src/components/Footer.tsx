import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Instagram, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface FooterProps {
  showClosingCta?: boolean;
}

type PolicyKey = "privacy" | "terms" | "licensing" | "cancellation" | "accessibility";

interface PolicyContent {
  title: string;
  lastUpdated: string;
  badge: string;
  sections: { heading: string; text: string }[];
}

const studioPolicies: Record<PolicyKey, PolicyContent> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "January 2026",
    badge: "Client Data Protection",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "When you submit an inquiry form or communicate with Starline Studio, we collect necessary contact information solely to provide photography consultations, quotes, and service agreements."
      },
      {
        heading: "2. Gallery Privacy",
        text: "All client online preview and download galleries are hosted on encrypted, private cloud infrastructure with optional PIN protection."
      }
    ]
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "January 2026",
    badge: "Booking Standards",
    sections: [
      {
        heading: "1. Booking & Retainers",
        text: "Dates are reserved exclusively upon execution of our written service contract and receipt of the booking retainer."
      },
      {
        heading: "2. Delivery Timelines",
        text: "Sneak peek galleries are delivered within 72 hours. Complete fine art cinema and image galleries are delivered within 6 to 8 weeks."
      }
    ]
  },
  licensing: {
    title: "Image & Film Licensing",
    lastUpdated: "January 2026",
    badge: "Intellectual Property",
    sections: [
      {
        heading: "1. Personal Usage & Printing Rights",
        text: "Clients receive an unrestricted, perpetual Personal Printing & Display License with all delivered high-resolution files."
      }
    ]
  },
  cancellation: {
    title: "Rescheduling & Retainer Policy",
    lastUpdated: "January 2026",
    badge: "Flexible Scheduling",
    sections: [
      {
        heading: "1. Rescheduling Guidelines",
        text: "If you need to reschedule your celebration date, retainers are transferable to any mutually available date within 12 months."
      }
    ]
  },
  accessibility: {
    title: "Accessibility Statement",
    lastUpdated: "January 2026",
    badge: "WCAG Conformance",
    sections: [
      {
        heading: "1. Our Commitment",
        text: "Starline Studio is committed to ensuring our digital experiences are fully accessible according to WCAG 2.1 AA standards."
      }
    ]
  }
};

export default function Footer({ showClosingCta = false }: FooterProps) {
  const [activePolicy, setActivePolicy] = useState<PolicyKey | null>(null);

  return (
    <footer className="minimal-footer">
      <div className="minimal-footer-inner">
        {showClosingCta && (
          <div className="minimal-footer-cta">
            <p className="minimal-overline">Available Worldwide</p>
            <h2>Let’s Give Your Story<br />A Lasting Frame</h2>
            <p>Currently accepting commissions for the upcoming destination calendar.</p>
            <Link href="/contact" className="minimal-btn-outline" style={{ color: "var(--ink-primary)", borderColor: "var(--ink-primary)", background: "transparent" }}>
              <span>Get in Touch</span>
            </Link>
          </div>
        )}

        <nav className="minimal-footer-nav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="minimal-footer-bottom">
          <div>
            <span>© {new Date().getFullYear()} Starline Studio. All rights reserved.</span>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <button
              onClick={() => setActivePolicy("privacy")}
              style={{ background: "transparent", border: 0, padding: 0, font: "inherit", color: "inherit", cursor: "pointer" }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActivePolicy("terms")}
              style={{ background: "transparent", border: 0, padding: 0, font: "inherit", color: "inherit", cursor: "pointer" }}
            >
              Terms
            </button>
            <button
              onClick={() => setActivePolicy("licensing")}
              style={{ background: "transparent", border: 0, padding: 0, font: "inherit", color: "inherit", cursor: "pointer" }}
            >
              Licensing
            </button>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "inherit" }}
          >
            <Instagram size={13} />
            <span>@starline.studio</span>
          </a>
        </div>
      </div>

      {/* Policy Modal */}
      <AnimatePresence>
        {activePolicy && (
          <motion.div
            className="story-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePolicy(null)}
          >
            <motion.div
              className="story-modal-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="story-modal-header">
                <div>
                  <span className="story-modal-cat">{studioPolicies[activePolicy].badge}</span>
                  <h2 className="story-modal-title">{studioPolicies[activePolicy].title}</h2>
                </div>
                <button
                  className="story-modal-close-btn"
                  onClick={() => setActivePolicy(null)}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="story-modal-body">
                {studioPolicies[activePolicy].sections.map((sec, idx) => (
                  <div key={idx} style={{ marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>
                      {sec.heading}
                    </h3>
                    <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-muted)", margin: 0 }}>
                      {sec.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
