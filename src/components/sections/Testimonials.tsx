import { useEffect, useState } from "react";
import { Star, Quote, Play } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Review = {
  name: string;
  role: string;
  text: string;
  rating: number;
  video: string;
  poster: string;
};

const topReviews: Review[] = [
  {
    name: "Bob Gulart",
    role: "Founder, BrightCo",
    text: "Metagenix offered the greatest solutions for my project, and their quality was top-notch. I'm delighted by their originality and attention to detail.",
    rating: 5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Douglas Noble",
    role: "CEO, NobleWorks",
    text: "Look at Mr. Douglas sharing his experience with the team in the video to see how Metagenix has once again fulfilled our promises.",
    rating: 5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Lumen",
    text: "Working with Metagenix was a breeze. Their creative direction elevated our brand video far beyond what we imagined possible.",
    rating: 5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "James O'Connor",
    role: "Director, Pixelworks",
    text: "From concept to delivery, the team was exceptional. The animation quality and storytelling exceeded every expectation we had.",
    rating: 5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop&crop=faces",
  },
];

const bottomReviews: Review[] = [
  {
    name: "Steve Alexander",
    role: "PM, Onboardly",
    text: "Metagenix delivered an excellent 2D onboarding animation, showing great responsiveness and support throughout multiple revisions. Highly recommend.",
    rating: 5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Wesley Peixoto",
    role: "Marketing Lead",
    text: "Metagenix services earned my respect by providing high-quality, aesthetically pleasing animated content. The group executed my project in a unique way.",
    rating: 5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Emily Chen",
    role: "CEO, BrightPath",
    text: "Their attention to detail and ability to capture our brand voice in motion was outstanding. A truly collaborative experience from start to finish.",
    rating: 5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Marcus Reid",
    role: "Producer, Northwind",
    text: "Professional, fast, and incredibly talented. Metagenix turned a complex brief into a stunning piece of motion design we're proud to show off.",
    rating: 5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
  },
];

const SLIDE_INTERVAL_TOP = 5000;
const SLIDE_INTERVAL_BOTTOM = 6500;

// ── Same variants as Projects ──────────────────────────────
const reveal: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
// ──────────────────────────────────────────────────────────

function ReviewCard({ r }: { r: Review }) {
  return (
    // ← motion.article with reveal variant + hover lift
    <motion.article
      variants={reveal}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative flex items-center gap-6 rounded-[2.5rem] bg-[color:var(--brand-red)]/10 pl-5 pr-7 py-5 border-r-[3px] border-[color:var(--brand-red)]"
    >
      {/* Avatar — bigger: h-40 w-40 */}
      <div className="group relative shrink-0 h-36 w-36 md:h-40 md:w-40 rounded-full overflow-hidden ring-4 ring-white shadow-[var(--shadow-card)]">
        <video
          src={r.video}
          poster={r.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          onMouseEnter={(e) => {
            void (e.currentTarget as HTMLVideoElement).play().catch(() => {});
          }}
          onMouseLeave={(e) => {
            const v = e.currentTarget as HTMLVideoElement;
            v.pause();
            v.currentTime = 0;
          }}
        />
        <div className="hover-overlay-tr" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="h-5 w-5 fill-white" />
          </span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Quote className="h-4 w-4 text-[color:var(--brand-red)]" />
          <h3 className="font-bold text-[color:var(--brand-navy)] text-xl">{r.name}</h3>
        </div>
        <p className="text-sm text-[color:var(--brand-navy)]/60 font-medium mt-0.5">{r.role}</p>
        <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{r.text}</p>
        <div className="mt-3 flex gap-0.5">
          {Array.from({ length: r.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[color:var(--brand-red)] text-[color:var(--brand-red)]" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ReviewRow({ items, intervalMs }: { items: Review[]; intervalMs: number }) {
  const pairs: Review[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2));
  }

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % pairs.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [pairs.length, intervalMs]);

  return (
    // ← Row itself slides up on scroll
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={stagger}
      className="overflow-hidden"
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {pairs.map((pair, pi) => (
          <div key={pi} className="grid md:grid-cols-2 gap-x-10 shrink-0 basis-full w-full">
            {pair.map((r) => (
              <ReviewCard key={r.name} r={r} />
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-[color:var(--brand-cyan)]/5 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading — same animation pattern as Projects */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p variants={reveal} className="text-[color:var(--brand-red)] text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </motion.p>
          <motion.h2 variants={reveal} className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
            We Love Getting <span className="text-[color:var(--brand-red)]">Feedback</span>
          </motion.h2>
        </motion.div>

        {/* ← max-w-7xl instead of max-w-5xl = wider cards */}
        <div className="max-w-7xl mx-auto space-y-12">
          <ReviewRow items={topReviews} intervalMs={SLIDE_INTERVAL_TOP} />
          <ReviewRow items={bottomReviews} intervalMs={SLIDE_INTERVAL_BOTTOM} />
        </div>

      </div>
    </section>
  );
}