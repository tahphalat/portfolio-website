import Image from "next/image";
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
  { year: "2024", job_title: "Web Developer Intern", company: "RELEARN SOLUTION CO., LTD.", description: "Developed and maintained web applications by fixing bugs and implementing assigned features." },
  { year: "2024", job_title: "Web Developer Intern", company: "Social Security Office of Thailand (sso.go.th)", description: "Developed frontend interfaces and backend services for goverment web systems." },
  { year: "2024", job_title: "Web Developer Intern", company: "Pasona360", description: "Developed and enhanced web application features, collaborating with designers to deliver features aligned with business requirements." },
];

export default function AboutPage() {
  const timelineByYear = timeline
    .slice()
    .sort((a, b) => Number(b.year) - Number(a.year))
    .reduce<Record<string, typeof timeline>>((acc, item) => {
      acc[item.year] = acc[item.year] ? [...acc[item.year], item] : [item];
      return acc;
    }, {});

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
        <div className="tech-border relative flex aspect-square items-center justify-center overflow-hidden bg-[var(--color-surface-muted)]">
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent-secondary)]" />
          <Image
            src="/myPhoto2.png"
            alt="Portrait of Phalat Lorratthanan"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 80vw"
            priority
          />
        </div>

        {/* Bio Text */}
        <div className="tech-border relative bg-[var(--color-surface-muted)] p-8 lg:col-span-2">
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
          <h2 className="text-lg font-black text-[var(--color-accent)]">Bio</h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Hi! I’m a Computer Engineering student at Chulalongkorn University with a strong interest in Data Engineering and Analytics.
I enjoy building data products that transform raw data into actionable, real-world insights.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
            สวัสดีครับ ผมเป็นนิสิตวิศวกรรมคอมพิวเตอร์ที่สนใจด้าน Data Engineering และ Analytics
            ผมชอบสร้าง data products ที่แปลงข้อมูลดิบให้กลายเป็น insights ที่ใช้งานได้จริง
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
          {Object.entries(timelineByYear).map(([year, items]) => (
            <div key={year} className="flex gap-6">
              <span className="font-mono text-2xl font-black text-[var(--color-accent-secondary)]">
                {year}
              </span>
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <div key={`${year}-${idx}`}>
                    <h3 className="text-lg font-bold uppercase text-[var(--color-text)]">
                      {item.company}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">{item.job_title}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                ))}
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
