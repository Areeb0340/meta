import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    tag: "Best for short social posts",
    features: [
      "Up to 30 seconds video",
      "Script + storyboard",
      "2D motion graphics",
      "1 round of revisions",
      "HD 1080p delivery",
    ],
    cta: "Start Project",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    tag: "Most popular",
    features: [
      "Up to 90 seconds video",
      "Script + voiceover + SFX",
      "Custom 2D character animation",
      "3 rounds of revisions",
      "4K UHD delivery",
      "Priority support",
    ],
    cta: "Get Growth",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$2,999",
    tag: "Cinematic 3D & long form",
    features: [
      "Up to 3 minutes video",
      "Full 3D animation pipeline",
      "Custom voice talent",
      "Unlimited revisions",
      "4K + source files",
      "Dedicated producer",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 pt-20 pb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-red)]/40 bg-[color:var(--brand-red)]/10 px-4 py-1.5 text-xs text-[color:var(--brand-red)]">
            <Sparkles className="h-3.5 w-3.5" /> Transparent pricing
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-[color:var(--brand-navy)]">
            Plans that <span className="text-[color:var(--brand-red)]">scale</span> with your story
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
            Choose a package or mix-and-match. Every project is crafted in-house by senior animators.
          </p>
        </section>

        <section className="container mx-auto px-4 md:px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl p-8 border bg-white transition-all duration-300 hover:-translate-y-2 ${
                  t.highlighted
                    ? "border-[color:var(--brand-red)] shadow-[var(--shadow-elegant)] scale-[1.02]"
                    : "border-border shadow-[var(--shadow-card)] hover:border-[color:var(--brand-red)]/60"
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--brand-red)] px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div className="text-sm uppercase tracking-wider text-muted-foreground">{t.name}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-[color:var(--brand-navy)]">{t.price}</span>
                  <span className="text-muted-foreground">/project</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.tag}</p>
                <ul className="mt-6 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-[color:var(--brand-red)]/10 text-[color:var(--brand-red)]">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={t.highlighted ? "hero" : "outlineCyan"}
                  size="lg"
                  className="w-full mt-8"
                >
                  <Link to="/contact">{t.cta}</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-4xl mx-auto rounded-2xl border border-border bg-[color:var(--brand-navy)] text-white p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Need a custom quote?</h2>
            <p className="mt-3 text-white/70">
              Series, episodic content, training videos or app explainers — we build packages tailored to your roadmap.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-6">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}