import { ServicePageTemplate } from "../components/ServicePageTemplate";
import circleMotion from "@/assets/circle-Motion.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export default function Corporate() {
  return (
    <ServicePageTemplate
      eyebrow="Corporate Video"
      heroTitle="Corporate Video Production That Makes Your Organization Look Its Very Best"
      heroSubtitle="Metagenix produces polished, professional corporate videos that help organizations of every size communicate their vision, culture, performance, and value with authority and clarity. Whether you need an internal training series, a compelling investor presentation film, a company culture video that attracts top talent, or a high-impact product launch campaign  our corporate video production team brings together creative excellence and strategic thinking to deliver results that reflect your brand at its absolute best.
We work with businesses across every sector and at every stage from ambitious startups building their brand identity to FTSE-listed enterprises managing global communications. At Metagenix, every corporate video production project receives the same commitment to quality, craft, and strategic communication because how your organization presents itself to the world matters more than ever."
      heroImage={heroBg}
      introHeading="What Is Corporate Video Production?"
      introBody="Corporate video production encompasses the full range of professional video content created for business communication purposes both internal and external. This includes company overview and brand films, employee training and on boarding videos, investor and stakeholder presentations, CSR and sustainability reports, executive message videos, product launch content, company culture films, and much more.
Unlike consumer-facing marketing videos, corporate videos often need to communicate multiple layers of information to sophisticated, informed audiences requiring a careful balance of creative engagement, factual precision, and brand consistency. The best corporate videos feel both professional and human communicating your organization’s character as powerfully as its capabilities.
At Metagenix, our corporate video production capabilities span fully animated productions, live-action filming, and hybrid videos that combine animation with real footage. We manage the entire production process in-house from strategic brief and scriptwriting through to post-production, sound design, and multi-format delivery."
      introImage={circleMotion}
      portfolioItems={[
        { img: p1, title: "Brand Story" },
        { img: p2, title: "Product Reveal" },
        { img: p3, title: "Social Promo" },
        { img: p4, title: "App Demo" },
        { img: p5, title: "Brand Film" },
        { img: p6, title: "Launch Spot" },
      ]}
    whyHeading="Why Choose Metagenix for Corporate Video Production?"
whyItems={[
  {
    title: "Elevates Your Brand Image",
    body: "High-quality corporate videos immediately communicate professionalism, investment, and quality to clients, investors, partners, and talent positioning your organization as a leader in your field.",
  },
  {
    title: "Scales Internal Communication",
    body: "Reach your entire global workforce with consistent, engaging video content ensuring every employee receives the same clear message, regardless of location, language, or time zone.",
  },
  {
    title: "Strengthens Investor Relations",
    body: "Cinematic presentations of your vision, strategy, and performance build confidence and credibility with investors, analysts, and board members at every stage of your growth journey.",
  },
  {
    title: "Reduces Training Costs",
    body: "Animated and live-action training videos are more engaging, more consistent, and significantly more cost-effective than traditional in-person training sessions delivered at scale.",
  },
  {
    title: "Builds Culture and Alignment",
    body: "Company culture films inspire employees, attract exceptional talent, and align your entire organization around shared values, goals, and ways of working that define your brand.",
  },
  {
    title: "Multi-Channel Versatility",
    body: "A single corporate video can be repurposed across your website, LinkedIn, investor portals, internal intranets, press materials, and conference presentations maximizing your production investment.",
  },
]}

industriesEyebrow="Industries We Serve"
industriesHeading="Corporate Video Production for Every Sector"
industriesIntro="Metagenix produces corporate videos tailored to different industries with unique communication needs:"
industries={[
  "Financial services, banking, and investment management",
  "Technology, SaaS, and enterprise software",
  "Healthcare, pharmaceutical, and life sciences",
  "Professional services (legal, consulting, accountancy)",
  "Manufacturing, engineering, and industrial",
  "Real estate, construction, and infrastructure",
  "Retail, consumer goods, and e-commerce",
  "Education, training, and professional development",
  "Non-profit, charity, and public sector",
  "Energy, utilities, and sustainability",
]}

   
useCasesHeading="Types of Corporate Videos We Produce"
useCasesIntro="Metagenix produces a wide range of corporate video content for businesses across all industries. Each format serves a distinct communication purpose:"
useCases={[
  "Company overview and brand story films  communicate who you are and what you stand for",
  "Employee on boarding and HR welcome videos  make new starters feel engaged from day one",
  "Internal training and compliance videos  consistent, engaging, and scalable learning content",
  "Investor, board, and stakeholder presentations  build confidence and communicate performance",
  "CSR, sustainability, and impact reporting videos  demonstrate your values and commitments visually",
  "Executive message and town hall videos  bring leadership communications to life on screen",
  "Product launch and commercial announcement videos  build momentum and drive early adoption",
  "Annual report and financial summary videos  make complex financial data accessible and engaging",
  "Recruitment and employer brand videos  attract top talent by showcasing your culture",
  "Event and conference highlight reels  capture and extend the impact of your key moments",
]}

      pricingPlans={[
        {
          name: "Internal",
          tagline: "Training & Onboarding Videos",
          price: "$799",
          features: [
            "Up to 2 Min",
            "Script Writing",
            "Pro Voice Over",
            "Custom Storyboard",
            "Music & SFX",
            "Subtitles",
            "2 weeks delivery",
          ],
        },
        {
          name: "Brand Story",
          tagline: "Company Overview Video",
          price: "$1,599",
          highlighted: true,
          features: [
            "90 Sec - 2 Min",
            "Script + Pro Voice Over",
            "Custom Animation",
            "Music & SFX",
            "Subtitles",
            "Unlimited Revisions",
            "3 weeks delivery",
          ],
        },
        {
          name: "Investor",
          tagline: "Pitch & Annual Report Video",
          price: "$2,999",
          features: [
            "Up to 3 Min",
            "Script + Pro Voice Over",
            "Custom Illustration & Data Viz",
            "Music & SFX",
            "Free Logo Animation",
            "Unlimited Revisions",
            "4 weeks delivery",
          ],
        },
      ]}
   processHeading="Corporate Video Production Process"
processBody="Our structured 6-step process ensures strategic clarity and high-quality execution."
processSteps={[
  {
    title: "Brief & Strategy",
    body: "We begin by understanding your business objectives, target audience, key messages, desired tone, and intended distribution channels  building a strategic foundation that shapes every creative decision.",
  },
  {
    title: "Script & Concept",
    body: "Our team develops a compelling script and creative concept that balances engaging storytelling with precise, accurate communication of your business message  reviewed and refined with your team.",
  },
  {
    title: "Storyboard / Plan",
    body: "For animated productions, we create a detailed storyboard. For live-action projects, we develop a comprehensive shot list, location plan, and production schedule for your approval.",
  },
  {
    title: "Production",
    body: "Our production team brings the concept to life  whether through full 2D or 3D animation, live-action filming, or a premium hybrid approach that combines both techniques seamlessly.",
  },
  {
    title: "Review & Revisions",
    body: "We present the completed cut for your review, incorporate all feedback, and refine the video through revision rounds until you are completely satisfied with every aspect of the final result.",
  },
  {
    title: "Final Delivery",
    body: "Your corporate video is delivered in all required formats  optimized for broadcast, web, presentations, internal platforms, social media, and any other distribution channels required.",
  },
]}
  faqs={[
  {
    q: "What types of corporate videos do you produce?",
    a: "We create company profiles, training videos, investor presentations, recruitment videos, product launches, CSR videos, and more.",
  },
  {
    q: "Can you combine live footage with animation?",
    a: "Yes, we produce hybrid videos combining live-action with 2D/3D animation and motion graphics.",
  },
  {
    q: "How long should a corporate video be?",
    a: "Typically 90 seconds to 3 minutes depending on the purpose of the video.",
  },
  {
    q: "Do you work with large enterprises?",
    a: "Yes, we handle global teams, complex workflows, and multi-language delivery.",
  },
  {
    q: "Can corporate videos help in recruitment?",
    a: "Yes, employer branding videos significantly improve hiring quality and engagement.",
  },
  {
    q: "How do you ensure brand accuracy?",
    a: "We follow your brand guidelines and involve you at every stage of production.",
  },
]}
    />
  );
}