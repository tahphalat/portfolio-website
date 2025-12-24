import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Phalat Lorratthanan",
};

export default function ResumePage() {
  return (
    <section className="flex flex-1 flex-col items-center gap-8 text-center">
      <h1 className="text-5xl font-semibold text-[var(--color-text)] sm:text-6xl">
        Resume
      </h1>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Open PDF
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
        >
          Download
        </a>
      </div>
      <div className="w-full max-w-5xl space-y-4">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="h-[720px] w-full rounded border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
        >
          <p className="p-4 text-[var(--color-text-secondary)]">
            ไม่สามารถแสดง PDF ในเบราว์เซอร์นี้{" "}
            <a
              className="font-semibold text-[var(--color-accent)]"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              เปิดไฟล์
            </a>{" "}
            หรือ{" "}
            <a
              className="font-semibold text-[var(--color-accent)]"
              href="/resume.pdf"
              download
            >
              ดาวน์โหลด
            </a>
          </p>
        </object>

        <div className="flex flex-wrap items-center justify-start gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
          >
            ← Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
