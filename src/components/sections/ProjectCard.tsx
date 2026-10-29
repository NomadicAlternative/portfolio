import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { track } from "@vercel/analytics";

interface ProjectData {
  title: string;
  description: string;
  stack: string[];
  code_url: string;
  demo_url: string;
}

interface ProjectCardProps {
  projectKey: string;
  tags?: string[];
  screenshots: string[];
  live?: boolean;
}

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState<Set<number>>(new Set());
  const total = images.length;
  const validImages = images.filter((_, i) => !failed.has(i));

  const next = useCallback(() => {
    if (validImages.length === 0) return;
    const nextIdx = (current + 1) % total;
    if (failed.has(nextIdx)) {
      // skip failed images
      let idx = nextIdx;
      for (let i = 0; i < total; i++) {
        idx = (idx + 1) % total;
        if (!failed.has(idx)) { setCurrent(idx); return; }
      }
    }
    setCurrent(nextIdx);
  }, [current, total, failed, validImages.length]);

  const prev = useCallback(() => {
    if (validImages.length === 0) return;
    const prevIdx = (current - 1 + total) % total;
    if (failed.has(prevIdx)) {
      let idx = prevIdx;
      for (let i = 0; i < total; i++) {
        idx = (idx - 1 + total) % total;
        if (!failed.has(idx)) { setCurrent(idx); return; }
      }
    }
    setCurrent(prevIdx);
  }, [current, total, failed, validImages.length]);

  useEffect(() => {
    if (validImages.length <= 1) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, validImages.length]);

  if (validImages.length === 0) {
    return (
      <div className="flex h-48 items-center justify-center rounded-t-2xl bg-gradient-to-br from-surface-2 to-bg">
        <span className="text-sm text-dim">Screenshots coming soon</span>
      </div>
    );
  }

  return (
    <div className="group/img relative h-48 overflow-hidden rounded-t-2xl bg-surface-2">
      {!failed.has(current) ? (
        <img
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="h-full w-full object-cover transition-opacity duration-500"
          loading="lazy"
          onError={() => setFailed((s) => new Set(s).add(current))}
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="text-sm text-dim">Image not available</span>
        </div>
      )}

      {validImages.length > 1 && (
        <>
          <button onClick={prev} aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white/70 opacity-0 transition-opacity hover:text-white group-hover/img:opacity-100">
            <HiChevronLeft className="size-5" />
          </button>
          <button onClick={next} aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white/70 opacity-0 transition-opacity hover:text-white group-hover/img:opacity-100">
            <HiChevronRight className="size-5" />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => !failed.has(i) && setCurrent(i)}
                className={`size-1.5 rounded-full transition-all ${i === current ? "w-4 bg-white" : failed.has(i) ? "bg-white/10" : "bg-white/40"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectCard({ projectKey, tags, screenshots, live }: ProjectCardProps) {
  const { t } = useTranslation("projects");
  const project = t(projectKey, { returnObjects: true }) as ProjectData;

  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(251,146,60,0.08)]">
      <ImageCarousel images={screenshots} title={project.title} />

      <div className="p-5">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="text-lg font-medium tracking-tight text-ink">{project.title}</h3>
          {live && (
            <span className="rounded-full bg-green-600/20 px-2 py-0.5 text-[10px] font-medium text-green-400">{t("live")}</span>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>

        {tags && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary/10 px-2 py-0.5 text-[10px] font-medium text-secondary">{tag}</span>
            ))}
          </div>
        )}

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech: string) => (
            <span key={tech} className="rounded-md border border-line px-2 py-0.5 text-[11px] text-dim">{tech}</span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.code_url !== "#" && (
            <a href={project.code_url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent/50 bg-bg px-4 py-2 text-xs font-medium text-accent/80 transition-colors hover:bg-accent/10">
              <FaGithub className="size-3" />{t("view_code")}
            </a>
          )}
          {project.demo_url !== "#" && (
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer"
              onClick={() => track("demo_click")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-ink">
              <FaExternalLinkAlt className="size-3" />{t("live_demo")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
