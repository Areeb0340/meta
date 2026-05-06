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
      heroTitle="Premium 3D Animation Services That Make Every Frame Count"
      heroSubtitle="Metagenix delivers world-class 3D animation services that add depth, realism, and a premium visual quality to everything your brand produces. Our 3D animation team combines cutting-edge software with exceptional creative talent to produce stunning results from photorealistic product visualizations and detailed architectural renders to immersive 3D explainer videos and cinematic brand films.
Whether you want to showcase a product in perfect detail, visualize a building before it is built, explain a complex scientific process, or produce a brand film that demands attention Metagenix has the skills, technology, and creative experience to make it happen. Our 3D animation services are used by businesses across every industry, from automotive and pharmaceuticals to real estate and consumer products.

"
      heroImage={heroBg}
      introHeading="What Are 3D Animation Services?"
      introBody="Metagenix delivers world-class 3D animation services that add depth, realism, and a premium visual quality to everything your brand produces. Our 3D animation team combines cutting-edge software with exceptional creative talent to produce stunning results from photorealistic product visualizations and detailed architectural renders to immersive 3D explainer videos and cinematic brand films.
Whether you want to showcase a product in perfect detail, visualize a building before it is built, explain a complex scientific process, or produce a brand film that demands attention Metagenix has the skills, technology, and creative experience to make it happen. Our 3D animation services are used by businesses across every industry, from automotive and pharmaceuticals to real estate and consumer products.

"
      introImage={circle3D}
      portfolioItems={[
        { img: p2, title: "Product Reveal" },
        { img: p4, title: "Architectural Walkthrough" },
        { img: p3, title: "Character Showcase" },
        { img: p1, title: "Industrial Render" },
        { img: p6, title: "Cinematic Promo" },
        { img: p5, title: "Brand Story" },
      ]}
      whyHeading="Why Choose Metagenix for 3D Animation Services?"
      whyItems={[
        {
          title: "Photorealistic Visual Quality",
          body: "Our 3D animation produces lifelike visuals that are indistinguishable from real photography giving your brand a premium, high-end identity that commands attention.",
        },
        {
          title: "Show What Does Not Exist Yet",
          body: "Visualize products, buildings, or concepts before they are manufactured or built accelerating your go-to-market strategy and reducing costly development iterations.",
        },
        {
          title: "360-Degree Perspective",
          body: "Showcase your product or environment from every angle with seamless camera movement, dynamic lighting, and photorealistic detail impossible to achieve with traditional photography.",
        },
        {
          title: "Complex Made Clear",
          body: "Break down intricate mechanisms, biological processes, engineering systems, or software architecture into visually stunning, easy-to-follow 3D animations.",
        },
        {
          title: "High Production Value",
          body: "3D animation immediately positions your brand as premium, forward-thinking, and technically sophisticated above competitors using static imagery or basic video.",
        },
        {
          title: "Reusable 3D Assets",
          body: "3D models created for your project can be repurposed across future campaigns, platforms, and presentations maximizing the long-term return on your production investment.",
        },
      ]}

      industriesEyebrow="Industries We Serve"
      industriesHeading="3D Animation Across Every Industry"
      industriesIntro="Metagenix creates 3D animated content for businesses and organizations across a wide range of sectors. Our team has the technical expertise and creative experience to communicate complex ideas visually in any industry:"
      industries={[
        "Automotive and transportation",
        "Architecture, real estate, and property development",
        "Pharmaceutical, medical, and life sciences",
        "Manufacturing, engineering, and industrial",
        "Consumer products and retail",
        "Technology and software",
        "Energy and sustainability",
        "Aerospace and defence",
        "Education and e-learning",
        "Entertainment and media",
      ]}

      useCasesEyebrow="Ideal Use Cases"
      useCasesHeading="What Can 3D Animation Be Used For?"
      useCasesIntro="3D animation is one of the most powerful and versatile production formats available to modern brands. At Metagenix, we create 3D animated content across a wide range of applications:"
      useCases={[
        "Photorealistic 3D product visualizations and launch videos",
        "Architectural walkthroughs and interior design animations",
        "3D animated explainer videos for complex products and services",
        "Medical, pharmaceutical, and scientific process animations",
        "Manufacturing, engineering, and industrial mechanism demos",
        "Cinematic brand films and commercial campaigns",
        "VFX and special effects sequences for broadcast and digital",
        "Real estate and property development marketing videos",
        "Automotive, aerospace, and vehicle CGI campaigns",
        "Investor presentations and pre-launch product previews",
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

      processHeading="How We Create Your 3D Animated Video"
      processBody="Our proven 6-step 3D animation production process ensures every project is delivered to the highest standard — on time, on brand, and with full creative transparency at every stage."
      processSteps={[
        {
          title: "Creative Brief & 3D Direction",
          body: "We begin with a detailed creative brief establishing the visual direction, camera angles, lighting mood, animation style, and technical requirements for your project.",
        },
        {
          title: "3D Modeling & Rigging",
          body: "Our 3D artists build highly detailed digital models of your product, environment, or characters — working from technical drawings, CAD files, reference images, or creative briefs.",
        },
        {
          title: "Scene Layout & Camera Design",
          body: "We design the scene composition, camera movements, and lighting setups that will bring your story to life and communicate your message most effectively.",
        },
        {
          title: "Texturing, Lighting & Rendering",
          body: "Every surface is textured with photorealistic materials and lit with precision. Scenes are then rendered at the highest resolution a computationally intensive process our team manages completely.",
        },
        {
          title: "Motion, Animation & VFX",
          body: "Objects, characters, and environments are animated with technical precision. VFX elements, compositing, and colour grading are applied to achieve a cinematic final result.",
        },
        {
          title: "Sound Design & Final Delivery",
          body: "Professional voiceover, sound design, and music are added. Your completed 3D animation is delivered in MP4, MOV, and all platform-specific formats required.",
        },
      ]}

      faqs={[
        {
          q: "How long does 3D animation take to produce?",
          a: "3D animation typically takes 4 to 7 weeks depending on the complexity of the project, the number of scenes, the level of photorealistic detail required, and the number of revision rounds. For larger-scale CGI campaigns or architectural visualization projects, timelines may extend further. We always provide a detailed production schedule at the start of every project.",
        },
        {
          q: "What software does Metagenix use for 3D animation?",
          a: "Our 3D animation team works with industry-leading tools including Cinema 4D, Blender, Maya, and Unreal Engine for real-time rendering. Adobe After Effects is used for compositing and finishing. We select the most appropriate software for each project based on the visual requirements and delivery format.",
        },
        {
          q: "Can 3D animation be used for product marketing before launch?",
          a: "Absolutely. One of the most powerful applications of 3D animation is pre-launch product marketing. We can create photorealistic 3D animations from technical drawings, CAD files, or detailed briefs — allowing you to market your product with stunning visuals before a single physical unit is produced.",
        },
        {
          q: "Is 3D animation more expensive than 2D animation?",
          a: "3D animation typically requires more production time, specialist expertise, and computational rendering power than 2D animation — making it a higher investment. However, the visual quality, reusability of 3D assets, and long-term marketing impact deliver exceptional return on investment, particularly for product and architectural applications.",
        },
        {
          q: "Can 3D animation be combined with live footage?",
          a: "Yes. Combining 3D CGI animation with live footage (known as compositing) is one of the most powerful techniques in modern video production. Metagenix regularly produces hybrid productions that seamlessly blend 3D animation with real-world footage for commercials, brand films, and product campaigns.",
        },
        {
          q: "Do you provide 3D animation for the medical and pharmaceutical industry?",
          a: "Yes. Metagenix has extensive experience producing highly accurate medical and pharmaceutical 3D animations including molecular visualizations, drug mechanism of action videos, surgical procedure animations, and patient education content. Our team works closely with technical and scientific experts to ensure accuracy.",
        },
      ]}
    />
  );
}