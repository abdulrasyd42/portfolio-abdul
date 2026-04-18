// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"

// Metadata SEO — muncul di tab browser dan hasil pencarian Google
export const metadata: Metadata = {
  title: "AbdulRasyd — Frontend Developer & UI/UX Designer",
  description: "Portfolio Abdul Rasyd Imawan, Frontend Developer dan UI/UX Designer dari Sragen.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      {/*
        suppressHydrationWarning diperlukan karena theme class ("dark")
        ditambahkan di client, bukan di server — mencegah warning Next.js
      */}
      <body>
        {/* Bungkus semua halaman dengan ThemeProvider */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}