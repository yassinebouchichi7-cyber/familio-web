"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

interface Pillar {
  number: string;
  title: string;
  description: string;
  points: string[];
}

export default function Features() {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="features"
      className="relative py-40 md:py-56 bg-obsidian-950 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson/[0.04] rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-crimson/[0.04] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-crimson"></span>
            <span className="text-xs tracking-[0.3em] uppercase text-titanium-gray">
              {t.features.label}
            </span>
          </motion.div>

          <motion.h2
            key={t.features.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl leading-[1.05] text-titanium-light"
          >
            {t.features.title}{" "}
            <span className="italic text-crimson">{t.features.titleAccent}</span>
          </motion.h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {t.features.pillars.map((pillar: Pillar, index: number) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.15 * index, ease: "easeOut" }}
              className="group grid md:grid-cols-12 gap-8 md:gap-12 items-start pb-24 border-b border-white/5"
            >
              <div className="md:col-span-2">
                <span className="font-serif text-6xl md:text-7xl text-crimson/40 group-hover:text-crimson transition-colors duration-700">
                  {pillar.number}
                </span>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-serif text-3xl md:text-5xl text-titanium-light leading-tight mb-6 group-hover:text-glow transition-all duration-700">
                  {pillar.title}
                </h3>
                <p className="text-titanium-gray text-lg leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="md:col-span-4 space-y-4">
                {pillar.points.map((point: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5 shrink-0">
                      <Check
                        size={14}
                        className="text-crimson"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-titanium-light text-sm md:text-base">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}