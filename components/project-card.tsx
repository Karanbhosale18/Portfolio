"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown, Boxes } from "lucide-react";
import { Project } from "@/lib/constants";
import { Badge } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card group overflow-hidden shadow-card"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-primary-500/15 via-secondary-500/10 to-accent-500/10">
        <div className="absolute inset-0 grid-bg opacity-40 transition-transform duration-700 group-hover:scale-110" />
        {project.hero && (
          <span className="absolute right-4 top-4 rounded-full border border-primary-400/40 bg-primary-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary-300">
            Hero Project
          </span>
        )}
        <Boxes className="relative h-10 w-10 text-zinc-600 transition-transform duration-500 group-hover:scale-110 group-hover:text-primary-400" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline">
                <Github className="h-3.5 w-3.5" />
                GitHub
              </Button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline">
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </Button>
            </a>
          )}
          <Button size="sm" variant="ghost" onClick={() => setOpen((v) => !v)}>
            Case Study
            <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
          </Button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-5 border-t border-white/[0.06] pt-5">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary-400">
                    Features
                  </p>
                  <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-zinc-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-secondary-400">
                    Challenges
                  </p>
                  <ul className="space-y-1.5">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-2 text-sm text-zinc-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-400">
                    Architecture Overview
                  </p>
                  <p className="rounded-lg border border-white/[0.06] bg-black/20 p-4 font-mono text-[13px] leading-relaxed text-zinc-400">
                    {project.architecture}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
