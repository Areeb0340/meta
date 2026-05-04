import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/metagenix-logo.png";
import circleMotion from "@/assets/circle-motion.jpg";
import circle3D from "@/assets/circle-3d.jpg";
import circle2D from "@/assets/circle-2d.jpg";
import circleWhiteboard from "@/assets/circle-whiteboard.jpg";
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header
      onMouseLeave={() => setServicesOpen(false)}
      className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0A0F2C] border-b border-white/10"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Metagenix" className="h-14 md:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) =>
            l.kind === "anchor" ? (
              <a key={l.label} href={l.href} className="text-white hover:text-[color:var(--brand-cyan)] transition-colors">
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `text-white hover:text-[color:var(--brand-cyan)] transition-colors ${isActive ? "text-[color:var(--brand-cyan)]" : ""}`
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

      {/* Desktop services dropdown */}
      <div
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
        className={`hidden md:block absolute left-0 right-0 top-full w-screen overflow-hidden transition-all duration-500 ease-out ${
          servicesOpen ? "max-h-[600px] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className={`bg-[#0A0F2C]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-transform duration-500 ease-out ${servicesOpen ? "translate-y-0" : "-translate-y-4"}`}>
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
              {serviceItems.map((s) => (
                <Link
                  key={s.title}
                  to={s.to}
                  onClick={() => setServicesOpen(false)}
                  className="group flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <span className="relative h-30 w-40 rounded-lg overflow-hidden shrink-0 ring-1 ring-white/15">
                    <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white group-hover:text-[color:var(--brand-cyan)] transition-colors">{s.title}</span>
                    <span className="block text-xs text-white/60 truncate">{s.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0F2C]">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-1">
            {links.map((l) =>
              l.kind === "anchor" ? (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="text-white hover:text-[color:var(--brand-cyan)] py-2.5 border-b border-white/5">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} to={l.to} onClick={() => setOpen(false)}
                  className="text-white hover:text-[color:var(--brand-cyan)] py-2.5 border-b border-white/5">
                  {l.label}
                </Link>
              )
            )}

            {/* Mobile Services accordion */}
            <div className="border-b border-white/5">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((p) => !p)}
                className="w-full flex items-center justify-between text-white hover:text-[color:var(--brand-cyan)] py-2.5 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown list */}
              <div
                style={{
                  maxHeight: mobileServicesOpen ? "600px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <div className="pb-2 pl-2 flex flex-col gap-0.5">
                  {serviceItems.map((s) => (
                    <Link
                      key={s.title}
                      to={s.to}
                      onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                      className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <img src={s.img} alt="" className="h-8 w-8 rounded-md object-cover shrink-0 ring-1 ring-white/15" />
                      <div className="min-w-0">
                        <p className="text-sm text-white group-hover:text-[color:var(--brand-cyan)] transition-colors leading-tight">{s.title}</p>
                        <p className="text-xs text-white/50 truncate">{s.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}