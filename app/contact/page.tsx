import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Phalat Lorratthanan",
};

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile", icon: "🔗" },
  { label: "GitHub", href: "https://github.com/your-handle", icon: "💻" },
  { label: "Email", href: "mailto:your.email@example.com", icon: "✉️" },
];

export default function ContactPage() {
  return (
    <section className="flex flex-1 flex-col gap-8">
      {/* Header */}
      <div className="tech-border relative bg-[var(--color-surface-muted)] p-10 md:p-14">
        <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
        <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[var(--color-accent)]" />
        
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Get in Touch
        </p>
        <h1 className="mt-2 text-5xl font-black text-[var(--color-text)] sm:text-6xl">
          Contact
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--color-text-secondary)]">
          สนใจร่วมงานหรือมีคำถาม? ติดต่อผมได้เลยครับ — ตอบกลับภายใน 1 วันทำการ
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Contact Form Placeholder */}
        <div className="tech-border relative bg-[var(--color-surface-muted)] p-8">
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
          <h2 className="text-lg font-black text-[var(--color-accent)]">Send a Message</h2>
          
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-accent)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                Email
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="mt-2 w-full border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-accent)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project or question..."
                className="mt-2 w-full resize-none border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-accent)] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-accent)] py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110"
            >
              Send Message →
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-[var(--color-text-secondary)]">
            (Form placeholder — connect to a backend or service like Formspree)
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-6">
          <div className="tech-border relative bg-[var(--color-surface-muted)] p-8">
            <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent-secondary)]" />
            <h2 className="text-lg font-black text-[var(--color-accent)]">Connect</h2>
            <div className="mt-6 space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-[var(--color-border)] p-4 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]"
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-lg font-bold uppercase text-[var(--color-text)]">{link.label}</span>
                  <span className="ml-auto text-[var(--color-accent)]">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick CTA */}
          <div className="tech-border relative bg-[var(--color-surface-muted)] p-8">
            <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
            <h2 className="text-lg font-black text-[var(--color-accent)]">Quick Actions</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="flex-1 border border-[var(--color-border)] py-3 text-center text-sm font-bold uppercase text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                View Resume
              </Link>
              <Link
                href="/projects"
                className="flex-1 border border-[var(--color-border)] py-3 text-center text-sm font-bold uppercase text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                See Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/about"
          className="inline-flex items-center justify-center border border-[var(--color-border)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          ← About
        </Link>
        <Link
          href="/resume"
          className="inline-flex items-center justify-center bg-[var(--color-accent)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:brightness-110"
        >
          Resume →
        </Link>
      </div>
    </section>
  );
}
