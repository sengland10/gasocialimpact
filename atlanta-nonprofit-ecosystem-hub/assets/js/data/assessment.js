// Assessment Questions and Scoring
const assessmentQuestions = [
    {
        id: 1,
        question: "How many days of cash reserves does your organization have?",
        answers: [
            { text: "0-15 days (emergency level)", score: 0 },
            { text: "16-30 days (very vulnerable)", score: 1 },
            { text: "31-60 days (vulnerable)", score: 2 },
            { text: "61-90 days (building stability)", score: 3 },
            { text: "91-180 days (stable)", score: 4 },
            { text: "180+ days (resilient)", score: 5 }
        ]
    },
    {
        id: 2,
        question: "What percent of your annual budget comes from your largest funder?",
        answers: [
            { text: "More than 80% (extreme concentration)", score: 0 },
            { text: "60-79% (high concentration)", score: 1 },
            { text: "40-59% (moderate concentration)", score: 2 },
            { text: "30-39% (low concentration)", score: 3 },
            { text: "20-29% (well diversified)", score: 4 },
            { text: "Less than 20% (highly diversified)", score: 5 }
        ]
    },
    {
        id: 3,
        question: "How would you describe your financial systems and reporting?",
        answers: [
            { text: "Minimal or no financial tracking", score: 0 },
            { text: "Basic spreadsheets, no regular review", score: 1 },
            { text: "QuickBooks or similar, reviewed quarterly", score: 2 },
            { text: "Monthly financials reviewed by leadership", score: 3 },
            { text: "Monthly financials + board review + variance analysis", score: 4 },
            { text: "Real-time dashboards, professional CFO function", score: 5 }
        ]
    },
    {
        id: 4,
        question: "How engaged and financially literate is your board?",
        answers: [
            { text: "Board doesn't review financials", score: 0 },
            { text: "Board sees financials but doesn't understand them", score: 1 },
            { text: "Treasurer understands, rest of board is passive", score: 2 },
            { text: "Finance committee active, full board gets updates", score: 3 },
            { text: "Board reviews monthly, asks good questions", score: 4 },
            { text: "Board drives financial strategy and planning", score: 5 }
        ]
    },
    {
        id: 5,
        question: "Has your organization run an operating deficit in the last 2 years?",
        answers: [
            { text: "Yes, both years, and deficit is growing", score: 0 },
            { text: "Yes, both years, but deficit is stable", score: 1 },
            { text: "Yes, one year due to one-time issue", score: 2 },
            { text: "Break-even both years", score: 3 },
            { text: "Modest surplus both years", score: 4 },
            { text: "Consistent surplus, building reserves", score: 5 }
        ]
    },
    {
        id: 6,
        question: "How diversified is your revenue?",
        answers: [
            { text: "1 source (mono-funded)", score: 0 },
            { text: "2 sources", score: 1 },
            { text: "3 sources", score: 2 },
            { text: "4 sources", score: 3 },
            { text: "5 sources", score: 4 },
            { text: "6+ sources, including earned revenue", score: 5 }
        ]
    },
    {
        id: 7,
        question: "If your largest funder disappeared tomorrow, what would happen?",
        answers: [
            { text: "Organization would close immediately", score: 0 },
            { text: "Would close within 3 months", score: 1 },
            { text: "Major program cuts, painful but survive", score: 2 },
            { text: "Moderate adjustments, year to recover", score: 3 },
            { text: "Minor adjustments, recover within 6 months", score: 4 },
            { text: "Could replace revenue within 3 months", score: 5 }
        ]
    },
    {
        id: 8,
        question: "Does your organization track and understand the true cost per program or service?",
        answers: [
            { text: "No, we don't track program costs", score: 0 },
            { text: "Rough estimates only", score: 1 },
            { text: "Track direct costs but not overhead allocation", score: 2 },
            { text: "Full cost allocation done annually", score: 3 },
            { text: "Full cost allocation reviewed quarterly", score: 4 },
            { text: "Real-time cost tracking informs pricing decisions", score: 5 }
        ]
    },
    {
        id: 9,
        question: "What indirect/overhead rate can you typically charge on grants?",
        answers: [
            { text: "0-5%", score: 0 },
            { text: "6-10%", score: 1 },
            { text: "11-15%", score: 2 },
            { text: "16-20%", score: 3 },
            { text: "21-25%", score: 4 },
            { text: "More than 25% or de minimis 10%", score: 5 }
        ]
    },
    {
        id: 10,
        question: "Have you ever used non-grant capital (loans, lines of credit)?",
        answers: [
            { text: "No, and wouldn't know how", score: 0 },
            { text: "No, but considering it", score: 1 },
            { text: "Applied but was declined", score: 2 },
            { text: "Yes, in emergency only", score: 3 },
            { text: "Yes, occasionally for cash flow", score: 4 },
            { text: "Yes, strategically as part of financial planning", score: 5 }
        ]
    }
];

// Assessment Result Categories
const assessmentCategories = {
    vulnerable: {
        minScore: 0,
        maxScore: 16,
        stage: "Financially Vulnerable",
        color: "#f15922",
        description: "Your organization needs emergency support. Focus on stabilizing cash flow and building basic financial systems.",
        recommendations: [
            {
                title: "Immediate Priority: Stabilize Cash Flow",
                text: "Your organization needs emergency support. Apply for bridge funding through CFGA's emergency fund. Focus on securing unrestricted operating support and accelerating receivables."
            },
            {
                title: "Build Basic Financial Systems",
                text: "Enroll in the Financial Foundations Cohort (starting early 2026). You'll learn cash flow forecasting, budget development, and basic financial management. $500 stipend available."
            },
            {
                title: "Board Development",
                text: "Your board needs financial literacy training. CFGA offers free board treasurer bootcamps quarterly. At least one board member should understand financials."
            },
            {
                title: "Revenue Diversification",
                text: "With high concentration risk, you need to diversify funding sources. Start by identifying 2-3 new potential funders and one earned revenue opportunity."
            }
        ]
    },
    building: {
        minScore: 17,
        maxScore: 33,
        stage: "Building Stability",
        color: "#eec61a",
        description: "You're making progress but need to strengthen reserves and infrastructure. Focus on building a financial cushion.",
        recommendations: [
            {
                title: "Next Step: Build Reserves",
                text: "You're making progress but need a cushion. Set a goal of 3 months operating reserves within 18 months. Consider a reserve-building campaign."
            },
            {
                title: "Explore Capital Tools",
                text: "You're approaching readiness for non-grant capital. Attend CFGA's Capital Readiness Intensive to understand lines of credit and term loans."
            },
            {
                title: "Strengthen Infrastructure",
                text: "Invest in finance staff and systems. Consider fractional CFO services or upgrading to nonprofit-specific accounting software."
            },
            {
                title: "Strategic Planning",
                text: "With basic stability achieved, develop a 3-year strategic plan with financial projections. Include scenarios for growth and contingencies."
            }
        ]
    },
    resilient: {
        minScore: 34,
        maxScore: 50,
        stage: "Financially Resilient",
        color: "#149a49",
        description: "You're in the top tier of financial health. Focus on leveraging your strength and supporting the sector.",
        recommendations: [
            {
                title: "Leverage Your Strength",
                text: "You're in the top 15% of Georgia nonprofits. Consider mentoring other organizations or serving as a fiscal sponsor."
            },
            {
                title: "Strategic Growth",
                text: "Explore growth capital options like PRIs or bond financing for major initiatives. NFF can structure complex deals for expansion."
            },
            {
                title: "Systems Leadership",
                text: "Join CFGA's Nerve Center to help shape the ecosystem. Your expertise can guide policy and support sector-wide improvements."
            },
            {
                title: "Innovation Opportunities",
                text: "With strong financial health, you can take calculated risks. Consider social enterprise ventures or merger/acquisition opportunities."
            }
        ]
    }
};

// Helper function to get category based on score
function getAssessmentCategory(totalScore) {
    if (totalScore <= assessmentCategories.vulnerable.maxScore) {
        return assessmentCategories.vulnerable;
    } else if (totalScore <= assessmentCategories.building.maxScore) {
        return assessmentCategories.building;
    } else {
        return assessmentCategories.resilient;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { assessmentQuestions, assessmentCategories, getAssessmentCategory };
}
