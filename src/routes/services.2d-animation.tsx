import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circle2D from "@/assets/circle-2d.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function TwoDAnimationPage() {
  return (
    <ServicePageTemplate
      eyebrow="2D Animation Services"
      heroTitle="2D Animation Services"
      heroSubtitle="Visualize your business ideas with engaging 2D animation crafted by senior storytellers, illustrators, and animators."
      heroImage={heroBg}
      introHeading="2D Animation"
      introBody="Offering best-in-class professional 2D animation services, our studio brings concepts to life with innovative thinking and high production standards. Our specialists craft engaging visual content through storytelling and intricate character, environment, and prop design. We collaborate closely with clients to understand their unique vision and deliver creative 2D animation services that resonate with their audience. With optimized workflows and experienced teams, our award-winning 2D animation consistently exceeds expectations."
      introImage={circle2D}
      portfolioItems={[
        { img: p1, title: "Bright Mascot" },
        { img: p3, title: "Neon Lines" },
        { img: p4, title: "Bold Typography" },
        { img: p5, title: "Corporate Story" },
        { img: p6, title: "App Showcase" },
        { img: p2, title: "Tech Reveal" },
      ]}
      whyHeading="Why Choose Our 2D Animation Services?"
      whyItems={[
        { title: "Top-Tier Collaboration", body: "We integrate your vision seamlessly into our top-rated 2D animation services, turning each concept into fascinating animated content that showcases your work as nothing short of exceptional." },
        { title: "Quick Deliveries", body: "With meticulous attention to timelines, we have honed our process to perfection, ensuring our skilled animators deliver flawless 2D projects on time, every time." },
        { title: "Boundless Innovation", body: "With boundless creativity and relentless innovation, our 2D animations set a new standard of excellence and redefine what is possible in the art form." },
      ]}
      pricingPlans={[
        {
          name: "Basic Package",
          tagline: "Text Based Animation",
          price: "$195",
          features: [
            "Duration 30 Seconds",
            "Professional Script Writing",
            "AI Voice Over",
            "Custom Storyboard",
            "Background Music",
            "Sound Effects",
            "Subtitles",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "1 week delivery",
          ],
        },
        {
          name: "Classic Package",
          tagline: "Motion Graphics or Whiteboard Animation",
          price: "$499",
          highlighted: true,
          features: [
            "Duration 30 Seconds",
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
          name: "Ninja Package",
          tagline: "2D Character or Isometric Animation",
          price: "$799",
          features: [
            "Duration 30 Seconds",
            "Professional Script Writing",
            "Professional Voice Over",
            "Custom Storyboard",
            "Free Logo Animation",
            "Background Music & SFX",
            "Subtitles",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "2 weeks delivery",
          ],
        },
      ]}
      processHeading="2D Animation Process"
      processBody="Make your brand memorable with our expert 2D animation. Through a consultative process and our technical proficiency, we actualize your vision in the form of a motion picture."
      processSteps={[
        { title: "Consultation", body: "We discuss your objectives, audience, and preferences to fully capture what you strive to achieve. This informs the direction of your animation." },
        { title: "Story Development", body: "We map out critical visual elements and narrative flow through storyboards and designs. Character and world-building lay the groundwork." },
        { title: "Animation", body: "Our skilled animators choreograph fluid movements and expressions that engage viewers across your storyline. Quality is emphasized." },
        { title: "Audio Integration", body: "We integrate sound, music, and effects to complement the visuals and convey your message in a clear and convincing way." },
        { title: "Quality Assurance", body: "The animation undergoes rigorous testing and polishing to meet our high standards before delivery for final approval." },
        { title: "Delivery & Promotion", body: "With your feedback, we make the necessary refinements. You are ready to successfully launch and distribute your animation." },
      ]}
      faqs={[
        { q: "How much does a 2D animator cost?", a: "Our 2D animation packages start from $195 for short text-based animations and scale up to $799+ for character-driven work. Custom enterprise quotes are available for longer or more complex projects." },
        { q: "How long does a 2D animation video take?", a: "A typical 30 to 60 second 2D animation takes 1 to 3 weeks depending on complexity. We share a detailed timeline at kickoff so there are no surprises." },
        { q: "What software do you use for 2D animation?", a: "Our animators use industry standard tools including Adobe After Effects, Adobe Animate, Toon Boom Harmony, and Procreate for storyboarding and asset creation." },
        { q: "Do you offer revisions?", a: "Yes, every package includes unlimited revisions during defined review rounds to ensure the final animation matches your vision." },
        { q: "Will I own the final animation?", a: "Absolutely. Once the project is delivered and paid for, you own full commercial rights to the final animation including source files on request." },
      ]}
    />
  );
}