import { Button } from "../ui/button";
import { Bot } from "lucide-react";
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

export function Services() {
  return (
    <section id="who-we-are" className="py-12 lg:py-16 relative bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-[color:var(--brand-red)] text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-[color:var(--brand-navy)]">
              Animated Videos That{" "}
              <span className="text-[color:var(--brand-red)]">Attract, Engage,</span>{" "}
              and <span className="text-[color:var(--brand-red)]">Convert</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-[15px] leading-relaxed max-w-xl">
              Metagenix is an award-winning animation company and explainer video agency trusted by startups, enterprises, and marketing agencies worldwide. We specialise in creating high-impact 2D and 3D explainer videos, whiteboard videos, animated ads, and motion graphics that turn complex ideas into compelling visual stories.
            </p>
            <p className="mt-4 text-muted-foreground text-base md:text-[15px] leading-relaxed max-w-xl">
              Whether you need a sleek product demo, a brand awareness video, or a full animated ad campaign — our team of expert animators, scriptwriters, and creative directors delivers results that drive real business growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="navy" size="xl" backLabel="Start Now">
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <Button asChild variant="hero" size="xl" backLabel="Live Chat">
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>

          {/* Right: Circle cluster */}
          <div className="relative mx-auto w-full max-w-[520px] aspect-square">
            {/* Big cyan disc (static) */}
            <div
              aria-hidden
              className="absolute inset-[18%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--brand-red) 90%, white) 0%, var(--brand-red) 60%, var(--brand-red-deep) 100%)",
                boxShadow:
                  "0 30px 60px -20px color-mix(in oklab, var(--brand-red) 45%, transparent)",
              }}
            />

            {/* Faint outer ring — darker, rotates clockwise (slow) */}
            <div
              aria-hidden
              className="absolute inset-[4%] rounded-full services-ring-spin"
              style={{
                border: "2px dashed color-mix(in oklab, var(--brand-navy) 55%, transparent)",
              }}
            />

            {/* Center logo bubble */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 md:h-24 md:w-24 rounded-full bg-white grid place-items-center shadow-[var(--shadow-card)] z-10">
              <Bot className="h-10 w-10 md:h-12 md:w-12 text-[color:var(--brand-red)]" strokeWidth={1.5} />
            </div>

            {/* Rotating bubble track (anticlockwise) */}
            <div className="absolute inset-0 services-bubbles-spin">
              {bubbles.map((b) => (
                <div key={b.title} className={`absolute ${b.pos} h-[36%] w-[36%]`}>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}