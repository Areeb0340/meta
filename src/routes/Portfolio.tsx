import { useState } from "react";

import { VideoModal } from "../components/VideoModal";
import { ScrollStackSection, type CardItem } from "../components/ScrollStackSection";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Replace per card with your own video URLs later
const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

// 10 Unsplash photo IDs used as default thumbnails
const THUMB_SEEDS = [
  "1535223289827-42f1e9919769",
  "1518770660439-4636190af475",
  "1526378722484-bd91ca387e72",
  "1517694712202-14dd9538aa97",
  "1551503766-ac63dfa6401c",
  "1492551557933-34265f7af79e",
  "1542831371-29b0f74f9713",
  "1531297484001-80022131f5a1",
  "1488590528505-98d2b5aba04b",
  "1581291518857-4e27b48ff24e",
];

const make = (prefix: string, count = 10): CardItem[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `${prefix} Project ${String(i + 1).padStart(2, "0")}`,
    thumb: `https://images.unsplash.com/photo-${
      THUMB_SEEDS[i % THUMB_SEEDS.length]
    }?auto=format&fit=crop&w=1200&q=70`,
    video: SAMPLE_VIDEO, // apni video URL yahan replace kar dena
  }));

const sections = [
  {
    label: "2D Animation",
    title: "2D Animation Services",
    description: "",
    cards: make("2D"),
  },
  {
    label: "3D Animation",
    title: "3D Animation Services",
    description: "",
    cards: make("3D"),
  },
  {
    label: "Video Editing",
    title: "Video Editing",
    description: "",
    cards: make("Video Editing"),
  },
  {
    label: "SaaS Explainers",
    title: "SaaS Explainer Videos",
    description: "",
    cards: make("SaaS"),
  },
  {
    label: "CGI Video Production",
    title: "CGI Video Production",
    description: "",
    cards: make("CGI"),
  },
];

const PortfolioPage = () => {
  const [active, setActive] = useState<CardItem | null>(null);

  return (
    <main
      style={{
        background: "#0A0F2C",
        color: "#ffffff",
      }}
    >
      <Header/>
      {/* Hero */}
      <section
        className="relative min-h-[80vh] flex items-center px-6 md:px-16 pt-32 pb-16"
        style={{ background: "#0A0F2C" }}
      >
        <div className="relative max-w-5xl">
          <span
            className="text-xs uppercase tracking-[0.4em]"
            style={{ color: "var(--brand-cyan, #22d3ee)" }}
          >
            Portfolio · 2026
          </span>
          <h1 className="text-5xl md:text-8xl leading-[0.9] mt-6 font-bold text-white">
            Motion that <br />
            <span style={{ color: "var(--brand-cyan, #22d3ee)" }}>
              moves the needle.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-white/70">
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

        <Footer/>
      <VideoModal card={active} onClose={() => setActive(null)} />
    </main>
  );
};

export default PortfolioPage;
