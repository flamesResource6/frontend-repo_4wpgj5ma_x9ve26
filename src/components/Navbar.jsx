import { useState, useEffect } from 'react'
import { Menu, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/80 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-amber-300 shadow-inner" />
            <div className="leading-tight">
              <p className="text-base font-semibold text-slate-900">David's Custom</p>
              <p className="text-xs tracking-wide text-slate-600">Slip Covers</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#drapery" className="nav-link">Drapery</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#slipcovers" className="nav-link">Slipcovers</a>
            <a href="#upholstery" className="nav-link">Upholstery</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="tel:19177769640" className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-amber-700 transition">
              <Phone size={16} /> 917-776-9640
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(o => !o)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {[
              { href: '#drapery', label: 'Drapery' },
              { href: '#services', label: 'Services' },
              { href: '#slipcovers', label: 'Slipcovers' },
              { href: '#upholstery', label: 'Upholstery' },
              { href: '#about', label: 'About' },
              { href: '#gallery', label: 'Gallery' },
              { href: '#blog', label: 'Blog' },
              { href: '#contact', label: 'Contact' },
            ].map(link => (
              <a key={link.href} href={link.href} className="block px-2 py-2 rounded-md text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="tel:19177769640" className="inline-flex items-center gap-2 rounded-full bg-amber-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-amber-700 transition">
              <Phone size={16} /> 917-776-9640
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link { @apply text-sm text-slate-700 hover:text-slate-900 transition; }
      `}</style>
    </header>
  )
}
