# huyennkAI.github.io

Personal portfolio website of **Nguyen Khanh Huyen** — AI Researcher, Economist, Math Enthusiast.

## Project Structure

```
├── css/style.css          # Styles
├── js/main.js             # Scripts
├── sections/              # HTML sections
│   ├── nav.html
│   ├── hero.html
│   ├── about.html
│   ├── research.html
│   ├── experience.html
│   ├── education.html
│   ├── projects.html
│   ├── blog.html
│   ├── contact.html
│   └── footer.html
├── build.js               # Assembles sections into index.html
├── index.html             # Generated output
└── package.json
```

## Development

Edit files in `css/`, `js/`, or `sections/`, then rebuild:

```bash
npm run build
```

## Preview locally

```bash
npx serve .
```

## Deploy

Push to `main` branch — GitHub Pages will serve automatically.
