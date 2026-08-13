"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian-950">
      {/* Ambient Red Spotlight Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-crimson/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      ></div>

      {/* Floating Logo Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
      >
        <Image src="/logo.png" alt="" fill className="object-contain" priority />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm bg-white/[0.02] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse"></span>
          <span className="text-xs tracking-[0.2em] uppercase text-titanium-gray">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          key={t.hero.titleLine1} // re-trigger animation on language change
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className={`font-serif leading-[0.95] tracking-tight text-titanium-light mb-6 ${
            isRTL
              ? "text-5xl md:text-7xl lg:text-8xl"
              : "text-6xl md:text-8xl lg:text-9xl"
          }`}
        >
          {t.hero.titleLine1} <br />
          {t.hero.titleLine2} <br />
          <span className="italic text-glow">{t.hero.titleLine3}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          key={t.hero.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl text-titanium-gray max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#download"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-crimson hover:bg-crimson-hover text-white text-sm tracking-widest uppercase rounded-full transition-all duration-500 red-glow hover:scale-105"
          >
            <Download size={18} strokeWidth={1.5} />
            {t.hero.ctaPrimary}
          </a>

          <a
            href="#manifesto"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-white/30 text-titanium-light text-sm tracking-widest uppercase rounded-full transition-all duration-500 backdrop-blur-sm"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-titanium-gray">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-titanium-gray" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}