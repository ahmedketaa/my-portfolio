"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Eye,
  FolderKanban,
  Github,
  Layers3,
  Sparkles,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { projects, type ProjectCategory } from "@/data/projects";

const filterKeys: ProjectCategory[] = [
  "all",
  "fullstack",
  "frontend",
  "education",
  "business",
];

export function ProjectsSection() {
  const t = useTranslations("Projects");

  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [activePreviewId, setActivePreviewId] = useState<string | null>(
    projects.find((project) => project.preview)?.id ?? null
  );

  const previewRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const activePreviewProject =
    filteredProjects.find(
      (project) => project.id === activePreviewId && project.preview
    ) ??
    filteredProjects.find((project) => project.preview) ??
    null;

  useEffect(() => {
    if (!activePreviewProject && filteredProjects.length > 0) {
      const firstProjectWithPreview =
        filteredProjects.find((project) => project.preview) ?? filteredProjects[0];
      setActivePreviewId(firstProjectWithPreview?.id ?? null);
    }
  }, [filteredProjects, activePreviewProject]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    const observeCards = () => {
      if (!desktopQuery.matches) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          const topEntry = visibleEntries[0];
          if (!topEntry) return;

          const projectId = topEntry.target.getAttribute("data-project-id");
          if (!projectId) return;

          const project = filteredProjects.find((item) => item.id === projectId);
          if (!project?.preview) return;

          setActivePreviewId(projectId);
        },
        {
          threshold: [0.35, 0.5, 0.7, 0.9],
          rootMargin: "-10% 0px -20% 0px",
        }
      );

      filteredProjects.forEach((project) => {
        const element = cardRefs.current[project.id];
        if (element) observer.observe(element);
      });

      return observer;
    };

    let observer = observeCards();

    const handleChange = () => {
      observer?.disconnect();
      observer = observeCards();
    };

    desktopQuery.addEventListener("change", handleChange);

    return () => {
      observer?.disconnect();
      desktopQuery.removeEventListener("change", handleChange);
    };
  }, [filteredProjects]);

  const handlePreviewSelect = (projectId: string) => {
    setActivePreviewId(projectId);

    if (window.innerWidth < 1280) {
      previewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Section id="projects" className="relative scroll-mt-24">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/80">
            {t("eyebrow")}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("title")}
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {filterKeys.map((key) => {
            const isActive = activeFilter === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                className={cn(
                  "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                  "border-border/70 bg-card/70 text-foreground/80 shadow-[var(--shadow-soft)] backdrop-blur-xl",
                  "hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground hover:bg-card",
                  isActive &&
                    "border-primary/20 bg-foreground text-background shadow-[var(--shadow-medium)]"
                )}
              >
                {t(`filters.${key}`)}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-6">
            {filteredProjects.map((project) => {
              const isPreviewActive = activePreviewProject?.id === project.id;

              return (
                <article
                  key={project.id}
                  ref={(el) => {
                    cardRefs.current[project.id] = el;
                  }}
                  data-project-id={project.id}
                  className={cn(
                    "group relative overflow-hidden rounded-[2rem] border p-5 md:p-6",
                    "border-border/70 bg-card/75 shadow-[var(--shadow-medium)] backdrop-blur-xl transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]",
                    isPreviewActive &&
                      "ring-1 ring-primary/15 border-primary/20 shadow-[var(--shadow-strong)]"
                  )}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_30%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.07),transparent_35%)]" />

                  <div className="relative space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          {project.featured && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                              <Sparkles className="size-3.5" />
                              {t("badges.featured")}
                            </span>
                          )}

                          <span className="inline-flex rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                            {project.year}
                          </span>

                          <span className="inline-flex rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                            {t(`status.${project.status}`)}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                            {t(`items.${project.translationKey}.title`)}
                          </h3>

                          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                            {t(`items.${project.translationKey}.summary`)}
                          </p>
                        </div>
                      </div>

                      <div className="min-w-[170px] rounded-[1.25rem] border border-border/70 bg-background/60 px-4 py-3 backdrop-blur-xl">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {t("labels.role")}
                        </p>
                        <p className="mt-1.5 text-sm font-semibold text-foreground">
                          {project.role}
                        </p>
                        {project.company ? (
                          <p className="mt-1 text-xs text-muted-foreground">
                            {project.company}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={`${project.id}-${metric.label}-${metric.value}`}
                          className="rounded-[1.25rem] border border-border/70 bg-background/55 p-4 backdrop-blur-xl"
                        >
                          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                            {t(metric.label)}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-foreground md:text-base">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Layers3 className="size-4 text-primary" />
                        {t("labels.stack")}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={`${project.id}-${tech}`}
                            className="rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-xs font-medium text-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-border/70 bg-background/55 p-4 backdrop-blur-xl">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                          <FolderKanban className="size-4 text-primary" />
                          {t("labels.challenge")}
                        </div>
                        <p className="text-sm leading-7 text-muted-foreground">
                          {t(`items.${project.translationKey}.challenge`)}
                        </p>
                      </div>

                      <div className="rounded-[1.5rem] border border-border/70 bg-background/55 p-4 backdrop-blur-xl">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                          <Code2 className="size-4 text-primary" />
                          {t("labels.impact")}
                        </div>
                        <p className="text-sm leading-7 text-muted-foreground">
                          {t(`items.${project.translationKey}.impact`)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => {
                        const icon =
                          link.type === "github" ? (
                            <Github className="size-4" />
                          ) : link.type === "preview" ? (
                            <Eye className="size-4" />
                          ) : (
                            <ExternalLink className="size-4" />
                          );

                        if (link.type === "preview" && project.preview) {
                          return (
                            <button
                              key={`${project.id}-${link.type}-${link.href}`}
                              type="button"
                              onClick={() => handlePreviewSelect(project.id)}
                              className={cn(
                                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                                "border-primary/20 bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-medium)]",
                                isPreviewActive && "ring-2 ring-primary/20"
                              )}
                            >
                              {icon}
                              {t(link.label)}
                            </button>
                          );
                        }

                        return (
                          <Link
                            key={`${project.id}-${link.type}-${link.href}`}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card"
                          >
                            {icon}
                            {t(link.label)}
                            <ArrowUpRight className="size-4" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside ref={previewRef} className="xl:sticky xl:top-24 xl:self-start">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/80 shadow-[var(--shadow-medium)] backdrop-blur-xl">
              <div className="border-b border-border/70 p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {t("preview.eyebrow")}
                </p>

                <h4 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                  {activePreviewProject
                    ? t(`items.${activePreviewProject.translationKey}.title`)
                    : t("preview.emptyTitle")}
                </h4>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {activePreviewProject
                    ? t("preview.description")
                    : t("preview.emptyDescription")}
                </p>
              </div>

              <div className="p-4">
                {activePreviewProject?.preview ? (
                  <div className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-black shadow-[var(--shadow-soft)]">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                      <span className="size-2.5 rounded-full bg-red-400" />
                      <span className="size-2.5 rounded-full bg-yellow-400" />
                      <span className="size-2.5 rounded-full bg-green-400" />
                      <span className="ml-2 truncate text-xs text-white/60">
                        {activePreviewProject.preview.src}
                      </span>
                    </div>

                    <div className="aspect-[16/10] bg-neutral-950">
                      <iframe
                        src={activePreviewProject.preview.src}
                        title={activePreviewProject.preview.title}
                        loading="lazy"
                        className="h-full w-full"
                        referrerPolicy="strict-origin-when-cross-origin"
                        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                        allow={
                          activePreviewProject.preview.allowFullscreen
                            ? "fullscreen"
                            : undefined
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center rounded-[1.5rem] border border-dashed border-border/70 bg-background/40 p-6 text-center">
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {t("preview.noPreview")}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {t("preview.noPreviewHint")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
}