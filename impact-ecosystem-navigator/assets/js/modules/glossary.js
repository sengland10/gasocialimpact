/**
 * Glossary Module
 * Builds glossary terms display
 */

import { glossary } from '../data/glossary.js';

export class GlossaryController {
  constructor() {
    this.container = document.getElementById('glossary');
  }

  /**
   * Build glossary display
   */
  build() {
    this.container.innerHTML = '';
    
    glossary.forEach(group => {
      const block = document.createElement('div');
      block.className = 'block';
      block.innerHTML = `<h4>${group.group}</h4>`;
      
      group.items.forEach(item => {
        const line = document.createElement('div');
        line.className = 'p';
        line.innerHTML = `<span class="badge" style="margin-right:8px">${item.term}</span>${item.def}`;
        block.appendChild(line);
      });
      
      this.container.appendChild(block);
    });
  }

  /**
   * Search glossary terms
   */
  search(term) {
    const lowerTerm = term.trim().toLowerCase();
    const items = this.container.querySelectorAll('.block .p');
    
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      const matches = lowerTerm === '' || text.indexOf(lowerTerm) >= 0;
      item.style.display = matches ? '' : 'none';
    });
  }
}
