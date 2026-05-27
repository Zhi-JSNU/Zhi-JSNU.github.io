# Academic Personal Homepage

This is a clean static homepage for a computer science faculty profile. It uses plain HTML, CSS, and minimal JavaScript, so it can be deployed directly with GitHub Pages.

## Files

- `index.html`: page content and academic sections
- `style.css`: layout, typography, responsive design
- `script.js`: mobile navigation, current year, active section highlighting
- `profile.md`: editable source notes for your real academic information
- `assets/secure-networked-intelligence.png`: generated homepage visual asset

## Update Your Information

Edit `index.html` and replace the placeholders for:

- affiliation, title, office, and email
- Google Scholar profile URL
- ORCID URL
- university profile and lab website
- protected email strings in `index.html`
- publication titles, authors, venues, and years
- courses, students, projects, and academic service

Keep `profile.md` as a compact source file for future revisions.

## Email Protection

The homepage does not place a static `mailto:` link in the HTML. Instead, it shows an obfuscated address and uses JavaScript to assemble and copy the email address when a visitor clicks the email button.

To update it, replace these two reversed strings in both email buttons in `index.html`:

```html
data-user-reversed="liame.ruoy"
data-domain-reversed="ude.elpmaxe"
```

For example, `abc@university.edu` becomes:

```html
data-user-reversed="cba"
data-domain-reversed="ude.ytisrevinu"
```

## Preview Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `academic-homepage`.
2. Upload all files in this folder.
3. In GitHub, open `Settings > Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/root` folder.
6. Save and wait for GitHub Pages to publish the site.

If you use a personal GitHub Pages repository named `username.github.io`, the homepage will be available at:

```text
https://username.github.io/
```
