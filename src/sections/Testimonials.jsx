import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const testimonials = [
  {
    name: 'Anushka ',
    location: 'Nagpur',
    text: "Ordered a custom amigurumi doll for my daughter's first birthday and I was blown away. The quality, the softness, the detail — it became her favourite toy instantly. Prapti is absolutely gifted.",
    rating: 5,
    avatar: 'A',
    item: 'Custom Amigurumi Doll',
  },
  {
    name: 'Shruti Kulkarni',
    location: 'Bangalore',
    text: "The crochet flower bouquet I ordered was a gift for my mom on her anniversary. Prapti captured exactly the colors I wanted and delivered ahead of time. Truly a gem!",
    rating: 5,
    avatar: 'Sk',
    item: 'Flower Bouquet',
  },
  {
    name: 'Umit patel',
    location: 'Vadodara',
    text: "The tote bag is sturdy, beautiful, and gets compliments everywhere I take it. What I love most is knowing someone put real time and care into making it. It feels special. Will order again.",
    rating: 5,
    avatar: 'UP',
    item: 'Daisy Tote Bag',
  },
  {
    name: 'Mehar',
    location: 'Mumbai',
    text: "I ordered a wall hanging for my new apartment and it's now the first thing everyone notices when they walk in. Prapti is so easy to work with and her work speaks for itself. Beyond Threads is beyond wonderful.",
    rating: 5,
    avatar: 'M',
    item: 'Boho Wall Hanging',
  },
  {
    name: 'Dhrumi Vyas',
    location: 'Ahmedabad',
    text: "I've ordered three times now and every single piece has exceeded expectations. The packaging alone is so thoughtful.",
    rating: 5,
    avatar: 'DV',
    item: 'Multiple Orders',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [ref, inView] = useInView()

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-teal-50/60 to-teal-100/30 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal-200/20 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-body text-xs text-teal-500 uppercase tracking-widest">— Voices of Love —</span>
          <h2 className="font-display text-4xl md:text-5xl text-teal-900 mt-3 mb-4">
            What Customers Say
          </h2>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-3xl p-8 md:p-12 border border-teal-200/40 shadow-xl shadow-teal-100/50"
              >
                {/* Quote mark */}
                <div className="font-display text-8xl text-teal-200 leading-none mb-4 select-none">"</div>

                <p className="font-body text-lg md:text-xl text-teal-800 leading-relaxed mb-8 max-w-3xl">
                  {testimonials[current].text}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-300 flex items-center justify-center font-display text-white font-medium shadow-md">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <p className="font-display text-teal-800 font-medium">{testimonials[current].name}</p>
                      <p className="font-body text-xs text-teal-500">
                        {testimonials[current].location} · <em className="font-accent italic">{testimonials[current].item}</em>
                      </p>
                    </div>
                  </div>
                  <StarRating rating={testimonials[current].rating} />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? 'w-8 h-2 bg-teal-500' : 'w-2 h-2 bg-teal-300 hover:bg-teal-400'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full glass border border-teal-300/40 text-teal-600 hover:bg-teal-50 flex items-center justify-center transition-all"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full glass border border-teal-300/40 text-teal-600 hover:bg-teal-50 flex items-center justify-center transition-all"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
