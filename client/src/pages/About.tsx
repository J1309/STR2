import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, Award, Camera, Heart, MapPin, Sparkles, Sun } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const publications = [
    "Vogue Weddings",
    "Anti-Bride",
    "Kinfolk",
    "Rangefinder Magazine",
    "Junebug Weddings",
    "Cereal Journal"
  ];

  const studioValues = [
    {
      title: "Radical Presence",
      desc: "We don’t treat your wedding like a photo shoot. Our priority is keeping you immersed in your day with your favorite people."
    },
    {
      title: "Inclusivity & Warmth",
      desc: "Love is love. We are fiercely LGBTQ+ affirming, BIPOC inclusive, and honor every background, body size, and tradition."
    },
    {
      title: "Leave No Trace",
      desc: "We practice responsible outdoor stewardship across all national parks and public lands to protect the wild places we document."
    }
  ];

  return (
    <div className="starline-page-shell">
      <Navbar variant="dark" />

      <main className="starline-page-main">
        {/* About Hero / Split Section */}
        <section className="about-page-hero">
          <div className="about-page-hero-inner">
            <div className="about-hero-media">
              <div className="about-portrait-frame">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
                  alt="Lila, Lead Artist at Starline Studio"
                />
                <span className="portrait-caption">Portrait of Lila / Lead Photographer</span>
              </div>
            </div>

            <div className="about-hero-copy">
              <div className="portfolio-header-kicker">
                <span className="dot-mark"><i /><i /><i /></span>
                <span>Behind the Lens</span>
              </div>
              <h1 className="about-hero-title">
                Hello, I’m Lila.<br /><em>I document what stays.</em>
              </h1>
              <p className="about-lead">
                For nearly a decade, I’ve photographed one thing over and over: thoughtfully curated intimate celebrations, quiet landscape horizons, and the small, honest gestures that give a memory its permanent gravity.
              </p>
              <p className="about-sublead">
                Based out of Northern California and traveling wherever a story is unfolding—from the high glacial lakes of the Sierra to windswept desert boulders and old stone courtyards in Europe.
              </p>

              <div className="about-quick-specs">
                <div className="about-spec-item">
                  <MapPin size={16} />
                  <span>California / Worldwide</span>
                </div>
                <div className="about-spec-item">
                  <Camera size={16} />
                  <span>35mm Film + Medium Format</span>
                </div>
                <div className="about-spec-item">
                  <Sun size={16} />
                  <span>Natural & Ambient Light</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Deep Dive */}
        <section className="about-philosophy-section">
          <div className="about-philosophy-inner">
            <div className="philosophy-header">
              <p className="sunlit-kicker">The Approach</p>
              <h2>Directed when needed,<br /><em>quiet when it breathes.</em></h2>
            </div>

            <div className="philosophy-columns">
              <div className="philosophy-text-col">
                <p>
                  Most people worry about feeling awkward in front of a camera. I understand that completely. That’s why my approach is built entirely on creating an effortless atmosphere rather than barking commands or forcing artificial poses.
                </p>
                <p>
                  When the light is spectacular, I will guide you with gentle, intentional prompts. When you are embracing your partner or laughing with your guests at dinner, I step back to let the natural story unfold without interference.
                </p>
              </div>

              <div className="philosophy-text-col">
                <p>
                  I believe in the beauty of physical objects in a digital world. That’s why every full celebration is documented with analog film rolls alongside medium format digital, resulting in tactile linen keepsake boxes and silver-halide prints meant to be passed down through generations.
                </p>
                <div className="about-cta-action">
                  <Link href="/portfolio" className="about-view-work-link">
                    <span>Explore the Stories</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Values */}
        <section className="about-values-section">
          <div className="about-values-inner">
            <p className="sunlit-kicker">What We Stand For</p>
            <h2>Our core studio values.</h2>

            <div className="about-values-grid">
              {studioValues.map((v, i) => (
                <div key={i} className="about-value-card">
                  <span className="value-index">0{i + 1}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Publications */}
        <section className="about-press-section">
          <div className="about-press-inner">
            <p className="press-kicker">Featured & Published In</p>
            <div className="press-badges-row">
              {publications.map((pub, idx) => (
                <div key={idx} className="press-badge-item">
                  <span>{pub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
