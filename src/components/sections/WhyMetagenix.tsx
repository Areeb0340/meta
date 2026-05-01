import { motion } from "framer-motion";
import { Workflow, Users, Target, Clock, Award, TrendingUp } from "lucide-react";
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
const items = [
  { icon: Workflow, title: "End-to-End Production", desc: "From scripting and storyboarding to animation and sound design — everything handled in-house. No outsourcing, no surprises." },
  { icon: Users, title: "Expert 2D & 3D Animators", desc: "Specialists in 2D, 3D, motion graphics, whiteboard videos, logo animation, and CGI — broadcast-quality at every budget." },
  { icon: Target, title: "Customized for Your Industry", desc: "Startup, Fortune 500, or agency — our explainer video services are fully customised to your goals and audience." },
  { icon: Clock, title: "Fast Turnaround, Clear Pricing", desc: "We respect your deadlines and budget. World-class animated video production with transparent timelines and zero hidden costs." },
  { icon: Award, title: "Proven Track Record", desc: "Trusted explainer video agency that has helped hundreds of brands drive engagement, simplify messaging, and grow ROI." },
  { icon: TrendingUp, title: "Creative That Converts", desc: "Every script, storyboard, and animation decision is driven by your business goals — not just aesthetics." },
];

export function WhyMetagenix() {
  return (
    <section id="why-metagenix" className="py-24 bg-[color:var(--brand-navy-deep)] text-white relative overflow-hidden">
    <AnimatedBG/>
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 animate-pulse-slow"
        style={{ background: "radial-gradient(circle, var(--brand-cyan) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[color:var(--brand-cyan)] text-sm font-semibold uppercase tracking-wider">Why Metagenix</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Why Leading Brands Choose <span className="text-[color:var(--brand-red)]">Metagenix</span> as Their Animation Company
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[color:var(--brand-cyan)]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="grid place-items-center h-14 w-14 rounded-xl bg-[color:var(--brand-red)]/15 text-[color:var(--brand-red)] mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}