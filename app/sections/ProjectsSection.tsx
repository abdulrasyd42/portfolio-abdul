// app/sections/ProjectsSection.tsx
"use client"

import { useState } from "react"
import Image from "next/image"     // ← Komponen gambar yang dioptimasi Next.js
import Link from "next/link"        // ← Komponen link Next.js
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { FadeIn } from "../components/FadeIn"
import { PROJECTS } from "../lib/data"

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-card)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs font-['JetBrains_Mono'] tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--accent)" }}>
            03 / Projects
          </p>
          <h2 className="font-['Bebas_Neue'] text-6xl mb-14" style={{ color: "var(--text)" }}>
            Selected <span style={{ color: "var(--accent)" }}>work.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl overflow-hidden border"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
              >
                {/* Gambar — menggunakan next/image untuk optimasi otomatis */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Badge kategori */}
                  <span
                    className="absolute top-3 left-3 text-xs font-['JetBrains_Mono'] px-3 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#fff" }}
                  >
                    {project.category}
                  </span>
                  {/* Overlay tombol saat hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
                    style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
                    <Link href={project.demo} target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm"
                      style={{ backgroundColor: "var(--accent)", color: "#000" }}>
                      <ExternalLink size={14} /> Demo
                    </Link>
                    <Link href={project.github} target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm border"
                      style={{ borderColor: "#fff", color: "#fff" }}>
                      <Github size={14} /> GitHub
                    </Link>
                  </div>
                </div>

                {/* Konten */}
                <div className="p-6">
                  <h3 className="font-['Bebas_Neue'] text-2xl mb-2" style={{ color: "var(--text)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t}
                        className="text-xs font-['JetBrains_Mono'] px-2.5 py-1 rounded border"
                        style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}