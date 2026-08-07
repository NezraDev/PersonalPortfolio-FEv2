import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "../utils/cn";

interface ThumbnailBoxProps {
  src?: string;
  alt: string;
  className?: string;
  onPreview?: () => void;
}

/**
 * A wide bordered container for a project screenshot/cover image. Falls
 * back to a placeholder icon when no image is supplied or it fails to
 * load — drop a real screenshot at the given `src` path to upgrade it.
 */
export default function ThumbnailBox({
  src,
  alt,
  className,
  onPreview,
}: ThumbnailBoxProps) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <button
      type="button"
      onClick={showImage ? onPreview : undefined}
      disabled={!showImage || !onPreview}
      aria-label={showImage && onPreview ? `Preview ${alt} image` : undefined}
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-subtle w-full transition-all duration-300 ease-premium sm:w-44 sm:h-[99px]",
        showImage && onPreview && "group cursor-zoom-in hover:border-accent hover:shadow-md",
        className,
      )}
      style={{ aspectRatio: "16/9" }}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
          loading="lazy"
          onError={() => setErrored(true)}
        />
      ) : (
        <ImageOff className="h-6 w-6 text-ink-muted" strokeWidth={1.5} />
      )}
    </button>
  );
}
