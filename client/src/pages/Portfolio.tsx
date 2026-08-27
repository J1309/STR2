import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { studioStories, type StoryItem } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Camera, Film, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

type CategoryFilter = "All" | "Cinema Films" | "Intimate Celebrations" | "Wild Landscapes" | "Editorial & Brand";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Cinema Films",
    "Intimate Celebrations",
    "Wild Landscapes",
    "Editorial & Brand"
  ];

  // Enhanced stories with rich wedding & destination cinema titles
  const allPortfolioItems: (StoryItem & { aspect?: string; formatTag?: string })[] = [
    {
      id: "marrakech-monograph",
      title: "Epic Wedding in Marrakech",
      subtitle: "Lantern-lit riad courtyards and golden desert twilight",
      category: "Cinema Films" as any,
      location: "Marrakech, Morocco",
      year: "2026",
      coverImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
      ],
      fieldNotes: "A multi-day adventure documented across the ancient gardens of La Mamounia and the quiet dunes of Agafay. Shot entirely on bespoke anamorphic glass and natural 35mm film emulsions.",
      details: {
        camera: "Arri Alexa Mini LF & Leica M11",
        light: "Natural Moroccan Sun & Candlelight",
        season: "Autumn Solstice 2026",
        guests: "80 Guests"
      },
      aspect: "wide",
      formatTag: "4K CINEMA + 35MM"
    },
    {
      id: "riviera-monograph",
      title: "French Riviera Estate",
      subtitle: "Azure horizons and classical stone balustrades",
      category: "Cinema Films" as any,
      location: "Saint-Jean-Cap-Ferrat, France",
      year: "2026",
      coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop"
      ],
      fieldNotes: "Overlooking the Mediterranean, this cliffside villa celebration was captured with a documentary sensitivity prioritizing unrehearsed laughter and dusk champagne toasts.",
      details: {
        camera: "RED V-Raptor & Hasselblad 500C/M",
        light: "Mediterranean Dusk & Amber Torches",
        season: "Summer 2026",
        guests: "120 Guests"
      },
      aspect: "tall",
      formatTag: "4K ULTRA HD + KODAK 500T"
    },
    {
      id: "high-sierra",
      title: "High Sierra Dusk",
      subtitle: "A silent twilight over granite water",
      category: "Wild Landscapes",
      location: "High Sierra, California",
      year: "2026",
      coverImage: "/bg_hero_page.png",
      galleryImages: [
        "/bg_hero_page.png",
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
      ],
      fieldNotes: "Standing at the edge of the glacial shelf as the wind died down. The blue hour in the Sierra creates a cool gradient across the water that no studio light could ever manufacture.",
      details: {
        camera: "Medium Format Digital & 35mm Portra 400",
        light: "Natural Twilight / Blue Hour",
        season: "Late Autumn 2026"
      },
      aspect: "wide",
      formatTag: "ANALOG 35MM LEICA"
    },
    {
      id: "joshua-bloom",
      title: "Mojave Desert Wildflower",
      subtitle: "Golden hour textures across the Mojave",
      category: "Intimate Celebrations",
      location: "Joshua Tree, California",
      year: "2026",
      coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop"
      ],
      fieldNotes: "An intimate vow exchange tucked between ancient monzogranite boulders. The low desert sun carved gold edges around wild mustard blossoms.",
      details: {
        camera: "Contax G2 & Leica M11",
        light: "Golden Backlight & Candlelight",
        season: "Spring 2026",
        guests: "12 Close Friends & Family"
      },
      aspect: "standard",
      formatTag: "35MM PORTRA 400"
    },
    {
      id: "sunday-objects",
      title: "Sunday Objects & Linen",
      subtitle: "Still life studies of slow afternoon light",
      category: "Editorial & Brand",
      location: "Philadelphia Atelier",
      year: "2026",
      coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop"
      ],
      fieldNotes: "Explorations of form, texture, and organic vessels. We let raw afternoon sunlight rake across stone plinths and unbleached Belgian linen.",
      details: {
        camera: "Hasselblad 500C/M",
        light: "Window Natural Directional Light",
        season: "Summer 2026"
      },
      aspect: "tall",
      formatTag: "MEDIUM FORMAT 120"
    },
    {
      id: "amalfi-cliffs",
      title: "Amalfi Coast Romance",
      subtitle: "Cliffside vows overlooking the Tyrrhenian Sea",
      category: "Intimate Celebrations",
      location: "Positano, Italy",
      year: "2025",
      coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
      ],
      fieldNotes: "Captured amid the historic lemon groves and pastel terraces of Ravello. The sunset painted the limestone cliffs in radiant rose gold.",
      details: {
        camera: "Leica SL2-S & 35mm Summilux",
        light: "Golden Sunset & Ocean Glow",
        season: "Late Spring 2025"
      },
      aspect: "wide",
      formatTag: "4K CINEMA + LEICA STILLS"
    }
  ];

  const filteredStories = activeCategory === "All"
    ? allPortfolioItems
    : allPortfolioItems.filter((s) => s.category === activeCategory);

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* Creative Editorial Hero */}
        <section className="portfolio-hero-refined">
          <div className="portfolio-hero-inner">
            <div className="portfolio-hero-badge-wrap">
              <span className="portfolio-hero-badge">
                <Sparkles size={11} className="mr-1.5 inline" />
                THE ARCHIVE // 2024—2026
              </span>
              <span className="portfolio-hero-count">
                {filteredStories.length} COMMISSIONS INDEXED
              </span>
            </div>

            <h1 className="portfolio-main-title">
              SELECTED WORKS &amp; MONOGRAPHS
            </h1>

            <p className="portfolio-main-subtitle">
              An archival collection of wedding cinema, fine art photography, and destination celebrations documented across North America, Europe, and worldwide.
            </p>

            {/* Interactive Filter Pills */}
            <div className="portfolio-creative-filters">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    className={`portfolio-pill-btn ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    <span>{cat}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activePillIndicator"
                        className="portfolio-pill-glow"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Creative Gallery Grid with Smooth Hover Reveal */}
        <section className="portfolio-gallery-section">
          <div className="portfolio-creative-grid">
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  className={`portfolio-creative-card ${story.aspect ? `aspect-${story.aspect}` : ""}`}
                  onClick={() => setSelectedStory(story)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${story.title}`}
                >
                  <div className="portfolio-card-media">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      className="portfolio-card-img"
                      loading="lazy"
                    />

                    {/* Smooth Hover Name & Details Reveal Overlay */}
                    <div className="portfolio-hover-reveal-overlay">
                      <div className="portfolio-hover-content">
                        <div className="portfolio-hover-header">
                          <span className="portfolio-hover-tag">
                            {story.category === "Cinema Films" ? (
                              <>
                                <Film size={12} className="inline mr-1" /> CINEMA FILM
                              </>
                            ) : (
                              <>
                                <Camera size={12} className="inline mr-1" /> {story.category}
                              </>
                            )}
                          </span>
                          <span className="portfolio-hover-year">{story.year}</span>
                        </div>

                        <h2 className="portfolio-hover-title">{story.title}</h2>
                        
                        <p className="portfolio-hover-location">
                          {story.location}
                        </p>

                        <p className="portfolio-hover-subtitle">
                          {story.subtitle}
                        </p>

                        <div className="portfolio-hover-footer">
                          {story.formatTag && (
                            <span className="portfolio-format-pill">{story.formatTag}</span>
                          )}
                          <div className="portfolio-hover-cta">
                            <span>EXPLORE STORY</span>
                            <ArrowUpRight size={13} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clean Static Bottom Caption (Always Readable) */}
                  <div className="portfolio-card-caption">
                    <div className="portfolio-caption-left">
                      <h3 className="portfolio-caption-title">{story.title}</h3>
                      <span className="portfolio-caption-loc">{story.location}</span>
                    </div>
                    <span className="portfolio-caption-year">{story.year}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Archival Note */}
        <section className="minimal-section" style={{ borderTop: "1px solid var(--border-line)", padding: "70px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.26em", color: "var(--cobalt-accent)", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
              COMMISSION INQUIRIES
            </span>
            <h2 style={{ fontFamily: "var(--font-display-condensed)", fontSize: "clamp(2rem, 3.2vw, 2.8rem)", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 16px" }}>
              Have an Intimate Celebration in Mind?
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-muted)", margin: "0 0 32px" }}>
              We accept a limited number of 18 bespoke wedding cinematography and photography commissions each calendar year to ensure uncompromised devotion to each couple’s story.
            </p>
            <Link href="/contact" className="story-card-cta" style={{ margin: "0 auto", display: "inline-flex" }}>
              <span>Check Availability For Your Date</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </main>

      {/* Story Deep-Dive Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="story-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              className="story-modal-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="story-modal-header">
                <div>
                  <span className="story-modal-cat">{selectedStory.category}</span>
                  <h2 className="story-modal-title">{selectedStory.title}</h2>
                  <p style={{ fontSize: "12px", color: "var(--ink-subtle)", margin: "4px 0 0" }}>
                    {selectedStory.location} — {selectedStory.year}
                  </p>
                </div>
                <button
                  className="story-modal-close-btn"
                  onClick={() => setSelectedStory(null)}
                  aria-label="Close story"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="story-modal-body">
                <div className="story-modal-gallery">
                  {selectedStory.galleryImages.map((img, idx) => (
                    <img key={idx} src={img} alt={`${selectedStory.title} ${idx + 1}`} />
                  ))}
                </div>

                <div className="story-modal-notes">
                  <p style={{ margin: 0 }}>{selectedStory.fieldNotes}</p>
                </div>

                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                  <Link
                    href={`/contact?story=${selectedStory.id}`}
                    className="minimal-text-link"
                    onClick={() => setSelectedStory(null)}
                  >
                    <span>Inquire for Similar Commission</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer showClosingCta={true} />
    </div>
  );
}
