import { ArrowUpRight } from "lucide-react";
import type { SocialLink } from "../types/social";
import { getSocialIcon } from "../utils/icons";
import { cn } from "../utils/cn";

interface SocialIconsProps {
  socials: SocialLink[];
  variant?: "icons" | "list";
  className?: string;
}

export default function SocialIcons({
  socials,
  variant = "icons",
  className,
}: SocialIconsProps) {
  if (variant === "list") {
    return (
      <ul className={cn("flex flex-col gap-1", className)}>
        {socials.map((social) => {
          const Icon = getSocialIcon(social.icon);
          const isExternal = social.url.startsWith("http");
          return (
            <li key={social.id}>
              <a
                href={social.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-ink-secondary transition-all duration-300 hover:bg-surface-subtle hover:text-accent"
              >
                <Icon className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.75} />
                <span className="truncate">{social.label}</span>
                {isExternal && (
                  <ArrowUpRight
                    className="ml-auto h-3.5 w-3.5 shrink-0 text-ink-muted opacity-0 transition-opacity group-hover:opacity-100"
                    strokeWidth={1.75}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((social) => {
        const Icon = getSocialIcon(social.icon);
        const isExternal = social.url.startsWith("http");
        return (
          <a
            key={social.id}
            href={social.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
          >
            <Icon className="h-4 w-4" strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}
