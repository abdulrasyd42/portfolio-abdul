// app/components/FadeIn.tsx
"use client" // ← Wajib untuk komponen yang pakai animasi/interaksi

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// Tipe props yang bisa diterima komponen ini
interface FadeInProps {
  children: React.ReactNode  // Isi/konten apapun
  delay?: number             // Jeda animasi (opsional, default 0)
  direction?: "up" | "down" | "left" | "right" // Arah munculnya
  className?: string         // Class CSS tambahan
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {

  // ref = penanda elemen ini di DOM
  const ref = useRef(null)

  // useInView = true jika elemen sudah terlihat di layar
  const isVisible = useInView(ref, {
    once: true,        // Animasi hanya jalan sekali
    margin: "-80px",   // Mulai animasi 80px sebelum masuk layar
  })

  // Posisi awal sebelum animasi berdasarkan direction
  const startPosition = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      // Posisi awal: tidak terlihat + sedikit bergeser
      initial={{
        opacity: 0,
        ...startPosition[direction]
      }}
      // Posisi akhir: terlihat + kembali ke posisi normal
      animate={isVisible ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Kurva animasi yang smooth
      }}
    >
      {children}
    </motion.div>
  )
}