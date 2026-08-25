import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'VisionX',
    // grouped roles for the same company; each role keeps its own title, period, location, type, and highlights
    roles: [
      {
        role: 'AI / ML Engineer',
        type: 'Full-time',
        period: 'Nov 2024 - Aug 2026',
        location: 'New York, United States • Remote',
        summary:
          'Built and deployed production AI systems for forecasting, document intelligence, and internal automation across enterprise workflows.',
        highlights: [
          'Spearheaded an end-to-end demand forecasting and planning pipeline that replaced manual spreadsheet workflows, saving more than $200K annually in labor and lowering inventory waste through better planning accuracy.',
          'Designed and shipped an image-based cataloging and OCR system for a major US document-management client by combining custom YOLO OBB detection, OCR, and LLM-based classification to cut manual entry and improve extraction quality.',
          'Led ML initiatives across forecasting, automation, and deployment workstreams while mentoring a team of interns through daily standups, technical guidance, and weekly demos to keep cross-functional execution on track.',
          'Improved an active production computer vision model, PackageX, through targeted data augmentation and hyperparameter tuning to deliver a faster and more accurate version than the baseline.',
          'Integrated OpenAI and Google Gemini workflows into internal tools and client deliverables, turning ad hoc experimentation into repeatable production AI capabilities.',
        ],
      },
      {
        role: 'Machine Learning Intern',
        // user requested to show this as full time on the site
        // type: 'Full-time',
        period: 'Aug 2024 - Oct 2024',
        location: 'Islamabad, Pakistan • On-site',
        summary:
          'Built the foundation for document intelligence and on-device vision projects through model training, dataset handling, and application integration.',
        highlights: [
          'Trained a PaddleOCR detection model on a custom-labeled dataset, significantly improving text detection for document understanding workflows.',
          'Fine-tuned LayoutLMv3 for document sequence classification by optimizing batch size and learning rate, producing measurable accuracy improvements in downstream classification tasks.',
          'Compared object detection and semantic segmentation approaches, while handling dataset conversion, annotation preparation, and augmentation to improve model readiness.',
          'Developed Android applications that integrated on-device computer vision models for real-time edge detection and segmentation use cases.',
        ],
      },
    ],
    // combined tags (kept broad for the company-level card)
    tags: ['Python', 'Machine Learning', 'Computer Vision', 'Forecasting', 'LLMs', 'OCR', 'PyTorch', 'YOLO', 'MLOps'],
  },

  {
    company: 'Archwares',
    role: 'AI Engineer',
    type: 'Freelance',
    period: 'May 2025 - Jul 2025',
    location: 'Dubai, United Arab Emirates • Remote',
    summary:
      'Transformed a CustomGPT prototype into NORO AI, a production-grade agent framework for RAG-powered knowledge retrieval and autonomous execution.',
    highlights: [
      'Turned a prototype CustomGPT into NORO AI, a production-ready AI agent framework with RAG-based knowledge retrieval, prompt engineering, and autonomous task execution tailored for real-world business workflows.',
      'Built multimodal support for chart and image analysis, and implemented persistent per-user session management to maintain context across real-time interactions in conversational interfaces.',
      'Deployed the system through Telegram to make it accessible for live end-user interaction, creating a conversational workflow that felt natural for non-technical users.',
      'Integrated live market data APIs, including Binance, Alpha Vantage, and GoldAPI, to enable dynamic tool calling and more context-aware trading and research decisions.',
      'Containerized the backend and shipped it to production on Railway, moving the product from experimentation to a stable hosted deployment.',
    ],
    tags: ['AI Agents', 'RAG', 'Prompt Engineering', 'Telegram Bot', 'FastAPI', 'Market APIs', 'Multimodal AI', 'Session Management', 'Deployment', 'Railway'],
  },
  {
    company: 'AI & Computer Vision Lab (iVision)',
    role: 'Research Assistant, Computer Vision & Medical Imaging',
    type: 'Research',
    period: 'Oct 2023 - Jun 2024',
    location: 'Islamabad, Pakistan • On-site',
    summary:
      'Led a final-year research project on MRI-based brain tumor classification, covering architecture design, training, evaluation, and academic writing.',
    highlights: [
      'Led a final-year research effort focused on brain tumor classification from MRI scans, where the goal was to improve diagnostic accuracy under constrained compute resources and a limited benchmark setup.',
      'Designed and trained a novel CNN architecture on GPU infrastructure, then benchmarked it against baseline models to validate performance gains and technical contribution.',
      'Managed the full experimental workflow, including dataset preprocessing, training, evaluation, and ablation analysis, to keep results reproducible and evidence-driven.',
      'Co-authored the research paper and thesis from this work, contributing to the technical write-up and documentation required for academic review.',
    ],
    tags: ['CNN', 'Medical Imaging', 'MRI', 'PyTorch', 'GPU Training', 'Research', 'Model Evaluation', 'Data Preprocessing'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="font-mono text-accent-cyan text-sm tracking-[0.2em]">02. work experience</p>
            <h2 className="section-heading mt-3">Career trajectory</h2>
          </div>
          <div className="inline-flex items-center gap-2 border border-bg-border bg-bg-card/60 px-3 py-2 rounded-full text-xs font-mono text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-accent-green shadow-[0_0_12px_rgba(0,255,156,0.8)]" />
            Available for selected AI projects
          </div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <article key={`exp-${index}-${exp.company}`} className={`experience-card ${index === 0 ? 'experience-card--featured' : ''}`}>
              <div className="experience-marker">
                <span className="experience-dot" />
              </div>

              <div className="experience-content">
                {/* Company header (company name shown once, not uppercased) */}
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                  <p className="company-name">{exp.company}</p>
                  </div>
                </div>

                {/* If the entry has multiple roles (grouped), render each role separately */}
                {exp.roles ? (
                  <div className="mt-2">
                    {exp.roles.map((r, ri) => {
                      const isIntern = /intern/i.test(r.role)
                      return (
                        <div key={`role-${ri}`} className="mb-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="mt-1 font-display text-lg md:text-xl font-semibold text-text-primary">{r.role}</h3>
                            </div>

                            {r.type ? (
                              <div className="inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-card/80 px-3 py-1 text-[10px] font-mono tracking-[0.06em] text-text-secondary">
                                {!isIntern && <BriefcaseBusiness size={12} className="text-accent-cyan" />}
                                {r.type}
                              </div>
                            ) : null}
                          </div>

                          <div className="experience-meta mt-2">
                            <span>
                              <CalendarDays size={12} />
                              {r.period}
                            </span>
                            <span>
                              <MapPin size={12} />
                              {r.location}
                            </span>
                          </div>

                          <p className="experience-summary">{r.summary}</p>

                          <ul className="experience-list">
                            {r.highlights.map((h) => (
                              <li key={h}>
                                <span className="experience-bullet" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}

                    {/* Company-level tags if present */}
                    {exp.tags && (
                      <div className="experience-tags">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // single-role entry (unchanged)
                  <>
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="mt-1 font-display text-lg md:text-xl font-semibold text-text-primary">{exp.role}</h3>
                      </div>

                      {exp.type ? (
                        <div className="inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-card/80 px-3 py-1 text-[10px] font-mono tracking-[0.06em] text-text-secondary">
                          {(!/intern/i.test(exp.role)) && <BriefcaseBusiness size={12} className="text-accent-cyan" />}
                          {exp.type}
                        </div>
                      ) : null}
                    </div>

                    <div className="experience-meta">
                      <span>
                        <CalendarDays size={12} />
                        {exp.period}
                      </span>
                      <span>
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="experience-summary">{exp.summary}</p>

                    <ul className="experience-list">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight}>
                          <span className="experience-bullet" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="experience-tags">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </>
                )}

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}