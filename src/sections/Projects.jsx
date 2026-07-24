import { ExternalLink, Github, Brain, TrendingUp, Bot, BookOpen, Gauge, Activity, Wrench } from 'lucide-react'

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
    color: 'accent-lime',
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
  {
    icon: Wrench, 
    title: 'Predictive Maintenance for Industrial Machines',
    description: 'End-to-end MLOps pipeline predicting machine failure from live sensor data (temperature, torque, rotational speed, tool wear). Handled severe class imbalance with class-weighting and SMOTE, tracked experiments and registered models with MLflow, served predictions via a FastAPI + Streamlit demo, and monitored data drift in production with Evidently.',
    tags: ['MLflow', 'FastAPI', 'Streamlit', 'XGBoost', 'Scikit-learn', 'Evidently', 'MLOps'],
    highlight: 'MLOps / Industrial AI',
    color: 'accent-orange',
    github: 'https://github.com/Haseeeb21/predictive-maintenance-AI4I',
  },
]

const colorMap = {
  'accent-green': { border: 'border-accent-green/30', text: 'text-accent-green', bg: 'bg-accent-green/10', badge: 'text-accent-green', tag: 'border-accent-green/30 text-accent-green bg-bg-secondary hover:border-accent-green hover:text-accent-green hover:bg-accent-green/10', iconColor: '#00FF9C', borderColor: 'rgba(0, 255, 156, 0.3)', bgColor: 'rgba(0, 255, 156, 0.1)' },
  'accent-cyan': { border: 'border-accent-cyan/30', text: 'text-accent-cyan', bg: 'bg-accent-cyan/10', badge: 'text-accent-cyan', tag: 'border-accent-cyan/30 text-accent-cyan bg-bg-secondary hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10', iconColor: '#00D4FF', borderColor: 'rgba(0, 212, 255, 0.3)', bgColor: 'rgba(0, 212, 255, 0.1)' },
  'accent-purple': { border: 'border-accent-purple/30', text: 'text-accent-purple', bg: 'bg-accent-purple/10', badge: 'text-accent-purple', tag: 'border-accent-purple/30 text-accent-purple bg-bg-secondary hover:border-accent-purple hover:text-accent-purple hover:bg-accent-purple/10', iconColor: '#7C3AED', borderColor: 'rgba(124, 58, 237, 0.3)', bgColor: 'rgba(124, 58, 237, 0.1)' },
  'accent-orange': { border: 'border-accent-orange/30', text: 'text-accent-orange', bg: 'bg-accent-orange/10', badge: 'text-accent-orange', tag: 'border-accent-orange/30 text-accent-orange bg-bg-secondary hover:border-accent-orange hover:text-accent-orange hover:bg-accent-orange/10', iconColor: '#F2A623', borderColor: 'rgba(242, 166, 35, 0.3)', bgColor: 'rgba(242, 166, 35, 0.1)' },
  'accent-red': { border: 'border-accent-red/30', text: 'text-accent-red', bg: 'bg-accent-red/10', badge: 'text-accent-red', tag: 'border-accent-red/30 text-accent-red bg-bg-secondary hover:border-accent-red hover:text-accent-red hover:bg-accent-red/10', iconColor: '#E24B4A', borderColor: 'rgba(226, 75, 74, 0.3)', bgColor: 'rgba(226, 75, 74, 0.1)' },
  'accent-pink': { border: 'border-pink-400/30', text: 'text-pink-400', bg: 'bg-pink-400/10', badge: 'text-pink-400', tag: 'border-pink-400/30 text-pink-400 bg-bg-secondary hover:border-pink-400 hover:text-pink-400 hover:bg-pink-400/10', iconColor: '#F472B6', borderColor: 'rgba(244, 114, 182, 0.3)', bgColor: 'rgba(244, 114, 182, 0.1)' },
  'accent-lime': { border: 'border-lime-400/30', text: 'text-lime-400', bg: 'bg-lime-400/10', badge: 'text-lime-400', tag: 'border-lime-400/30 text-lime-400 bg-bg-secondary hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10', iconColor: '#A3E635', borderColor: 'rgba(163, 230, 53, 0.3)', bgColor: 'rgba(163, 230, 53, 0.1)' },
  'accent-sky': { border: 'border-sky-400/30', text: 'text-sky-400', bg: 'bg-sky-400/10', badge: 'text-sky-400', tag: 'border-sky-400/30 text-sky-400 bg-bg-secondary hover:border-sky-400 hover:text-sky-400 hover:bg-sky-400/10', iconColor: '#38BDF8', borderColor: 'rgba(56, 189, 248, 0.3)', bgColor: 'rgba(56, 189, 248, 0.1)' },
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
          {projects.map((project) => {
            const colors = colorMap[project.color]
            const Icon = project.icon

            const CardContent = (
              <div
                className={`bg-bg-card border ${colors.border} rounded-xl p-6 hover:bg-bg-secondary transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl h-full`}
                style={{ boxShadow: 'none', borderColor: colors.borderColor }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${colors.bg}`} style={{ backgroundColor: colors.bgColor }}>
                    <Icon size={20} className={colors.text} style={{ color: colors.iconColor }} />
                  </div>
                  <span className={`font-mono text-xs px-2 py-1 rounded border ${colors.border} ${colors.badge} bg-transparent`} style={{ color: colors.iconColor, borderColor: colors.borderColor }}>
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
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded border transition-all duration-200"
                      style={{
                        color: colors.iconColor,
                        borderColor: colors.borderColor,
                        backgroundColor: colors.bgColor,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = colors.iconColor
                        e.currentTarget.style.borderColor = colors.iconColor
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = colors.iconColor
                        e.currentTarget.style.borderColor = colors.borderColor
                        e.currentTarget.style.backgroundColor = colors.bgColor
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )

            return project.github ? (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {CardContent}
              </a>
            ) : (
              <div key={project.title} className="h-full">{CardContent}</div>
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
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent-cyan/30 text-accent-cyan bg-bg-secondary transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10">ML Classification</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent-cyan/30 text-accent-cyan bg-bg-secondary transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10">Research</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-accent-cyan/30 text-accent-cyan bg-bg-secondary transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/10">Under Review</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
