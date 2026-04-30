import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export type CardItem = {
  id: string;
  title: string;
  thumb: string;
  video: string;
};

type Props = {
  index: number;
  label: string;
  title: string;
  description: string;
  cards: CardItem[];
  onPlay: (card: CardItem) => void;
};

const STEP_VH = 70;

export const ScrollStackSection = ({
  index,
  label,
  title,
  description,
  cards,
  onPlay,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const ratio = total > 0 ? scrolled / total : 0;
      setProgress(ratio * cards.length);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [cards.length]);

  const wrapperHeight = `${cards.length * STEP_VH + 100}vh`;

  return (
    <section
      ref={wrapperRef}
      style={{ height: wrapperHeight }}
      className="relative"
      aria-label={title}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at top right, color-mix(in oklab, var(--brand-cyan) 14%, transparent), transparent 55%), linear-gradient(180deg, white, color-mix(in oklab, var(--brand-cyan) 4%, white))",
        }}
      >
        {/* Header */}
        <div className="relative z-10 flex flex-col gap-3 px-6 md:px-16 pt-10 md:pt-16 max-w-3xl">
          <span
            className="text-xs md:text-sm uppercase tracking-[0.3em]"
            style={{ color: "var(--brand-cyan)" }}
          >
            {String(index + 1).padStart(2, "0")} — {label}
          </span>
          <h2
            className="text-4xl md:text-6xl leading-[0.95] font-semibold"
            style={{ color: "var(--brand-navy)" }}
          >
            {title}
          </h2>
          <p
            className="text-sm md:text-base max-w-xl"
            style={{ color: "color-mix(in oklab, var(--brand-navy) 65%, white)" }}
          >
            {description}
          </p>
        </div>

        {/* Card stage */}
        <div className="absolute inset-0 z-0">
          {cards.map((card, i) => {
            const local = progress - i;
            const enter = Math.min(Math.max(local, 0), 1);
            const past = Math.max(local - 1, 0);

            const startX = 60;
            const startY = -50;
            const x = (1 - enter) * startX;
            const y = (1 - enter) * startY;
            const rot = (1 - enter) * 12;

            const stackOffset = Math.min(past, 4);
            const scale = 1 - stackOffset * 0.04;
            const stackY = -stackOffset * 1.2;

            const visible = local > -0.05 && local < 6;
            const z = 100 - i;

            return (
              <div
                key={card.id}
                className="absolute left-1/2 top-1/2 will-change-transform"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}vw, ${y + stackY}vh) rotate(${rot}deg) scale(${scale})`,
                  zIndex: z,
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.3s ease-out",
                }}
              >
                <button
                  onClick={() => onPlay(card)}
                  className="group relative block w-[78vw] max-w-[640px] aspect-video rounded-2xl overflow-hidden focus:outline-none focus:ring-2"
                  style={{
                    border: "1px solid color-mix(in oklab, var(--brand-navy) 12%, white)",
                    boxShadow: "var(--shadow-elegant)",
                    background: "white",
                  }}
                  aria-label={`Play ${card.title}`}
                >
                  {card.thumb ? (
                    <img
                      src={card.thumb}
                      alt={card.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{ background: "var(--gradient-cyan)" }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "var(--brand-cyan)",
                        color: "var(--brand-navy)",
                      }}
                    >
                      <Play className="w-7 h-7 md:w-8 md:h-8 fill-current ml-1" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between gap-3">
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest mb-1"
                        style={{ color: "var(--brand-cyan)" }}
                      >
                        {label}
                      </p>
                      <h3 className="text-lg md:text-2xl text-white font-semibold">
                        {card.title}
                      </h3>
                    </div>
                    <span className="text-xs text-white/90 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(cards.length).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-6 left-6 right-6 md:left-16 md:right-16 z-20 flex items-center gap-4">
          <span
            className="text-xs tabular-nums"
            style={{ color: "var(--brand-navy)" }}
          >
            {Math.min(Math.ceil(progress), cards.length)
              .toString()
              .padStart(2, "0")}
            /{cards.length.toString().padStart(2, "0")}
          </span>
          <div
            className="flex-1 h-px relative overflow-hidden"
            style={{
              background:
                "color-mix(in oklab, var(--brand-navy) 15%, transparent)",
            }}
          >
            <div
              className="absolute inset-y-0 left-0"
              style={{
                width: `${Math.min((progress / cards.length) * 100, 100)}%`,
                background: "var(--brand-cyan)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
