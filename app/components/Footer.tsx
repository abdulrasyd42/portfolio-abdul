// app/components/Footer.tsx
import Link from "next/link"
import { Github, Instagram, Linkedin, } from "lucide-react"
import { PERSONAL } from "../lib/data"

export function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-['Bebas_Neue'] text-xl" style={{ color: "var(--text)" }}>
            ABD<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <span className="text-xs font-['JetBrains_Mono']" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </span>
        </div>
        <div className="flex gap-3">
          {[
            { icon: Github, href: PERSONAL.github },
            { icon: Linkedin, href: PERSONAL.linkedin },
            { icon: Instagram, href: PERSONAL.Instagram },
            
          ].map(({ icon: Icon, href }, i) => (
            <Link key={i} href={href} target="_blank"
              className="p-2.5 rounded-lg border transition-all hover:scale-110"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
              <Icon size={15} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}