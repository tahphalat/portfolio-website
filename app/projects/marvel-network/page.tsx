import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MarvelNetworkProject | Phalat Lorratthanan",
  description: "MarvelNetworkProject — coming soon.",
};

export default function MarvelNetworkPage() {
  return (
    <section className="flex flex-1 flex-col gap-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-left shadow-[0_18px_50px_-30px_rgba(15,20,25,0.3)] md:p-14">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          2025 · In progress
        </p>
        <h1 className="text-4xl font-semibold text-[var(--color-text)] sm:text-5xl">
          MarvelNetworkProject
        </h1>
        <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
          Network analytics playground and visualization suite — coming soon.
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
          I&apos;m packaging the write-up, interactive graphs, and dataset access.
          Check back soon for the full case study and demo.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
        >
          ← Back to projects
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Home →
        </Link>
      </div>
    </section>
  );
}
