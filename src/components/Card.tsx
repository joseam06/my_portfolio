"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const technologies = [
  {
    name: "React",
    icon: "devicon:react",
    position: "top-[8%] left-1/2 -translate-x-1/2",
  },
  {
    name: "Next.js",
    icon: "devicon:nextjs",
    position: "top-[25%] right-[5%]",
  },
  {
    name: "Laravel",
    icon: "devicon:laravel",
    position: "bottom-[25%] right-[5%]",
  },
  {
    name: "Python",
    icon: "devicon:python",
    position: "bottom-[8%] left-1/2 -translate-x-1/2",
  },
  {
    name: "MySQL",
    icon: "devicon:mysql",
    position: "bottom-[25%] left-[5%]",
  },
  {
    name: "Git",
    icon: "devicon:git",
    position: "top-[25%] left-[5%]",
  },
];

export default function Card() {
  return (
    <div className="relative h-[min(420px,90vw)] w-[min(420px,90vw)] max-w-full">

      {/* Glow central */}
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      {/* Órbita exterior */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[10%] rounded-full border border-white/[0.06]"
      />

      {/* Órbita interior */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[22%] rounded-full border border-white/[0.04]"
      />

      {/* Líneas */}
      <div className="absolute left-1/2 top-[10%] h-[80%] w-px -translate-x-1/2 bg-white/[0.025]" />

      <div className="absolute left-[10%] top-1/2 h-px w-[80%] -translate-y-1/2 bg-white/[0.025]" />

      {/* Centro */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 max-[640px]:h-24 max-[640px]:w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0c0c0c] shadow-2xl"
      >
        <img
  src="/my_portfolio/images/projects/yo.png"
  alt="José Avilés"
  className="h-full w-full rounded-full object-cover"
/>
      </motion.div>

      {/* Tecnologías */}
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.8 + index * 0.12,
          }}
          className={`absolute z-20 ${tech.position}`}
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="group relative"
          >

            {/* Logo */}
            <div
              className="
                flex h-14 w-14 cursor-default
                items-center justify-center
                rounded-2xl
                border border-white/10
                bg-[#0b0b0b]/90
                shadow-xl
                backdrop-blur-md
                transition-all duration-300

                group-hover:border-white/25
                group-hover:bg-white/[0.07]
                group-hover:scale-110
              "
            >
              <Icon
                icon={tech.icon}
                width={32}
                height={32}
              />
            </div>

            {/* Nombre */}
            <div
              className="
                pointer-events-none
                absolute left-1/2 top-full
                mt-2
                -translate-x-1/2
                whitespace-nowrap
                rounded-full
                border border-white/10
                bg-[#0a0a0a]
                px-3 py-1.5
                opacity-0
                shadow-xl
                transition-all duration-300
                group-hover:opacity-100
              "
            >
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/70">
                {tech.name}
              </span>
            </div>

          </motion.div>
        </motion.div>
      ))}

      {/* Puntos decorativos */}
      <motion.span
        animate={{
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-[18%] top-[15%] h-1 w-1 rounded-full bg-white"
      />

      <motion.span
        animate={{
          opacity: [0.7, 0.2, 0.7],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute bottom-[18%] right-[18%] h-1 w-1 rounded-full bg-white"
      />

      <span className="absolute right-[25%] top-[12%] h-1 w-1 rounded-full bg-white/20" />

      <span className="absolute bottom-[14%] left-[25%] h-1 w-1 rounded-full bg-white/20" />

    </div>
  );
}