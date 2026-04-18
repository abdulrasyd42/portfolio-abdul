// app/sections/SkillsSection.tsx
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FadeIn } from "../components/FadeIn"

const SKILLS = [
  {
    category: "Core Web",
    color: "#FF6B35",
    items: [
      { name: "HTML5", icon: "/icons/html-5.png", level: 97 },
      { name: "CSS3", icon: "/icons/css-3.png", level: 95 },
      { name: "JavaScript", icon: "/icons/js.png", level: 90 },
      { name: "TypeScript", icon: "/icons/typescript.png", level: 88 },
    ],
  },
  {
    category: "Frameworks",
    color: "#00FFE5",
    items: [
      { name: "React", icon: "/icons/react.png", level: 93 },
      { name: "Next.js", icon: "/icons/nextdotjs.png", level: 90 },
      { name: "Tailwind CSS", icon: "/icons/tailwind-css.png", level: 96 },
      { name: "Framer Motion", icon: "/icons/framer.png", level: 82 },
    ],
  },
  {
    category: "Design Tools",
    color: "#A855F7",
    items: [
      { name: "Figma", icon: "/icons/figma.png", level: 91 },
      { name: "Prototyping", icon: "/icons/prototyping.png", level: 85 },
      { name: "Design Systems", icon: "/icons/web-design.png", level: 83 },
      { name: "Git", icon: "/icons/git.png", level: 90 },
    ],
  },
]

// Komponen kartu skill individual
function SkillCard({ name, icon, level, color, delay }: {
  name: string; icon: string; level: number; color: string; delay: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="p-5 rounded-xl border"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
    >
      <div className="flex justify-between items-start mb-4">
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 object-contain"
        />
        <span
          className="text-xs font-['JetBrains_Mono'] px-2 py-0.5 rounded"
          style={{ color, backgroundColor: `${color}15` }}
        >
          {level}%
        </span>
      </div>
      <p className="font-semibold text-sm mb-3" style={{ color: "var(--text)" }}>
        {name}
      </p>
      {/* Progress bar */}
      <div className="h-1.5 rounded-full" style={{ backgroundColor: "var(--border)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-xs font-['JetBrains_Mono'] tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--accent)" }}>
            02 / Skills
          </p>
          <h2 className="font-['Bebas_Neue'] text-6xl mb-14" style={{ color: "var(--text)" }}>
            Tools of the <span style={{ color: "var(--accent)" }}>trade.</span>
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {SKILLS.map((group, gi) => (
            <div key={group.category}>
              <FadeIn delay={gi * 0.05}>
                <p className="text-xs font-['JetBrains_Mono'] tracking-widest uppercase mb-5"
                  style={{ color: "var(--text-muted)" }}>
                  — {group.category}
                </p>
              </FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {group.items.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    color={group.color}
                    delay={gi * 0.05 + si * 0.08}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}