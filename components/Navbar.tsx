"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { Language } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: t.nav.philosophy, href: "#manifesto" },
    { name: t.nav.features, href: "#features" },
    { name: t.nav.install, href: "#download" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "AR" },
  ];

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-xl bg-obsidian-950/70 border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Familio"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-serif text-2xl tracking-wide text-titanium-light">
              Familio
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm tracking-widest uppercase text-titanium-gray hover:text-titanium-light transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-crimson transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 px-1 py-1 border border-white/10 rounded-full backdrop-blur-sm">
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

            <a
              href="#download"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 border border-crimson/50 text-titanium-light text-sm tracking-wider uppercase hover:bg-crimson hover:border-crimson transition-all duration-500 rounded-full"
            >
              {t.nav.cta}
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-titanium-light p-2 -mr-2"
              aria-label="Open menu"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ x: isRTL ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? "-100%" : "100%" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className={`fixed top-0 ${
                isRTL ? "left-0" : "right-0"
              } bottom-0 z-[70] w-[85%] max-w-sm bg-obsidian-950 border-l border-white/5 md:hidden overflow-y-auto`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-crimson/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full p-8">
                <div className="flex items-center justify-between mb-16">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9">
                      <Image
                        src="/logo.png"
                        alt="Familio"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-serif text-xl tracking-wide text-titanium-light">
                      Familio
                    </span>
                  </div>

                  <button
                    onClick={closeMobileMenu}
                    className="text-titanium-light p-2 -mr-2 hover:text-crimson transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} strokeWidth={1.5} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 mb-auto">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + i * 0.1,
                        ease: "easeOut",
                      }}
                      className="group flex items-center justify-between py-4 border-b border-white/5"
                    >
                      <span className="font-serif text-3xl text-titanium-light group-hover:text-crimson transition-colors duration-300">
                        {link.name}
                      </span>
                      <span className="text-titanium-gray text-xs">
                        0{i + 1}
                      </span>
                    </motion.a>
                  ))}
                </nav>

                <motion.a
                  href="#download"
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8 mb-8 inline-flex items-center justify-center px-6 py-4 bg-crimson hover:bg-crimson-hover text-white text-sm tracking-widest uppercase rounded-full transition-all duration-500 red-glow"
                >
                  {t.nav.cta}
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <p className="text-[10px] tracking-[0.3em] uppercase text-titanium-gray mb-4">
                    Language
                  </p>
                  <div className="flex items-center gap-2">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`flex-1 py-3 text-xs tracking-widest uppercase rounded-full transition-all duration-300 ${
                          lang === l.code
                            ? "bg-crimson text-white"
                            : "border border-white/10 text-titanium-gray hover:text-titanium-light hover:border-white/30"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="mt-8 pt-6 border-t border-white/5 text-center"
                >
                  <p className="text-[10px] tracking-[0.3em] uppercase text-titanium-gray">
                    Est. 2026
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}