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
