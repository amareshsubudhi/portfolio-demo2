# Resume

This folder holds the downloadable/printable resume that the site's "Resume" nav
button links to.

## Files

- `resume.html` + `resume.css` — a styled, printable resume page. Open it and click
  **Print / Save as PDF** (or `Cmd+P` / `Ctrl+P` → "Save as PDF") to generate a real PDF.
- `resume.txt` — a plain-text, ATS-friendly version for job portals that don't accept
  PDFs or HTML.

## Adding a real PDF

Once you've exported one from `resume.html`, save it here as:

```
resume/Amaresh-Konchada-Resume.pdf
```

Then update the "Resume" button in `index.html`'s nav (`href="resume/resume.html"`)
to point at the PDF instead, if you'd rather link a static file directly.

## Keeping content in sync

The resume mirrors the Experience, Certifications, and Education sections on the
main site (`../index.html`). When you update one, update the other.
