import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

const STEP_VH = 100;

export const ScrollStackSection = ({
  index,
  label,
  title,
  description,
  cards,
  onPlay,
}: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const isScrollingRef = useRef(false);

  useLayoutEffect(() => {
    if (!sectionRef.current || !pinRef.current || cards.length === 0) return;

    const section = sectionRef.current;
    const pinEl = pinRef.current;
    const totalScroll = cards.length * STEP_VH;

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${totalScroll}%`,
        pin: pinEl,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const cardProgress = self.progress * cards.length;
          setProgress(cardProgress);
          const newIndex = Math.min(Math.floor(cardProgress), cards.length - 1);
          setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
        },
      });
      return () => st.kill();
    }, section);

    return () => ctx.revert();
  }, [cards.length]);

  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const goToCard = (cardIndex: number) => {
    if (!sectionRef.current || isScrollingRef.current) return;
    const section = sectionRef.current;
    const sectionTop = section.offsetTop;
    const totalScrollPx = (cards.length * STEP_VH * window.innerHeight) / 100;
    const targetY = sectionTop + (cardIndex / cards.length) * totalScrollPx;

    isScrollingRef.current = true;
    gsap.to(window, {
      scrollTo: { y: targetY, autoKill: false },
      duration: 0.7,
      ease: "power2.out",
      onComplete: () => {
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 100);
      },
    });
  };

  return (
    <section ref={sectionRef} className="relative w-full" aria-label={title}>
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden"
        style={{ background: "#0A0F2C" }}
      >
        {/* Header — sirf title */}
        <div className="relative z-10 flex flex-col gap-3 px-6 md:px-16 pt-10 md:pt-16 max-w-3xl">
          <h2 className="text-4xl md:text-6xl leading-[0.95] font-semibold text-white">
            {title}
          </h2>
        </div>

        {/* Nav dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-2">
          {cards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => goToCard(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6" : "w-2"
              }`}
              style={{
                backgroundColor:
                  i === activeIndex
                    ? "var(--brand-cyan, #22d3ee)"
                    : "rgba(255,255,255,0.25)",
              }}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>

        {/* Card stage */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {cards.map((card, i) => {
            const local = progress - i;
            const enter = Math.min(Math.max(local + 1, 0), 1);
            const past = Math.max(-local, 0);

            const startX = 25;
            const startY = -55;
            const x = (1 - enter) * startX;
            const y = (1 - enter) * startY;
            const rot = (1 - enter) * 14;

            const stackOffset = Math.min(past, 4);
            const scale = enter * (1 - stackOffset * 0.05);
            const stackY = -stackOffset * 1.5;

            const visible = local > -1.05 && local < 5;
            const z = 100 - Math.abs(i - activeIndex);
            const isActive = i === activeIndex;

            return (
              <div
                key={card.id}
                className="absolute left-1/2 top-1/2 will-change-transform pointer-events-auto"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}vw, ${
                    y + stackY
                  }vh) rotate(${rot}deg) scale(${Math.max(scale, 0.6)})`,
                  zIndex: z,
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.25s ease-out",
                }}
              >
                <button
                  onClick={() => onPlay(card)}
                  className={`group relative block w-[78vw] max-w-[640px] aspect-video rounded-2xl overflow-hidden focus:outline-none transition-all duration-300 ${
                    isActive ? "ring-2 ring-offset-2" : ""
                  }`}
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)",
                    background: "#0A0F2C",
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
                      style={{
                        background:
                          "linear-gradient(135deg, #1e3a8a, #22d3ee)",
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "var(--brand-cyan, #22d3ee)",
                        color: "#0A0F2C",
                      }}
                    >
                      <Play className="w-7 h-7 md:w-8 md:h-8 fill-current ml-1" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-lg md:text-2xl text-white font-semibold">
                      {card.title}
                    </h3>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
