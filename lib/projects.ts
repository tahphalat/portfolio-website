export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  outcome: string;
  timeline: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "jobscope",
    title: "JobScope — Job Market Analytics & Recommendation-Ready Dataset",
    summary:
      "End-to-end pipeline + interactive dashboard from raw job postings to insights on top skills, roles, companies, and locations.",
    description:
      "Built a full pipeline: extract job postings (CSV/JSON/API), clean and normalize titles/skills/locations, engineer features, and publish aggregates for dashboards and downstream recommendations. Streamlit front-end delivers insights instantly.",
    outcome:
      "Curated analytics dataset plus interactive views that make talent planning clearer; delivery via web demo so stakeholders can explore without notebooks.",
    timeline: "2024 · Data Product",
    tags: ["Data Pipeline", "Analytics", "Streamlit", "Python"],
    links: [
      { label: "Live Demo", href: "https://jobscope.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/tahphalat/job-market-analytics-recsys" },
      { label: "Dataset", href: "https://www.kaggle.com/" },
    ],
  },
  {
    slug: "growth-analytics",
    title: "Growth Analytics Dashboard",
    summary:
      "Self-serve analytics for marketing and product teams to track activation, retention, and campaign ROI.",
    description:
      "Unified product telemetry, marketing spend, and CRM data. Delivered cohort views, anomaly alerts, and a metric glossary so teams could answer their own questions without waiting on ad-hoc pulls.",
    outcome:
      "Adoption across 4 teams in 6 weeks; cut ad-hoc data requests by 40% and improved weekly experiment velocity.",
    timeline: "2024 · Data/Frontend",
    tags: ["Next.js", "Tailwind", "Design Systems", "Product Analytics"],
    links: [
      { label: "Case study", href: "https://example.com/case-study" },
      { label: "Live demo", href: "https://example.com/demo" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(count = 3) {
  return projects.slice(0, count);
}
