import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  target,
  rel,
  download,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:scale-105";

  const variants: Record<string, string> = {
    primary:
      "bg-accent text-accent-contrast hover:bg-accent-hover active:scale-[0.98]",
    outline:
      "border border-border-strong text-ink hover:border-accent hover:bg-surface-subtle hover:text-accent active:scale-[0.98]",
    ghost: "text-ink-secondary hover:bg-surface-subtle hover:text-accent",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
