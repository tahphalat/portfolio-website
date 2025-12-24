
interface SkillData {
  name: string;
  count: number;
  percent: number;
}

interface SkillTrendsProps {
  skills: SkillData[];
}

export function SkillTrends({ skills }: SkillTrendsProps) {
  if (!skills || skills.length === 0) {
    return (
      <div className="tech-border bg-[var(--color-surface-muted)] p-6 text-center text-[var(--color-text-secondary)]">
        No skill data available.
      </div>
    );
  }

  const sorted = [...skills].sort((a, b) => b.count - a.count);
  const maxCount = sorted[0]?.count || 1;

  return (
    <div className="tech-border relative bg-[var(--color-surface-muted)] p-6">
      {/* Decorative corner */}
      <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
      
      <h3 className="mb-6 text-lg font-black text-[var(--color-accent)]">
        Top Skills in Demand
      </h3>
      <div className="space-y-4">
        {sorted.map((skill) => (
          <div key={skill.name}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="font-bold uppercase tracking-wide text-[var(--color-text)]">
                {skill.name}
              </span>
              <span className="font-mono text-[var(--color-accent-secondary)]">
                {skill.count.toLocaleString()}
              </span>
            </div>
            <div className="h-2 w-full bg-[var(--color-border)]">
              <div
                className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)]"
                style={{ width: `${(skill.count / maxCount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
