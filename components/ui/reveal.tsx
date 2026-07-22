"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-zinc-400">{description}</p>}
    </Reveal>
  );
}
