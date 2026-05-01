import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circleMotion from "@/assets/circle-Motion.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function Saas() {
  return (
    <ServicePageTemplate
      eyebrow="SaaS Explainer"
      heroTitle="SaaS Explainer Videos"
      heroSubtitle="Help your users understand your software in seconds with clear, animated demos that boost sign-ups."
      heroImage={heroBg}
      introHeading="SaaS Explainer"
      introBody="Help your users understand your software in seconds. Our SaaS explainer videos simplify complex platforms into clear, engaging animated demos — reducing churn, boosting sign-ups, and shortening your sales cycle. Built for landing pages, ad campaigns, and product onboarding."
      introImage={circleMotion}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
      whyHeading="Why Choose Our SaaS Explainer Services?"
      whyItems={[
        { title: "UI-Accurate Animation", body: "Pixel-perfect animated UI that mirrors your real product." },
        { title: "Conversion Tested", body: "Scripts and pacing tuned for landing page and ad conversion." },
        { title: "Fast Iteration", body: "Quick rounds and modular scenes that scale across feature launches." },
      ]}
      pricingPlans={[
        {
          name: "Landing Page",
          tagline: "Hero Explainer",
          price: "$799",
          features: [
            "30-45 Sec",
            "Script Writing",
            "AI / Pro Voice Over",
            "Animated UI",
            "Music & SFX",
            "Subtitles",
            "2 weeks delivery",
          ],
        },
        {
          name: "Product Tour",
          tagline: "Feature Walkthrough",
          price: "$1,499",
          highlighted: true,
          features: [
            "60-90 Sec",
            "Script + Pro Voice Over",
            "Custom Animated UI",
            "Music & SFX",
            "Subtitles",
            "Unlimited Revisions",
            "3 weeks delivery",
          ],
        },
        {
          name: "Onboarding Suite",
          tagline: "Multi-video Onboarding",
          price: "$2,999",
          features: [
            "3-5 Videos",
            "Script + Pro Voice Over",
            "Animated UI + Characters",
            "Free Logo Animation",
            "Music & SFX",
            "Unlimited Revisions",
            "4 weeks delivery",
          ],
        },
      ]}
      processHeading="SaaS Explainer Process"
      processBody="A focused, end-to-end process that turns your brief into a video that delivers real business results."
      processSteps={[
        { title: "Discovery", body: "We learn your product, ICP, and the single action you want users to take." },
        { title: "Script", body: "Conversion-focused script tuned for landing page and ad placements." },
        { title: "Storyboard", body: "Frame-by-frame approval before animation begins." },
        { title: "UI Animation", body: "Pixel-accurate animation of your real product UI." },
        { title: "Sound Design", body: "Music and SFX that elevate the product experience." },
        { title: "Delivery", body: "Final master plus a/b cuts for testing." },
      ]}
      faqs={[
        { q: "Can you animate my real UI?", a: "Yes — we build pixel-accurate UI animations from your design system." },
        { q: "Do you create A/B variants?", a: "Yes, we can ship multiple cuts for split testing." },
        { q: "How long should a SaaS explainer be?", a: "Hero videos: 30-45 sec. Product tours: 60-90 sec." },
        { q: "Will it work for paid ads?", a: "Absolutely — we cut platform-specific versions for Meta, LinkedIn, etc." },
        { q: "Do you handle voice casting?", a: "Yes, with access to a global VO talent network." },
      ]}
    />
  );
}