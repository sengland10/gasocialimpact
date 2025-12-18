/**
 * Strategies Data
 * Four main impact investing strategies with case study workflows
 */

export const strategies = [
  {
    key: 'divesting',
    title: 'Divesting (Exclusions) + Reallocation',
    longDesc: 'Exclude sectors or issuers misaligned with mission (e.g., fossil fuels, tobacco, weapons) and reallocate to aligned assets (e.g., climate solutions, community finance). Common in endowments, foundations, faith investors, and HNW portfolios.',
    stakeholders: ['inst_owners', 'fund_managers', 'intermediaries', 'policy', 'prof_services'],
    cases: [
      {
        title: 'University endowment excludes fossil fuels and reallocates',
        steps: [
          'Board updates Investment Policy Statement with exclusions, timeline, and monitoring.',
          'OCIO and managers implement screens and transition portfolios with tracking-error controls.',
          'Reallocate a portion to climate solutions (thematic funds/ETFs) and green/social bonds.',
          'Publish stewardship report and decarbonization KPIs.'
        ],
        instruments: ['Exclusions policy', 'Screened public equity', 'Green/Social bonds', 'Thematic equity funds'],
        stakeholders: ['inst_owners', 'fund_managers', 'intermediaries', 'impact_mm']
      },
      {
        title: 'Health foundation: tobacco & alcohol screen + CDFI notes',
        steps: [
          'Adopt exclusions for tobacco/alcohol.',
          'Create a social bond sleeve in fixed income.',
          'Purchase CDFI community investment notes to fund community health projects.',
          'Report allocation and programmatic impacts annually.'
        ],
        instruments: ['Screened equity/credit', 'Social bonds', 'CDFI notes'],
        stakeholders: ['inst_owners', 'fund_managers', 'cdfi', 'prof_services']
      }
    ]
  },
  {
    key: 'esg',
    title: 'ESG Integration & Stewardship (under the Responsible umbrella)',
    longDesc: 'Systematically consider financially material ESG risks/opportunities and use ownership rights (voting, engagement, escalation) to protect and enhance long-term value.',
    stakeholders: ['inst_owners', 'fund_managers', 'prof_services', 'impact_mm', 'intermediaries'],
    cases: [
      {
        title: 'Listed equities: active ownership on worker safety',
        steps: [
          'Set stewardship priorities and company-level KPIs.',
          'Engage; file/support shareholder proposals where needed.',
          'Vote proxies aligned to stewardship goals; escalate if progress stalls.',
          'Report outcomes to LPs with KPI movement.'
        ],
        instruments: ['ESG integration', 'Stewardship & engagement', 'Proxy voting'],
        stakeholders: ['fund_managers', 'impact_mm', 'prof_services']
      },
      {
        title: 'Fixed income: green & social bond sleeve',
        steps: [
          'Define use-of-proceeds (UoP) criteria and SPO requirements.',
          'Allocate to green/social bond fund or SMA with sector limits.',
          'Track allocation/impact reporting and controversies.'
        ],
        instruments: ['Green bonds', 'Social bonds', 'SPO/Framework'],
        stakeholders: ['fund_managers', 'impact_mm']
      },
      {
        title: 'Corporate lending: sustainability-linked loan (SLL)',
        steps: [
          'Negotiate KPIs/SPTs; set verification and margin ratchet.',
          'Monitor borrower performance and adjust pricing per SLL principles.',
          'Disclose performance and lessons learned to IC/board.'
        ],
        instruments: ['SLL with KPI/SPT', '3rd-party verification'],
        stakeholders: ['banks_supply', 'fund_managers', 'prof_services']
      }
    ]
  },
  {
    key: 'thematic',
    title: 'Thematic Impact Investing',
    longDesc: 'Proactively invest for measurable solutions in a chosen theme (e.g., climate/energy transition, health equity, inclusive entrepreneurship, gender). Typically implemented via private funds/vehicles or dedicated public strategies.',
    stakeholders: ['inst_owners', 'fund_managers', 'banks_supply', 'prof_services', 'tech_platforms'],
    cases: [
      {
        title: 'Climate: distributed solar fund using ITC & PPAs',
        steps: [
          'Commit to specialist solar/infra fund targeting C&I/municipal rooftops.',
          'Fund structures tax equity (ITC) partnerships; secures PPAs with offtakers.',
          'Project-level senior debt closes; construction proceeds.',
          'Track generation, avoided emissions, and community benefits.'
        ],
        instruments: ['Tax equity (ITC)', 'Senior project debt', 'PPAs'],
        stakeholders: ['inst_owners', 'fund_managers', 'banks_supply', 'prof_services']
      },
      {
        title: 'VC: early-stage climate tech',
        steps: [
          'Select climate-tech VC with deep technical/IMM capability.',
          'Back seed/Series-A companies in storage, grid, low-carbon materials.',
          'Support follow-ons; measure contribution via usage/output metrics.'
        ],
        instruments: ['VC fund', 'Co-invest rights'],
        stakeholders: ['inst_owners', 'fund_managers', 'prof_services']
      },
      {
        title: 'Gender lens private debt (2X-aligned)',
        steps: [
          'Commit to private credit fund with 2X Criteria.',
          'Provide TA facility/guarantee to expand pipeline.',
          'Track gender KPIs (leadership, workforce, access to capital, products).'
        ],
        instruments: ['Private credit', 'Guarantee/LLR', 'TA facility'],
        stakeholders: ['inst_owners', 'fund_managers', 'ta_providers', 'prof_services']
      }
    ]
  },
  {
    key: 'place_based',
    title: 'Place-Based Impact Investing',
    longDesc: 'Deploy blended capital into a defined geography, aligning public programs, community lenders, banks, developers, and foundations.',
    stakeholders: ['foundations', 'cdfi', 'banks_supply', 'community_orgs', 'real_estate', 'gov_supply', 'ecosystem_builders', 'ta_providers', 'impact_mm'],
    cases: [
      {
        title: 'Affordable housing via LIHTC',
        steps: [
          'Developer secures LIHTC allocation; syndicator organizes equity.',
          'Bank provides construction/permanent loans.',
          'CDFI provides subordinate/community debt; foundation supports pre-development.',
          'Project delivers restricted affordable units; compliance/reporting ongoing.'
        ],
        instruments: ['LIHTC equity', 'Senior bank debt', 'Subordinate/CDFI debt', 'Guarantees/PRIs'],
        stakeholders: ['real_estate', 'community_orgs', 'banks_supply', 'cdfi', 'foundations', 'policy', 'prof_services']
      },
      {
        title: 'Community facility with NMTC',
        steps: [
          'CDFI/CDE secures NMTC allocation; investor provides QEI.',
          'QLICI loans flow to project with below-market terms; leverage loan rounds out stack.',
          'Facility opens; CDE manages 7-year compliance and reporting.'
        ],
        instruments: ['NMTC (QEI/QLICI)', 'Bank leverage loan', 'Grants/guarantees'],
        stakeholders: ['cdfi', 'banks_supply', 'community_orgs', 'gov_supply', 'prof_services']
      },
      {
        title: 'C-PACE retrofit of multifamily portfolio',
        steps: [
          'Program authorized by city/state; owner scopes energy measures.',
          'Private capital funds upgrades; repayment via property tax assessment.',
          'Energy savings/resilience metrics reported to program and investors.'
        ],
        instruments: ['C-PACE assessment', 'Senior mortgage consent'],
        stakeholders: ['banks_supply', 'community_orgs', 'gov_supply', 'prof_services']
      },
      {
        title: 'Municipal green bond for water resilience',
        steps: [
          'City adopts green bond framework and obtains SPO/certification.',
          'Issues labeled bond to finance wastewater/stormwater upgrades.',
          'Annual allocation and impact reporting to investors.'
        ],
        instruments: ['Green municipal bond', 'SPO/Framework'],
        stakeholders: ['gov_supply', 'banks_supply', 'fund_managers', 'prof_services', 'impact_mm']
      },
      {
        title: 'Inclusive SMB growth via CDFI fund',
        steps: [
          'Anchor investors seed loan fund; bank participates (often for CRA).',
          'TA providers prepare borrowers; blended LLR de-risks lending.',
          'Graduation pathway to bank credit over time.'
        ],
        instruments: ['CDFI notes', 'Loan loss reserve/guarantee', 'TA grants'],
        stakeholders: ['cdfi', 'banks_supply', 'inst_owners', 'ta_providers', 'community_orgs', 'gov_supply']
      }
    ]
  }
];
