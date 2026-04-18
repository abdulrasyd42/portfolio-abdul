// app/components/ThemeProvider.tsx
"use client"

// createContext = membuat "wadah" data global
// useContext = mengambil data dari wadah tersebut
import { createContext, useContext, useEffect, useState } from "react"

// Tipe tema yang tersedia
type Theme = "light" | "dark"

// Tipe data yang tersimpan dalam context
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// Buat context dengan nilai default
const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
})

// Provider = komponen pembungkus yang menyediakan data theme
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Tandai bahwa komponen sudah "terpasang" di browser
    setMounted(true)

    // Cek apakah user pernah simpan preferensi sebelumnya
    const saved = localStorage.getItem("theme") as Theme
    // Kalau belum, ikuti setting sistem (gelap/terang)
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = saved ?? (systemDark ? "dark" : "light")

    setTheme(initial)
    // Tambah/hapus class "dark" di tag <html>
    document.documentElement.classList.toggle("dark", initial === "dark")
  }, [])

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("theme", next) // Simpan pilihan
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  // Jangan render apapun sampai client siap
  // (mencegah flash/kedip saat pertama load)
  if (!mounted) return null

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook agar mudah dipakai di komponen lain
export const useTheme = () => useContext(ThemeContext)