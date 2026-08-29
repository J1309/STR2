import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Camera, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface PhotoItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Estates & Coastal" | "California & West" | "Mountain & Desert" | "Intimate Vows";
  location: string;
  year: string;
  image: string;
  aspect?: "portrait" | "landscape" | "tall";
}

const photographyGallery: PhotoItem[] = [
  {
    id: "photo-1",
    title: "Rosecliff Mansion Coastal Vows",
    subtitle: "35mm Analog Portra 400 on Cliff Walk",
    category: "Estates & Coastal",
    location: "Newport, Rhode Island",
    year: "2026",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall"
  },
  {
    id: "photo-2",
    title: "Meadowood Vineyard Golden Hour",
    subtitle: "Medium Format Digital & Leica Primes",
    category: "California & West",
    location: "Napa Valley, California",
    year: "2026",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
    aspect: "landscape"
  },
  {
    id: "photo-3",
    title: "High Sierra Blue Hour Still",
    subtitle: "Natural Twilight over Glacial Basin",
    category: "Mountain & Desert",
    location: "High Sierra, California",
    year: "2026",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    aspect: "portrait"
  },
  {
    id: "photo-4",
    title: "Mojave Desert Wildflower Gathering",
    subtitle: "Contax G2 35mm Emulsion",
    category: "Mountain & Desert",
    location: "Joshua Tree, California",
    year: "2026",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    aspect: "tall"
  },
  {
    id: "photo-5",
    title: "Santa Fe Adobe Shadows",
    subtitle: "Kodak Tri-X 400 Black & White",
    category: "Intimate Vows",
    location: "Santa Fe, New Mexico",
    year: "2025",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    aspect: "landscape"
  },
  {
    id: "photo-6",
    title: "Big Sur Coastal Headlands",
    subtitle: "Pacific Mist & Unrehearsed Laughter",
    category: "California & West",
    location: "Big Sur, California",
    year: "2025",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    aspect: "portrait"
  },
  {
    id: "photo-7",
    title: "Historic Charleston Live Oak Terrace",
    subtitle: "Lowcountry Candlelight Banquet",
    category: "Estates & Coastal",
    location: "Charleston, South Carolina",
    year: "2025",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
    aspect: "landscape"
  },
  {
    id: "photo-8",
    title: "Dallas Atelier Editorial Portrait",
    subtitle: "Fine-art Bridal Elegance",
    category: "Intimate Vows",
    location: "Dallas, Texas",
    year: "2026",
    image: "/wd1.jpg",
    aspect: "tall"
  }
];

export default function PhotographyPortfolio() {
  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoItem | null>(null);

  return (
    <div className="starline-page-shell">
      <Navbar variant="light" />

      <main className="starline-page-main" style={{ paddingTop: "96px" }}>
        {/* Panoramic Editorial Hero Banner (matching reference image) */}
        <section className="gione-panoramic-hero-wrap">
          <div className="gione-panoramic-hero-frame">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
              alt="Wedding Photography Portfolio - Starline Atelier"
              className="gione-panoramic-hero-img"
            />
            <div className="gione-panoramic-hero-overlay">
              <h1 className="gione-panoramic-hero-title">
                Wedding Photography Portfolio
              </h1>
            </div>
          </div>
        </section>

        {/* Photography Grid */}
        <section className="gione-photo-grid-container">
          <div className="gione-photo-masonry">
            {photographyGallery.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className={`gione-photo-card aspect-${photo.aspect || "portrait"}`}
                onClick={() => setLightboxPhoto(photo)}
              >
                <div className="gione-photo-card-inner">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="gione-photo-card-img"
                    loading="lazy"
                  />
                  <div className="gione-photo-hover-overlay">
                    <div className="gione-photo-hover-meta">
                      <span className="gione-photo-badge">{photo.category}</span>
                      <h3 className="gione-photo-title">{photo.title}</h3>
                      <p className="gione-photo-sub">{photo.location} // {photo.year}</p>
                      <span className="gione-photo-view-btn">
                        <span>VIEW PHOTOGRAPH</span>
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom Booking Banner */}
        <section className="gione-portfolio-cta-banner">
          <div className="gione-portfolio-cta-inner">
            <span className="minimal-overline">COMMISSIONS & INQUIRIES</span>
            <h2>Let’s create honest imagery for your celebration</h2>
            <p>Limited to 18 couples per season to ensure uncompromising artistic dedication.</p>
            <div style={{ marginTop: "24px" }}>
              <Link href="/contact" className="minimal-btn-solid">
                <span>INQUIRE WITH STUDIO</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            className="starline-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
          >
            <motion.div
              className="starline-lightbox-content"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="starline-lightbox-close"
                onClick={() => setLightboxPhoto(null)}
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>

              <div className="starline-lightbox-img-wrap">
                <img
                  src={lightboxPhoto.image}
                  alt={lightboxPhoto.title}
                  className="starline-lightbox-img"
                />
              </div>

              <div className="starline-lightbox-footer">
                <div>
                  <h3 className="starline-lightbox-title">{lightboxPhoto.title}</h3>
                  <p className="starline-lightbox-desc">
                    {lightboxPhoto.subtitle} — {lightboxPhoto.location} ({lightboxPhoto.year})
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="minimal-text-link"
                  onClick={() => setLightboxPhoto(null)}
                >
                  <span>Book This Aesthetic</span>
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
