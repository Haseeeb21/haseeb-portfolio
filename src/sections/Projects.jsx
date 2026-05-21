import { ExternalLink, Github, Brain, TrendingUp, Bot, BookOpen } from 'lucide-react'

const projects = [
  {
    icon: TrendingUp,
    title: 'ForecastIQ',
    description: 'End-to-end ML demand-forecasting and planning pipeline. Replaced ad-hoc manual spreadsheet ordering, saving $100K+/year in labor. Automated daily processing, centralized inputs, and reduced excess inventory - realizing multi-million dollar savings.',
    tags: ['Python', 'ML Pipeline', 'Feature Engineering', 'Automation', 'FastAPI'],
    highlight: '$100K+/yr saved',
    color: 'accent-green',
  },
  {
    icon: BookOpen,
    title: 'Book Spine Detection System',
    description: 'Pipeline combining Computer Vision and NLP to extract and classify information from book spine images. Custom YOLO OBB model for rotated spine detection + Named Entity Recognition to classify text into predefined categories with LLM-backed accuracy boost.',
    tags: ['YOLO OBB', 'OCR', 'NER', 'LangChain', 'Computer Vision'],
    highlight: 'CV + NLP fusion',
    color: 'accent-cyan',
  },
  {
    icon: Bot,
    title: 'NORO AI Trading Assistant',
    description: 'Institutional-Grade AI trading assistant with real-time market data integration (Binance, Alpha Vantage, GoldAPI) and configurable web search for live market research. Includes a full Telegram bot with webhook handling, session mapping, and multimedia support.',
    tags: ['LLM', 'Binance API', 'Telegram Bot', 'Webhooks', 'Real-time Data'],
    highlight: 'Live market intel',
    color: 'accent-purple',
  },
  {
    icon: Brain,
    title: 'Brain Tumor Classification',
    description: 'Custom CNN architecture for brain tumor classification in healthcare. Dataset preprocessing, augmentation, and hyperparameter tuning. Compared proposed CNN against other deep learning and classical ML models to validate performance improvements.',
    tags: ['CNN', 'TensorFlow', 'Keras', 'Medical AI', 'Data Augmentation'],
    highlight: 'Healthcare AI',
    color: 'accent-cyan',
  },
]

const colorMap = {
  'accent-green': { border: 'border-accent-green/30', text: 'text-accent-green', bg: 'bg-accent-green/10', badge: 'text-accent-green' },
  'accent-cyan': { border: 'border-accent-cyan/30', text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', badge: 'text-accent-cyan' },
  'accent-purple': { border: 'border-accent-purple/30', text: 'text-accent-purple', bg: 'bg-accent-purple/10', badge: 'text-accent-purple' },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest">03. projects</p>
        <h2 className="section-heading mb-3">Things I've Built</h2>
        <p className="text-text-secondary text-sm mb-12 max-w-lg">
          A selection of projects shipped in production and side explorations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const colors = colorMap[project.color]
            const Icon = project.icon
            return (
              <div
                key={i}
                className={`bg-bg-card border ${colors.border} rounded-xl p-6 hover:bg-bg-secondary transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl`}
                style={{ boxShadow: 'none' }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <Icon size={20} className={colors.text} />
                  </div>
                  <span className={`font-mono text-xs px-2 py-1 rounded border ${colors.border} ${colors.badge} bg-transparent`}>
                    {project.highlight}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-text-primary mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-text-muted px-2 py-0.5 rounded bg-bg-secondary border border-bg-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
