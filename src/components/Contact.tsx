"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-white/[0.05] px-6 py-32"
    >
      {/* Decoración */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.025]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Etiqueta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-white/30" />

          <span className="text-xs uppercase tracking-[0.3em] text-white/40">
            04 — Contacto
          </span>

          <span className="h-px w-10 bg-white/30" />
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hablemos.
        </motion.h2>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base"
        >
          Estoy abierto a nuevas oportunidades profesionales,
          proyectos y colaboraciones relacionadas con desarrollo
          de software, datos y tecnología.
        </motion.p>

        {/* Email */}
        <motion.a
          href="mailto:joseavmo60@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="group mx-auto mt-10 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
        >
          <span className="text-sm text-white/60 transition-colors group-hover:text-white">
            joseavmo60@gmail.com
          </span>

          <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
            ↗
          </span>
        </motion.a>

        {/* Redes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex justify-center gap-3"
        >
          <a
            href="https://github.com/joseam06"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/[0.07] px-5 py-2.5 text-xs text-white/40 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/jose-miguel-aviles-mogollon"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/[0.07] px-5 py-2.5 text-xs text-white/40 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
          >
            LinkedIn ↗
          </a>
        </motion.div>

      </div>
    </section>
  );
}