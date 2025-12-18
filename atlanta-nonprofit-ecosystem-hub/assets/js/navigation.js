// Navigation Module
// Handles sidebar navigation and content section switching

class Navigation {
    constructor() {
        this.currentSection = APP_CONFIG.defaultSection;
        this.navItems = document.querySelectorAll('.nav-item');
        this.contentSections = document.querySelectorAll('.content-section');
        this.init();
    }

    init() {
        // Add click handlers to navigation items
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const targetSection = e.target.dataset.target;
                this.navigateToSection(targetSection);
            });
        });

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.section) {
                this.navigateToSection(e.state.section, false);
            }
        });

        // Initialize with default section
        this.navigateToSection(this.currentSection, true);
    }

    navigateToSection(sectionId, updateHistory = true) {
        // Update navigation active state
        this.navItems.forEach(item => {
            if (item.dataset.target === sectionId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update content visibility
        this.contentSections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Update browser history
        if (updateHistory) {
            history.pushState(
                { section: sectionId },
                '',
                `#${sectionId}`
            );
        }

        // Update current section
        this.currentSection = sectionId;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Load dynamic content if needed
        this.loadSectionContent(sectionId);
    }

    loadSectionContent(sectionId) {
        // This method can be extended to load content dynamically
        // For now, all content is in the HTML
        console.log(`Loading section: ${sectionId}`);
    }

    getCurrentSection() {
        return this.currentSection;
    }
}

// Initialize navigation when DOM is ready
let navigationInstance;

document.addEventListener('DOMContentLoaded', () => {
    navigationInstance = new Navigation();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Navigation };
}
