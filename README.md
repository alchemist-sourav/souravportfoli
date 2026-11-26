# Sourav S. — Developer Portfolio

A personal portfolio showcasing my work across **AI engineering, full-stack development and product design**. Built to present selected projects, technical interests, experience and ways to get in touch.

## About

I’m Sourav, an Artificial Intelligence & Data Science engineering student and developer from Kerala, India. I enjoy turning complex ideas into useful software — from AI-powered applications and security tooling to full-stack products and thoughtful user interfaces.

This portfolio is built as a single-page React application, with a focus on clear content hierarchy, responsive layouts, accessible interactions and subtle motion.

## Portfolio sections

- **Hero:** Personal positioning and links to selected work and GitHub.
- **About:** Background, engineering interests and education.
- **Projects:** Selected AI, security and software projects.
- **Design gallery:** UI/UX and graphic-design work.
- **Experience:** Internships, simulations and community roles.
- **Skills:** Technologies and tools grouped by discipline.
- **Contact:** Email contact, social links and a pre-filled email-draft form.

## Featured projects

| Project | What it does | Repository |
| --- | --- | --- |
| **AI_REDTEAM** | LLM application security assessment platform for configuring targets, running adversarial tests, evaluating model responses and producing risk reports. Backend MVP is implemented; the dashboard is in development. | [GitHub](https://github.com/alchemist-sourav/AI_REDTEAM) |
| **NEETHI** | AI-powered legal-tech platform for Indian legal awareness, including a RAG-based legal assistant and legal information discovery. | [GitHub](https://github.com/alchemist-sourav/NEETHI) |
| **Alchemist OS** | Personal AI assistant architecture with persistent memory, voice interaction, browser automation, screen awareness and tool execution. | [GitHub](https://github.com/alchemist-sourav/-Alchemist-OS) |
| **OpportunityHunter AI** | Opportunity-discovery platform for grants, jobs and growth opportunities, with a privacy-conscious, free-tier-friendly stack. | [GitHub](https://github.com/alchemist-sourav/OpportunityHunter-AI-) |
| **CIVORA** | AI-powered civil-engineering decision-support architecture combining Agentic RAG, predictive services and GIS. The repository currently documents its architecture and development direction. | [GitHub](https://github.com/alchemist-sourav/CIVORA) |

Project descriptions reflect the current repository documentation; implementation status varies by project.

## Tech stack

- **Frontend:** React 19, Vite 8
- **Styling:** Tailwind CSS 3
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Language:** JavaScript (ES modules)
- **Deployment:** Vercel

## Run locally

### Requirements

- Node.js (current LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/alchemist-sourav/souravportfoli.git
cd souravportfoli
npm install
```

### Development

```bash
npm run dev
```

Vite prints the local development URL in the terminal (typically `http://localhost:5173`).

### Quality checks

```bash
npm run lint
npm run build
npm run preview
```

- `npm run lint` runs ESLint.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.

## Project structure

```text
souravportfoli/
├── public/
│   ├── certificates/        # Certificates linked from the experience section
│   ├── images/              # Portfolio and design-gallery assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── sections/        # Hero, About, Projects, Design, Experience, Skills, Contact
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Contact

- **Email:** [souravs51380@gmail.com](mailto:souravs51380@gmail.com)
- **GitHub:** [@alchemist-sourav](https://github.com/alchemist-sourav)
- **LinkedIn:** [Sourav](https://www.linkedin.com/in/souravalchemist)
- **Digital profile:** [Bitsbee Tree](https://bitsb.ee/sourav.s)
- **Location:** Kerala, India

---

Built by Sourav S.
