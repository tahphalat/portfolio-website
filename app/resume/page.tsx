import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Phalat Lorratthanan",
};

export default function ResumePage() {
  return (
    <section className="flex flex-1 flex-col gap-8">
      {/* Header */}
      <div className="tech-border relative bg-[var(--color-surface-muted)] p-10 md:p-14">
        <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[var(--color-accent)]" />
        
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Professional Documents
        </p>
        <h1 className="mt-2 text-5xl font-black text-[var(--color-text)] sm:text-6xl">
          Resume
        </h1>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center bg-[var(--color-accent)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110"
        >
          Open PDF ↗
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center border border-[var(--color-border)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          Download ↓
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="tech-border relative bg-[var(--color-surface-muted)] p-4">
        <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[var(--color-accent)]" />
        
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="h-[720px] w-full border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <div className="flex h-[720px] flex-col items-center justify-center gap-4 text-center">
            <span className="text-6xl">📄</span>
            <p className="text-lg text-[var(--color-text-secondary)]">
              ไม่สามารถแสดง PDF ในเบราว์เซอร์นี้
            </p>
            <div className="flex gap-3">
              <a
                className="border border-[var(--color-accent)] px-4 py-2 font-bold uppercase text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-white"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                เปิดไฟล์
              </a>
              <a
                className="border border-[var(--color-border)] px-4 py-2 font-bold uppercase text-[var(--color-text)] transition hover:border-[var(--color-text)]"
                href="/resume.pdf"
                download
              >
                ดาวน์โหลด
              </a>
            </div>
          </div>
        </object>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-start gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-[var(--color-border)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          ← Contact
        </Link>
      </div>
    </section>
  );
}
