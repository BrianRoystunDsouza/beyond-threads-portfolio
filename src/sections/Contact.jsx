import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const INSTAGRAM_URL =
  'https://www.instagram.com/beyond_threadsss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
const EMAIL_ADDRESS = 'pbkj15@gmail.com'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = form.name
      ? `Message from ${form.name}`
      : 'Message from website visitor'

    const body = `Name: ${form.name}
Email: ${form.email}

${form.message}`

    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-800 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-600/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-body text-xs text-teal-300 uppercase tracking-widest">- Let&apos;s Create Together -</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-3 mb-4">Get in Touch</h2>
          <p className="font-body text-teal-200/80 max-w-lg mx-auto leading-relaxed">
            Have something in mind? Prapti would love to hear from you. Use the form below to send a message or reach out on Instagram.
          </p>
        </motion.div>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 w-full max-w-2xl"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-7 rounded-2xl bg-pink-500/10 border border-pink-400/20 hover:bg-pink-500/15 transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-white font-medium text-lg">Order on Instagram</p>
                <p className="font-body text-teal-200/70 text-sm mt-0.5">DM directly to place an order and discuss custom details</p>
              </div>
              <svg className="w-5 h-5 text-teal-300 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="flex items-center gap-5 p-7 rounded-2xl bg-blue-500/10 border border-blue-400/20 hover:bg-blue-500/15 transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l9 6 9-6m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div>
                <p className="font-body text-white font-medium text-lg">
                  Email Me
                </p>
                <p className="font-body text-teal-200/70 text-sm mt-0.5">
                  Questions, collaborations, custom orders, feedback, or anything else on your mind
                </p>
              </div>

              <svg
                className="w-5 h-5 text-teal-300 ml-auto group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            <div className="p-5 rounded-2xl bg-teal-600/20 border border-teal-400/20">
              <p className="font-accent italic text-teal-200 text-center leading-relaxed">
                "Every creation starts with a conversation. Tell me what&apos;s on your mind, and let&apos;s create something meaningful together."
              </p>
              <p className="font-body text-center text-teal-400 text-xs mt-2">- Prapti</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

