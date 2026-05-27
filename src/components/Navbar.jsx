import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Portfolio', 'Process', 'Testimonials', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-teal-200/70 bg-[linear-gradient(110deg,rgba(250,253,249,0.94)_0%,rgba(224,247,244,0.88)_48%,rgba(153,246,228,0.62)_100%)] py-2 shadow-lg shadow-teal-500/10 backdrop-blur-xl'
          : 'border-b border-teal-100/50 bg-[linear-gradient(110deg,rgba(250,253,249,0.82)_0%,rgba(224,247,244,0.72)_48%,rgba(127,255,212,0.42)_100%)] py-5 backdrop-blur-md'
      }`}
    >
      <div className="max-w-12xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center font-display text-2xl font-medium leading-none text-teal-900 transition-transform duration-300 hover:scale-105 md:text-3xl"
          aria-label="Go to top"
        >
          <span>Beyond</span>
          <em className="text-gradient ml-2 not-italic">Threads</em>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-body text-sm text-teal-700 hover:text-teal-500 transition-colors duration-300 tracking-wide relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="ml-2 px-5 py-2 rounded-full bg-teal-600 text-white text-sm font-body font-medium hover:bg-teal-500 transition-all duration-300 shadow-md shadow-teal-500/30 hover:shadow-teal-400/40 hover:scale-105"
          >
            Order Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-teal-700 transition-transform"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-teal-700"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-teal-700 transition-transform"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-teal-200/20"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left font-body text-teal-700 py-1 border-b border-teal-100/40"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
