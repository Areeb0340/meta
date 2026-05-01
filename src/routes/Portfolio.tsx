
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Check, Sparkles } from "lucide-react";


import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import { VideoLightbox } from "../components/VideoLightbox";
import { GetAQuoteTab } from "../components/GetAQuoteTab";
import { Footer } from "../components/Footer";
import { Contact } from "../components/sections/Contact";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Header } from "../components/Header";
import { Stats } from "../components/sections/Stats";

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
        className="absolute inset-0 opacity-[0.18]"
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

const tabs = [
  {
    id: "2d", label: "2D Animation",
    desc: "Vibrant, character-driven 2D animated explainer videos that engage, inform, and convert.",
    videos: [
      { thumb: p1, title: "Brand Mascot" }, { thumb: p4, title: "Kinetic Promo" }, { thumb: p3, title: "Onboarding" },
      { thumb: p5, title: "Corporate Story" }, { thumb: p2, title: "Social Ad" }, { thumb: p6, title: "App Intro" },
    ],
  },
  {
    id: "3d", label: "3D Animation",
    desc: "Premium 3D product visualisations and cinematic brand films that make a lasting impression.",
    videos: [
      { thumb: p2, title: "Product Reveal" }, { thumb: p6, title: "App Showcase" }, { thumb: p1, title: "Character 3D" },
      { thumb: p4, title: "Logo Sting" }, { thumb: p3, title: "Arch Viz" }, { thumb: p5, title: "Brand Film" },
    ],
  },
  {
    id: "saas", label: "SaaS Explainer",
    desc: "Clear, engaging animated demos that simplify complex platforms and boost sign-ups.",
    videos: [
      { thumb: p6, title: "Product Tour" }, { thumb: p2, title: "Feature Spot" }, { thumb: p3, title: "How It Works" },
      { thumb: p4, title: "Launch Promo" }, { thumb: p1, title: "Dashboard Demo" }, { thumb: p5, title: "Onboarding Flow" },
    ],
  },
  {
    id: "corporate", label: "Corporate Videos",
    desc: "Polished corporate videos for training, investor presentations, and stakeholder communications.",
    videos: [
      { thumb: p5, title: "Team Culture" }, { thumb: p3, title: "Brand Story" }, { thumb: p4, title: "Annual Report" },
      { thumb: p6, title: "Investor Reel" }, { thumb: p1, title: "Overview" }, { thumb: p2, title: "Leadership" },
    ],
  },
  {
    id: "explainer", label: "Explainer Video",
    desc: "Tell your brand story in 60–90 seconds with best-in-class animated explainer videos.",
    videos: [
      { thumb: p3, title: "Whiteboard" }, { thumb: p1, title: "2D Explainer" }, { thumb: p6, title: "App Explainer" },
      { thumb: p5, title: "Service Overview" }, { thumb: p2, title: "Startup Pitch" }, { thumb: p4, title: "Product Demo" },
    ],
  },
  {
    id: "edit", label: "Video Editing",
    desc: "Expert colour grading, motion graphics integration, sound design, and post-production finishing.",
    videos: [
      { thumb: p4, title: "Highlight Reel" }, { thumb: p5, title: "Event Recap" }, { thumb: p1, title: "Social Cuts" },
      { thumb: p2, title: "Director's Cut" }, { thumb: p6, title: "Interview Edit" }, { thumb: p3, title: "Promo Cut" },
    ],
  },
  {
    id: "motion", label: "Motion Graphics",
    desc: "Dynamic animated sequences for digital ads, broadcast, social media, and brand campaigns.",
    videos: [
      { thumb: p2, title: "Title Sequence" }, { thumb: p6, title: "Social Ad" }, { thumb: p1, title: "Broadcast Bumper" },
      { thumb: p3, title: "Infographic" }, { thumb: p5, title: "Lower Thirds" }, { thumb: p4, title: "Opener" },
    ],
  },
  {
    id: "whiteboard", label: "Whiteboard Video",
    desc: "Hand-drawn whiteboard videos ideal for education, SaaS onboarding, and complex explanations.",
    videos: [
      { thumb: p5, title: "Edu Explainer" }, { thumb: p4, title: "SaaS Walkthrough" }, { thumb: p2, title: "Medical Guide" },
      { thumb: p6, title: "Finance Overview" }, { thumb: p1, title: "Training Module" }, { thumb: p3, title: "Process Flow" },
    ],
  },
  {
    id: "logo", label: "Logo Animation",
    desc: "Custom animated logos — sleek, dynamic motion sequences for intros, social, and broadcast.",
    videos: [
      { thumb: p1, title: "Logo Reveal" }, { thumb: p3, title: "Brand Sting" }, { thumb: p5, title: "Intro Sequence" },
      { thumb: p4, title: "Social Ident" }, { thumb: p6, title: "Broadcast Logo" }, { thumb: p2, title: "Event Bumper" },
    ],
  },
  {
    id: "cgi", label: "CGI Video",
    desc: "Photorealistic CGI for product demos, architectural visualisations, VFX, and brand campaigns.",
    videos: [
      { thumb: p6, title: "Product CGI" }, { thumb: p2, title: "Arch Viz" }, { thumb: p4, title: "VFX Reel" },
      { thumb: p1, title: "Brand CGI" }, { thumb: p5, title: "Cinematic" }, { thumb: p3, title: "Packshot" },
    ],
  },
];

const tiers = [
  {
    name: "Starter", price: "$499", tag: "Best for short social posts",
    features: ["Up to 30 seconds video", "Script + storyboard", "2D motion graphics", "1 round of revisions", "HD 1080p delivery"],
    cta: "Start Project", highlighted: false,
  },
  {
    name: "Growth", price: "$1,299", tag: "Most popular",
    features: ["Up to 90 seconds video", "Script + voiceover + SFX", "Custom 2D character animation", "3 rounds of revisions", "4K UHD delivery", "Priority support"],
    cta: "Get Growth", highlighted: true,
  },
  {
    name: "Studio", price: "$2,999", tag: "Cinematic 3D & long form",
    features: ["Up to 3 minutes video", "Full 3D animation pipeline", "Custom voice talent", "Unlimited revisions", "4K + source files", "Dedicated producer"],
    cta: "Talk to Sales", highlighted: false,
  },
];

export function PortfolioPage() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;
  const [openVideo, setOpenVideo] = useState<{ title: string } | null>(null);

  return (
    
    <div className="min-h-screen flex flex-col bg-[color:var(--brand-navy)]">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-12 text-center">
          <AnimatedBG/>
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-[color:var(--brand-cyan)] text-sm font-semibold uppercase tracking-wider mb-4">Our Work</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">Portfolio</h1>
      
            <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg">
              Explore our animation work across 10 categories. Pick a service to view samples.
            </p>
          </div>
        </section>

        {/* Tabs + Cards (mirrors home Our Services design) */}
        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10 max-w-5xl mx-auto">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`px-3 py-2.5 rounded-full text-sm font-medium transition-all text-center ${
                    active === t.id
                    ? "bg-[color:var(--brand-cyan)] text-[color:var(--brand-navy)] shadow-[var(--shadow-glow)]"
                    : "bg-white/5 border border-white/15 text-white/70 hover:border-[color:var(--brand-cyan)] hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <p className="text-center text-white/60 text-sm md:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
              {current.desc}
            </p>

            <motion.div
              key={current.id}
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {current.videos.map((v, i) => (
                <motion.button
                  key={`${current.id}-${i}`}
                  type="button"
                  onClick={() => setOpenVideo({ title: v.title })}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="card-zoom group relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-[color:var(--brand-cyan)] transition-all text-left"
                >
                  <img src={v.thumb} alt={v.title} loading="lazy" width={800} height={450} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy-deep)] via-[color:var(--brand-navy-deep)]/30 to-transparent" />
                  <span className="hover-overlay-tr" aria-hidden />
                  <div className="absolute inset-0 grid place-items-center z-10">
                    <span className="grid place-items-center h-12 w-12 rounded-full bg-[color:var(--brand-cyan)] text-[color:var(--brand-navy)] shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 ml-0.5 fill-current" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 z-10">
                    <p className="text-xs text-[color:var(--brand-cyan)] uppercase tracking-wider font-semibold">{current.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">{v.title}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>
<Stats/>
        {/* Pricing section (copied from /pricing) */}
        <section className="bg-white py-24 relative overflow-hidden">
          <AnimatedBG variant="light" />
          <div className="container mx-auto px-4 md:px-6 text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-red)]/40 bg-[color:var(--brand-red)]/10 px-4 py-1.5 text-xs text-[color:var(--brand-red)]">
              <Sparkles className="h-3.5 w-3.5" /> Transparent pricing
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
              Plans that <span className="text-[color:var(--brand-red)]">scale</span> with your story
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
              Choose a package or mix-and-match. Every project is crafted in-house by senior animators.
            </p>
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={`relative rounded-2xl p-8 border bg-white transition-all duration-300 hover:-translate-y-2 ${
                    t.highlighted
                      ? "border-[color:var(--brand-red)] shadow-[var(--shadow-elegant)] scale-[1.02]"
                      : "border-border shadow-[var(--shadow-card)] hover:border-[color:var(--brand-red)]/60"
                  }`}
                >
                  {t.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--brand-red)] px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <div className="text-sm uppercase tracking-wider text-muted-foreground">{t.name}</div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-[color:var(--brand-navy)]">{t.price}</span>
                    <span className="text-muted-foreground">/project</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.tag}</p>
                  <ul className="mt-6 space-y-3">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-[color:var(--brand-red)]/10 text-[color:var(--brand-red)]">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={t.highlighted ? "hero" : "outlineCyan"}
                    size="lg"
                    className="w-full mt-8"
                  >
                    <Link to="/">{t.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section (reused) */}
        <Contact />
      </main>
      <Footer />
      <GetAQuoteTab />

      <VideoLightbox open={!!openVideo} onClose={() => setOpenVideo(null)} title={openVideo?.title} />
    </div>
  );
}
