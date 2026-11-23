# huyennkAI.github.io

Personal portfolio website of **Nguyen Khanh Huyen** — AI Researcher, Economist, Math Enthusiast.

## Project Structure

```
├── css/style.css          # Site styles (minimal, blue & white)
├── css/blog-post.css      # Extra styles for blog posts
├── sections/              # HTML sections, in page order
│   ├── header.html        # Name, bio, links, photo
│   ├── research.html
│   ├── publications.html
│   ├── experience.html
│   ├── projects.html
│   ├── education.html
│   ├── awards.html
│   ├── blog.html
│   └── footer.html
├── blog/                  # Blog posts
├── build.js               # Assembles sections into index.html
├── index.html             # Generated output
└── package.json
```

## Development

Edit files in `css/` or `sections/`, then rebuild:

```bash
npm run build
```

## Preview locally

```bash
npx serve .
```

## Deploy

Push to `main` branch — GitHub Pages will serve automatically.
