/**
 * Strategies Module
 * Builds strategy sections with case studies and PDF export
 */

import { data } from '../data/data.js';
import { strategies } from '../data/strategies.js';

export class StrategiesController {
  constructor(mapController, modalController, navigationController) {
    this.mapController = mapController;
    this.modalController = modalController;
    this.navigationController = navigationController;
    this.container = document.getElementById('strategiesList');
  }

  /**
   * Build all strategy sections
   */
  build() {
    this.container.innerHTML = '';
    
    strategies.forEach(strategy => {
      const block = this.createStrategyBlock(strategy);
      this.container.appendChild(block);
    });
    
    this.setupEventListeners();
  }

  /**
   * Create a strategy block with cases
   */
  createStrategyBlock(strategy) {
    const block = document.createElement('div');
    block.className = 'strategy';
    
    // Strategy-level actions
    const actions = `
      <div class="strategy-actions">
        <button class="btn" data-dl="${strategy.key}">Download Strategy Brief (PDF)</button>
      </div>
    `;
    
    // Stakeholder chips
    const chips = '<div class="chips">' +
      strategy.stakeholders.map(id => {
        const node = data.nodes.find(x => x.id === id);
        if (!node) return '';
        return `<button class="stake" data-id="${node.id}" data-seg="${node.seg}">${node.title}</button>`;
      }).join('') +
      '</div>';
    
    // Case studies
    const cases = (strategy.cases || []).map(cs => {
      const steps = cs.steps.map((text, i) => {
        return `<div class="box"><div class="step">Step ${i + 1}</div>${text}</div>`;
      }).join('');
      
      const tags = (cs.instruments || [])
        .map(t => `<span class="badge">${t}</span>`)
        .join('');
      
      const stakeholders = (cs.stakeholders || [])
        .map(id => {
          const node = data.nodes.find(x => x.id === id);
          return `<button class="stake" data-id="${id}" data-seg="${node ? node.seg : ''}">${node ? node.title : id}</button>`;
        }).join('');
      
      return `
        <div class="cs">
          <h4>${cs.title}</h4>
          <div class="flow">${steps}</div>
          <div class="tags" style="margin-top:8px">${tags}</div>
          <div class="chips" style="margin-top:6px">${stakeholders}</div>
        </div>
      `;
    }).join('');
    
    block.innerHTML = `
      <h3>${strategy.title}</h3>
      <div class="desc">${strategy.longDesc}</div>
      ${actions}
      ${chips}
      ${cases}
    `;
    
    return block;
  }

  /**
   * Setup click handlers for stakeholder chips and download buttons
   */
  setupEventListeners() {
    // Stakeholder chip clicks - switch to map and open modal
    this.container.querySelectorAll('.stake').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.navigationController.switchView('map');
        setTimeout(() => {
          this.modalController.open(id);
          this.mapController.scrollToCard(id);
        }, 50);
      });
    });
    
    // Download strategy brief buttons
    this.container.querySelectorAll('[data-dl]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-dl');
        this.exportStrategy(key);
      });
    });
  }

  /**
   * Export strategy as formatted PDF (opens in new window for print)
   */
  exportStrategy(key) {
    const strategy = strategies.find(x => x.key === key);
    if (!strategy) return;
    
    const now = new Date();
    const dateStr = now.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    
    // Build cases HTML
    const casesHtml = (strategy.cases || []).map((cs, idx) => {
      const steps = cs.steps.map((text, i) => {
        return `<div style="border:1px solid #e5e7eb;border-radius:10px;padding:10px;margin:6px 0;background:#f7fbfb"><span style="background:#0F7938;color:#fff;border-radius:6px;padding:2px 8px;font-weight:700;margin-right:8px">Step ${i + 1}</span>${text}</div>`;
      }).join('');
      
      const instruments = (cs.instruments || [])
        .map(x => `<span style="display:inline-block;margin:2px 6px 2px 0;padding:6px 10px;border-radius:999px;border:1px solid #e5e7eb;background:#fff">${x}</span>`)
        .join('');
      
      const depsHtml = this.buildDependencies(cs.stakeholders || []);
      const stackHtml = this.buildCapitalStack(cs.instruments || []);
      const stakeholders = (cs.stakeholders || [])
        .map(id => {
          const node = data.nodes.find(x => x.id === id);
          return `<span class="chip">${node ? node.title : id}</span>`;
        }).join(' ');
      
      const extra = this.programNotes(cs.instruments || []);
      
      return `
        <section style="break-inside:avoid;margin:18px 0;padding:12px;border:1px solid #e5e7eb;border-radius:12px;background:linear-gradient(135deg, rgba(15,121,56,.04), rgba(31,41,81,.03))">
          <h2 style="font-size:18px;margin:0 0 8px;color:#1E2951">${cs.title}</h2>
          <div style="margin:6px 0 10px"><strong>Stakeholders:</strong> ${stakeholders}</div>
          <div style="display:grid;grid-template-columns:1.1fr .9fr;gap:14px">
            <div>
              <div style="border-left:6px solid #0F7938;background:#f4fbf6;border:1px solid #c8ead8;border-left-color:#0F7938;padding:10px;border-radius:10px">
                <h3 style="margin:0 0 6px;color:#0F7938">Key Steps</h3>${steps}
              </div>
              ${extra}
            </div>
            <div>
              <div style="border-left:6px solid #D4AF37;background:#fffcf2;border:1px solid #f0e4b6;border-left-color:#D4AF37;padding:10px;border-radius:10px">
                <h3 style="margin:0 0 6px;color:#8a6b05">Illustrative Capital Stack</h3>${stackHtml}
                <div style="margin-top:8px"><strong>Instruments:</strong> ${instruments}</div>
              </div>
              <div style="margin-top:10px;border-left:6px solid #6FBFB3;background:#f2fbfa;border:1px solid #cfe9e6;border-left-color:#6FBFB3;padding:10px;border-radius:10px">
                <h3 style="margin:0 0 6px;color:#0a5b5d">Who depends on whom (and why)</h3>${depsHtml}
              </div>
            </div>
          </div>
        </section>
      `;
    }).join('');
    
    // Instrument index for header
    const instrumentIndex = [];
    (strategy.cases || []).forEach(cs => {
      (cs.instruments || []).forEach(i => {
        if (instrumentIndex.indexOf(i) < 0) instrumentIndex.push(i);
      });
    });
    const instrumentBadges = instrumentIndex
      .map(i => `<span class="chip">${i}</span>`)
      .join(' ');
    
    const html = this.buildPDFTemplate(strategy, dateStr, instrumentBadges, casesHtml);
    
    // Open in new window and trigger print
    const win = window.open('', '_blank');
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => {
      try { win.print(); } catch (e) {}
    }, 500);
  }

  /**
   * Build capital stack visualization
   */
  buildCapitalStack(instruments) {
    const groups = {};
    (instruments || []).forEach(name => {
      const c = this.classifyInstrument(name);
      groups[c.tier] = groups[c.tier] || { color: c.color, items: [] };
      groups[c.tier].items.push(name);
    });
    
    const order = ['Senior Debt', 'Bonds', 'Assessment Finance', 'Subordinate/Mezz', 'Equity / Tax Equity', 'Guarantees/Grants', 'Contracts/PPAs', 'Other Tools'];
    const html = order
      .filter(key => groups[key])
      .map(key => {
        const g = groups[key];
        return `<div style="border-left:5px solid ${g.color};background:#f8fafc;border:1px solid #e5e7eb;border-left-color:${g.color};padding:8px;border-radius:8px;margin:6px 0"><strong>${key}:</strong> ${g.items.join(' • ')}</div>`;
      })
      .join('');
    
    return html || '<div style="color:#6B7280">Add instruments to display an illustrative stack.</div>';
  }

  /**
   * Classify instrument into capital stack tier
   */
  classifyInstrument(name) {
    const s = name.toLowerCase();
    if (s.includes('senior') && (s.includes('debt') || s.includes('loan'))) {
      return { tier: 'Senior Debt', color: '#1E2951' };
    }
    if (s.includes('subordinate') || s.includes('mezz')) {
      return { tier: 'Subordinate/Mezz', color: '#6FBFB3' };
    }
    if (s.includes('equity') || s.includes('tax equity') || s.includes('vc') || s.includes('private equity')) {
      return { tier: 'Equity / Tax Equity', color: '#D4AF37' };
    }
    if (s.includes('guarantee') || s.includes('llr') || s.includes('first-loss') || s.includes('pri') || s.includes('grant')) {
      return { tier: 'Guarantees/Grants', color: '#0F7938' };
    }
    if (s.includes('bond')) {
      return { tier: 'Bonds', color: '#1E2951' };
    }
    if (s.includes('ppa')) {
      return { tier: 'Contracts/PPAs', color: '#6FBFB3' };
    }
    if (s.includes('c-pace') || s.includes('pace')) {
      return { tier: 'Assessment Finance', color: '#6FBFB3' };
    }
    return { tier: 'Other Tools', color: '#9AA6D1' };
  }

  /**
   * Build dependency relationships
   */
  buildDependencies(caseStakeholderIds) {
    const lines = [];
    (caseStakeholderIds || []).forEach(aId => {
      const a = data.nodes.find(x => x.id === aId);
      if (!a || !a.deps) return;
      
      a.deps.forEach(d => {
        if ((caseStakeholderIds || []).indexOf(d.id) >= 0) {
          const b = data.nodes.find(x => x.id === d.id);
          const aName = a ? a.title : aId;
          const bName = b ? b.title : d.id;
          lines.push(`<li><strong>${aName} → ${bName}:</strong> ${d.why || ''}</li>`);
        }
      });
    });
    
    if (!lines.length) {
      return '<div style="color:#6B7280">No direct dependencies captured among the selected stakeholders.</div>';
    }
    return '<ul>' + lines.join('') + '</ul>';
  }

  /**
   * Generate program notes based on instruments
   */
  programNotes(instruments) {
    const s = (instruments || []).join(' ').toLowerCase();
    const notes = [];
    
    if (s.includes('lihtc')) {
      notes.push('<li><strong>LIHTC basics:</strong> federal tax credit administered by Treasury/IRS, typically allocated by State HFAs; investors receive credits for financing affordable rental housing. See HUD and IRS resources.</li>');
    }
    if (s.includes('nmtc')) {
      notes.push('<li><strong>NMTC basics:</strong> investors make <em>Qualified Equity Investments (QEI)</em> into <em>Community Development Entities (CDEs)</em> and receive a 39% federal tax credit claimed over 7 years. See CDFI Fund.</li>');
    }
    if (s.includes('green bond') || s.includes('social bond')) {
      notes.push('<li><strong>Labeled bonds:</strong> use-of-proceeds aligned to <em>ICMA Principles</em> with external review (e.g., SPO) and allocation & impact reporting.</li>');
    }
    if (s.includes('sll')) {
      notes.push('<li><strong>Sustainability-Linked Loans (SLL):</strong> margin ratchets tied to KPIs/SPTs; follow LMA/ICMA SLL Principles and Guidance.</li>');
    }
    if (s.includes('c-pace') || s.includes('pace')) {
      notes.push('<li><strong>C-PACE:</strong> private capital repaid via a property tax assessment; requires state/local enabling legislation and senior lender consent in many markets. See DOE/EPA toolkits.</li>');
    }
    if (s.includes('ppa') || s.includes('itc') || s.includes('tax equity')) {
      notes.push('<li><strong>Energy ITC / PPAs:</strong> tech-neutral §48/§48E rules and standard PPA contracting support distributed solar economics; check IRS/DOE and SEIA resources.</li>');
    }
    
    if (!notes.length) return '';
    return '<div style="margin-top:8px"><h3 style="font-size:16px;color:#1E2951;margin:8px 0 4px">Program & Terminology Notes</h3><ul>' + notes.join('') + '</ul></div>';
  }

  /**
   * Build full PDF HTML template
   */
  buildPDFTemplate(strategy, dateStr, instrumentBadges, casesHtml) {
    const stakeholderChips = (strategy.stakeholders || [])
      .map(id => {
        const n = data.nodes.find(x => x.id === id);
        return `<span class="chip">${n ? n.title : id}</span>`;
      })
      .join('');
    
    return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${strategy.title} - Strategy Brief</title>
<link href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{ --green:#0F7938; --blue:#1E2951; --yellow:#D4AF37; --light:#6FBFB3; --ink:#1E2951; --border:#e5e7eb; }
html,body{margin:0;background:#fff;color:var(--ink);font-family:"Familjen Grotesk",system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;}
.wrap{max-width:980px;margin:0 auto;padding:0 0 30px} .chip{padding:4px 8px;border:1px solid var(--border);border-radius:999px;background:#f8fafc;font-weight:600;font-size:12px;margin-right:6px}
.cover{padding:24px 28px;background:linear-gradient(135deg, rgba(15,121,56,.10), rgba(31,41,81,.10)); border-bottom:4px solid var(--yellow)}
.hdr{display:flex;align-items:center;gap:10px} .dot{width:14px;height:14px;border-radius:50%;background:var(--green);box-shadow:0 0 0 6px rgba(15,121,56,.14)}
h1{margin:6px 0 4px;font-size:28px;color:var(--blue)} .muted{color:#6B7280} .k{font-weight:700;color:var(--blue)}
.sec{padding:16px 28px} .box{border:1px solid var(--border);border-radius:12px;padding:12px;margin-top:8px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media print{ .noprint{display:none} }
a{color:#0a5b5d;text-decoration:none;border-bottom:1px dotted #6FBFB3}
</style></head><body>
<div class="wrap">
  <div class="cover">
    <div class="hdr"><div class="dot"></div><div style="font-weight:700;letter-spacing:.2px;color:var(--blue)">Impact Investing Ecosystem - Strategy Brief</div></div>
    <h1>${strategy.title}</h1>
    <div class="muted">Generated ${dateStr} • Brand colors: <span style="color:var(--green)">#0F7938</span>, <span style="color:var(--blue)">#1E2951</span>, <span style="color:var(--yellow)">#D4AF37</span>, <span style="color:var(--light)">#6FBFB3</span></div>
    <p style="margin-top:10px">${strategy.longDesc || ''}</p>
    <div class="box"><span class="k">Instruments you may see in this strategy:</span><br>${instrumentBadges}</div>
  </div>
  <div class="sec">
    <h2 style="font-size:18px;margin:0 0 6px">Stakeholders involved (from the Map)</h2>
    <div>${stakeholderChips}</div>
  </div>
  <div class="sec">
    <h2 style="font-size:18px;margin:0 0 6px">How the money moves - Examples</h2>
    ${casesHtml}
  </div>
  <div class="sec">
    <h2 style="font-size:18px;margin:0 0 6px">Reference links</h2>
    <div class="grid2">
      <div class="box">
        <h3 style="margin:0 0 6px;color:var(--blue)">Programs & Standards</h3>
        <ul style="margin:6px 0 0 18px">
          <li>LIHTC program basics - HUD & IRS</li>
          <li>NMTC program - CDFI Fund</li>
          <li>Green/Social Bonds - ICMA Principles & Guidance</li>
          <li>Sustainability-Linked Loans - LMA/ICMA Guidance</li>
          <li>C-PACE - DOE/EPA Toolkits</li>
          <li>Energy ITC (§48/§48E) - IRS final rules; PPAs - SEIA</li>
        </ul>
      </div>
      <div class="box">
        <h3 style="margin:0 0 6px;color:var(--blue)">Housekeeping</h3>
        <p class="muted">Customize steps, add dollar ranges and timelines, and paste local program URLs. Use your browser's <strong>Print</strong> to save this page as a PDF.</p>
        <p class="noprint"><a href="#" onclick="window.print();return false;">Print to PDF</a></p>
      </div>
    </div>
  </div>
</div></body></html>`;
  }

  /**
   * Search strategies by text
   */
  search(term) {
    const lowerTerm = term.trim().toLowerCase();
    const strategyBlocks = this.container.querySelectorAll('.strategy');
    
    strategyBlocks.forEach(block => {
      const text = block.textContent.toLowerCase();
      const matches = lowerTerm === '' || text.indexOf(lowerTerm) >= 0;
      block.style.display = matches ? '' : 'none';
    });
  }
}
