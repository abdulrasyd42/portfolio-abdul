// app/sections/AboutSection.tsx
"use client"

import { FadeIn } from "../components/FadeIn"
import { Code2, Palette, Zap } from "lucide-react"
import { PERSONAL } from "../lib/data"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-card)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Kolom kiri: teks */}
          <div>
            <FadeIn direction="left">
              <p className="text-xs font-['JetBrains_Mono'] tracking-[0.25em] uppercase mb-4"
                style={{ color: "var(--accent)" }}>
                01 / About Me
              </p>
              <h2
                className="font-['Bebas_Neue'] text-6xl leading-tight mb-6"
                style={{ color: "var(--text)" }}
              >
                Designing with{" "}
                <span style={{ color: "var(--accent)" }}>purpose.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                {PERSONAL.bio}
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Dengan 4+ tahun pengalaman di perkuliahan, saya telah membuat SaaS dashboard,
                e-commerce, design system, dan landing page — selalu menempatkan
                pengguna sebagai pusat setiap keputusan.
              </p>
            </FadeIn>
          </div>

          {/* Kolom kanan: kartu passion */}
          <div className="space-y-4">
            {[
              {
                icon: Code2,
                title: "Clean Code",
                desc: "Kode yang rapi adalah bentuk penghormatan untuk diri sendiri di masa depan.",
                color: "#00FFE5",
              },
              {
                icon: Palette,
                title: "Design Thinking",
                desc: "Empati ke pengguna mendorong setiap keputusan desain.",
                color: "#A855F7",
              },
              {
                icon: Zap,
                title: "Performance",
                desc: "Setiap milidetik penting. Saya obsesi dengan Core Web Vitals.",
                color: "#FF6B35",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} direction="right">
                <div
                  className="p-5 rounded-xl border flex items-start gap-4"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)",
                  }}
                >
                  <div
                    className="p-2.5 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--text)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {item.desc}
                    </p>
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