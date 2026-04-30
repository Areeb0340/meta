import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "What animation services do you offer?", a: "We provide 2D animation, 3D animation, motion graphics, whiteboard explainers, corporate videos, SaaS product videos, and professional video editing — all crafted by senior animators and storytellers." },
  { q: "How much does an animation video cost?", a: "Our packages start from $195 for short text-based animations and scale up to $799+ for character-driven work. Custom enterprise quotes are available for longer or more complex projects." },
  { q: "How long does a project take?", a: "A typical 30 to 60 second animation takes 1 to 3 weeks depending on complexity. We share a detailed timeline at kickoff so there are no surprises." },
  { q: "Do you offer revisions?", a: "Yes, every package includes unlimited revisions during defined review rounds to ensure the final animation matches your vision." },
  { q: "What software do you use?", a: "Our team uses industry-standard tools including Adobe After Effects, Adobe Animate, Cinema 4D, Blender, Toon Boom Harmony, and Procreate for storyboarding." },
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