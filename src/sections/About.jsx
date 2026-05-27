import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-teal-100/40 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-cyan-100/30 blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-teal-200 to-cyan-100 rotate-3" />
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tl from-teal-300/50 to-cyan-100/30 -rotate-2" />
              <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-teal-100 to-cyan-50 aspect-square shadow-2xl shadow-teal-200/50">
                <img
                  src="/owner.jpeg"
                  alt="Prapti, crochet artist and founder of Beyond Threads"
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 rounded-2xl bg-white/95 p-4 shadow-xl shadow-teal-900/10 ring-1 ring-teal-200/70 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-lg text-white">
                    P
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-teal-500">Crafting since</p>
                    <p className="font-display text-lg text-teal-900 font-medium">2019</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-5 -left-5 rounded-2xl bg-teal-950 px-5 py-4 shadow-xl shadow-teal-900/25 ring-1 ring-teal-200/20"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-400/20 text-lg text-teal-100">
                    ✦
                  </span>
                  <p className="font-body text-sm font-semibold tracking-wide text-white">100% Handmade</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-body text-xs text-teal-500 uppercase tracking-widest">- The Story -</span>
            <h2 className="font-display text-4xl md:text-5xl text-teal-900 mt-3 mb-6 leading-tight">
              Crafted with <em className="text-gradient not-italic">Heart</em>
            </h2>

            <div className="space-y-4 font-body text-teal-700/80 leading-relaxed">
              <p>
                It started with a single skein of yarn and a borrowed crochet hook. What began as a quiet hobby for
                Prapti on a rainy afternoon in 2019 slowly grew into something she could not put down - not because
                she had to, but because every stitch brought her joy.
              </p>
              <p>
                <em className="font-accent italic text-teal-600 text-lg">
                  "Crochet taught me patience. Each loop is a breath, each row a meditation."
                </em>
              </p>
              <p>
                Beyond Threads was born from the belief that handmade items carry something no machine ever can -
                intention. Every amigurumi bear, every tote bag, every flower bouquet is made slowly, thoughtfully,
                and with a quiet kind of love woven into every thread.
              </p>
              <p>
                Today, Prapti crafts custom pieces for families, babies, and anyone who appreciates the beauty of
                something made just for them. No two pieces are ever identical - and that is exactly the point.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: 'Yarn', text: 'Premium yarn only' },
                { icon: 'Love', text: 'Made to order' },
                { icon: '*', text: 'Custom designs welcome' },
                { icon: 'Ship', text: 'Ships across India' },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200/50">
                  <span className="text-sm text-teal-700">{f.icon}</span>
                  <span className="font-body text-sm text-teal-700">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
