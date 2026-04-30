import { motion } from "framer-motion";

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
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[color:var(--brand-red)] text-sm font-semibold uppercase tracking-wider">How We Work</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
            Our Explainer Video <span className="text-[color:var(--brand-red)]">Production Process</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative p-7 rounded-2xl border border-border bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
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
