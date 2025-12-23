# Impact Ecosystem Navigator

An interactive web application for exploring Georgia's impact investing ecosystem, featuring comprehensive information about organizations, strategies, and resources.

## 🚀 Quick Start

### Local Development
```bash
# Navigate to the app directory
cd impact-ecosystem-navigator-app

# Start a local server
python -m http.server 8000

# Open http://localhost:8000 in your browser
```

## 📁 Repository Structure

```
/
├── impact-ecosystem-navigator-app/    # Main application
│   ├── index.html                     # Complete single-file app
│   ├── package.json                   # Project metadata
│   ├── README.md                      # App documentation
│   └── assets/                        # Ready for modularization
│       ├── css/
│       ├── js/
│       └── images/
└── archive/                           # Historical versions
    └── impact-ecosystem-navigator/
        └── impact-ecosystem-navigator.html
```

## ✨ Features

### Core Functionality
- **Framework View** - Interactive stakeholder mapping across 5 segments
- **Strategies Explorer** - 20+ impact investing strategies with case studies
- **Georgia Tab** - State-specific ecosystem data and organizations
- **Glossary** - Impact investing terminology and tools

### Interactive Elements
- ✅ Search and filter functionality
- ✅ Function lens (Capital Provision, Origination, Execution, Opportunity)
- ✅ Detailed stakeholder cards with dependencies
- ✅ Strategy case studies with step-by-step examples
- ✅ Embedded Airtable integration for Georgia data
- ✅ Responsive design

## 📊 Content Overview

### Stakeholder Segments (5)
1. **Capital Supply** - Institutional investors, foundations, government
2. **Capital Aggregators** - Fund managers, CDFIs, DFIs
3. **Capital Seekers** - Social enterprises, community orgs, developers
4. **Capital Enablers** - TA providers, professional services
5. **Infrastructure** - Impact measurement, policy, technology platforms

### Functions (4)
- Capital Provision
- Deal Origination & Sourcing
- Evaluation, Structuring & Execution
- Opportunity Development

### Strategies Include
- Divesting (Exclusions) + Reallocation
- ESG Integration & Stewardship
- Thematic Impact Investing
- Place-Based Impact Investing
- And more...

## 🛠️ Technology Stack

- **Pure HTML/CSS/JavaScript** - No build process required
- **Self-contained** - All code in single file for portability
- **Airtable Integration** - Live data for Georgia ecosystem
- **Responsive Design** - Works on desktop and mobile

## 📝 Making Changes

### Update Content
1. Open `impact-ecosystem-navigator-app/index.html`
2. Find the relevant section (clearly marked with HTML comments)
3. Edit the content
4. Save and refresh browser

### Modify Data
The data structure is in JavaScript at the bottom of index.html:
```javascript
var dataV10 = {
  functions: [...],
  segments: [...],
  nodes: [...],
  strategies: [...],
  glossary: [...]
}
```

### Customize Styling
CSS variables are defined at the top of the `<style>` section:
```css
:root{
  --brand-dk:#1E2951; 
  --brand-grn:#0F7938; 
  --brand-ylw:#D4AF37; 
  --brand-lbl:#6FBFB3;
}
```

## 🎯 Use Cases

- **Ecosystem Mapping** - Understand stakeholder roles and relationships
- **Strategy Planning** - Learn from detailed case studies
- **Partnership Development** - Identify organizations and their functions
- **Education** - Teach impact investing concepts and terminology
- **Research** - Analyze Georgia's impact ecosystem

## 📖 Documentation

- See `impact-ecosystem-navigator-app/README.md` for detailed app documentation
- The app includes inline help text and tooltips
- All stakeholder cards include detailed information about:
  - Key functions
  - Capacities
  - Challenges
  - Dependencies

## 🔄 Future Enhancements

Potential improvements for future versions:
- Extract CSS to modular files
- Separate JavaScript into modules
- Move data to external JSON files
- Add backend API integration
- Implement user accounts and saved filters
- Enhanced data visualization

## 📞 Support

For questions or issues with the Impact Ecosystem Navigator, contact the Georgia Social Impact Collaborative team.

---

**Version**: 10.0  
**Last Updated**: December 2024  
**Maintained by**: Georgia Social Impact Collaborative