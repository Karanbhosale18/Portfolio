import { SectionHeading, Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { EDUCATION } from "@/lib/constants";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-shell py-28">
      <SectionHeading eyebrow="07 · Education" title="Academic background" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 0.1}>
            <Card className="h-full">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04] text-primary-400">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="mt-1 text-sm text-zinc-400">{edu.school}</p>
              <p className="mt-3 font-mono text-xs text-zinc-600">{edu.period}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
