// app/components/Navbar.tsx
"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react" // Icon dari Lucide
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./ThemeProvider"

// Daftar link navigasi
const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme() // Ambil dari context
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  // Deteksi scroll untuk tambah background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Fungsi scroll halus ke section
  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* ── Navbar utama ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          px-6 transition-all duration-300
          ${scrolled
            ? "py-3 border-b backdrop-blur-lg"
            : "py-5"
          }
        `}
        style={{
          backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 85%, transparent)" : "transparent",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="font-['Bebas_Neue'] text-2xl tracking-widest"
            style={{ color: "var(--text)" }}
          >
            ABD<span style={{ color: "var(--accent)" }}>.</span>
          </button>

          {/* Link navigasi — hanya tampil di layar besar */}
          <nav className="hidden md:flex gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 text-sm font-['JetBrains_Mono']
                 text-[var(--text-muted)] 
                 hover:text-[var(--accent)] 
                 transition-colors duration-300
                 after:absolute after:left-0 after:-bottom-1
                 after:h-[2px] after:w-0
                 after:bg-[var(--accent)]
                 after:transition-all after:duration-300
                 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Tombol kanan: dark mode + hamburger */}
          <div className="flex items-center gap-2">

            {/* Tombol Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2.5 rounded-lg border transition-all hover:scale-110"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {/* AnimatePresence = transisi saat komponen masuk/keluar */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme} // Key berubah → trigger animasi
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate: 90,  opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Hamburger — hanya di mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-lg border"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                backgroundColor: "var(--bg-card)",
              }}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Menu Mobile ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
            style={{ backgroundColor: "var(--bg)" }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.href)}
                className="font-['Bebas_Neue'] text-5xl tracking-widest"
                style={{ color: "var(--text)" }}
              >
                {link.label}
                <span style={{ color: "var(--accent)" }}>.</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}