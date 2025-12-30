
export function Hero() {
  return (
    <section className="tech-border relative flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-[var(--color-surface-muted)]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--color-accent)] blur-[128px]" />
         <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[var(--color-accent-secondary)] blur-[128px]" />
      </div>
      
      {/* Decorative Corners */}
      <div className="absolute top-6 left-6 h-8 w-8 border-t-2 border-l-2 border-[var(--color-accent)]" />
      <div className="absolute bottom-6 right-6 h-8 w-8 border-b-2 border-r-2 border-[var(--color-accent)]" />

      <div className="z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="select-none text-8xl font-black uppercase tracking-tighter text-[var(--color-text)] sm:text-[10rem] leading-none">
          Phalat
        </h1>
        <p className="max-w-md text-lg font-bold tracking-[0.3em] uppercase text-[var(--color-accent)]">
          Chulalongkorn University, COMPUTER ENGINEERING & DIGITAL TECHNOLOGY
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
