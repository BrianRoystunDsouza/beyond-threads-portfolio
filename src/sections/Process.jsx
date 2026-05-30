import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    icon: '💬',
    title: 'You Share Your Vision',
    desc: 'Tell us what you have in mind — a plushie for your little one, a bag in your favorite color, or a gift for someone special. Every conversation is the start of something beautiful.',
  },
  {
    num: '02',
    icon: '🧶',
    title: 'Choosing the Perfect Yarn',
    desc: 'Premium, soft, and colorfast yarn is hand-picked for your piece. Colors are matched carefully — We often sources special shades to bring your vision to life exactly.',
  },
  {
    num: '03',
    icon: '🪡',
    title: 'The Craft Begins',
    desc: 'Stitch by stitch, row by row. Each piece can take anywhere from a few hours to several days, depending on its complexity. This is where the magic quietly happens.',
  },
  {
    num: '04',
    icon: '✨',
    title: 'Finishing & Detailing',
    desc: 'Buttons are sewn, ends are woven in, and every edge is checked twice. Small details — a tiny bow, embroidered eyes — make all the difference.',
  },
  {
    num: '05',
    icon: '📦',
    title: 'Packed with Love',
    desc: 'Your creation is wrapped in tissue, placed in a kraft box, and tied with a ribbon. Sometimes a little handwritten note finds its way in too.',
  },
]

export default function Process() {
  const [ref, inView] = useInView()

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-teal-50/60" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs text-teal-500 uppercase tracking-widest">— Behind the Scenes —</span>
          <h2 className="font-display text-4xl md:text-5xl text-teal-900 mt-3 mb-4">
            How It's Made
          </h2>
          <p className="font-body text-teal-600/80 max-w-lg mx-auto leading-relaxed">
            Every creation goes through a thoughtful, unhurried process. Here's what happens from the moment you reach out to the moment it reaches you.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[27px] md:left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-teal-400 via-teal-300 to-transparent hidden md:block md:-translate-x-0.5" />

          <div className="space-y-10 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                  i % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline dot (desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-teal-400 border-4 border-white shadow-md z-10" />

                {/* Card */}
                <div className={`${i % 2 === 0 ? 'md:col-start-1 md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'} relative`}>
                  {/* Mobile connector dot */}
                  <div className="flex items-start gap-4 md:block">
                    <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 border border-teal-200 flex items-center justify-center text-xl shadow-sm">
                      {step.icon}
                    </div>
                    <div className={`glass rounded-2xl p-6 border border-teal-200/40 shadow-sm hover:shadow-md hover:border-teal-300/50 transition-all duration-300 ${
                      i % 2 === 0 ? 'md:ml-auto' : ''
                    }`}
                    style={{ maxWidth: '380px' }}>
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="hidden md:flex w-10 h-10 rounded-full bg-teal-100 border border-teal-200 items-center justify-center text-lg">
                          {step.icon}
                        </div>
                        <span className="font-accent text-3xl text-teal-200 font-medium">{step.num}</span>
                      </div>
                      <h3 className={`font-display text-xl text-teal-800 mb-2 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                        {step.title}
                      </h3>
                      <p className={`font-body text-sm text-teal-600/80 leading-relaxed ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-accent italic text-xl text-teal-600 mb-6">
            Ready to start your own story?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-shimmer px-8 py-4 rounded-full text-white font-body font-medium shadow-lg shadow-teal-400/30 hover:scale-105 transition-all duration-300"
          >
            Place a Custom Order
          </button>
        </motion.div>
      </div>
    </section>
  )
}
