"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Language } from "@/lib/translations";

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "AR" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-obsidian-950 border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-crimson/[0.05] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Familio"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-2xl tracking-wide text-titanium-light">
                Familio
              </span>
            </div>
            <p className="font-serif italic text-titanium-gray text-lg max-w-sm leading-relaxed mb-8">
              {t.footer.tagline}
            </p>

            {/* Language switcher */}
            <div className="inline-flex items-center gap-1 px-1 py-1 border border-white/10 rounded-full">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1 text-[11px] tracking-widest uppercase rounded-full transition-all duration-300 ${
                    lang === l.code
                      ? "bg-crimson text-white"
                      : "text-titanium-gray hover:text-titanium-light"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Navigate column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-titanium-gray mb-6">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#manifesto"
                  className="font-serif text-lg text-titanium-light hover:text-crimson transition-colors duration-300"
                >
                  {t.footer.links.philosophy}
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="font-serif text-lg text-titanium-light hover:text-crimson transition-colors duration-300"
                >
                  {t.footer.links.features}
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="font-serif text-lg text-titanium-light hover:text-crimson transition-colors duration-300"
                >
                  {t.footer.links.install}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-titanium-gray mb-6">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-titanium-light hover:text-crimson transition-colors duration-300"
                >
                  {t.footer.links.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-titanium-light hover:text-crimson transition-colors duration-300"
                >
                  {t.footer.links.terms}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2"
          >
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-titanium-gray mb-6">
              {t.footer.resourcesTitle}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@familio.app"
                  className="text-sm text-titanium-light hover:text-crimson transition-colors duration-300"
                >
                  {t.footer.links.support}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
        ></motion.div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase text-titanium-gray">
            © {currentYear} Familio. {t.footer.copyright}
          </p>

          <p className="font-serif italic text-sm text-titanium-gray">
            Est. 2026 — {t.footer.signature}
          </p>
        </div>
      </div>

      {/* Massive Familio wordmark (decorative) */}
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-center py-8 md:py-12"
        >
          <span className="font-serif italic text-[15vw] leading-none text-titanium-light select-none pointer-events-none">
            Familio
          </span>
        </motion.div>
      </div>
    </footer>
  );
}