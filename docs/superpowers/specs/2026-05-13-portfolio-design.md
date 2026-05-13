# Modern Developer Portfolio Design Specification

## Goal
To build a modern, high-end developer portfolio using Next.js, Tailwind CSS, and Framer Motion, featuring a sleek, dark-themed 'Minimalist Tech' aesthetic with a 'Gold Standard' accent, highlighting Haseeb Ul Hassan's role as an AI/ML Engineer and his Presidential Gold Medal. The portfolio will be a single-page scrolling application with dedicated sections for Experience, Projects, and Skills, parsed from the provided resume.

## Architecture

The portfolio will be a Next.js application, providing server-side rendering (SSR) capabilities for improved performance and SEO. Tailwind CSS will be used for utility-first styling, ensuring a highly customizable and efficient design process. Framer Motion will handle all animations, creating a smooth and interactive user experience. Content will be statically generated from the `Haseeb_Ul_Hassan_Resume.md` file during the build process.

## Tech Stack
*   **Framework:** Next.js (React)
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Content Parsing:** Markdown processing library (e.g., `gray-matter` or custom parsing for `Haseeb_Ul_Hassan_Resume.md`)

## Design Aesthetic: The Gold Standard (Minimalist Tech with Golden Accents)
*   **Color Palette:**
    *   Primary Background: Deep charcoal/black (#050505)
    *   Accent Color: Metallic Gold (for highlights, borders, hover effects)
    *   Text Colors: Soft grays and whites for readability.
    *   Card Backgrounds: Darker gray (#1a1a1a) for sections like Experience and Projects; even darker gray (#2a2a2a) for skill pills.
*   **Typography:** Modern sans-serif fonts (e.g., 'Inter', 'Plus Jakarta Sans') for headings and body text, ensuring excellent readability on dark backgrounds.
*   **Animations:** Subtle, smooth animations using Framer Motion, focusing on fades, slight movements, and elegant hover effects.

## Components and Sections

The portfolio will be a single-page application with the following sections:

### 1. Hero Section: The Golden Introduction
**Goal:** Immediately establish your role, highlight your Presidential Gold Medal, and provide a strong visual impact.

**Layout:**
*   Full-width, center-aligned content.
*   Background: Deep charcoal/black (#050505) with a very subtle, almost imperceptible dark radial gradient.
*   Main Content:
    *   Your Name: `Haseeb Ul Hassan` (Large, bold, sans-serif).
    *   Role: `AI / Machine Learning Engineer` (Slightly smaller, regular weight, sans-serif).
    *   Highlight: `Presidential Gold Medalist` (Prominently displayed, possibly with a subtle gold icon or an animated gold shimmer effect on the text).
    *   Brief Tagline from Summary: `Building and deploying AI products for enterprise clients.`
    *   "View My Work" Button: A sleek button with a **gold border** and **gold text on hover**, linking to the Experience section.

**Visual Elements:**
*   Golden Accent: All interactive elements (buttons, links) will use the metallic gold accent color.
*   Subtle Animations (Framer Motion):
    *   Text elements (Name, Role, Highlight) will fade in with a slight upward motion.
    *   The "View My Work" button will have a gentle pulse or gold-glow on hover.
*   Typography: Modern sans-serif fonts throughout.

### 2. Experience Section: Milestones in Gold
**Goal:** Showcase your professional journey and key achievements, particularly at ForecastIQ and VisionX.

**Layout:**
*   Section Header: `WORK EXPERIENCE` (Uppercase, slightly smaller than main name in Hero, subtle gold underline/accent).
*   Individual Experience Cards: Each role (VisionX Jr. ML Engineer, VisionX ML Intern) will be presented as a distinct card.
    *   Card Structure:
        *   Company Name: `VisionX` (Bold, prominent).
        *   Role & Dates: `Junior Machine Learning Engineer | Nov 2024 – Present` (Smaller, regular).
        *   Description: Bullet points from your resume, parsed and formatted for readability. Key achievements (e.g., "Built **ForecastIQ**... saving $100K+/year") will be highlighted with a **gold-colored bullet point** or a subtle golden text accent.

**Visual Elements:**
*   Card Styling: Dark gray background (#1a1a1a) with a subtle gold border on hover. Clean, rounded corners.
*   Timeline Accent: A very subtle, thin vertical gold line could run alongside the experience cards.
*   Animations (Framer Motion): Each experience card will fade in with a slight delay as the user scrolls, creating a staggered reveal effect. Hovering over a card will trigger a soft gold glow.

### 3. Projects Section: Golden Innovations
**Goal:** Showcase your impactful projects, including NORO AI and Book Spine Detection, with clear descriptions and visual appeal.

**Layout:**
*   Section Header: `SELECTED PROJECTS` (Uppercase, subtle gold accent).
*   Project Grid: Projects will be displayed in a responsive grid layout (e.g., 2 or 3 columns on desktop, single column on mobile).
*   Individual Project Cards: Each project will have its own card.
    *   Card Structure:
        *   Project Title: `Automated Book Spine Detection and Information Extraction System` (Bold, prominent).
        *   Description: Parsed from your resume, focusing on technologies used and impact. Key technologies/keywords could be highlighted with **gold-colored text**.
        *   (Optional) Links: If available, GitHub or live demo links will be subtle gold icons.

**Visual Elements:**
*   Card Styling: Similar dark gray background as experience cards, with a more pronounced gold border on hover. Clean, rounded corners.
*   Placeholder Images/Icons: For each project, a placeholder image or a relevant icon (perhaps a subtle gold-themed icon) can be used.
*   Animations (Framer Motion): Projects cards will also fade in with a staggered scroll-based animation. Hovering over a project card will expand it slightly and trigger a gold shadow/glow effect.

### 4. Skills Section: The Golden Arsenal
**Goal:** Present your technical skills comprehensively in an easy-to-read grid format.

**Layout:**
*   Section Header: `SKILLS` (Uppercase, subtle gold accent).
*   Skills Grid: Skills will be displayed in a responsive grid.
*   Individual Skill "Pills"/Tags: Each skill (`Python`, `PyTorch`, `TensorFlow`, etc.) will be represented as a small, elegant "pill" or tag.

**Visual Elements:**
*   Pill Styling: Darker gray background (#2a2a2a) with subtle rounded corners. The text of the skill will be light gray. On hover, the pill will show a subtle gold outline or a light gold text color.
*   Animations (Framer Motion): Skill pills will animate in a "staggered grid" fashion as they come into view. Hover effects will be quick and responsive.

### 5. Contact/Footer Section: The Golden Reach
**Goal:** Provide clear and accessible ways for visitors to connect, adhering to the 'Social/Direct Links' preference.

**Layout:**
*   Section Header (Optional): Could be `GET IN TOUCH` or `CONNECT` (Uppercase, subtle gold accent), or simply implied by the presence of links.
*   Link Grouping: Icons for LinkedIn, GitHub, and an Email icon, horizontally arranged and center-aligned.
*   Copyright/Credit: A small copyright notice at the very bottom.

**Visual Elements:**
*   Iconography: High-quality, minimalist icons for LinkedIn, GitHub, and Email. These icons will be a subtle gray by default and turn **gold on hover**, with a smooth transition.
*   Background: Continues the deep charcoal/black (#050505) theme.
*   Animations (Framer Motion): Icons will have a slight scale-up and gold-glow effect on hover.

## Content Parsing Strategy

The `Haseeb_Ul_Hassan_Resume.md` file will be parsed to extract information for each section:
*   **Hero:** Name, Role, and a brief tagline from the Summary section.
*   **Experience:** Company, Role, Dates, and bullet-point descriptions.
*   **Projects:** Project Title and descriptions.
*   **Skills:** A list of skills under the 'SKILLS' heading.
*   **Contact/Footer:** LinkedIn, GitHub, and Email from the header.

Regular expressions and string manipulation will be used to extract the relevant data from the Markdown file. Special attention will be paid to highlighting keywords and achievements as per the design.