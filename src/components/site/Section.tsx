import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, subtitle, invert }: { eyebrow: string; title: ReactNode; subtitle?: string; invert?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <div className={`text-xs uppercase tracking-[0.4em] ${invert ? "text-maroon" : "text-gold"}`}>{eyebrow}</div>
      <h2 className={`mt-3 font-display text-4xl md:text-5xl font-bold ${invert ? "text-ink" : "text-beige"}`}>{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      {subtitle && <p className={`mt-4 text-sm md:text-base ${invert ? "text-ink/70" : "text-beige/70"}`}>{subtitle}</p>}
    </motion.div>
  );
}

export function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}