const skillGroups = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'SQL'],
  },
  {
    category: 'ML / DL Frameworks',
    items: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Transformers', 'Ultralytics', 'YOLO'],
  },
  {
    category: 'GenAI & NLP',
    items: ['LangChain', 'LLMs', 'RAG', 'Fine-tuning', 'LayoutLMv3', 'PaddleOCR'],
  },
  {
    category: 'Data & MLOps',
    items: ['Pandas', 'NumPy', 'Roboflow', 'Weights & Biases', 'n8n', 'Docker'],
  },
  {
    category: 'Cloud & Backend',
    items: ['AWS', 'FastAPI', 'Git', 'Linux', 'Android'],
  },
]

const certifications = [
  'IBM — Building Deep Learning Models with TensorFlow',
  'IBM — Introduction to Deep Learning & Neural Networks with Keras',
  'IBM — Python for Data Science, AI & Development',
  'Supervised ML: Regression & Classification (Multiple Partners)',
  'DeepLearning.AI — AI For Everyone',
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest">04. skills</p>
        <h2 className="section-heading mb-12">Tech Stack</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded border border-bg-border bg-bg-card text-text-secondary hover:border-accent-cyan hover:text-accent-cyan transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certs */}
          <div>
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-bg-card border border-bg-border rounded-lg px-4 py-3 hover:border-accent-cyan/30 transition-colors group"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-text-secondary text-sm leading-snug">{cert}</span>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-8 bg-bg-card border border-accent-cyan/20 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-1">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-lg font-bold text-accent-cyan shrink-0">
                  IST
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">B.S. Computer Science</h4>
                  <p className="font-mono text-xs text-text-muted">Institute of Space Technology · 2020–2024</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <span className="font-mono text-xs px-2 py-1 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">
                  CGPA: 3.77 / 4.0
                </span>
                <span className="font-mono text-xs px-2 py-1 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                  Presidential Gold Medal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
