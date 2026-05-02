import { useState } from "react";

import { Menu, X } from "lucide-react";

import logo from "@/assets/metagenix-logo.png";
import circleMotion from "@/assets/circle-motion.jpg";
import circle3D from "@/assets/circle-3d.jpg";
import circle2D from "@/assets/circle-2d.jpg";
import circleWhiteboard from "@/assets/circle-whiteboard.jpg";

import { ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";

type NavLink =
  | { kind: "route"; to: "/" | "/pricing" | "/portfolio"; label: string }

  | { kind: "anchor"; href: string; label: string };

const links: NavLink[] = [
  { kind: "route", to: "/", label: "Home" },
  { kind: "anchor", href: "/#why-us", label: "Why Us" },
  { kind: "route", to: "/portfolio", label: "Portfolio" },
  { kind: "route", to: "/pricing", label: "Pricing" },
  { kind: "anchor", href: "/#contact", label: "Contact" },
];

type ServiceItem = {
  title: string;
  desc: string;
  img: string;
 to:
    | "/2d-animation-services"
    | "/3d-animation-services"
    | "/motion-graphics-services"
    | "/whiteboard-video-production"
    | "/explainer-video-production"
    | "/corporate-video-production"
    | "/saas-explainer-videos"
    | "/logo-animation-services"
    | "/cgi-video-production"
    | "/video-editing-services";
};

const serviceItems: ServiceItem[] = [
  { title: "2D Animation Services", desc: "Bring visions to life.", img: circle2D, to: "/2d-animation-services" },
  { title: "3D Animation Services", desc: "High-quality 3D services.", img: circle3D, to: "/3d-animation-services" },
  { title: "Motion Graphics Services", desc: "Boost visual appeal.", img: circleMotion, to: "/motion-graphics-services" },
  { title: "Whiteboard Video Production", desc: "Simplify complex ideas.", img: circleWhiteboard, to: "/whiteboard-video-production" },
  { title: "Explainer Video Production", desc: "Tell your story in 60s.", img: circle2D, to: "/explainer-video-production" },
  { title: "Corporate Video Production", desc: "Boardroom-ready polish.", img: circleMotion, to: "/corporate-video-production" },
  { title: "SaaS Explainer Videos", desc: "Boost product sign-ups.", img: circleMotion, to: "/saas-explainer-videos" },
  { title: "Logo Animation Services", desc: "Animated brand logos.", img: circle3D, to: "/logo-animation-services" },
  { title: "CGI Video Production", desc: "Photoreal visuals.", img: circle3D, to: "/cgi-video-production" },
  { title: "Professional Video Editing", desc: "Polished post-production.", img: circleWhiteboard, to: "/video-editing-services" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header
      onMouseLeave={() => setServicesOpen(false)}
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0A0F2C] border-b border-white/10"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Metagenix" className="h-14 md:h-16 w-auto object-contain" />
        </Link>
       <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
  {links.map((l) =>
    l.kind === "anchor" ? (
      <a
        key={l.label}
        href={l.href}
        className="text-white hover:text-[color:var(--brand-cyan)] transition-colors"
      >
        {l.label}
      </a>
    ) : (
      <NavLink
        key={l.label}
        to={l.to}
        className={({ isActive }) =>
          `text-white hover:text-[color:var(--brand-cyan)] transition-colors ${
            isActive ? "text-[color:var(--brand-cyan)]" : ""
          }`
        }
      >
        {l.label}
      </NavLink>
    )
  )}

  <a
    href="/#services"
    onMouseEnter={() => setServicesOpen(true)}
    className="inline-flex items-center gap-1 text-white hover:text-[color:var(--brand-cyan)] transition-colors"
  >
    Services
    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
  </a>
</nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href="/#contact">Let's Talk</a>
          </Button>
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-white"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Full-width Services dropdown panel */}
      <div
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
        className={`hidden md:block absolute left-0 right-0 top-full w-screen overflow-hidden transition-all duration-500 ease-out ${
          servicesOpen
            ? "max-h-[600px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-[#0A0F2C]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-transform duration-500 ease-out ${
            servicesOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {serviceItems.map((s) => {
              const inner = (
                <>
                  <span className="relative h-30 w-40 rounded-lg overflow-hidden shrink-0 ring-1 ring-white/15">
                    <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white group-hover:text-[color:var(--brand-cyan)] transition-colors">
                      {s.title}
                    </span>
                    <span className="block text-xs text-white/60 truncate">{s.desc}</span>
                  </span>
                </>
              );
              const className = "group flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors";
              return s.to ? (
                <Link
                  key={s.title}
                  to={s.to}
                  onClick={() => setServicesOpen(false)}
                  className={className}
                >
                  {inner}
                </Link>
              ) : (
                <a
                  key={s.title}
                  href="/#services"
                  onClick={() => setServicesOpen(false)}
                  className={className}
                >
                  {inner}
                </a>
              );
            })}
          </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0F2C]">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-3">
            {links.map((l) =>
              l.kind === "anchor" ? (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-white hover:text-[color:var(--brand-cyan)] py-1">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="text-white hover:text-[color:var(--brand-cyan)] py-1">
                  {l.label}
                </Link>
              ),
            )}
            <a
              href="/#services"
              onClick={() => setOpen(false)}
              className="text-white hover:text-[color:var(--brand-cyan)] py-1"
            >
              Services
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}