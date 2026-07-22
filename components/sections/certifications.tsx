import { SectionHeading } from "@/components/ui/reveal";
import { CERTIFICATIONS } from "@/lib/constants";
import { Award } from "lucide-react";

export function Certifications() {
    const certificates = CERTIFICATIONS;

    return (
        <section className="py-28">
            <div className="section-shell">
                <SectionHeading
                    eyebrow="08 · Certifications"
                    title="Certifications & simulations"
                />

                <div className="mt-12 pt-4 overflow-x-auto hide-scrollbar">
                    <div className="flex w-max gap-6 snap-x snap-mandatory pb-4">
                        {certificates.map((cert) => (
                            <div
                                key={cert.name}
                                className="glass-card w-[340px] flex-shrink-0 snap-start p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 text-primary-400">
                    <Award className="h-6 w-6" />
                  </span>

                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            {cert.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-zinc-400">
                                            {cert.issuer}
                                        </p>

                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
                                        >
                                            View Certificate →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}