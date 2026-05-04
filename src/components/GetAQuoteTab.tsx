import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Dialog, DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(3, "Phone is required").max(40),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function GetAQuoteTab() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");
    const onScroll = () => {
      const scrolledPastNav = window.scrollY > 120;
      let beforeFooter = true;
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        beforeFooter = rect.top > window.innerHeight;
      }
      setVisible(scrolledPastNav && beforeFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! Our animations expert will contact you shortly.");
      form.reset();
      setOpen(false);
    }, 700);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Get a Quote"
        className={`fixed right-0 z-40 origin-right transition-all duration-500 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }
        /* Mobile: center vertically, short pill */
        top-1/2 -translate-y-1/2
        `}
      >
        {/* Mobile: horizontal compact pill at right edge */}
        <span
          className="
            flex items-center justify-center
            bg-[color:var(--brand-red)] hover:bg-[color:var(--brand-red-deep)]
            text-white font-semibold uppercase tracking-[0.15em] shadow-[var(--shadow-glow)]
            /* mobile */
            text-[10px] px-2 py-3 min-h-0 h-auto
            /* sm+ : vertical tab */
            sm:text-sm sm:px-3 sm:py-4
            /* lg: full tall tab */
            lg:text-base lg:px-2 lg:py-2 lg:min-h-[450px]
          "
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Get a Quote
        </span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl w-[95vw] p-0 border-0 bg-transparent shadow-none">
          <div className="flex rounded-md overflow-hidden shadow-2xl">

            {/* Side label — hidden on mobile, shown sm+ */}
            <div className="hidden sm:flex bg-[color:var(--brand-red)] items-center justify-center px-4 py-8">
              <span
                className="text-white font-bold text-xl sm:text-2xl tracking-wide"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                Get a Quote
              </span>
            </div>

            {/* Form panel */}
            <div className="flex-1 bg-[color:var(--brand-navy-deep)] p-5 sm:p-8 md:p-10">
              {/* Mobile: show title since side label is hidden */}
              <div className="sm:hidden mb-4">
                <span className="inline-block bg-[color:var(--brand-red)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Get a Quote
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
                Tell us about your project
              </h3>
              <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-white/70">
                Our Animations Expert will contact you to discuss your project
              </p>

              <form onSubmit={onSubmit} className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Input
                    required
                    name="name"
                    placeholder="Full Name *"
                    maxLength={100}
                    className="bg-white border-0 h-10 sm:h-12 text-sm text-[color:var(--brand-navy)] placeholder:text-muted-foreground"
                  />
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    maxLength={255}
                    className="bg-white border-0 h-10 sm:h-12 text-sm text-[color:var(--brand-navy)] placeholder:text-muted-foreground"
                  />
                </div>
                <Input
                  required
                  name="phone"
                  placeholder="Phone No. *"
                  maxLength={40}
                  className="bg-white border-0 h-10 sm:h-12 text-sm text-[color:var(--brand-navy)] placeholder:text-muted-foreground"
                />
                <Textarea
                  name="message"
                  rows={3}
                  maxLength={1000}
                  placeholder="To help us understand better, enter a brief description about your project."
                  className="bg-white border-0 text-sm text-[color:var(--brand-navy)] placeholder:text-muted-foreground resize-none"
                />
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    disabled={loading}
                    className="min-w-[140px] sm:min-w-[180px] text-sm sm:text-base h-10 sm:h-auto"
                  >
                    {loading ? "Sending..." : "SEND NOW"}
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}