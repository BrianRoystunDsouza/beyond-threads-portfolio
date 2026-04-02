import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'

// Portfolio data — replace image URLs with real product photos
const items = [
  {
    id: 1,
    title: 'Amigurumi Bear',
    category: 'Toys',
    description: 'A soft, huggable crochet bear made with premium cotton yarn. Perfect as a gift for newborns or toddlers. Customizable in any color palette.',
    image: 'https://images.unsplash.com/photo-1558171813-5a6c0c88e7d0?w=600&q=80',
    tags: ['Gift', 'Baby', 'Custom'],
    whatsapp: '919XXXXXXXXX',
  },
  {
    id: 2,
    title: 'Ocean Tote Bag',
    category: 'Bags',
    description: 'A sturdy, stylish hand-crocheted tote bag in ocean teal shades. Spacious enough for daily use, light enough to carry everywhere.',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80',
    tags: ['Everyday', 'Tote', 'Teal'],
    whatsapp: '919XXXXXXXXX',
  },
  {
    id: 3,
    title: 'Crochet Flower Bouquet',
    category: 'Flowers',
    description: 'Eternal flowers that never wilt. A handcrafted crochet bouquet in pastel shades, perfect for home décor or as a lasting gift.',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80',
    tags: ['Décor', 'Gift', 'Floral'],
    whatsapp: '919XXXXXXXXX',
  },
  {
    id: 4,
    title: 'Bunny Plushie',
    category: 'Toys',
    description: 'An adorable long-eared bunny crocheted with love. Soft, safe for children, and comes with a tiny bow tie. Makes birthdays unforgettable.',
    image: 'https://images.unsplash.com/photo-1612198790700-b4f2ab3a6f67?w=600&q=80',
    tags: ['Bunny', 'Kids', 'Soft'],
    whatsapp: '919XXXXXXXXX',
  },
  {
    id: 5,
    title: 'Boho Wall Hanging',
    category: 'Décor',
    description: 'A stunning macramé-inspired crochet wall piece in natural and teal tones. Adds a calm, artisanal energy to any room.',
    image: 'https://images.unsplash.com/photo-1525904097878-94fb15835963?w=600&q=80',
    tags: ['Wall Art', 'Boho', 'Home'],
    whatsapp: '919XXXXXXXXX',
  },
  {
    id: 6,
    title: 'Mini Cactus Collection',
    category: 'Plants',
    description: 'A trio of tiny crochet cacti — no water needed! Each one unique, each one made by hand. The perfect desk companion.',
    image: 'https://images.unsplash.com/photo-1558171813-5a6c0c88e7d0?w=600&q=80',
    tags: ['Cactus', 'Desk', 'Set'],
    whatsapp: '919XXXXXXXXX',
  },
]

const categories = ['All', 'Toys', 'Bags', 'Flowers', 'Décor', 'Plants']

function PortfolioCard({ item, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="portfolio-card group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-md shadow-teal-100/50 hover:shadow-xl hover:shadow-teal-200/50 transition-all duration-500"
      onClick={() => onClick(item)}
    >
      <div className="overflow-hidden aspect-[4/5]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Overlay */}
      <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-800/20 to-transparent opacity-0 transition-opacity duration-400 flex flex-col justify-end p-5">
        <span className="font-body text-xs text-teal-300 uppercase tracking-widest mb-1">{item.category}</span>
        <h3 className="font-display text-xl text-white mb-2">{item.title}</h3>
        <div className="flex gap-2 flex-wrap">
          {item.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full bg-teal-400/20 border border-teal-300/30 text-teal-100 text-xs">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-3 inline-flex items-center gap-1 text-teal-300 text-sm font-body">
          View Details
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 rounded-full glass text-xs font-body text-teal-700 border border-teal-200/40">
          {item.category}
        </span>
      </div>
    </motion.div>
  )
}

function Modal({ item, onClose }) {
  const whatsappMsg = encodeURIComponent(`Hi Prapti! I'd love to order the "${item.title}" from Beyond Threads. Could you share more details?`)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl shadow-teal-900/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass flex items-center justify-center text-teal-700 hover:bg-teal-100 transition-colors"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-7 flex flex-col justify-between">
            <div>
              <span className="font-body text-xs text-teal-500 uppercase tracking-widest">{item.category}</span>
              <h2 className="font-display text-3xl text-teal-900 mt-1 mb-4">{item.title}</h2>
              <p className="font-body text-teal-700/80 leading-relaxed text-sm mb-4">{item.description}</p>
              <div className="flex gap-2 flex-wrap">
                {item.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-xs font-body">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`https://wa.me/${item.whatsapp}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#25D366] text-white font-body font-medium hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-105 shadow-md shadow-green-300/40"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.112 1.522 5.838L.037 23.256a.75.75 0 00.916.92l5.492-1.44A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.943-1.351l-.355-.211-3.658.958.979-3.566-.232-.368A9.717 9.717 0 012.25 12C2.25 6.59 6.59 2.25 12 2.25S21.75 6.59 21.75 12 17.41 21.75 12 21.75z" />
                </svg>
                Order on WhatsApp
              </a>
              <a
                href="https://instagram.com/beyondthreads"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl border border-teal-300 text-teal-700 font-body text-sm hover:bg-teal-50 transition-all duration-300"
              >
                View on Instagram
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)
  const [ref, inView] = useInView()

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-teal-50/60 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-body text-xs text-teal-500 uppercase tracking-widest">— Our Creations —</span>
          <h2 className="font-display text-4xl md:text-5xl text-teal-900 mt-3 mb-4">
            Portfolio Gallery
          </h2>
          <p className="font-body text-teal-600/80 max-w-lg mx-auto leading-relaxed">
            Each piece is a labor of love — crafted stitch by stitch with premium yarn and an eye for beauty.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                active === cat
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-400/30'
                  : 'glass border border-teal-200/40 text-teal-600 hover:border-teal-400/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((item, i) => (
            <PortfolioCard key={item.id} item={item} onClick={setSelected} index={i} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
