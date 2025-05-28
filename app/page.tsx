'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textTranslate = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/hero-reel.mp4"
        />
        <motion.div
          className="z-10 text-center px-4"
          style={{ opacity: textOpacity, y: textTranslate }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building the AI Layer for Your Business
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-xl mx-auto">
            I help startups and SMBs unlock operational efficiency through Python, data pipelines, and automation.
          </p>
        </motion.div>
      </section>

      {/* SCROLL SECTION */}
      <section className="bg-primary text-white py-32 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4">
            From Data Chaos to Business Clarity
          </h2>
          <p className="text-lg text-gray-400">
            Let's transform raw data into clean insights and automation workflows—custom-fit for your growth stage.
          </p>
        </div>
      </section>
    </main>
  );
}