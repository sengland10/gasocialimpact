# Atlanta Nonprofit Ecosystem Hub - Project Structure

## Complete Folder Structure

```
atlanta-nonprofit-ecosystem-hub/
│
├── index.html                          # Main HTML entry point
│
├── assets/                             # All static assets
│   │
│   ├── css/                           # Stylesheets (modular architecture)
│   │   ├── reset.css                  # Browser normalization
│   │   ├── variables.css              # CSS custom properties (theme)
│   │   ├── layout.css                 # Page layout and grid systems
│   │   ├── components.css             # Component styles (cards, buttons, etc.)
│   │   └── responsive.css             # Mobile/tablet responsive styles
│   │
│   ├── js/                            # JavaScript modules
│   │   ├── config.js                  # App configuration & utilities
│   │   ├── navigation.js              # Navigation & routing logic
│   │   ├── interventions.js           # Theory of change interactions
│   │   ├── assessment.js              # Self-assessment tool logic
│   │   ├── main.js                    # App initialization & coordination
│   │   │
│   │   └── data/                      # Data models
│   │       ├── interventions.js       # Intervention definitions
│   │       └── assessment.js          # Assessment questions & scoring
│   │
│   └── images/                        # Image assets
│       └── README.md                  # Image guidelines
│
├── README.md                          # Project documentation
├── package.json                       # Project metadata
└── .gitignore                         # Git ignore rules
```

## File Descriptions

### Root Level

**index.html** (Entry Point)
- Main HTML file that loads all resources
- Contains semantic HTML5 structure
- Links to all CSS and JS files
- Includes sidebar navigation and content sections

**README.md** (Documentation)
- Comprehensive project documentation
- Setup and installation instructions
- Usage guidelines
- Development guide
- Feature overview

**package.json** (Metadata)
- Project configuration
- Scripts for running local server
- Dependency management (currently none)
- Repository information

**.gitignore** (Version Control)
- Git exclusion rules
- Prevents committing node_modules, logs, temp files
- OS-specific file exclusions

---

### CSS Architecture (`assets/css/`)

**reset.css** (Foundation Layer)
- CSS reset for cross-browser consistency
- Box-sizing, margin/padding normalization
- Default element styling

**variables.css** (Theme Layer)
- CSS custom properties (variables)
- Color palette definitions
- Typography settings (fonts, sizes)
- Spacing scale
- Border radius values
- Shadow definitions
- Transition timings

**layout.css** (Structure Layer)
- Sidebar navigation styles
- Main content area layout
- Grid systems (stat-grid, ecosystem-grid)
- Section layouts
- Responsive grid patterns

**components.css** (Component Layer)
- Typography styles (h1-h4, paragraphs)
- Cards (stat cards, ecosystem cards, content cards)
- Buttons and interactive elements
- Tabs and navigation items
- Forms and inputs
- Detail panels
- Timeline components
- Assessment question styles
- Result displays

**responsive.css** (Adaptation Layer)
- Mobile breakpoints (< 768px)
- Tablet breakpoints (768px - 1024px)
- Desktop adjustments (> 1024px)
- Touch-friendly sizing
- Mobile navigation patterns

---

### JavaScript Architecture (`assets/js/`)

**config.js** (Configuration Module)
- Application configuration object
- Utility functions (debounce, scrollTo, formatNumber)
- Global constants
- Feature flags

**navigation.js** (Navigation Module)
- Sidebar navigation logic
- Section switching
- URL hash handling
- Browser history management
- Active state management

**interventions.js** (Interventions Module)
- Theory of change interactions
- Intervention card click handlers
- Detail panel display
- Connection highlighting
- Active state management

**assessment.js** (Assessment Module)
- Self-assessment tool functionality
- Answer selection logic
- Score calculation
- Result categorization
- Recommendations display
- Reset functionality

**main.js** (Main Application Module)
- App initialization
- Module coordination
- Tab functionality (generic)
- Initial hash navigation
- Error handling
- Global utilities

**data/interventions.js** (Data Model)
- Intervention definitions (1-4)
- Activity lists
- Impact descriptions
- Challenge mappings
- Outcome mappings

**data/assessment.js** (Data Model)
- Assessment question definitions (10 questions)
- Answer options and scoring
- Result categories (vulnerable, building, resilient)
- Recommendation templates
- Category calculation logic

---

### Images (`assets/images/`)

**Structure** (To be populated)
- logos/ - Organization and partner logos
- icons/ - Custom icons and graphics
- screenshots/ - Application screenshots
- backgrounds/ - Background images

---

## File Dependencies

### CSS Loading Order (in index.html)
1. `reset.css` - Base normalization
2. `variables.css` - Theme variables
3. `layout.css` - Layout systems
4. `components.css` - Component styles
5. `responsive.css` - Responsive overrides

### JavaScript Loading Order (in index.html)
1. `config.js` - Configuration first
2. `data/interventions.js` - Data models
3. `data/assessment.js` - Data models
4. `navigation.js` - Core navigation
5. `interventions.js` - Feature module
6. `assessment.js` - Feature module
7. `main.js` - App initialization (last)

---

## Code Organization Principles

### CSS
- **Modular**: Each file has a specific purpose
- **Layered**: From base to specific (reset → variables → layout → components)
- **BEM-inspired**: Component-based naming conventions
- **Responsive**: Mobile-first approach

### JavaScript
- **Modular**: Each feature is a separate module
- **Class-based**: Using ES6 classes for organization
- **Event-driven**: DOM events trigger functionality
- **Separated concerns**: Logic separate from data
- **No dependencies**: Pure vanilla JavaScript

### HTML
- **Semantic**: Using proper HTML5 elements
- **Accessible**: ARIA labels where needed
- **Organized**: Sections clearly defined
- **Clean**: Minimal inline styles or scripts

---

## Adding New Features

### New Content Section
1. Add nav item in sidebar (index.html)
2. Create content section with matching ID
3. Add any custom styles to components.css
4. Add JavaScript if interactive

### New Interactive Feature
1. Create new JS module in assets/js/
2. Add data model in assets/js/data/ if needed
3. Include script in index.html
4. Initialize in main.js if required

### Styling Changes
1. Check if variable exists (variables.css)
2. If component-specific, add to components.css
3. If layout-related, add to layout.css
4. Mobile adjustments go in responsive.css

---

## Performance Considerations

- **No external dependencies**: Faster load times
- **Modular CSS**: Can be combined/minified for production
- **Lazy loading ready**: Structure supports lazy loading
- **Caching**: Static files are easily cacheable
- **Small footprint**: Minimal file sizes

---

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support required
- ES6 JavaScript support required
- No IE11 support (uses modern CSS/JS)

---

## Future Considerations

### Potential Additions
- Build process (webpack, vite, etc.)
- CSS preprocessing (Sass, PostCSS)
- JavaScript bundling
- Asset optimization
- Service worker for offline support
- Content management system integration
- Backend API integration
- User authentication
- Data visualization libraries
