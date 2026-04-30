import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--brand-navy-deep)] text-white">
      <div className="container mx-auto px-4 md:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-[color:var(--brand-red)] text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold text-white">
              Meta<span className="text-[color:var(--brand-red)]">genix</span>
            </span>
          </Link>
          <p className="text-sm text-white/70">
            Premier video animation studio crafting motion that moves brands forward.
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid place-items-center h-9 w-9 rounded-lg border border-white/15 text-white/70 hover:text-white hover:bg-[color:var(--brand-red)] hover:border-[color:var(--brand-red)] transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
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
        <div>
          <h4 className="font-semibold mb-4 text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[color:var(--brand-red)]" /><span>hello@metagenix.org</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[color:var(--brand-red)]" /><span>+1 (555) 010-2025</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-[color:var(--brand-red)] mt-0.5" /><span>100 Studio Ave, NY</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Metagenix. All rights reserved.</p>
          <p>Crafted with motion & care.</p>
        </div>
      </div>
    </footer>
  );
}