# Chirag Jangid // Premium Developer Portfolio & Digital Terminal

An award-worthy, premium, fully responsive, and recruiter-optimized personal portfolio website designed for **Chirag Jangid**, Frontend Developer and Cyber Security BCA Graduate. 

This terminal showcases frontend engineering expertise, core products, technical skills, certifications, and real-time GitHub activity using fluid layouts, premium glassmorphism themes, and high-fidelity interaction models.

---

## 🎨 Visual Identity & Design System

- **Dual-Theme Synchronization**: Supports immediate dark/light visual modes using native CSS variables, Tailwind CSS v4, and smooth `motion` icon state flips.
- **Micro-Interactions & Transitions**: Smooth scroll tracking indicators, a dynamic floating particle layout, responsive card hover lighting, and custom typed displays.
- **Jaipur Geographic Hub**: An illustrated, schematic cartography card representing Chirag's GMT+5:30 developer timezone.
- **Recruiter Utilities**: A print-ready, high-fidelity resume document accessible instantly via the **Download Resume** control deck.

---

## 🛠️ Technological Architecture

- **Front-End core**: React.js 19 + TypeScript + Vite (Bundler)
- **Styling Pipeline**: Tailwind CSS v4 + Inter, Space Grotesk, and JetBrains Mono fonts
- **Fluid Animation Engine**: Framer Motion (`motion` package v12)
- **APIs & Dynamic Feeds**: GitHub REST API (public endpoints with offline high-fidelity local cache fallbacks)
- **Contact Desk**: Stateful validation form (designed for seamless EmailJS bindings)

---

## 📂 Source Code Structure

```text
/
├── .env.example              # Environment variables template
├── index.html                # Main html wrapper node
├── metadata.json             # AI Studio applet manifest
├── package.json              # Project scripting & dependency registry
├── tsconfig.json             # TypeScript rules definition
├── vite.config.ts            # Vite compiler routing alias configuration
└── src/
    ├── App.tsx               # Central UI coordinating node
    ├── data.ts               # Hardened data definitions (case-studies, timelines, achievements)
    ├── index.css             # Tailwind v4 imports, global typography, scrollbars, animations
    ├── main.tsx              # React mounting root
    ├── types.ts              # TypeScript structural interfaces (Project, SkillCategory, etc.)
    └── components/
        ├── AnimatedStats.tsx # Count indicators with floating grid cards
        ├── ContactForm.tsx   # Interaction form & vector maps
        ├── GithubDashboard.tsx # Live API connection, repo stars, & Contribution Map
        ├── LoadingScreen.tsx # Multi-stage percentage preloader
        ├── ProjectCard.tsx   # Dynamic hover transformations
        ├── ProjectDetailsModal.tsx # Full-page case study blueprint reader
        └── ThemeToggle.tsx   # Mode transition switcher
```

---

## 🚀 Deployment Configurations

This portfolio is static-site-ready, suitable for publishing immediately to **GitHub Pages** or **Vercel**.

### 1. Manual Static Compilation
Generate optimized static bundles locally:
```bash
npm run build
```
This produces an asset folder in `dist/` ready to host on any CDN.

### 2. GitHub Actions Deployment Workflow (`.github/workflows/deploy.yml`)
To automate publishing to GitHub Pages on every `git push` to your master branch, place the following configuration inside your repository at `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [ "main", "master" ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Setup Node.js Runtime
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Project Dependencies
        run: npm ci

      - name: Compile and Bundle Application
        run: npm run build

      - name: Upload Build Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. Vercel Configuration (`vercel.json`)
For Vercel instant routing, a `vercel.json` file is supported at the project root:
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🔒 Security Accreditations
Chirag's background in computer applications is reinforced by prestigious certifications:
- **Certified Ethical Hacker (CEH)** – EC-Council
- **Certified Network Defender (CND)** – EC-Council

*The codebase respects modern security principles, using HTTPS requests for API operations, ignoring sensitive tokens, and adhering to strict frame permissions inside sandboxed environments.*
