export default function Home() {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Github", href: "https://github.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ];

  return (
    <section className="flex min-h-[70vh] flex-1 flex-col items-center justify-center gap-12 text-center">
      <div className="space-y-3">
        <p className="text-6xl font-semibold leading-tight text-[var(--color-text)] sm:text-7xl">
          Phalat
        </p>
        <p className="text-6xl font-semibold leading-tight text-[var(--color-text)] sm:text-7xl">
          Lorratthanan
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="min-w-[140px] bg-[var(--color-accent)] px-6 py-3 text-lg font-semibold text-white visited:text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
