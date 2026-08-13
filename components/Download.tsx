"use client";

import { motion } from "framer-motion";
import { Download as DownloadIcon, Shield, Lock, Zap } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";

interface Reason {
  number: string;
  title: string;
  description: string;
}

interface InstallStep {
  number: string;
  title: string;
  description: string;
}

export default function Download() {
  const { t } = useLanguage();

  const reasonIcons = [Lock, Shield, Zap];

  return (
    <section
      id="download"
      className="relative py-40 md:py-56 bg-obsidian-950 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-crimson/[0.06] rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-crimson/[0.04] rounded-full blur-[150px] pointer-events-none"></div>

      {/* Top frame line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-crimson/40 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className="w-12 h-[1px] bg-crimson"></span>
          <span className="text-xs tracking-[0.3em] uppercase text-titanium-gray">
            {t.download.label}
          </span>
          <span className="w-12 h-[1px] bg-crimson"></span>
        </motion.div>

        {/* Main declaration */}
        <motion.h2
          key={t.download.title}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-titanium-light text-center max-w-4xl mx-auto mb-8"
        >
          {t.download.title}{" "}
          <span className="italic text-crimson text-glow">
            {t.download.titleAccent}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-titanium-gray text-center max-w-2xl mx-auto mb-24 md:mb-32 leading-relaxed"
        >
          {t.download.subtitle}
        </motion.p>

        {/* The 3 Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
          {t.download.reasons.map((reason: Reason, i: number) => {
            const Icon = reasonIcons[i];
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1 * i, ease: "easeOut" }}
                className="group relative p-8 md:p-10 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-crimson/30 hover:bg-crimson/[0.02] transition-all duration-500"
              >
                <span className="absolute top-6 right-6 font-serif text-sm text-titanium-gray">
                  {reason.number}
                </span>

                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-crimson/30 bg-crimson/5 group-hover:border-crimson group-hover:bg-crimson/10 transition-all duration-500">
                  <Icon size={20} className="text-crimson" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-titanium-light mb-4 leading-tight">
                  {reason.title}
                </h3>

                <p className="text-titanium-gray leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-24 md:mb-32"
        >
          <span className="w-32 h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent"></span>
        </motion.div>

        {/* Installation Protocol Title */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-titanium-light text-center mb-16 md:mb-20"
        >
          {t.download.installTitle}
        </motion.h3>

        {/* Install Steps */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 md:mb-24 max-w-5xl mx-auto">
          {t.download.installSteps.map((step: InstallStep, i: number) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="text-center relative"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full border border-crimson/40 bg-crimson/5">
                <span className="font-serif text-2xl text-crimson">
                  {step.number}
                </span>
              </div>

              <h4 className="font-serif text-2xl text-titanium-light mb-3">
                {step.title}
              </h4>

              <p className="text-titanium-gray text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {i < t.download.installSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[1px] bg-gradient-to-r from-crimson/30 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Download Button + Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <a
            href="/familio.apk"
            download="Familio-v1.0.0.apk"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-crimson hover:bg-crimson-hover text-white text-base tracking-widest uppercase rounded-full transition-all duration-500 red-glow hover:scale-105 mb-6 cursor-pointer"
          >
            <DownloadIcon size={22} strokeWidth={1.5} />
            {t.download.downloadBtn}

            <span className="absolute inset-0 rounded-full border border-crimson animate-ping opacity-20 pointer-events-none"></span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs tracking-widest uppercase text-titanium-gray mb-8">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-crimson"></span>
              {t.download.version}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-crimson"></span>
              {t.download.size}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-crimson"></span>
              {t.download.security}
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-serif italic text-titanium-gray text-sm md:text-base text-center max-w-xl mx-auto leading-relaxed"
          >
            {t.download.finalNote}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}