/**
 * Map Module
 * Builds stakeholder cards and grid visualization
 */

import { data } from '../data/data.js';

export class MapController {
  constructor() {
    this.grid = document.getElementById('grid');
    this.segMap = {};
    this.fnMap = {};
    
    // Build lookup maps
    data.segments.forEach(s => { this.segMap[s.key] = s; });
    data.functions.forEach(f => { this.fnMap[f.key] = f; });
  }

  /**
   * Build column-based grid layout with stakeholder cards
   */
  buildColumns() {
    this.grid.innerHTML = '';
    
    data.segments.forEach(seg => {
      const col = document.createElement('div');
      col.className = 'col';
      col.dataset.seg = seg.key;
      col.innerHTML = `
        <h3>${seg.label}</h3>
        <p class="sub">Click a card to view role & relationships</p>
        <div class="list"></div>
      `;
      this.grid.appendChild(col);
      
      const list = col.querySelector('.list');
      const segmentNodes = data.nodes.filter(n => n.seg === seg.key);
      
      segmentNodes.forEach(n => {
        const card = this.createCard(n);
        list.appendChild(card);
      });
    });
  }

  /**
   * Create a stakeholder card element
   */
  createCard(node) {
    const card = document.createElement('div');
    card.className = 'card';
    card.tabIndex = 0;
    card.dataset.id = node.id;
    card.dataset.seg = node.seg;
    card.dataset.fn = (node.fn || []).join(',');
    
    // Build function badges
    let badges = '';
    if (node.fn && node.fn.length) {
      badges = '<div style="margin-top:4px">';
      node.fn.forEach(f => {
        const letter = f === 'provision' ? 'P' 
                    : f === 'origination' ? 'O' 
                    : f === 'execution' ? 'E' 
                    : 'D';
        badges += `<span class="badge" style="font-size:11px; padding:2px 5px; min-width:20px">${letter}</span> `;
      });
      badges += '</div>';
    }
    
    card.innerHTML = `
      <div class="title">${node.title}</div>
      ${badges}
      <div class="meta">${node.meta}</div>
    `;
    
    return card;
  }

  /**
   * Apply function lens filter to cards
   */
  functionLens(applyKey) {
    const cards = this.grid.querySelectorAll('.card');
    cards.forEach(c => {
      if (applyKey === 'all') {
        c.classList.remove('dim');
        return;
      }
      const has = (c.dataset.fn || '').split(',').indexOf(applyKey) >= 0;
      c.classList.toggle('dim', !has);
    });
  }

  /**
   * Reset all filters
   */
  reset() {
    this.functionLens('all');
    const cards = this.grid.querySelectorAll('.card');
    cards.forEach(c => {
      c.classList.remove('dim');
      c.style.display = '';
    });
  }

  /**
   * Get a specific node by ID
   */
  getNode(id) {
    return data.nodes.find(n => n.id === id);
  }

  /**
   * Get segment info by key
   */
  getSegment(key) {
    return this.segMap[key];
  }

  /**
   * Get function info by key
   */
  getFunction(key) {
    return this.fnMap[key];
  }

  /**
   * Scroll to card by ID
   */
  scrollToCard(id) {
    const card = this.grid.querySelector(`.card[data-id="${id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  /**
   * Search cards by text
   */
  search(term) {
    const lowerTerm = term.trim().toLowerCase();
    const cards = this.grid.querySelectorAll('.card');
    
    cards.forEach(card => {
      const id = card.dataset.id;
      const node = this.getNode(id);
      if (!node) return;
      
      const searchText = [
        node.title,
        node.meta || '',
        node.keyFunction || '',
        node.descLong || node.desc || '',
        ...(node.capacitiesLong || node.capacities || []),
        ...(node.challenges || [])
      ].join(' ').toLowerCase();
      
      const matches = lowerTerm === '' || searchText.indexOf(lowerTerm) >= 0;
      card.style.display = matches ? '' : 'none';
    });
  }
}
