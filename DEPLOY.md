# Deploy to GitHub Pages

Recommended setup for this academic homepage:

1. Sign in to GitHub.
2. Create a public repository named exactly:

   ```text
   your-github-username.github.io
   ```

   Replace `your-github-username` with your GitHub username. This creates a clean personal site URL:

   ```text
   https://your-github-username.github.io/
   ```

3. Upload these files and folders to the repository root:

   - `.nojekyll`
   - `index.html`
   - `style.css`
   - `script.js`
   - `profile.md`
   - `README.md`
   - `assets/`

4. Open the repository on GitHub and go to `Settings > Pages`.
5. Under `Build and deployment`, choose:

   ```text
   Source: Deploy from a branch
   Branch: main
   Folder: /root
   ```

6. Save. GitHub Pages usually publishes within a few minutes.

## If You Do Not Want a User Site

You can also create a repository named `academic-homepage`. In that case, the URL will be:

```text
https://your-github-username.github.io/academic-homepage/
```

This is also fine, but the personal-site repository is cleaner for an academic homepage.

## Future Updates

After the site is online, future changes only require replacing the edited files in the repository. The most common edits will be:

- update `index.html` for publications, bio, links, courses, students, and services
- update `assets/` if changing the hero image
- update the protected email strings in `index.html`

## Optional Custom Domain

If you later buy or already own a domain, such as `qiangzhi.net`, add a `CNAME` file containing only the domain name and configure DNS at your domain registrar.
