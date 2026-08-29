import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Camera, ChevronLeft, ChevronRight, Eye, MapPin, Sparkles, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "wouter";

interface PhotoItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Estates & Coastal" | "California & West" | "Mountain & Desert" | "Intimate & Editorial";
  location: string;
  medium: string;
  year: string;
  image: string;
  aspect?: "portrait" | "landscape" | "tall";
}

const photographyGallery: PhotoItem[] = [
  {
    id: "photo-1",
    title: "Rosecliff Mansion Oceanfront Vows",
    subtitle: "Cliff Walk Atlantic breeze & twilight reception",
    category: "Estates & Coastal",
    location: "Newport, Rhode Island",
    medium: "35mm Portra 400 + Leica Primes",
    year: "2026",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall"
  },
  {
    id: "photo-2",
    title: "Meadowood Estate Golden Hour",
    subtitle: "Private harvest courtyard candlelit dinner",
    category: "California & West",
    location: "Napa Valley, California",
    medium: "Medium Format Digital & 35mm Hybrid",
    year: "2026",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
    aspect: "landscape"
  },
  {
    id: "photo-3",
    title: "High Sierra Twilight Still",
    subtitle: "Glacial reflection under alpine blue hour",
    category: "Mountain & Desert",
    location: "High Sierra, California",
    medium: "Kodak Portra 800",
    year: "2026",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    aspect: "portrait"
  },
  {
    id: "photo-4",
    title: "Dallas Atelier Bridal Editorial",
    subtitle: "Architectural modern romance & black-tie gala",
    category: "Intimate & Editorial",
    location: "Dallas, Texas",
    medium: "Contax 645 Medium Format",
    year: "2026",
    image: "/wd1.jpg",
    aspect: "tall"
  },
  {
    id: "photo-5",
    title: "Santa Fe Adobe Twilight Banquet",
    subtitle: "High desert warmth and handcrafted florals",
    category: "Mountain & Desert",
    location: "Santa Fe, New Mexico",
    medium: "Kodak Tri-X 400 Black & White",
    year: "2025",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    aspect: "landscape"
  },
  {
    id: "photo-6",
    title: "Big Sur Coastal Headlands",
    subtitle: "Pacific ocean spray & unscripted laughter",
    category: "California & West",
    location: "Big Sur, California",
    medium: "35mm Analog Portra 400",
    year: "2025",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    aspect: "portrait"
  },
  {
    id: "photo-7",
    title: "Historic Charleston Live Oak Terrace",
    subtitle: "Lowcountry evening gathering under Spanish moss",
    category: "Estates & Coastal",
    location: "Charleston, South Carolina",
    medium: "Medium Format Digital",
    year: "2025",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
    aspect: "landscape"
  },
  {
    id: "photo-8",
    title: "Sedona Red Rock Vows",
    subtitle: "Canyon breeze and intimate sunset promise",
    category: "Mountain & Desert",
    location: "Sedona, Arizona",
    medium: "Kodak Portra 400 Film",
    year: "2025",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall"
  }
];

const categories = [
  "ALL COMMISSIONS",
  "Estates & Coastal",
  "California & West",
  "Mountain & Desert",
  "Intimate & Editorial"
] as const;

export default function PhotographyPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL COMMISSIONS");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroParallax = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const filteredPhotos = activeCategory === "ALL COMMISSIONS"
    ? photographyGallery
    : photographyGallery.filter((p) => p.category === activeCategory);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <div className="starline-page-shell">
      <Navbar variant="transparent" />

      <main className="starline-page-main">
        {/* ===================================================================
            1. FULL-BLEED EDITORIAL PARALLAX HERO BANNER
            =================================================================== */}
        <section className="portfolio-hero-section" ref={heroRef}>
          <div className="portfolio-hero-bg-container">
            <motion.div
              className="portfolio-hero-bg-img"
              style={{
                y: heroParallax,
                backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop')`
              }}
            />
            <div className="portfolio-hero-overlay" />
          </div>

          <div className="portfolio-hero-content">
            <span className="portfolio-hero-kicker">STARLINE ATELIER // 35MM ARCHIVE</span>
            <h1 className="portfolio-hero-title">Wedding Photography Portfolio</h1>
            <p className="portfolio-hero-subtitle">
              Living heirlooms of natural light, quiet grace, and 35mm analog emulsion
            </p>
          </div>
        </section>

        {/* ===================================================================
            2. REFINED EDITORIAL CATEGORY FILTER BAR
            =================================================================== */}
        <section className="portfolio-filter-bar-section">
          <div className="portfolio-filter-container">
            <div className="portfolio-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`portfolio-filter-tab ${activeCategory === cat ? "is-active" : ""}`}
                >
                  <span>{cat.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. CURATED EDITORIAL MASONRY GALLERY
            =================================================================== */}
        <section className="portfolio-gallery-section">
          <div className="portfolio-gallery-container">
            <motion.div layout className="portfolio-photo-grid">
              <AnimatePresence>
                {filteredPhotos.map((photo, idx) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, y: 45, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.75,
                      ease: [0.23, 1, 0.32, 1],
                      delay: (idx % 3) * 0.1
                    }}
                    className={`portfolio-photo-card aspect-${photo.aspect || "portrait"}`}
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <div className="portfolio-photo-inner">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="portfolio-photo-img"
                        loading="lazy"
                      />
                      <div className="portfolio-photo-overlay">
                        <div className="portfolio-photo-top-meta">
                          <span className="portfolio-badge-pill">{photo.medium}</span>
                          <span className="portfolio-badge-pill">{photo.year}</span>
                        </div>
                        <div className="portfolio-photo-bottom-meta">
                          <h3 className="portfolio-card-heading">{photo.title}</h3>
                          <p className="portfolio-card-location">
                            <MapPin size={12} />
                            <span>{photo.location}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ===================================================================
            4. EDITORIAL CRAFT PHILOSOPHY BREAK
            =================================================================== */}
        <section className="portfolio-statement-break">
          <div className="portfolio-statement-inner">
            <span className="minimal-overline">THE PHOTOGRAPHIC APPROACH</span>
            <blockquote className="portfolio-quote">
              “We look for the quiet moments in between: the deep breath before walking down the aisle, the golden light grazing an evening banquet, and spontaneous laughter shared with those you love most.”
            </blockquote>
            <p className="portfolio-quote-author">— SAJAN // PRINCIPAL ARTIST</p>
          </div>
        </section>

        {/* ===================================================================
            5. BESPOKE INQUIRY BANNER
            =================================================================== */}
        <section className="portfolio-closing-cta">
          <div className="portfolio-closing-inner">
            <span className="minimal-overline">BESPOKE COMMISSIONS</span>
            <h2 className="portfolio-closing-title">Document Your Celebration</h2>
            <p className="portfolio-closing-desc">
              Operating out of Dallas, Texas and accepting 18 bespoke wedding commissions worldwide each year.
            </p>
            <div style={{ marginTop: "28px" }}>
              <Link href="/contact" className="minimal-btn-solid">
                <span>INQUIRE FOR YOUR DATE</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================================================
          FULLSCREEN LUXURY LIGHTBOX MODAL
          =================================================================== */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className="starline-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="starline-lightbox-close"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            <button
              className="starline-lightbox-nav prev"
              onClick={handlePrevPhoto}
              aria-label="Previous Photo"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="starline-lightbox-nav next"
              onClick={handleNextPhoto}
              aria-label="Next Photo"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              className="starline-lightbox-card"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="starline-lightbox-img-wrap">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="starline-lightbox-img"
                />
              </div>

              <div className="starline-lightbox-caption-bar">
                <div className="starline-lightbox-caption-left">
                  <span className="starline-lightbox-meta-tag">
                    {activePhoto.location} — {activePhoto.year}
                  </span>
                  <h3 className="starline-lightbox-photo-title">{activePhoto.title}</h3>
                  <p className="starline-lightbox-photo-sub">{activePhoto.subtitle}</p>
                </div>
                <div className="starline-lightbox-caption-right">
                  <span className="starline-lightbox-medium-pill">{activePhoto.medium}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer showClosingCta={false} />
    </div>
  );
}
