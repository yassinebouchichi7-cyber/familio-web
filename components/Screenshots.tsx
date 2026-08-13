"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useLanguage } from "@/lib/contexts/LanguageContext";

interface Screen {
  file: string;
  title: string;
}

// Helper: clamp value between 0 and 1
const clamp = (n: number) => Math.max(0, Math.min(1, n));

// Caption for each screen
function ScreenCaption({
  screen,
  index,
  total,
  scrollYProgress,
}: {
  screen: Screen;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  // Build strictly increasing offsets
  const inStart = clamp(start - 0.03);
  const inEnd = clamp(start + 0.02);
  const outStart = clamp(end - 0.02);
  const outEnd = clamp(end + 0.03);

  const opacity = useTransform(
    scrollYProgress,
    [inStart, inEnd, outStart, outEnd],
    [0, 1, 1, 0]
  );

  const y = useTransform(scrollYProgress, [start, end], [30, -30]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center pointer-events-none"
    >
      <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-crimson mb-4">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
      <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-titanium-light leading-tight max-w-2xl">
        {screen.title}
      </h3>
    </motion.div>
  );
}

function ScreenImage({
  screen,
  index,
  total,
  scrollYProgress,
}: {
  screen: Screen;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const inStart = clamp(start - 0.02);
  const inEnd = clamp(start + 0.03);
  const outStart = clamp(end - 0.03);
  const outEnd = clamp(end + 0.02);

  const opacity = useTransform(
    scrollYProgress,
    [inStart, inEnd, outStart, outEnd],
    [0, 1, 1, 0]
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 bg-black">
      <Image
        src={screen.file}
        alt={screen.title}
        fill
        quality={100}
        className="object-contain"
        sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 340px"
        priority={index === 0}
      />
    </motion.div>
  );
}

// Progress dot
function ProgressDot({
  start,
  end,
  scrollYProgress,
}: {
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
}) {
  const inStart = clamp(start - 0.02);
  const outEnd = clamp(end + 0.02);

  const width = useTransform(
    scrollYProgress,
    [inStart, start, end, outEnd],
    ["8px", "32px", "32px", "8px"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [inStart, start, end, outEnd],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div
      style={{ width, opacity }}
      className="h-[3px] bg-crimson rounded-full"
    />
  );
}

export default function Screenshots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const screens = t.showcase.screens;
  const totalScreens = screens.length;

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-1, 1]);

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative bg-obsidian-950"
      style={{ height: `${totalScreens * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-crimson/[0.05] rounded-full blur-[200px] pointer-events-none"></div>

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20"
        >
          <span className="w-12 h-[1px] bg-crimson"></span>
          <span className="text-xs tracking-[0.3em] uppercase text-titanium-gray">
            {t.showcase.label}
          </span>
          <span className="w-12 h-[1px] bg-crimson"></span>
        </motion.div>

        {/* Captions */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+280px)] md:-translate-y-[calc(50%+320px)] w-full h-32 z-10">
          {screens.map((screen: Screen, i: number) => (
            <ScreenCaption
              key={i}
              screen={screen}
              index={i}
              total={totalScreens}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Phone */}
        <motion.div
          style={{ y: phoneY, rotate: phoneRotate }}
          className="relative z-20"
        >
          <motion.div
            className="absolute inset-0 rounded-[48px] bg-crimson/20 blur-[100px]"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div
            className="relative w-[260px] md:w-[300px] lg:w-[340px] aspect-[9/19.5]
                       rounded-[44px] border-[8px] border-titanium-dark
                       bg-black p-[3px] shadow-2xl"
            style={{
              boxShadow:
                "0 0 60px 5px rgba(229, 9, 20, 0.15), inset 0 0 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="w-full h-full relative rounded-[38px] overflow-hidden bg-black">
              {screens.map((screen: Screen, i: number) => (
                <ScreenImage
                  key={i}
                  screen={screen}
                  index={i}
                  total={totalScreens}
                  scrollYProgress={scrollYProgress}
                />
              ))}

              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-crimson/10 blur-[40px] rounded-full"></div>
        </motion.div>

        {/* Progress dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {screens.map((_, i: number) => {
            const start = i / totalScreens;
            const end = (i + 1) / totalScreens;
            return (
              <ProgressDot
                key={i}
                start={start}
                end={end}
                scrollYProgress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}