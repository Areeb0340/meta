import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import { Play } from "lucide-react";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { VideoLightbox } from "../VideoLightbox";

function AnimatedBG({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const gridColor =
    variant === "light"
      ? "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)"
      : "linear-gradient(color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px)";

  return (
    <>
      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: gridColor,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Glow */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 h-[1000px] w-[500px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 70%, transparent), transparent 70%)",
        }}
      />

      {/* Lightning */}
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: "120%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.4,
          }}
          className="absolute h-px w-[35%] pointer-events-none"
          style={{
            top: `${15 + i * 20}%`,
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand-cyan) 100%, white) 50%, transparent)",
            boxShadow:
              "0 0 10px color-mix(in oklab, var(--brand-cyan) 80%, transparent), 0 0 22px color-mix(in oklab, var(--brand-cyan) 60%, transparent)",
          }}
        />
      ))}

      {/* Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute h-1.5 w-1.5 rounded-full pointer-events-none"
          style={{
            top: `${(i * 9 + 12) % 90}%`,
            left: `${(i * 13 + 7) % 95}%`,
            background: "var(--brand-cyan)",
            boxShadow: "0 0 8px var(--brand-cyan)",
          }}
        />
      ))}
    </>
  );
}

const items = [
  { img: p1, title: "Bright Mascot", tag: "2D Character" },
  { img: p2, title: "Tech Reveal", tag: "3D Product" },
  { img: p3, title: "Neon Lines", tag: "Motion Graphics" },
  { img: p4, title: "Bold Typography", tag: "Kinetic Type" },
  { img: p5, title: "Corporate Story", tag: "Explainer" },
  { img: p6, title: "App Showcase", tag: "SaaS Promo" },
];

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

export function Portfolio() {
  const [openVideo, setOpenVideo] = useState<{ title: string } | null>(null);
  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <AnimatedBG variant="light"/>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
          className="mb-14"
        >
          <motion.h2
            variants={reveal}
            className="flex items-center gap-3 md:gap-5 leading-none"
          >
            <span
              aria-hidden
              className="inline-block rounded-full bg-[color:var(--brand-navy-deep)] shrink-0 h-3 w-3 md:h-5 md:w-5"
            />
            <span className="font-extrabold tracking-tight text-[color:var(--brand-red)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              Portfolio
            </span>
          </motion.h2>
          <motion.p variants={reveal} className="mt-6 text-muted-foreground max-w-xl">
            From playful explainers to eye-catching promos — let our portfolio speak for itself.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {items.map((it) => (
            <motion.button
              key={it.title}
              variants={reveal}
              whileHover={{ y: -6, scale: 1.02 }}
              type="button"
              onClick={() => setOpenVideo({ title: it.title })}
              className="card-zoom group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border block shadow-[var(--shadow-card)] text-left"
            >
              <img src={it.img} alt={it.title} loading="lazy" width={800} height={1000} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy-deep)] via-[color:var(--brand-navy-deep)]/30 to-transparent" />
              <span className="hover-overlay-tr" aria-hidden />
              <div className="absolute inset-0 grid place-items-center z-10">
                <span className="grid place-items-center h-14 w-14 rounded-full bg-[color:var(--brand-red)] text-white shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 ml-0.5 fill-current" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                <p className="text-xs text-[color:var(--brand-red)] uppercase tracking-wider">{it.tag}</p>
                <h3 className="mt-1 text-2xl font-semibold text-white">{it.title}</h3>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <VideoLightbox
        open={!!openVideo}
        onClose={() => setOpenVideo(null)}
        title={openVideo?.title}
      />
    </section>
  );
}