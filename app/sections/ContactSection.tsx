"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Instagram } from "lucide-react"
import { FadeIn } from "../components/FadeIn"
import { PERSONAL } from "../lib/data"
import Link from "next/link"

export function ContactSection() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Pesan dari ${form.name}`
    )

    const body = encodeURIComponent(
`Nama: ${form.name}

Email: ${form.email}

Pesan:
${form.message}`
    )

    // GANTI DENGAN EMAIL KAMU
    window.location.href =
      `mailto:iabdulrasyd@gmail.com?subject=${subject}&body=${body}`

    // reset form setelah membuka mail
    setForm({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-card)" }}
    >
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <p
            className="text-xs font-['JetBrains_Mono'] tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            05 / Contact
          </p>

          <h2
            className="font-['Bebas_Neue'] text-6xl mb-4"
            style={{ color: "var(--text)" }}
          >
            Let&apos;s build something{" "}
            <span style={{ color: "var(--accent)" }}>
              great.
            </span>
          </h2>

          <p
            className="max-w-lg text-base mb-14"
            style={{ color: "var(--text-muted)" }}
          >
            Ada project menarik? Saya selalu terbuka untuk diskusi.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <FadeIn direction="left" delay={0.1}>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {[
                {
                  id: "name",
                  label: "Nama",
                  type: "text",
                  placeholder: "Your Name"
                },

                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Your Email"
                },

              ].map((field) => (

                <div key={field.id}>

                  <label
                    htmlFor={field.id}
                    className="block text-xs font-['JetBrains_Mono'] tracking-widest uppercase mb-2"
                    style={{
                      color: "var(--text-muted)"
                    }}
                  >
                    {field.label} *
                  </label>

                  <input
                    id={field.id}
                    type={field.type}
                    required
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        [field.id]: e.target.value
                      }))
                    }
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--bg)",
                      color: "var(--text)"
                    }}
                  />

                </div>
              ))}

              <div>

                <label
                  htmlFor="message"
                  className="block text-xs font-['JetBrains_Mono'] tracking-widest uppercase mb-2"
                  style={{
                    color: "var(--text-muted)"
                  }}
                >
                  Pesan *
                </label>

                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      message: e.target.value
                    }))
                  }
                  placeholder="Ceritakan tentang project Anda..."
                  className="w-full px-4 py-3.5 rounded-xl border text-sm outline-none resize-none"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)",
                    color: "var(--text)"
                  }}
                />

              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#000"
                }}
              >
                <Send size={16} />
                Kirim Pesan
              </motion.button>

            </motion.form>

          </FadeIn>


          {/* SOCIAL LINKS */}
          <FadeIn direction="right" delay={0.15}>

            <div className="space-y-3">

              <p
                className="text-xs font-['JetBrains_Mono'] tracking-[0.2em] uppercase mb-5"
                style={{
                  color: "var(--text-muted)"
                }}
              >
                — Temukan saya di
              </p>

              {[
                {
                  icon: Github,
                  label: "GitHub",
                  handle: "@abdulrasyd42",
                  href: PERSONAL.github
                },

                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  handle: "/in/abdul rasyd imawan",
                  href: PERSONAL.linkedin
                },

                {
                  icon: Instagram,
                  label: "Instagram",
                  handle: "@abdulrasyd42",
                  href: PERSONAL.Instagram
                },

              ].map(({ icon: Icon, label, handle, href }) => (

                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  className="group flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-[var(--accent)]"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--bg)"
                  }}
                >

                  <div
                    className="p-2.5 rounded-lg"
                    style={{
                      backgroundColor: "var(--border)"
                    }}
                  >
                    <Icon
                      size={16}
                      style={{
                        color: "var(--text-muted)"
                      }}
                    />
                  </div>

                  <div>

                    <p
                      className="text-xs font-['JetBrains_Mono']"
                      style={{
                        color: "var(--text-muted)"
                      }}
                    >
                      {label}
                    </p>

                    <p
                      className="font-semibold text-sm"
                      style={{
                        color: "var(--text)"
                      }}
                    >
                      {handle}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </FadeIn>

        </div>
      </div>
    </section>
  )
}