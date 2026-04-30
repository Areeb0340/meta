import { useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  Check,
  Play,
  Sparkles,
  Phone,
  ChevronDown,
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
  /** Hero */
  eyebrow?: string;
  heroTitle: string; // e.g. "2D Animation Services"
  heroSubtitle: string;
  heroImage: string;

  /** Intro section */
  introHeading: string; // e.g. "2D Animation"
  introBody: string;
  introImage: string;

  /** Portfolio */
  portfolioItems: PortfolioItem[];

  /** Why choose */
  whyHeading: string;
  whyItems: { title: string; body: string }[];

  /** Pricing */
  pricingPlans: PricingPkg[];

  /** Process */
  processHeading: string;
  processBody: string;
  processSteps: { title: string; body: string }[];

  /** FAQ */
  faqs: FAQItem[];

  /** Accent color override (optional). Defaults to brand cyan via existing tokens. */
  accentColor?: string; // hex
};

// ---------- Reveal helper ----------
const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const PROCESS_ICONS = [MessageCircle, PenTool, Film, Music2, ShieldCheck, Send];

// ============================================================
// Main template
// ============================================================
export function ServicePageTemplate(props: ServicePageProps) {
  const {
    eyebrow,
    heroTitle,
    heroSubtitle,
    heroImage,
    introHeading,
    introBody,
    introImage,
    portfolioItems,
    whyHeading,
    whyItems,
    pricingPlans,
    processHeading,
    processBody,
    processSteps,
    faqs,
  } = props;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow={eyebrow}
          title={heroTitle}
          subtitle={heroSubtitle}
          image={heroImage}
        />
        <Intro heading={introHeading} body={introBody} image={introImage} />
        <PortfolioBlock items={portfolioItems} />
        <WhyChoose heading={whyHeading} items={whyItems} />
        <ReserveCTA />
        <Pricing plans={pricingPlans} />
        <Process heading={processHeading} body={processBody} steps={processSteps} />
        <Testimonials />
        <FAQ items={faqs} />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

// ============================================================
// Hero
// ============================================================
function Hero({
  eyebrow,
  title,
  subtitle,
  image,
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
      <motion.img
        src={image}
        alt=""
        aria-hidden
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
      <motion.div
        aria-hidden
        style={{ opacity }}
        className="absolute inset-0 bg-black/10"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,15,44,0.92) 0%, rgba(10,15,44,0.78) 45%, rgba(10,15,44,0.55) 100%)",
        }}
      />
      <div className="relative container mx-auto px-4 md:px-6 min-h-[70vh] lg:min-h-[78vh] flex items-center py-20 lg:py-28">
        <div className="max-w-2xl">
          {eyebrow ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-cyan)]/40 bg-[color:var(--brand-cyan)]/10 px-4 py-1.5 text-xs text-[color:var(--brand-cyan)] backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
            </motion.div>
          ) : null}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button asChild variant="navy" size="xl" backLabel="Start Now">
              <a href="/#contact">Get Started</a>
            </Button>
            <Button asChild variant="hero" size="xl" backLabel="Live Chat">
              <a href="/#contact">Let's Talk</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Intro
// ============================================================
function Intro({
  heading,
  body,
  image,
}: {
  heading: string;
  body: string;
  image: string;
}) {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2
            variants={reveal}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[color:var(--brand-navy)]"
          >
            {heading.split(" ").map((word, i) =>
              i === 0 ? (
                <span key={i} className="text-[color:var(--brand-cyan)]">
                  {word}{" "}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </motion.h2>
          <motion.p
            variants={reveal}
            className="mt-6 text-muted-foreground text-base leading-relaxed"
          >
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-square max-w-[480px] mx-auto w-full"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--brand-cyan) 90%, white) 0%, var(--brand-cyan) 55%, var(--brand-navy) 100%)",
              boxShadow:
                "0 30px 60px -20px color-mix(in oklab, var(--brand-cyan) 45%, transparent)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-[4%] rounded-full services-ring-spin"
            style={{
              border: "2px dashed color-mix(in oklab, var(--brand-navy) 60%, transparent)",
            }}
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
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p variants={reveal} className="text-[color:var(--brand-cyan)] text-sm font-semibold tracking-[0.3em] uppercase">
            #Portfolio
          </motion.p>
          <motion.h2
            variants={reveal}
            className="mt-4 text-4xl md:text-5xl font-bold tracking-tight"
          >
            Our Successful <span className="text-[color:var(--brand-cyan)]">Project</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((it) => (
            <motion.button
              key={it.title}
              variants={reveal}
              type="button"
              onClick={() => setOpen({ title: it.title, src: it.videoUrl })}
              className="card-zoom group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 block text-left"
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
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
      <VideoLightbox
        open={!!open}
        onClose={() => setOpen(null)}
        title={open?.title}
        src={open?.src}
      />
    </section>
  );
}

// ============================================================
// Why Choose
// ============================================================
const WHY_ICONS = [Users, Rocket, Lightbulb];

function WhyChoose({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.h2
            variants={reveal}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]"
          >
            {heading}
          </motion.h2>
          <motion.p variants={reveal} className="mt-4 text-muted-foreground">
            Unleash your boundless animation potential, where possibilities are endless.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {items.map((it, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length];
            return (
              <motion.div
                key={it.title}
                variants={reveal}
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-card)] hover:border-[color:var(--brand-cyan)]/60 transition-colors"
              >
                <div className="grid place-items-center h-14 w-14 rounded-xl bg-gradient-to-br from-[color:var(--brand-cyan)] to-[color:var(--brand-navy)] text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--brand-navy)]">
                  {it.title}
                </h3>
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
// Reserve CTA banner
// ============================================================
function ReserveCTA() {
  return (
    <section className="relative py-16 bg-[color:var(--brand-navy)] overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 35%, transparent), transparent 70%)" }}
      />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">Reserve Your Spot!</h2>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto">
            Our creative animation services are just one button away.{" "}
            <a href="tel:+15550102025" className="text-[color:var(--brand-cyan)] underline-offset-4 hover:underline inline-flex items-center gap-1">
              <Phone className="h-4 w-4" /> Contact us today
            </a>{" "}
            and get the ball rolling!
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="hero" size="xl" backLabel="Start Now">
              <a href="/#contact">Get Started</a>
            </Button>
            <Button asChild variant="outlineCyan" size="xl" backLabel="Live Chat">
              <a href="/#contact">Let's Talk</a>
            </Button>
          </div>
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
      <div
        aria-hidden
        className="absolute top-10 left-1/2 -translate-x-1/2 text-[140px] md:text-[200px] font-extrabold tracking-tight text-[color:var(--brand-navy)]/[0.04] select-none pointer-events-none"
      >
        Pricing Plan
      </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.h2
            variants={reveal}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]"
          >
            Pricing <span className="text-[color:var(--brand-cyan)]">Plans</span>
          </motion.h2>
          <motion.p variants={reveal} className="mt-4 text-muted-foreground">
            Find a suitable customizable package that can be adjusted to fit your needs and budget.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
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
              <p className={`mt-1 text-xs ${p.highlighted ? "text-[color:var(--brand-cyan)]" : "text-[color:var(--brand-cyan)]"}`}>
                {p.tagline}
              </p>
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
              <Button
                asChild
                variant={p.highlighted ? "hero" : "navy"}
                size="lg"
                backLabel="Start Now"
                className="w-full mt-8"
              >
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
function Process({
  heading,
  body,
  steps,
}: {
  heading: string;
  body: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <section className="py-20 lg:py-24 bg-[color:var(--brand-navy)] text-white relative overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="max-w-2xl mb-14"
        >
          <motion.h2
            variants={reveal}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            {heading}
          </motion.h2>
          <motion.p variants={reveal} className="mt-4 text-white/75">
            {body}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {steps.map((s, i) => {
            const Icon = PROCESS_ICONS[i % PROCESS_ICONS.length];
            return (
              <motion.div
                key={s.title}
                variants={reveal}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 hover:border-[color:var(--brand-cyan)]/60 transition-colors"
              >
                <span className="absolute top-5 right-5 text-5xl font-extrabold text-white/10">
                  0{i + 1}
                </span>
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-[color:var(--brand-cyan)] text-[color:var(--brand-navy)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Testimonials (lightweight grid)
// ============================================================
const TESTIMONIALS = [
  { name: "Kathleen Torres", text: "An agency that creates engaging video content at great rates. They deliver more than they promise." },
  { name: "Kenzie", text: "Wonderful work for our digital marketing campaign — magnificent visuals delivered on time." },
  { name: "Michelle", text: "Skilled teammates across animation and 3D video. I highly recommend them for high-quality animation." },
  { name: "Mark Shandrow", text: "Easy to work with — quickly got through two explainer videos with the team." },
  { name: "Bob Gulart", text: "Greatest solutions for my project, top-notch quality. Originality and attention to detail." },
  { name: "Jorja", text: "Made a quick and interesting video that successfully promoted my small business online." },
];

function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]"
        >
          We Love Getting <span className="text-[color:var(--brand-cyan)]">Feedback</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={reveal}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-[color:var(--brand-cyan)] text-[color:var(--brand-navy)] font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--brand-navy)]">{t.name}</p>
                  <div className="flex items-center gap-0.5 text-[color:var(--brand-cyan)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.77l-5.2 2.73.99-5.78L1.58 7.62l5.82-.85L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ
// ============================================================
function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-24 bg-[color:var(--muted)]">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <p className="text-[color:var(--brand-cyan)] text-sm font-semibold tracking-[0.3em] uppercase">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
            Frequently Asked <br /> <span className="text-[color:var(--brand-cyan)]">Questions</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Everything you need to know about our animation services, pricing, and process.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="space-y-3"
        >
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={it.q}
                variants={reveal}
                className={`rounded-xl border bg-white overflow-hidden transition-colors ${
                  isOpen ? "border-[color:var(--brand-cyan)]" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-[color:var(--brand-navy)]">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[color:var(--brand-cyan)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {it.a}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Final CTA
// ============================================================
function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--brand-navy)] via-[color:var(--brand-navy)] to-[color:var(--brand-navy-deep)] p-10 md:p-16 text-center"
        >
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, var(--brand-cyan), transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Lights. Camera. <span className="text-[color:var(--brand-cyan)]">Action!</span>
            </h2>
            <p className="mt-4 text-white/75 max-w-xl mx-auto">
              Ready to bring your story to life? Let's craft something unforgettable together.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="hero" size="xl" backLabel="Start Now">
                <a href="/#contact">Get a Free Quote</a>
              </Button>
              <Button asChild variant="outlineCyan" size="xl" backLabel="Live Chat">
                <a href="/#contact">Talk to Us</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}