# Atlanta Nonprofit Capital Ecosystem Hub

A comprehensive web application providing resources, analysis, and tools for nonprofits and funders in the Atlanta/Georgia nonprofit capital ecosystem.

## 📁 Project Structure

```
atlanta-nonprofit-ecosystem-hub/
├── index.html                          # Main entry point
├── assets/
│   ├── css/
│   │   ├── reset.css                   # CSS reset for consistency
│   │   ├── variables.css               # CSS custom properties (colors, fonts, spacing)
│   │   ├── layout.css                  # Layout and grid systems
│   │   ├── components.css              # Component styles (cards, buttons, etc.)
│   │   └── responsive.css              # Responsive/mobile styles
│   ├── js/
│   │   ├── config.js                   # App configuration and utilities
│   │   ├── navigation.js               # Navigation and routing
│   │   ├── interventions.js            # Theory of change interactions
│   │   ├── assessment.js               # Self-assessment tool
│   │   ├── main.js                     # Main app initialization
│   │   └── data/
│   │       ├── interventions.js        # Intervention data model
│   │       └── assessment.js           # Assessment questions and logic
│   └── images/                         # Images and icons (add as needed)
├── README.md                           # This file
├── package.json                        # Project metadata
└── .gitignore                          # Git ignore rules
```

## 🚀 Features

### Core Functionality
- **Ecosystem Overview**: Comprehensive view of the nonprofit capital landscape
- **Theory of Change**: Interactive visualization of challenges, interventions, and outcomes
- **Landscape Analysis**: Data-driven insights into Georgia nonprofit financial health
- **Gap Analysis**: Identification of systemic challenges and opportunities
- **Market Size**: Understanding the scope and scale of capital needs
- **Strategic Interventions**: Detailed breakdown of 4 key intervention strategies
- **Implementation Timeline**: Phased rollout plan with milestones
- **Partner Network**: Overview of key ecosystem stakeholders
- **Self-Assessment Tool**: Interactive financial health assessment for nonprofits
- **Financial Glossary**: Educational resource for nonprofit finance terms
- **Additional Resources**: Links to support organizations and tools

### Technical Features
- Modular JavaScript architecture
- Responsive design (mobile-first)
- CSS custom properties for easy theming
- Clean separation of concerns (HTML/CSS/JS)
- No external dependencies (vanilla JavaScript)
- Semantic HTML5
- Accessible navigation

## 🛠️ Setup & Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Quick Start

1. **Clone or download** this repository

2. **Open the application**:
   - **Simple method**: Open `index.html` directly in your browser
   - **Development server** (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with npx)
     npx http-server -p 8000
     
     # Using PHP
     php -S localhost:8000
     ```
   - Then navigate to: `http://localhost:8000`

3. **No build step required!** This is a pure HTML/CSS/JS application.

## 📖 Usage

### Navigation
- Use the left sidebar to navigate between different sections
- Sections are organized into:
  - **Overview**: High-level ecosystem information
  - **Analysis**: Data and research findings
  - **Strategic Plan**: Implementation details
  - **Resources**: Tools and support materials

### Interactive Features

#### Theory of Change
- Click on any intervention card to see detailed information
- View connections between challenges, interventions, and outcomes
- Close the detail panel to return to the overview

#### Self-Assessment Tool
- Answer all 10 questions about your organization's financial health
- Click "Calculate My Results" to see your assessment
- Get personalized recommendations based on your score
- Use "Take Assessment Again" to reset and retake

### Customization

#### Colors & Branding
Edit `assets/css/variables.css` to change:
- Primary colors
- Font families
- Spacing
- Border radius
- Shadows

#### Content
- **HTML Content**: Edit content sections in `index.html`
- **Intervention Data**: Modify `assets/js/data/interventions.js`
- **Assessment Questions**: Update `assets/js/data/assessment.js`

#### Styling
- **Global styles**: `assets/css/reset.css` and `assets/css/variables.css`
- **Layout changes**: `assets/css/layout.css`
- **Component styling**: `assets/css/components.css`
- **Mobile responsiveness**: `assets/css/responsive.css`

## 🎨 Design System

### Color Palette
- **Primary Green**: `#149a49` - Main brand color
- **Primary Purple**: `#4750a2` - Secondary brand color
- **Accent Green**: `#66b445` - Interactive elements
- **Accent Orange**: `#f15922` - Challenges/warnings
- **Accent Yellow**: `#eec61a` - Progress/caution

### Typography
- **Headings**: Young Serif (serif font)
- **Body**: Familjen Grotesk (sans-serif)

### Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Development

### Adding New Sections
1. Add navigation item to sidebar in `index.html`
2. Create corresponding content section with matching `id`
3. Add any necessary JavaScript in appropriate module

### Adding New Features
1. Create new JavaScript module in `assets/js/`
2. Include script tag in `index.html`
3. Initialize in `main.js` if needed

### Code Organization
- **Modular CSS**: Each CSS file has a specific purpose
- **Component-based JS**: Each feature has its own module
- **Data separation**: Keep data separate from logic
- **Configuration**: Centralized config in `config.js`

## 📊 Data Sources

This application is built on data from:
- Nonprofit Finance Fund (NFF) 2025 Georgia Survey
- Community Foundation for Greater Atlanta (CFGA)
- Bridgespan research on nonprofit financial health
- Georgia nonprofit sector analysis

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

Copyright (c) 2025. All rights reserved.

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📧 Contact & Support

For questions or support regarding this application, please contact:
- Georgia Social Impact Collaborative
- [Contact information]

## 🔄 Version History

- **v1.0.0** (2025) - Initial release
  - Core navigation and content structure
  - Interactive Theory of Change
  - Self-assessment tool
  - Responsive design
  - Modular architecture

## 🎯 Future Enhancements

Potential features for future versions:
- [ ] Export assessment results as PDF
- [ ] Save progress functionality
- [ ] Admin panel for content management
- [ ] Multi-language support
- [ ] Print-friendly stylesheets
- [ ] Advanced data visualizations
- [ ] User accounts and personalization
- [ ] Integration with nonprofit databases
- [ ] API for data access
- [ ] Automated reporting tools

## 🙏 Acknowledgments

Built with support from:
- Community Foundation for Greater Atlanta
- Nonprofit Finance Fund
- Georgia nonprofit sector partners
- Field experts and advisors
