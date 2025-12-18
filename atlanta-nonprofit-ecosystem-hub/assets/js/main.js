// Main Application Entry Point
// Initializes all modules and handles app-wide functionality

class App {
    constructor() {
        this.modules = {};
        this.init();
    }

    init() {
        console.log(`${APP_CONFIG.appName} v${APP_CONFIG.version} initializing...`);
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Initialize tab functionality
        this.initializeTabs();
        
        // Handle initial hash navigation
        this.handleInitialHash();
        
        console.log(`${APP_CONFIG.appName} initialized successfully`);
    }

    initializeTabs() {
        // Generic tab functionality for all tabbed content
        const tabs = document.querySelectorAll('.tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const targetTab = e.target.dataset.tab;
                const tabContainer = e.target.closest('.tabs');
                
                if (!tabContainer) return;
                
                // Remove active class from all tabs in this container
                tabContainer.querySelectorAll('.tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked tab
                e.target.classList.add('active');
                
                // Find parent section
                const section = tabContainer.closest('.content-section');
                if (!section) return;
                
                // Update tab content visibility
                section.querySelectorAll('.tab-content').forEach(content => {
                    if (content.id === targetTab) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    }

    handleInitialHash() {
        // Check if there's a hash in the URL
        const hash = window.location.hash.slice(1);
        
        if (hash) {
            // Navigate to the section specified in the hash
            const navItem = document.querySelector(`.nav-item[data-target="${hash}"]`);
            if (navItem) {
                navItem.click();
            }
        }
    }

    // Utility methods
    showNotification(message, type = 'info') {
        // Could be extended to show toast notifications
        console.log(`[${type.toUpperCase()}] ${message}`);
    }

    handleError(error, context = '') {
        console.error(`Error in ${context}:`, error);
        this.showNotification(`An error occurred: ${error.message}`, 'error');
    }
}

// Initialize app when script loads
const app = new App();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { App };
}
