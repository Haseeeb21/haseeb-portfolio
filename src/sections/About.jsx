import { Award, MapPin, GraduationCap } from 'lucide-react'

const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Annual Savings Delivered', value: '$100K+' },
  { label: 'ML Models Deployed', value: '10+' },
  { label: 'CGPA', value: '3.77' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest">01. about me</p>
            <h2 className="section-heading mb-6">Who I Am</h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm a Machine Learning Engineer at <span className="text-accent-cyan">VisionX</span>, building and deploying AI products for enterprise clients across Computer Vision, NLP, and Generative AI.
              </p>
              <p>
                I graduated as a <span className="text-accent-green font-semibold">Presidential Gold Medalist</span> in Computer Science from the Institute of Space Technology with a 3.77 GPA - then jumped straight into building real-world AI systems that move the needle.
              </p>
              <p>
                From fine-tuning OCR models to architecting end-to-end ML pipelines that eliminate manual work and save six figures annually, I care about AI that actually ships and delivers value.
              </p>
              <p>
                Outside of work, I mentor ML interns, run technical demos, and explore the intersection of trading algorithms and market intelligence.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <MapPin size={14} className="text-accent-cyan" />
                Jeddah, Saudi Arabia
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <GraduationCap size={14} className="text-accent-cyan" />
                B.S. Computer Science, IST
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Award size={14} className="text-accent-green" />
                Presidential Gold Medalist
              </div>
            </div>
          </div>

          {/* Right: stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-bg-card border border-bg-border rounded-lg p-6 hover:border-accent-cyan/30 transition-colors group card-glow"
                >
                  <div className="font-display text-3xl font-bold text-accent-cyan mb-2 group-hover:text-white transition-colors">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-text-muted leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal block */}
            <div className="mt-4 bg-bg-card border border-bg-border rounded-lg p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-bg-border">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-text-muted ml-2">haseeb@visionx:~$</span>
              </div>
              <div className="space-y-1.5 text-text-secondary">
                <p><span className="text-accent-green">$</span> <span className="text-text-primary">whoami</span></p>
                <p className="text-text-muted pl-4">ML Engineer @ VisionX</p>
                <p><span className="text-accent-green">$</span> <span className="text-text-primary">cat skills.txt</span></p>
                <p className="text-text-muted pl-4">CV | NLP | GenAI | MLOps</p>
                <p><span className="text-accent-green">$</span> <span className="text-text-primary">echo $STATUS</span></p>
                <p className="text-accent-cyan pl-4">Open to new opportunities<span className="animate-pulse">█</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
