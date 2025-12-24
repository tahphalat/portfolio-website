
import { Hero } from "./components/home/Hero";
import { BentoGrid } from "./components/home/BentoGrid";

export default function Home() {
  const gridItems = [
    {
      id: "jobscope",
      title: "JobScope",
      subtitle: "Data Product",
      href: "/projects/jobscope",
      variant: "large" as const,
      bgClass: "bg-zinc-900 border-zinc-800",
    },
    {
      id: "growth",
      title: "Growth Analytics",
      subtitle: "Dashboard",
      href: "/projects/growth-analytics",
      variant: "medium" as const,
      bgClass: "bg-zinc-800 border-zinc-700",
    },
    {
      id: "about",
      title: "About Me",
      subtitle: "The Story",
      href: "/about",
      variant: "small" as const,
      bgClass: "bg-[var(--color-accent)] border-[var(--color-accent)]",
    },
    {
      id: "contact",
      title: "Contact",
      subtitle: "Get in touch",
      href: "/contact",
      variant: "small" as const,
      bgClass: "bg-zinc-900 border-zinc-800",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <BentoGrid items={gridItems} />
    </div>
  );
}
