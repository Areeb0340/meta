import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Video, Users, Briefcase, Smile } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-r from-[color:var(--brand-navy-deep)] via-[color:var(--brand-navy)] to-[color:var(--brand-navy-deep)] text-white relative overflow-hidden">
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
