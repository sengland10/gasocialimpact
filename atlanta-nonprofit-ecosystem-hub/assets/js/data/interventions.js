// Intervention Data
const interventionData = {
    1: {
        title: "Capital Access Infrastructure",
        description: "Create replicable financial infrastructure that connects nonprofits to capital without requiring each organization to independently build lender relationships, understand products, or navigate complex application processes.",
        activities: [
            "SPV vehicle for emergency bridge capital (6-12 month loans)",
            "Loan loss reserve fund that allows banks to reduce nonprofit credit risk",
            "Guarantee program for lines of credit at traditional lenders",
            "Pre-negotiated loan products with CDFI partners (NFF, REDF, NCF)",
            "Streamlined application portal with common financial forms",
            "Relationship management to broker deals and reduce transaction costs",
            "Post-loan financial monitoring and technical assistance"
        ],
        impact: "By 2027: 50 Georgia nonprofits accessing $15M in non-grant capital annually, vs. current ~10 loans statewide. Reduces nonprofit staff time per capital transaction by 70%.",
        addresses: [
            "Challenge 1: Nonprofits don't know capital products exist",
            "Challenge 2: Application processes are prohibitively complex",
            "Challenge 3: CDFIs & lenders lack Georgia deal flow"
        ],
        creates: [
            "Outcome 1: Non-grant capital accessible statewide",
            "Outcome 3: Transaction costs reduced"
        ]
    },
    2: {
        title: "Financial Literacy & Capacity Building",
        description: "Develop and deploy standardized, tiered financial management education and systems-building support that meets nonprofits where they are—from basic cash flow literacy to sophisticated growth capital readiness.",
        activities: [
            "Financial Foundations Cohort: 8-week program for orgs with <90 days cash",
            "Capital Readiness Intensive: 12-week program for orgs with 90+ days cash",
            "Board Treasurer Bootcamp: Quarterly 4-hour training for board finance committees",
            "Technical assistance network: Certified trainers across all GA regions",
            "Curriculum development with Georgia-specific examples and data",
            "Stipend program ($500-$2K) to make participation financially viable",
            "Regional delivery partnerships with community foundations and technical assistance providers"
        ],
        impact: "By 2028: 200 nonprofits complete tiered programs annually. 85% increase financial health indicators by at least one stage. 40% proceed to access capital.",
        addresses: [
            "Challenge 4: No capacity-building continuum",
            "Challenge 5: Limited access outside Atlanta",
            "Challenge 7: ROI on TA unclear"
        ],
        creates: [
            "Outcome 2: 80% show measurable financial health improvement",
            "Outcome 4: Evidence-based best practices identified"
        ]
    },
    3: {
        title: "Funder Education & Coordination",
        description: "Shift funder behavior through data, tools, and coordination mechanisms that make it easier to adopt high-impact practices like paying full cost, providing flexible funding, and coordinating capital infusions.",
        activities: [
            "Quarterly data releases showing Georgia nonprofit financial health trends",
            "True cost analysis toolkit for funders to understand real program costs",
            "Funder learning community: quarterly convenings on financial resilience",
            "Coordination mechanism for co-financing larger capital needs (>$500K)",
            "Public commitment framework: funders pledge to pay indirect rates >15%",
            "Strategic communication: translating nonprofit needs into funder action",
            "Direct advocacy with state government on procurement practices"
        ],
        impact: "By 2027: 40 funders commit to higher indirect rates and flexible funding. State government procurement reforms reduce payment delays by 50%. Coordinated capital deployment doubles (from ~$5M to $10M annually).",
        addresses: [
            "Challenge 6: Philanthropy treats symptoms, not causes",
            "Challenge 8: Government procurement practices fail nonprofits",
            "Challenge 9: No field-wide coordination"
        ],
        creates: [
            "Outcome 5: Funders embrace full-cost funding",
            "Outcome 6: Government payment practices improve"
        ]
    },
    4: {
        title: "Data-Driven Field Building",
        description: "Create the measurement infrastructure and policy research capacity to make Georgia's nonprofit capital ecosystem visible, evidence-based, and continuously improving through shared learning.",
        activities: [
            "Biannual Georgia Nonprofit Financial Health Survey (NFF partnership)",
            "Financial health dashboard: track sector-wide indicators over time",
            "Program evaluation: measure impact of capital interventions vs. control group",
            "Policy research: model impact of procurement reform, indirect rate changes",
            "Case study documentation: detailed examples of what works and why",
            "National connectivity: position Georgia as model for other states",
            "Annual State of Georgia Nonprofits report with actionable recommendations"
        ],
        impact: "By 2029: Georgia becomes first state with comprehensive nonprofit financial health data system. Research drives 3+ statewide policy changes. Model replicated in 5 other states.",
        addresses: [
            "Challenge 7: ROI on TA unclear",
            "Challenge 9: No field-wide coordination",
            "Challenge 10: Ecosystem is invisible"
        ],
        creates: [
            "Outcome 4: Evidence-based best practices identified",
            "Outcome 7: Policy advocacy gains credibility",
            "Outcome 8: Georgia becomes national model"
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { interventionData };
}
