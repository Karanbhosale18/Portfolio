"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { ACHIEVEMENTS } from "@/lib/constants";

function Stat({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v).toString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, value, { duration: 1.6, ease: "easeOut" });
      const unsub = rounded.on("change", setDisplay);
      return () => {
        controls.stop();
        unsub();
      };
    }
  }, [inView, value, motionVal, rounded]);

  return (
    <div className="text-center">
      <p ref={ref} className="font-display text-4xl font-semibold gradient-text sm:text-5xl">
        {display}+
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">{label}</p>
    </div>
  );
}

export function Achievements() {
  return (
    <section className="border-y border-white/[0.06] bg-gradient-to-b from-white/[0.015] to-transparent py-20">
      <div className="section-shell grid grid-cols-2 gap-8 sm:grid-cols-4">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.label} delay={i * 0.08}>
            <Stat label={a.label} value={a.value} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
