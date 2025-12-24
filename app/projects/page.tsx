import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "../../lib/projects";

export const metadata: Metadata = {
  title: "Projects | Phalat Lorratthanan",
  description: "Data-focused projects with clear outcomes and links to details.",
};

export default function ProjectsPage() {
  return (
    <section className="flex flex-1 flex-col gap-12">
      <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-left shadow-[0_18px_50px_-30px_rgba(15,20,25,0.3)] md:p-14">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Data projects
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-text)] sm:text-5xl">
            Projects
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Work focused on analytics, data pipelines, and decision tools. Each card
            links to the deeper case study.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-left shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_-20px_rgba(15,20,25,0.35)]"
          >
            <div className="space-y-3">
              <div className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                {project.timeline}
              </div>
              <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                {project.title}
              </h2>
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)] whitespace-pre-line">
                {index === 0
                  ? "แดชบอร์ด JobScope: วิเคราะห์ตลาดงานจาก job postings เพื่อหา “ทักษะที่ต้องมี”, “ตำแหน่งที่มาแรง”, และ “แนวโน้มการจ้างงาน” แบบเข้าใจทันที.\nHighlights: End-to-end data pipeline, Insights: Top skills/roles/companies/locations, เปิดดูผลลัพธ์จริงผ่านเว็บ (Streamlit)."
                  : project.summary}
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

            <Link
              href={`/projects/${project.slug}`}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Learn more →
            </Link>
          </article>
        ))}
      </div>
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
        >
          ← Home
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          About →
        </Link>
      </div>
    </section>
  );
}
