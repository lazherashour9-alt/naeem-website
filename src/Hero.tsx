import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { getContent } from "./content";
import { ChevronDown } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const { language } = useLanguage();
  const content = getContent(language);
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 220]);
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.12]);
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.92]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 18, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 18, mass: 0.6 });

  const gradient = useMotionTemplate`
    radial-gradient(circle at ${springX}px ${springY}px, rgba(255,255,255,0.18), transparent 28%)
  `;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Background image with parallax */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ backgroundImage: "url(/hero-custom.png)" }}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_28%),linear-gradient(to_bottom,rgba(3,7,18,0.18),rgba(3,7,18,0.7)_35%,rgba(3,7,18,0.9))]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.12),transparent_25%,transparent_75%,rgba(250,204,21,0.10))]" />
      <div className="absolute inset-0 bg-black/35" />

      {/* Mouse-follow gradient */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: gradient }}
      />

      {/* Floating colored blobs */}
      <div className="absolute -top-16 left-[-6rem] h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute top-1/3 right-[-5rem] h-72 w-72 rounded-full bg-amber-300/15 blur-3xl" />
      <div className="absolute bottom-[-6rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/8 blur-3xl" />

      {/* Small animated shapes */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[18%] hidden h-20 w-20 rounded-full border border-white/20 md:block"
        animate={mounted ? { y: [0, -12, 0], x: [0, 8, 0] } : {}}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[18%] right-[10%] hidden h-28 w-28 text-white/15 md:block"
        viewBox="0 0 120 120"
        fill="none"
        animate={mounted ? { rotate: 360 } : {}}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M60 7 L74 46 L113 60 L74 74 L60 113 L46 74 L7 60 L46 46 Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </motion.svg>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-balance text-5xl font-black tracking-tight text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-b from-white via-white to-white/75 bg-clip-text text-transparent">
            {content.hero.title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-white/80 drop-shadow-md sm:text-lg md:text-xl"
        >
          {content.hero.subtitle}
        </motion.p>

        <div className="mt-10 flex justify-center">
          <motion.button
            type="button"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white px-8 py-3.5 font-semibold text-slate-950 shadow-[0_18px_60px_rgba(255,255,255,0.18)] transition-shadow duration-300 hover:shadow-[0_22px_80px_rgba(255,255,255,0.26)]"
          >
            <span className="relative z-10">{content.hero.cta}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-white via-white to-amber-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>
        </div>
      </div>

      {/* Scroll chevron */}
      <motion.button
        type="button"
        aria-label="Scroll to products"
        onClick={() =>
          document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white/90 backdrop-blur-md shadow-lg"
        animate={mounted ? { y: [0, 8, 0] } : {}}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
      >
        <ChevronDown size={26} />
      </motion.button>
    </section>
  );
}