import { SectionHeading, Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Smartphone, Server, Sigma, BookOpen } from "lucide-react";

const traits = [
  { icon: Server, label: "Backend architecture enthusiast" },
  { icon: Sigma, label: "Strong foundation in DSA" },
  { icon: BookOpen, label: "Continuous learner" },
  { icon: Smartphone, label: "Started in Android, now backend-first" },
];

export function About() {
  return (
    <section id="about" className="section-shell py-28">
      <SectionHeading
        eyebrow="01 · About"
        title="From building screens to building systems"
        description="A Computer Engineering student who found backend engineering through Android."
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="space-y-5 text-[15px] leading-relaxed text-zinc-400">
            <p>
              I started out writing Android apps — laying out screens in XML, wiring up Firebase
              authentication, and watching a UI break in a dozen small ways across a dozen
              devices. It taught me something that stuck: an app is only as good as the system
              behind it. Every button I built eventually needed a request to go somewhere, be
              validated, be stored, and come back correctly.
            </p>
            <p>
              That curiosity about &ldquo;what happens after the button click&rdquo; pulled me toward
              Java and Spring Boot. I moved from designing screens to designing the services that
              power them — REST APIs, authentication flows, database schemas, and the quiet
              architectural decisions that decide whether a system holds up under real use.
            </p>
            <p>
              I care about clean code because I&rsquo;ve maintained the alternative. I care about
              backend architecture because I&rsquo;ve seen how a good one makes every feature after it
              easier, and a bad one makes every feature after it harder. And I keep a strong
              foundation in data structures and algorithms because it&rsquo;s the difference between
              code that works and code that works well.
            </p>
            <p>
              Today, as a Computer Engineering student and backend developer, I&rsquo;m focused on
              Spring Boot, secure API design, and the distributed-systems concepts — microservices,
              caching, message queues — that sit one layer above where I am now.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-2">
          <Card className="h-full">
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-500">
              What defines the work
            </p>
            <ul className="space-y-4">
              {traits.map((t) => (
                <li key={t.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-primary-400">
                    <t.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-zinc-300">{t.label}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
