"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "PHP",
    category: "Lenguaje",
  },
  {
    name: "Laravel",
    category: "Backend",
  },
  {
    name: "JavaScript",
    category: "Frontend",
  },
  {
    name: "Node.js",
    category: "Backend",
  },
  {
    name: "Python",
    category: "Datos / IA",
  },
  {
    name: "MySQL",
    category: "Base de datos",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
  },
  {
    name: "Machine Learning",
    category: "Inteligencia Artificial",
  },
  {
    name: "Git",
    category: "Control de versiones",
  },
  {
    name: "Docker",
    category: "DevOps",
  },
  {
    name: "React",
    category: "Actualmente aprendiendo",
  },
];

const stats = [
  {
    value: "Ingeniero de Sistemas",
    label: "Formación profesional",
  },
  {
    value: "Software + Web",
    label: "Área principal",
  },
  {
    value: "IA + Datos",
    label: "Áreas de interés",
  },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden border-t border-white/[0.05] px-6 py-32"
    >
      {/* Decoración */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-white/[0.015] blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-white/30" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              01 — Sobre mí
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Tecnología con propósito,
            <span className="text-white/30">
              {" "}
              soluciones que aportan valor.
            </span>
          </h2>
        </motion.div>

        {/* Contenido */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-white/60">
              Soy <span className="text-white">José Avilés</span>,
              Ingeniero de Sistemas graduado de la Universidad de
              Córdoba, con formación en desarrollo de software,
              análisis de sistemas y aprendizaje automático.
            </p>

            <p className="mt-6 text-base leading-7 text-white/40">
              Durante mi formación he participado en proyectos
              orientados a resolver problemas reales mediante
              herramientas tecnológicas. He trabajado en
              aplicaciones web, gestión de información, análisis
              de datos y modelos de aprendizaje automático.
            </p>

            <p className="mt-6 text-base leading-7 text-white/40">
              Me interesa especialmente combinar desarrollo,
              datos e inteligencia artificial para construir
              soluciones útiles, mantenibles y fáciles de utilizar.
            </p>

            {/* Estadísticas */}
            <div className="mt-12 grid grid-cols-3 border-y border-white/[0.07] py-7">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="border-r border-white/[0.07] px-4 first:pl-0 last:border-r-0"
                >
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-white/30 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tecnologías */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <div className="mb-5">
              <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                Tecnologías
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/[0.15] hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white/80">
                      {tech.name}
                    </span>

                    <span className="text-white/20 transition group-hover:text-white/50">
                      ↗
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-white/30">
                    {tech.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}