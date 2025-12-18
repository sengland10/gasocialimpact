/**
 * Main Application Controller
 * Initializes all modules and coordinates functionality
 */

import { MapController } from './modules/map.js';
import { ModalController } from './modules/modal.js';
import { NavigationController } from './modules/navigation.js';
import { StrategiesController } from './modules/strategies.js';
import { GlossaryController } from './modules/glossary.js';
import { GeorgiaController } from './modules/georgia.js';
import { SearchController } from './modules/search.js';

class App {
  constructor() {
    this.init();
  }

  /**
   * Initialize application
   */
  init() {
    // Initialize controllers
    this.navigationController = new NavigationController();
    this.mapController = new MapController();
    this.modalController = new ModalController(this.mapController);
    this.strategiesController = new StrategiesController(
      this.mapController,
      this.modalController,
      this.navigationController
    );
    this.glossaryController = new GlossaryController();
    this.georgiaController = new GeorgiaController();
    this.searchController = new SearchController(
      this.mapController,
      this.strategiesController,
      this.glossaryController
    );

    // Build UI
    this.buildUI();

    // Setup global event listeners
    this.setupEventListeners();
  }

  /**
   * Build all UI components
   */
  buildUI() {
    // Build map columns with stakeholder cards
    this.mapController.buildColumns();
    
    // Build strategies list
    this.strategiesController.build();
    
    // Build glossary
    this.glossaryController.build();
    
    // Initialize Georgia tab
    this.georgiaController.init();
    
    // Apply initial function lens (show all)
    this.mapController.functionLens('all');
  }

  /**
   * Setup global event listeners
   */
  setupEventListeners() {
    // Card clicks to open modal
    document.getElementById('grid').addEventListener('click', e => {
      const card = e.target.closest('.card');
      if (card) {
        const nodeId = card.dataset.id;
        this.modalController.open(nodeId);
      }
    });

    // Card keyboard navigation
    document.getElementById('grid').addEventListener('keydown', e => {
      const card = e.target.closest('.card');
      if (card && e.key === 'Enter') {
        const nodeId = card.dataset.id;
        this.modalController.open(nodeId);
      }
    });

    // Function lens chips
    const lens = document.getElementById('lens');
    lens.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      
      // Update active state
      lens.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      
      // Apply filter
      const fn = chip.dataset.fn;
      this.mapController.functionLens(fn);
    });

    // Export/Print button
    const exportBtn = document.getElementById('exportPrint');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Reset view button
    const resetBtn = document.getElementById('resetView');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.resetView();
      });
    }

    // How-to button
    const howBtn = document.getElementById('how');
    if (howBtn) {
      howBtn.addEventListener('click', () => {
        this.modalController.showHelp();
      });
    }
  }

  /**
   * Reset all filters and return to map view
   */
  resetView() {
    // Clear search
    this.searchController.clear();
    
    // Reset function lens
    this.mapController.functionLens('all');
    document.querySelectorAll('#lens .chip').forEach(c => c.classList.remove('active'));
    document.querySelector('#lens .chip[data-fn="all"]')?.classList.add('active');
    
    // Reset map cards
    this.mapController.reset();
    
    // Switch to map view
    this.navigationController.switchView('map');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new App();
  });
} else {
  new App();
}
