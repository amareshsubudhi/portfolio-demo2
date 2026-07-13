# Deployment — GitHub Pages

This site is fully static (HTML/CSS/vanilla JS), so it deploys to GitHub Pages
with no build step.

## First-time setup

1. Create a new GitHub repository (e.g. `amareshsubudhi.github.io` for a root
   user site, or any name like `portfolio` for a project site).
2. From this folder, initialize and push:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/amareshsubudhi/<repo-name>.git
   git push -u origin main
   ```

3. In the GitHub repo: **Settings → Pages → Build and deployment**
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
   - Save.

4. GitHub will publish the site at:
   - `https://amareshsubudhi.github.io/` (if the repo is named `amareshsubudhi.github.io`), or
   - `https://amareshsubudhi.github.io/<repo-name>/` (for any other repo name).

It can take a minute or two for the first deployment to go live.

## After the URL is known

Update these placeholders once the live URL is finalized:

- `index.html`, `tech-strategy.html`, `genai-lessons.html`: the `<!-- TODO: add
  og:url and <link rel="canonical"> -->` comments in `<head>`.
- Add a custom domain via **Settings → Pages → Custom domain**, if desired
  (requires a `CNAME` file at the repo root, which GitHub Pages creates for you).

## Updating the site

Any push to `main` redeploys automatically — there's no separate build/deploy
command to run.

## Local preview

No build tools are required. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths and fonts behave exactly as they will in
  production:

  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```
