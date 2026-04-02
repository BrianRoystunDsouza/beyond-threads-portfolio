import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Encode and open WhatsApp with form data
    const msg = encodeURIComponent(
      `Hi Prapti! I'm reaching out from your website.\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/919XXXXXXXXX?text=${msg}`, '_blank')
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-teal-800 via-teal-700 to-cyan-800 relative overflow-hidden" ref={ref}>
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-600/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-body text-xs text-teal-300 uppercase tracking-widest">— Let's Create Together —</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-3 mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-teal-200/80 max-w-lg mx-auto leading-relaxed">
            Have something in mind? Prapti would love to hear from you. Reach out on WhatsApp for the fastest response.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Direct contact */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%20Prapti!%20I%20found%20Beyond%20Threads%20and%20would%20love%20to%20order%20something%20handmade!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 hover:bg-[#25D366]/25 transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.522 5.838L.037 23.256a.75.75 0 00.916.92l5.492-1.44A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.943-1.351l-.355-.211-3.658.958.979-3.566-.232-.368A9.717 9.717 0 012.25 12C2.25 6.59 6.59 2.25 12 2.25S21.75 6.59 21.75 12 17.41 21.75 12 21.75z"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-white font-medium text-lg">Order on WhatsApp</p>
                <p className="font-body text-teal-200/70 text-sm mt-0.5">Fastest response · Usually replies within an hour</p>
              </div>
              <svg className="w-5 h-5 text-teal-300 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/beyondthreads"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 rounded-2xl bg-pink-500/10 border border-pink-400/20 hover:bg-pink-500/15 transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-white font-medium text-lg">@beyondthreads</p>
                <p className="font-body text-teal-200/70 text-sm mt-0.5">See latest work & reels on Instagram</p>
              </div>
              <svg className="w-5 h-5 text-teal-300 ml-auto group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Response time note */}
            <div className="p-5 rounded-2xl bg-teal-600/20 border border-teal-400/20">
              <p className="font-accent italic text-teal-200 text-center leading-relaxed">
                "Every order starts with a conversation. Tell me your story and I'll weave it into something beautiful."
              </p>
              <p className="font-body text-center text-teal-400 text-xs mt-2">— Prapti</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="glass-dark rounded-3xl p-8 border border-teal-400/20">
              <h3 className="font-display text-2xl text-white mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label className="block font-body text-xs text-teal-300 uppercase tracking-widest mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ananya Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-teal-800/50 border border-teal-500/30 text-white placeholder-teal-400/40 font-body text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/40 transition-all"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-teal-300 uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-teal-800/50 border border-teal-500/30 text-white placeholder-teal-400/40 font-body text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/40 transition-all"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs text-teal-300 uppercase tracking-widest mb-2">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="I'd love to order a custom amigurumi bear in teal and white..."
                    className="w-full px-4 py-3 rounded-xl bg-teal-800/50 border border-teal-500/30 text-white placeholder-teal-400/40 font-body text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/40 transition-all resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-4 rounded-2xl btn-shimmer text-white font-body font-medium tracking-wide shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                {sent ? '✓ Message Sent! Opening WhatsApp...' : 'Send via WhatsApp →'}
              </button>
              <p className="text-center font-body text-xs text-teal-400/60 mt-3">
                This will open WhatsApp with your message pre-filled
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
