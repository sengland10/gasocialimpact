// Assessment Module
// Handles the self-assessment tool functionality

class Assessment {
    constructor() {
        this.scores = {};
        this.questions = [];
        this.calculateButton = null;
        this.resultsSection = null;
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
        // Get assessment elements
        this.questions = document.querySelectorAll('.assessment-question');
        this.calculateButton = document.getElementById('calculate-results');
        this.resultsSection = document.getElementById('assessment-results');
        
        if (!this.calculateButton || !this.resultsSection) {
            console.warn('Assessment elements not found');
            return;
        }

        // Add click handlers for answer options
        document.querySelectorAll('.answer-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectAnswer(e.target);
            });
        });

        // Add calculate button handler
        this.calculateButton.addEventListener('click', () => {
            this.calculateResults();
        });
    }

    selectAnswer(optionEl) {
        const question = optionEl.closest('.assessment-question');
        if (!question) return;

        const questionIndex = Array.from(this.questions).indexOf(question);
        
        // Remove selected class from other options in this question
        question.querySelectorAll('.answer-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        optionEl.classList.add('selected');
        
        // Store the score
        this.scores[questionIndex] = parseInt(optionEl.dataset.score);
        
        // Check if all questions are answered
        if (Object.keys(this.scores).length === this.questions.length) {
            this.calculateButton.disabled = false;
        }
    }

    calculateResults() {
        // Calculate total score
        const totalScore = Object.values(this.scores).reduce((a, b) => a + b, 0);
        const maxScore = this.questions.length * 5;
        const percentage = Math.round((totalScore / maxScore) * 100);
        
        // Get category based on score
        const category = getAssessmentCategory(totalScore);
        
        // Display results
        this.displayResults(category, totalScore, maxScore, percentage);
    }

    displayResults(category, totalScore, maxScore, percentage) {
        // Update result title and score
        const titleEl = document.getElementById('result-title');
        const scoreEl = document.getElementById('result-score');
        
        if (titleEl && scoreEl) {
            titleEl.textContent = category.stage;
            titleEl.style.color = category.color;
            scoreEl.textContent = `Your score: ${totalScore}/${maxScore} (${percentage}%)`;
        }
        
        // Build recommendations HTML
        const recommendationsHTML = category.recommendations.map(rec => `
            <div class="recommendation-item">
                <div class="recommendation-title">${rec.title}</div>
                <div class="recommendation-text">${rec.text}</div>
            </div>
        `).join('');
        
        const recommendationsEl = document.getElementById('result-recommendations');
        if (recommendationsEl) {
            recommendationsEl.innerHTML = recommendationsHTML;
        }
        
        // Show results section
        this.resultsSection.classList.add('show');
        
        // Scroll to results
        utils.scrollTo(this.resultsSection);
    }

    reset() {
        // Clear scores
        this.scores = {};
        
        // Remove selected class from all options
        document.querySelectorAll('.answer-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Disable calculate button
        this.calculateButton.disabled = true;
        
        // Hide results
        this.resultsSection.classList.remove('show');
        
        // Scroll to questions
        const questionsContainer = document.getElementById('assessment-questions');
        if (questionsContainer) {
            utils.scrollTo(questionsContainer);
        }
    }
}

// Global reset function for inline onclick handler
function resetAssessment() {
    if (assessmentInstance) {
        assessmentInstance.reset();
    }
}

// Initialize assessment when DOM is ready
let assessmentInstance;

document.addEventListener('DOMContentLoaded', () => {
    assessmentInstance = new Assessment();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Assessment, resetAssessment };
}
