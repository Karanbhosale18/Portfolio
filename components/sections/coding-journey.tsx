import { SectionHeading, Reveal } from "@/components/ui/reveal";
import { CODING_JOURNEY } from "@/lib/constants";

export function CodingJourney() {
  return (
    <section id="journey" className="section-shell py-28">
      <SectionHeading
        eyebrow="09 · The Journey"
        title="How I got here"
        description="Each stage built on the last — Android taught architecture, Spring Boot taught how to apply it."
      />

      <div className="relative mx-auto max-w-2xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500/40 sm:left-1/2 sm:-translate-x-1/2" />

        <ol className="space-y-3">
          {CODING_JOURNEY.map((step, i) => {
            const isLast = i === CODING_JOURNEY.length - 1;
            return (
              <Reveal key={step} delay={i * 0.04} y={12}>
                <li
                  className={
                    "relative flex items-center gap-4 pl-12 sm:justify-center sm:pl-0 " +
                    (i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse")
                  }
                >
                  <span
                    className={
                      "absolute left-4 h-2.5 w-2.5 -translate-x-1/2 rounded-full sm:left-1/2 " +
                      (isLast ? "bg-accent-400 ring-4 ring-accent-400/20" : "bg-primary-400")
                    }
                  />
                  <div
                    className={
                      "glass-card px-4 py-2.5 text-sm sm:w-[calc(50%-2rem)] " +
                      (isLast ? "font-semibold text-accent-300" : "text-zinc-300")
                    }
                  >
                    {step}
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
