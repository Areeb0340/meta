import { useState } from "react";
import { Play } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { VideoLightbox } from "../VideoLightbox";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const tabs = [
  { id: "2d", label: "2D Animation", videos: [{ thumb: p1, title: "Brand Mascot" }, { thumb: p4, title: "Kinetic Promo" }, { thumb: p3, title: "Onboarding" }, { thumb: p5, title: "Corporate Story" }] },
  { id: "3d", label: "3D Animation", videos: [{ thumb: p2, title: "Product Reveal" }, { thumb: p6, title: "App Showcase" }, { thumb: p1, title: "Character 3D" }, { thumb: p4, title: "Logo Sting" }] },
  { id: "corporate", label: "Corporate Videos", videos: [{ thumb: p5, title: "Team Culture" }, { thumb: p3, title: "Brand Story" }, { thumb: p4, title: "Annual Report" }, { thumb: p6, title: "Investor Reel" }] },
  { id: "saas", label: "SaaS Videos", videos: [{ thumb: p6, title: "Product Tour" }, { thumb: p2, title: "Feature Spot" }, { thumb: p3, title: "How it works" }, { thumb: p4, title: "Launch Promo" }] },
  { id: "edit", label: "Video Editing", videos: [{ thumb: p4, title: "Highlight Reel" }, { thumb: p5, title: "Event Recap" }, { thumb: p1, title: "Social Cuts" }, { thumb: p2, title: "Director's Cut" }] },
  { id: "explainer", label: "Explainer Video", videos: [{ thumb: p3, title: "Whiteboard" }, { thumb: p1, title: "2D Explainer" }, { thumb: p6, title: "App Explainer" }, { thumb: p5, title: "Service Overview" }] },
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

export function Projects() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;
  const [openVideo, setOpenVideo] = useState<{ title: string } | null>(null);

  return (
    <section id="why-us" className="py-24 bg-[color:var(--brand-navy)] text-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.p variants={reveal} className="text-[color:var(--brand-red)] text-sm font-semibold uppercase tracking-wider">
            Showreel
          </motion.p>
          <motion.h2 variants={reveal} className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our successful projects
          </motion.h2>
          <motion.p variants={reveal} className="mt-5 text-white/70 text-lg">
            Browse work by category — every frame crafted in-house.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {tabs.map((t) => (
            <motion.button
              key={t.id}
              variants={reveal}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === t.id
                  ? "bg-[color:var(--brand-red)] text-white shadow-[var(--shadow-glow)]"
                  : "bg-white/5 border border-white/15 text-white/70 hover:border-[color:var(--brand-red)] hover:text-white"
              }`}
            >
              {t.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={current.id}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {current.videos.map((v, i) => (
            <motion.button
              key={`${current.id}-${i}`}
              variants={reveal}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setOpenVideo({ title: v.title })}
              className="card-zoom group relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-[color:var(--brand-red)] transition-all"
            >
              <img src={v.thumb} alt={v.title} loading="lazy" width={800} height={600} className="absolute inset-0 h-full w-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy-deep)] via-[color:var(--brand-navy-deep)]/30 to-transparent" />
              <span className="hover-overlay-tr" aria-hidden />
              <div className="absolute inset-0 grid place-items-center z-10">
                <span className="grid place-items-center h-14 w-14 rounded-full bg-[color:var(--brand-red)] text-white shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                  <Play className="h-6 w-6 ml-0.5 fill-current" />
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 text-left z-10">
                <p className="text-xs text-[color:var(--brand-red)] uppercase tracking-wider">{current.label}</p>
                <p className="font-semibold text-white">{v.title}</p>
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