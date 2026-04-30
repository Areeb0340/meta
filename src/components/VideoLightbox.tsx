import { useEffect } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  src?: string;
  title?: string;
};

const DEFAULT_SRC =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export function VideoLightbox({ open, onClose, src, title }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "Video player"}
      className="fixed inset-0 z-[100] grid place-items-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative w-[92vw] max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={src || DEFAULT_SRC}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-contain bg-black"
        />
      </div>
      {title ? (
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          {title}
        </p>
      ) : null}
    </div>
  );
}