# Haseeb Ul Hassan - Portfolio

Techy portfolio built with React + Vite + Tailwind CSS.

<a href="https://haseeeb-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">🔗 View Portfolio</a>

## Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI components |
| Vite | Build tool (fast dev server) |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |

## Setup & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/haseeeb21/haseeb-portfolio.git

# 2. Navigate into the project directory
cd haseeb-portfolio

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
# Opens at http://localhost:5173
```

## Build for Production

```bash
npm run build
# Output goes to /dist folder

npm run preview
# Preview the production build locally
```

## Customize

- **Your Contact URLs**: Edit `src/sections/Hero.jsx` and `src/sections/Contact.jsx`
- **Add projects**: Edit `src/sections/Projects.jsx` - add to the `projects` array
- **Colors**: Edit `tailwind.config.js` under `colors`
- **Fonts**: Change in `tailwind.config.js` and `index.html`
