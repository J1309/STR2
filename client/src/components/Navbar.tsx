import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

interface NavbarProps {
  variant?: "dark" | "light" | "transparent";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/collections", label: "Collections" },
    { href: "/journal", label: "Journal" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <>
      <header
        className={`starline-global-header ${isScrolled ? "is-scrolled" : ""} variant-${variant}`}
      >
        <div className="starline-header-inner">
          <Link href="/" className="starline-brand-box">
            <span className="starline-brand-title">Starline</span>
            <span className="starline-brand-sub">Studio / 2026</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="starline-desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`starline-nav-link ${isActive ? "is-active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="starline-header-actions">
            <Link href="/contact" className="starline-header-cta">
              <span>Inquire</span>
              <ArrowUpRight size={14} />
            </Link>

            <button
              className="starline-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="starline-mobile-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="starline-mobile-drawer-inner">
              <nav className="starline-mobile-nav-list">
                {navLinks.map((link, idx) => {
                  const isActive = location === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`starline-mobile-nav-item ${isActive ? "is-active" : ""}`}
                    >
                      <span>0{idx + 1}</span>
                      <b>{link.label}</b>
                      <ArrowUpRight size={16} />
                    </Link>
                  );
                })}
              </nav>

              <div className="starline-mobile-drawer-footer">
                <div className="starline-mobile-contact-note">
                  <p className="kicker">Available Worldwide</p>
                  <a href="mailto:hello@starline.studio">hello@starline.studio</a>
                </div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="starline-mobile-instagram"
                >
                  <Instagram size={15} />
                  <span>@starline.studio</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
