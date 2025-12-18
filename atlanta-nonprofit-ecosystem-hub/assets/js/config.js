// Application Configuration
const APP_CONFIG = {
    appName: 'Atlanta Nonprofit Capital Ecosystem',
    version: '1.0.0',
    defaultSection: 'overview',
    
    // API endpoints (if needed in future)
    api: {
        baseUrl: '/api',
        endpoints: {
            interventions: '/interventions',
            assessment: '/assessment'
        }
    },
    
    // Feature flags
    features: {
        enableAssessment: true,
        enableInterventions: true,
        enableTimeline: true
    }
};

// Utility functions
const utils = {
    /**
     * Debounce function for performance optimization
     */
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    /**
     * Smooth scroll to element
     */
    scrollTo: function(element, options = {}) {
        const defaultOptions = {
            behavior: 'smooth',
            block: 'start',
            ...options
        };
        element.scrollIntoView(defaultOptions);
    },
    
    /**
     * Format numbers with commas
     */
    formatNumber: function(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    
    /**
     * Generate unique ID
     */
    generateId: function() {
        return `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APP_CONFIG, utils };
}
