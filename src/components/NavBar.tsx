import { useState } from "react";
import type { MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "organization", label: "Organization" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  route: string;
  navigate: (id: string) => void;
}

export default function Navbar({ route, navigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMobileOpen(false);
    navigate(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderLink = (link: (typeof navLinks)[number]) => (
    <a
      key={link.id}
      href={`#/${link.id}`}
      onClick={(e) => handleNavClick(e, link.id)}
      className={cn(
        "relative py-1 text-sm font-medium whitespace-nowrap transition-colors",
        route === link.id ? "text-ink" : "text-ink-muted hover:text-accent",
      )}
    >
      {link.label}
      {route === link.id && (
        <motion.span
          layoutId="navbar-underline"
          className="absolute -bottom-[1px] left-0 h-px w-full bg-accent"
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      {/* Matches the max-width and padding of the page body below (sidebar +
          content) — narrowed so the row of links spans from the left edge
          of the profile column ("Home") to the right edge of the content
          column ("Contact") without leaving large, empty gaps. */}
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <nav className="flex h-16 items-center">
          <div className="hidden w-full items-center gap-4 lg:flex">
            <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
              {navLinks.map(renderLink)}
            </div>
            <ThemeToggle />
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-lg p-2 text-ink transition-colors hover:bg-surface-subtle hover:text-accent"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
              <ul className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#/${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={cn(
                        "block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                        route === link.id
                          ? "bg-surface-subtle text-ink"
                          : "text-ink-muted hover:bg-surface-subtle hover:text-accent",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
