import { Mail, Github, Linkedin, Phone } from 'lucide-react'

const links = [
  { icon: Mail, label: 'Email', value: 'haseeb.zahid021@gmail.com', href: 'mailto:haseeb.zahid021@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/haseeeb21', href: 'https://github.com/haseeeb21' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/haseeeb21', href: 'https://linkedin.com/in/haseeeb21' },
  { icon: Phone, label: 'Phone', value: '+966 573 572 621', href: 'tel:+966573572621' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest">05. contact</p>
        <h2 className="section-heading mb-4">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-text-secondary leading-relaxed mb-8">
              I'm currently open to new opportunities — whether it's a full-time role, freelance project, or a collaboration on something ambitious. If you think we could build something great together, reach out.
            </p>

            <div className="space-y-4">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-bg-card border border-bg-border flex items-center justify-center group-hover:border-accent-cyan/40 transition-colors">
                    <Icon size={16} className="text-text-muted group-hover:text-accent-cyan transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-muted">{label}</p>
                    <p className="text-text-secondary text-sm group-hover:text-accent-cyan transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-bg-card border border-bg-border rounded-xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mx-auto mb-6">
              <Mail size={24} className="text-accent-cyan" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-3">
              Let's Work Together
            </h3>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              Whether you have a project in mind or just want to talk AI — my inbox is always open.
            </p>
            <a
              href="mailto:haseeb.zahid021@gmail.com"
              className="inline-block font-mono text-sm px-8 py-3 bg-accent-cyan text-bg-primary font-semibold hover:bg-accent-cyan/80 transition-all duration-200 rounded hover:-translate-y-0.5"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
