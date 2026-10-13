import { useState } from "react";
import { FolderGit2, ExternalLink, ChevronDown, ImageOff } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Badge from "../Badge";
import ThumbnailBox from "../ThumbnailBox";
import ImageLightbox from "../ImageLightbox";
import { cn } from "../../utils/cn";
import { projects } from "../../data/project";
import type { ProjectCategory } from "../../types/project";

const CATEGORIES: ProjectCategory[] = ["Frontend Development", "UI/UX Design"];

/**
 * A shape-adaptive thumbnail for the UI/UX grid: it reads the image's own
 * natural dimensions once loaded and frames it as a phone mockup when the
 * screenshot is portrait, or as a normal rectangular card when it's a wide
 * website/desktop screenshot. Falls back to a rectangular card while the
 * image is still loading (or if it fails).
 */
function AdaptiveThumb({
  src,
  alt,
  onPreview,
}: {
  src?: string;
  alt: string;
  onPreview?: () => void;
}) {
  const [isPhone, setIsPhone] = useState(false);
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <button
      type="button"
      onClick={showImage ? onPreview : undefined}
      disabled={!showImage || !onPreview}
      aria-label={showImage && onPreview ? `Preview ${alt} image` : undefined}
      className={cn(
        "group mx-auto flex w-full items-center justify-center overflow-hidden bg-surface-subtle transition-all duration-300 ease-premium",
        showImage && onPreview && "cursor-zoom-in hover:border-accent hover:shadow-lg",
        isPhone
          ? "max-w-[220px] rounded-[1.75rem] border-4 border-ink"
          : "rounded-lg border border-border",
      )}
      style={{ aspectRatio: isPhone ? "9 / 19.5" : "16 / 9" }}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.025]"
          loading="lazy"
          onLoad={(event) => {
            const { naturalWidth, naturalHeight } = event.currentTarget;
            setIsPhone(naturalHeight / naturalWidth > 1.3);
          }}
          onError={() => setErrored(true)}
        />
      ) : (
        <ImageOff className="h-6 w-6 text-ink-muted" strokeWidth={1.5} />
      )}
    </button>
  );
}

interface ProjectsProps {
  /** Set to false to hide each project's description paragraph (used on the condensed Home page). */
  showDescription?: boolean;
  /** Cap the number of projects rendered (used to show only the first 3 on Home). */
  limit?: number;
  /** Show the category filter dropdown (used on the dedicated Projects page, not on Home). */
  showFilter?: boolean;
}

export default function Projects({
  showDescription = true,
  limit,
  showFilter = false,
}: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(
    "Frontend Development",
  );
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  const filteredProjects = showFilter
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  const visibleProjects =
    typeof limit === "number" ? filteredProjects.slice(0, limit) : filteredProjects;

  // UI/UX Design projects are shown as phone-sized mockups, 2 per row.
  const isPhoneGrid = showFilter && selectedCategory === "UI/UX Design";

  return (
    <div className="py-8 md:py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-6">
        <SectionTitle icon={FolderGit2} title="Projects" />

        {showFilter && (
          <div className="relative mb-8 md:mb-10">
            <select
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value as ProjectCategory)
              }
              className="appearance-none rounded-lg border border-border-strong bg-surface py-2 pl-3.5 pr-9 text-sm font-medium text-ink transition-colors duration-200 ease-premium hover:border-ink focus:outline-none"
              aria-label="Filter projects by category"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
              strokeWidth={1.75}
            />
          </div>
        )}
      </div>

      {visibleProjects.length === 0 ? (
        <p className="text-sm text-ink-secondary">
          No projects in this category yet.
        </p>
      ) : isPhoneGrid ? (
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:gap-x-10 lg:gap-y-12">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-0 rounded-xl transition-all duration-300 ease-premium hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"
            >
              <AdaptiveThumb
                src={project.coverImage}
                alt={project.title}
                onPreview={project.coverImage ? () => setPreview({ src: project.coverImage!, alt: project.title }) : undefined}
              />
              <div className="mx-auto mt-4 max-w-[280px] lg:mt-5">
                <h3 className="text-sm font-semibold text-ink">
                  {project.title}
                </h3>
                <span className="text-xs font-medium text-ink-muted">
                  {project.year}
                </span>
                {showDescription && (
                  <p className="mt-2 lg:text-justify text-sm leading-relaxed text-ink-secondary">
                    {project.description}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-2 lg:mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-4 lg:mt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
                      aria-label={`View ${project.title} source code on GitHub`}
                      title="GitHub repository"
                    >
                      <SiGithub size={16} aria-hidden="true" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
                      aria-label={`Open ${project.title} website`}
                      title="Open website"
                    >
                      <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-8 lg:space-y-5">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.16), ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "rounded-xl px-4 pb-4 transition-all duration-300 ease-premium hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg sm:px-5 sm:pb-5",
                index > 0
                  ? "flex flex-col gap-4 border-t border-border pt-8 sm:flex-row lg:gap-6"
                  : "flex flex-col gap-4 pt-4 sm:flex-row sm:pt-5 lg:gap-6",
              )}
            >
              <ThumbnailBox
                src={project.coverImage}
                alt={project.title}
                onPreview={project.coverImage ? () => setPreview({ src: project.coverImage!, alt: project.title }) : undefined}
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 lg:gap-x-6 lg:gap-y-2">
                  <h3 className="text-base font-semibold text-ink">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium text-ink-muted">
                    {project.year}
                  </span>
                </div>
                {showDescription && (
                  <p className="mt-2 lg:text-justify text-sm leading-relaxed text-ink-secondary">
                    {project.description}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
                      aria-label={`View ${project.title} source code on GitHub`}
                      title="GitHub repository"
                    >
                      <SiGithub size={16} aria-hidden="true" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
                      aria-label={`Open ${project.title} website`}
                      title="Open website"
                    >
                      <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <ImageLightbox
        src={preview?.src}
        alt={preview?.alt ?? "Project"}
        onClose={() => setPreview(null)}
      />
    </div>
  );
}
