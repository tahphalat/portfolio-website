import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Phalat Lorratthanan",
};

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "SQL"] },
  { category: "Data", items: ["Pandas", "Spark", "dbt"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind"] },
  { category: "Tools", items: ["Git", "Docker", "Airflow"] },
];

const timeline = [
  { year: "2024", title: "Data Product Intern", company: "TBD", description: "Building data pipelines and analytics dashboards." },
  { year: "2023", title: "Software Engineering Student", company: "Chulalongkorn University", description: "Studying computer engineering with focus on data systems." },
];

export default function AboutPage() {
  return (
    <section className="flex flex-1 flex-col gap-8">
      {/* Header */}
      <div className="tech-border relative bg-[var(--color-surface-muted)] p-10 md:p-14">
        <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[var(--color-accent)]" />
        
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Get to Know Me
        </p>
        <h1 className="mt-2 text-5xl font-black text-[var(--color-text)] sm:text-6xl">
          About
        </h1>
      </div>

      {/* Bio Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Photo Placeholder */}
        <div className="tech-border relative flex aspect-square items-center justify-center bg-[var(--color-surface-muted)]">
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent-secondary)]" />
          <span className="text-6xl">👤</span>
          <span className="absolute bottom-4 text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)]">
            Photo Placeholder
          </span>
        </div>

        {/* Bio Text */}
        <div className="tech-border relative bg-[var(--color-surface-muted)] p-8 lg:col-span-2">
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
          <h2 className="text-lg font-black text-[var(--color-accent)]">Bio</h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            สวัสดีครับ! ผมเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ที่สนใจด้าน Data Engineering และ Analytics
            ชอบสร้าง data products ที่แปลงข้อมูลดิบให้กลายเป็น insights ที่ใช้งานได้จริง
          </p>
          <p className="mt-3 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            (ใส่ข้อมูลจริงของคุณที่นี่ — เล่าเรื่องราวการเริ่มต้นเขียนโค้ด, สิ่งที่สนใจ, และเป้าหมายอาชีพ)
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="tech-border relative bg-[var(--color-surface-muted)] p-8">
        <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
        <h2 className="text-lg font-black text-[var(--color-accent)]">Skills & Tools</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)]">
                {skillGroup.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--color-border)] px-3 py-1 text-xs font-bold uppercase text-[var(--color-text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="tech-border relative bg-[var(--color-surface-muted)] p-8">
        <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
        <h2 className="text-lg font-black text-[var(--color-accent)]">Experience</h2>
        <div className="mt-6 space-y-6">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-6">
              <span className="font-mono text-2xl font-black text-[var(--color-accent-secondary)]">
                {item.year}
              </span>
              <div>
                <h3 className="text-lg font-bold uppercase text-[var(--color-text)]">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.company}</p>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center border border-[var(--color-border)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          ← Projects
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-[var(--color-accent)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110"
        >
          Contact →
        </Link>
      </div>
    </section>
  );
}
