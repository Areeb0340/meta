import { useState } from "react";

import { toast } from "sonner";
import { Mail,  Clock, Sparkles, ArrowRight, PhoneCallIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
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

// ── Studio Light SVG (top corners) ─────────────────────────
function StudioLight({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      {/* pole */}
      <rect x="74" y="0" width="8" height="90" rx="3" fill="#2a2a3a" />
      {/* arm */}
      <rect x="30" y="60" width="50" height="7" rx="3" fill="#2a2a3a" transform="rotate(-30 30 60)" />
      {/* light body */}
      <rect x="14" y="88" width="68" height="48" rx="8" fill="#1a1a2e" />
      <rect x="18" y="92" width="60" height="40" rx="6" fill="#16213e" />
      {/* lens */}
      <ellipse cx="48" cy="112" rx="22" ry="18" fill="#f5a623" opacity="0.9" />
      <ellipse cx="48" cy="112" rx="14" ry="11" fill="#f7c44b" opacity="0.95" />
      <ellipse cx="48" cy="112" rx="7" ry="5" fill="#fff9e6" />
      {/* light beam */}
      <polygon points="10,145 86,145 110,200 -14,200" fill="url(#beam1)" opacity="0.18" />
      <defs>
        <linearGradient id="beam1" x1="48" y1="145" x2="48" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5a623" />
          <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* screws */}
      <circle cx="20" cy="94" r="3" fill="#0f3460" />
      <circle cx="76" cy="94" r="3" fill="#0f3460" />
      {/* handle */}
      <rect x="60" y="128" width="20" height="8" rx="4" fill="#2a2a3a" />
      {/* cable */}
      <path d="M78 30 Q100 50 90 80" stroke="#1a1a2e" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}





// ── Small hanging light (extra atmospheric) ────────────────
function HangingLight() {
  return (
    <svg viewBox="0 0 80 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="37" y="0" width="5" height="45" rx="2" fill="#2a2a3a" />
      <rect x="18" y="40" width="44" height="32" rx="6" fill="#1a1a2e" />
      <rect x="22" y="44" width="36" height="24" rx="4" fill="#16213e" />
      <ellipse cx="40" cy="56" rx="13" ry="10" fill="#f5a623" opacity="0.85" />
      <ellipse cx="40" cy="56" rx="7" ry="5" fill="#fff3c4" />
      <polygon points="22,72 58,72 68,130 12,130" fill="url(#beam2)" opacity="0.15" />
      <defs>
        <linearGradient id="beam2" x1="40" y1="72" x2="40" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5a623" />
          <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll reply within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[color:var(--brand-navy-deep)]">
      <AnimatedBG/>
      {/* ── existing decorative bg blobs ── */}
      <div aria-hidden className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full opacity-40 animate-pulse-slow"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div aria-hidden className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full opacity-30 animate-pulse-slow"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-red) 60%, transparent) 0%, transparent 70%)", filter: "blur(50px)" }} />
      <div aria-hidden className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(var(--brand-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--brand-cyan) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* ── Studio illustrations ──────────────────────────── */}

      {/* Top-left studio light */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: -30, rotate: -8 }}
        whileInView={{ opacity: 1, y: 0, rotate: -8 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-4 left-4 w-36 md:w-44 pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 8px 24px rgba(245,166,35,0.25))" }}
      >
        <StudioLight />
      </motion.div>

      {/* Top-right studio light (flipped) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: -30, rotate: 8 }}
        whileInView={{ opacity: 1, y: 0, rotate: 8 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-4 right-4 w-36 md:w-44 pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 8px 24px rgba(245,166,35,0.25))" }}
      >
        <StudioLight flip />
      </motion.div>

      {/* Top-center hanging light */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        animate={{ rotate: [-2, 2, -2] }}
        // @ts-ignore framer prop
        transition2={{ rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-20 pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 4px 16px rgba(245,166,35,0.2))" }}
      >
        <HangingLight />
      </motion.div>

      

      {/* ── Main content ─────────────────────────────────── */}
      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          variants={stagger}
          className="grid lg:grid-cols-5 gap-0 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,211,226,0.35)] border border-white/10"
        >
          {/* Left panel */}
          <motion.div variants={reveal} className="lg:col-span-2 relative p-8 md:p-12 bg-gradient-to-br from-[color:var(--brand-red)] via-[color:var(--brand-red-deep)] to-[color:var(--brand-navy)] overflow-hidden">
            <div aria-hidden className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-float" />
            <div aria-hidden className="absolute bottom-10 -left-6 h-32 w-32 rounded-full bg-white/10 blur-2xl animate-pulse-slow" />

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="relative z-10">
              <motion.span variants={reveal} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" /> Get in touch
              </motion.span>
              <motion.h2 variants={reveal} className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Let's craft <br /> something <br /> <span className="italic">extraordinary.</span>
              </motion.h2>
              <motion.p variants={reveal} className="mt-5 text-white/90 leading-relaxed">
                Share your idea, timeline & goals — we'll send a tailored proposal within 24 hours.
              </motion.p>
              <motion.ul variants={stagger} className="mt-10 space-y-4 text-sm text-white">
                {[
                  { icon: Mail, label: "hello@metagenix.org" },
                  { icon: PhoneCallIcon, label: "+1 (555) 010-2025" },
                  { icon: Clock, label: "We reply within 24 hours" },
                ].map(({ icon: Icon, label }) => (
                  <motion.li key={label} variants={reveal} className="flex items-center gap-3 group">
                    <span className="grid place-items-center h-11 w-11 rounded-xl bg-white/15 backdrop-blur text-white group-hover:bg-white group-hover:text-[color:var(--brand-red)] transition-colors">
                      <Icon className="h-5 w-5" />
                    </span>
                    {label}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div variants={reveal} className="lg:col-span-3 bg-white p-8 md:p-12">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
              <motion.h3 variants={reveal} className="text-2xl md:text-3xl font-bold text-[color:var(--brand-navy)]">
                Tell us about your project
              </motion.h3>
              <motion.p variants={reveal} className="mt-2 text-muted-foreground text-sm">
                Fill in the details and our animation expert will be in touch.
              </motion.p>
              <motion.form variants={stagger} onSubmit={onSubmit} className="mt-8 space-y-5">
                <motion.div variants={reveal} className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block uppercase tracking-wider text-[color:var(--brand-navy)]/70">Name</label>
                    <Input required name="name" placeholder="Your full name" className="bg-white border-border h-12 focus-visible:ring-[color:var(--brand-red)] focus-visible:ring-2 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block uppercase tracking-wider text-[color:var(--brand-navy)]/70">Email</label>
                    <Input required type="email" name="email" placeholder="you@company.com" className="bg-white border-border h-12 focus-visible:ring-[color:var(--brand-red)] focus-visible:ring-2 transition-all" />
                  </div>
                </motion.div>
                <motion.div variants={reveal}>
                  <label className="text-xs font-semibold mb-1.5 block uppercase tracking-wider text-[color:var(--brand-navy)]/70">Phone</label>
                  <Input name="phone" placeholder="+1 (555) 000-0000" className="bg-white border-border h-12 focus-visible:ring-[color:var(--brand-red)] focus-visible:ring-2 transition-all" />
                </motion.div>
                <motion.div variants={reveal}>
                  <label className="text-xs font-semibold mb-1.5 block uppercase tracking-wider text-[color:var(--brand-navy)]/70">Project details</label>
                  <Textarea required name="message" placeholder="Tell us about your project..." rows={5} className="bg-white border-border focus-visible:ring-[color:var(--brand-red)] focus-visible:ring-2 transition-all resize-none" />
                </motion.div>
                <motion.div variants={reveal}>
                  <Button type="submit" variant="hero" size="xl" className="w-full group" disabled={loading}>
                    {loading ? "Sending..." : (
                      <span className="inline-flex items-center gap-2">
                        Send Message
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}