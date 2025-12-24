
interface Job {
  title: string;
  company: string;
  location: string;
  type?: string;
  date?: string;
  url?: string;
}

interface JobTableProps {
  jobs: Job[];
}

export function JobTable({ jobs }: JobTableProps) {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 text-center text-[var(--color-text-secondary)]">
        No job listings available.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]">
            <tr>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">Company</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">Location</th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border)]">
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="transition hover:bg-[var(--color-surface-muted)]"
              >
                <td className="px-6 py-4 font-medium text-[var(--color-text)]">
                  {job.title}
                </td>
                <td className="px-6 py-4 text-[var(--color-text-secondary)]">{job.company}</td>
                <td className="px-6 py-4 text-[var(--color-text-secondary)]">{job.location}</td>
                <td className="px-6 py-4">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--color-accent)] hover:underline"
                    >
                      Apply
                    </a>
                  ) : (
                    <span className="text-[var(--color-text-secondary)]">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
