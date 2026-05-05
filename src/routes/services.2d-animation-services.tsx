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
          { q: "What types of animation services does Metagenix offer?", a: "Metagenix offers a full range of animation and video production services including 2D animation, 3D animation, motion graphics, whiteboard video production, explainer video production, corporate videos, SaaS explainer videos, logo animation, CGI videos, and professional video editing. Whether you need a simple animated explainer video or a complex CGI brand campaign, we have the expertise to deliver." },
          { q: "What is an explainer video and how can it help my business?", a: "An explainer video is a short animated video typically 60 to 90 seconds that communicates your product, service, or idea in a simple, engaging, and visually compelling way. Explainer videos help businesses increase website conversions, improve audience understanding, reduce bounce rates, and boost brand awareness. As a leading explainer video production company, Metagenix creates animated explainer videos that are built to inform, engage, and convert." },
          { q: "What is the difference between 2D and 3D animation?", a: "2D animation uses flat, illustrated characters and environments ideal for explainer videos, educational content, and animated ads. It is cost-effective, fast to produce, and highly versatile. 3D animation adds depth, realism, and a premium visual quality perfect for product visualisations, architectural renders, and cinematic brand films. At Metagenix, we offer both 2D and 3D explainer videos tailored to your brand goals and budget." },
          { q: "Do you create whiteboard videos?", a: "Yes. Metagenix is an experienced whiteboard video company offering professional whiteboard video production services. Our whiteboard videos use hand-drawn animation to break down complex concepts into simple, engaging visual stories ideal for SaaS companies, educational platforms, healthcare brands, and financial services." },
          { q: "Can you produce animated ads for social media and digital campaigns?", a: "Absolutely. Our animated ads service covers all major digital platforms including YouTube, Instagram, Facebook, LinkedIn, and TikTok. We create scroll-stopping animated video ads designed to grab attention, communicate your message quickly, and drive measurable results for your paid campaigns." },
          { q: "What is your explainer video production process?", a: "Our production process has six stages: Discovery & Brief, Script & Concept, Storyboard & Style Frames, Animation & Motion Graphics, Sound Design & Voiceover, and Final Delivery. We involve you at every key stage to ensure the final video aligns perfectly with your brand and objectives." },
          { q: "How long does it take to produce an explainer video?", a: "A typical 60-90 second animated explainer video takes between 3 to 5 weeks from brief to final delivery, depending on the complexity, style, and revision rounds. 3D animation and CGI videos may take slightly longer. We always provide a clear timeline upfront so you know exactly when to expect each deliverable." },
          { q: "How many revision rounds are included?", a: "We include revision rounds at each key stage of production — script, storyboard, and animation — to make sure the final video is exactly what you envisioned. Our goal is always your complete satisfaction with the final animated video production." },
          { q: "How much does an explainer video cost?", a: "The cost of an explainer video depends on the style (2D, 3D, whiteboard, CGI), length, complexity, and turnaround time. Metagenix offers flexible pricing to suit startups, SMEs, and enterprise clients alike. Contact us for a free, no-obligation quote tailored to your project." },
          { q: "Do you offer packages for startups and small businesses?", a: "Yes. We understand that startups and small businesses have different budgets and needs. Metagenix offers scalable explainer video services and animation packages designed to deliver maximum impact at every budget level without compromising on quality." },
          { q: "Can I request a custom animation style?", a: "Absolutely. Every project at Metagenix is fully custom. Whether you want a specific character style, brand colour palette, motion graphics aesthetic, or a completely unique visual direction, our creative team will develop a bespoke style that fits your brand identity perfectly." },
          { q: "What file formats will I receive for my video?", a: "We deliver your final video in all formats you need — MP4, MOV, AVI, and web-optimised versions for platforms like YouTube, Vimeo, Instagram, and LinkedIn. We can also provide individual assets such as animated logo files or motion graphics elements on request." },
          { q: "Do you provide voiceover and music for explainer videos?", a: "Yes. Our video animation services include professional voiceover recording in multiple languages and accents, as well as licensed background music and full sound design. Everything is handled in-house so you receive a fully polished, broadcast-ready video." },
          { q: "Will I own the rights to my animated video?", a: "Yes. Upon final payment, full intellectual property and usage rights for your animated video are transferred to you. You are free to use your explainer video, motion graphics, or logo animation across all channels — web, social, broadcast, and beyond." },
          { q: "Do you work with clients internationally?", a: "Yes. Metagenix works with clients across the globe — from startups in Europe and the Middle East to enterprise brands in the US, UK, Asia, and beyond. As a remote-first video animation company, we have a streamlined online collaboration process that makes working with us easy, wherever you are in the world." },
        ]}
      />
    </>
  );
}
