import { useEffect, useState } from "react";
import { Star, Quote, Play } from "lucide-react";
import { motion, type Variants } from "framer-motion";

function AnimatedBG({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const gridColor =
    variant === "light"
      ? "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)"
      : "linear-gradient(color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px)";

  return (
    <>
      <style>{`
        @keyframes t-spin-cw  { to { transform: rotate(360deg);  } }
        @keyframes t-spin-ccw { to { transform: rotate(-360deg); } }
        @keyframes t-streak {
          0%   { transform: translateX(-20%); opacity: 0; }
          10%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(120%); opacity: 0; }
        }
        @keyframes t-float {
          0%, 100% { transform: translateY(0px);   opacity: 0.4; }
          50%       { transform: translateY(-30px); opacity: 1;   }
        }
      `}</style>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: gridColor,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
          animation: "t-spin-cw 60s linear infinite",
          willChange: "transform",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-[1000px] w-[500px] rounded-full opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 70%, transparent), transparent 70%)",
          animation: "t-spin-ccw 80s linear infinite",
          willChange: "transform",
        }}
      />
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          aria-hidden
          className="absolute h-px w-[35%] pointer-events-none"
          style={{
            top: `${15 + i * 20}%`,
            background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand-cyan) 100%, white) 50%, transparent)",
            boxShadow: "0 0 10px color-mix(in oklab, var(--brand-cyan) 80%, transparent), 0 0 22px color-mix(in oklab, var(--brand-cyan) 60%, transparent)",
            animation: `t-streak ${4 + i * 0.8}s linear ${i * 1.4}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute h-1.5 w-1.5 rounded-full pointer-events-none"
          style={{
            top: `${(i * 9 + 12) % 90}%`,
            left: `${(i * 13 + 7) % 95}%`,
            background: "var(--brand-cyan)",
            boxShadow: "0 0 8px var(--brand-cyan)",
            animation: `t-float ${3 + (i % 4)}s ease-in-out ${i * 0.3}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </>
  );
}

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

function ReviewCard({ r }: { r: Review }) {
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -4, scale: 1.01 }}
      className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 rounded-[2rem] bg-[color:var(--brand-red)]/10 p-4 sm:pl-5 sm:pr-7 sm:py-5 border-r-[3px] border-[color:var(--brand-red)]"
    >
      {/* Avatar */}
      <div className="group relative shrink-0 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full overflow-hidden ring-4 ring-white shadow-[var(--shadow-card)]">
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
          <span className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Quote className="h-3 w-3 sm:h-4 sm:w-4 text-[color:var(--brand-red)]" />
          <h3 className="font-bold text-[color:var(--brand-navy)] text-base sm:text-lg md:text-xl">{r.name}</h3>
        </div>
        <p className="text-xs sm:text-sm text-[color:var(--brand-navy)]/60 font-medium mt-0.5">{r.role}</p>
        <p className="mt-2 text-xs sm:text-sm text-foreground/85 leading-relaxed">{r.text}</p>
        <div className="mt-2 sm:mt-3 flex gap-0.5 justify-center sm:justify-start">
          {Array.from({ length: r.rating }).map((_, i) => (
            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-[color:var(--brand-red)] text-[color:var(--brand-red)]" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ReviewRow({ items, intervalMs }: { items: Review[]; intervalMs: number }) {
  // Mobile: 1 card per slide, Desktop: 2 cards per slide
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const groups = isMobile
    ? items.map((item) => [item])          // 1 per slide on mobile
    : items.reduce<Review[][]>((acc, item, i) => {
        if (i % 2 === 0) acc.push([item]);
        else acc[acc.length - 1].push(item);
        return acc;
      }, []);                              // 2 per slide on desktop

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [isMobile]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % groups.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [groups.length, intervalMs]);

  return (
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
        {groups.map((group, pi) => (
          <div
            key={pi}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-x-10 shrink-0 basis-full w-full"
          >
            {group.map((r) => (
              <ReviewCard key={r.name} r={r} />
            ))}
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {groups.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-6 bg-[color:var(--brand-red)]"
                : "w-2 bg-[color:var(--brand-red)]/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[color:var(--brand-cyan)]/5 border-y border-border relative">
      <AnimatedBG />
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <motion.p variants={reveal} className="text-[color:var(--brand-red)] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </motion.p>
          <motion.h2 variants={reveal} className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
            We Love Getting <span className="text-[color:var(--brand-red)]">Feedback</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <ReviewRow items={topReviews} intervalMs={SLIDE_INTERVAL_TOP} />
          <ReviewRow items={bottomReviews} intervalMs={SLIDE_INTERVAL_BOTTOM} />
        </div>

      </div>
    </section>
  );
}