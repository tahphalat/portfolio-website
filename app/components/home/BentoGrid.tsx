
import Link from "next/link";

interface GridItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  variant?: "large" | "medium" | "small";
}

interface BentoGridProps {
  items: GridItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid auto-rows-[280px] grid-cols-1 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`tech-border group relative flex flex-col justify-end overflow-hidden bg-[var(--color-surface-muted)] p-8 transition-all hover:border-[var(--color-accent)] ${
            item.variant === "large"
              ? "md:col-span-2"
              : "md:col-span-1"
          }`}
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100" />
          
          {/* Content */}
          <div className="relative z-10">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {item.subtitle}
            </span>
            <h3 className="text-3xl font-black uppercase leading-none text-[var(--color-text)]">
              {item.title}
            </h3>
          </div>
          
          {/* Arrow */}
           <div className="absolute top-6 right-6 text-2xl text-[var(--color-text-secondary)] opacity-0 transition-all group-hover:translate-x-1 group-hover:text-[var(--color-accent)] group-hover:opacity-100">
              ↗
           </div>
        </Link>
      ))}
    </div>
  );
}
