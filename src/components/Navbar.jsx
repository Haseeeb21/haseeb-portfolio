import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-bg-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-accent-cyan text-sm tracking-widest hover:text-white transition-colors">
          <span className="text-text-muted">{'>'}</span> HUH<span className="animate-pulse text-accent-green">_</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-text-secondary hover:text-accent-cyan transition-colors group"
            >
              <span className="text-accent-cyan opacity-50 group-hover:opacity-100 mr-1">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
          <a
            href="mailto:haseeb.zahid021@gmail.com"
            className="font-mono text-xs px-4 py-2 border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-bg-primary transition-all duration-200 rounded"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-secondary hover:text-accent-cyan transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-secondary border-b border-bg-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors"
            >
              <span className="text-accent-cyan mr-2">0{i + 1}.</span>{link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
