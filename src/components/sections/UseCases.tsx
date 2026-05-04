import { motion, type Variants } from "framer-motion";
import {
  Globe2,
  PlayCircle,
  GraduationCap,
  Share2,
  Megaphone,
  Layers,
  Presentation,
  Smartphone,
  Users2,
  HeartHandshake,
} from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const USE_CASES = [
  { icon: Globe2,         text: "Animated explainer videos for websites and landing pages" },
  { icon: PlayCircle,     text: "Product and service demonstration videos" },
  { icon: GraduationCap,  text: "Educational and e-learning course content" },
  { icon: Share2,         text: "Social media animated videos, reels, and stories" },
  { icon: Megaphone,      text: "Animated ads for YouTube, Instagram, Facebook, TikTok, and LinkedIn" },
  { icon: Layers,         text: "SaaS product onboarding and feature tutorial videos" },
  { icon: Presentation,   text: "Startup pitch decks and investor presentation videos" },
  { icon: Smartphone,     text: "App walkthrough and UI demonstration videos" },
  { icon: Users2,         text: "Internal training and HR communication videos" },
  { icon: HeartHandshake, text: "Non-profit awareness and fundraising campaign videos" },
];

export function UseCases() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* soft background accents */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--brand-navy) 60%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--brand-navy) 60%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-30 -z-10"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 50%, transparent), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky title side */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={stagger}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <motion.p
              variants={reveal}
              className="text-[color:var(--brand-cyan)] text-sm font-semibold tracking-[0.3em] uppercase"
            >
              # Ideal Use Cases
            </motion.p>
            <motion.h2
              variants={reveal}
              className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-[color:var(--brand-navy)]"
            >
              What Can{" "}
              <span className="text-[color:var(--brand-cyan)]">2D Animation</span>{" "}
              Be Used For?
            </motion.h2>
            <motion.p
              variants={reveal}
              className="mt-6 text-muted-foreground text-base leading-relaxed max-w-md"
            >
              2D animation is one of the most versatile formats in video production.
              At Metagenix, we create 2D animated content for a wide range of business
              applications — from explainer videos to social campaigns and beyond.
            </motion.p>

            <motion.div variants={reveal} className="mt-8 hidden lg:flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[color:var(--brand-cyan)]" />
              <span className="text-sm text-[color:var(--brand-navy)]/70">
                Scroll through every use case →
              </span>
            </motion.div>
          </motion.div>

          {/* Vertical timeline list (no cards) */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            variants={stagger}
            className="lg:col-span-7 relative"
          >
            {/* vertical line */}
            <span
              aria-hidden
              className="absolute left-5 md:left-7 top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent)",
              }}
            />

            {USE_CASES.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.li
                  key={uc.text}
                  variants={reveal}
                  className="group relative pl-16 md:pl-20 py-4 md:py-5 border-b border-dashed border-[color:var(--brand-navy)]/10 last:border-0"
                >
                  {/* number */}
                  <span className="absolute left-12 md:left-16 -top-1 text-[10px] font-semibold tracking-widest text-[color:var(--brand-cyan)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* icon node */}
                  <span
                    className="absolute left-0 top-3 grid place-items-center h-11 w-11 md:h-14 md:w-14 rounded-full bg-white shadow-[0_8px_24px_-10px_color-mix(in_oklab,var(--brand-navy)_45%,transparent)] ring-1 ring-[color:var(--brand-navy)]/10 transition-all duration-300 group-hover:ring-[color:var(--brand-cyan)] group-hover:scale-110"
                  >
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-[color:var(--brand-navy)] transition-colors group-hover:text-[color:var(--brand-cyan)]" />
                  </span>

                  {/* text */}
                  <p className="text-base md:text-lg font-medium text-[color:var(--brand-navy)] leading-snug transition-colors group-hover:text-[color:var(--brand-cyan)]">
                    {uc.text}
                  </p>

                  {/* hover underline */}
                  <span
                    aria-hidden
                    className="block mt-2 h-px w-0 bg-[color:var(--brand-cyan)] transition-all duration-500 group-hover:w-24"
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
