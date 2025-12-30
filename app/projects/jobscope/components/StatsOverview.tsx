
export interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
}

function StatCard({ label, value, subtext }: StatCardProps) {
  return (
    <div className="tech-border relative bg-[var(--color-surface-muted)] p-6">
      {/* Decorative corner */}
      <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[var(--color-accent)]" />
      <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[var(--color-accent)]" />
      
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        {label}
      </p>
      <p className="mt-2 text-4xl font-black text-[var(--color-text)]">{value}</p>
      {subtext && (
        <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{subtext}</p>
      )}
    </div>
  );
}

interface StatsOverviewProps {
  stats: {
    label: string;
    value: string | number;
    subtext?: string;
  }[];
}

export function StatsOverview({ stats }: StatsOverviewProps) {
  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value}
          subtext={stat.subtext}
        />
      ))}
    </div>
  );
}
