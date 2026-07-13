# Amaresh Konchada — Portfolio Website

A static, single-page professional portfolio for an Enterprise Solution Architect
(Adobe Experience Platform, Real-Time CDP, AJO) — built with plain HTML5, CSS3,
and vanilla JavaScript, designed to be hosted for free on GitHub Pages. No
frameworks, no build step.

## Sections

Hero (with photo) · About · Skills (Cloud/Data, AI, Leadership) · Featured
Projects · Work Experience Timeline · Certifications · Education ·
Achievements · Blog/Articles · Contact · Footer.

Two supporting article pages ([`tech-strategy.html`](tech-strategy.html),
[`genai-lessons.html`](genai-lessons.html)) are linked from the Blog section.

## Folder structure

```
Professional Website/
├── index.html              Main portfolio page (all sections)
├── tech-strategy.html      Blog article: Well-Architected Framework
├── genai-lessons.html      Blog article: Scaling GenAI in the enterprise
├── styles/
│   └── style.css           All site styles (light + dark theme)
├── scripts/
│   └── main.js             Nav toggle, theme toggle, scroll-spy, contact form
├── images/                 Avatar placeholder + project thumbnail SVGs
├── assets/
│   └── favicon.svg
├── resume/                 Downloadable / printable resume + ATS text version
├── docs/
│   └── DEPLOYMENT.md       GitHub Pages deployment steps
├── temp/                   Scratch notes used while drafting article content
└── CLAUDE.md                Design & content spec for this project
```

## Profile photo

The hero section uses `images/profile.jpg` (square headshot, 560×560). To swap
it, replace that file with a new square image of the same name.

## Customizing content

Everything is hand-authored HTML — no CMS or data file. To update:

- **Experience / Education**: edit the `#experience` / `#education` sections in
  `index.html`.
- **Resume**: keep `resume/resume.html`, `resume/resume.txt`, and
  `resume/Amaresh_Konchada_Resume.pdf` in sync with the
  Experience/Certifications/Education sections. See
  [`resume/README.md`](resume/README.md) for exporting a PDF.
- **Projects, Certifications, Achievements**: each is a repeated `<article
  class="card ...">` block — copy/paste a block and edit its text to add more.
- **Colors / theme**: CSS custom properties live at the top of
  `styles/style.css` (`:root` for light mode, `[data-theme="dark"]` for dark).

## Running locally

No install needed:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploying

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for step-by-step GitHub Pages
setup.

## Tech stack

HTML5, CSS3 (custom properties, Flexbox, Grid), vanilla JavaScript (ES6, no
dependencies), Google Fonts (Inter). Fully static — compatible with GitHub
Pages out of the box.
