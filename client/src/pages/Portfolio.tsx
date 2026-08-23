import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { studioStories, type StoryItem } from "@/data/studioData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

type CategoryFilter = "All" | "Intimate Celebrations" | "Wild Landscapes" | "Editorial & Brand" | "Studio & Objects";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Intimate Celebrations",
    "Wild Landscapes",
    "Editorial & Brand",
    "Studio & Objects"
  ];

  const filteredStories = activeCategory === "All"
    ? studioStories
    : studioStories.filter((s) => s.category === activeCategory);

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main">
        {/* Page Header */}
        <section className="portfolio-hero">
          <span className="gione-kicker">Portfolio Archive / 2024—2026</span>
          <h1 className="portfolio-title">
            Stories From<br />
            The Quiet Road
          </h1>
          <p className="portfolio-subtitle">
            A curated archive of destination wedding films, intimate celebrations, and fine art editorial monographs documented across Europe, North America, and beyond.
          </p>

          {/* Category Filter Pills */}
          <div className="portfolio-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`portfolio-filter-btn ${activeCategory === cat ? "is-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Stories Grid */}
        <section className="portfolio-grid-section">
          <div className="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="gione-story-card"
                  onClick={() => setSelectedStory(story)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="gione-story-media">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      loading="lazy"
                    />
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
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Dual-Format Archival Banner */}
        <section className="gione-manifesto-section" style={{ backgroundColor: "var(--bg-secondary)", padding: "90px clamp(24px, 6vw, 96px)" }}>
          <div className="gione-bespoke-strip" style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <div className="gione-bespoke-content">
              <span className="gione-kicker">Archival Craft & Dual-Format</span>
              <h4>Captured on authentic 35mm film & medium format digital</h4>
              <p>
                Every celebration is color-graded with precision to protect natural skin tones and organic silver grain for gallery wall printing.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/pricing" className="gione-btn-primary">
                <span>View Pricing & Packages</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link href="/about" className="gione-btn-secondary" style={{ color: "var(--ink-primary)", borderColor: "var(--border-strong)", background: "transparent" }}>
                <span>About The Process</span>
              </Link>
            </div>
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
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 35 }}
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

      <Footer />
    </div>
  );
}
