import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circle3D from "@/assets/circle-3d.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function ThreeDAnimationPage() {
  return (
    <ServicePageTemplate
      eyebrow="3D Animation Services"
      heroTitle="3D Animation Services"
      heroSubtitle="Bring depth, realism, and cinematic impact to your brand with high-end 3D animation, product visualization, and CGI."
      heroImage={heroBg}
      introHeading="3D Animation"
      introBody="Our 3D animation services blend artistic storytelling with technical precision to deliver visuals that command attention. From product reveals and architectural fly-throughs to fully animated characters and cinematic environments, our 3D pipeline is built to produce broadcast quality results. We work closely with you from concept to final render, sculpting models, lighting scenes, rigging characters, and choreographing motion that elevates your message and your brand."
      introImage={circle3D}
      portfolioItems={[
        { img: p2, title: "Product Reveal" },
        { img: p4, title: "Architectural Walkthrough" },
        { img: p3, title: "Character Showcase" },
        { img: p1, title: "Industrial Render" },
        { img: p6, title: "Cinematic Promo" },
        { img: p5, title: "Brand Story" },
      ]}
      whyHeading="Why Choose Our 3D Animation Services?"
      whyItems={[
        { title: "Cinematic Quality", body: "Our senior 3D artists deliver broadcast-grade lighting, materials, and motion that make your product or brand look unmistakably premium." },
        { title: "End-to-End Pipeline", body: "From modeling and rigging to lighting, simulation, and final render, we handle every stage in-house for a seamless production experience." },
        { title: "Real Business Impact", body: "Beautiful is not enough. We design every shot to drive comprehension, engagement, and conversion for your specific audience." },
      ]}
      pricingPlans={[
        {
          name: "Starter 3D",
          tagline: "Simple Product Spin or Logo Reveal",
          price: "$899",
          features: [
            "Duration 15 to 30 Seconds",
            "Professional Script Writing",
            "Custom Storyboard",
            "Modeling & Texturing",
            "Background Music & SFX",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "2 weeks delivery",
          ],
        },
        {
          name: "Studio 3D",
          tagline: "Product Animation or Industrial Visualization",
          price: "$1,799",
          highlighted: true,
          features: [
            "Duration 30 to 60 Seconds",
            "Professional Script Writing",
            "AI / Professional Voice Over",
            "Custom Storyboard",
            "Modeling, Rigging & Lighting",
            "Background Music & SFX",
            "Subtitles",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "3 weeks delivery",
          ],
        },
        {
          name: "Cinematic 3D",
          tagline: "Character Animation or CGI Commercial",
          price: "$3,499",
          features: [
            "Duration 60 to 90 Seconds",
            "Professional Script & Voice Over",
            "Custom Storyboard",
            "Full 3D Pipeline + FX",
            "Cinematic Lighting & Compositing",
            "Free Logo Animation",
            "Subtitles",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "4 to 5 weeks delivery",
          ],
        },
      ]}
      processHeading="3D Animation Process"
      processBody="Our 3D pipeline blends creative direction with technical mastery. Every stage is built to make your brand look its absolute best on screen."
      processSteps={[
        { title: "Discovery & Concept", body: "We align on objectives, audience, and visual references so every artistic decision serves a clear business goal." },
        { title: "Storyboarding", body: "We map out shots, camera moves, and key frames so you can see and approve the visual narrative before production starts." },
        { title: "Modeling & Texturing", body: "Our 3D artists build accurate, beautifully textured models including products, environments, and characters ready for the camera." },
        { title: "Lighting & Animation", body: "We light the scene cinematically and animate motion, cameras, and characters to bring your story to life." },
        { title: "Rendering & Compositing", body: "Final renders are color-graded and composited with effects, type, and sound design for a polished, broadcast-ready cut." },
        { title: "Delivery", body: "After your final approval, we deliver master files in every format you need, from 4K hero edits to social cut-downs." },
      ]}
      faqs={[
        { q: "How much does a 3D animation cost?", a: "Our 3D packages start from $899 for short product spins and scale to $3,499+ for cinematic character work. Larger campaigns get custom quotes." },
        { q: "How long does 3D animation take?", a: "Most 3D projects ship in 2 to 5 weeks depending on complexity. Photorealistic product work and full CGI commercials take longer than stylized visuals." },
        { q: "Can you animate from my CAD or 3D files?", a: "Yes, we work with most CAD, OBJ, FBX, and STL formats. We can also rebuild assets from scratch when needed for the best visual quality." },
        { q: "Do you handle voice over and sound design?", a: "We do. Every package includes music and SFX, with optional professional voice over performed by our talent network." },
        { q: "What output formats do you deliver?", a: "Standard delivery is 4K MP4. We can also provide ProRes masters, alpha-channel renders, and cut-downs for every social platform." },
      ]}
    />
  );
}