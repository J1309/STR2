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
    { image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop", title: "Marrakech Courtyard", subtitle: "Golden Lantern Light" },
    { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", title: "Joshua Tree Bloom", subtitle: "Mojave Twilight" },
    { image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", title: "Santa Fe Adobe", subtitle: "Plaster & Shade" },
    { image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", title: "Studio Objects", subtitle: "Linen & Silver" },
    { image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop", title: "Utah Horizon", subtitle: "Salt & Dusk" },
    { image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", title: "Amalfi Coast", subtitle: "Tyrrhenian Mist" },
    { image: "/bg_hero_page.png", title: "High Sierra", subtitle: "35mm Analog Print" }
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
              poster="/bg_hero_page.png"
            >
              <source
                src="/vid/hero-video.mp4"
                type="video/mp4"
              />
              <source
                src="/vid/From%20Klickpin.com-%20Dreamy%20fall%20outfit%20ideas%20for%20your%20next%20inspiration%20board%20designed%20for%20people%20who%20want%20results%20that%20look%20intentional-pin-id-7315.mp4"
                type="video/mp4"
              />
              <img
                src="/bg_hero_page.png"
                alt="Cinematic Destination Wedding"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
            2. EDITORIAL STATEMENT / MANIFESTO (PHILADELPHIA ATELIER + BIG WD1.JPG)
            =================================================================== */}
        <section className="minimal-section" id="manifesto">
          <div className="minimal-statement-grid">
            <div className="minimal-statement-left">
              <span className="minimal-statement-tag">ATELIER PHILADELPHIA</span>
              <h2>
                Philadelphia &amp; Destination<br />
                Wedding Videographer<br />
                Photographer
              </h2>
              <p className="minimal-statement-lead">
                Based in Philadelphia, Starline crafts living heirlooms of cinema and 35mm analog photography for couples who seek artful elegance, honest emotion, and enduring memory across the United States and abroad.
              </p>
              <div className="minimal-statement-meta">
                <div className="meta-block">
                  <span className="meta-label">PRIMARY HUBS</span>
                  <span className="meta-val">PHILADELPHIA • NEW YORK • WORLDWIDE</span>
                </div>
                <div className="meta-block">
                  <span className="meta-label">ANNUAL COMMISSIONS</span>
                  <span className="meta-val">LIMITED TO 18 CELEBRATIONS PER YEAR</span>
                </div>
              </div>
            </div>

            <div className="minimal-statement-right-media">
              <div className="statement-portrait-frame">
                <img
                  src="/wd1.jpg"
                  alt="Philadelphia & Destination Wedding"
                  className="statement-portrait-img"
                  loading="lazy"
                />
                <div className="statement-portrait-badge">
                  <span>PHILADELPHIA ATELIER</span>
                  <span>35MM ARCHIVAL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. FEATURED VIDEO SHOWCASES (DISTINCT 16:9 PLAYER + LIGHT THEMED STORY CARD)
            =================================================================== */}
        <section className="minimal-section minimal-showcase-section" style={{ paddingTop: 0 }}>
          <div className="minimal-section-header">
            <span className="minimal-section-tag">CINEMATIC COMMISSIONS</span>
            <h2 className="minimal-section-title">FEATURED CINEMA FILMS</h2>
          </div>

          <div className="minimal-showcase-wrap">
            {/* Featured Film 1: Marrakech */}
            <div className="featured-showcase-row">
              <div
                className="featured-video-frame"
                onClick={() => setPlayingVideos(prev => ({ ...prev, marrakech: true }))}
                role="button"
                tabIndex={0}
                aria-label="Play Marrakech Film"
              >
                {playingVideos["marrakech"] ? (
                  <video
                    src="https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-on-a-beach-at-sunset-42863-large.mp4"
                    autoPlay
                    controls
                    playsInline
                    className="featured-video-element"
                  />
                ) : (
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop"
                      alt="Epic Wedding in Marrakech"
                      className="featured-video-poster"
                      loading="lazy"
                    />
                    <div className="minimal-play-btn">
                      <div className="minimal-play-icon">
                        <Play size={22} fill="currentColor" />
                      </div>
                      <span className="play-pulse-ring" />
                    </div>
                    <div className="featured-media-badge">
                      <span>PLAY 4K FILM // 08:45</span>
                    </div>
                  </>
                )}
              </div>

              <div className="featured-story-light-card">
                <div className="story-card-top">
                  <span className="story-card-num">01 / DESTINATION CELEBRATION</span>
                  <span className="story-card-pill">MARRAKECH • MOROCCO</span>
                </div>

                <h3 className="story-card-title">Epic Wedding in Marrakech</h3>
                
                <p className="story-card-quote">
                  “Lantern-lit riad courtyards, golden desert twilight, and an untamed romance echoing through the ancient palms.”
                </p>

                <p className="story-card-narrative">
                  An unforgettable multi-day celebration documented across the historic gardens of La Mamounia and the quiet dunes of Agafay. Shot entirely on bespoke anamorphic glass and natural 35mm film emulsions.
                </p>

                <div className="story-card-telemetry">
                  <div className="story-telemetry-item">
                    <span className="story-tel-label">FORMAT</span>
                    <span className="story-tel-val">4K CINEMA + 35MM LEICA</span>
                  </div>
                  <div className="story-telemetry-item">
                    <span className="story-tel-label">SOUNDTRACK</span>
                    <span className="story-tel-val">BESPOKE ACOUSTIC SCORE</span>
                  </div>
                  <div className="story-telemetry-item">
                    <span className="story-tel-label">SEASONS</span>
                    <span className="story-tel-val">AUTUMN SOLSTICE</span>
                  </div>
                </div>

                <div className="story-card-bottom">
                  <Link href="/portfolio" className="story-card-cta">
                    <span>Explore Full Gallery &amp; Film</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Film 2: French Riviera */}
            <div className="featured-showcase-row is-reversed">
              <div
                className="featured-video-frame"
                onClick={() => setPlayingVideos(prev => ({ ...prev, riviera: true }))}
                role="button"
                tabIndex={0}
                aria-label="Play French Riviera Film"
              >
                {playingVideos["riviera"] ? (
                  <video
                    src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-in-a-forest-42861-large.mp4"
                    autoPlay
                    controls
                    playsInline
                    className="featured-video-element"
                  />
                ) : (
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
                      alt="Elegant French Riviera Wedding"
                      className="featured-video-poster"
                      loading="lazy"
                    />
                    <div className="minimal-play-btn">
                      <div className="minimal-play-icon">
                        <Play size={22} fill="currentColor" />
                      </div>
                      <span className="play-pulse-ring" />
                    </div>
                    <div className="featured-media-badge">
                      <span>PLAY 4K FILM // 10:12</span>
                    </div>
                  </>
                )}
              </div>

              <div className="featured-story-light-card">
                <div className="story-card-top">
                  <span className="story-card-num">02 / MEDITERRANEAN ESTATE</span>
                  <span className="story-card-pill">CÔTE D'AZUR • FRANCE</span>
                </div>

                <h3 className="story-card-title">Heartfelt Riviera Celebration</h3>
                
                <p className="story-card-quote">
                  “Azure horizons, classical stone balustrades, and quiet candlelight drifting over the Mediterranean sea.”
                </p>

                <p className="story-card-narrative">
                  Overlooking Saint-Jean-Cap-Ferrat, this intimate cliffside villa celebration was captured with a documentary sensitivity that prioritized unrehearsed laughter, heartfelt vows, and dusk champagne toasts.
                </p>

                <div className="story-card-telemetry">
                  <div className="story-telemetry-item">
                    <span className="story-tel-label">FORMAT</span>
                    <span className="story-tel-val">4K ULTRA HD + KODAK 500T</span>
                  </div>
                  <div className="story-telemetry-item">
                    <span className="story-tel-label">SOUNDTRACK</span>
                    <span className="story-tel-val">LIVE CELLO &amp; PIANO SUITE</span>
                  </div>
                  <div className="story-telemetry-item">
                    <span className="story-tel-label">SEASONS</span>
                    <span className="story-tel-val">MIDSUMMER TWILIGHT</span>
                  </div>
                </div>

                <div className="story-card-bottom">
                  <Link href="/portfolio" className="story-card-cta">
                    <span>Explore Full Gallery &amp; Film</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. CRAFT VS COMMODITY (QUIET PHILOSOPHICAL PAUSE)
            =================================================================== */}
        <section className="minimal-quote-section">
          <div className="minimal-quote-inner">
            <p className="minimal-quote-title">Craft vs Commodity</p>
            <blockquote className="minimal-quote-text">
              “We don’t sell videos, we craft films. Amid all the beauty, the laughter, the love and tears of any wedding day, we create a celebration of you in a beautiful film crafted in our unique style. It is about transforming the events of your wedding into a living, lasting memory.”
            </blockquote>
          </div>
        </section>

        {/* ===================================================================
            5. PHOTOGRAPHY SHOWCASE (HOW GIONE DA SILVA SHOWCASES IMAGES)
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
                As well as offering cinematic wedding videography for London and beyond, our wedding photography is all about real and natural moments. Our aim is to capture the essence of your day in timeless images. Our photos are a combination of everything we are inspired by: documentary photography, street photography, portrait, fashion, nature, and light.
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
