import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";


const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_8px_20px_-6px_rgba(10,15,44,0.35)] hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "btn-flip text-white font-semibold shadow-[0_10px_25px_-8px_rgba(0,211,226,0.55)] [--front:var(--brand-cyan)] [--back:var(--brand-navy)] [--front-text:#0A0F2C]",
        navy: "btn-flip text-white font-semibold shadow-[0_10px_25px_-8px_rgba(10,15,44,0.45)] [--front:var(--brand-navy)] [--back:var(--brand-cyan)] [--back-text:#0A0F2C]",
        outlineCyan: "btn-flip text-[color:var(--brand-navy)] font-semibold [--front:transparent] [--back:var(--brand-cyan)] [--front-border:var(--brand-navy)] [--back-text:#0A0F2C]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-11 rounded-full px-8",
        xl: "h-12 rounded-full px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  backLabel?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, backLabel, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isFlip = variant === "hero" || variant === "navy" || variant === "outlineCyan";

    if (isFlip) {
      const { children, ...rest } = props;
      const innerLabel = asChild && React.isValidElement(children)
        ? (children.props as { children?: React.ReactNode }).children
        : children;
      const backContent = backLabel ?? innerLabel;
      const flipBody = (
        <>
          {/* Invisible label sits in normal flow to give the button its intrinsic width */}
          <span aria-hidden className="invisible whitespace-nowrap">
            {innerLabel}
          </span>
          <span className="btn-flip-inner">
          <span
            className="btn-flip-face"
            style={{
              background: "var(--front)",
              borderColor: "var(--front-border, var(--front))",
              color: "inherit",
            }}
          >
            {innerLabel}
          </span>
          <span
            className="btn-flip-face btn-flip-back"
            style={{
              background: "var(--back)",
              borderColor: "var(--back, transparent)",
              color: "var(--back-text, #fff)",
            }}
          >
            {backContent}
          </span>
          </span>
        </>
      );
      const wrapperClass = cn(buttonVariants({ variant, size, className }));
      if (asChild && React.isValidElement(children)) {
        const cloned = React.cloneElement(children as React.ReactElement<{ children?: React.ReactNode }>, undefined, flipBody);
        return (
          <Comp className={wrapperClass} ref={ref} {...rest}>
            {cloned}
          </Comp>
        );
      }
      return (
        <Comp className={wrapperClass} ref={ref} {...rest}>
          {flipBody}
        </Comp>
      );
    }

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
