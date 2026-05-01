import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circleWhiteboard from "@/assets/circle-Whiteboard.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function Logo() {
  return (
     <ServicePageTemplate
      eyebrow="Logo Animation"
      heroTitle="Logo Animation Services"
      heroSubtitle="Make your brand mark unforgettable with custom animated logos for intros, social, and broadcast."
      heroImage={heroBg}
      introHeading="Logo Animation"
      introBody="Make your brand mark unforgettable with a custom animated logo. Our logo animation services transform static logos into sleek, dynamic motion sequences — perfect for video intros, social media, presentations, and broadcast content. We deliver in every format your team needs."
      introImage={circleWhiteboard}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
      whyHeading="Why Choose Our Logo Animation Services?"
      whyItems={[
        { title: "Tailored Motion", body: "Animation crafted around your brand personality, not a template." },
        { title: "Multi-Format Delivery", body: "Square, vertical, transparent, looped — every variant you need." },
        { title: "Fast Turnaround", body: "Most logo animations delivered in under a week." },
      ]}
      pricingPlans={[
        {
          name: "Basic",
          tagline: "Simple Reveal",
          price: "$149",
          features: [
            "3-5 Sec",
            "Custom Animation",
            "Background Music",
            "HD Delivery",
            "Transparent Version",
            "3 days delivery",
          ],
        },
        {
          name: "Premium",
          tagline: "Custom Motion + SFX",
          price: "$299",
          highlighted: true,
          features: [
            "5-8 Sec",
            "Custom Animation",
            "Music & SFX",
            "4K Delivery",
            "Multiple Variants",
            "5 days delivery",
          ],
        },
        {
          name: "Cinematic",
          tagline: "3D Logo Sting",
          price: "$599",
          features: [
            "8-12 Sec",
            "3D Animation",
            "Music & SFX",
            "4K + Transparent",
            "All Aspect Ratios",
            "1 week delivery",
          ],
        },
      ]}
      processHeading="Logo Animation Process"
      processBody="A focused, end-to-end process that turns your brief into a video that delivers real business results."
      processSteps={[
        { title: "Briefing", body: "We learn your brand personality and the use case for the animation." },
        { title: "Concept", body: "Two-three motion concepts shared as style frames." },
        { title: "Animation", body: "Selected concept brought to life with motion." },
        { title: "Sound Design", body: "Custom-fit sound effect to match the visual." },
        { title: "Variants", body: "All required aspect ratios and transparent versions." },
        { title: "Delivery", body: "Final files in every format you need." },
      ]}
      faqs={[
        { q: "How long does a logo animation take?", a: "Most logo animations deliver in 3 to 7 days." },
        { q: "What format will I receive?", a: "MP4, ProRes, and transparent MOV in every aspect ratio." },
        { q: "Can I get a 3D version?", a: "Yes — our Cinematic package includes full 3D logo animation." },
        { q: "Do I own the animation?", a: "Absolutely — full commercial rights on delivery." },
        { q: "Do you provide source files?", a: "After Effects source files available on request." },
      ]}
    />
  );
}