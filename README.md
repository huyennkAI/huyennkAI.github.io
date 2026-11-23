# huyennkAI.github.io

Personal homepage of **Nguyen Khanh Huyen**. Static site, no build step.
Layout adapted from [Roger Marí Molas's homepage](https://github.com/rogermm14/rogermm14.github.io),
which builds on [Jon Barron's template](https://github.com/jonbarron/jonbarron_website).

## Files

| File | What it holds |
|------|---------------|
| `index.html` | Bio, links, photo, projects, blog list, footer |
| `timeline-content.js` | News & timeline entries |
| `publications-content.js` | Publications (with year / topic / venue filters) |
| `research-globe.html` | Globe view of the timeline (city coordinates) |
| `site.js` | Timeline + filter behaviour (no edits needed) |
| `stylesheet.css` | Site styles |
| `images/` | Publication and project teasers (160×160) |
| `blog/` | Blog posts (styled by `css/blog-post.css`) |

The two `*-content.js` files hold HTML inside a JavaScript template string:
keep the opening and closing backticks, and do not use a backtick inside the HTML.

## Add a publication

In `publications-content.js`, copy one `<tr class="publication-row">…</tr>` block,
newest first, and update:

- the teaser in `images/` (160×160) and its `alt` text;
- title, authors (your name in `<strong>`), links, and description;
- the venue as `<em>Venue</em>, YEAR` — year and venue filters are built from this;
- `data-tags="Topic A;Topic B"` — topic filter and tag chips are built from this.

## Add a timeline entry

In `timeline-content.js`, copy one `<li class="timeline-item …">` block, newest first:

```html
<li class="timeline-item award" data-location="Hanoi, Vietnam" data-logo="data/logos/ICPC.png">
  <time datetime="2026-12">Dec. 2026</time>
  <span class="timeline-marker" aria-hidden="true">★</span>
  <div>
    <strong>Title</strong>
    <p>Description · <a href="https://example.org/" target="_blank" rel="noopener">Link</a></p>
  </div>
</li>
```

- Category: `career` + `●`, `award` + `★`, or `event` + `◆` (used for publications).
- `datetime` is only used for ordering (newest first) and the "Latest" line; the text inside `<time>` is what is shown.
- `data-logo` is optional: put an image in `data/logos/` to show it beside the entry.
- `data-location` is optional and adds the entry to the globe. For a new city, add its
  name and coordinates to `locationDefinitions` in `research-globe.html`.

## Preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/. Push to `main` to deploy with GitHub Pages.
