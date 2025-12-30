
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { type StatCardProps, StatsOverview } from "./components/StatsOverview";
import { type SkillData, SkillTrends } from "./components/SkillTrends";

const heroSubtitle =
  "End-to-end data pipeline สำหรับวิเคราะห์ตลาดงาน: จาก raw job postings → curated insight พร้อม interactive dashboard";

const architecture = [
  "Extract: CSV/JSON/API → raw storage",
  "Transform: cleaning + normalization + feature extraction",
  "Model-ready layer: aggregated tables (KPI/metrics)",
  "Serve: Streamlit dashboard (interactive)",
];

const stack = [
  "Python (Pandas)",
  "SQL Aggregation",
  "Streamlit",
  "Parquet/CSV",
];

export default function JobScopePage() {
  const [stats, setStats] = useState<StatCardProps[]>([]);
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Skills
        const skillsRes = await fetch("/data/skills.json");
        const skillsData: SkillData[] = await skillsRes.json();
        setSkills(skillsData.slice(0, 5));

        // Fetch KPI stats
        const kpiRes = await fetch("/data/kpi_summary.json");
        const kpiData: {
          total_jobs?: number;
          unique_companies?: number;
          top_locations?: { location_text?: string; count?: number }[];
        } = await kpiRes.json();
        
        setStats([
          { 
            label: "Total Jobs", 
            value: kpiData.total_jobs?.toLocaleString() || "-", 
            subtext: "Processed" 
          },
          { 
            label: "Companies", 
            value: kpiData.unique_companies?.toLocaleString() || "-", 
            subtext: "Unique" 
          },
          { 
            label: "Top Location", 
            value: kpiData.top_locations?.[0]?.location_text || "US", 
            subtext: `${kpiData.top_locations?.[0]?.count?.toLocaleString()} jobs` 
          },
        ]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <article className="flex flex-1 flex-col gap-8">
      
      {/* HEADER SECTION */}
      <Header
        title="JobScope"
        subtitle={heroSubtitle}
        links={{
          demo: "https://jobscope.streamlit.app/",
          github: "https://github.com/tahphalat/job-market-analytics-recsys",
        }}
        tags={["Data Pipeline", "Analytics", "Streamlit", "Python"]}
      />

      {/* STATS + SKILLS ROW */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-[var(--color-accent)]">Key Metrics</h2>
            {loading && <span className="text-xs text-[var(--color-text-secondary)]">Loading...</span>}
        </div>
        
        <StatsOverview stats={stats} />

        <div className="grid gap-6 lg:grid-cols-2">
            <SkillTrends skills={skills} />
            
            {/* CTA Card */}
            <a
              href="https://jobscope.streamlit.app/"
              target="_blank"
              rel="noreferrer"
              className="tech-border group relative flex flex-col justify-between bg-[var(--color-surface-muted)] p-8 transition hover:border-[var(--color-accent)]"
            >
              <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent-secondary)]" />
              <div>
                <h3 className="text-xl font-black text-[var(--color-text)]">Explore the Full Dashboard</h3>
                <p className="mt-2 text-[var(--color-text-secondary)]">
                  ดูข้อมูลแบบ interactive, กรองตาม skill/location, และสำรวจ job listings เพิ่มเติม
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] transition group-hover:translate-x-1">
                <span>Launch Streamlit Demo</span>
                <span className="text-xl">→</span>
              </div>
            </a>
        </div>
      </section>

      {/* ARCHITECTURE SECTION */}
      <section className="tech-border relative bg-[var(--color-surface-muted)] p-8">
        <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
        <h2 className="text-lg font-black text-[var(--color-accent)]">Solution Architecture</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {architecture.map((step, i) => (
            <div
              key={step}
              className="border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm font-semibold text-[var(--color-text)]"
            >
              <span className="mr-2 font-mono text-[var(--color-accent-secondary)]">{String(i + 1).padStart(2, '0')}</span>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="tech-border relative bg-[var(--color-surface-muted)] p-8">
        <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
        <h2 className="text-lg font-black text-[var(--color-accent)]">Tech Stack</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="border border-[var(--color-border)] px-4 py-2 text-sm font-bold uppercase text-[var(--color-text)]">
               {item}
            </span>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-3 pt-4">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center border border-[var(--color-border)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          ← Back to Projects
        </Link>
      </div>
    </article>
  );
}
