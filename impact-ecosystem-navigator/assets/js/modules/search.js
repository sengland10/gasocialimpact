/**
 * Search Module
 * Unified search across all views
 */

export class SearchController {
  constructor(mapController, strategiesController, glossaryController) {
    this.mapController = mapController;
    this.strategiesController = strategiesController;
    this.glossaryController = glossaryController;
    this.searchInput = document.getElementById('q');
    
    this.setupEventListeners();
  }

  /**
   * Setup search input handler
   */
  setupEventListeners() {
    this.searchInput.addEventListener('input', () => {
      const term = this.searchInput.value;
      this.search(term);
    });
  }

  /**
   * Perform search across all views
   */
  search(term) {
    // Search map cards
    this.mapController.search(term);
    
    // Search strategies
    this.strategiesController.search(term);
    
    // Search glossary
    this.glossaryController.search(term);
  }

  /**
   * Clear search
   */
  clear() {
    this.searchInput.value = '';
    this.search('');
  }
}
