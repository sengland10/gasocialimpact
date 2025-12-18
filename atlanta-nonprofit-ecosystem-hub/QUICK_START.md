# Quick Start Guide - Atlanta Nonprofit Ecosystem Hub

## Getting Started in 5 Minutes

### Option 1: Open Directly in Browser (Simplest)
```bash
# Navigate to the project directory
cd atlanta-nonprofit-ecosystem-hub

# Open index.html in your default browser
# On Mac:
open index.html

# On Linux:
xdg-open index.html

# On Windows:
start index.html
```

### Option 2: Run with Python (Recommended)
```bash
# Navigate to the project directory
cd atlanta-nonprofit-ecosystem-hub

# Start Python server (Python 3)
python -m http.server 8000

# Open browser to:
# http://localhost:8000
```

### Option 3: Run with Node.js
```bash
# Navigate to the project directory
cd atlanta-nonprofit-ecosystem-hub

# Install http-server globally (one time only)
npm install -g http-server

# Start server
http-server -p 8000

# Open browser to:
# http://localhost:8000
```

### Option 4: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically

---

## Project Structure Overview

```
atlanta-nonprofit-ecosystem-hub/
├── index.html              ← Start here
├── assets/
│   ├── css/               ← All styles (5 files)
│   ├── js/                ← All JavaScript (6 files + 2 data files)
│   └── images/            ← Image assets
├── README.md              ← Full documentation
├── PROJECT_STRUCTURE.md   ← Detailed architecture
└── package.json           ← Project metadata
```

---

## Making Your First Edit

### Change a Color
1. Open `assets/css/variables.css`
2. Find `:root` section
3. Change any color value:
   ```css
   --primary-green: #149a49;  /* Change this hex value */
   ```
4. Refresh browser to see changes

### Edit Content
1. Open `index.html`
2. Find the content section you want to edit
3. Content is organized in `<div class="content-section">` blocks
4. Edit text, add paragraphs, change headings
5. Refresh browser to see changes

### Add a New Navigation Item
1. Open `index.html`
2. Find the sidebar section
3. Add a new nav item:
   ```html
   <div class="nav-item" data-target="my-section">My Section</div>
   ```
4. Add corresponding content section:
   ```html
   <div class="content-section" id="my-section">
       <h1>My Section Title</h1>
       <p>Content goes here...</p>
   </div>
   ```
5. Refresh browser and click your new nav item

---

## Key Files to Know

### HTML
- **index.html** - Main file with all content and structure

### CSS (in order of importance)
- **variables.css** - Colors, fonts, spacing (theme)
- **components.css** - Cards, buttons, forms (most visual elements)
- **layout.css** - Page structure and grids
- **responsive.css** - Mobile/tablet adjustments
- **reset.css** - Browser normalization (rarely edited)

### JavaScript
- **main.js** - App initialization and tab functionality
- **navigation.js** - Sidebar navigation
- **interventions.js** - Theory of Change interactions
- **assessment.js** - Self-assessment tool
- **config.js** - Settings and utilities

### Data
- **data/interventions.js** - Intervention details
- **data/assessment.js** - Assessment questions and scoring

---

## Common Tasks

### Changing the Color Scheme
Edit `assets/css/variables.css`:
```css
:root {
    --primary-green: #your-color;
    --primary-purple: #your-color;
    --accent-green: #your-color;
    /* etc. */
}
```

### Adding a New Stat Card
In `index.html`:
```html
<div class="stat-card">
    <div class="stat-number">50%</div>
    <div class="stat-label">Your Metric</div>
    <div class="stat-detail">Description here</div>
</div>
```

### Modifying Assessment Questions
Edit `assets/js/data/assessment.js`:
```javascript
{
    id: 11,
    question: "Your new question?",
    answers: [
        { text: "Option 1", score: 0 },
        { text: "Option 2", score: 1 },
        // ... more options
    ]
}
```

### Changing Fonts
1. Add Google Font link to `<head>` in `index.html`
2. Update in `assets/css/variables.css`:
   ```css
   --font-serif: 'YourFont', serif;
   --font-sans: 'YourFont', sans-serif;
   ```

---

## Debugging Tips

### Changes Not Showing?
1. **Hard refresh**: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. **Clear cache**: In browser dev tools
3. **Check console**: F12 → Console tab for errors
4. **Check file paths**: All paths relative to index.html

### Navigation Not Working?
1. Check that `data-target` matches section `id`
2. Open browser console (F12) for JavaScript errors
3. Verify all JS files are loading (Network tab)

### Styles Not Applying?
1. Check CSS file is linked in `index.html`
2. Check for typos in class names
3. Inspect element (right-click → Inspect) to see applied styles
4. Check specificity (later styles override earlier ones)

---

## Development Workflow

### Recommended Setup
1. **Editor**: VS Code with extensions:
   - Live Server
   - Prettier (code formatting)
   - ESLint (JavaScript linting)

2. **Browser**: Chrome or Firefox with DevTools

3. **Workflow**:
   ```
   Edit files → Save → Auto-reload → See changes
   ```

### File Organization
- Keep CSS modular (don't put everything in one file)
- Keep JavaScript functions focused and small
- Use data files for content that changes often
- Document your changes

### Version Control
```bash
# Initialize git (if not already)
git init

# Add files
git add .

# Commit changes
git commit -m "Describe your changes"

# Push to remote (if configured)
git push origin main
```

---

## Helpful Resources

### CSS
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### JavaScript
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [Event Handling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

### Tools
- [Browser DevTools](https://developer.chrome.com/docs/devtools/)
- [VS Code](https://code.visualstudio.com/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

---

## Getting Help

### Check These First
1. Browser console (F12) for errors
2. README.md for detailed documentation
3. PROJECT_STRUCTURE.md for architecture details
4. Code comments in JavaScript files

### Still Stuck?
- Review the original HTML file for comparison
- Check that all files are in correct locations
- Verify file permissions (should be readable)
- Try a different browser

---

## Next Steps

### After Basic Setup
1. Customize colors and fonts
2. Add your own content
3. Modify assessment questions for your needs
4. Add custom images and logos
5. Adjust responsive breakpoints for your design

### For Production
1. Combine and minify CSS files
2. Minify JavaScript files
3. Optimize images
4. Set up proper hosting
5. Configure caching headers
6. Add analytics (if needed)
7. Test across browsers
8. Validate HTML/CSS
9. Check accessibility (WCAG)
10. Add meta tags for SEO

---

## Success Checklist

- [ ] Application loads in browser
- [ ] Sidebar navigation works
- [ ] All sections display correctly
- [ ] Theory of Change cards are interactive
- [ ] Assessment tool calculates results
- [ ] Responsive design works on mobile
- [ ] No console errors
- [ ] Styles look as expected
- [ ] All JavaScript functions work

---

**You're all set! Happy coding! 🚀**
