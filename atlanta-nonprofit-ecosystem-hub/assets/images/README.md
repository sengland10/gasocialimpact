# Images Directory

This directory is for storing image assets used in the application.

## Recommended Structure

```
images/
├── logos/           # Organization logos
├── icons/           # Custom icons and graphics
├── screenshots/     # Application screenshots
└── backgrounds/     # Background images
```

## Image Guidelines

- **Format**: Use modern formats (WebP, SVG for graphics)
- **Optimization**: Compress images before adding
- **Naming**: Use descriptive, kebab-case names (e.g., `hero-banner.webp`)
- **Size**: Keep individual images under 500KB when possible
- **Alt text**: Always provide meaningful alt text in HTML

## Adding Images

1. Place images in appropriate subdirectory
2. Reference in HTML: `<img src="assets/images/folder/filename.ext" alt="Description">`
3. Reference in CSS: `background-image: url('../images/folder/filename.ext');`
