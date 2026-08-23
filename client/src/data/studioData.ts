export type StoryItem = {
  id: string;
  title: string;
  subtitle: string;
  category: "Editorial & Brand" | "Intimate Celebrations" | "Wild Landscapes" | "Studio & Objects";
  location: string;
  year: string;
  coverImage: string;
  galleryImages: string[];
  fieldNotes: string;
  details: {
    camera?: string;
    light?: string;
    season?: string;
    guests?: string;
  };
};

export type InvestmentTier = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  featured?: boolean;
  coverage: string;
  inclusions: string[];
  recommendedFor: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  category: "Booking" | "Travel & Weather" | "Delivery & Prints";
};

export type TestimonialItem = {
  id: string;
  quote: string;
  client: string;
  celebration: string;
  location: string;
  image: string;
};

export type JournalArticle = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string[];
};

export const studioStories: StoryItem[] = [
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
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
    ],
    fieldNotes: "Standing at the edge of the glacial shelf as the wind died down. The blue hour in the Sierra creates a cool gradient across the water that no studio light could ever manufacture. We waited for twenty minutes in total quiet just to catch the single breath of reflection before the stars surfaced.",
    details: {
      camera: "Medium Format Digital & 35mm Portra 400",
      light: "Natural Twilight / Blue Hour",
      season: "Late Autumn 2026"
    }
  },
  {
    id: "joshua-bloom",
    title: "Desert Wildflower Bloom",
    subtitle: "Golden hour textures across the Mojave",
    category: "Intimate Celebrations",
    location: "Joshua Tree, California",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
      "/bg_hero_page.png"
    ],
    fieldNotes: "An intimate vow exchange tucked between ancient monzogranite boulders. The low desert sun carved gold edges around wild mustard blossoms. With just twelve guests, the dinner took place at a single long wooden table under open skies as lantern light took over from the sunset.",
    details: {
      camera: "Contax G2 & Leica M11",
      light: "Golden Backlight & Candlelight",
      season: "Spring 2026",
      guests: "12 Close Friends & Family"
    }
  },
  {
    id: "sunday-objects",
    title: "Sunday Objects & Linen",
    subtitle: "Still life studies of slow afternoon light",
    category: "Studio & Objects",
    location: "San Francisco Studio",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop"
    ],
    fieldNotes: "Explorations of form, texture, and organic vessels. We let raw afternoon sunlight rake across stone plinths and unbleached Belgian linen, celebrating the beauty of small, overlooked everyday rituals.",
    details: {
      camera: "Hasselblad 500C/M",
      light: "Window Natural Directional Light",
      season: "Summer 2026"
    }
  },
  {
    id: "santa-fe-adobe",
    title: "Santa Fe Passages",
    subtitle: "Warm terra cotta walls and sharp shade",
    category: "Editorial & Brand",
    location: "Santa Fe, New Mexico",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
      "/bg_hero_page.png"
    ],
    fieldNotes: "Editorial campaign photographed for an artisanal wool and ceramic studio. The warm earth tones of the historic adobe corridors provided the perfect grounding contrast against crisp minimalist silhouettes.",
    details: {
      camera: "35mm Kodak Tri-X 400 & Ektar 100",
      light: "Direct Sun & Ambient Bounce",
      season: "Autumn 2025"
    }
  },
  {
    id: "salt-flats-vastness",
    title: "The White Horizon",
    subtitle: "Minimalist geometry across salt and sky",
    category: "Wild Landscapes",
    location: "Bonneville Salt Flats, Utah",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
      "/bg_hero_page.png",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
    ],
    fieldNotes: "Where the horizon dissolves completely into mirror reflections. We traveled before sunrise to capture the transition from indigo cold to shimmering desert pastel light.",
    details: {
      camera: "Medium Format GFX 100S",
      light: "Dawn Grazing Horizon Light",
      season: "Spring 2025"
    }
  },
  {
    id: "coastal-fog-passage",
    title: "Pacific Headlands",
    subtitle: "Salt spray, cypress trees, and coastal fog",
    category: "Intimate Celebrations",
    location: "Big Sur, California",
    year: "2026",
    coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
    ],
    fieldNotes: "Clifftop vows in the rolling ocean mist. The bride wore silk that fluttered with the offshore breeze while seven of their closest companions watched from a redwood bench above the Pacific crash.",
    details: {
      camera: "35mm Leica Summicron 35mm",
      light: "Oceanic Mist Diffused Light",
      season: "Summer 2026",
      guests: "7 Guests"
    }
  }
];

export const investmentTiers: InvestmentTier[] = [
  {
    id: "intimate",
    name: "The Intimate Story",
    tagline: "Tailored for micro-weddings, elopements, and bespoke celebrations under 30 guests.",
    price: "$3,400",
    coverage: "Up to 6 Hours of Seamless Storytelling",
    inclusions: [
      "Full photographic coverage by Starline lead artist",
      "Curated high-resolution digital gallery (400+ hand-finished frames)",
      "Full personal printing and digital sharing rights",
      "Custom timeline architecture & location lighting roadmap",
      "Private online proofing gallery with archival print store",
      "Delivered within 4–6 weeks with 48-hour sneak preview"
    ],
    recommendedFor: "Couples desiring deep intimacy, zero fluff, and timeless documentary frames."
  },
  {
    id: "full-day",
    name: "The Full Story & Escape",
    tagline: "Our signature all-day experience documenting the entire arc from morning preparations to late-night dinner.",
    price: "$5,200",
    featured: true,
    coverage: "Up to 9 Hours of Comprehensive Coverage",
    inclusions: [
      "Lead artist + dedicated second photographer",
      "Hybrid capture: 35mm Analog Film rolls + Medium Format Digital",
      "Curated gallery of 700+ hand-toned, timeless images",
      "Custom linen keepsake box containing 50 fine-art archival prints",
      "Complimentary golden-hour engagement or portrait session",
      "All travel expenses included within California, Utah, and Nevada",
      "48-hour signature preview story deck"
    ],
    recommendedFor: "Those who want every laughter, whisper, landscape nuance, and celebration moment preserved without looking at the clock."
  },
  {
    id: "destination",
    name: "The Destination & Multi-Day",
    tagline: "Multi-day narrative for weekend getaways, European celebrations, and backcountry expeditions.",
    price: "$7,800",
    coverage: "Two Days / Multi-Event Complete Story",
    inclusions: [
      "Welcome dinner / rehearsal gathering + Full Wedding Day coverage",
      "Dual-artist team with unlimited film rolls & medium format gear",
      "1,000+ hand-crafted digital frames delivered in full resolution",
      "Custom 12x12 bespoke Italian-bound linen heirloom wedding album",
      "Full drone aerial topography & landscape environmental frames",
      "Worldwide travel and lodging completely included",
      "Priority artisan delivery within 3 weeks"
    ],
    recommendedFor: "Destination celebrations where the journey and environment are as central as the vow exchange."
  },
  {
    id: "editorial",
    name: "Editorial & Brand Commissions",
    tagline: "Art-directed imagery for design-led brands, architectural spaces, and lookbooks.",
    price: "From $2,200",
    coverage: "Half-Day or Full-Day Studio & Location Production",
    inclusions: [
      "Complete commercial usage & global digital licensing",
      "Collaborative creative direction, moodboarding & casting consultation",
      "Color grading matched to brand aesthetic guidelines",
      "High-resolution master files + web-optimized exports",
      "Tethered on-set live preview for art directors",
      "Studio or remote location coordination"
    ],
    recommendedFor: "Designers, publications, hoteliers, and luxury brands seeking soulful, organic aesthetics."
  }
];

export const experienceSteps = [
  {
    step: "01",
    title: "Connection & Vision",
    description: "We begin with an unhurried conversation about how you want your day to feel. No generic templates—we align on your energy, the light, and what matters most."
  },
  {
    step: "02",
    title: "Curating the Roadmap",
    description: "I assist with timeline design, golden-hour window alignment, location scouting, and subtle styling guidance so you can breathe easily when the day arrives."
  },
  {
    step: "03",
    title: "The Unhurried Day",
    description: "On the day of, I guide with a gentle hand when needed and step back to let real moments unfold. You will never feel rushed, posed into awkward stiffness, or managed."
  },
  {
    step: "04",
    title: "Heirloom Delivery",
    description: "Within 48 hours, you receive a curated sneak peek gallery. Your full hand-toned collection and custom archival print folios arrive ready to be cherished for decades."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "What is your approach on the wedding day?",
    answer: "I believe the best photographs occur when you feel completely present in your experience. I balance artful, editorial guidance during portrait sessions with an unobtrusive, documentary eye during the ceremony and reception so you can savor every second with your guests.",
    category: "Booking"
  },
  {
    question: "Do you travel for intimate weddings and destination sessions?",
    answer: "Absolutely. Over 60% of Starline stories are photographed outside of our home base in California. Travel within California, Utah, and Nevada is already included in our signature packages, and worldwide travel is quoted transparently with zero surprise fees.",
    category: "Travel & Weather"
  },
  {
    question: "How and when will we receive our photographs?",
    answer: "You will receive a curated 48-hour sneak peek gallery of 25–40 images right after your celebration. Full digital galleries are delivered within 4 to 6 weeks through a private, password-protected online store where you can download high-resolution and web files, share with family, and order fine art prints.",
    category: "Delivery & Prints"
  },
  {
    question: "Do you shoot film, digital, or both?",
    answer: "We shoot a hybrid approach! Medium format digital gives us exceptional dynamic range and precision in challenging low-light conditions, while 35mm and 120 analog film (Kodak Portra, Tri-X) provides that unmistakable creamy grain, skin tone depth, and timeless tactile feel.",
    category: "Booking"
  },
  {
    question: "How do we secure our date?",
    answer: "To ensure absolute dedication to every story, Starline only accepts a limited number of celebrations each year (maximum 20). Dates are reserved with a signed digital agreement and a 30% retainer. The remaining balance is split into flexible installments.",
    category: "Booking"
  },
  {
    question: "What happens if weather conditions are unpredictable?",
    answer: "Unpredictable weather often makes for the most cinematic, memorable photographs! Wind, rolling fog, and mood light add incredible romance. We always scout backup micro-locations and carry weather protection so we can embrace the elements safely.",
    category: "Travel & Weather"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    quote: "Finding someone you've never met and then putting your full trust in to capture all the moments of your day is worth it a million times over with Starline. It felt like we had known each other forever. An all-around creative visionary.",
    client: "Adrianne & Marcus",
    celebration: "Intimate High Sierra Vows",
    location: "Lake Tahoe, California",
    image: "/bg_hero_page.png"
  },
  {
    id: "2",
    quote: "Seriously, speechlessly stunning. It is rare to find an artist who delivers final photographs where every single frame feels like an editorial cover. Even a year later, we look through our print box in complete awe.",
    client: "Elena & Christian",
    celebration: "Desert Twilight Celebration",
    location: "Joshua Tree, California",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "3",
    quote: "Starline captured the atmosphere, stillness, and intimacy of our celebration in a way that felt entirely honest. Not once did we feel posed. She made our 15 guests feel like royalty.",
    client: "Maya & Julian",
    celebration: "Coastal Redwood Gathering",
    location: "Big Sur, California",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop"
  }
];

export const journalArticles: JournalArticle[] = [
  {
    id: "surrey-wedding",
    slug: "surrey-wedding-photography-videography-saskia-oliver",
    title: "Surrey Wedding Photography & Videography // Saskia + Oliver",
    subtitle: "An intimate English country estate celebration enveloped in afternoon golden light",
    category: "London & UK",
    date: "18 October 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Surrounded by ancient oaks and English garden botanicals, Saskia and Oliver celebrated their vows with a relaxed, heartfelt gathering filled with live acoustic music and candlelit dining.",
    content: [
      "Surrey in late autumn offers an extraordinary palette of amber foliage, low-raking sunlight, and soft misty mornings. For Saskia and Oliver, the focus from day one was genuine intimacy without rigid formalities.",
      "We documented the morning preparations using 35mm Kodak Portra film rolls to embrace the soft natural window light. The ceremony took place in an open-air stone terrace where natural vows were shared before seventy of their closest family and friends.",
      "As dusk settled over the manor lawn, dinner was served beneath hanging floral installations and hundreds of tapered beeswax candles, creating a warm, painterly atmosphere that translated effortlessly to cinema film."
    ]
  },
  {
    id: "french-riviera-wedding",
    slug: "french-riviera-wedding-photographer-michelle-russell",
    title: "French Riviera Wedding Photography & Film // Michelle + Russell",
    subtitle: "A breathtaking Mediterranean celebration overlooking Villa Ephrussi de Rothschild",
    category: "Destination Weddings",
    date: "24 September 2025",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Perched above the French Riviera, Michelle and Russell brought together guests from across three continents for an iconic weekend of seaside cocktails, haute couture, and seaside vows.",
    content: [
      "Villa Ephrussi de Rothschild represents the pinnacle of Belle Époque elegance. The pink palace, framed by nine manicured classical gardens and the sapphire waters of the Mediterranean, was the setting for Michelle and Russell's destination wedding.",
      "The ceremony was held in the French Garden as the musical fountains danced to classical strings. Michelle wore a custom couture silk gown that floated with the sea breeze.",
      "Our cinematography team captured the celebration using a blend of medium-format 4K cinema cameras and vintage anamorphic lenses, giving the final film a velvety, cinematic depth reminiscent of classic European cinema."
    ]
  },
  {
    id: "marrakech-la-mamounia",
    slug: "la-mamounia-marrakech-wedding-linda-romain",
    title: "La Mamounia Marrakech Wedding // Linda + Romain",
    subtitle: "Lantern-lit courtyards, zellige tile, and an enchanting Moroccan desert adventure",
    category: "Destination Weddings",
    date: "12 August 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    excerpt: "An unforgettable multi-day celebration starting in the historic courtyards of La Mamounia and ending under the starlit canopy of the Agafay Desert.",
    content: [
      "Marrakech is a sensory dream for visual artists. The contrast of terracotta plaster, fragrant orange blossom courtyards, and warm sun creates a mood unlike anywhere else in the world.",
      "Linda and Romain welcomed guests with traditional Moroccan mint tea and live Oud musicians before transitioning into a private courtyard ceremony lit by over three hundred handcrafted brass lanterns.",
      "The following evening, the wedding party traveled into the Agafay Desert for an open-air banquet under the Milky Way, celebrating with traditional fire dancers and world-class culinary pairings."
    ]
  },
  {
    id: "wanaka-new-zealand",
    slug: "wanaka-new-zealand-wedding-maggie-kevin",
    title: "Wanaka New Zealand Wedding Videographer // Maggie + Kevin",
    subtitle: "Glacial alpine peaks, remote lakeside vows, and sweeping mountain panoramas",
    category: "Destination Weddings",
    date: "28 July 2025",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
    excerpt: "A helicopter ascent to the ridge of Mount Aspiring followed by an intimate vineyard reception with panoramic views over Lake Wanaka.",
    content: [
      "New Zealand's South Island possesses a raw, untamed majesty. Maggie and Kevin desired an elopement experience that celebrated the vast scale of nature.",
      "After exchanging private vows on an alpine peak accessible only by helicopter, we descended into the Rippon Vineyard for sunset wine tastings with their closest circle.",
      "Every frame was captured to emphasize the sheer environmental scale—snowcapped summits meeting the deep glacial blue of the lake."
    ]
  },
  {
    id: "alila-yangshuo",
    slug: "alila-yangshuo-guilin-wedding-elina-aaron",
    title: "Alila Yangshuo Wedding Film // Elina + Aaron",
    subtitle: "Historic sugar mill architecture amidst the limestone karst mountains of China",
    category: "Asian Weddings",
    date: "14 June 2025",
    readTime: "7 min read",
    coverImage: "/bg_hero_page.png",
    excerpt: "Modern industrial luxury meets ancient karst landscape. An extraordinary wedding celebration honoring Chinese heritage and contemporary design.",
    content: [
      "Alila Yangshuo is one of the most architecturally striking venues in Asia, converting a 1960s sugar mill into a contemporary sanctuary alongside the Li River.",
      "Elina and Aaron combined a traditional Chinese tea ceremony wearing embroidered silk qipaos with a modern black-tie evening reception over the reflection pool.",
      "The cinematic film combined slow-panning landscape vistas of misty limestone peaks with high-energy party moments on the industrial truss stage."
    ]
  },
  {
    id: "chateau-la-napoule",
    slug: "chateau-de-la-napoule-wedding-carla-walker",
    title: "Château de la Napoule Celebration // Carla + Walker",
    subtitle: "Medieval seaside stone walls and modern black-tie glamour on the French coast",
    category: "Destination Weddings",
    date: "2 May 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    excerpt: "With the Mediterranean waves breaking against medieval fortress walls, Carla and Walker hosted an opulent coastal banquet filled with champagne, oysters, and midnight fireworks.",
    content: [
      "Located near Cannes, Château de la Napoule blends eccentric sculpture, historic stone ramparts, and uninterrupted sea views.",
      "The bride made a dramatic entrance across the stone bridge wearing a sculptural cathedral veil. Dinner was hosted along the seaside battlements under string canopies as the sunset turned the water gold.",
      "A standout highlight was the midnight champagne tower and fireworks display launched directly over the Bay of Cannes."
    ]
  }
];
