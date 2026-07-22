import { SectionHeading } from "@/components/ui/reveal";
import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="section-shell py-28">
      <SectionHeading
        eyebrow="04 · Selected Work"
        title="Featured projects"
        description="Four projects spanning secure backend systems, Android, and the web — each expandable into a full case study."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
