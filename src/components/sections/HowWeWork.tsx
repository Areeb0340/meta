import { motion, type Variants } from "framer-motion";

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
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 h-[1000px] w-[500px] rounded-full opacity-25"
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

const steps = [
  { n: "01", title: "Discovery & Brief", desc: "We understand your brand, goals, audience, and message through a focused creative brief session." },
  { n: "02", title: "Script & Concept", desc: "Our writers craft a compelling script and creative team develops a visual concept aligned with your brand." },
  { n: "03", title: "Storyboard & Style Frames", desc: "Detailed storyboard and style frames presented for your approval before animation begins." },
  { n: "04", title: "Animation & Motion", desc: "Our animators bring the storyboard to life — 2D, 3D, motion graphics, whiteboard, or CGI." },
  { n: "05", title: "Sound & Voiceover", desc: "Professional voiceover, music, and sound effects added to elevate impact and audience engagement." },
  { n: "06", title: "Final Delivery", desc: "Delivered in all formats — ready for web, social media, presentations, broadcast, or paid ads." },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 bg-white relative overflow-hidden">
      <AnimatedBG />
      <div className="container mx-auto px-4 md:px-6">

        {/* ── Heading ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.p
            variants={reveal}
            className="text-[color:var(--brand-red)] text-sm font-semibold uppercase tracking-wider"
          >
            How We Work
          </motion.p>
          <motion.h2
            variants={reveal}
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]"
          >
            Our Explainer Video <span className="text-[color:var(--brand-red)]">Production Process</span>
          </motion.h2>
        </motion.div>

        {/* ── Step Cards ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={reveal}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-7 rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -top-4 -right-2 text-[7rem] font-extrabold leading-none text-[color:var(--brand-red)]/10 group-hover:text-[color:var(--brand-red)]/20 transition-colors"
              >
                {s.n}
              </span>
              <div className="relative">
                <p className="text-xs font-bold tracking-[0.25em] text-[color:var(--brand-cyan)] uppercase">Step {s.n}</p>
                <h3 className="mt-3 text-xl font-bold text-[color:var(--brand-navy)]">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}