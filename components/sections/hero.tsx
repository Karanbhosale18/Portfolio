"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, FolderGit2 } from "lucide-react";
import { ROLES, SITE, HERO_STACK } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const HeroScene = dynamic(() => import("@/components/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
});

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, sub + 1));
        setSub((s) => s + 1);
        if (sub + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, sub - 1));
        setSub((s) => s - 1);
        if (sub - 1 === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words]);

  return text;
}

export function Hero() {
  const roleText = useTypewriter(ROLES);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute inset-0 bg-hero-glow" />

      <div className="section-shell relative grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-6 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Available for backend engineering roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&rsquo;m<br />
            <span className="gradient-text">Karan Bhosale.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 h-9 font-mono text-lg text-zinc-300 sm:text-xl"
          >
            <span className="text-zinc-500">$</span> {roleText}
            <span className="ml-0.5 inline-block w-[2px] animate-blink bg-primary-400 align-middle" style={{ height: "1.1em" }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400"
          >
            I build scalable backend applications, secure REST APIs, and modern web applications
            using Java, Spring Boot, and contemporary software engineering practices. Passionate
            about solving real-world problems through clean architecture and continuous learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href={SITE.resumePath} download>
              <Button size="lg">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline">
                <FolderGit2 className="h-4 w-4" />
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="ghost">
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 overflow-hidden"
          >
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-zinc-600">
              Core stack
            </p>
            <div className="flex flex-wrap gap-2">
              {HERO_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <HeroScene />

          <div className="animate-float absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-canvas-card/90 shadow-card backdrop-blur-xl">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
              <span className="terminal-dot bg-red-500/70" />
              <span className="terminal-dot bg-yellow-500/70" />
              <span className="terminal-dot bg-green-500/70" />
              <span className="ml-2 font-mono text-[11px] text-zinc-500">api-request.sh</span>
            </div>
            <div className="space-y-1.5 px-4 py-4 font-mono text-[11px] leading-relaxed text-zinc-400">
              <p><span className="text-accent-400">POST</span> /api/v1/auth/login</p>
              <p className="text-zinc-600">Authorization: Bearer eyJhbGciOi...</p>
              <p className="text-primary-400">→ 200 OK · 42ms</p>
              <p>{"{"} <span className="text-secondary-400">&quot;role&quot;</span>: <span className="text-green-400">&quot;ADMIN&quot;</span> {"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
