# Georgia Social Impact Collaborative - Tools & Resources

This repository contains interactive web applications for the Georgia Social Impact Collaborative (GSIC).

## Live Applications

- **Impact Ecosystem Navigator**: Explore 100+ organizations across Georgia's impact ecosystem
- **Atlanta Nonprofit Hub**: Capital ecosystem resources, tools, and assessments for nonprofits

## Deployment

This repository is deployed via Netlify with automatic deployments on every push to `main`.

### Application URLs
- Impact Ecosystem Navigator: `/ecosystem-navigator`
- Atlanta Nonprofit Hub: `/nonprofit-hub`

## Development

### Local Development
Start a local server for testing:
```bash
# Impact Navigator
cd impact-ecosystem-navigator-app
python -m http.server 8002

# Nonprofit Hub
cd atlanta-nonprofit-ecosystem-hub
python -m http.server 8000
```

### Making Updates
1. Edit the application files in VS Code
2. Test locally using the development server
3. Commit your changes: `git add . && git commit -m "Your update description"`
4. Push to GitHub: `git push origin main`
5. Netlify automatically deploys in 30-60 seconds

## Repository Structure

```
/
├── impact-ecosystem-navigator-app/    # Impact Ecosystem Navigator
│   ├── index.html
│   ├── assets/
│   └── README.md
├── atlanta-nonprofit-ecosystem-hub/   # Atlanta Nonprofit Hub
│   ├── index.html
│   ├── assets/
│   └── README.md
├── archive/                           # Original standalone files
└── netlify.toml                       # Deployment configuration
```

## Embedding on Your Website

Use these iframes to embed the applications:

### Impact Ecosystem Navigator
```html
<iframe 
  src="https://your-site.netlify.app/ecosystem-navigator" 
  width="100%" 
  height="800px"
  frameborder="0"
  title="Impact Ecosystem Navigator">
</iframe>
```

### Atlanta Nonprofit Hub
```html
<iframe 
  src="https://your-site.netlify.app/nonprofit-hub" 
  width="100%" 
  height="800px"
  frameborder="0"
  title="Atlanta Nonprofit Hub">
</iframe>
```

## Support

For questions or issues, contact the GSIC team.
