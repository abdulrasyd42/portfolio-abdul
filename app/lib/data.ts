// app/lib/data.ts
// Semua isi portfolio ada di sini — tinggal edit file ini

export const PERSONAL = {
  name: "Abdul Rasyd Imawan",
  role: "Frontend Developer & UI/UX Designer",
  email: "iabdulrasyd@gmail.com",
  location: "Jakarta, Indonesia",
  bio: "I’m interested in turning ideas into interactive web experiences. I focus on building responsive interfaces and creating simple, user-friendly experiences. I continue to learn and develop my skills through various projects and by exploring modern web technologies.",
  github: "https://github.com/abdulrasyd42",
  linkedin: "https://linkedin.com/in/abdulrasyd42",
  Instagram: "https://instagram.com/abdulrasyd42",
}

export const PROJECTS = [
  {
    id: 1,
    title: "Boking Saja",
    description: "project Homepage iseng sederhana",
    image: "/projects/bokingsaja.png",
    tech: ["HTML5", "CSS", "Javascript"],
    demo: "https://abdulrasyd42.github.io/bokingsaja/#",
    github: "https://github.com/abdulrasyd42/bokingsaja",
    category: "Home Page",
  },
  {
    id: 2,
    title: "RekomStay.",
    description: "Aplikasi Rekomendasi Hotel Berbasis Web Dengan Metode Content-Based Filtering",
    image: "/projects/rekomstay.png",
    tech: ["Laravel", "PHP", "TailwindCSS", "Mysql"],
    demo: "#",
    github: "https://github.com/abdulrasyd42/rekomstay",
    category: "E-Commerce, Hotel, Content-Based Filtering",
  },
  {
    id: 3,
    title: "UI/UX design Tisera.id",
    description: "Selama Magang di PT Tiga Serangkai Pustaka Mandiri, Saya Bekerja sama dengan mentor dan tim ui/ux untuk membuat redesign ui/ux website Tisera ",
    image: "/projects/Tisera.png",
    tech: ["Figma", "UI Design", "UX Research"],
    demo: "https://www.figma.com/proto/JpBAmP1YkMBvGne6kuxBTU/UI-UX-Desain-Tisera.id?page-id=1%3A3&node-id=18-70066&p=f&viewport=565%2C700%2C0.04&t=yzLSOLyLUGSSqLXc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18%3A70066#",
    github: "#",
    category: "UI/UX Design, Figma, E-Commerce, Prototyping",
  },
  {
    id: 4,
    title: "Lumina Landing Page",
    description: "Landing page SaaS dengan animasi scroll dan konversi tinggi.",
    image: "/projects/novadash.jpg",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    demo: "#",
    github: "#",
    category: "Landing Page",
  },
]