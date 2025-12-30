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
    slug: "marvel-network",
    title: "MarvelNetworkProject",
    summary: "Network analytics playground and visualization suite — coming soon.",
    description: "Designing a graph-based view of connections, influence, and flows. Full write-up and demo coming soon.",
    outcome: "Case study, interactive demo, and dataset will be published shortly.",
    timeline: "2025 · In progress",
    tags: ["Graph", "Analytics", "Next.js"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(count = 3) {
  return projects.slice(0, count);
}
