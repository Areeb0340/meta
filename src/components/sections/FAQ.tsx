import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
const FAQS = [
  { q: "What types of animation services does Metagenix offer?", a: "Metagenix offers a full range of animation and video production services including 2D animation,3D animation, motion graphics, whiteboard video production, explainer video production,corporate videos, SaaS explainer videos, logo animation, CGI videos, and professional videoediting. Whether you need a simple animated explainer video or a complex CGI brand campaign,we have the expertise to deliver." },
  { q: "What is an explainer video and how can it help my business?", a: "An explainer video is a short animated video typically 60 to 90 seconds that communicates yourproduct, service, or idea in a simple, engaging, and visually compelling way. Explainer videoshelp businesses increase website conversions, improve audience understanding, reduce bouncerates, and boost brand awareness. As a leading explainer video production company, Metagenixcreates animated explainer videos that are built to inform, engage, and convert." },
  { q: "What is the difference between 2D and 3D animation?", a: "2D animation uses flat, illustrated characters and environments ideal for explainer videos,educational content, and animated ads. It is cost-effective, fast to produce, and highly versatile.3D animation adds depth, realism, and a premium visual quality perfect for producvisualisations, architectural renders, and cinematic brand films. At Metagenix, we offer both 2Dand 3D explainer videos tailored to your brand goals and budget." },
  { q: "Do you create whiteboard videos?", a: "Yes. Metagenix is an experienced whiteboard video company offering professional whiteboardvideo production services. Our whiteboard videos use hand-drawn animation to break downcomplex concepts into simple, engaging visual stories ideal for SaaS companies, educationalplatforms, healthcare brands, and financial services." },
  { q: "Can you produce animated ads for social media and digital campaigns?", a: "Absolutely. Our animated ads service covers all major digital platforms including YouTube,Instagram, Facebook, LinkedIn, and TikTok. We create scroll-stopping animated video adsdesigned to grab attention, communicate your message quickly, and drive measurable results foryour paid campaigns." },
  { q: "Will I own the final animation?", a: "Absolutely. Once the project is delivered and paid for, you own full commercial rights to the final animation including source files on request." },
];

// Same reveal variants as Projects component
const reveal: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const compactStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-24 bg-[color:var(--muted)]">
      <AnimatedBG/>
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p variants={reveal} className="text-[color:var(--brand-cyan)] text-sm font-semibold tracking-[0.3em] uppercase">
            FAQ
          </motion.p>
          <motion.h2 variants={reveal} className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
            Frequently Asked <br /> <span className="text-[color:var(--brand-cyan)]">Questions</span>
          </motion.h2>
          <motion.p variants={reveal} className="mt-5 text-muted-foreground max-w-md">
            Everything you need to know about our animation services, pricing, and process.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={compactStagger}
          className="space-y-3"
        >
          {FAQS.map((it, i) => {
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