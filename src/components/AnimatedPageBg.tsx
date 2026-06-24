"use client";

import React from "react";
import { motion } from "framer-motion";

interface Particle {
  x: string;
  y: string;
  size: number;
  delay: number;
}

interface AnimatedPageBgProps {
  particles?: Particle[];
}

const DEFAULT_PARTICLES: Particle[] = [
  { x: "6%", y: "15%", size: 4, delay: 0 },
  { x: "92%", y: "22%", size: 3, delay: 2 },
  { x: "12%", y: "45%", size: 5, delay: 1.2 },
  { x: "85%", y: "65%", size: 4, delay: 3.1 },
  { x: "20%", y: "82%", size: 3, delay: 0.5 },
  { x: "75%", y: "92%", size: 5, delay: 2.5 }
];

export default function AnimatedPageBg({ particles = DEFAULT_PARTICLES }: AnimatedPageBgProps) {
  return (
    <>
      {/* Scrolling blueprint grid overlay */}
      <div className="absolute inset-0 grid-pattern-animate pointer-events-none opacity-[0.8] z-0" />
      
      {/* Premium Floating Tech Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[8%] -left-32 w-[550px] h-[550px] rounded-full bg-blue-400/[0.14] filter blur-[110px] animate-glow-1" />
        <div className="absolute top-[38%] -right-20 w-[500px] h-[500px] rounded-full bg-indigo-400/[0.12] filter blur-[120px] animate-glow-2" />
        <div className="absolute bottom-[8%] left-[10%] w-[450px] h-[450px] rounded-full bg-sky-400/[0.09] filter blur-[100px] animate-glow-1" />
      </div>

      {/* Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              x: [0, 8, -8, 0],
              opacity: [0, 0.45, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-blue-500/25 filter blur-[0.5px]"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>
    </>
  );
}
