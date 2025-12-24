import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Phalat Lorratthanan",
};

export default function AboutPage() {
  return (
    <>
      <section className="flex flex-1 flex-col items-center gap-12 text-center">
        <h1 className="text-5xl font-semibold text-[var(--color-text)] sm:text-6xl">
          About Me
        </h1>
        <div className="h-[420px] w-full max-w-5xl rounded border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_1px_0_rgba(0,0,0,0.04)]" />
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
        >
          ← Projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Contact →
        </Link>
      </div>
    </>
  );
}
