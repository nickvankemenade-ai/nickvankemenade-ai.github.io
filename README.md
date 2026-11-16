# nickvankemenade-ai.github.io

Personal site, built by GitHub Pages with Jekyll. Push to `main` and it rebuilds.

## Add a work

1. Copy any file in `_works/` to `_works/<short-name>.md`. The page appears at `/works/<short-name>/`.
2. Fill in the front matter:
   - `title`, `date` (sets the order and the year group on the works page), `summary`
   - `featured: true` to put it on the homepage. The homepage shows the three newest featured works.
   - `media`: `type: image` or `type: video`, `src` (e.g. `/assets/works/<short-name>/figure.png`), and `alt`. Leave `src` empty for a placeholder, or remove `media` entirely.
   - `links`: any number of `label` / `url` pairs (paper, code, Zenodo, ...).
   - `bibtex`: optional; shows a citation block on the work's page.
3. Write the page body in Markdown below the front matter.
4. Put images and videos in `assets/works/<short-name>/`.

## Other content

| What | Where |
| --- | --- |
| Top bar links | `_data/navigation.yml` |
| Contact links (and which appear in the footer) | `_data/contact.yml` |
| Homepage news | `_data/news.yml` |
| Publications | `_data/publications.yml` |
| About: timeline, skills | `_data/timeline.yml`, `_data/skills.yml` |
| CV | `assets/cv.pdf` |
| Notes | `_posts/YYYY-MM-DD-title.md` |
| Colours and type | `assets/css/styles.css` (variables at the top) |
