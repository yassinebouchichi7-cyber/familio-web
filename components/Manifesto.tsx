"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const words = t.manifesto.statement.split(" ");

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative py-40 md:py-56 bg-obsidian-900 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-crimson/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-12 h-[1px] bg-crimson"></span>
          <span className="text-xs tracking-[0.3em] uppercase text-titanium-gray">
            {t.manifesto.label}
          </span>
        </motion.div>

        <div className="mb-24">
          <h2
            key={t.manifesto.statement}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-titanium-light"
          >
            {words.map((word: string, i: number) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className={`inline-block mx-[0.15em] ${
                  word === t.manifesto.chaosWord
                    ? "italic text-crimson"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-titanium-gray text-lg leading-relaxed mb-6">
              {t.manifesto.problem1}
            </p>
            <p className="text-titanium-gray text-lg leading-relaxed">
              {t.manifesto.problem2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-titanium-light text-lg leading-relaxed mb-6">
              {t.manifesto.solution1}
            </p>
            <p className="text-titanium-light text-lg leading-relaxed">
              {t.manifesto.solution2Part1}{" "}
              <span className="text-crimson italic font-serif">
                {t.manifesto.solution2Part2}
              </span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-24 flex items-center justify-center"
        >
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent"></span>
        </motion.div>
      </div>
    </section>
  );
}