"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const roles = [
  "Ingeniero de Sistemas.",
  "Desarrollador de Software.",
  "Desarrollador Backend.",
  "Desarrollo aplicaciones web.",
  "Construyo soluciones de software.",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = deleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const nextText = currentRole.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === currentRole) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const nextText = currentRole.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Gradiente */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

        {/* Líneas */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.035]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.035]" />

        <div className="absolute left-0 top-[18%] h-px w-full bg-white/[0.025]" />
        <div className="absolute left-0 bottom-[18%] h-px w-full bg-white/[0.025]" />

        {/* Círculos */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.02]"
        />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">

          {/* ========================= */}
          {/* COLUMNA IZQUIERDA */}
          {/* ========================= */}

          <div>

            {/* Etiqueta superior */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-white/40" />

              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                Ingeniero de Sistemas
              </span>
            </motion.div>

            {/* Nombre */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="max-w-5xl text-6xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-9xl"
            >
              José
              <br />

              <span className="text-white/25">
                Avilés M.
              </span>
            </motion.h1>

            {/* Typing */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-10 flex min-h-[32px] items-center"
            >
              <span className="text-lg text-white/55 sm:text-xl">
                {text}
              </span>

              <motion.span
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="ml-1 h-5 w-px bg-white/60"
              />
            </motion.div>

            {/* Descripción */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base"
            >
              Desarrollo soluciones de software y exploro el potencial
              de los datos y la inteligencia artificial para transformar
              ideas en herramientas útiles.
            </motion.p>

            {/* Botones */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="https://github.com/joseam06"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                GitHub

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/jose-miguel-aviles-mogollon"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                LinkedIn

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </motion.div>

          </div>

          {/* ========================= */}
          {/* COLUMNA DERECHA - CARD */}
          {/* ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="flex min-h-[420px] items-center justify-center"
          >
            <Card />
          </motion.div>

        </div>

        {/* Indicador inferior */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="absolute right-0 top-[70vh] hidden items-center gap-3 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            Scroll para explorar
          </span>

          <motion.span
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-white/30"
          >
            ↓
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
}