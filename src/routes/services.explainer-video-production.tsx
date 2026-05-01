import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circleWhiteboard from "@/assets/circle-Whiteboard.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function Explainer() {
  return (
    <ServicePageTemplate
      eyebrow="Explainer Video"
      heroTitle="Explainer Video Production"
      heroSubtitle="Tell your brand story in 60–90 seconds with best-in-class animated explainer videos that convert."
      heroImage={heroBg}
      introHeading="Explainer Video"
      introBody="Metagenix is a leading explainer video production company creating best-in-class animated explainer videos for startups, enterprises, and marketing agencies worldwide. We pair sharp scriptwriting, custom illustration, and high-fidelity animation to make your value proposition clear, memorable, and impossible to ignore."
      introImage={circleWhiteboard}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
      whyHeading="Why Choose Our Explainer Video Services?"
      whyItems={[
        { title: "Conversion-Focused", body: "Every script and shot is engineered to move viewers to take the next step." },
        { title: "End-to-End Production", body: "Strategy, script, voice, design, animation, and sound — all under one roof." },
        { title: "Loved by Startups", body: "From pre-seed to enterprise, our explainers have helped raise rounds and launch products." },
      ]}
      pricingPlans={[
        {
          name: "Startup",
          tagline: "Animated Explainer",
          price: "$599",
          features: [
            "Up to 60 Sec",
            "Script Writing",
            "AI / Pro Voice Over",
            "Custom Storyboard",
            "Music & SFX",
            "Subtitles",
            "2 weeks delivery",
          ],
        },
        {
          name: "Growth",
          tagline: "Custom Animated Explainer",
          price: "$1,199",
          highlighted: true,
          features: [
            "60-90 Sec",
            "Script + Pro Voice Over",
            "Custom Illustration",
            "Music & SFX",
            "Subtitles",
            "Unlimited Revisions",
            "2-3 weeks delivery",
          ],
        },
        {
          name: "Premium",
          tagline: "Cinematic Explainer",
          price: "$2,499",
          features: [
            "Up to 2 Min",
            "Script + Pro Voice Over",
            "Custom Characters",
            "Free Logo Animation",
            "Music & SFX",
            "Unlimited Revisions",
            "3-4 weeks delivery",
          ],
        },
      ]}
      processHeading="Explainer Video Process"
      processBody="A focused, end-to-end process that turns your brief into a video that delivers real business results."
      processSteps={[
        { title: "Discovery", body: "We dig into your product, audience, and the single action you want viewers to take." },
        { title: "Script", body: "A tight, conversion-focused script written for clarity and memorability." },
        { title: "Storyboard", body: "Visual boards so you approve the narrative before animation starts." },
        { title: "Design & Illustration", body: "Custom-built characters, scenes, and iconography on-brand." },
        { title: "Animation", body: "Bringing it all to life with smooth, expressive motion." },
        { title: "Delivery", body: "Final master plus social cut-downs ready to ship." },
      ]}
      faqs={[
        { q: "How long should my explainer video be?", a: "60-90 seconds is the sweet spot for most use cases." },
        { q: "What style works best?", a: "Depends on audience — we offer 2D, 3D, motion graphics, and whiteboard." },
        { q: "Do you write the script?", a: "Yes, every package includes professional script writing." },
        { q: "How long does it take?", a: "Typical turnaround is 2 to 4 weeks." },
        { q: "Will I own the final video?", a: "Absolutely — full commercial rights upon delivery." },
      ]}
    />
  );
}