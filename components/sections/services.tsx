import { SectionHeading, Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { Server, Network, Layers, Coffee, Database, Smartphone } from "lucide-react";

const icons = [Server, Network, Layers, Coffee, Database, Smartphone];

export function Services() {
  return (
    <section className="section-shell py-28">
      <SectionHeading eyebrow="10 · Services" title="What I can build for you" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={s.title} delay={i * 0.07}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow-violet">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 text-primary-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
