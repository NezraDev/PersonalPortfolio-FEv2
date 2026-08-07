import { useState } from "react";
import { ImageIcon, type LucideIcon } from "lucide-react";
import { cn } from "../utils/cn";

interface LogoBoxProps {
  /** Path to a logo/image file. If omitted or it fails to load, the fallback icon is shown instead. */
  src?: string;
  alt: string;
  /** Fallback icon shown when no image is provided or the image fails to load. */
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses: Record<NonNullable<LogoBoxProps["size"]>, string> = {
  sm: "h-9 w-9",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

/**
 * A bordered square container for a logo (school, company, certification
 * issuer, etc.). Falls back to a generic icon when no image is supplied or
 * the image fails to load, so the layout stays consistent even before real
 * logo assets are added — just drop a file at the given `src` path to
 * upgrade it automatically.
 */
export default function LogoBox({
  src,
  alt,
  icon: Icon = ImageIcon,
  size = "md",
  className,
}: LogoBoxProps) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden ",
        sizeClasses[size],
        className,
      )}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain p-1.5"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      ) : (
        <Icon className="h-1/2 w-1/2 text-ink-muted" strokeWidth={1.5} />
      )}
    </div>
  );
}
