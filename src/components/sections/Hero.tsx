import { Button } from "../ui/button";
import Mew from "@/assets/Mew .mp4";
import robotFace from "@/assets/robot-face.png";

export function Hero() {
  return (
    <section className="overflow-hidden ">
      {/* Full-bleed background */}
    <video
  autoPlay
  muted
  loop
  playsInline
  aria-hidden
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src={Mew} type="video/mp4" />
</video>
      {/* Dark overlay for legibility */}
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
          {/* Left: Copy */}
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-[color:var(--brand-cyan)] text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Welcome to Metagenix
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              Boost Your Brand with{" "}
              <span className="text-[color:var(--brand-red)]">High-Converting</span>{" "}
              Animated Videos
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
              Metagenix is a full-service video animation company crafting powerful 2D & 3D animated explainer videos, motion graphics, whiteboard videos, logo animations, CGI videos, and animated ads — built to engage audiences, boost conversions, and grow your business.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="navy" size="xl">
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <Button asChild variant="hero" size="xl">
                <a href="#portfolio">View Our Portfolio</a>
              </Button>
            </div>
          </div>

          {/* Right: Animated robot mascot (Metagenix face) */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Glow ring — cyan/teal to match logo */}
            <div
              aria-hidden
              className="absolute inset-0 m-auto h-[520px] w-[520px] rounded-full opacity-70 animate-pulse-slow"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, color-mix(in oklab, #00D3E2 55%, transparent) 0%, color-mix(in oklab, #00D3E2 25%, transparent) 35%, transparent 70%)",
                filter: "blur(28px)",
              }}
            />
            {/* Rotating dashed ring */}
            <div
              aria-hidden
              className="absolute h-[480px] w-[480px] rounded-full border-2 border-dashed border-white/20 animate-spin-slow"
            />
            {/* Counter-rotating inner cyan ring */}
            <div
              aria-hidden
              className="absolute h-[380px] w-[380px] rounded-full border border-[#00D3E2]/40 animate-spin-reverse"
            />
            {/* Animated robot face */}
            <div className="relative z-10 animate-robot-hover">
              <img
                src={robotFace}
                alt="Metagenix robot mascot"
                width={1024}
                height={1024}
                className="w-[460px] md:w-[520px] h-auto object-contain animate-robot-react drop-shadow-[0_20px_40px_rgba(0,211,226,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}