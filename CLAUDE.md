# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project

Professional Portfolio Website

A static, single-page professional portfolio hosted on GitHub Pages. Built with plain HTML5, CSS3, and vanilla JavaScript—no frameworks, no build step, no dependencies.

The goal is to create a modern, elegant, responsive, high-performance website that highlights professional experience, projects, technical expertise, leadership, certifications, and achievements. The site is designed to be shared with recruiters, hiring managers, customers, conference organizers, and the AI/Data Engineering community.

---

# Development Commands

```bash
# Start local development server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

No build step, no install needed. Direct file editing.

---

# Actual Folder Structure

```
Professional Website/
├── index.html                 Main portfolio page (all sections)
├── tech-strategy.html         Blog article: Well-Architected Framework
├── genai-lessons.html         Blog article: Scaling GenAI in the enterprise
├── styles/
│   └── style.css              All site styles (light + dark mode support)
├── scripts/
│   └── main.js                Nav toggle, theme toggle, scroll-spy, contact form
├── images/                    Avatar placeholder + project thumbnail SVGs
├── assets/
│   └── favicon.svg
├── resume/
│   ├── resume.html            Interactive resume HTML
│   ├── resume.txt             ATS plain-text version
│   ├── Amaresh_Konchada_Resume.pdf  Downloadable PDF resume
│   └── README.md              Resume export instructions
├── docs/
│   └── DEPLOYMENT.md          GitHub Pages setup steps
├── temp/                      Scratch notes (not deployed)
└── CLAUDE.md
```

---

# Tech Stack

**Use only:**
- HTML5
- CSS3 (custom properties, Flexbox, Grid)
- Vanilla JavaScript (ES6, no dependencies)
- Google Fonts (Inter)

**Do NOT use:**
- React, Angular, Vue
- Bootstrap, Tailwind, jQuery
- Build tools, transpilers, bundlers
- Frameworks of any kind

The website must be completely static and GitHub Pages compatible—no build step.

---

# Key Files & Their Purpose

**index.html**: Main portfolio page containing all sections (hero, about, skills, projects, experience timeline, certifications, education, achievements, blog links, contact, footer).

**tech-strategy.html & genai-lessons.html**: Standalone blog articles linked from the Blog section. Each has its own styling and navigation back to the main site.

**styles/style.css**: Single stylesheet for the entire site. Organized into sections (variables, global, layout, navigation, hero, cards, buttons, footer, media queries). Supports light and dark mode via `:root` and `[data-theme="dark"]` selectors.

**scripts/main.js**: Lightweight utility functions—mobile nav toggle, theme toggle, scroll-spy highlighting, contact form handling. No DOM libraries.

**resume/**: Keep `resume.html` and `resume.txt` in sync with the Experience/Certifications/Education sections in `index.html`. See `resume/README.md` for PDF export instructions.

---

# Content Management

Everything is hand-authored HTML—no CMS or data files.

**To add/edit:**
- **Experience/Education**: Edit the `#experience` and `#education` sections in `index.html`. Content mirrors the real resume (`resume/Amaresh_Konchada_Resume.pdf`).
- **Projects, Certifications, Achievements**: Copy/paste a `<article class="card ...">` block and update its text.
- **Resume**: Keep `resume/resume.html`, `resume/resume.txt`, and `resume/Amaresh_Konchada_Resume.pdf` in sync with the main site.
- **Colors/Theme**: Edit CSS custom properties at the top of `styles/style.css` (`:root` for light, `[data-theme="dark"]` for dark).
- **Avatar**: The hero uses `images/profile.jpg` (square 560×560 headshot). Replace the file to change it.

---

# Design Goals

The website must be:
- Clean, minimalistic, modern, premium
- Easy to navigate (smooth scroll to sections)
- Mobile responsive (desktop, tablet, mobile)
- Fast loading (Lighthouse >95 across all categories)
- Accessible (semantic HTML, aria labels, keyboard nav, color contrast)
- SEO friendly (title, meta description, Open Graph tags, canonical URLs)

Avoid flashy animations, clutter, or excessive gradients. Use whitespace and typography hierarchy effectively.

---

# Responsiveness & Performance

Use Flexbox and CSS Grid. Avoid fixed widths. Test on desktop, tablet, and mobile.

Optimize images (compress before use, descriptive filenames). Lazy load images where appropriate.

Target Lighthouse scores:
- Performance >95
- Accessibility >95
- SEO >95
- Best Practices >95

---

# CSS Organization

Organize `style.css` into clear sections:
1. Variables (colors, fonts, spacing)
2. Global (reset, base elements)
3. Layout
4. Navigation
5. Hero
6. Cards
7. Buttons
8. Footer
9. Media queries

Use CSS variables for colors to support theme switching. Avoid inline CSS.

---

# JavaScript Standards

Keep JavaScript lightweight. Use ES6 features. Separate DOM logic from utility functions. Avoid global variables.

In `main.js`, keep functions small and focused:
- Nav toggle for mobile
- Theme toggle (light/dark)
- Scroll-spy for active nav highlighting
- Contact form handling

---

# Git Workflow

Commit after each completed section with descriptive messages:
- "Add hero section"
- "Improve responsive navigation"
- "Add certifications"
- "Optimize images"
- "Fix mobile layout"

Avoid large commits. One feature per commit.

---

# Deployment

See `docs/DEPLOYMENT.md` for step-by-step GitHub Pages setup.

The site deploys directly from the repository root—no build step required.

---

# Website Sections

The homepage should contain:

1. Hero Section
2. About Me
3. Professional Summary
4. Technical Skills
5. AI Skills
6. Leadership Skills
7. Featured Projects
8. Certifications
9. Work Experience Timeline
10. Education
11. Achievements
12. Blog / Articles (optional)
13. Contact
14. Footer

Navigation should scroll smoothly to each section.

---

# Design Principles

Use consistent spacing.

Use reusable CSS classes.

Keep typography consistent.

Avoid inline CSS.

Avoid inline JavaScript.

Keep JavaScript modular.

---

# Color Theme

Professional blue/white/gray theme.

Support Light Mode.

Design Dark Mode so it can be enabled later.

Do not use excessive gradients.

---

# Typography

Use Google Fonts.

Preferred fonts:

- Inter
- Poppins
- Roboto

Maintain a clear visual hierarchy.

---

# Responsiveness

Desktop

Tablet

Mobile

All pages must be fully responsive.

Use Flexbox and CSS Grid.

Avoid fixed widths.

---

# Performance

Optimize images.

Lazy load images.

Minimize JavaScript.

Avoid unnecessary DOM manipulation.

Keep Lighthouse scores above:

Performance >95

Accessibility >95

SEO >95

Best Practices >95

---

# Accessibility

Use semantic HTML.

Use aria labels where needed.

Maintain proper heading hierarchy.

Ensure sufficient color contrast.

Support keyboard navigation.

---

# SEO

Every page should include:

- title
- meta description
- Open Graph tags
- favicon
- canonical URL

Use semantic HTML.

---

# Coding Standards

Use meaningful names.

Keep functions small.

Avoid duplicated code.

Comment only when useful.

Keep HTML clean.

Prefer reusable CSS classes.

---

# JavaScript

Keep JavaScript lightweight.

Use ES6.

Separate DOM logic from utility functions.

Avoid global variables.

---

# CSS

Organize CSS into sections.

Example:

Variables

Global

Layout

Navigation

Hero

Cards

Buttons

Footer

Media Queries

Use CSS variables for colors.

---

# Images

Store images under:

/images

Compress images before use.

Use descriptive filenames.

---

# Git Workflow

Commit after each completed section.

Commit messages should be:

Add hero section

Improve responsive navigation

Add certifications

Optimize images

Fix mobile layout

Avoid large commits.

---

# Documentation

Update README whenever a major feature is added.

Document folder structure.

Document deployment process.

---

# Response Style

Before generating code:

1. Analyze the request.
2. Explain your approach.
3. Suggest improvements if applicable.
4. Wait for approval before making major structural changes.

When generating code:

- Produce production-quality code.
- Explain complex logic briefly.
- Preserve the existing project structure.
- Never overwrite unrelated files.

---

# Preferred Workflow

Always work in small iterations.

One section at a time.

After completing each section:

- Review code quality.
- Check responsiveness.
- Check accessibility.
- Suggest improvements before moving to the next section.

Never generate the entire website in one response.