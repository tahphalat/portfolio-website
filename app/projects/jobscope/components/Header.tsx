
import Link from "next/link";

interface HeaderProps {
  title: string;
  subtitle: string;
  links: {
    demo?: string;
    github?: string;
    dataset?: string;
  };
  tags: string[];
}

export function Header({ title, subtitle, links, tags }: HeaderProps) {
  return (
    <div className="relative overflow-hidden tech-border bg-[var(--color-surface-muted)] p-10 md:p-14">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
         <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[var(--color-accent)] blur-[100px]" />
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
      <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[var(--color-accent)]" />

      <div className="relative z-10 space-y-6">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Data Product · 2024
          </p>
          <h1 className="text-4xl font-black leading-none text-[var(--color-text)] sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[var(--color-accent)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110"
            >
              Launch Demo →
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-[var(--color-border)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Source Code
            </a>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
