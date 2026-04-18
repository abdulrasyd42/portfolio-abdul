// app/sections/HeroSection.tsx
"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { PERSONAL } from "../lib/data"

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 overflow-hidden relative"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* ── Dekorasi background ── */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ border: "60px solid var(--accent)" }}
      />
      <div
        className="absolute bottom-20 -left-20 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{ backgroundColor: "var(--accent)" }}
      />

      {/* ── Layout utama: 2 kolom ── */}
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* ── Kolom kiri: teks ── */}
        <div>
          {/* Badge available */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
              Available for work
            </span>
          </motion.div>

          {/* Headline besar */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="leading-none mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--text)",
            }}
          >
            FRONTEND<br />
            <span style={{
              WebkitTextStroke: "2px var(--accent)",
              color: "transparent"
            }}>
              DEVELOPER
            </span><br />
            & UI/UX
          </motion.h1>

          {/* Nama + deskripsi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <p
              className="text-sm mb-1"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--text-muted)",
              }}
            >
              — Hi, I&apos;m
            </p>
            <span
              className="text-5xl tracking-wider"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                color: "var(--accent)",
              }}
            >
              {PERSONAL.name}
            </span>
            <p
              className="mt-4 text-base leading-relaxed max-w-md"
              style={{ color: "var(--text-muted)" }}
            >
              {PERSONAL.bio}
            </p>
          </motion.div>

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--accent)", color: "#000" }}
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm border-2 transition-all hover:opacity-80"
              style={{
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* ── Kolom kanan: foto dengan efek diagonal ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex items-center justify-center relative"
        >
          {/* Kotak aksen di belakang foto (efek offset) */}
          <div
            className="absolute w-72 h-80 rounded-3xl"
            style={{
              backgroundColor: "var(--accent)",
              opacity: 0.15,
              transform: "translate(16px, 16px) rotate(3deg)",
            }}
          />

          {/* Border aksen di belakang foto */}
          <div
            className="absolute w-72 h-80 rounded-3xl border-2"
            style={{
              borderColor: "var(--accent)",
              transform: "translate(8px, 8px) rotate(1.5deg)",
              opacity: 0.5,
            }}
          />

          {/* Container foto utama dengan clip-path diagonal */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-72 h-80 overflow-hidden rounded-3xl"
            style={{
              /*
                clip-path polygon:
                - Titik kiri-atas
                - Titik kanan-atas (lebih rendah 10%)
                - Titik kanan-bawah
                - Titik kiri-bawah (lebih tinggi 10%)
                Efeknya: foto terpotong diagonal di tepi kanan & kiri
              */
              clipPath: "polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)",
              border: "2px solid var(--accent)",
            }}
          >
            <Image
              src="/pp2.png"
              alt={`Foto ${PERSONAL.name}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 0vw, 320px"
              priority
            />

            {/* Overlay gradient bawah */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, var(--bg) 0%, transparent 40%)",
                opacity: 0.4,
              }}
            />
          </motion.div>

          {/* Badge floating — "Open to Work" */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 300 }}
            className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl border-2 shadow-lg"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--accent)",
            }}
          >
            <p
              className="text-xs font-semibold"
              style={{ color: "var(--accent)" }}
            >
              ✦ Open to Work
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {PERSONAL.location}
            </p>
          </motion.div>

          {/* Badge floating — tech stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 300 }}
            className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl border shadow-lg"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-xs"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--text-muted)",
              }}
            >
              React · Next.js · Figma
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}