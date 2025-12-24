import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Phalat Lorratthanan",
};

const ProjectCard = () => (
  <div className="flex h-[260px] flex-col justify-end rounded border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
    header
    <div className="px-8 pb-8">
      <button className="bg-[var(--color-accent)] px-5 py-2 text-base font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
        Read more
      </button>
    </div>
  </div>
);

export default function ProjectsPage() {
  return (
    <section className="flex flex-1 flex-col items-center gap-12 text-center">
      <h1 className="text-5xl font-semibold text-[var(--color-text)] sm:text-6xl">
        Projects
      </h1>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
