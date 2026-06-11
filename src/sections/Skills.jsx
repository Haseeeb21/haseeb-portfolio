const skillGroups = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'Kotlin', 'SQL'],
  },
  {
    category: 'ML / Deep Learning',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Transformers (Hugging Face)', 'Ultralytics', 'YOLO'],
  },
  {
    category: 'Computer Vision',
    items: ['OpenCV', 'PaddleOCR', 'LayoutLMv3', 'YOLO OBB', 'Roboflow', 'Object Detection', 'Segmentation'],
  },
  {
    category: 'GenAI & NLP',
    items: ['LangChain', 'LLMs', 'RAG', 'Fine-tuning', 'Prompt Engineering', 'NER'],
  },
  {
    category: 'Data & MLOps',
    items: ['Pandas', 'NumPy', 'Weights & Biases', 'n8n', 'Data Augmentation', 'Feature Engineering'],
  },
  {
    category: 'Cloud, Backend & Tools',
    items: ['AWS', 'FastAPI', 'Docker', 'Git', 'Linux', 'Android'],
  },
]

const certifications = [
  { issuer: 'IBM', title: 'Building Deep Learning Models with TensorFlow' },
  { issuer: 'IBM', title: 'Introduction to Deep Learning & Neural Networks with Keras' },
  { issuer: 'IBM', title: 'Python for Data Science, AI & Development' },
  { issuer: 'DeepLearning.AI', title: 'Supervised Machine Learning: Regression and Classification' },
  { issuer: 'DeepLearning.AI', title: 'AI For Everyone' },
  { issuer: 'Google', title: 'Operating Systems and You: Becoming a Power User' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest">04. skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">Tech Stack</h2>
        <p className="text-text-secondary text-sm mb-12 max-w-lg">
          Tools and technologies I work with day-to-day.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left: Skills */}
          <div>
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6 flex items-center gap-3">
              <span>Skills & Technologies</span>
              <div className="flex-1 h-px bg-bg-border" />
            </h3>
            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <p className="font-mono text-xs text-accent-cyan/70 uppercase tracking-wider mb-2">
                    {group.category}
                  </p>
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
          </div>

          {/* Right: Certs + Education */}
          <div className="space-y-10">

            {/* Certifications */}
            <div>
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-1 flex items-center gap-3">
                <span>Coursera Certifications</span>
                <div className="flex-1 h-px bg-bg-border" />
              </h3>
              <p className="font-mono text-xs text-text-muted mb-5">Issued via Coursera</p>
              <div className="space-y-2.5">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-bg-card border border-bg-border rounded-lg px-4 py-3 hover:border-accent-cyan/30 transition-colors group"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="text-text-secondary text-sm leading-snug">{cert.title}</span>
                      <p className="font-mono text-xs text-text-muted mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-5 flex items-center gap-3">
                <span>Education</span>
                <div className="flex-1 h-px bg-bg-border" />
              </h3>
              <div className="bg-bg-card border border-accent-cyan/20 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-sm font-bold text-accent-cyan shrink-0 font-mono">
                    IST
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">B.S. Computer Science</h4>
                    <p className="font-mono text-xs text-text-muted mt-0.5">Institute of Space Technology, Islamabad</p>
                    <p className="font-mono text-xs text-text-muted">Sep 2020 – Jul 2024</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">
                    CGPA: 3.77 / 4.0
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                    🏅 Presidential Gold Medal
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}