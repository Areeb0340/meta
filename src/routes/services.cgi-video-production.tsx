import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circle3D from "@/assets/circle-3d.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function CgiVideo() {
  return (
     <ServicePageTemplate
      eyebrow="CGI Video"
      heroTitle="CGI Video Production"
      heroSubtitle="Photorealistic CGI for product demos, architectural visualization, VFX, and brand campaigns."
      heroImage={heroBg}
      introHeading="CGI Video"
      introBody="Push the boundaries of visual storytelling with photorealistic CGI videos. Our CGI production team creates stunning computer-generated imagery for product demos, architectural visualisations, VFX sequences, and high-impact brand campaigns. Broadcast-grade quality, end-to-end pipeline."
      introImage={circle3D}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
      whyHeading="Why Choose Our CGI Video Services?"
      whyItems={[
        { title: "Photoreal Quality", body: "Pixel-perfect realism powered by industry-standard tools and senior artists." },
        { title: "Full VFX Pipeline", body: "From simulation to compositing — we handle every CGI need in-house." },
        { title: "Brand-Grade Output", body: "Broadcast-ready visuals that elevate even the most demanding campaigns." },
      ]}
      pricingPlans={[
        {
          name: "Product CGI",
          tagline: "Simple Product Render",
          price: "$1,299",
          features: [
            "15-30 Sec",
            "Modeling & Texturing",
            "Lighting & Render",
            "Music & SFX",
            "HD/4K Delivery",
            "2 weeks delivery",
          ],
        },
        {
          name: "Brand CGI",
          tagline: "Cinematic Brand Spot",
          price: "$2,799",
          highlighted: true,
          features: [
            "30-60 Sec",
            "Full CGI Pipeline",
            "Custom Lighting & FX",
            "Music & SFX",
            "Free Logo Animation",
            "3-4 weeks delivery",
          ],
        },
        {
          name: "Hero CGI",
          tagline: "Photoreal Hero Film",
          price: "$5,999",
          features: [
            "60-90 Sec",
            "Full Photoreal Pipeline",
            "VFX Compositing",
            "Music & SFX",
            "Cinematic Color Grade",
            "5-6 weeks delivery",
          ],
        },
      ]}
      processHeading="CGI Video Process"
      processBody="A focused, end-to-end process that turns your brief into a video that delivers real business results."
      processSteps={[
        { title: "Concept", body: "We align on creative direction and visual references." },
        { title: "Modeling", body: "High-detail asset creation built for hero camera work." },
        { title: "Lighting", body: "Cinematic lighting for photoreal output." },
        { title: "Animation & Sim", body: "Camera, animation, and any required FX simulation." },
        { title: "Render & Composite", body: "Final renders composited and color-graded." },
        { title: "Delivery", body: "Master file in every format you need." },
      ]}
      faqs={[
        { q: "What software do you use for CGI?", a: "Industry-standard tools including Cinema 4D, Blender, Houdini, Maya, and Nuke." },
        { q: "How long does a CGI video take?", a: "Most CGI projects ship in 2 to 6 weeks." },
        { q: "Can you work from CAD files?", a: "Yes — we work with most CAD, OBJ, FBX, and STL formats." },
        { q: "Do you offer 4K/8K render?", a: "Yes — up to 8K render available on enterprise packages." },
        { q: "Can you composite CGI into live footage?", a: "Yes, full VFX integration including tracking and compositing." },
      ]}
    />
  );
}