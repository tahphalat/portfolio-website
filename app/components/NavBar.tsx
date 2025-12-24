'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  accent?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/#hero" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/resume", accent: true },
];

export default function NavBar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState(() => {
    if (typeof window === "undefined") return "#hero";
    return window.location.hash || "#hero";
  });

  useEffect(() => {
    const updateHash = () => {
      if (typeof window === "undefined") return;
      setActiveHash(window.location.hash || "#hero");
    };

    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-avatar)] text-lg font-bold text-[var(--color-text)]">
            PL
          </div>
        </Link>
        <nav className="flex items-center gap-6 text-base font-semibold text-[var(--color-text)]">
          {navItems.map((item) => {
            const isAnchor = item.href.startsWith("/#");
            const targetHash = isAnchor ? `#${item.href.split("#")[1] || ""}` : "";
            const isActive = isAnchor
              ? pathname === "/" && activeHash === targetHash
              : pathname === item.href;
            const accentClasses = item.accent
              ? "rounded bg-[var(--color-surface-muted)] px-4 py-2 transition-colors hover:bg-[var(--color-border)]"
              : "px-1.5 py-2 transition-colors hover:text-[var(--color-text)]";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${accentClasses} ${
                  isActive
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-text)]/85"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
