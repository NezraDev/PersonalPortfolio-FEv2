import { useState } from "react";
import { FolderGit2, ExternalLink, ImageOff } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import Badge from "../Badge";
import ThumbnailBox from "../ThumbnailBox";
import ImageLightbox from "../ImageLightbox";
import { cn } from "../../utils/cn";
import { projects } from "../../data/project";
import type { ProjectCategory, ProjectType } from "../../types/project";
import { projectImage, projectThumbnail } from "../../utils/projects";

const CATEGORIES: ProjectCategory[] = ["Web Development", "UI/UX Design"];

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
        "project-gallery-image project-gallery-image--design group mx-auto flex w-full items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-subtle transition-all duration-300 ease-premium",
        showImage && onPreview && "cursor-zoom-in hover:border-accent hover:shadow-lg",
      )}
      style={{ aspectRatio: "16 / 9" }}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className={`project-design-screenshot h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.025]${isPhone ? " is-phone" : ""}`}
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
    "Web Development",
  );
  const [selectedType, setSelectedType] = useState<ProjectType | "All">("All");
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  const filteredProjects = showFilter
    ? projects.filter((project) => project.category === selectedCategory && (selectedCategory !== "Web Development" || selectedType === "All" || project.projectType === selectedType))
    : projects;

  const visibleProjects =
    typeof limit === "number" ? filteredProjects.slice(0, limit) : filteredProjects;

  // UI/UX Design projects are shown as phone-sized mockups, 2 per row.
  const isPhoneGrid = showFilter && selectedCategory === "UI/UX Design";

  return (
    <div className={`projects-page py-8 md:py-10${showFilter ? " projects-page--filtered" : ""}`}>
      <div className={showFilter ? "projects-page-toolbar" : "flex flex-wrap items-center justify-between gap-4 lg:gap-6"}>
        {!showFilter && <SectionTitle icon={FolderGit2} title="Projects" />}

        {showFilter && (
          <div className="project-filters" role="group" aria-label="Filter projects by category">
            {CATEGORIES.map((category) => <button key={category} type="button" className={`project-filter${selectedCategory === category ? " is-active" : ""}`} aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)}><span>{category}</span><small>{projects.filter((project) => project.category === category).length}</small></button>)}
          </div>
        )}
      </div>
      {showFilter && selectedCategory === "Web Development" && <div className="project-type-filters" role="group" aria-label="Filter web development projects by type">
        {(["All", "Client Project", "Academic Project", "Personal Project"] as const).map(type => <button key={type} type="button" aria-pressed={selectedType === type} className={`project-type-filter${selectedType === type ? " is-active" : ""}`} onClick={() => setSelectedType(type)}>{type === "All" ? "All projects" : type}<small>{projects.filter(project => project.category === "Web Development" && (type === "All" || project.projectType === type)).length}</small></button>)}
      </div>}

      {visibleProjects.length === 0 ? (
        <p className="text-sm text-ink-secondary">
          No projects in this category yet.
        </p>
      ) : isPhoneGrid ? (
        <div className="project-gallery project-gallery--design grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:gap-x-10 lg:gap-y-12">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="project-gallery-card min-w-0 rounded-xl transition-all duration-300 ease-premium hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"
            >
              <AdaptiveThumb
                src={projectThumbnail(project.coverImage, 720)}
                alt={project.title}
                onPreview={project.coverImage ? () => setPreview({ src: projectImage(project.coverImage), alt: project.title }) : undefined}
              />
              <div className="project-gallery-body mx-auto mt-4 max-w-[280px] lg:mt-5">
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
                <div className="project-gallery-tags mt-3 flex flex-wrap gap-2 lg:mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="project-gallery-actions mt-3 flex items-center gap-4 lg:mt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-sm"
                      aria-label={`View ${project.title} design`}
                      title="View design in Figma"
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
        <div className={showFilter ? "project-gallery" : "space-y-8 lg:space-y-5"}>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 1, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.16), ease: [0.16, 1, 0.3, 1] }}
              className={showFilter ? `project-gallery-card${project.highlighted ? " project-gallery-card--highlighted" : ""}` : cn(
                "rounded-xl px-4 pb-4 transition-all duration-300 ease-premium hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg sm:px-5 sm:pb-5",
                index > 0
                  ? "flex flex-col gap-4 border-t border-border pt-8 sm:flex-row lg:gap-6"
                  : "flex flex-col gap-4 pt-4 sm:flex-row sm:pt-5 lg:gap-6",
              )}
            >
              <ThumbnailBox
                src={projectThumbnail(project.coverImage, 720)}
                alt={project.title}
                className={showFilter ? "project-gallery-image" : undefined}
                onPreview={project.coverImage ? () => setPreview({ src: projectImage(project.coverImage), alt: project.title }) : undefined}
              />
              <div className={`${showFilter ? "project-gallery-body " : ""}min-w-0 flex-1`}>
                <div className="project-gallery-title flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 lg:gap-x-6 lg:gap-y-2">
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
                <div className="project-gallery-tags mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="project-gallery-actions mt-4 flex items-center gap-4">
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
