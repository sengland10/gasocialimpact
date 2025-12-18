/**
 * Navigation Module
 * Handles view switching and sidebar navigation
 */

export class NavigationController {
  constructor() {
    this.navButtons = document.querySelectorAll('aside .nav button');
    this.sections = document.querySelectorAll('.section');
    this.searchEl = document.querySelector('aside .search');
    this.lensEl = document.querySelector('aside .lens');
    this.legendEl = document.querySelector('aside .legend');
    
    this.setupEventListeners();
  }

  /**
   * Setup navigation button click handlers
   */
  setupEventListeners() {
    this.navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        this.switchView(view);
      });
    });
  }

  /**
   * Switch to a specific view
   */
  switchView(view) {
    // Update button states
    this.navButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`aside .nav button[data-view="${view}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
    
    // Update section visibility
    this.sections.forEach(section => {
      section.classList.remove('active');
    });
    const activeSection = document.getElementById(`view-${view}`);
    if (activeSection) {
      activeSection.classList.add('active');
    }
    
    // Hide/show search, lens, and legend for Georgia tab
    if (view === 'georgia') {
      if (this.searchEl) this.searchEl.style.display = 'none';
      if (this.lensEl) this.lensEl.style.display = 'none';
      if (this.legendEl) this.legendEl.style.display = 'none';
    } else {
      if (this.searchEl) this.searchEl.style.display = '';
      if (this.lensEl) this.lensEl.style.display = '';
      if (this.legendEl) this.legendEl.style.display = '';
    }
  }

  /**
   * Get current active view
   */
  getCurrentView() {
    const activeBtn = document.querySelector('aside .nav button.active');
    return activeBtn ? activeBtn.dataset.view : 'map';
  }
}
