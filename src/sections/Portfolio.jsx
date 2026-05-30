import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const INSTAGRAM_PROFILE_URL =
  'https://www.instagram.com/beyond_threadsss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='

const galleryFiles = [
  'gal_1.jpeg',
  'gal_2.jpeg',
  'gal_3.jpeg',
  'gal_4.jpeg',
  'gal_5.jpeg',
  'gal_6.jpeg',
  'gal_7.jpeg',
  'gal_8.jpg',
  'gal_9.webp',
  'gal_10.webp',
  'gal_11.webp',
  'gal_12.webp',
  'gal_13.webp',
  'gal_14.webp',
  'gal_15.webp',
]

const items = galleryFiles.map((file, index) => ({
  id: index + 1,
  title: `Beyond Threads Creation ${index + 1}`,
  description: 'Handmade crochet work from the Beyond Threads collection.',
  image: `/${file}`,
  instagram: INSTAGRAM_PROFILE_URL,
}))

function PortfolioCard({ item, onClick, index }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.35), ease: [0.22, 1, 0.36, 1] }}
      className="portfolio-card group relative block w-[210px] flex-shrink-0 overflow-hidden rounded-[28px] bg-white shadow-md shadow-teal-100/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-200/60 sm:w-[240px] md:w-[280px]"
      onClick={() => onClick(item)}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover object-center transition-transform duration-700"
          loading="lazy"
        />
      </div>

      <div className="portfolio-overlay absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-teal-950/80 via-teal-900/20 to-transparent p-5 opacity-0 transition-opacity duration-300">
        <h3 className="font-display text-xl text-white">{item.title}</h3>
        <p className="mt-2 font-body text-sm text-teal-100/90">Tap to view larger</p>
      </div>
    </motion.button>
  )
}

function AnimatedRow({ items: rowItems, onSelect, reverse = false, rowName }) {
  const repeatedItems = [...rowItems, ...rowItems]

  return (
    <div className="portfolio-marquee">
      <div className={`portfolio-track ${reverse ? 'portfolio-track-reverse' : ''}`} aria-label={rowName}>
        {repeatedItems.map((item, index) => (
          <PortfolioCard
            key={`${rowName}-${item.id}-${index}`}
            item={item}
            onClick={onSelect}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

function Modal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-teal-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl overflow-hidden rounded-[32px] bg-white shadow-2xl shadow-teal-950/20"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-2xl text-teal-800 backdrop-blur transition-colors hover:bg-teal-50"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
          <div className="max-h-[80vh] overflow-hidden bg-teal-50">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover object-center" />
          </div>

          <div className="flex flex-col justify-between p-7 md:p-8">
            <div>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-teal-500">Portfolio Gallery</span>
              <h2 className="mt-3 font-display text-3xl text-teal-950">{item.title}</h2>
              <p className="mt-4 font-body text-sm leading-relaxed text-teal-700/80">{item.description}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 px-5 py-3.5 font-body font-medium text-white shadow-md shadow-pink-300/40 transition-transform duration-300 hover:scale-[1.01]"
              >
                View on Instagram
              </a>
              <button
                type="button"
                onClick={onClose}
                className="rounded-2xl border border-teal-200 px-5 py-3 font-body text-sm text-teal-700 transition-colors hover:bg-teal-50"
              >
                Back to Gallery
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [selected, setSelected] = useState(null)
  const [ref, inView] = useInView()

  const [topRow, bottomRow] = useMemo(() => {
    const first = items.filter((_, index) => index % 2 === 0)
    const second = items.filter((_, index) => index % 2 === 1)
    return [first, second]
  }, [])

  return (
    <section id="portfolio" className="overflow-hidden bg-gradient-to-b from-teal-50/60 to-white py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="font-body text-xs uppercase tracking-[0.35em] text-teal-500">Our Creations</span>
          <h2 className="mt-3 font-display text-4xl text-teal-900 md:text-5xl">Portfolio Gallery</h2>
          {/* <p className="mx-auto mt-4 max-w-2xl font-body leading-relaxed text-teal-700/80">
            The gallery now glides continuously in two animated rows, creating a softer horizontal browsing experience for
            the full collection.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative space-y-5"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-teal-50 via-teal-50/75 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/75 to-transparent" />

          <AnimatedRow items={topRow} onSelect={setSelected} rowName="Top gallery row" />
          <AnimatedRow items={bottomRow} onSelect={setSelected} reverse rowName="Bottom gallery row" />
        </motion.div>
      </div>

      <AnimatePresence>{selected && <Modal item={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  )
}
