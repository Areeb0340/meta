import { Button } from "../ui/button";
import { Cloud } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import circleMotion from "@/assets/circle-motion.jpg";
import circle3D from "@/assets/circle-3d.jpg";
import circle2D from "@/assets/circle-2d.jpg";
import circleWhiteboard from "@/assets/circle-whiteboard.jpg";

type Bubble = { title: string; img: string; pos: string };

const bubbles: Bubble[] = [
  { title: "Motion\nGraphics", img: circleMotion, pos: "top-0 left-1/2 -translate-x-1/2" },
  { title: "Whiteboard\nVideo", img: circleWhiteboard, pos: "top-1/2 right-0 -translate-y-1/2" },
  { title: "2D\nAnimation", img: circle2D, pos: "bottom-0 left-1/2 -translate-x-1/2" },
  { title: "3D\nAnimation", img: circle3D, pos: "top-1/2 left-0 -translate-y-1/2" },
];

/* ✅ SAME animation (Projects wali) */
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

export function Services() {
  return (
    <section id="services" className="py-12 lg:py-16 relative bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h2
              variants={reveal}
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-[color:var(--brand-navy)]"
            >
              Spark Imagination With
              <br />
              <span className="text-[color:var(--brand-red)]">Professional Animation</span>
              <br />
              <span className="text-[color:var(--brand-red)]">Video</span> Services
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-6 text-muted-foreground text-base md:text-[15px] leading-relaxed max-w-xl"
            >
              What sets our custom video animation services apart? It's simple!
              Our team focuses on storytelling that connects with your audience.
              Every animation is crafted to match your brand and message.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button asChild variant="navy" size="xl">
                <a href="#contact">Get Started</a>
              </Button>

              <Button asChild variant="hero" size="xl">
                <a href="#contact">Let's Talk</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT CIRCLE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={stagger}
            className="relative mx-auto w-full max-w-[520px] aspect-square"
          >
            {/* BIG DISC */}
            <motion.div
              variants={reveal}
              className="absolute inset-[18%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--brand-red) 90%, white) 0%, var(--brand-red) 60%, var(--brand-red-deep) 100%)",
                boxShadow:
                  "0 30px 60px -20px color-mix(in oklab, var(--brand-red) 45%, transparent)",
              }}
            />

            {/* OUTER RING */}
            <motion.div
              variants={reveal}
              className="absolute inset-[4%] rounded-full services-ring-spin"
              style={{
                border:
                  "2px dashed color-mix(in oklab, var(--brand-navy) 55%, transparent)",
              }}
            />

            {/* CENTER ICON */}
            <motion.div
              variants={reveal}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 md:h-24 md:w-24 rounded-full bg-white grid place-items-center shadow-[var(--shadow-card)] z-10"
            >
              <Cloud
                className="h-10 w-10 md:h-12 md:w-12 text-[color:var(--brand-red)]"
                strokeWidth={1.5}
              />
            </motion.div>

            {/* ROTATING BUBBLES */}
            <div className="absolute inset-0 services-bubbles-spin">
              {bubbles.map((b) => (
                <motion.div
                  key={b.title}
                  variants={reveal}
                  whileHover={{ scale: 1.08, y: -6 }}
                  className={`absolute ${b.pos} h-[36%] w-[36%]`}
                >
                  <div className="relative h-full w-full rounded-full overflow-hidden border-[5px] border-white shadow-[var(--shadow-elegant)] group services-bubble-counter">
                    <img
                      src={b.img}
                      alt={b.title.replace("\n", " ")}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <div className="absolute inset-x-0 bottom-3 text-center">
                      <span className="inline-block text-white text-[11px] md:text-xs font-semibold leading-tight whitespace-pre-line drop-shadow">
                        {b.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}