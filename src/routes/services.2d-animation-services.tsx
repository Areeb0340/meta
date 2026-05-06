import { ServicePageTemplate } from "../components/ServicePageTemplate";

import circle2D from "@/assets/circle-2d.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";







/* ===========================================================
   PAGE
   =========================================================== */
export default function TwoDAnimationPage() {
  return (
    <>
      <ServicePageTemplate
        eyebrow="2D Animation Services"
        heroTitle="Professional 2D Animation Services That Drive Real Results"
        heroSubtitle="At Metagenix, we specialize in creating vivid, character-driven 2D animated videos that bring your brand to life. Our 2D animation services are crafted to communicate your message in the clearest, most engaging way possible helping businesses of every size connect with their target audience, simplify complex ideas, and drive real, measurable results.
Whether you are a startup launching your very first product or an established enterprise refreshing your brand communications, our team of expert animators, scriptwriters, and creative directors will deliver a 2D animation that exceeds your expectations. Every project starts with a deep understanding of your brand, your goals, and your audience and ends with a video you are proud to put in front of the world.
"
        heroImage={heroBg}
        introHeading="What Are 2D Animation Services?"
        introBody="2D animation is a flat, illustrated style of animation that uses characters, shapes, graphics, and motion to tell visual stories. It remains one of the most popular and versatile animation formats in the world and for good reason. 2D animated videos are cost-effective, fast to produce, and work beautifully across every industry and platform.
From animated explainer videos and product demos to educational content and social media ads, 2D animation is the go-to format for brands that want to communicate clearly and memorably. The style can range from simple icon-based motion graphics to rich, character-driven narratives with elaborate environments all tailored precisely to your brand identity and campaign goals.
At Metagenix, our 2D animation capabilities span the full creative spectrum. We produce frame-by-frame character animation, motion graphics, kinetic typography, illustrated explainer videos, animated info graphics, and more all under one roof, from initial concept through to final delivery.
"
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
          { title: "Cost-Effective Production", body: "2D animation delivers high visual impact at a competitive price point ideal for startups, SMEs, and brands managing budgets carefully without sacrificing quality." },
          { title: "Fast Turnaround Times", body: "Quicker to produce than 3D or CGI, 2D animation allows us to deliver polished, professional results efficiently meeting your campaign deadlines with ease." },
          { title: "Infinitely Versatile", body: "2D animation works across every industry, audience, and platform from social media feeds and mobile apps to broadcast television and conference presentations." },
          { title: "100% Brand Consistent", body: "Every animation is built around your exact brand colours, typography, illustration style, and visual identity ensuring a completely cohesive result." },
          { title: "Proven Conversion Booster", body: "Animated explainer videos consistently outperform static content increasing conversions, reducing bounce rates, and improving time-on-page significantly." },
          { title: "End-to-End In-House", body: "From scriptwriting and storyboarding to animation and sound design everything is handled by our in-house team. No outsourcing, no surprises, no compromises." },
        ]}

              industriesEyebrow="Industries We Serve"
      industriesHeading="2D Animation for Every Industry"
      industriesIntro="Metagenix creates 2D animated videos for businesses across a wide range of industries. No matter your sector, our team has the expertise to communicate your message effectively:"
      industries={[
        "SaaS and technology companies",
        "Healthcare and pharmaceutical brands",
        "Financial services and fintech",
        "Education and e-learning platforms",
        "Retail and e-commerce",
        "Real estate and property development",
        "Non-profit and NGO organizations",
        "Government and public sector",
        "Marketing and advertising agencies",
        "Legal and professional services",
      ]}
    
         useCasesEyebrow="Ideal Use Cases"
      useCasesHeading="What Can 2D Animation Be Used For?"
      useCasesIntro="2D animation is one of the most versatile formats in video production. At Metagenix, we create 2D animated content for a wide range of business applications:"
      useCases={[
        "Animated explainer videos for websites and landing pages",
        "Product and service demonstration videos",
        "Educational and e-learning course content",
        "Social media animated videos, reels, and stories",
        "Animated ads for YouTube, Instagram, Facebook, TikTok, and LinkedIn",
        "SaaS product on boarding and feature tutorial videos",
        "Startup pitch decks and investor presentation videos",
        "App walkthrough and UI demonstration videos",
        "Internal training and HR communication videos",
        "Non-profit awareness and fundraising campaign videos",
      ]}


        pricingPlans={[
          { name: "Basic Package", tagline: "Text Based Animation", price: "$195", features: ["Duration 30 Seconds","Professional Script Writing","AI Voice Over","Custom Storyboard","Background Music","Sound Effects","Subtitles","Dedicated Project Manager","Unlimited Revisions","1 week delivery"] },
          { name: "Classic Package", tagline: "Motion Graphics or Whiteboard Animation", price: "$499", highlighted: true, features: ["Duration 30 Seconds","Professional Script Writing","AI / Professional Voice Over","Custom Storyboard","Background Music & SFX","Subtitles","Dedicated Project Manager","Unlimited Revisions","2 weeks delivery"] },
          { name: "Ninja Package", tagline: "2D Character or Isometric Animation", price: "$799", features: ["Duration 30 Seconds","Professional Script Writing","Professional Voice Over","Custom Storyboard","Free Logo Animation","Background Music & SFX","Subtitles","Dedicated Project Manager","Unlimited Revisions","2 weeks delivery"] },
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
          { q: "How long does a 2D animated video take to produce?", a: "A typical 60–90 second 2D animated explainer video takes 3 to 4 weeks from brief to final delivery. Timelines can vary based on the complexity of the animation, the number of revision rounds, and the speed of client approvals at each stage. We always provide a detailed project timeline at the start of every engagement." },
          { q: "What industries do you create 2D animation for?", a: "Metagenix creates 2D animated videos for businesses across all industries including SaaS, healthcare, financial services, education, retail, real estate, legal, non-profit, government, and more. Our team has experience communicating complex ideas in any sector." },
          { q: "Can I request a specific animation style?", a: "Absolutely. Every Metagenix project is 100% custom. Whether you want a specific character style, illustration aesthetic, colour palette, or completely unique visual direction, our creative team will develop a bespoke animation style that fits your brand identity and resonates with your audience." },
          { q: "Do you provide voiceover and music as part of the service?", a: "Yes. Our full 2D animation service includes professional voiceover recording in multiple languages and accents, licensed background music, and complete sound design and mixing. You receive a fully finished, broadcast-ready video  no additional production work required." },
          { q: "How much does a 2D animated video cost?", a: "2D animation pricing depends on the video length, complexity, animation style, and turnaround time. Metagenix offers flexible pricing to suit startups, SMEs, and enterprise clients alike. Contact us for a free, no-obligation quote tailored to your specific project brief." },
          { q: "Can you match an existing animation style we already have?", a: "Yes. If you have existing animated content and want new videos to match your established visual style, our team can work to your existing style guide and character assets ensuring complete consistency across your video library." },
         
        ]}
      />
    </>
  );
}
