import { SectionHeading, Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { SKILLS } from "@/lib/constants";
import { Star } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="section-shell py-28">
      <SectionHeading
        eyebrow="03 · Skills"
        title="The toolbox, honestly rated"
        description="No inflated bars — stars reflect languages I actually reach for daily versus ones I'm still sharpening."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-primary-400">
                {group.category}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between">
                    <span className="text-sm text-zinc-300">{item.name}</span>
                    {item.level && (
                      <span className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={
                              idx < item.level!
                                ? "h-3.5 w-3.5 fill-accent-400 text-accent-400"
                                : "h-3.5 w-3.5 text-zinc-700"
                            }
                          />
                        ))}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
