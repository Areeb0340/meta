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
  accentColor?: string;
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
    pricingPlans, processHeading, processBody, processSteps
  } = props;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero eyebrow={eyebrow} title={heroTitle} subtitle={heroSubtitle} image={heroImage} />
        <Intro heading={introHeading} body={introBody} image={introImage} />
        <PortfolioBlock items={portfolioItems} />
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
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={reveal}
            className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed"
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
