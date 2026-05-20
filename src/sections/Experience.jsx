import { useState } from 'react'
import { ChevronRight, ExternalLink } from 'lucide-react'

const experiences = [
  {
    company: 'VisionX',
    tabLabel: 'Jr. ML Engineer',
    role: 'Junior Machine Learning Engineer',
    period: 'Nov 2024 – Present',
    location: 'Islamabad, Pakistan',
    highlights: [
      'Built ForecastIQ — an end-to-end demand-forecasting pipeline that eliminated manual spreadsheet work, saving $100K+/year in labor and freeing multi-million dollar capital through reduced excess inventory.',
      'Delivered custom AI solutions for Kofile, automating image-based cataloging and data extraction to reduce manual entry and improve throughput.',
      'Led ML initiatives across PromoIQ, automation, and deployment workstreams to improve operational efficiency.',
      'Mentored a team of ML interns: ran daily standups, assigned tasks, and conducted weekly technical demos.',
      'Implemented generative AI workflows for client and internal use cases, expanding product capabilities.',
      'Managed and updated APIs for ongoing AI services, ensuring seamless integration and functionality.',
    ],
    tags: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'AWS', 'LangChain', 'n8n'],
  },
  {
    company: 'VisionX',
    tabLabel: 'ML Intern',
    role: 'Machine Learning Intern',
    period: 'Aug 2024 – Oct 2024',
    location: 'Islamabad, Pakistan',
    highlights: [
      'Trained PaddleOCR Detection model by converting custom dataset labels, enhancing text detection performance.',
      'Fine-tuned LayoutLMv3 for sequence classification, tuning batch size and learning rate to improve document understanding accuracy.',
      'Trained and compared detection and segmentation models, applied augmentation techniques to improve generalization.',
      'Developed Android-based mobile applications integrating computer vision models for detection and segmentation workflows.',
    ],
    tags: ['PaddleOCR', 'LayoutLMv3', 'YOLO', 'Android', 'Data Augmentation'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <section id="experience" className="py-24 px-6 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-accent-cyan text-sm mb-3 tracking-widest">02. work experience</p>
        <h2 className="section-heading mb-12">Where I've Worked</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-52 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible shrink-0">
            {experiences.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left px-4 py-3 font-mono text-sm transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap ${
                  active === i
                    ? 'border-accent-cyan text-accent-cyan bg-accent-cyan/5'
                    : 'border-bg-border text-text-secondary hover:text-text-primary hover:border-text-muted'
                }`}
              >
                {e.company}
                <br />
                <span className="text-xs opacity-60">{e.tabLabel}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between flex-wrap gap-2 mb-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {exp.role}{' '}
                  <span className="text-accent-cyan">@ {exp.company}</span>
                </h3>
                <p className="font-mono text-xs text-text-muted mt-1">{exp.period} · {exp.location}</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                  <ChevronRight size={14} className="text-accent-cyan mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}