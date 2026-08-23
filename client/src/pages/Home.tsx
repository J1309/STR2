/**
 * STARLINE / LUXURY EDITORIAL CINEMATOGRAPHY & PHOTOGRAPHY
 * Inspired by Gione da Silva (gionedasilva.com)
 * Features: Pure Luxury White, Deep Black, Royal Blue, Tall Condensed Display Headlines,
 * Cinematic Video Hero, Widescreen Asymmetrical Film Showcases, "In Passing" 3D DriftWall Stream,
 * and Uncongested Editorial Whitespace.
 */
import DriftWall, { type DriftWallItem } from "@/components/DriftWall";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { investmentTiers, studioStories, type StoryItem } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Play, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  // Featured film showcases
  const featuredShowcases = [
    {
      id: "marrakech-adventure",
      kicker: "Featured Wedding Film",
      title: "Epic Adventure in Marrakech, Morocco",
      description: "An extraordinary multi-day destination celebration woven through the terracotta ramparts of Marrakech, lantern-lit desert courtyards at La Pause, and the legendary gardens of La Mamounia.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-on-a-beach-at-sunset-42863-large.mp4",
      tags: ["Marrakech, Morocco", "Destination Cinema", "Dual-Format 35mm"],
      reversed: false
    },
    {
      id: "lake-como-monograph",
      kicker: "Featured Destination Monograph",
      title: "Villa Balbianello, Lake Como",
      description: "Intimate vows overlooking the silent cypress shores of Lake Como. Captured on medium format digital for breathtaking tonal range and authentic 35mm analog film for tactile romance.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-in-a-forest-42861-large.mp4",
      tags: ["Lake Como, Italy", "Fine Art Photography", "Archival Heirloom"],
      reversed: true
    }
  ];

  const driftItems: DriftWallItem[] = [
    { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", title: "Sierra Dusk", subtitle: "Glacial Basin" },
    { image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop", title: "Marrakech Courtyard", subtitle: "Golden Lantern Light" },
    { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", title: "Joshua Tree Bloom", subtitle: "Mojave Twilight" },
    { image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", title: "Santa Fe Adobe", subtitle: "Plaster & Shade" },
    { image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", title: "Studio Linen", subtitle: "Object Studies" },
    { image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop", title: "Utah Horizon", subtitle: "Salt & Dusk" },
    { image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", title: "Amalfi Coast", subtitle: "Tyrrhenian Mist" },
    { image: "/bg_hero_page.png", title: "High Sierra", subtitle: "35mm Analog Print" }
  ];

  const pressLogos = [
    "VOGUE WEDDINGS",
    "HARPER'S BAZAAR",
    "JUNEBUG WEDDINGS",
    "RANGEFINDER",
    "THE LANE",
    "WEDDING SPARROW"
  ];

  return (
    <div className="starline-page-shell">
      <Navbar variant="transparent" />

      <main className="starline-page-main">
        {/* ===================================================================
            1. FULL-WIDTH CINEMATIC AMBIENT VIDEO HERO
            =================================================================== */}
        <section className="gione-hero-stage" id="top" aria-label="Hero showcase">
          <div className="gione-hero-media-wrap">
            <video
              className="gione-hero-video"
              autoPlay
              loop
              muted
              playsInline
              poster="/bg_hero_page.png"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-on-a-beach-at-sunset-42863-large.mp4"
                type="video/mp4"
              />
              <img
                src="/bg_hero_page.png"
                alt="Cinematic Destination Wedding"
                className="gione-hero-fallback-img"
              />
            </video>
            <div className="gione-hero-overlay" />
          </div>

          <div className="gione-hero-content">
            <motion.p
              className="gione-hero-kicker"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Acclaimed Destination Wedding Videographer & Photographer
            </motion.p>

            <motion.h1
              className="gione-hero-headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
            >
              Telling Your Story Through<br />
              <em>Beautiful & Meaningful</em> Imagery
            </motion.h1>

            <motion.p
              className="gione-hero-subtext"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We travel worldwide documenting live events, bespoke celebrations, and intimate editorial commissions with unmatched artistry.
            </motion.p>

            <motion.div
              className="gione-hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <Link href="/portfolio" className="gione-btn-primary">
                <span>Explore Portfolio</span>
                <ArrowUpRight size={15} />
              </Link>

              <button
                className="gione-btn-secondary"
                onClick={() => setActiveVideoModal("https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-on-a-beach-at-sunset-42863-large.mp4")}
                aria-label="Play Featured Showreel"
              >
                <Play size={14} fill="currentColor" />
                <span>Watch Showreel</span>
              </button>
            </motion.div>
          </div>

          <a href="#manifesto" className="gione-hero-scroll-indicator" aria-label="Scroll to content">
            <span>Scroll</span>
            <ArrowDown size={14} />
          </a>
        </section>

        {/* ===================================================================
            2. SPACIOUS EDITORIAL MANIFESTO (PURE LUXURY WHITE)
            =================================================================== */}
        <section className="gione-manifesto-section" id="manifesto">
          <div className="gione-manifesto-grid">
            <div className="gione-manifesto-left">
              <span className="gione-kicker">Our Philosophy</span>
              <h2>
                London & Destination<br />
                Wedding Filmmaker<br />
                & Photographer
              </h2>
              <p>
                Based in California & London, traveling wherever an extraordinary love story is unfolding.
              </p>
            </div>

            <div className="gione-manifesto-right">
              <div className="manifesto-block">
                <h3>Unparalleled Expertise for the Discerning Client</h3>
                <p>
                  In a world of options, we stand out as specialists, not commodities. Our expertise is honed, precise, and tailored to those who seek the extraordinary. For those who value craft over the ordinary, our commissions reflect relentless dedication, emotional intuition, and timeless aesthetic perspective.
                </p>
              </div>

              <div className="manifesto-block">
                <h3>Crafting Unique Experiences for the Adventurous</h3>
                <p>
                  We cater to a clientele that knows what they want—visionaries who appreciate boldness, intimacy, and high-fashion nuance. Together, we craft experiences as unique as they are luxurious, setting enduring artistic standards rather than chasing temporary trends.
                </p>
              </div>

              <div className="manifesto-block">
                <h3>Bespoke Artistry Tailored to Your Vision</h3>
                <p>
                  Every celebration possesses its own rhythm, light, and geometry. We seamlessly fuse dual-format medium format digital clarity with the silver organic grain of authentic 35mm film, creating an indelible archive you will cherish for generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. FEATURED WIDESCREEN FILM & PHOTO SHOWCASES
            =================================================================== */}
        <section className="gione-showcase-section">
          <div className="gione-showcase-inner">
            {featuredShowcases.map((showcase) => (
              <div
                key={showcase.id}
                className={`gione-feature-card ${showcase.reversed ? "is-reversed" : ""}`}
              >
                <div
                  className="gione-feature-media"
                  onClick={() => setActiveVideoModal(showcase.videoUrl)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Watch ${showcase.title}`}
                >
                  <img src={showcase.image} alt={showcase.title} loading="lazy" />
                  <div className="gione-feature-play-overlay">
                    <div className="gione-play-circle">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="gione-feature-copy">
                  <span className="gione-kicker">{showcase.kicker}</span>
                  <h3 className="gione-feature-title">{showcase.title}</h3>
                  <p className="gione-feature-desc">{showcase.description}</p>

                  <div className="gione-feature-tags">
                    {showcase.tags.map((tag) => (
                      <span key={tag} className="gione-feature-tag">{tag}</span>
                    ))}
                  </div>

                  <Link href="/portfolio" className="gione-feature-link">
                    <span>View Complete Gallery</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            4. "IN PASSING" 3D TACTILE PHOTOGRAPHIC STREAM (DRIFTWALL)
            =================================================================== */}
        <section className="gione-in-passing-section">
          <div className="gione-in-passing-inner">
            <div className="gione-section-head" style={{ textAlign: "center", margin: "0 auto 48px" }}>
              <span className="gione-kicker">Photographic Fragments</span>
              <h2>In Passing — A Drifting Archive</h2>
              <p style={{ margin: "0 auto" }}>
                A continuous, tactile stream of 35mm film frames, light studies, and candid moments caught between chapters.
              </p>
            </div>

            <DriftWall
              items={driftItems}
              columns={4}
              tileWidth={230}
              tileHeight={300}
              gap={20}
              speed={12}
              pauseOnHover={true}
              onSelect={(item) => {
                const found = studioStories.find((s) => s.title.toLowerCase().includes(item.title.toLowerCase().split(" ")[0]));
                if (found) setSelectedStory(found);
              }}
            />
          </div>
        </section>

        {/* ===================================================================
            5. CURATED PORTFOLIO ARCHIVE (SPACIOUS LUXURY GRID)
            =================================================================== */}
        <section className="gione-gallery-section">
          <div className="gione-gallery-inner">
            <div className="gione-section-head">
              <span className="gione-kicker">Selected Works</span>
              <h2>Visual Stories & Commissions</h2>
              <p>
                A curated selection of recent celebrations, editorial portraits, and destination monographs from across Europe, North America, and beyond.
              </p>
            </div>

            <div className="gione-gallery-grid">
              {studioStories.slice(0, 6).map((story) => (
                <div
                  key={story.id}
                  className="gione-story-card"
                  onClick={() => setSelectedStory(story)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="gione-story-media">
                    <img src={story.coverImage} alt={story.title} loading="lazy" />
                    <span className="gione-story-media-cat">{story.category}</span>
                  </div>

                  <div className="gione-story-meta">
                    <div className="gione-story-meta-row">
                      <span>{story.location}</span>
                      <span>{story.year}</span>
                    </div>
                    <h3 className="gione-story-title">{story.title}</h3>
                    <p className="gione-story-subtitle">{story.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <Link href="/portfolio" className="gione-btn-primary">
                <span>View All Portfolio Stories</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. PACKAGES & INCLUSIONS (PURE LUXURY WHITE CARDS)
            =================================================================== */}
        <section className="gione-pricing-section">
          <div className="gione-pricing-inner">
            <div className="gione-section-head" style={{ textAlign: "center", margin: "0 auto 50px" }}>
              <span className="gione-kicker">Transparent Pricing</span>
              <h2>Collections & Inclusions</h2>
              <p style={{ margin: "0 auto" }}>
                Every commission includes master high-resolution deliverables, 4K cinema master files, online private cloud gallery hosting, and unrestricted lifetime print rights.
              </p>
            </div>

            <div className="gione-pricing-grid">
              {investmentTiers.slice(0, 3).map((tier) => (
                <div
                  key={tier.id}
                  className={`gione-package-card ${tier.featured ? "is-featured-package" : ""}`}
                >
                  {tier.featured && (
                    <div className="gione-package-ribbon">
                      <Sparkles size={12} />
                      <span>Signature Experience</span>
                    </div>
                  )}

                  <div>
                    <div className="gione-package-header">
                      <span className="gione-package-coverage">{tier.coverage}</span>
                      <h3 className="gione-package-title">{tier.name}</h3>
                      <p className="gione-package-tagline">{tier.tagline}</p>
                    </div>

                    <div className="gione-package-price-box">
                      <span className="gione-package-price">{tier.price}</span>
                      <span className="gione-package-price-sub">All-inclusive taxes & base travel</span>
                    </div>

                    <ul className="gione-inclusions-list">
                      {tier.inclusions.slice(0, 5).map((inc, i) => (
                        <li key={i}>
                          <Check size={14} className="gione-inclusion-check" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?package=${tier.id}`}
                    className="gione-package-btn"
                  >
                    <span>Reserve Date</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              ))}
            </div>

            <div className="gione-bespoke-strip">
              <div className="gione-bespoke-content">
                <h4>Planning a multi-day international voyage or custom celebration?</h4>
                <p>We craft tailored multi-destination proposals for ceremonies in Europe, Asia, and remote wilderness venues.</p>
              </div>
              <Link href="/contact" className="gione-btn-primary">
                <span>Request Custom Proposal</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. PRESS & ACCOLADES RIBBON (MONOCHROME LUXURY)
            =================================================================== */}
        <section className="gione-press-strip">
          <div className="gione-press-inner">
            <p className="gione-press-kicker">Featured In Editorial Publications Worldwide</p>
            <div className="gione-press-logos">
              {pressLogos.map((logo) => (
                <div key={logo} className="gione-press-item">
                  <span>{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            className="story-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoModal(null)}
          >
            <div
              className="story-modal-container"
              style={{ maxWidth: "1000px", padding: "20px", background: "#000000" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "12px" }}>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    border: 0,
                    color: "#ffffff",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer"
                  }}
                  aria-label="Close video"
                >
                  <X size={20} />
                </button>
              </div>
              <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
                <video
                  src={activeVideoModal}
                  autoPlay
                  controls
                  playsInline
                  style={{ width: "100%", height: "100%", borderRadius: "12px" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  <p className="story-modal-loc">{selectedStory.location} — {selectedStory.year}</p>
                </div>
                <button
                  className="story-modal-close-btn"
                  onClick={() => setSelectedStory(null)}
                  aria-label="Close story"
                >
                  <X size={20} />
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

                <div style={{ marginTop: "28px", display: "flex", justifyContent: "flex-end" }}>
                  <Link
                    href={`/contact?story=${selectedStory.id}`}
                    className="gione-btn-primary"
                    onClick={() => setSelectedStory(null)}
                  >
                    <span>Inquire for Similar Commission</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
