/**
 * Modal Module
 * Handles detail panel display for stakeholder information
 */

import { data } from '../data/data.js';

export class ModalController {
  constructor(mapController) {
    this.mapController = mapController;
    this.modal = document.getElementById('modal');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalBody = document.getElementById('modalBody');
    this.closeBtn = document.getElementById('closeModal');
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Close button
    this.closeBtn.addEventListener('click', () => {
      this.close();
    });
    
    // Click outside to close
    this.modal.addEventListener('click', e => {
      if (e.target === this.modal) {
        this.close();
      }
    });
  }

  /**
   * Open detail modal for a stakeholder node
   */
  open(nodeId) {
    const node = this.mapController.getNode(nodeId);
    if (!node) return;
    
    const seg = this.mapController.getSegment(node.seg);
    
    // Build function badges
    const fnBadges = (node.fn || [])
      .map(k => {
        const fn = this.mapController.getFunction(k);
        return `<span class="badge">${fn.label}</span>`;
      })
      .join(' ');
    
    // Build capacity list
    const capList = '<ul class="p">' + 
      (node.capacitiesLong || node.capacities || [])
        .map(x => `<li>${x}</li>`)
        .join('') + 
      '</ul>';
    
    // Build challenges list
    const chList = '<ul class="p">' + 
      (node.challenges || [])
        .map(x => `<li>${x}</li>`)
        .join('') + 
      '</ul>';
    
    // Build dependencies with clickable chips
    const depList = (node.deps || [])
      .map(d => {
        const target = data.nodes.find(x => x.id === d.id);
        const label = target ? target.title : d.id;
        return `
          <div class="p" style="display:flex;gap:8px;align-items:flex-start;">
            <button class="dep" data-id="${d.id}">${label}</button>
            <div style="color:#4a5b8c">${d.why || ''}</div>
          </div>
        `;
      })
      .join('');
    
    // Build subcategories grid
    let subList = '<div class="p" style="color:#6a789f">Not applicable.</div>';
    if (node.subcats && node.subcats.length) {
      subList = '<div class="subgrid">' + 
        node.subcats.map(s => {
          const bullets = (s.bullets || [])
            .map(b => `<li>${b}</li>`)
            .join('');
          return `
            <div class="subcard">
              <h5>${s.title}</h5>
              <div class="mini">${s.mini || ''}</div>
              <ul>${bullets}</ul>
            </div>
          `;
        }).join('') + 
        '</div>';
    }
    
    // Build full modal content
    const html = `
      <div class="block">
        <h4>Segment</h4>
        <div class="p">
          <span class="badge" style="background:#e9f7ef;border-color:#bfe7cc;color:#0f4e27">
            ${seg.label}
          </span>
        </div>
      </div>
      <div class="block">
        <h4>Function Lens</h4>
        <div class="p">${fnBadges}</div>
      </div>
      <div class="block">
        <h4>Key Function</h4>
        <div class="p">${node.keyFunction || ''}</div>
      </div>
      <div class="block">
        <h4>Description</h4>
        <div class="p">${node.descLong || node.desc || ''}</div>
      </div>
      <div class="block">
        <h4>Capacities</h4>
        ${capList}
      </div>
      <div class="block">
        <h4>Bottlenecks & Challenges</h4>
        ${chList}
      </div>
      <div class="block">
        <h4>Sub-categories</h4>
        ${subList}
      </div>
      <div class="block">
        <h4>Key Relationship Dependencies</h4>
        ${depList}
      </div>
    `;
    
    this.modalTitle.textContent = node.title;
    this.modalBody.innerHTML = html;
    this.modal.classList.add('open');
    
    // Setup dependency chip click handlers
    this.modalBody.querySelectorAll('.dep').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-id');
        this.close();
        setTimeout(() => {
          this.open(targetId);
          this.mapController.scrollToCard(targetId);
        }, 50);
      });
    });
  }

  /**
   * Close the modal
   */
  close() {
    this.modal.classList.remove('open');
  }

  /**
   * Show help/instructions modal
   */
  showHelp() {
    this.modalTitle.textContent = 'How to use this explorer';
    this.modalBody.innerHTML = `
      <div class="block">
        <h4>Explore roles</h4>
        <div class="p">Open any card to see <em>Description</em>, <em>Capacities</em>, <em>Challenges</em>, <em>Sub-categories</em>, and <em>Dependencies</em>. Dependency chips jump to the related stakeholder.</div>
      </div>
      <div class="block">
        <h4>Function Lens</h4>
        <div class="p">Use the chips to spotlight who does <strong>Provision</strong>, <strong>Origination</strong>, <strong>Execution</strong>, or <strong>Opportunity Development</strong>.</div>
      </div>
      <div class="block">
        <h4>Strategies</h4>
        <div class="p">Open the <strong>Strategies</strong> tab to read step-by-step flows ("How the money moves") under each strategy-<strong>Divesting</strong>, <strong>ESG Integration & Stewardship</strong>, <strong>Thematic</strong>, and <strong>Place-Based</strong>. Click any stakeholder chip to jump back to the Map and open its details.</div>
      </div>
      <div class="block">
        <h4>Download</h4>
        <div class="p">Use <strong>Download Strategy Brief</strong> to export a print-ready multi-case PDF using your brand font and colors. Each example includes <em>Key Steps</em>, an <em>Illustrative Capital Stack</em>, and <em>Who depends on whom (and why)</em>.</div>
      </div>
    `;
    this.modal.classList.add('open');
  }
}
