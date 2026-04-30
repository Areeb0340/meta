import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import circleWhiteboard from "@/assets/circle-whiteboard.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/services/whiteboard")({
  head: () => ({
    meta: [
      { title: "Whiteboard Animation Services — Metagenix" },
      { name: "description", content: "Whiteboard animation videos that simplify complex ideas with hand-drawn style storytelling and clear narration." },
      { property: "og:title", content: "Whiteboard Animation Services — Metagenix" },
      { property: "og:description", content: "Hand-drawn whiteboard animations that simplify complex ideas." },
      { property: "og:image", content: circleWhiteboard },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Whiteboard Animation"
      heroTitle="Whiteboard Animation Services"
      heroSubtitle="Simplify complex ideas with hand-drawn whiteboard videos that educate, persuade, and convert."
      heroImage={heroBg}
      introHeading="Whiteboard Animation"
      introBody="Whiteboard animation is the most effective format for explaining complex products, services, and concepts. Our whiteboard animation services combine custom illustrations, smooth hand-drawn motion, and crystal-clear narration to turn even the most technical subject into something engaging and memorable. Perfect for sales decks, training, onboarding, healthcare, fintech, and education."
      introImage={circleWhiteboard}
      portfolioItems={[
        { img: p5, title: "Healthcare Explainer" },
        { img: p1, title: "SaaS Onboarding" },
        { img: p4, title: "Training Series" },
        { img: p2, title: "Fintech Story" },
        { img: p6, title: "EdTech Lesson" },
        { img: p3, title: "Pitch Video" },
      ]}
      whyHeading="Why Choose Our Whiteboard Animation?"
      whyItems={[
        { title: "Clarity Above All", body: "We turn dense information into a clear, story-led narrative your audience actually remembers." },
        { title: "Custom Illustration", body: "Every frame is custom-drawn for your brand and message, never templated stock library art." },
        { title: "Made to Convert", body: "Our scripts are written to drive comprehension and action, perfect for sales, fundraising, and onboarding." },
      ]}
      pricingPlans={[
        {
          name: "Basic Whiteboard",
          tagline: "Stock Illustrations + Voice Over",
          price: "$249",
          features: [
            "Duration 30 Seconds",
            "Professional Script Writing",
            "AI Voice Over",
            "Custom Storyboard",
            "Background Music",
            "Subtitles",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "1 week delivery",
          ],
        },
        {
          name: "Custom Whiteboard",
          tagline: "Custom Illustrations + Pro Voice",
          price: "$549",
          highlighted: true,
          features: [
            "Duration 60 Seconds",
            "Professional Script Writing",
            "Professional Voice Over",
            "Custom Storyboard & Illustrations",
            "Background Music & SFX",
            "Subtitles",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "2 weeks delivery",
          ],
        },
        {
          name: "Premium Whiteboard",
          tagline: "Hybrid Whiteboard + Color",
          price: "$899",
          features: [
            "Duration 90 Seconds",
            "Professional Script Writing",
            "Professional Voice Over",
            "Full Color Custom Illustrations",
            "Background Music & SFX",
            "Free Logo Animation",
            "Subtitles",
            "Dedicated Project Manager",
            "Unlimited Revisions",
            "2 to 3 weeks delivery",
          ],
        },
      ]}
      processHeading="Whiteboard Animation Process"
      processBody="A focused process that turns even the most complex topic into a video your audience instantly understands."
      processSteps={[
        { title: "Discovery", body: "We learn your audience, the concept you need to explain, and the action you want viewers to take." },
        { title: "Script", body: "A clear, conversational script, short enough to keep attention, sharp enough to convert." },
        { title: "Storyboard", body: "Hand-drawn boards so you can see and approve every visual beat before animation starts." },
        { title: "Illustration", body: "Custom-drawn assets in a style tailored to your brand and message." },
        { title: "Animation & Voice", body: "Smooth hand-drawn motion paired with professional narration and music." },
        { title: "Delivery", body: "Final master in HD/4K plus social cut-downs ready for every channel." },
      ]}
      faqs={[
        { q: "Why are whiteboard videos so effective?", a: "Whiteboard animation pairs visual storytelling with clear narration, which research consistently shows improves both comprehension and recall, especially for complex topics." },
        { q: "Are the illustrations custom or stock?", a: "Our Custom and Premium packages use 100% original hand-drawn illustrations created for your brand and message." },
        { q: "Can you write the script for me?", a: "Yes, every package includes professional script writing tailored to your goals, brand voice, and audience." },
        { q: "How long does a whiteboard video take?", a: "Most projects deliver in 1 to 3 weeks depending on length and illustration complexity." },
        { q: "Do you offer multilingual voice over?", a: "Yes, we provide professional voice over in 30+ languages and accents through our global talent network." },
      ]}
    />
  );
}
