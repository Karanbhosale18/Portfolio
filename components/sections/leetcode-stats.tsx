"use client";

//import { useEffect, useState } from "react";
import { SectionHeading, Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { SITE, LEETCODE_STATS } from "@/lib/constants";
import { CheckCircle2, Flame } from "lucide-react";
import { motion } from "framer-motion";


const DIFF_META = [
  { key: "easySolved", label: "Easy", color: "#22C55E" },
  { key: "mediumSolved", label: "Medium", color: "#EAB308" },
  { key: "hardSolved", label: "Hard", color: "#EF4444" },
] as const;

export function LeetcodeStats() {
  const stats = LEETCODE_STATS;

  const total = stats.totalSolved;

  return (
      <section id="leetcode" className="section-shell py-28">
      <SectionHeading
        eyebrow="06 · Problem Solving"
        title="LeetCode progress"
        description="A snapshot of my problem-solving journey on LeetCode."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <Card className="flex h-full flex-col items-center justify-center text-center">
            <CheckCircle2 className="mb-3 h-7 w-7 text-primary-400" />
            <p className="font-display text-5xl font-semibold text-white">
              {total}
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Problems Solved
            </p>
          </Card>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <Card className="h-full">
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-zinc-500">
              Difficulty breakdown
            </p>
            <div className="space-y-4">
              {DIFF_META.map((d) => {
                const value = stats[d.key];
                const pct = total > 0 ? Math.min(100, (value / total) * 100) : 0;
                return (
                  <div key={d.key}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-zinc-300">{d.label}</span>
                      <span className="font-mono text-zinc-500">{value}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: d.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-sm text-zinc-400">
              <Flame className="h-4 w-4 text-accent-400" />
              Global ranking: <span className="font-mono text-white">{stats.ranking}</span>
            </div>
          </Card>
        </Reveal>
      </div>
        <div className="mt-6">
          <a
              href={SITE.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-primary-400 px-4 py-2 text-sm font-medium text-primary-400 transition hover:bg-primary-400 hover:text-white"
          >
            View LeetCode Profile
          </a>
        </div>
    </section>
  );
}
