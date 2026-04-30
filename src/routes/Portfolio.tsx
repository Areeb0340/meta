import { useState } from "react";

import { VideoModal } from "../components/VideoModal";
import { ScrollStackSection, type CardItem } from "../components/ScrollStackSection";


// Replace per card with your own video URLs later
const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const make = (prefix: string, count = 10): CardItem[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `${prefix} Project ${String(i + 1).padStart(2, "0")}`,
    thumb: "",
    video: SAMPLE_VIDEO,
  }));

const sections = [
  {
    label: "2D Animation",
    title: "2D Animation Services",
    description:
      "Bring your brand story to life with vibrant, character-driven 2D animated explainer videos crafted to engage, inform, and convert.",
    cards: make("2D"),
  },
  {
    label: "3D Animation",
    title: "3D Animation Services",
    description:
      "Add depth, realism, and a premium look to your brand with cinematic 3D product visualisations and brand films.",
    cards: make("3D"),
  },
  {
    label: "SaaS Explainers",
    title: "SaaS Explainer Videos",
    description:
      "Help your users understand your software in seconds — clear, engaging animated demos that reduce churn and boost sign-ups.",
    cards: make("SaaS"),
  },
  {
    label: "Motion Graphics",
    title: "Motion Graphics",
    description:
      "Eye-catching motion graphics for ads, social, and brand films that elevate your message and drive engagement.",
    cards: make("Motion"),
  },
  {
    label: "Whiteboard",
    title: "Whiteboard Animation",
    description:
      "Simple, story-driven whiteboard animations that explain complex ideas in a clear, memorable way.",
    cards: make("Whiteboard"),
  },
  {
    label: "Character Animation",
    title: "Character Animation",
    description:
      "Expressive characters and rigs that turn your brand into a personality your audience connects with.",
    cards: make("Character"),
  },
  {
    label: "Logo Animation",
    title: "Logo Animation",
    description:
      "Signature logo reveals and stings that make your brand identity unforgettable across every touchpoint.",
    cards: make("Logo"),
  },
  {
    label: "VFX & Compositing",
    title: "VFX & Compositing",
    description:
      "Cinematic visual effects and compositing that add the final layer of polish to your live-action and CG work.",
    cards: make("VFX"),
  },
];

const PortfolioPage = () => {
  const [active, setActive] = useState<CardItem | null>(null);

  return (
    <main
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Hero */}
      <section
        className="relative min-h-[80vh] flex items-center px-6 md:px-16 pt-32 pb-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="relative max-w-5xl">
          <span
            className="text-xs uppercase tracking-[0.4em]"
            style={{ color: "var(--brand-cyan)" }}
          >
            Portfolio · 2026
          </span>
          <h1
            className="text-5xl md:text-8xl leading-[0.9] mt-6 font-bold"
            style={{ color: "var(--brand-navy)" }}
          >
            Motion that <br />
            <span style={{ color: "var(--brand-cyan)" }}>
              moves the needle.
            </span>
          </h1>
          <p
            className="mt-8 max-w-xl text-base md:text-lg"
            style={{
              color: "color-mix(in oklab, var(--brand-navy) 70%, white)",
            }}
          >
            Explore our work — every card is a story we crafted, frame by frame.
          </p>
        </div>
      </section>

      <div id="work">
        {sections.map((s, i) => (
          <ScrollStackSection
            key={s.label}
            index={i}
            label={s.label}
            title={s.title}
            description={s.description}
            cards={s.cards}
            onPlay={setActive}
          />
        ))}
      </div>

      <VideoModal card={active} onClose={() => setActive(null)} />
    </main>
  );
};

export default PortfolioPage;