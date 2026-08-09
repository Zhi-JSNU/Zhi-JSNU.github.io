# Qiang Zhi Academic Website

Static bilingual academic profile for GitHub Pages.

- English: `https://zhi-jsnu.github.io/`
- Chinese: `https://zhi-jsnu.github.io/zh/`
- Official university profile: `https://ai.jsnu.edu.cn/78/ba/c14228a358586/page.htm`

## Site files

- `index.html`: English homepage and English structured data
- `zh/index.html`: Chinese homepage and Chinese structured data
- `assets/css/site.css`: shared visual and responsive styles
- `assets/js/site.js`: mobile navigation and current year only
- `assets/img/qiang-zhi-profile.jpg`: profile photograph
- `robots.txt`: crawler access policy
- `sitemap.xml`: bilingual URL index

## Updating content

Edit visible biography, teaching, and publication content directly in both HTML files. Keep the same person identity links and `@id` in both JSON-LD blocks. When adding a publication, include a year, title, venue, and DOI link when one is confirmed.

The displayed email address is intentionally obfuscated. Do not add a clickable email link, plain email address, or email field to metadata or JSON-LD.

## Publishing

Upload the listed site files and folders to the root of the `Zhi-JSNU.github.io` repository. GitHub Pages will continue to publish from the existing repository root; no build step is required.
