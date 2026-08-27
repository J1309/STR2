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
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop"
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
    title: "Shadows in the Adobe Corridor",
    subtitle: "Warm terra cotta walls and sharp shade",
    category: "Editorial & Brand",
    location: "Santa Fe, New Mexico",
    year: "2025",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
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
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
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
    id: "lake-como-balbiano",
    slug: "lake-como-wedding-cinema-alessandra-matteo",
    title: "Villa Balbiano Lake Como // Alessandra + Matteo",
    subtitle: "A lakeside Bellagio celebration enveloped in morning mist and evening candlelight along the waters of Lake Como",
    category: "Destination Weddings",
    date: "18 October 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Across three days on the western shores of Lake Como, Alessandra and Matteo welcomed guests from Milan and New York for an unhurried celebration of wooden Riva boat arrivals, cypress gardens, and twilight dining.",
    content: [
      "Lake Como in early autumn possesses a tranquil, poetic stillness. The surrounding Alpine peaks soften behind morning haze, and the deep blue waters reflect the ornate stone balustrades of historic waterfront villas.",
      "We documented Alessandra and Matteo's celebration using a dual hybrid approach: 35mm Kodak Portra film rolls for the tactile morning preparations and vintage anamorphic cinema lenses to capture the evening banquet beneath towering chandeliers on the water's edge.",
      "The ceremony took place on the lakeside lawn as wooden Riva speedboats glided in the distance, followed by an open-air banquet illuminated by hundreds of tapered beeswax candles."
    ]
  },
  {
    id: "cap-d-antibes-riviera",
    slug: "french-riviera-wedding-film-juliette-henri",
    title: "Hôtel du Cap-Eden-Roc // Juliette + Henri",
    subtitle: "Seaside stone terraces, Mediterranean sea spray, and haute couture black-tie on the French Riviera",
    category: "Destination Weddings",
    date: "24 September 2025",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Perched above the limestone cliffs of the Côte d’Azur, Juliette and Henri hosted an iconic seaside weekend capturing the golden-hour breeze on 35mm analog film and vintage anamorphic cinema lenses.",
    content: [
      "The French Riviera is synonymous with timeless European elegance. The iconic pine groves and sea cliffs of Cap d'Antibes provided the dramatic backdrop for Juliette and Henri's black-tie destination celebration.",
      "Juliette wore an architectural couture silk gown that moved effortlessly in the Mediterranean sea breeze. Our team prioritized unhurried, documentary observation—preserving authentic laughter and impromptu dances.",
      "As twilight bathed the coastline in lavender and amber light, dinner was served on the seaside stone terrace accompanied by a live acoustic jazz quartet."
    ]
  },
  {
    id: "marrakech-agafay",
    slug: "marrakech-desert-riad-soraya-tarek",
    title: "Agafay Desert & Riad Botanica // Soraya + Tarek",
    subtitle: "Handcrafted brass lanterns, zellige courtyards, and an open-air starlit banquet under the Atlas Mountains",
    category: "Destination Weddings",
    date: "12 August 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Starting in the fragrant jasmine courtyards of the Medina and culminating in a starlit desert banquet illuminated by hundreds of handcrafted brass lanterns.",
    content: [
      "Marrakech offers an extraordinary sensory canvas for cinema. Terracotta plaster walls, intricate zellige mosaics, and warm desert winds create an immersive atmosphere unlike anywhere else.",
      "Soraya and Tarek greeted their international guests with traditional mint tea and live Oud musicians in a private courtyard before transitioning to an open-air celebration under the stars in the Agafay Desert.",
      "We utilized 35mm black-and-white film to capture the tactile textures of embroidered textiles and the warm glow of open fire installations."
    ]
  },
  {
    id: "kyoto-arashiyama",
    slug: "kyoto-arashiyama-wedding-hana-liam",
    title: "Arashiyama Bamboo & River Vows // Hana + Liam",
    subtitle: "Japanese architectural minimalism, moss gardens, and a serene twilight ceremony in the ancient capital",
    category: "Asian Weddings",
    date: "28 July 2025",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop",
    excerpt: "Surrounded by towering bamboo groves and cedar temples, Hana and Liam exchanged quiet personal vows followed by a traditional multi-course Kaiseki dinner alongside the Oi River.",
    content: [
      "Kyoto's Arashiyama district is defined by ancient cedar forests, mist-shrouded river valleys, and refined wooden architecture. Hana and Liam desired a celebration rooted in quiet presence and natural reverence.",
      "The ceremony was held in a private moss garden overlooking the river at dusk, followed by an intimate candlelit reception featuring handcrafted ceramics and local floral design.",
      "Every frame was captured to honor the subtle spatial harmony (Ma) of Japanese aesthetics and the quiet emotional connection between the couple."
    ]
  },
  {
    id: "tuscany-val-dorcia",
    slug: "tuscany-val-dorcia-isabella-julian",
    title: "Val d'Orcia Olive Estate // Isabella + Julian",
    subtitle: "Rolling golden hills, cypress avenues, and an open-air harvest table beneath the Tuscan constellations",
    category: "Destination Weddings",
    date: "14 June 2025",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
    excerpt: "An intimate multi-day gathering celebrating the soulful rhythms of Tuscany, documented with medium-format analog film and natural golden-hour illumination.",
    content: [
      "The rolling wheat fields and winding cypress driveways of Val d'Orcia represent the quintessential soul of the Italian countryside. Isabella and Julian curated an unhurried weekend focused on regional wine, seasonal cuisine, and deep connection.",
      "Guests gathered at a single 80-foot rustic timber table set among ancient olive groves, illuminated by festoon lights and the warm glow of the setting sun.",
      "Our cinematography highlighted the natural textures of linen, terracotta, and late-afternoon golden light that makes Tuscan celebrations so timeless."
    ]
  },
  {
    id: "mallorca-deia",
    slug: "mallorca-deia-coastal-clara-soren",
    title: "Deià Coastal Finca // Clara + Soren",
    subtitle: "Sun-bleached sandstone walls, olive groves, and midnight ocean swimming along the Balearic coastline",
    category: "Destination Weddings",
    date: "2 May 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    excerpt: "With the Tramuntana mountain peaks rising behind and the Mediterranean stretching to the horizon, Clara and Soren celebrated with wild floral installations and Spanish guitar.",
    content: [
      "Perched on the rugged northwest coast of Mallorca, the historic artists' village of Deià is an enchanting enclave of stone fincas and bougainvillea.",
      "Clara and Soren hosted their ceremony overlooking the sea as acoustic Spanish guitar echoed off the stone terraces. The evening transitioned into a vibrant midnight party beneath citrus trees.",
      "We preserved the vivid Mediterranean colors and ocean reflections on 35mm color film, delivering an heirloom narrative brimming with vitality."
    ]
  }
];
