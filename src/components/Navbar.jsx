import { useState, useEffect } from 'react'

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const closeMenu = () => setMenuOpen(false)

  // Highlight nav link based on scroll position
  useEffect(() => {
    const sections = ['hero', 'services', 'about', 'pricing', 'gallery', 'contact']
    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (!e.target.closest('.nav-links') && !e.target.closest('.nav-toggle')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [menuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">RANGPURI<span>.</span></a>

      {/* Backdrop for mobile */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
            zIndex: 999, backdropFilter: 'blur(4px)'
          }}
          onClick={closeMenu}
        />
      )}

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['hero', 'services', 'about', 'pricing', 'gallery', 'contact'].map(section => (
          <a
            key={section}
            href={`#${section}`}
            className={activeSection === section ? 'active' : ''}
            onClick={closeMenu}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={closeMenu}>Book Now</a>
      </div>

      <div
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}