import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "../../lib/projects";

export const metadata: Metadata = {
  title: "Projects | Phalat Lorratthanan",
  description: "Data-focused projects with clear outcomes and links to details.",
};

export default function ProjectsPage() {
  return (
    <section className="flex flex-1 flex-col gap-8">
      {/* Header */}
      <div className="tech-border relative bg-[var(--color-surface-muted)] p-10 md:p-14">
        <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[var(--color-accent)]" />
        
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Data Products
        </p>
        <h1 className="mt-2 text-5xl font-black text-[var(--color-text)] sm:text-6xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Work focused on analytics, data pipelines, and decision tools.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="tech-border group relative flex flex-col justify-between bg-[var(--color-surface-muted)] p-8 transition hover:border-[var(--color-accent)]"
          >
            {/* Corner Accent */}
            <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100" />
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {project.timeline}
              </span>
              <h2 className="text-2xl font-black uppercase leading-tight text-[var(--color-text)]">
                {project.title.split('—')[0].trim()}
              </h2>
              <p className="line-clamp-2 text-sm text-[var(--color-text-secondary)]">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--color-border)] px-2 py-1 text-xs font-bold uppercase text-[var(--color-text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] transition group-hover:translate-x-1">
              <span>View Project</span>
              <span className="text-lg">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center border border-[var(--color-border)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          ← Home
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center justify-center bg-[var(--color-accent)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110"
        >
          About →
        </Link>
      </div>
    </section>
  );
}
