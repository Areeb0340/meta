import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Users, Briefcase, Smile } from "lucide-react";
function AnimatedBG({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const gridColor =
    variant === "light"
      ? "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)"
      : "linear-gradient(color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--brand-cyan) 60%, transparent) 1px, transparent 1px)";

  return (
    <>
      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: gridColor,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Glow */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 60%, transparent), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 h-[1000px] w-[500px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand-cyan) 70%, transparent), transparent 70%)",
        }}
      />

      {/* Lightning */}
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: "120%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.4,
          }}
          className="absolute h-px w-[35%] pointer-events-none"
          style={{
            top: `${15 + i * 20}%`,
            background:
              "linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand-cyan) 100%, white) 50%, transparent)",
            boxShadow:
              "0 0 10px color-mix(in oklab, var(--brand-cyan) 80%, transparent), 0 0 22px color-mix(in oklab, var(--brand-cyan) 60%, transparent)",
          }}
        />
      ))}

      {/* Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute h-1.5 w-1.5 rounded-full pointer-events-none"
          style={{
            top: `${(i * 9 + 12) % 90}%`,
            left: `${(i * 13 + 7) % 95}%`,
            background: "var(--brand-cyan)",
            boxShadow: "0 0 8px var(--brand-cyan)",
          }}
        />
      ))}
    </>
  );
}
const stats = [
  { icon: Video, value: 1000, suffix: "+", label: "Videos Delivered" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Briefcase, value: 15, suffix: "+", label: "Industries Served" },
  { icon: Smile, value: 98, suffix: "%", label: "Client Satisfaction Rate" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-5 bg-gradient-to-r from-[color:var(--brand-navy-deep)] via-[color:var(--brand-navy)] to-[color:var(--brand-navy-deep)] text-white relative overflow-hidden">
    <AnimatedBG/>
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, var(--brand-cyan) 0%, transparent 40%), radial-gradient(circle at 80% 50%, var(--brand-red) 0%, transparent 40%)",
          filter: "blur(60px)",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="text-center group"
            >
              <div className="inline-grid place-items-center h-16 w-16 rounded-2xl bg-white/5 border border-white/10 text-[color:var(--brand-cyan)] mb-4 group-hover:scale-110 group-hover:bg-[color:var(--brand-cyan)]/10 transition-all duration-500">
                <Icon className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[color:var(--brand-cyan)] bg-clip-text text-transparent">
                <Counter to={value} suffix={suffix} />
              </div>
              <p className="mt-2 text-sm md:text-base text-white/70 font-medium">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
