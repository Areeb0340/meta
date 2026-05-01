import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circleWhiteboard from "@/assets/circle-Whiteboard.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function VideoEditing() {
  return (
    <ServicePageTemplate
      eyebrow="Video Editing"
      heroTitle="Professional Video Editing"
      heroSubtitle="Polished video editing — colour grading, motion graphics, sound design, and post-production finishing."
      heroImage={heroBg}
      introHeading="Video Editing"
      introBody="Take your raw footage to the next level. Our video editing services include colour grading, motion graphics integration, sound design, subtitling, and post-production finishing — delivering a polished final product ready for any platform. From short-form social cuts to long-form documentary edits."
      introImage={circleWhiteboard}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
      whyHeading="Why Choose Our Video Editing Services?"
      whyItems={[
        { title: "Senior Editors", body: "Editors with feature-film and broadcast experience." },
        { title: "Color & Sound In-House", body: "DaVinci Resolve color grading and full sound design under one roof." },
        { title: "Fast Turnaround", body: "Optimised workflow for quick edit-to-publish cycles." },
      ]}
      pricingPlans={[
        {
          name: "Social Cut",
          tagline: "Short-form Edit",
          price: "$199",
          features: [
            "Up to 60 Sec",
            "Color Grade",
            "Music & SFX",
            "Subtitles",
            "1 Aspect Ratio",
            "3 days delivery",
          ],
        },
        {
          name: "Brand Edit",
          tagline: "Mid-form Edit",
          price: "$549",
          highlighted: true,
          features: [
            "1-3 Min",
            "Color Grade",
            "Motion Graphics",
            "Music & SFX",
            "Subtitles",
            "Multiple Cuts",
            "1 week delivery",
          ],
        },
        {
          name: "Long Form",
          tagline: "Documentary or YouTube",
          price: "$1,299",
          features: [
            "Up to 15 Min",
            "Color Grade",
            "Motion Graphics & Titles",
            "Pro Sound Design",
            "Subtitles",
            "2 weeks delivery",
          ],
        },
      ]}
      processHeading="Video Editing Process"
      processBody="A focused, end-to-end process that turns your brief into a video that delivers real business results."
      processSteps={[
        { title: "Brief", body: "We align on objective, length, and platform." },
        { title: "Selects", body: "Best take selection from your raw footage." },
        { title: "Rough Cut", body: "First assembly for your review." },
        { title: "Polish", body: "Color grade, motion graphics, and sound design." },
        { title: "Final Review", body: "Locked-in revisions before mastering." },
        { title: "Delivery", body: "Master file plus all required social cut-downs." },
      ]}
      faqs={[
        { q: "What format do you accept footage in?", a: "Most camera formats including ProRes, BRAW, R3D, H.264, and HEVC." },
        { q: "How long does editing take?", a: "Short cuts in 3 days, long-form in 1-2 weeks." },
        { q: "Do you offer color grading?", a: "Yes — DaVinci Resolve color grading included in every package." },
        { q: "Can you add motion graphics?", a: "Absolutely — titles, lower thirds, and animated graphics on demand." },
        { q: "Do you offer subtitles?", a: "Yes — burnt-in or SRT files in 30+ languages." },
      ]}
    />
  );
}