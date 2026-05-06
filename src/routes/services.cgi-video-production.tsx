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
      heroTitle="Photorealistic CGI Video Production That Sets Your Brand Apart"
      heroSubtitle="Metagenix pushes the boundaries of visual storytelling with photorealistic CGI video production that positions brands above the competition in the most visually demanding environments. Our CGI team combines advanced 3D software, exceptional artistic talent, and deep industry expertise to produce computer-generated imagery of the highest quality for product demonstrations, architectural visualizations, VFX sequences, automotive campaigns, pharmaceutical animations, and high-impact brand films.
CGI video production gives your brand absolute creative freedom. Whatever you can imagine a product that does not yet exist, an environment that cannot be filmed, a process that happens at a microscopic level we can bring it to life with a level of visual precision, realism, and cinematic quality that live-action production simply cannot match. At Metagenix, we make world-class CGI accessible for businesses of every size.
"
      heroImage={heroBg}
      introHeading="What Is CGI Video Production?"
      introBody="CGI Computer-Generated Imagery is the use of advanced 3D computer graphics software to create photorealistic visual content that would be impossible, impractical, or prohibitively expensive to capture with traditional live-action filming. CGI video production allows brands to create visuals of any product, environment, or process with complete control over every element of the scene, from lighting and camera angles to materials, textures, and physics.
CGI video production is used across industries including automotive, consumer products, architecture, pharmaceuticals, fashion, scientific research, and entertainment. It is the technology behind the most visually impressive commercial campaigns, product launches, and brand films in the world and at Metagenix, we make this technology available to ambitious brands at every level of business.
Our CGI capabilities span photorealistic product renders, architectural walkthrough animations, molecular and biological visualizations, vehicle and industrial CGI, VFX compositing with live footage, and full CGI brand campaigns. We manage the entire production process in-house from initial creative brief and 3D modeling through to rendering, compositing, sound design, and final delivery.
"
      introImage={circle3D}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
      whyHeading="Why Choose Metagenix for CGI Video Production?"
      whyItems={[
        { title: "Absolute Creative Freedom", body: "CGI allows you to visualize any product, environment, scenario, or process including those that do not yet exist in the physical world with complete creative and technical control." },
        { title: "Photorealistic Visual Quality", body: "Our CGI productions achieve a level of visual realism indistinguishable from real photography giving your brand an ultra-premium visual identity that commands attention and conveys quality" },
        { title: "Cost-Effective vs Live Production", body: "Cost-Effective vs Live ProductionFor complex scenes, CGI is often significantly more cost-effective than organising locations, crews, props, and multiple live shoot days with the added benefit of unlimited retakes and adjustments.	Perfect Product Showcase Every TimePresent your product in perfect condition, from every angle, in any environment, at any scale completely eliminating the variables and imperfections of traditional product photography and filming." },
  { title: "Perfect Product Showcase Every Time", body: "Present your product in perfect condition, from every angle, in any environment, at any scale completely eliminating the variables and imperfections of traditional product photography and filming." },
{ title: "Pre-Visualize Before Production", body: "Create photorealistic CGI of products, buildings, and environments before they are manufactured or built accelerating go-to-market timelines and significantly reducing development costs." },
         { title: "Globally Scalable Content", body: "Produce CGI content once and adapt it for any market, language, colour variant, or platform without the logistical cost and complexity of additional filming or photography sessions." },
      ]}


     industriesEyebrow="Industries We Serve"
industriesHeading="CGI Video Production Across Every Industry"
industriesIntro="Metagenix creates CGI video content for businesses and organizations across a wide range of sectors. Our team combines technical CGI expertise with deep industry knowledge to deliver results that are both visually stunning and strategically effective:"
industries={[
  "Automotive, vehicle, and transportation brands",
  "Architecture, real estate, and property development",
  "Pharmaceutical, medical devices, and life sciences",
  "Manufacturing, engineering, and industrial equipment",
  "Consumer electronics, technology, and hardware products",
  "Luxury goods, fashion, and premium consumer brands",
  "Energy, renewable, and sustainability",
  "Scientific research and academic institutions",
  "Aerospace, defense, and advanced technology",
  "Food and beverage, FMCG, and retail brands",
]}

    useCasesEyebrow="Ideal Use Cases"
useCasesHeading="What Can CGI Video Production Be Used For?"
useCasesIntro="CGI video production is one of the most powerful visual tools available for brands that demand absolute perfection, creative freedom, and photorealistic quality. At Metagenix, we create CGI content across a wide range of applications:"
useCases={[
  "Photorealistic product demonstration and pre-launch marketing videos",
  "Architectural walkthroughs and interior design visualizations",
  "Automotive and vehicle CGI campaigns for launches and advertising",
  "Pharmaceutical, medical, and molecular visualization animations",
  "VFX and special effects sequences composited with live-action footage",
  "Luxury brand and fashion CGI campaigns for digital and print",
  "Industrial, manufacturing, and engineering process animations",
  "Scientific research and environmental simulation videos",
  "Consumer electronics and technology product showcase videos",
  "Real estate marketing renders and pre-construction walkthroughs",
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
  processHeading="How We Create Your CGI Video"
processBody="Our comprehensive 6-step CGI video production process ensures photorealistic quality, creative precision, and complete transparency from initial brief to final delivery."
processSteps={[
  { 
    title: "Creative Brief & Direction", 
    body: "We define the visual direction, creative objectives, technical requirements, camera angles, lighting mood, and overall scene planning for your CGI project." 
  },
  { 
    title: "3D Modeling & Scene Construction", 
    body: "Our artists build highly detailed, technically accurate 3D models using CAD files, reference images, or creative briefs to construct your scenes." 
  },
  { 
    title: "Texturing, Materials & Lighting", 
    body: "We apply photorealistic materials like metal, glass, fabric, and skin, combined with precise lighting to achieve the desired visual mood and realism." 
  },
  { 
    title: "CGI Rendering", 
    body: "Scenes are rendered in high resolution using advanced rendering engines, ensuring maximum detail and cinematic output quality." 
  },
  { 
    title: "VFX, Compositing & Colour Grading", 
    body: "We integrate VFX, blend CGI with live footage if needed, and apply professional colour grading for a polished, cinematic result." 
  },
  { 
    title: "Sound Design & Final Delivery", 
    body: "Voiceover, music, and sound design are added, and your final CGI video is delivered in all required formats optimized for web, broadcast, and social media." 
  },
]}
      faqs={[
  { 
    q: "What is the difference between CGI and 3D animation?", 
    a: "All CGI involves 3D computer graphics, but not all 3D animation qualifies as CGI in the traditional sense. CGI typically refers to photorealistic, cinema-quality imagery where the goal is realism indistinguishable from photography. 3D animation can also include stylized, character-based, or illustrative work. At Metagenix, we produce both and recommend the most suitable approach based on your project goals." 
  },
  { 
    q: "Can CGI be combined with live-action footage?", 
    a: "Yes. Combining photorealistic CGI with live-action footage (known as compositing) is one of the most powerful techniques in modern video production. We create seamless hybrid productions by integrating CGI elements into real-world footage for commercials, product campaigns, and brand films." 
  },
  { 
    q: "How long does CGI video production take?", 
    a: "CGI projects typically take 5 to 10 weeks depending on model complexity, number of scenes, level of photorealistic detail, and whether live-action compositing is required. Larger campaigns may take longer, and we always provide a detailed production schedule upfront." 
  },
  { 
    q: "Do I need to provide physical product samples for CGI production?", 
    a: "Not necessarily. CGI can be created using CAD files, technical drawings, engineering specs, reference images, or detailed briefs. This makes it ideal for pre-launch campaigns where physical products are not yet available." 
  },
  { 
    q: "What industries benefit most from CGI video production?", 
    a: "CGI is highly effective for industries where physical filming is complex or costly including automotive, architecture, pharmaceuticals, consumer electronics, industrial manufacturing, luxury goods, and scientific research. Today, it is widely used across all industries that demand high-end visual quality." 
  },
  { 
    q: "How much does CGI video production cost?", 
    a: "Pricing depends on factors such as model complexity, number of scenes, level of realism, video duration, and VFX requirements. Metagenix offers flexible pricing for projects of all sizes—contact us for a custom quote based on your brief." 
  },
]}
    />
  );
}