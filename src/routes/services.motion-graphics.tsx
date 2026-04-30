import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circleMotion from "@/assets/circle-motion.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function MotionGraphicsPage() {
  return (
    <ServicePageTemplate
      eyebrow="Motion Graphics Services"
      heroTitle="Motion Graphics Services"
      heroSubtitle="Boost visual appeal and explain complex ideas with sharp, scroll-stopping motion graphics built for performance."
      heroImage={heroBg}
      introHeading="Motion Graphics"
      introBody="Motion graphics turn information into experience. Our motion graphics services pair clean design systems with kinetic typography, smooth transitions, and clear data storytelling, perfect for explainer videos, product launches, social ads, app demos, and brand films. Every frame is crafted on-brand and engineered to hold attention from the first second to the last."
      introImage={circleMotion}
      portfolioItems={[
        { img: p3, title: "Neon Lines" },
        { img: p4, title: "Bold Typography" },
        { img: p1, title: "Brand Reveal" },
        { img: p6, title: "SaaS Promo" },
        { img: p5, title: "Explainer" },
        { img: p2, title: "Data Story" },
      ]}
      whyHeading="Why Choose Our Motion Graphics?"
      whyItems={[
        { title: "Strategy First", body: "We start with the message and the metric. Every motion choice serves comprehension, recall, or conversion, not decoration." },
        { title: "On-Brand Always", body: "We design inside your brand system so every video feels unmistakably you across every channel and screen." },
        { title: "Built for Channels", body: "Square, vertical, horizontal, captioned, silent-friendly, we deliver platform-ready cuts that perform out of the box." },
      ]}
      pricingPlans={[
        {
          name: "Social Pack",
          tagline: "Short-form Motion Graphics",
          price: "$299",
          features: [
            "Duration up to 15 Seconds",
            "Professional Script Writing",
            "Custom Storyboard",
            "Background Music",
            "Subtitles",
            "1:1 / 9:16 / 16:9 cuts",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "1 week delivery",
          ],
        },
        {
          name: "Explainer",
          tagline: "Kinetic Type & Iconography",
          price: "$699",
          highlighted: true,
          features: [
            "Duration 30 to 60 Seconds",
            "Professional Script Writing",
            "AI / Professional Voice Over",
            "Custom Storyboard",
            "Background Music & SFX",
            "Subtitles",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "2 weeks delivery",
          ],
        },
        {
          name: "Brand Film",
          tagline: "Premium Motion Graphics",
          price: "$1,299",
          features: [
            "Duration 60 to 90 Seconds",
            "Professional Script & Voice Over",
            "Custom Illustration & Iconography",
            "Custom Storyboard",
            "Background Music & SFX",
            "Free Logo Animation",
            "Subtitles",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "2 to 3 weeks delivery",
          ],
        },
      ]}
      processHeading="Motion Graphics Process"
      processBody="A focused process that turns your message into motion that holds attention and drives action."
      processSteps={[
        { title: "Brief & Strategy", body: "We define audience, message, and the single action you want viewers to take after watching." },
        { title: "Script & Voice", body: "Tight, conversion-focused scripts paired with a voice that matches your brand tone." },
        { title: "Style Frames", body: "Two visual directions so you can pick the look and feel before we move into animation." },
        { title: "Animation", body: "Our motion designers bring style frames to life with smooth, on-rhythm motion and clean transitions." },
        { title: "Sound Design", body: "Custom-fit music, SFX, and audio mastering that elevates every visual beat." },
        { title: "Delivery", body: "Final master plus social cut-downs sized for every platform you ship on." },
      ]}
      faqs={[
        { q: "What is the difference between motion graphics and 2D animation?", a: "Motion graphics focus on animating typography, icons, shapes, and UI; 2D animation typically involves illustrated characters and scenes. We do both and often blend them." },
        { q: "Can you match my existing brand guidelines?", a: "Absolutely. Send us your brand book or brand assets and we will work entirely within your visual system." },
        { q: "Do you make videos optimized for ads?", a: "Yes, our team specializes in performance-friendly motion graphics for Meta, TikTok, YouTube, and LinkedIn ad placements." },
        { q: "How fast can you deliver?", a: "Short-form social packs ship in about a week. Longer explainers and brand films take 2 to 3 weeks." },
        { q: "Do you provide source files?", a: "Yes, source After Effects project files are available on request as part of our enterprise packages." },
      ]}
    />
  );
}