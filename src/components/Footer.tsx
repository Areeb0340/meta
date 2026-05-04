import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import logo from "@/assets/metagenix-logo.png";

const ratings = [
  {
    icon: <SiTrustpilot  className="h-4 w-4" />,
    name: "Trustpilot",
    score: "4.8 / 5",
    color: "hover:bg-[#00b67a] hover:border-[#00b67a]",
  },
  {
    icon: <FaGoogle className="h-4 w-4" />,
    name: "Google",
    score: "4.4 / 5",
    color: "hover:bg-[#4285F4] hover:border-[#4285F4]",
  },
  {
    // Clutch has no icon in any free library — styled letter badge
    icon: <span className="text-xs font-black leading-none">C</span>,
    name: "Clutch",
    score: "4.8 / 5",
    color: "hover:bg-[#e62415] hover:border-[#e62415]",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--brand-navy-deep)] text-white">
      <div className="container mx-auto px-4 md:px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Col 1 — Logo + Social */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Metagenix" className="h-14 md:h-16 w-auto object-contain" />
          </Link>
          <p className="text-sm text-white/70">
            Premier video animation studio crafting motion that moves brands forward.
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center h-9 w-9 rounded-lg border border-white/15 text-white/70 hover:text-white hover:bg-[color:var(--brand-red)] hover:border-[color:var(--brand-red)] transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-[color:var(--brand-red)]">Home</Link></li>
            <li><a href="/#services" className="hover:text-[color:var(--brand-red)]">Services</a></li>
            <li><a href="/#portfolio" className="hover:text-[color:var(--brand-red)]">Portfolio</a></li>
            <li><Link to="/pricing" className="hover:text-[color:var(--brand-red)]">Pricing</Link></li>
            <li><a href="/#contact" className="hover:text-[color:var(--brand-red)]">Contact</a></li>
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/services/2d-animation" className="hover:text-[color:var(--brand-red)]">2D Animation</Link></li>
            <li><Link to="/services/3d-animation" className="hover:text-[color:var(--brand-red)]">3D Animation</Link></li>
            <li><Link to="/services/whiteboard" className="hover:text-[color:var(--brand-red)]">Whiteboard Videos</Link></li>
            <li><Link to="/services/motion-graphics" className="hover:text-[color:var(--brand-red)]">Motion Graphics</Link></li>
            <li><a href="/#services" className="hover:text-[color:var(--brand-red)]">Explainer Videos</a></li>
          </ul>
        </div>

        {/* Col 4 — Contact + Ratings */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[color:var(--brand-red)]" />
                <span>hello@metagenix.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[color:var(--brand-red)]" />
                <span>+1 (555) 010-2025</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[color:var(--brand-red)] mt-0.5" />
                <span>100 Studio Ave, NY</span>
              </li>
            </ul>
          </div>

          {/* Ratings — icon style same as social icons */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">Rated By Top Platforms</p>
            <div className="flex flex-row flex-nowrap items-center gap-3">
              {ratings.map((r) => (
                <div key={r.name} className="flex flex-col items-center gap-1.5">
                  <div
                    className={`grid place-items-center h-9 w-9 rounded-lg border border-white/15 text-white/70 hover:text-white transition-colors ${r.color}`}
                  >
                    {r.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[color:var(--brand-red)]">
                    ★ {r.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Metagenix. All rights reserved.</p>
          <p>Crafted with motion & care.</p>
        </div>
      </div>
    </footer>
  );
}