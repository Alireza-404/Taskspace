export default function Welcome() {
  return (
    <section id="welcome-section">
      <div className="flex flex-col gap-y-2 px-4 py-2 md:px-8 lg:px-12">
        <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-neutral-800">
          Hi, <span className="text-brown">Alireza</span>
          <span className="ml-1.5 text-xl">✦</span>
        </h2>

        <p className="text-sm leading-relaxed text-secondary">
          Ready to make today your own, one step at a time?
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-bc/50 to-bc/70" />

          <span className="h-1.5 w-1.5 rotate-45 bg-bc/80" />

          <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-bc/50 to-bc/70" />
        </div>
      </div>
    </section>
  );
}
