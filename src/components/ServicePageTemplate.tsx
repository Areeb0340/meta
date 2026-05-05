import { useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  Check,
  Play,
  Sparkles,

  Users,
  Rocket,
  Lightbulb,
  MessageCircle,
  PenTool,
  Film,
  Music2,
  ShieldCheck,
  Send,
  ArrowUpRight,
  Cpu,
  HeartPulse,
  Wallet,
  GraduationCap,
  ShoppingBag,
  Building2,
  HandHeart,
  Landmark,
  Megaphone,
  Scale,
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { VideoLightbox } from "./VideoLightbox";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";


// ============================================================
// Reusable Animated Background
// ============================================================
function AnimatedBG({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const gridColor =
    variant === "light"
      ? "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)"
      : "linear-gradient(color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px)";

  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: gridColor,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 h-[1000px] w-[500px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 70%, transparent), transparent 70%)",
        }}
      />
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: "120%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "linear", delay: i * 1.4 }}
          className="absolute h-px w-[35%] pointer-events-none"
          style={{
            top: `${15 + i * 20}%`,
            background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand-cyan) 100%, white) 50%, transparent)",
            boxShadow: "0 0 10px color-mix(in oklab, var(--brand-cyan) 80%, transparent), 0 0 22px color-mix(in oklab, var(--brand-cyan) 60%, transparent)",
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
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

// ---------- Types ----------
export type PortfolioItem = { img: string; title: string; videoUrl?: string };
export type PricingPkg = {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};
export type FAQItem = { q: string; a: string };



export type ServicePageProps = {
  eyebrow?: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  introHeading: string;
  introBody: string;
  introImage: string;
  portfolioItems: PortfolioItem[];
  whyHeading: string;
  whyItems: { title: string; body: string }[];
  pricingPlans: PricingPkg[];
  processHeading: string;
  processBody: string;
  processSteps: { title: string; body: string }[];
  faqs: FAQItem[];
  accentColor?: string,
    useCasesHeading?: string;
  useCasesEyebrow?: string;
  useCasesIntro?: string;
  useCases?: string[];

  industriesHeading?: string;
  industriesEyebrow?: string;
  industriesIntro?: string;
  industries?: string[];

};

// ---------- Shared Variants ----------
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

const PROCESS_ICONS = [MessageCircle, PenTool, Film, Music2, ShieldCheck, Send];

// ============================================================
// Main template
// ============================================================
export function ServicePageTemplate(props: ServicePageProps) {
  const {
    eyebrow, heroTitle, heroSubtitle, heroImage,
    introHeading, introBody, introImage,
    portfolioItems, whyHeading, whyItems,
    pricingPlans, processHeading, processBody, processSteps, useCasesHeading, useCasesEyebrow,
  useCasesIntro,
  useCases,

  industriesHeading,
  industriesEyebrow,
  industriesIntro,
  industries
  } = props;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero eyebrow={eyebrow} title={heroTitle} subtitle={heroSubtitle} image={heroImage} />
        <Intro heading={introHeading} body={introBody} image={introImage} />
    {/* 👇 YE YAHAN ADD KAR */}
{useCases && useCases.length > 0 && (
  <UseCases
    eyebrow={useCasesEyebrow}
    heading={useCasesHeading || ""}
    intro={useCasesIntro}
    items={useCases}
  />
)}
        <PortfolioBlock items={portfolioItems} />
        {industries && industries.length > 0 && (
  <Industries
    eyebrow={industriesEyebrow}
    heading={industriesHeading || ""}
    intro={industriesIntro}
    items={industries}
  />
)}
    
        <WhyChoose heading={whyHeading} items={whyItems} />
        <Pricing plans={pricingPlans} />
        <Process heading={processHeading} body={processBody} steps={processSteps} />
        <Testimonials />
        <FAQ/>
      </main>
      <Footer />
    </div>
  );
}

// ============================================================
// Hero
// ============================================================
function Hero({
  eyebrow, title, subtitle, image,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section className="relative overflow-hidden">
      <AnimatedBG />
      <motion.img
        src={image}
        alt=""
        aria-hidden
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
      <motion.div aria-hidden style={{ opacity }} className="absolute inset-0 bg-black/10" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(10,15,44,0.92) 0%, rgba(10,15,44,0.78) 45%, rgba(10,15,44,0.55) 100%)",
        }}
      />
      <div className="relative container mx-auto px-4 md:px-6 min-h-[70vh] lg:min-h-[78vh] flex items-center py-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-2xl"
        >
          {eyebrow ? (
            <motion.div
              variants={reveal}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-cyan)]/40 bg-[color:var(--brand-cyan)]/10 px-4 py-1.5 text-xs text-[color:var(--brand-cyan)] backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
            </motion.div>
          ) : null}
          <motion.h1
            variants={reveal}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={reveal}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/85 max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={reveal}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button asChild variant="navy" size="xl" backLabel="Start Now">
              <a href="/#contact">Get Started</a>
            </Button>
            <Button asChild variant="hero" size="xl" backLabel="Live Chat">
              <a href="/#contact">Let's Talk</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Intro
// ============================================================
function Intro({ heading, body, image }: { heading: string; body: string; image: string }) {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <AnimatedBG />
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left copy */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={reveal}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[color:var(--brand-navy)]"
          >
            {heading.split(" ").map((word, i) =>
              i === 0 ? (
                <span key={i} className="text-[color:var(--brand-cyan)]">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </motion.h2>
          <motion.p variants={reveal} className="mt-6 text-muted-foreground text-base leading-relaxed">
            {body}
          </motion.p>
          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="navy" size="xl" backLabel="Start Now">
              <a href="/#contact">Get Quote</a>
            </Button>
            <Button asChild variant="hero" size="xl" backLabel="Live Chat">
              <a href="/#contact">Let's Talk</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square max-w-[480px] mx-auto w-full"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--brand-cyan) 90%, white) 0%, var(--brand-cyan) 55%, var(--brand-navy) 100%)",
              boxShadow: "0 30px 60px -20px color-mix(in oklab, var(--brand-cyan) 45%, transparent)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-[4%] rounded-full services-ring-spin"
            style={{ border: "2px dashed color-mix(in oklab, var(--brand-navy) 60%, transparent)" }}
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[18%] rounded-full overflow-hidden border-[6px] border-white shadow-[var(--shadow-elegant)]"
          >
            <img src={image} alt={heading} className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}



// ============================================================
// Use Cases
// ============================================================
function UseCases({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: string[];
}) {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[color:var(--brand-navy-deep)] text-white">
      {/* Soft animated mesh gradient orbs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-40 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 80%, transparent), transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full opacity-30 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #FF6B9D, transparent 70%)" }}
      />
      {/* Vertical scanline grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start mb-16"
        >
          <motion.div variants={reveal}>
            {eyebrow ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-cyan)]/40 bg-[color:var(--brand-cyan)]/10 px-4 py-1.5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-cyan)] animate-pulse" />
                <span className="text-[color:var(--brand-cyan)] text-[11px] font-semibold tracking-[0.3em] uppercase">{eyebrow}</span>
              </span>
            ) : null}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              {heading.split("?")[0]}
              <span className="text-[color:var(--brand-cyan)]">?</span>
            </h2>
          </motion.div>
          {intro ? (
            <motion.p variants={reveal} className="text-base md:text-lg text-white/70 leading-relaxed lg:pt-12">
              {intro}
            </motion.p>
          ) : null}
        </motion.div>

        {/* Editorial numbered list — eye-catching magazine layout */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
          className="relative max-w-6xl mx-auto"
        >
          {items.map((it, i) => (
            <motion.li
              key={it}
              variants={reveal}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-8 border-b border-white/10 py-6 md:py-7 cursor-default"
            >
              {/* Hover sweeping fill bar */}
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-700 ease-out pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, color-mix(in oklab, var(--brand-cyan) 14%, transparent), transparent 70%)",
                }}
              />
              {/* Animated play/pulse marker — replaces numbers */}
              <span className="relative grid place-items-center h-12 w-12 md:h-16 md:w-16 shrink-0">
                {/* Pulsing rings */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-[color:var(--brand-cyan)]/30 group-hover:border-[color:var(--brand-cyan)]/70 transition-colors"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-[color:var(--brand-cyan)]/40 animate-ping opacity-0 group-hover:opacity-60"
                />
                {/* Center dot that morphs into play triangle */}
                <span
                  aria-hidden
                  className="relative h-3 w-3 md:h-3.5 md:w-3.5 rounded-full bg-[color:var(--brand-cyan)] group-hover:scale-150 transition-transform duration-500"
                  style={{
                    boxShadow:
                      "0 0 18px color-mix(in oklab, var(--brand-cyan) 80%, transparent)",
                  }}
                />
                {/* Connector line to title */}
                <span
                  aria-hidden
                  className="absolute left-full top-1/2 h-px w-0 group-hover:w-6 md:group-hover:w-10 bg-gradient-to-r from-[color:var(--brand-cyan)] to-transparent transition-all duration-500"
                />
              </span>

              {/* Title — slides right on hover */}
              <motion.p
                whileHover={{ x: 12 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="relative text-lg md:text-2xl font-semibold text-white/90 group-hover:text-white leading-snug transition-colors"
              >
                {it}
              </motion.p>

              {/* Diagonal arrow chip */}
              <motion.span
                aria-hidden
                className="relative grid place-items-center h-11 w-11 md:h-14 md:w-14 rounded-full border border-white/15 group-hover:border-[color:var(--brand-cyan)] group-hover:bg-[color:var(--brand-cyan)] group-hover:text-[color:var(--brand-navy)] text-white/70 transition-all duration-300"
              >
                <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:rotate-45" />
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}



// ============================================================
// Industries We Serve
// ============================================================
function Industries({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: string[];
}) {
  const INDUSTRY_ICONS = [Cpu, HeartPulse, Wallet, GraduationCap, ShoppingBag, Building2, HandHeart, Landmark, Megaphone, Scale];
  const ACCENTS = [
    "var(--brand-cyan)",
    "#FF6B9D",
    "#FFB547",
    "#7C5CFF",
    "#22D3A0",
    "#3FA9F5",
    "#FF7A59",
    "#A78BFA",
    "#F472B6",
    "#34D399",
  ];
  return (
    <section className="py-20 lg:py-28 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--brand-navy-deep) 0%, var(--brand-navy) 60%, color-mix(in oklab, var(--brand-navy) 70%, var(--brand-cyan)) 100%)" }}>
      {/* floating animated bubbles - playful 2D feel */}
      {[
        { c: "var(--brand-cyan)", t: "10%", l: "8%", s: 80, d: 6 },
        { c: "#FF6B9D", t: "70%", l: "15%", s: 50, d: 8 },
        { c: "#FFB547", t: "20%", l: "85%", s: 60, d: 7 },
        { c: "#7C5CFF", t: "75%", l: "80%", s: 90, d: 9 },
        { c: "#22D3A0", t: "45%", l: "92%", s: 40, d: 5 },
      ].map((b, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: b.d, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full blur-2xl pointer-events-none"
          style={{ top: b.t, left: b.l, height: b.s, width: b.s, background: b.c, opacity: 0.35 }}
        />
      ))}
      {/* dotted grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="max-w-3xl mb-12 text-center mx-auto"
        >
          {eyebrow ? (
            <motion.div variants={reveal} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-cyan)]" />
              <span className="text-white/90 text-xs font-semibold tracking-[0.25em] uppercase">{eyebrow}</span>
            </motion.div>
          ) : null}
          <motion.h2
            variants={reveal}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            {heading}
          </motion.h2>
          {intro ? (
            <motion.p variants={reveal} className="mt-4 text-white/70">
              {intro}
            </motion.p>
          ) : null}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
        >
          {items.map((it, i) => {
            const Icon = INDUSTRY_ICONS[i % INDUSTRY_ICONS.length];
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.div
                key={it}
                variants={reveal}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
                className="group relative rounded-2xl p-5 text-center border border-white/10 bg-white/[0.06] backdrop-blur-md overflow-hidden hover:border-white/30 transition-all"
              >
                <span
                  aria-hidden
                  className="absolute -top-12 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full blur-2xl opacity-50 group-hover:opacity-90 transition-opacity"
                  style={{ background: accent }}
                />
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="relative grid place-items-center h-14 w-14 mx-auto rounded-2xl shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${accent}, color-mix(in oklab, ${accent} 60%, black))` }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <p className="relative mt-4 text-sm font-semibold text-white leading-snug">
                  {it}
                </p>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-3/4 rounded-full transition-all duration-500"
                  style={{ background: accent }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Portfolio
// ============================================================
function PortfolioBlock({ items }: { items: PortfolioItem[] }) {
  const [open, setOpen] = useState<{ title: string; src?: string } | null>(null);
  return (
    <section className="py-20 lg:py-24 bg-[color:var(--brand-navy-deep)] text-white relative">
      <AnimatedBG />
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p variants={reveal} className="text-[color:var(--brand-cyan)] text-sm font-semibold tracking-[0.3em] uppercase">
            #Portfolio
          </motion.p>
          <motion.h2 variants={reveal} className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Our Successful <span className="text-[color:var(--brand-cyan)]">Project</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
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
              onClick={() => setOpen({ title: it.title, src: it.videoUrl })}
              className="card-zoom group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border block shadow-[var(--shadow-card)] text-left"
            >
              <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy-deep)] via-[color:var(--brand-navy-deep)]/30 to-transparent" />
              <span className="hover-overlay-tr" aria-hidden />
              <div className="absolute inset-0 grid place-items-center z-10">
                <span className="grid place-items-center h-14 w-14 rounded-full bg-[color:var(--brand-cyan)] text-[color:var(--brand-navy)] shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 ml-0.5 fill-current" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
      <VideoLightbox open={!!open} onClose={() => setOpen(null)} title={open?.title} src={open?.src} />
    </section>
  );
}

// ============================================================
// Why Choose
// ============================================================
const WHY_ICONS = [Users, Rocket, Lightbulb];

function WhyChoose({ heading, items }: { heading: string; items: { title: string; body: string }[] }) {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <AnimatedBG variant="light" />
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
            {heading}
          </motion.h2>
          <motion.p variants={reveal} className="mt-4 text-muted-foreground">
            Unleash your boundless animation potential, where possibilities are endless.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {items.map((it, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length];
            return (
              <motion.div
                key={it.title}
                variants={reveal}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-card)] hover:border-[color:var(--brand-cyan)]/60 transition-colors"
              >
                <div className="grid place-items-center h-14 w-14 rounded-xl bg-gradient-to-br from-[color:var(--brand-cyan)] to-[color:var(--brand-navy)] text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--brand-navy)]">{it.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

// ============================================================
// Pricing
// ============================================================
function Pricing({ plans }: { plans: PricingPkg[] }) {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <AnimatedBG />
      <div
        aria-hidden
        className="absolute top-10 left-1/2 -translate-x-1/2 text-[140px] md:text-[200px] font-extrabold tracking-tight text-[color:var(--brand-navy)]/[0.04] select-none pointer-events-none"
      >
        Pricing Plan
      </div>
      <div className="container mx-auto px-4 md:px-6 relative">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.h2 variants={reveal} className="text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
            Pricing <span className="text-[color:var(--brand-cyan)]">Plans</span>
          </motion.h2>
          <motion.p variants={reveal} className="mt-4 text-muted-foreground">
            Find a suitable customizable package that can be adjusted to fit your needs and budget.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={reveal}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                p.highlighted
                  ? "bg-[color:var(--brand-navy)] text-white shadow-[var(--shadow-elegant)] scale-[1.02]"
                  : "bg-white border border-border text-[color:var(--brand-navy)] shadow-[var(--shadow-card)]"
              }`}
            >
              {p.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--brand-cyan)] px-3 py-1 text-xs font-semibold text-[color:var(--brand-navy)]">
                  Most Popular
                </span>
              ) : null}
              <div className={`text-sm uppercase tracking-wider ${p.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                {p.name}
              </div>
              <p className="mt-1 text-xs text-[color:var(--brand-cyan)]">{p.tagline}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold">{p.price}</span>
              </div>
              <hr className={`my-6 ${p.highlighted ? "border-white/15" : "border-border"}`} />
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-[color:var(--brand-cyan)]/15 text-[color:var(--brand-cyan)] shrink-0">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className={p.highlighted ? "text-white/85" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.highlighted ? "hero" : "navy"} size="lg" backLabel="Start Now" className="w-full mt-8">
                <a href="/#contact">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Process
// ============================================================
function Process({ heading, body, steps }: { heading: string; body: string; steps: { title: string; body: string }[] }) {
  return (
    <section className="py-24 lg:py-32 text-white relative overflow-hidden bg-[color:var(--brand-navy-deep)]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "linear-gradient(color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 h-[460px] w-[460px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 70%, transparent), transparent 70%)" }}
      />
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: "120%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "linear", delay: i * 1.4 }}
          className="absolute h-px w-[35%] pointer-events-none"
          style={{
            top: `${15 + i * 20}%`,
            background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand-cyan) 80%, white) 50%, transparent)",
            boxShadow: "0 0 10px color-mix(in oklab, var(--brand-cyan) 80%, transparent), 0 0 22px color-mix(in oklab, var(--brand-cyan) 60%, transparent)",
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={`p-${i}`}
          aria-hidden
          animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          className="absolute h-1.5 w-1.5 rounded-full pointer-events-none"
          style={{
            top: `${(i * 9 + 12) % 90}%`,
            left: `${(i * 13 + 7) % 95}%`,
            background: "var(--brand-cyan)",
            boxShadow: "0 0 8px var(--brand-cyan)",
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={stagger}
          className="max-w-2xl mb-14 text-center mx-auto"
        >
          <motion.p variants={reveal} className="text-[color:var(--brand-cyan)] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Our Workflow
          </motion.p>
          <motion.h2 variants={reveal} className="text-3xl md:text-5xl font-bold tracking-tight">
            {heading}
          </motion.h2>
          <motion.p variants={reveal} className="mt-4 text-white/75">
            {body}
          </motion.p>
        </motion.div>

        {/* Step Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {steps.map((s, i) => {
            const Icon = PROCESS_ICONS[i % PROCESS_ICONS.length];
            return (
              <motion.div
                key={s.title}
                variants={reveal}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-7 hover:border-[color:var(--brand-cyan)] transition-all overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 30% 0%, color-mix(in oklab, var(--brand-cyan) 25%, transparent), transparent 60%)" }}
                />
                <span className="absolute top-5 right-5 text-5xl font-extrabold text-white/10">
                  0{i + 1}
                </span>
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-[color:var(--brand-cyan)] text-[color:var(--brand-navy)] shadow-[0_0_20px_color-mix(in_oklab,var(--brand-cyan)_60%,transparent)] group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold relative">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed relative">{s.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
