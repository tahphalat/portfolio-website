import Link from "next/link";

const mainCards = [
  {
    id: "projects",
    title: "Projects",
    description:
      "Featured work with quick context and outcomes. Case studies for growth analytics, workflow OS, and this portfolio.",
    href: "/projects",
  },
  {
    id: "about",
    title: "About",
    description:
      "Short story on how I mix product thinking, visual systems, and frontend to ship faster with small teams.",
    href: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    description:
      "Fastest way to reach me: email, LinkedIn, or grab a quick slot. I reply within a business day.",
    href: "/contact",
  },
];

export default function Home() {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "Github", href: "https://github.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ];

  return (
    <div className="flex flex-1 flex-col gap-16 md:gap-20">
      <section
        id="hero"
        className="scroll-mt-28 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 shadow-[0_18px_50px_-30px_rgba(15,20,25,0.3)] md:p-14"
      >
        <div className="flex flex-col gap-10 text-center md:gap-12">
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
        </div>
      </section>

      {mainCards.map((card) => (
        <section
          key={card.id}
          id={card.id}
          className="scroll-mt-28 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-left shadow-[0_18px_50px_-30px_rgba(15,20,25,0.3)] md:p-14"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
              {card.title}
            </p>
            <h2 className="text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
              {card.title}
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {card.description}
            </p>
          </div>
          <Link
            href={card.href}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Learn more
          </Link>
        </section>
      ))}
    </div>
  );
}
