import { SectionHeading } from "@/components/ui/reveal";
import { CERTIFICATIONS } from "@/lib/constants";
import { Award } from "lucide-react";

export function Certifications() {
    const certificates = CERTIFICATIONS;

  return (
    <section className="py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="08 · Certifications" title="Certifications & simulations" />
      </div>
        <div className="overflow-x-auto hide-scrollbar pb-4">
            <div className="flex gap-5 w-max snap-x snap-mandatory">
                {certificates.map((cert) => (
                    <div
                        key={cert.name}
                        className="glass-card flex w-72 shrink-0 snap-start items-start gap-4 p-5 shadow-card"
                    >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 text-primary-400">
          <Award className="h-5 w-5" />
        </span>
                        <div className="flex flex-col">
                            <p className="text-sm font-medium text-white">
                                {cert.name}
                            </p>

                            <p className="mt-1 font-mono text-xs text-zinc-500">
                                {cert.issuer}
                            </p>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex w-fit items-center rounded-md border border-primary px-3 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-white"
                            >
                                View Certificate →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
  );
}
