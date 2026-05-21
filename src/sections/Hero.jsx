import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const roles = [
  'ML Engineer',
  'CV Specialist',
  'NLP Builder',
  'GenAI Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-8">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
          </div>
          <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest">
          Hi, my name is
        </p>

        <h1
          className="font-display text-5xl md:text-7xl font-bold text-text-primary mb-2 glitch-text"
          data-text="Haseeb Ul Hassan."
        >
          Haseeb Ul Hassan.
        </h1>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-text-secondary mb-6">
          I build{' '}
          <span className="text-accent-cyan">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
          {' '}solutions.
        </h2>

        <p className="max-w-xl text-text-secondary leading-relaxed mb-10 font-sans text-base">
          AI / ML Engineer at <span className="text-accent-cyan">VisionX</span>, delivering enterprise-grade AI products.
          Presidential Gold Medalist with hands-on experience in Computer Vision, NLP, and Generative AI.
          Built pipelines that saved clients <span className="text-accent-green font-semibold">$100K+/year</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#projects"
            className="font-mono text-sm px-6 py-3 bg-accent-cyan text-bg-primary font-semibold hover:bg-accent-cyan/80 transition-all duration-200 rounded hover:shadow-lg hover:shadow-accent-cyan/20 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-6 py-3 border border-bg-border text-text-secondary hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200 rounded"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm px-6 py-3 border border-accent-green/40 text-accent-green hover:bg-accent-green hover:text-bg-primary transition-all duration-200 rounded flex items-center gap-2"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a href="https://github.com/haseeeb21" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors hover:-translate-y-0.5 transform duration-200">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/haseeeb21" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors hover:-translate-y-0.5 transform duration-200">
            <Linkedin size={20} />
          </a>
          <a href="mailto:haseeb.zahid021@gmail.com" className="text-text-muted hover:text-accent-cyan transition-colors hover:-translate-y-0.5 transform duration-200">
            <Mail size={20} />
          </a>
          <div className="w-px h-4 bg-bg-border ml-2" />
          <span className="font-mono text-xs text-text-muted">haseeb.zahid021@gmail.com</span>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a href="#about" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors group">
            <span className="font-mono text-xs tracking-widest">SCROLL</span>
            <ArrowDown size={16} className="animate-bounce group-hover:text-accent-cyan" />
          </a>
        </div>
      </div>
    </section>
  )
}
