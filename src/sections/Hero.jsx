import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

const YarnCanvas = lazy(() => import('../components/YarnCanvas'))

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      {/* Decorative background blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-200/30 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-200/25 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal-100/20 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text */}
        <div className="order-2 md:order-1">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-teal-300/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-body text-sm text-teal-600 tracking-widest uppercase">Handmade with love</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-teal-900 mb-4"
          >
            Beyond
            <br />
            <em className="text-gradient not-italic">Threads</em>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="font-accent text-2xl md:text-3xl text-teal-600 italic mb-3 tracking-wide"
          >
            Handcrafted by Prapti
          </motion.p>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="font-body text-lg text-teal-700/80 mb-10 leading-relaxed max-w-md"
          >
            Where every thread tells a story — each piece woven with care, patience, and a little bit of magic.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-shimmer px-8 py-4 rounded-full text-white font-body font-medium tracking-wide shadow-xl shadow-teal-500/30 hover:scale-105 hover:shadow-teal-400/50 transition-all duration-300"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full glass border border-teal-400/40 text-teal-700 font-body font-medium hover:bg-teal-50/50 hover:border-teal-400/60 transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
            className="flex gap-8 mt-12"
          >
            {[
              { num: '200+', label: 'Pieces Crafted' },
              { num: '50+', label: 'Happy Customers' },
              { num: '100%', label: 'Handmade' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl font-medium text-teal-700">{s.num}</div>
                <div className="font-body text-xs text-teal-500 tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2 h-[400px] md:h-[560px] relative"
        >
          {/* Decorative ring */}
          <div className="absolute inset-8 rounded-full border border-teal-300/20 animate-spin-slow" />
          <div className="absolute inset-16 rounded-full border border-teal-200/15 animate-[spin_30s_linear_infinite_reverse]" />
          
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-4 border-teal-300 border-t-teal-600 animate-spin" />
              </div>
            }
          >
            <YarnCanvas />
          </Suspense>

          {/* Floating labels */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-12 -right-4 md:right-4 glass rounded-2xl px-4 py-2 border border-teal-300/30 shadow-lg"
          >
            <span className="font-accent text-sm text-teal-700 italic">Pure Craftsmanship</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-20 -left-2 md:left-4 glass rounded-2xl px-4 py-2 border border-teal-300/30 shadow-lg"
          >
            <span className="font-accent text-sm text-teal-700 italic">Made with Love ✦</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-teal-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-teal-400 to-transparent"
        />
      </motion.div>
    </section>
  )
}
