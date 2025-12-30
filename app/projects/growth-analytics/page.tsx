import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "../../../lib/projects";

const project = projects.find((p) => p.slug === "growth-analytics");

export const metadata: Metadata = {
  title: project
    ? `${project.title} | Phalat Lorratthanan`
    : "Growth Analytics Dashboard | Phalat Lorratthanan",
  description:
    "Self-serve analytics for activation, retention, and campaign ROI with unified product + marketing data.",
};

export default function GrowthAnalyticsPage() {
  if (!project) {
    return (
      <section className="flex flex-1 flex-col items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center shadow-[0_18px_50px_-30px_rgba(15,20,25,0.3)] md:p-14">
        <h1 className="text-4xl font-semibold text-[var(--color-text)] sm:text-5xl">
          Project not found
        </h1>
        <Link
          href="/projects"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-5 py-3 text-base font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
        >
          ← Back to projects
        </Link>
      </section>
    );
  }

  return (
    <article className="flex flex-1 flex-col gap-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-left shadow-[0_18px_50px_-30px_rgba(15,20,25,0.3)] md:p-14">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          {project.timeline}
        </p>
        <h1 className="text-4xl font-semibold text-[var(--color-text)] sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">Approach</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary)]">
            {project.description}
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">Outcome</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary)]">
            {project.outcome}
          </p>
        </div>
      </div>

      {project.links?.length ? (
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
            >
              {link.label} →
            </a>
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
        >
          ← Back to projects
        </Link>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Talk about this project
        </a>
      </div>
    </article>
  );
}
