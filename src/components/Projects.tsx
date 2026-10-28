"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "BoviSoft",
    description:
      "Plataforma para la gestión del sector ganadero. Permite administrar fincas, potreros y animales, además de centralizar información para apoyar la toma de decisiones.",
    tags: ["Laravel", "PHP", "Vue", "MySQL"],
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/projects/bovisoft-logo.png`,
    github: "https://github.com/joseam06/Bovisoft",
  },
  {
    number: "02",
    title: "Hidrocrops Web",
    description:
      "Herramienta web orientada a la enseñanza de cultivos hidropónicos en entornos urbanos, facilitando el acceso a información técnica y los procesos de implementación.",
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    image: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/projects/hidrocrops-logo1.png`,
    github: "https://github.com/joseam06/Hidrocrops-Web",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden border-t border-white/[0.05] px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* ENCABEZADO */}
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
              02 — Proyectos
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Cosas que he{" "}
              <span className="text-white/30">
                construido.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-white/35">
              Una selección de proyectos desarrollados durante
              mi formación y crecimiento como Ingeniero de
              Sistemas.
            </p>
          </div>
        </motion.div>

        {/* GRID DE PROYECTOS */}
        <div className="grid gap-5 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.035]"
            >

              {/* ÁREA DEL LOGO */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/[0.06] bg-white/[0.02]">

                {/* Círculos decorativos */}
                <div className="absolute h-64 w-64 rounded-full border border-white/[0.035] transition duration-700 group-hover:scale-125" />

                <div className="absolute h-44 w-44 rounded-full border border-white/[0.035]" />

                {/* Número */}
                <span className="absolute right-6 top-5 text-5xl font-bold text-white/[0.035] transition duration-500 group-hover:text-white/[0.07]">
                  {project.number}
                </span>

                {/* Logo */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -2,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="relative z-10 flex h-40 w-64 items-center justify-center"
                >
                  <Image
                    src={project.image}
                    alt={`Logo de ${project.title}`}
                    width={280}
                    height={160}
                    className="max-h-36 w-auto max-w-[240px] object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* INFORMACIÓN */}
              <div className="p-7 sm:p-8">

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Proyecto
                </span>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {project.description}
                </p>

                {/* TECNOLOGÍAS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GITHUB */}
                <div className="mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    Ver en GitHub

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
}
