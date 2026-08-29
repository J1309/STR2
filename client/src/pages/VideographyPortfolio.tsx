import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, Volume2, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface VideoFilmItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Estates & Coastal" | "California & West" | "Mountain & Desert" | "Intimate Vows";
  location: string;
  year: string;
  coverImage: string;
  videoUrl: string;
  duration: string;
  details: string;
}

const videographyFilms: VideoFilmItem[] = [
  {
    id: "film-1",
    title: "Oceanfront Estate // Newport",
    subtitle: "Gilded Age mansions along the Atlantic Cliff Walk",
    category: "Estates & Coastal",
    location: "Newport, Rhode Island",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-on-a-beach-at-sunset-42863-large.mp4",
    duration: "4:32",
    details: "Shot on Arri Alexa Mini LF & 35mm Anamorphic Primes"
  },
  {
    id: "film-2",
    title: "Meadowood Vineyard // Napa Valley",
    subtitle: "Harvest golden hour & private courtyard candlelit banquet",
    category: "California & West",
    location: "Napa Valley, California",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-in-a-forest-42861-large.mp4",
    duration: "5:18",
    details: "Shot on RED V-Raptor & Leica Summilux Glass"
  },
  {
    id: "film-3",
    title: "High Sierra Twilight Vows",
    subtitle: "Glacial granite reflection and quiet mountain stillness",
    category: "Mountain & Desert",
    location: "Lake Tahoe, California",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-on-a-beach-at-sunset-42863-large.mp4",
    duration: "3:45",
    details: "Natural Twilight & 35mm Analog Cine Roll Hybrid"
  },
  {
    id: "film-4",
    title: "Sedona Red Rock Canyon Story",
    subtitle: "Piñon pine breeze and starlit open-air harvest table",
    category: "Mountain & Desert",
    location: "Sedona, Arizona",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-in-a-forest-42861-large.mp4",
    duration: "6:10",
    details: "Custom Acoustic Score & Handcrafted Super 8 Elements"
  },
  {
    id: "film-5",
    title: "Big Sur Redwood Headlands",
    subtitle: "Pacific ocean spray and emotional personal vows",
    category: "California & West",
    location: "Big Sur, California",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-on-a-beach-at-sunset-42863-large.mp4",
    duration: "4:50",
    details: "Documentary Audio Recording & 4K Cinema"
  },
  {
    id: "film-6",
    title: "Dallas Atelier Bespoke Celebration",
    subtitle: "Modern Texas architectural romance & black-tie evening",
    category: "Intimate Vows",
    location: "Dallas, Texas",
    year: "2026",
    coverImage: "/wd1.jpg",
    videoUrl: "/vid/new_section_img.mp4",
    duration: "3:20",
    details: "Dallas Home Studio Signature Commission"
  }
];

export default function VideographyPortfolio() {
  const [activeVideoModal, setActiveVideoModal] = useState<VideoFilmItem | null>(null);

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main" style={{ paddingTop: "96px" }}>
        {/* Panoramic Editorial Hero Banner (matching reference image) */}
        <section className="gione-panoramic-hero-wrap">
          <div className="gione-panoramic-hero-frame">
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop"
              alt="Wedding Videography Portfolio - Starline Atelier"
              className="gione-panoramic-hero-img"
            />
            <div className="gione-panoramic-hero-overlay">
              <h1 className="gione-panoramic-hero-title">
                Wedding Videography Portfolio
              </h1>
            </div>
          </div>
        </section>

        {/* Video Film Grid */}
        <section className="gione-photo-grid-container">
          <div className="gione-video-grid-2col">
            {videographyFilms.map((film) => (
              <motion.div
                key={film.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="gione-video-card"
                onClick={() => setActiveVideoModal(film)}
              >
                <div className="gione-video-card-thumb-wrap">
                  <img
                    src={film.coverImage}
                    alt={film.title}
                    className="gione-video-card-img"
                    loading="lazy"
                  />
                  <div className="gione-video-card-play-overlay">
                    <div className="gione-play-circle">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </div>
                  <span className="gione-video-duration-badge">{film.duration}</span>
                </div>

                <div className="gione-video-card-info">
                  <div className="gione-video-card-meta-top">
                    <span className="gione-photo-badge">{film.category}</span>
                    <span className="gione-video-year">{film.location} // {film.year}</span>
                  </div>
                  <h3 className="gione-video-card-title">{film.title}</h3>
                  <p className="gione-video-card-desc">{film.subtitle}</p>
                  <p className="gione-video-card-tech">{film.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom Booking Banner */}
        <section className="gione-portfolio-cta-banner">
          <div className="gione-portfolio-cta-inner">
            <span className="minimal-overline">CINEMATIC COMMISSIONS</span>
            <h2>Document your wedding with timeless cinematic poetry</h2>
            <p>We preserve the real laughter, heartfelt vows, and honest atmosphere forever.</p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/contact" className="minimal-btn-solid">
                <span>INQUIRE WITH STUDIO</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            className="starline-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoModal(null)}
          >
            <motion.div
              className="starline-video-modal-content"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="starline-lightbox-close"
                onClick={() => setActiveVideoModal(null)}
                aria-label="Close video player"
              >
                <X size={20} />
              </button>

              <div className="starline-video-modal-player-wrap">
                <video
                  src={activeVideoModal.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="starline-video-modal-element"
                />
              </div>

              <div className="starline-lightbox-footer">
                <div>
                  <h3 className="starline-lightbox-title">{activeVideoModal.title}</h3>
                  <p className="starline-lightbox-desc">
                    {activeVideoModal.subtitle} — {activeVideoModal.location} ({activeVideoModal.year})
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="minimal-text-link"
                  onClick={() => setActiveVideoModal(null)}
                >
                  <span>Inquire for Your Date</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer showClosingCta={false} />
    </div>
  );
}
