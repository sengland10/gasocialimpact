# Impact Ecosystem Navigator

Interactive web application for exploring the impact investing ecosystem, mapping stakeholders, understanding investment strategies, and visualizing capital flows.

## Overview

The Impact Ecosystem Navigator is a comprehensive tool for understanding the complex landscape of impact investing. It provides:

- **Interactive Stakeholder Map**: Explore 25+ stakeholder types across 5 segments (Supply, Aggregators, Seekers, Enablers, Infrastructure)
- **Function Lens**: Filter by capital provision, deal origination, evaluation & execution, or opportunity development
- **Strategy Workflows**: Detailed case studies for Divesting, ESG Integration, Thematic Investing, and Place-Based strategies
- **Georgia-Specific Data**: Regional ecosystem statistics and Airtable integration
- **Glossary**: Common impact investing terms and definitions
- **PDF Export**: Generate printable strategy briefs with capital stack visualizations

## Features

### Stakeholder Mapping
- **5 Ecosystem Segments**: Capital Supply, Aggregators, Seekers, Enablers, Infrastructure
- **4 Core Functions**: Provision, Origination, Execution, Opportunity Development
- **Detailed Profiles**: Each stakeholder includes capacities, challenges, subcategories, and dependencies
- **Interactive Dependencies**: Click relationship chips to navigate between connected stakeholders

### Investment Strategies
- **4 Major Strategies**: Divesting, ESG Integration & Stewardship, Thematic, Place-Based
- **Real-World Case Studies**: Step-by-step workflows showing "how the money moves"
- **Capital Stack Visualization**: Automated tier classification (senior debt, equity, guarantees, etc.)
- **Program Notes**: Contextual information on LIHTC, NMTC, C-PACE, green bonds, and more

### Search & Discovery
- **Unified Search**: Find stakeholders, strategies, and terms across all views
- **Function Filters**: Spotlight who does specific functions in the ecosystem
- **Dependency Navigation**: Follow relationship chains between stakeholders

## Technology Stack

- **HTML5**: Semantic markup, accessible navigation
- **CSS3**: Custom properties, Grid, Flexbox, responsive design
- **Vanilla JavaScript**: ES6 modules, no framework dependencies
- **Google Fonts**: Young Serif (headers), Familjen Grotesk (body)

## Quick Start

1. **Open in browser**:
   ```bash
   # From project directory
   python3 -m http.server 8000
   # Navigate to http://localhost:8000
   ```

2. **Or use any static server**:
   ```bash
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Explore the interface**:
   - Click any stakeholder card to view details
   - Use function lens chips to filter by role
   - Switch between Map, Strategies, Georgia, and Glossary views
   - Search across all content with the sidebar search
   - Download strategy briefs as PDFs

## Project Structure

```
impact-ecosystem-navigator/
├── index.html                 # Main HTML structure
├── assets/
│   ├── css/
│   │   ├── variables.css     # CSS custom properties
│   │   ├── reset.css         # Browser normalization
│   │   ├── layout.css        # Page structure and grids
│   │   ├── components.css    # UI component styles
│   │   └── responsive.css    # Mobile/tablet breakpoints
│   └── js/
│       ├── main.js           # Application initialization
│       ├── data/
│       │   ├── data.js       # Stakeholder ecosystem data
│       │   ├── strategies.js # Strategy workflows and cases
│       │   └── glossary.js   # Term definitions
│       └── modules/
│           ├── map.js        # Stakeholder grid and cards
│           ├── modal.js      # Detail panel display
│           ├── strategies.js # Strategy display and PDF export
│           ├── glossary.js   # Glossary rendering
│           ├── georgia.js    # Regional stats and embed
│           ├── navigation.js # View switching
│           └── search.js     # Unified search
└── README.md
```

## Data Model

### Stakeholders
Each stakeholder node includes:
- **id**: Unique identifier
- **seg**: Segment (supply, aggs, seek, enab, infra)
- **fn**: Array of functions (provision, origination, execution, opportunity)
- **title**: Display name
- **meta**: Short descriptor
- **keyFunction**: One-sentence role
- **descLong**: Full description
- **capacitiesLong**: Array of strengths
- **challenges**: Array of bottlenecks
- **deps**: Array of dependencies {id, why}
- **subcats**: Optional array of subcategories

### Strategies
Each strategy includes:
- **key**: Unique identifier
- **title**: Strategy name
- **longDesc**: Full description
- **stakeholders**: Array of involved stakeholder IDs
- **cases**: Array of case studies with steps, instruments, stakeholders

## Customization

### Update Stakeholders
Edit `assets/js/data/data.js` to:
- Add new stakeholder types
- Modify capacities and challenges
- Update relationships and dependencies

### Add Strategies
Edit `assets/js/data/strategies.js` to:
- Create new strategy types
- Add case study workflows
- Include new financial instruments

### Modify Glossary
Edit `assets/js/data/glossary.js` to:
- Add term definitions
- Create new category groups

### Style Updates
Edit CSS files in `assets/css/`:
- `variables.css`: Brand colors, fonts, spacing
- `components.css`: Button styles, cards, modals
- `responsive.css`: Mobile/tablet breakpoints

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6 module support required
- CSS Grid and Flexbox support required

## Development

### File Organization
- **Modular CSS**: Separate files for variables, layout, components, and responsive
- **ES6 Modules**: Clean separation of concerns with imports/exports
- **Data-Driven**: All content in JSON structures, easy to update

### Adding Features
1. Create new module in `assets/js/modules/`
2. Import and initialize in `main.js`
3. Add corresponding HTML sections in `index.html`
4. Style in appropriate CSS file

## License

© Georgia Social Impact Collaborative. All rights reserved.

## Support

For questions or issues, contact the Georgia Social Impact Collaborative team.
