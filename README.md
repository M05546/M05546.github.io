# Portfolio — M05546

A trilingual (EN/FR/ES) portfolio with dark/light theme toggle, showcasing expertise in cybersecurity and hydrography.

## Structure

```
portfolio/
├── index.html          # English version (default)
├── fr/
│   └── index.html      # French version
├── es/
│   └── index.html      # Spanish version
├── css/
│   └── styles.css      # Shared styles (includes theme variables)
├── js/
│   └── main.js         # Shared scripts (includes theme toggle)
├── assets/             # Images (add later)
└── README.md
```

## Features

- **Trilingual**: English, French, Spanish
- **Dark/Light Mode**: Respects system preference, saves user choice
- **Responsive**: Works on all screen sizes
- **Accessible**: ARIA labels, semantic HTML
- **Performance**: No frameworks, minimal dependencies
- **Security by Design**: See security section below

## Deploy to GitHub Pages (Free)

1. **Create a GitHub account** (if you don't have one): https://github.com

2. **Create a new repository**:
   - Go to https://github.com/new
   - Name it: `yourusername.github.io` (replace with your actual username)
   - Make it **Public**
   - Click "Create repository"

3. **Upload files**:
   - Click "uploading an existing file"
   - Drag and drop ALL files/folders from this portfolio
   - Commit the changes

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click Save

5. **Your site will be live at**:
   - English: `https://yourusername.github.io`
   - French: `https://yourusername.github.io/fr/`
   - Spanish: `https://yourusername.github.io/es/`

## Security Considerations

This portfolio was built with security principles in mind:

### What's Already Done

1. **No external dependencies with vulnerabilities**: Pure HTML/CSS/JS, no npm packages
2. **No user input processing**: Static site, no forms that submit data
3. **No inline event handlers**: All JavaScript is in external files
4. **Content Security Policy ready**: Can easily add CSP headers via GitHub Pages
5. **No sensitive data exposure**: No API keys, tokens, or credentials
6. **External links use target="_blank"**: Consider adding `rel="noopener noreferrer"`
7. **LocalStorage for theme only**: Minimal data stored, non-sensitive

### Recommended Additions for Production

1. Add `rel="noopener noreferrer"` to external links (prevents tabnabbing)
2. Add security headers if using Cloudflare or custom hosting:
   - `Content-Security-Policy`
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY`
   - `Referrer-Policy: strict-origin-when-cross-origin`
3. Add Subresource Integrity (SRI) if loading external scripts
4. Regular dependency audit if you add npm packages later

## Customize

### Update your info:
- Search for `your.email@example.com` → replace with your email
- Search for `linkedin.com/in/yourprofile` → replace with your LinkedIn
- Search for `github.com/yourusername` → replace with your GitHub

### Change the name:
- Search for `M05546` → replace with your name (or keep it)

### Add projects:
- Copy a `.project-card` section in all three HTML files
- Update the content in each language

### Add images:
- Put images in `/assets/`
- Reference them as `assets/your-image.jpg` (from root) or `../assets/your-image.jpg` (from language folders)

## Tech Stack

- Pure HTML/CSS/JS (no frameworks)
- Google Fonts (Outfit + Space Mono)
- CSS custom properties for theming
- Intersection Observer for scroll animations
- LocalStorage for theme persistence

## License

Do whatever you want with it. It's yours.
