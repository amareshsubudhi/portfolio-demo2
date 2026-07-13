# Amaresh Konchada — Portfolio Website

A static, single-page professional portfolio for a Data & AI leader — built with
plain HTML5, CSS3, and vanilla JavaScript, designed to be hosted for free on
GitHub Pages. No frameworks, no build step.

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

## Replacing the placeholder photo

The hero section currently shows a generated monogram avatar
(`images/profile-placeholder.svg`). To use a real photo:

1. Add your headshot as `images/profile.jpg` (square, at least 500×500px looks best).
2. In `index.html`, find the `<img ... class="hero__avatar">` tag inside
   `<section id="hero">` and change `src="images/profile-placeholder.svg"` to
   `src="images/profile.jpg"`.

## Customizing content

Everything is hand-authored HTML — no CMS or data file. To update:

- **Experience / Education**: edit the `#experience` / `#education` sections in
  `index.html`. Employer names are currently generalized descriptors (e.g.
  "Global Financial Services Enterprise") — swap in real company names when
  ready to publish.
- **Resume**: keep `resume/resume.html` and `resume/resume.txt` in sync with
  the Experience/Certifications/Education sections. See
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
