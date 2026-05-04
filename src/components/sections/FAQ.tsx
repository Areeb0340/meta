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
      {/* Pure CSS keyframes — GPU compositor only, zero JS/React overhead */}
      <style>{`
        @keyframes faq-spin-cw  { to { transform: rotate(360deg);  } }
        @keyframes faq-spin-ccw { to { transform: rotate(-360deg); } }
        @keyframes faq-streak {
          0%   { transform: translateX(-20%); opacity: 0; }
          10%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(120%); opacity: 0; }
        }
        @keyframes faq-float {
          0%, 100% { transform: translateY(0px);  opacity: 0.4; }
          50%       { transform: translateY(-30px); opacity: 1;   }
        }
      `}</style>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: gridColor,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Blob top-left — CSS spin, stays on GPU */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
          animation: "faq-spin-cw 60s linear infinite",
          willChange: "transform",
        }}
      />

      {/* Blob bottom-right */}
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-[1000px] w-[500px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 70%, transparent), transparent 70%)",
          animation: "faq-spin-ccw 80s linear infinite",
          willChange: "transform",
        }}
      />

      {/* Light streaks */}
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          aria-hidden
          className="absolute h-px w-[35%] pointer-events-none"
          style={{
            top: `${15 + i * 20}%`,
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand-cyan) 100%, white) 50%, transparent)",
            boxShadow:
              "0 0 10px color-mix(in oklab, var(--brand-cyan) 80%, transparent), 0 0 22px color-mix(in oklab, var(--brand-cyan) 60%, transparent)",
            animation: `faq-streak ${4 + i * 0.8}s linear ${i * 1.4}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Floating dots */}
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute h-1.5 w-1.5 rounded-full pointer-events-none"
          style={{
            top: `${(i * 9 + 12) % 90}%`,
            left: `${(i * 13 + 7) % 95}%`,
            background: "var(--brand-cyan)",
            boxShadow: "0 0 8px var(--brand-cyan)",
            animation: `faq-float ${3 + (i % 4)}s ease-in-out ${i * 0.3}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </>
  );
}

const FAQS = [
  { q: "What types of animation services does Metagenix offer?", a: "Metagenix offers a full range of animation and video production services including 2D animation, 3D animation, motion graphics, whiteboard video production, explainer video production, corporate videos, SaaS explainer videos, logo animation, CGI videos, and professional video editing. Whether you need a simple animated explainer video or a complex CGI brand campaign, we have the expertise to deliver." },
  { q: "What is an explainer video and how can it help my business?", a: "An explainer video is a short animated video typically 60 to 90 seconds that communicates your product, service, or idea in a simple, engaging, and visually compelling way. Explainer videos help businesses increase website conversions, improve audience understanding, reduce bounce rates, and boost brand awareness. As a leading explainer video production company, Metagenix creates animated explainer videos that are built to inform, engage, and convert." },
  { q: "What is the difference between 2D and 3D animation?", a: "2D animation uses flat, illustrated characters and environments ideal for explainer videos, educational content, and animated ads. It is cost-effective, fast to produce, and highly versatile. 3D animation adds depth, realism, and a premium visual quality perfect for product visualisations, architectural renders, and cinematic brand films. At Metagenix, we offer both 2D and 3D explainer videos tailored to your brand goals and budget." },
  { q: "Do you create whiteboard videos?", a: "Yes. Metagenix is an experienced whiteboard video company offering professional whiteboard video production services. Our whiteboard videos use hand-drawn animation to break down complex concepts into simple, engaging visual stories ideal for SaaS companies, educational platforms, healthcare brands, and financial services." },
  { q: "Can you produce animated ads for social media and digital campaigns?", a: "Absolutely. Our animated ads service covers all major digital platforms including YouTube, Instagram, Facebook, LinkedIn, and TikTok. We create scroll-stopping animated video ads designed to grab attention, communicate your message quickly, and drive measurable results for your paid campaigns." },
  { q: "What is your explainer video production process?", a: "Our production process has six stages: Discovery & Brief, Script & Concept, Storyboard & Style Frames, Animation & Motion Graphics, Sound Design & Voiceover, and Final Delivery. We involve you at every key stage to ensure the final video aligns perfectly with your brand and objectives." },
  { q: "How long does it take to produce an explainer video?", a: "A typical 60-90 second animated explainer video takes between 3 to 5 weeks from brief to final delivery, depending on the complexity, style, and revision rounds. 3D animation and CGI videos may take slightly longer. We always provide a clear timeline upfront so you know exactly when to expect each deliverable." },
  { q: "How many revision rounds are included?", a: "We include revision rounds at each key stage of production — script, storyboard, and animation — to make sure the final video is exactly what you envisioned. Our goal is always your complete satisfaction with the final animated video production." },
  { q: "How much does an explainer video cost?", a: "The cost of an explainer video depends on the style (2D, 3D, whiteboard, CGI), length, complexity, and turnaround time. Metagenix offers flexible pricing to suit startups, SMEs, and enterprise clients alike. Contact us for a free, no-obligation quote tailored to your project." },
  { q: "Do you offer packages for startups and small businesses?", a: "Yes. We understand that startups and small businesses have different budgets and needs. Metagenix offers scalable explainer video services and animation packages designed to deliver maximum impact at every budget level without compromising on quality." },
  { q: "Can I request a custom animation style?", a: "Absolutely. Every project at Metagenix is fully custom. Whether you want a specific character style, brand colour palette, motion graphics aesthetic, or a completely unique visual direction, our creative team will develop a bespoke style that fits your brand identity perfectly." },
  { q: "What file formats will I receive for my video?", a: "We deliver your final video in all formats you need — MP4, MOV, AVI, and web-optimised versions for platforms like YouTube, Vimeo, Instagram, and LinkedIn. We can also provide individual assets such as animated logo files or motion graphics elements on request." },
  { q: "Do you provide voiceover and music for explainer videos?", a: "Yes. Our video animation services include professional voiceover recording in multiple languages and accents, as well as licensed background music and full sound design. Everything is handled in-house so you receive a fully polished, broadcast-ready video." },
  { q: "Will I own the rights to my animated video?", a: "Yes. Upon final payment, full intellectual property and usage rights for your animated video are transferred to you. You are free to use your explainer video, motion graphics, or logo animation across all channels — web, social, broadcast, and beyond." },
  { q: "Do you work with clients internationally?", a: "Yes. Metagenix works with clients across the globe — from startups in Europe and the Middle East to enterprise brands in the US, UK, Asia, and beyond. As a remote-first video animation company, we have a streamlined online collaboration process that makes working with us easy, wherever you are in the world." },
];

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

const INITIAL_COUNT = 6;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? FAQS : FAQS.slice(0, INITIAL_COUNT);

  const toggleShowAll = () => {
    setShowAll((prev) => {
      const next = !prev;
      if (!next) {
        setOpen(null);
        setTimeout(() => {
          document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-[color:var(--muted)] relative overflow-hidden">
      <AnimatedBG />
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={stagger}
        >
          <p className="text-[color:var(--brand-cyan)] text-sm font-semibold tracking-[0.3em] uppercase">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]">
            Frequently Asked <br /> <span className="text-[color:var(--brand-cyan)]">Questions</span>
          </h2>
          <p className="mt-3 text-sm font-semibold tracking-wide text-[color:var(--brand-navy)]/80">
            Animation & Explainer Video Services
          </p>
          <p className="mt-5 text-muted-foreground max-w-md">
            Have questions about our animated explainer videos, pricing, or production process? We have got you covered. Browse our FAQs below or contact our team for a free consultation.
          </p>
        </motion.div>

        <div className="space-y-3">
          {visible.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className={`rounded-xl border bg-white overflow-hidden transition-colors duration-100 ${
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
                    className={`h-5 w-5 shrink-0 text-[color:var(--brand-cyan)] transition-transform duration-150 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.25s ease, opacity 0.2s ease",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {it.a}
                  </p>
                </div>
              </div>
            );
          })}

          {FAQS.length > INITIAL_COUNT && (
            <div className="pt-3 flex justify-center">
              <button
                type="button"
                onClick={toggleShowAll}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--brand-cyan)] text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
              >
                {showAll ? "Show less" : "See more questions"}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}

          <motion.h2
            variants={reveal}
            className="mt-20 text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-navy)]"
          >
            Still have questions? <br />
            <span className="text-[color:var(--brand-cyan)]">
              Contact us today for a free, no-obligation consultation.
            </span>
          </motion.h2>
          <motion.p variants={reveal} className="mt-5 text-muted-foreground max-w-md">
            Everything you need to know about our animation services, pricing, and process.
          </motion.p>
     
        </div>
      </div>
    </section>
  );
}