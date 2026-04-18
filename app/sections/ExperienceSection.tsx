// app/sections/ExperienceSection.tsx
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"
import { FadeIn } from "../components/FadeIn"

const EXPERIENCE = [
  {
    type: "work" as const,
    period: "Februari 2024 — Juli 2024",
    role: "UI/UX Designer Intern",
    company: "PT. Tiga Serangkai Pustaka Mandiri",
    desc: "Membuat Redesain wireframe, mockup, dan prototype untuk website Tisera.id",
    tags: ["Figma", "UI/UX Design", "E-Commerce", "Prototyping"],
  },
  {
    type: "education" as const,
    period: "2021 — 2025",
    role: "S.Kom — Informatika",
    company: "Universitas Tiga Serangkai",
    desc: "Lulus dengan pujian (IPK 3.51). Thesis tentang Aplikasi Sistem Rekomendasi Hotel Berbasis Web Dengan Metode Content-Based Filtering.",
    tags: ["IPK 3.51", "Informatika", "Education"],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-['JetBrains_Mono'] tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--accent)" }}>
            04 / Experience
          </p>
          <h2 className="font-['Bebas_Neue'] text-6xl mb-14" style={{ color: "var(--text)" }}>
            My <span style={{ color: "var(--accent)" }}>journey.</span>
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Garis vertikal */}
          <div className="absolute left-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }} />

          <div className="space-y-4">
            {EXPERIENCE.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="left">
                <div className="flex gap-10">
                  {/* Node/titik pada timeline */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                    className="w-12 h-12 rounded-xl border-2 flex items-center justify-center flex-shrink-0 z-10"
                    style={{
                      borderColor: item.type === "work" ? "var(--accent)" : "var(--border)",
                      backgroundColor: "var(--bg-card)",
                    }}
                  >
                    {item.type === "work"
                      ? <Briefcase size={16} style={{ color: "var(--accent)" }} />
                      : <GraduationCap size={16} style={{ color: "var(--text-muted)" }} />
                    }
                  </motion.div>

                  {/* Kartu konten */}
                  <div
                    className="flex-1 p-6 rounded-2xl border mb-4"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
                  >
                    <span className="text-xs font-['JetBrains_Mono'] tracking-wider"
                      style={{ color: "var(--accent)" }}>
                      {item.period}
                    </span>
                    <h3 className="font-semibold text-lg mt-1" style={{ color: "var(--text)" }}>
                      {item.role}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                      {item.company}
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag}
                          className="text-xs font-['JetBrains_Mono'] px-2.5 py-1 rounded border"
                          style={{
                            borderColor: item.type === "work" ? "var(--accent)" : "var(--border)",
                            color: item.type === "work" ? "var(--accent)" : "var(--text-muted)",
                          }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}