import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";


import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
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

const tabs = [
  {
    id: "2d", label: "2D Animation",
    desc: "Bring your brand story to life with vibrant, character-driven 2D animated explainer videos. Our 2D animation services cover everything from product explainers and educational videos to animated ads and social media content — crafted to engage, inform, and convert.",
    videos: [{ thumb: p1, title: "Brand Mascot" }, { thumb: p4, title: "Kinetic Promo" }, { thumb: p3, title: "Onboarding" }, { thumb: p5, title: "Corporate Story" }],
  },
  {
    id: "3d", label: "3D Animation",
    desc: "Add depth, realism, and a premium look to your brand with our professional 3D animation services. From 3D product visualisations to cinematic brand films, our 3D explainer videos make a lasting impression on every screen.",
    videos: [{ thumb: p2, title: "Product Reveal" }, { thumb: p6, title: "App Showcase" }, { thumb: p1, title: "Character 3D" }, { thumb: p4, title: "Logo Sting" }],
  },
  {
    id: "saas", label: "SaaS Explainer",
    desc: "Help your users understand your software in seconds. Our SaaS explainer videos simplify complex platforms into clear, engaging animated demos — reducing churn, boosting sign-ups, and shortening your sales cycle.",
    videos: [{ thumb: p6, title: "Product Tour" }, { thumb: p2, title: "Feature Spot" }, { thumb: p3, title: "How it works" }, { thumb: p4, title: "Launch Promo" }],
  },
  {
    id: "corporate", label: "Corporate Videos",
    desc: "Communicate your company's vision, culture, and value with polished corporate videos. Metagenix produces animated and live-motion corporate videos for internal training, investor presentations, company overviews, and stakeholder communications.",
    videos: [{ thumb: p5, title: "Team Culture" }, { thumb: p3, title: "Brand Story" }, { thumb: p4, title: "Annual Report" }, { thumb: p6, title: "Investor Reel" }],
  },
  {
    id: "explainer", label: "Explainer Video",
    desc: "Tell your brand story in 60–90 seconds. Metagenix is a leading explainer video production company creating best-in-class animated explainer videos for startups, enterprises, and marketing agencies worldwide.",
    videos: [{ thumb: p3, title: "Whiteboard" }, { thumb: p1, title: "2D Explainer" }, { thumb: p6, title: "App Explainer" }, { thumb: p5, title: "Service Overview" }],
  },
  {
    id: "edit", label: "Video Editing",
    desc: "Take your raw footage to the next level. Our video editing services include colour grading, motion graphics integration, sound design, subtitling, and post-production finishing — delivering a polished final product ready for any platform.",
    videos: [{ thumb: p4, title: "Highlight Reel" }, { thumb: p5, title: "Event Recap" }, { thumb: p1, title: "Social Cuts" }, { thumb: p2, title: "Director's Cut" }],
  },
  {
    id: "motion", label: "Motion Graphics",
    desc: "Make your content impossible to ignore. As a leading motion graphics company, Metagenix designs dynamic animated sequences for digital ads, presentations, social media, broadcast, and brand campaigns — blending design and movement into compelling visual experiences.",
    videos: [{ thumb: p2, title: "Title Sequence" }, { thumb: p6, title: "Social Ad" }, { thumb: p1, title: "Broadcast Bumper" }, { thumb: p3, title: "Infographic" }],
  },
  {
    id: "whiteboard", label: "Whiteboard Video",
    desc: "Simplify complex ideas with engaging, hand-drawn whiteboard videos. Our whiteboard video production services are ideal for educational content, SaaS onboarding, finance, healthcare, and any brand that needs to explain a big idea clearly and memorably.",
    videos: [{ thumb: p5, title: "Edu Explainer" }, { thumb: p4, title: "SaaS Walkthrough" }, { thumb: p2, title: "Medical Guide" }, { thumb: p6, title: "Finance Overview" }],
  },
  {
    id: "logo", label: "Logo Animation",
    desc: "Make your brand mark unforgettable with a custom animated logo. Our logo animation services transform static logos into sleek, dynamic motion sequences — perfect for video intros, social media, presentations, and broadcast content.",
    videos: [{ thumb: p1, title: "Logo Reveal" }, { thumb: p3, title: "Brand Sting" }, { thumb: p5, title: "Intro Sequence" }, { thumb: p4, title: "Social Ident" }],
  },
  {
    id: "cgi", label: "CGI Video",
    desc: "Push the boundaries of visual storytelling with photorealistic CGI videos. Our CGI production team creates stunning computer-generated imagery for product demos, architectural visualisations, VFX sequences, and high-impact brand campaigns.",
    videos: [{ thumb: p6, title: "Product CGI" }, { thumb: p2, title: "Arch Viz" }, { thumb: p4, title: "VFX Reel" }, { thumb: p1, title: "Brand CGI" }],
  },
];

export function Projects() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;
  const [openVideo, setOpenVideo] = useState<{ title: string } | null>(null);

  return (
    <section id="services" className="py-24 bg-[color:var(--brand-navy)] text-white relative">
      <AnimatedBG/>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-[color:var(--brand-cyan)] text-sm font-semibold uppercase tracking-wider">Our Services</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white">Our Animation & Explainer Video Services</h2>
          <p className="mt-5 text-white/70 text-lg">From 2D and 3D animated explainer videos to corporate videos, SaaS videos, motion graphics, and CGI — Metagenix is a full-service video animation company delivering world-class animated video production for businesses of all sizes.</p>
        </div>

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
        </div>

        {/* Service description */}
        <p className="text-center text-white/60 text-sm md:text-base max-w-3xl mx-auto mb-10 leading-relaxed">{current.desc}</p>

        <motion.div
          key={current.id}
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
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
              className="card-zoom group relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-[color:var(--brand-cyan)] transition-all text-left"
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
                <p className="text-sm font-semibold text-white">{v.title}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <VideoLightbox open={!!openVideo} onClose={() => setOpenVideo(null)} title={openVideo?.title} />
    </section>
  );
}