import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  Routes, Route } from "react-router-dom";


import './App.css'
import './index.css'
import { Toaster as Sonner } from "./components/ui/sonner";
import { Header } from './components/Header'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Projects } from './components/sections/Projects'
import { Portfolio } from './components/sections/Portfolio'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'
import { FAQ } from './components/sections/FAQ'
import { GetAQuoteTab } from './components/GetAQuoteTab'
import PricingPage from './routes/pricing'
import { Footer } from './components/Footer'



import MotionGraphicsPage from './routes/services.motion-graphics-services'
import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/sonner";
import { WhyMetagenix } from "./components/sections/WhyMetagenix";
import { HowWeWork } from "./components/sections/HowWeWork";
import { Stats } from "./components/sections/Stats";
import CgiVideo from "./routes/services.cgi-video-production";
import ThreeDAnimationPage from "./routes/services.3d-animation-services";
import Corporate from "./routes/services.corporate-video-production";
import Whiteboard from "./routes/services.whiteboard-video-production";
import VideoEditing from "./routes/services.video-editing-services";
import Saas from "./routes/services.saas-explainer-videos";
import Logo from "./routes/services.logo-animation-services";
import Explainer from "./routes/services.explainer-video-production";
import { PortfolioPage } from "./routes/Portfolio";
import TwoDAnimationPage from "./routes/services.2d-animation-services";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <Portfolio />
        <WhyMetagenix/>
        <HowWeWork/>
        <Stats/>
        <Testimonials />
        <Contact />
        <FAQ />
        <Footer />
      </main>
      <GetAQuoteTab />
    </div>
  )
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/2d-animation-services" element={<TwoDAnimationPage />} />
          <Route path="/3d-animation-services" element={<ThreeDAnimationPage />} />
          <Route path="/motion-graphics-services" element={<MotionGraphicsPage />} />
          <Route path="/cgi-video-production" element={<CgiVideo />} />
           <Route path="/corporate-video-production" element={<Corporate />} />
             <Route path="/whiteboard-video-production" element={<Whiteboard />} />
          <Route path="/video-editing-services" element={<VideoEditing />} />
            <Route path="/saas-explainer-videos" element={<Saas />} />
             <Route path="/logo-animation-services" element={<Logo />} />
              <Route path="/explainer-video-production" element={<Explainer />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
      
        </Routes>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;