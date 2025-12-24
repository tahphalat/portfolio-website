import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Phalat Lorratthanan",
};

export default function AboutPage() {
  return (
    <section className="flex flex-1 flex-col items-center gap-12 text-center">
      <h1 className="text-5xl font-semibold text-[var(--color-text)] sm:text-6xl">
        About Me
      </h1>
      <div className="h-[420px] w-full max-w-5xl rounded border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia beatae alias saepe, doloribus fugiat exercitationem sequi voluptatem eius eum delectus iste sapiente fugit expedita. Hic, quidem quas. Hic, recusandae!
      </div>
    </section>
  );
}
