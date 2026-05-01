import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circleWhiteboard from "@/assets/circle-Whiteboard.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function Whiteboard() {
  return (
    <ServicePageTemplate
      eyebrow="Whiteboard Video"
      heroTitle="Whiteboard Video Production"
      heroSubtitle="Simplify complex ideas with hand-drawn whiteboard videos that educate, persuade, and convert."
      heroImage={heroBg}
      introHeading="Whiteboard Video"
      introBody="Whiteboard animation is the most effective format for explaining complex products and concepts. Our whiteboard video production combines custom illustrations, smooth hand-drawn motion, and crystal-clear narration to turn even the most technical subject into something engaging and memorable. Perfect for sales decks, training, onboarding, healthcare, fintech, and education."
      introImage={circleWhiteboard}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
      whyHeading="Why Choose Our Whiteboard Video Services?"
      whyItems={[
        { title: "Clarity Above All", body: "We turn dense information into a clear, story-led narrative your audience remembers." },
        { title: "Custom Illustration", body: "Every frame is custom-drawn for your brand — never templated stock art." },
        { title: "Made to Convert", body: "Scripts written to drive comprehension and action — perfect for sales and onboarding." },
      ]}
      pricingPlans={[
        {
          name: "Basic",
          tagline: "Stock Illustrations + Voice Over",
          price: "$249",
          features: [
            "30 Sec",
            "Script Writing",
            "AI Voice Over",
            "Custom Storyboard",
            "Background Music",
            "Subtitles",
            "1 week delivery",
          ],
        },
        {
          name: "Custom",
          tagline: "Custom Illustrations + Pro Voice",
          price: "$549",
          highlighted: true,
          features: [
            "60 Sec",
            "Script Writing",
            "Pro Voice Over",
            "Custom Illustrations",
            "Music & SFX",
            "Subtitles",
            "2 weeks delivery",
          ],
        },
        {
          name: "Premium",
          tagline: "Hybrid Whiteboard + Color",
          price: "$899",
          features: [
            "90 Sec",
            "Script Writing",
            "Pro Voice Over",
            "Full Color Illustrations",
            "Music & SFX",
            "Free Logo Animation",
            "2-3 weeks delivery",
          ],
        },
      ]}
      processHeading="Whiteboard Video Process"
      processBody="A focused, end-to-end process that turns your brief into a video that delivers real business results."
      processSteps={[
        { title: "Discovery", body: "We learn your audience, the concept you need to explain, and the action you want." },
        { title: "Script", body: "A clear, conversational script — short enough to keep attention, sharp enough to convert." },
        { title: "Storyboard", body: "Hand-drawn boards so you can see and approve every visual beat." },
        { title: "Illustration", body: "Custom-drawn assets in a style tailored to your brand and message." },
        { title: "Animation & Voice", body: "Smooth hand-drawn motion paired with professional narration and music." },
        { title: "Delivery", body: "Final master in HD/4K plus social cut-downs ready for every channel." },
      ]}
      faqs={[
        { q: "Why are whiteboard videos so effective?", a: "They pair visual storytelling with clear narration, which improves comprehension and recall." },
        { q: "Are illustrations custom or stock?", a: "Custom and Premium packages use 100% original hand-drawn illustrations." },
        { q: "Can you write the script for me?", a: "Yes, every package includes professional script writing." },
        { q: "How long does a whiteboard video take?", a: "Most projects deliver in 1 to 3 weeks depending on length and complexity." },
        { q: "Do you offer multilingual voice over?", a: "Yes, we provide professional voice over in 30+ languages." },
      ]}
    />
  );
}