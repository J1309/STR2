/**
 * STARLINE / ULTRA-MINIMALIST LUXURY EDITORIAL & CINEMATOGRAPHY
 * Inspired by Gione da Silva (gionedasilva.com)
 * Pure White Canvas, Deep Black Typography, Minimal Lines, Large Cinematic 16:9 Visuals,
 * Asymmetric Editorial Photography Spreads, and Zero Congestion.
 */
import DriftWall, { type DriftWallItem } from "@/components/DriftWall";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { studioStories, type StoryItem } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});

  const driftItems: DriftWallItem[] = [
    { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop", title: "Sierra Dusk", subtitle: "Glacial Basin" },
    { image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop", title: "Napa Valley Courtyard", subtitle: "Golden Vineyard Light" },
    { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", title: "Joshua Tree Bloom", subtitle: "Mojave Twilight" },
    { image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", title: "Santa Fe Adobe", subtitle: "Plaster & Shade" },
    { image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", title: "Studio Objects", subtitle: "Linen & Silver" },
    { image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop", title: "Utah Horizon", subtitle: "Salt & Dusk" },
    { image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", title: "Big Sur Coast", subtitle: "Pacific Horizon Mist" },
    { image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop", title: "High Sierra", subtitle: "35mm Analog Print" }
  ];

  return (
    <div className="starline-page-shell">
      <Navbar variant="transparent" />

      <main className="starline-page-main">
        {/* ===================================================================
            1. HERO: CINEMATIC FULLSCREEN AMBIENT VIDEO LOOP
            =================================================================== */}
        <section className="minimal-hero" id="top">
          <div className="minimal-hero-video-wrap">
            <video
              className="minimal-hero-video"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/vid/new_section_img.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="minimal-hero-content">
            <h1 className="minimal-hero-title">
              TELLING STORIES THAT OUTLAST THE SEASON
            </h1>
            <p className="minimal-hero-kicker">
              PHILADELPHIA &amp; WORLDWIDE DESTINATIONS
            </p>
          </div>
        </section>

        {/* ===================================================================
            2. PHILOSOPHY / REFINED EDITORIAL STATEMENT
            =================================================================== */}
        <section className="minimal-section">
          <div className="minimal-statement">
            <h2 className="minimal-statement-heading">
              Living wedding cinema &amp; fine-art 35mm photography
            </h2>
            <p className="minimal-statement-body">
              We approach each celebration with an unhurried perspective. No intrusive setups, no artificial theatrics—just honest human connection, natural light, and the quiet beauty of authentic moments captured with timeless grace.
            </p>
          </div>
        </section>

        {/* ===================================================================
            3. FEATURED CINEMA COMMISSIONS (GIONE DA SILVA 2-COLUMN DUO)
            =================================================================== */}
        <section className="gione-featured-section">
          <div className="gione-featured-header">
            <span className="minimal-overline">CINEMATIC COMMISSIONS</span>
            <h2 className="minimal-section-title">FEATURED CINEMA FILMS</h2>
          </div>

          <div className="gione-showcase-wrap">
            {/* Featured Film 1: Newport */}
            <div className="gione-featured-duo">
              <div
                className="gione-video-col"
                onClick={() => setPlayingVideos(prev => ({ ...prev, newport: true }))}
                role="button"
                tabIndex={0}
                aria-label="Play Newport Film"
              >
                {playingVideos["newport"] ? (
                  <video
                    src="https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-on-a-beach-at-sunset-42863-large.mp4"
                    autoPlay
                    controls
                    playsInline
                    className="gione-video-element"
                  />
                ) : (
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop"
                      alt="Historic Oceanfront Wedding in Newport, Rhode Island"
                      className="gione-video-img"
                      loading="lazy"
                    />
                    <div className="gione-play-circle-overlay">
                      <div className="gione-play-circle">
                        <Play size={18} fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="gione-story-col">
                <div className="gione-story-inner">
                  <p className="gione-story-overline">FEATURED VIDEO:</p>
                  <h3 className="gione-story-heading">
                    OCEANFRONT ESTATE<br />
                    NEWPORT,<br />
                    RHODE ISLAND
                  </h3>
                  <p className="gione-story-desc">
                    An iconic coastal celebration across historic oceanfront mansions and twilight Atlantic ocean breezes
                  </p>
                  <Link href="/contact" className="gione-story-btn">
                    <span>CONTACT US</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Film 2: Napa Valley (Reversed: Story on Left, Video on Right) */}
            <div className="gione-featured-duo is-reversed">
              <div
                className="gione-video-col"
                onClick={() => setPlayingVideos(prev => ({ ...prev, napa: true }))}
                role="button"
                tabIndex={0}
                aria-label="Play Napa Valley Film"
              >
                {playingVideos["napa"] ? (
                  <video
                    src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-in-a-forest-42861-large.mp4"
                    autoPlay
                    controls
                    playsInline
                    className="gione-video-element"
                  />
                ) : (
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
                      alt="Elegant & Heartfelt Napa Valley Vineyard Wedding"
                      className="gione-video-img"
                      loading="lazy"
                    />
                    <div className="gione-play-circle-overlay">
                      <div className="gione-play-circle">
                        <Play size={18} fill="currentColor" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="gione-story-col">
                <div className="gione-story-inner">
                  <p className="gione-story-overline">FEATURED VIDEO:</p>
                  <h3 className="gione-story-heading">
                    ELEGANT &amp; HEARTFELT<br />
                    NAPA VALLEY<br />
                    CALIFORNIA
                  </h3>
                  <p className="gione-story-desc">
                    A stunning harvest celebration overlooking rolling vineyard hills and private stone courtyards in Napa Valley
                  </p>
                  <Link href="/contact" className="gione-story-btn">
                    <span>CONTACT US</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. PHOTOGRAPHY SHOWCASE (HOW GIONE DA SILVA SHOWCASES IMAGES)
            =================================================================== */}
        <section className="minimal-section">
          <div className="minimal-photo-spread">
            <div className="minimal-photo-pair">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop"
                alt="Editorial Wedding Still 01"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
                alt="Editorial Wedding Still 02"
                loading="lazy"
              />
            </div>

            <div className="minimal-photo-info">
              <h2>Wedding Photography</h2>
              <p>
                As well as offering cinematic wedding videography across the United States and worldwide, our wedding photography is all about real and natural moments. Our aim is to capture the essence of your day in timeless images. Our photos are a combination of everything we are inspired by: documentary photography, street photography, portrait, fashion, nature, and light.
              </p>
              <Link href="/portfolio" className="minimal-text-link">
                <span>Find Out More</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. "IN PASSING" SIDE-BY-SIDE PHOTOGRAPHIC STREAM (DRIFTWALL)
            =================================================================== */}
        <section className="minimal-drift-section">
          <div className="minimal-drift-split-container">
            {/* Left Side: Written Content */}
            <div className="minimal-drift-sidebar">
              <p className="minimal-overline">ANALOG ARCHIVES</p>
              <h2 className="minimal-drift-title">
                In Passing —<br />
                Photographic Fragments
              </h2>
              <p className="minimal-drift-desc">
                A continuous, quiet stream of 35mm analog frames and natural light studies.
              </p>
              <div style={{ marginTop: "24px" }}>
                <Link href="/portfolio" className="minimal-text-link">
                  <span>View Full Gallery</span>
                </Link>
              </div>
            </div>

            {/* Right Side: DriftWall Image Component without image names */}
            <div className="minimal-drift-wall-wrap">
              <DriftWall
                items={driftItems}
                columns={3}
                tileWidth={210}
                tileHeight={270}
                gap={16}
                speed={10}
                showCaptions={false}
                pauseOnHover={true}
                onSelect={(item) => {
                  const found = studioStories.find((s) => s.title.toLowerCase().includes(item.title.toLowerCase().split(" ")[0]));
                  if (found) setSelectedStory(found);
                }}
              />
            </div>
          </div>
        </section>

        {/* ===================================================================
            7. MINIMALIST CLOSING CTA
            =================================================================== */}
        <section className="minimal-section" style={{ textAlign: "center", paddingTop: 0 }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <p className="minimal-overline">Available Worldwide</p>
            <h2 style={{ fontFamily: "var(--font-display-condensed)", fontSize: "clamp(3rem, 6vw, 5.6rem)", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 20px" }}>
              Let’s Give Your Story<br />A Lasting Frame
            </h2>
            <p style={{ fontSize: "14.5px", fontWeight: 300, lineHeight: 1.8, color: "var(--ink-muted)", margin: "0 auto 36px" }}>
              Currently accepting a limited number of bespoke destination commissions for the upcoming season.
            </p>
            <Link href="/contact" className="minimal-btn-outline" style={{ color: "var(--ink-primary)", borderColor: "var(--ink-primary)", background: "transparent" }}>
              <span>Get in Touch</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />

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
                  <p style={{ fontSize: "12px", color: "var(--ink-subtle)", margin: "4px 0 0" }}>{selectedStory.location} — {selectedStory.year}</p>
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
    </div>
  );
}
