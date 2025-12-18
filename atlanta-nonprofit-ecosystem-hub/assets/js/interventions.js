// Interventions Module
// Handles the Theory of Change interactive features

class Interventions {
    constructor() {
        this.currentIntervention = null;
        this.detailPanel = null;
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Get detail panel element
        this.detailPanel = document.getElementById('interventionDetail');
        
        if (!this.detailPanel) {
            console.warn('Intervention detail panel not found');
            return;
        }

        // Add click handlers to intervention cards
        const interventionCards = document.querySelectorAll('.intervention-card');
        interventionCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const interventionNum = parseInt(card.dataset.intervention);
                this.showIntervention(interventionNum);
            });
        });

        // Add close button handler
        const closeBtn = document.querySelector('.close-detail');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeDetail());
        }
    }

    showIntervention(num) {
        if (!interventionData[num]) {
            console.error(`Intervention ${num} not found`);
            return;
        }

        const data = interventionData[num];
        const titleEl = document.getElementById('detailTitle');
        const contentEl = document.getElementById('detailContent');
        
        if (!titleEl || !contentEl) {
            console.error('Detail elements not found');
            return;
        }

        // Update title
        titleEl.textContent = data.title;
        
        // Build content HTML
        contentEl.innerHTML = `
            <div class="detail-section">
                <p class="detail-description">${data.description}</p>
            </div>
            
            <div class="detail-grid">
                <div class="detail-column">
                    <h4>Key Activities & Implementation</h4>
                    <ul class="detail-list">
                        ${data.activities.map(activity => `<li>${activity}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-column">
                    <h4>Expected Impact</h4>
                    <div class="impact-box">
                        <p><strong>${data.impact}</strong></p>
                    </div>
                    
                    <h4 style="margin-top: 25px;">Addresses Challenges</h4>
                    <ul class="detail-list">
                        ${data.addresses.map(challenge => `<li>${challenge}</li>`).join('')}
                    </ul>
                    
                    <h4 style="margin-top: 25px;">Creates Outcomes</h4>
                    <ul class="detail-list">
                        ${data.creates.map(outcome => `<li>${outcome}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        // Show panel
        this.detailPanel.style.display = 'block';
        
        // Scroll to panel
        utils.scrollTo(this.detailPanel, { block: 'nearest' });
        
        // Highlight the selected intervention
        document.querySelectorAll('.intervention-card').forEach(c => {
            c.classList.remove('active');
        });
        
        const selectedCard = document.querySelector(`[data-intervention="${num}"]`);
        if (selectedCard) {
            selectedCard.classList.add('active');
        }
        
        this.currentIntervention = num;
    }

    closeDetail() {
        if (this.detailPanel) {
            this.detailPanel.style.display = 'none';
        }
        
        // Remove active state from all cards
        document.querySelectorAll('.intervention-card').forEach(c => {
            c.classList.remove('active');
        });
        
        this.currentIntervention = null;
    }

    highlightConnections(interventionNum) {
        // This could be extended to highlight related challenges and outcomes
        console.log(`Highlighting connections for intervention ${interventionNum}`);
    }
}

// Initialize interventions when DOM is ready
let interventionsInstance;

document.addEventListener('DOMContentLoaded', () => {
    interventionsInstance = new Interventions();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Interventions };
}
