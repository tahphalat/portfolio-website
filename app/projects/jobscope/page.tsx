import Link from "next/link";
import type { Metadata } from "next";

const heroSubtitle =
  "แพลตฟอร์มวิเคราะห์ตลาดงานจาก job postings: สร้าง pipeline เพื่อทำความสะอาด/แปลงข้อมูล แล้วสรุปเป็น insight ผ่านแดชบอร์ดแบบ interactive";

const problem = [
  "ประกาศงานกระจัดกระจาย อ่านทีละโพสต์ไม่เห็นภาพรวม",
  'อยากรู้ว่า “ทักษะไหนต้องมี”, “ตำแหน่งไหนกำลังมา”, “บริษัท/โลเคชันไหนรับเยอะ” แต่ข้อมูลดิบไม่พร้อมใช้ (ซ้ำ, missing, format ไม่ตรงกัน)',
];

const goal = [
  "สร้าง End-to-End pipeline ที่เปลี่ยน raw postings → curated analytics dataset",
  "สรุปเป็น dashboard ที่กดดู/กรองข้อมูลได้",
  "ออกแบบให้ต่อยอดไปสู่ recommendation (skill gap / role matching) ได้ในอนาคต",
];

const architecture = [
  "Extract: CSV/JSON/API → raw storage",
  "Transform: cleaning + normalization + feature extraction",
  "Model-ready layer: aggregated tables (KPI/metrics)",
  "Serve: Streamlit dashboard (interactive)",
];

const features = [
  {
    title: "Skill Demand Insights",
    description: "Top skills, keyword frequency, และเทรนด์การเติบโตของสกิลตามช่วงเวลา",
  },
  {
    title: "Role & Company Breakdown",
    description: "เห็นตำแหน่งไหนเปิดเยอะ บริษัท/อุตสาหกรรมไหนกำลังรับ และโอกาสในแต่ละเซ็กเมนต์",
  },
  {
    title: "Location / Work Type",
    description: "แยก remote/hybrid/on-site และกระจายตัวตามเมือง/ประเทศ (ถ้ามีข้อมูล)",
  },
  {
    title: "Interactive Filters",
    description: "กรองตามช่วงเวลา หมวดหมู่ คีย์เวิร์ด เพื่อเจาะลึก insight ที่ต้องการ",
  },
  {
    title: "Reusable Data Pipeline",
    description: "รันใหม่ได้เป็นสเตจชัดเจน แก้/เพิ่มแหล่งข้อมูลได้โดยไม่กระทบการเสิร์ฟ",
  },
];

const stack = [
  "Python (Pandas สำหรับ cleaning/feature engineering)",
  "SQL (aggregation/query layer ถ้ามี)",
  "Streamlit (dashboard interactive)",
  "Parquet/CSV (storage format)",
  "Optional: Airflow / Docker / GitHub Actions (รองรับ scheduling/CI ถ้ามี)",
];

const results = [
  "Processed XX,XXX job postings into curated dataset",
  "Reduced memory usage by ~XX% via optimized types / column selection",
  "Delivered X+ interactive charts + filters for exploration",
];

const improvements = [
  "Add incremental update / scheduling (daily/weekly refresh)",
  "Add data quality checks + monitoring",
  "Add recommendation: “skills you’re missing” จาก JD ที่สนใจ",
  "Add API layer (FastAPI) ให้ frontend (Next.js) เรียกใช้",
];

const screenshots = [
  { title: "Overview dashboard", alt: "JobScope overview dashboard" },
  { title: "Skill demand view", alt: "Skill demand and trends" },
  { title: "Role/company breakdown", alt: "Role and company breakdown" },
];

export const metadata: Metadata = {
  title: "JobScope — Job Market Analytics & Recommendation-Ready Dataset | Phalat Lorratthanan",
  description:
    "End-to-end pipeline + interactive dashboard from raw job postings to insights on top skills, roles, companies, and locations.",
};

export default function JobScopePage() {
  return (
    <article className="flex flex-1 flex-col gap-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-left shadow-[0_18px_50px_-30px_rgba(15,20,25,0.3)] md:p-14">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
          2024 · Data Product
        </p>
        <h1 className="text-4xl font-semibold text-[var(--color-text)] sm:text-5xl">
          JobScope — Job Market Analytics & Recommendation-Ready Dataset
        </h1>
        <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
          {heroSubtitle}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://jobscope.streamlit.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Open Live Demo →
          </a>
          <a
            href="https://github.com/your-handle/jobscope"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
          >
            View Source Code →
          </a>
          <a
            href="https://www.kaggle.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
          >
            Dataset →
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Data Pipeline", "Analytics", "Streamlit", "Python"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">Problem</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-text-secondary)]">
            {problem.map((item) => (
              <li key={item} className="text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">Goal</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-text-secondary)]">
            {goal.map((item) => (
              <li key={item} className="text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <h2 className="text-xl font-semibold text-[var(--color-text)]">Solution Overview</h2>
        <p className="mt-2 text-base leading-relaxed text-[var(--color-text-secondary)]">
          Architecture แบบอ่านง่าย: จาก raw postings → cleaned data → analytics → dashboard พร้อมต่อยอดสู่ recommendation.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {architecture.map((step) => (
            <div
              key={step}
              className="rounded-xl border border-[var(--color-border)] bg-white p-4 text-sm font-semibold text-[var(--color-text)] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--color-text)]">Key Features</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                {feature.title}
              </p>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">Tech Stack</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-text-secondary)]">
            {stack.map((item) => (
              <li key={item} className="text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">Results</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-text-secondary)]">
            {results.map((item) => (
              <li key={item} className="text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-[var(--color-text-secondary)]">*ใส่ตัวเลขจริงเมื่อพร้อม</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--color-text)]">Demo Preview</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((shot) => (
            <div
              key={shot.title}
              className="flex h-40 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] text-center text-[var(--color-text-secondary)]"
              aria-label={shot.alt}
            >
              {shot.title} (placeholder)
            </div>
          ))}
        </div>
        <a
          href="https://jobscope.streamlit.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Try it live →
        </a>
      </section>

      <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <h2 className="text-xl font-semibold text-[var(--color-text)]">What I’d improve next</h2>
        <ul className="mt-3 space-y-2 text-[var(--color-text-secondary)]">
          {improvements.map((item) => (
            <li key={item} className="text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-text)]"
        >
          ← Back to projects
        </Link>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          Talk about this project
        </a>
      </div>
    </article>
  );
}
