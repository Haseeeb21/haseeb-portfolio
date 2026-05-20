export default function Footer() {
  return (
    <footer className="border-t border-bg-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-text-muted">
          Designed & built by{' '}
          <span className="text-accent-cyan">Haseeb Ul Hassan</span>
        </span>
        <span className="font-mono text-xs text-text-muted">
          React · Vite · Tailwind CSS
        </span>
      </div>
    </footer>
  )
}
