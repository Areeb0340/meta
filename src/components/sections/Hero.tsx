
import { motion, type Variants } from "framer-motion";

import heroBg from "./assets/hero-bg.jpg";
import robotFace from "./assets/robot-face.png";
import { Button } from "../ui/button";

/* 🔥 SAME animation */
const reveal: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden -mt-px">
      
      {/* BG */}
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,15,44,0.85) 0%, rgba(10,15,44,0.65) 45%, rgba(10,15,44,0.35) 100%)",
        }}
      />

      <div className="relative container mx-auto px-4 md:px-6 min-h-[78vh] lg:min-h-[86vh] flex items-center py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.h1
              variants={reveal}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
            >
              Stand Out With Our
              <br />
              <span className="text-[color:var(--brand-red)]">Video</span>{" "}
              <span className="text-white">Animations</span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed"
            >
              With Metagenix, tap into limitless video animation services to make a lasting
              impression, drive engagement, and achieve goals.
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

          {/* RIGHT ROBOT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Glow */}
            <motion.div
              variants={reveal}
              className="absolute inset-0 m-auto h-[520px] w-[520px] rounded-full opacity-70 animate-pulse-slow"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, color-mix(in oklab, #00D3E2 55%, transparent) 0%, color-mix(in oklab, #00D3E2 25%, transparent) 35%, transparent 70%)",
                filter: "blur(28px)",
              }}
            />

            {/* Outer ring */}
            <motion.div
              variants={reveal}
              className="absolute h-[480px] w-[480px] rounded-full border-2 border-dashed border-white/20 animate-spin-slow"
            />

            {/* Inner ring */}
            <motion.div
              variants={reveal}
              className="absolute h-[380px] w-[380px] rounded-full border border-[#00D3E2]/40 animate-spin-reverse"
            />

            {/* Robot */}
            <motion.div
              variants={reveal}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative z-10"
            >
              <img
                src={robotFace}
                alt="Metagenix robot mascot"
                className="w-[460px] md:w-[520px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,211,226,0.35)] animate-robot-react"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}