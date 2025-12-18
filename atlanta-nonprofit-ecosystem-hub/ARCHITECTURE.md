# Application Architecture Diagram

## File Relationship & Data Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           ATLANTA NONPROFIT                              │
│                        ECOSYSTEM HUB APPLICATION                         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                              ENTRY POINT                                 │
│                                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │                         index.html                              │    │
│  │  • Main HTML structure                                         │    │
│  │  • Sidebar navigation                                          │    │
│  │  • Content sections                                            │    │
│  │  • Loads all CSS and JS files                                 │    │
│  └────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
              │
              ├─────────────────┬─────────────────┬──────────────────┐
              ▼                 ▼                 ▼                  ▼

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   CSS LAYER      │  │  DATA LAYER      │  │  LOGIC LAYER     │  │  APP LAYER       │
└──────────────────┘  └──────────────────┘  └──────────────────┘  └──────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                            CSS ARCHITECTURE                               │
│                          (Loaded in order)                                │
│                                                                           │
│  1. reset.css                                                            │
│     └─> Normalizes browser defaults                                     │
│                                                                           │
│  2. variables.css                                                        │
│     └─> Defines theme (colors, fonts, spacing)                         │
│         ├─> --primary-green, --primary-purple                           │
│         ├─> --font-serif, --font-sans                                   │
│         └─> --spacing-*, --radius-*, --shadow-*                         │
│                                                                           │
│  3. layout.css                                                           │
│     └─> Page structure and grids                                        │
│         ├─> .sidebar (fixed navigation)                                 │
│         ├─> .main-content (content area)                                │
│         ├─> .stat-grid (card layouts)                                   │
│         └─> .ecosystem-grid (3-column layout)                           │
│                                                                           │
│  4. components.css                                                       │
│     └─> All UI components                                               │
│         ├─> Typography (h1-h4)                                          │
│         ├─> Cards (.stat-card, .eco-card)                               │
│         ├─> Buttons (.btn, .btn-primary)                                │
│         ├─> Tabs (.tab, .tab-content)                                   │
│         ├─> Forms (.answer-option)                                      │
│         └─> Special components (timeline, detail-panel)                 │
│                                                                           │
│  5. responsive.css                                                       │
│     └─> Mobile/tablet adaptations                                       │
│         ├─> @media (max-width: 1024px) - Tablet                        │
│         ├─> @media (max-width: 768px) - Mobile                         │
│         └─> @media (max-width: 480px) - Small mobile                   │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                        JAVASCRIPT ARCHITECTURE                            │
│                          (Loaded in order)                                │
│                                                                           │
│  1. config.js                                                            │
│     └─> Global configuration                                            │
│         ├─> APP_CONFIG (settings)                                       │
│         └─> utils (helper functions)                                    │
│                                                                           │
│  2. DATA LAYER                                                           │
│     ├─> data/interventions.js                                           │
│     │   └─> interventionData object                                     │
│     │       ├─> Intervention 1-4 definitions                            │
│     │       ├─> Activities, impacts                                     │
│     │       └─> Challenge/outcome mappings                              │
│     │                                                                    │
│     └─> data/assessment.js                                              │
│         └─> assessmentQuestions array                                   │
│         └─> assessmentCategories object                                 │
│             ├─> vulnerable (0-16 points)                                │
│             ├─> building (17-33 points)                                 │
│             └─> resilient (34-50 points)                                │
│                                                                           │
│  3. FEATURE MODULES                                                      │
│     ├─> navigation.js                                                   │
│     │   └─> Navigation class                                            │
│     │       ├─> navigateToSection()                                     │
│     │       ├─> Handle nav clicks                                       │
│     │       ├─> Update URL hash                                         │
│     │       └─> Browser back/forward                                    │
│     │                                                                    │
│     ├─> interventions.js                                                │
│     │   └─> Interventions class                                         │
│     │       ├─> showIntervention()                                      │
│     │       ├─> closeDetail()                                           │
│     │       └─> Handle card clicks                                      │
│     │                                                                    │
│     └─> assessment.js                                                   │
│         └─> Assessment class                                            │
│             ├─> selectAnswer()                                          │
│             ├─> calculateResults()                                      │
│             ├─> displayResults()                                        │
│             └─> reset()                                                 │
│                                                                           │
│  4. main.js                                                              │
│     └─> App class (coordinator)                                         │
│         ├─> Initialize all modules                                      │
│         ├─> Setup tab functionality                                     │
│         ├─> Handle initial hash                                         │
│         └─> Error handling                                              │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                           DATA FLOW DIAGRAM                               │
│                                                                           │
│  User Action                Module              Data                     │
│  ───────────                ──────              ────                     │
│                                                                           │
│  Click Nav Item  ──────>  Navigation  ──────>  Update URL hash          │
│       │                      │                                            │
│       └──────────────────────┼──────>  Show/hide sections                │
│                                                                           │
│  Click Card      ──────>  Interventions ───>  Load from                  │
│       │                      │                 interventionData           │
│       └──────────────────────┼──────>  Display detail panel              │
│                                                                           │
│  Select Answer   ──────>  Assessment  ──────>  Store score               │
│       │                      │                                            │
│       └──────────────────────┼──────>  Enable calculate button           │
│                                                                           │
│  Calculate       ──────>  Assessment  ──────>  Load from                 │
│       │                      │                 assessmentCategories       │
│       └──────────────────────┼──────>  Display results                   │
│                                                                           │
│  Click Tab       ──────>  Main (App)  ──────>  Toggle visibility         │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                        COMPONENT HIERARCHY                                │
│                                                                           │
│  index.html                                                              │
│  │                                                                        │
│  ├─ <nav class="sidebar">                                               │
│  │   ├─ .sidebar-header                                                 │
│  │   └─ .nav-section                                                    │
│  │       └─ .nav-item (clickable)                                       │
│  │                                                                        │
│  └─ <main class="main-content">                                         │
│      └─ .content-section (multiple, toggle visibility)                 │
│          │                                                               │
│          ├─ Overview Section                                            │
│          │   ├─ .stat-grid                                              │
│          │   │   └─ .stat-card                                          │
│          │   └─ .ecosystem-container                                    │
│          │       └─ .ecosystem-grid                                     │
│          │           ├─ .ecosystem-column (challenges)                  │
│          │           ├─ .connector (arrows)                             │
│          │           ├─ .ecosystem-column (interventions)               │
│          │           ├─ .connector (arrows)                             │
│          │           └─ .ecosystem-column (outcomes)                    │
│          │                                                               │
│          ├─ Theory of Change Section                                    │
│          │   ├─ .intervention-card (clickable)                          │
│          │   └─ .detail-panel (shows on click)                          │
│          │                                                               │
│          ├─ Assessment Section                                          │
│          │   ├─ .assessment-question                                    │
│          │   │   └─ .answer-option (clickable)                          │
│          │   ├─ <button> Calculate Results                             │
│          │   └─ .assessment-results (hidden until calculated)           │
│          │       └─ .recommendation-item                                │
│          │                                                               │
│          └─ Other Sections...                                           │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                          EVENT FLOW                                       │
│                                                                           │
│  1. Page Load                                                            │
│     └─> DOM Ready                                                        │
│         ├─> Navigation instance created                                 │
│         ├─> Interventions instance created                              │
│         ├─> Assessment instance created                                 │
│         └─> App instance created                                        │
│             └─> Initializes tabs and hash navigation                    │
│                                                                           │
│  2. User Clicks Navigation Item                                          │
│     └─> navigation.js handles click                                     │
│         ├─> Updates active states                                       │
│         ├─> Shows target section                                        │
│         ├─> Updates URL hash                                            │
│         └─> Scrolls to top                                              │
│                                                                           │
│  3. User Clicks Intervention Card                                        │
│     └─> interventions.js handles click                                  │
│         ├─> Gets intervention number                                    │
│         ├─> Loads data from interventionData                            │
│         ├─> Builds detail HTML                                          │
│         ├─> Shows detail panel                                          │
│         └─> Highlights active card                                      │
│                                                                           │
│  4. User Takes Assessment                                                │
│     └─> assessment.js handles clicks                                    │
│         ├─> Select answer → store score                                 │
│         ├─> All answered → enable button                                │
│         ├─> Calculate → sum scores                                      │
│         ├─> Get category from assessmentCategories                      │
│         ├─> Build recommendations HTML                                  │
│         └─> Display results                                             │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                        STATE MANAGEMENT                                   │
│                                                                           │
│  Navigation Module:                                                      │
│  • currentSection: string (tracks active section)                       │
│                                                                           │
│  Interventions Module:                                                   │
│  • currentIntervention: number | null (tracks selected card)            │
│  • detailPanel: HTMLElement (reference to panel)                        │
│                                                                           │
│  Assessment Module:                                                      │
│  • scores: object (maps question index to score)                        │
│  • questions: NodeList (all question elements)                          │
│  • calculateButton: HTMLElement                                          │
│  • resultsSection: HTMLElement                                           │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────┐
│                     ASSET DEPENDENCIES                                    │
│                                                                           │
│  External Resources:                                                     │
│  • Google Fonts: Young Serif, Familjen Grotesk                         │
│                                                                           │
│  Internal Resources:                                                     │
│  • CSS files (5) - loaded synchronously                                 │
│  • JS files (8) - loaded synchronously in order                         │
│  • Images - loaded on demand                                            │
│                                                                           │
│  No Other Dependencies:                                                  │
│  • No jQuery                                                             │
│  • No React/Vue/Angular                                                  │
│  • No Bootstrap                                                          │
│  • Pure vanilla JavaScript                                              │
│  • Standard CSS (no preprocessors required)                             │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘
