import { SectionHeading, Reveal } from "@/components/ui/reveal";
import { Card, Badge } from "@/components/ui/card";
import { EXPERIENCE } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="section-shell py-28">
      <SectionHeading
        eyebrow="02 · Experience"
        title="Where the work happened"
        description="Two internships, two very different codebases — both teaching the same lesson about architecture."
      />

      <div className="relative">
        <div className="absolute bottom-0 left-[15px] top-2 hidden w-px bg-gradient-to-b from-primary-500/60 via-secondary-500/40 to-transparent sm:block" />

        <div className="space-y-10">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.12}>
              <div className="relative pl-0 sm:pl-12">
                <span className="absolute left-0 top-2 hidden h-8 w-8 items-center justify-center rounded-full border border-primary-400/50 bg-canvas font-mono text-[11px] text-primary-400 sm:flex">
                  {i + 1}
                </span>

                <Card>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="mt-1 text-sm text-primary-400">{exp.company}</p>
                    </div>
                    <div className="text-right font-mono text-xs text-zinc-500">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{exp.summary}</p>

                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-zinc-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
