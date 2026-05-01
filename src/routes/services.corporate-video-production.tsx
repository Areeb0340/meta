import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circleMotion from "@/assets/circle-Motion.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function Corporate() {
  return (
    <ServicePageTemplate
      eyebrow="Corporate Video"
      heroTitle="Corporate Video Production"
      heroSubtitle="Polished corporate videos for training, investor presentations, and stakeholder communications."
      heroImage={heroBg}
      introHeading="Corporate Video"
      introBody="Communicate your company's vision, culture, and value with polished corporate videos. Metagenix produces animated and live-motion corporate videos for internal training, investor presentations, company overviews, and stakeholder communications — all delivered with broadcast quality and consistent on-brand polish."
      introImage={circleMotion}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
      whyHeading="Why Choose Our Corporate Video Services?"
      whyItems={[
        { title: "Executive Polish", body: "Boardroom-ready videos that look and sound the part." },
        { title: "Brand Consistency", body: "Every asset built inside your corporate identity system." },
        { title: "Confidential Workflow", body: "NDA-friendly process and secure asset handling for sensitive content." },
      ]}
      pricingPlans={[
        {
          name: "Internal",
          tagline: "Training & Onboarding Videos",
          price: "$799",
          features: [
            "Up to 2 Min",
            "Script Writing",
            "Pro Voice Over",
            "Custom Storyboard",
            "Music & SFX",
            "Subtitles",
            "2 weeks delivery",
          ],
        },
        {
          name: "Brand Story",
          tagline: "Company Overview Video",
          price: "$1,599",
          highlighted: true,
          features: [
            "90 Sec - 2 Min",
            "Script + Pro Voice Over",
            "Custom Animation",
            "Music & SFX",
            "Subtitles",
            "Unlimited Revisions",
            "3 weeks delivery",
          ],
        },
        {
          name: "Investor",
          tagline: "Pitch & Annual Report Video",
          price: "$2,999",
          features: [
            "Up to 3 Min",
            "Script + Pro Voice Over",
            "Custom Illustration & Data Viz",
            "Music & SFX",
            "Free Logo Animation",
            "Unlimited Revisions",
            "4 weeks delivery",
          ],
        },
      ]}
      processHeading="Corporate Video Process"
      processBody="A focused, end-to-end process that turns your brief into a video that delivers real business results."
      processSteps={[
        { title: "Brief", body: "We align on goals, audience, and key messaging." },
        { title: "Script", body: "Boardroom-ready script writing with stakeholder review." },
        { title: "Storyboard", body: "Visual boards approved before any animation begins." },
        { title: "Production", body: "Animation, voice over, and music all produced in-house." },
        { title: "Review", body: "Stakeholder review rounds with version control." },
        { title: "Delivery", body: "Final master in every format your team needs." },
      ]}
      faqs={[
        { q: "Do you sign NDAs?", a: "Yes, NDA is standard for all corporate engagements." },
        { q: "Can you match our brand guidelines?", a: "Absolutely — we build everything inside your brand system." },
        { q: "How long does it take?", a: "Most corporate projects ship in 2 to 4 weeks." },
        { q: "Do you offer live-action?", a: "Animation is our specialty; we partner with live-action crews when needed." },
        { q: "Can we have multiple language versions?", a: "Yes, we provide multilingual voice over and subtitles." },
      ]}
    />
  );
}