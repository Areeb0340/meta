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
      eyebrow="Motion Graphics"
      heroTitle="Motion Graphics Services"
      heroSubtitle="Boost visual appeal and explain complex ideas with sharp, scroll-stopping motion graphics built for performance."
      heroImage={heroBg}
      introHeading="Motion Graphics"
      introBody="Motion graphics turn information into experience. Our motion graphics services pair clean design systems with kinetic typography, smooth transitions, and clear data storytelling — perfect for explainer videos, product launches, social ads, app demos, and brand films. Every frame is crafted on-brand and engineered to hold attention."
      introImage={circleMotion}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
      whyHeading="Why Choose Our Motion Graphics Services?"
      whyItems={[
        { title: "Strategy First", body: "Every motion choice serves comprehension, recall, or conversion — not decoration." },
        { title: "On-Brand Always", body: "We design inside your brand system so every video feels unmistakably you." },
        { title: "Built for Channels", body: "Square, vertical, horizontal, captioned — platform-ready cuts that perform out of the box." },
      ]}
      pricingPlans={[
        {
          name: "Social Pack",
          tagline: "Short-form Motion Graphics",
          price: "$299",
          features: [
            "Up to 15 Sec",
            "Script Writing",
            "Custom Storyboard",
            "Background Music",
            "Subtitles",
            "1:1 / 9:16 / 16:9 cuts",
            "1 week delivery",
          ],
        },
        {
          name: "Explainer",
          tagline: "Kinetic Type & Iconography",
          price: "$699",
          highlighted: true,
          features: [
            "30-60 Sec",
            "Script + Voice Over",
            "Custom Storyboard",
            "Music & SFX",
            "Subtitles",
            "Unlimited Revisions",
            "2 weeks delivery",
          ],
        },
        {
          name: "Brand Film",
          tagline: "Premium Motion Graphics",
          price: "$1,299",
          features: [
            "60-90 Sec",
            "Script + Pro Voice Over",
            "Custom Illustration",
            "Music & SFX",
            "Free Logo Animation",
            "Unlimited Revisions",
            "2-3 weeks delivery",
          ],
        },
      ]}
      processHeading="Motion Graphics Process"
      processBody="A focused, end-to-end process that turns your brief into a video that delivers real business results."
      processSteps={[
        { title: "Brief & Strategy", body: "We define audience, message, and the single action you want viewers to take." },
        { title: "Script & Voice", body: "Tight, conversion-focused scripts paired with a voice that matches your brand tone." },
        { title: "Style Frames", body: "Two visual directions so you can pick the look and feel before animation." },
        { title: "Animation", body: "Motion designers bring style frames to life with smooth, on-rhythm motion." },
        { title: "Sound Design", body: "Custom-fit music, SFX, and audio mastering that elevates every visual beat." },
        { title: "Delivery", body: "Final master plus social cut-downs sized for every platform." },
      ]}
      faqs={[
        { q: "What is the difference between motion graphics and 2D animation?", a: "Motion graphics focus on typography, icons, shapes, and UI; 2D animation typically involves illustrated characters and scenes." },
        { q: "Can you match my brand guidelines?", a: "Absolutely. Send us your brand book and we will work entirely within your visual system." },
        { q: "Do you make videos optimized for ads?", a: "Yes, we specialize in performance-friendly motion for Meta, TikTok, YouTube, and LinkedIn." },
        { q: "How fast can you deliver?", a: "Short-form social packs ship in about a week. Longer films take 2 to 3 weeks." },
        { q: "Do you provide source files?", a: "Yes, source After Effects files are available on request as part of enterprise packages." },
      ]}
    />
  );
}