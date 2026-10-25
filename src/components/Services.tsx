"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Desarrollo Web",
    description:
      "Desarrollo de aplicaciones web orientadas a resolver necesidades reales, utilizando tecnologías modernas y buenas prácticas.",
    technologies: ["Laravel", "PHP", "JavaScript", "React"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description:
      "Construcción de sistemas backend, lógica de negocio, APIs y conexión con bases de datos para aplicaciones web.",
    technologies: ["Laravel", "PHP", "Node.js", "MySQL"],
  },
  {
    number: "03",
    title: "Datos & Machine Learning",
    description:
      "Análisis y procesamiento de datos, exploración de información y desarrollo de soluciones basadas en Machine Learning.",
    technologies: ["Python", "Pandas", "Machine Learning"],
  },
  {
    number: "04",
    title: "Soluciones de Software",
    description:
      "Diseño y desarrollo de soluciones de software adaptadas a las necesidades específicas de cada proyecto.",
    technologies: ["Git", "GitHub", "Docker"],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden border-t border-white/[0.05] px-6 py-32"
    >
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
              03 — Servicios
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Lo que puedo{" "}
              <span className="text-white/30">
                hacer.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-white/35">
              Áreas en las que puedo aportar mis conocimientos
              como Ingeniero de Sistemas y desarrollador.
            </p>
          </div>
        </motion.div>

        {/* Servicios */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative py-10 transition-colors duration-500 hover:bg-white/[0.02] md:py-12"
            >
              <div className="grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-center">

                {/* Número */}
                <span className="text-sm font-medium text-white/20 transition-colors duration-300 group-hover:text-white/60">
                  {service.number}
                </span>

                {/* Información */}
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/35">
                    {service.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/35"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Flecha */}
                <div className="hidden md:block">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] text-white/30 transition-all duration-500 group-hover:translate-x-2 group-hover:border-white/20 group-hover:text-white">
                    ↗
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}