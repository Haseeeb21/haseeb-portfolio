import { ExternalLink, Github, Brain, TrendingUp, Bot, BookOpen } from 'lucide-react'

const projects = [
  {
    icon: TrendingUp,
    title: 'ForecastIQ',
    description: 'End-to-end ML demand-forecasting and planning pipeline. Replaced ad-hoc manual spreadsheet ordering, saving $200K+/year in labor. Automated daily processing, centralized inputs, and reduced excess inventory - realizing multi-million dollar savings.',
    tags: ['Python', 'ML Pipeline', 'Feature Engineering', 'Automation', 'FastAPI'],
    highlight: '$200K+/yr saved',
    color: 'accent-green',
  },
  {
    icon: BookOpen,
    title: 'Book Spine Detection System',
    description: 'Pipeline combining Computer Vision and NLP to extract and classify information from book spine images. Custom YOLO OBB model for rotated spine detection + Named Entity Recognition to classify text into predefined categories with LLM-backed accuracy boost.',
    tags: ['YOLO OBB', 'OCR', 'NER', 'AI', 'LLM', 'Computer Vision'],
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
    icon: Bot,
    title: 'AI & Computer Vision POCs',
    description: 'Built multiple proof-of-concepts for internal use cases and fast client demos across AI and Computer Vision problems. These efforts focused on turning business needs into working prototypes quickly, covering vision-driven automation, intelligent analysis, and tailored AI workflows.',
    tags: ['AI POCs', 'Computer Vision', 'Client Demos', 'Rapid Prototyping', 'Applied ML'],
    highlight: 'Multiple POCs',
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
  'accent-green': { border: 'border-accent-green/30', text: 'text-accent-green', bg: 'bg-accent-green/10', badge: 'text-accent-green', tag: 'border-accent-green/30 text-accent-green bg-bg-secondary hover:border-accent-green hover:text-accent-green hover:bg-accent-green/10' },
  'accent-cyan': { border: 'border-accent-cyan/30', text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', badge: 'text-accent-cyan', tag: 'border-accent-cyan/30 text-accent-cyan bg-bg-secondary hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10' },
  'accent-purple': { border: 'border-accent-purple/30', text: 'text-accent-purple', bg: 'bg-accent-purple/10', badge: 'text-accent-purple', tag: 'border-accent-purple/30 text-accent-purple bg-bg-secondary hover:border-accent-purple hover:text-accent-purple hover:bg-accent-purple/10' },
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
                    <span key={tag} className={`font-mono text-xs px-2 py-0.5 rounded border transition-all duration-200 ${colors.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest">research work</p>
          <h3 className="section-heading mb-4">Research Paper & Publications</h3>
          <div className="bg-bg-card border border-accent-cyan/30 rounded-xl p-6">
            <h4 className="font-display text-xl font-semibold text-text-primary mb-3">Brain Tumor Classification using a Proposed CNN Architecture</h4>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              A research paper has been submitted and is currently under review. The work proposes a custom CNN architecture for brain tumor classification and focuses on designing a model that performs well on medical imaging data through careful preprocessing, augmentation, and architectural tuning.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              The study highlights the proposed CNN&apos;s design, compares it with baseline deep learning and classical machine learning approaches, and discusses the improvements observed in classification performance for the healthcare AI task.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent-cyan/30 text-accent-cyan bg-bg-secondary transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10">CNN</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent-cyan/30 text-accent-cyan bg-bg-secondary transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10">Medical AI</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent-cyan/30 text-accent-cyan bg-bg-secondary transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10">Brain Tumor</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent-cyan/30 text-accent-cyan bg-bg-secondary transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10">Research</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent-cyan/30 text-accent-cyan bg-bg-secondary transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10">Under Review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
