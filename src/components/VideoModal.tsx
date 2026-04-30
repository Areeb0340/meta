import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { CardItem } from "./ScrollStackSection";

type Props = {
  card: CardItem | null;
  onClose: () => void;
};

export const VideoModal = ({ card, onClose }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (card && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [card]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (card) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [card, onClose]);

  if (!card) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(6, 9, 28, 0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
        style={{ background: "#000", boxShadow: "var(--shadow-elegant)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "var(--brand-cyan)",
            color: "var(--brand-navy)",
          }}
        >
          <X className="w-5 h-5" />
        </button>
        <video
          ref={videoRef}
          src={card.video}
          poster={card.thumb}
          controls
          playsInline
          className="w-full aspect-video bg-black"
        />
        <div
          className="p-5"
          style={{
            borderTop:
              "1px solid color-mix(in oklab, var(--brand-cyan) 30%, transparent)",
            background: "var(--brand-navy)",
          }}
        >
          <h3 className="text-xl md:text-2xl text-white font-semibold">
            {card.title}
          </h3>
        </div>
      </div>
    </div>
  );
};