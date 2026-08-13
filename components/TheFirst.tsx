"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/contexts/LanguageContext";

interface Stat {
  number: string;
  label: string;
}

export default function TheFirst() {
  const { t } = useLanguage();

  return (
    <section className="relative py-40 md:py-56 bg-obsidian-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-crimson/[0.06] rounded-full blur-[180px]"></div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-crimson/40 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-crimson/40 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-crimson/30 backdrop-blur-sm bg-crimson/[0.03] mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-crimson animate-pulse"></span>
          <span className="text-xs tracking-[0.3em] uppercase text-titanium-light">
            {t.theFirst.label}
          </span>
        </motion.div>

        <motion.h2
          key={t.theFirst.title}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-titanium-light mb-16 max-w-5xl mx-auto"
        >
          {t.theFirst.preTitle}{" "}
          <span className="italic text-crimson text-glow">
            {t.theFirst.title}
          </span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6 mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-titanium-gray leading-relaxed"
          >
            {t.theFirst.description1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-titanium-light leading-relaxed"
          >
            {t.theFirst.description2}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto mb-16"
        >
          {t.theFirst.stats.map((stat: Stat, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.15 }}
              className="flex flex-col items-center group"
            >
              <span className="font-serif text-5xl md:text-7xl text-crimson mb-2 group-hover:scale-110 transition-transform duration-500">
                {stat.number}
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-titanium-gray text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent"></span>
          <span className="font-serif italic text-titanium-gray text-sm md:text-base tracking-wide">
            {t.theFirst.signature}
          </span>
        </motion.div>
      </div>
    </section>
  );
}