import {
  TrustBenefit,
  StatItem,
  ProblemItem,
  TimelineStep,
  FAQItem
} from '@/types';

export const TRUST_BENEFITS: TrustBenefit[] = [
  {
    title: 'AI-Powered Property Intelligence',
    desc: 'Deep learning models that analyze and scan properties for accurate pricing and potential risks.',
    icon: '💡'
  },
  {
    title: 'Verified Property Ecosystem',
    desc: 'Direct listing database cleared of duplicates, verified by physical audits and records.',
    icon: '🛡️'
  },
  {
    title: 'End-to-End Property Support',
    desc: 'Continuous advisory from discovery through due diligence, loans, and handovers.',
    icon: '🤝'
  },
  {
    title: 'Legal Verification & Due Diligence',
    desc: 'Comprehensive scanning of historical title deeds, municipal NOCs, and builders records.',
    icon: '⚖️'
  },
  {
    title: 'Investment Advisory',
    desc: 'Data-driven calculations of capital growth, rental yields, and exit liquidity scores.',
    icon: '📊'
  },
  {
    title: 'Loan & Registration Assistance',
    desc: 'Integrated banking network securing low interest rates and managing sub-registrar bookings.',
    icon: '🏦'
  },
  {
    title: 'Dedicated Human Advisors',
    desc: 'Experienced real estate agents and lawyers representing your interests directly.',
    icon: '🧑‍💼'
  },
  {
    title: 'Property Management Services',
    desc: 'Tenant screening, maintenance audits, rent collections, and digital dashboards post-purchase.',
    icon: '🏠'
  }
];

export const CHALLENGE_STATS: StatItem[] = [
  { number: '20-50', label: 'Property Visits' },
  { number: '4-8', label: 'Months Buying Journey' },
  { number: '5-10', label: 'Different Service Providers' },
  { number: '100+', label: 'Pages of Documentation' },
  { number: '10-15', label: 'Years Risk of Legal Disputes if Due Diligence is Missed', highlight: true }
];

export const COMMON_PROBLEMS: ProblemItem[] = [
  { title: 'Fake Listings', desc: 'Bait listings uploaded by brokers that don\'t exist in reality.' },
  { title: 'Duplicate Listings', desc: 'Same property listed multiple times with conflicting prices.' },
  { title: 'Hidden Legal Risks', desc: 'Undisclosed title litigation, missing NOCs, or municipal deviations.' },
  { title: 'Builder Delays', desc: 'Possession target dates slips for years with zero developer liability.' },
  { title: 'Overpriced Properties', desc: 'Arbitrary markups and localized manipulation inflating entry costs.' },
  { title: 'Poor Negotiation', desc: 'Lack of local benchmark data leaves money on the negotiation table.' },
  { title: 'Documentation Complexity', desc: 'Incomprehensible legal drafts and RERA clauses filled with builder loops.' },
  { title: 'Loan Confusion', desc: 'Navigating bank approvals, hidden charges, and slow processing tracks.' },
  { title: 'Time Wastage', desc: 'Enduring countless hours visiting unverified or suboptimal properties.' },
  { title: 'Lack of Transparency', desc: 'Vague commissions and hidden broker charges revealed last-minute.' }
];

export const AI_CAPABILITIES = [
  { title: 'Property Discovery', desc: 'Scan thousands of regional listings simultaneously, parsing genuine leads.' },
  { title: 'Market Analysis', desc: 'Track land registries, localized transaction histories, and valuation metrics.' },
  { title: 'Price Benchmarking', desc: 'Flag price anomalies and establish true fair market rates.' },
  { title: 'Property Scoring', desc: 'Aggregate data across location, builder quality, and infrastructure into one score.' },
  { title: 'Risk Assessment', desc: 'Run optical scans (OCR) of title documents against land records and case registries.' },
  { title: 'Investment Analysis', desc: 'Simulate cash flow models, appreciation yields, and exit liquidity.' },
  { title: 'Locality Intelligence', desc: 'Map transit infrastructure layouts, upcoming metros, and livability ranks.' }
];

export const HUMAN_CAPABILITIES = [
  { title: 'Advisory', desc: 'Consulting families on emotional and qualitative requirements that data misses.' },
  { title: 'Site Visit Assistance', desc: 'Experienced field advisors inspect structural quality and identify layout flaws.' },
  { title: 'Legal Verification', desc: 'Qualified property lawyers perform deep manual due-diligence checks.' },
  { title: 'Negotiation', desc: 'Professional negotiators represent buyers to secure developers discounts.' },
  { title: 'Documentation', desc: 'Ensure that booking forms and sale agreements shield the buyer from traps.' },
  { title: 'Registration Support', desc: 'Handle physical registrar office procedures, biometric inputs, and stamps.' }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  { step: 1, label: 'Step 1', title: 'Requirement Discovery', desc: 'Outline budget thresholds, regional preferences, size, and occupancy timelines.' },
  { step: 2, label: 'Step 2', title: 'AI Property Search', desc: 'Filter out duplicates and bait postings, delivering real-time matching assets.' },
  { step: 3, label: 'Step 3', title: 'Shortlisting & Comparison', desc: 'Receive comparisons indexing rates, transit access, builders, and growth scores.' },
  { step: 4, label: 'Step 4', title: 'Site Visit Coordination', desc: 'Guided visits scheduled with a Propasure advisor who audits layout deliverables.' },
  { step: 5, label: 'Step 5', title: 'Legal Verification', desc: 'Audit RERA status, mother deeds, tax registry history, and municipal approvals.' },
  { step: 6, label: 'Step 6', title: 'Loan Assistance', desc: 'Process loan options from 15+ banks to unlock low interest rates and fast approvals.' },
  { step: 7, label: 'Step 7', title: 'Negotiation Support', desc: 'Leverage localized registry databases to secure discounts on final prices.' },
  { step: 8, label: 'Step 8', title: 'Registration Assistance', desc: 'Complete sub-registrar stamp duties, biometrics, and sale deed drafting.' },
  { step: 9, label: 'Step 9', title: 'Property Handover', desc: 'Run a thorough pre-possession audit check prior to signing final builder handovers.' },
  { step: 10, label: 'Step 10', title: 'Property Management', desc: 'Optimize assets post-purchase through automated rent collection and upkeep services.' }
];

export const BUYER_CHALLENGES = [
  { title: 'Too Many Choices', desc: 'Overwhelmed with thousands of unverified listings on common broker directories.' },
  { title: 'Lack Of Trusted Advice', desc: 'Brokers push inventories that pay them high commissions, not matching your interests.' },
  { title: 'Legal Uncertainty', desc: 'Vague title documentation history exposes savings to high long-term risks.' },
  { title: 'Builder Risks', desc: 'Developer debt, regulatory halts, and timeline delays causing project lock-ups.' },
  { title: 'Poor Comparisons', desc: 'No framework to compare transit convenience, infrastructure and pricing side-by-side.' },
  { title: 'Overpaying', desc: 'Unknowingly overpaying due to asymmetric localized property registry data.' },
  { title: 'Financing Complexity', desc: 'Managing multiple bank visits, processing documents, and navigating hidden loan terms.' }
];

export const BUYER_SERVICES = [
  { title: 'Property Discovery', desc: 'Unbiased searches identifying verified properties matching your direct requirements.' },
  { title: 'Property Comparison', desc: 'Standardized score comparison sheets evaluating pricing indices and layouts.' },
  { title: 'Property Verification', desc: 'Intelligent title searches checking chain links for legal disputes.' },
  { title: 'Builder Due Diligence', desc: 'Analyze builder capital structures, delay histories, and RERA delivery logs.' },
  { title: 'Negotiation Support', desc: 'Assistance from property negotiators who secure developer discounts.' },
  { title: 'Loan Assistance', desc: 'One-stop paper submissions across 15+ public and private partner banks.' },
  { title: 'Registration Support', desc: 'Draft sale deeds and coordinate registrar biometrics.' },
  { title: 'Investment Advisory', desc: 'Evaluate capital appreciation forecast models and exit liquidity indices.' }
];

export const OWNER_CHALLENGES = [
  { title: 'Finding Genuine Buyers', desc: 'Sifting through spam calls and non-serious buyers.' },
  { title: 'Low Visibility', desc: 'Listings quickly get lost beneath builder ads on typical portals.' },
  { title: 'Pricing Confusion', desc: 'Difficulty fixing fair listing prices without transactional comparative data.' },
  { title: 'Poor Lead Quality', desc: 'Brokers calling to harvest inventory rather than bringing buyers.' },
  { title: 'Time Wastage', desc: 'Hosting endless weekend walkthroughs for unqualified visitors.' }
];

export const OWNER_SERVICES = [
  { title: 'AI-Powered Property Marketing', desc: 'Dynamic ad targeting across searches matching active pre-screened buyers.' },
  { title: 'Verified Buyer Network', desc: 'Match directly with buyers holding pre-approved home loan capital limits.' },
  { title: 'Professional Property Valuation', desc: 'Receive real-time locality registry benchmark pricing evaluations.' },
  { title: 'Negotiation Support', desc: 'Get support from advisors to close deals close to fair market valuations.' },
  { title: 'Documentation Assistance', desc: 'Draft clean sale agreements, verify tax NOC status, and check titles.' },
  { title: 'Transaction Management', desc: 'Manage bank loan closures, escrow services, and sub-registrar filings.' }
];

export const TENANT_PROBLEMS = [
  { title: 'Fake Listings', desc: 'Bait listings uploaded to harvest tenant contact details.' },
  { title: 'High Brokerage', desc: 'Paying substantial one-month rent broker cuts for trivial property entries.' },
  { title: 'Lack of Transparency', desc: 'Hidden maintenance rules, deposit terms, and deduction clauses.' },
  { title: 'Documentation Issues', desc: 'Non-standard leases lacking proper security deposit clauses.' }
];

export const LANDLORD_PROBLEMS = [
  { title: 'Tenant Verification', desc: 'Difficulty verifying background, KYC, and salary details.' },
  { title: 'Rent Collection', desc: 'Chasing tenants month-on-month for timely rent transfers.' },
  { title: 'Property Maintenance', desc: 'Managing plumbing, repairs, painting, and regular upkeep.' },
  { title: 'Legal Disputes', desc: 'Vague lease papers leading to occupancy overstay risks.' }
];

export const RENTAL_SOLUTIONS = [
  { title: 'Verified Listings', desc: '100% audited photos, amenities, and rent details.' },
  { title: 'Tenant Screening', desc: 'Income validation, references, and digital KYC verification.' },
  { title: 'Rental Agreements', desc: 'Online digital lease generation and e-sign processing.' },
  { title: 'Rent Collection Automation', desc: 'Payment rails routing monthly rents directly.' },
  { title: 'Property Management', desc: 'Tenant handovers, move-in checklists, and periodic audits.' },
  { title: 'Maintenance Coordination', desc: 'On-demand repairs handled via certified technician networks.' }
];

export const DEVELOPER_CHALLENGES = [
  { title: 'Customer Acquisition Costs', desc: 'Heavy bidding on ad networks driving up customer acquisition costs.' },
  { title: 'Digital Marketing Costs', desc: 'Portals generating duplicate leads resulting in low sales conversions.' },
  { title: 'Low Lead Quality', desc: 'Sales teams wasting time calling cold databases or outdated queries.' },
  { title: 'Sales Team Inefficiencies', desc: 'No system to filter high-intent qualified buyers before site visits.' },
  { title: 'Inventory Management', desc: 'Struggling to sell slower units or niche properties.' }
];

export const DEVELOPER_SOLUTIONS = [
  { title: 'Project Marketing', desc: 'Direct-to-buyer digital campaigns matching layout segments.' },
  { title: 'Lead Generation', desc: 'Pre-qualified buyer leads matched for immediate site visits.' },
  { title: 'CRM Platform', desc: 'Developer dashboards tracking booking velocity, site visits, and updates.' },
  { title: 'AI Lead Scoring', desc: 'Algorithms scoring buyer intent using budget, loan, and urgency data.' },
  { title: 'Virtual Site Visits', desc: '3D walk-throughs pre-qualifying out-of-station buyers.' },
  { title: 'Sales Analytics', desc: 'Locality heatmaps highlighting buyer interest points and pricing velocity.' },
  { title: 'Channel Partner Network', desc: 'Broader digital integration with verified real estate advisors.' },
  { title: 'Project Launch Support', desc: 'Pre-booking campaigns aligned with RERA compliance dates.' }
];

export const AGENT_CHALLENGES = [
  { title: 'Lead Generation', desc: 'Intense broker competition and restricted inventory access.' },
  { title: 'Customer Follow-Ups', desc: 'Vague customer organizers leading to missed callbacks.' },
  { title: 'Property Management', desc: 'Manually tracking check-ins, inspections, and keys.' },
  { title: 'Marketing Costs', desc: 'Paying costly portal directory fees with poor organic ranks.' },
  { title: 'Competition', desc: 'Fighting large listing platforms cutting directly into client pools.' }
];

export const AGENT_PLATFORM = [
  { title: 'Lead Management', desc: 'Get pre-screened client search briefs in chosen local nodes.' },
  { title: 'CRM', desc: 'Organized dashboard built specifically for client management.' },
  { title: 'Property Listings', desc: 'Syndicate your direct inventories to Propasure\'s search engine.' },
  { title: 'AI Sales Assistant', desc: 'Matching systems suggesting inventories to matching buyers.' },
  { title: 'WhatsApp Automation', desc: 'Auto-send property sheets, scorecards, and bookings via WhatsApp.' },
  { title: 'Marketing Tools', desc: 'Generate high-quality PDF brochures, flyers, and templates.' },
  { title: 'Analytics Dashboard', desc: 'Comparative market rates and transaction history trackers.' },
  { title: 'Verified Agent Profile', desc: 'Verified badge displaying RERA compliance and customer reviews.' }
];

export const LANDLORD_CHALLENGES = [
  { title: 'Vacancies', desc: 'Rental assets sitting empty, resulting in monthly cash losses.' },
  { title: 'Tenant Issues', desc: 'Property wear, rule violations, and payment disputes.' },
  { title: 'Maintenance Challenges', desc: 'Locating prompt plumbers, painters, or handypersons.' },
  { title: 'Rent Collection Delays', desc: 'Continual follow-ups to coordinate security deposits and rent transfers.' }
];

export const LANDLORD_SOLUTIONS = [
  { title: 'Tenant Discovery', desc: 'Simultaneous marketing across channels matching verified searches.' },
  { title: 'Tenant Verification', desc: 'KYC, references, and salary slip validation checking.' },
  { title: 'Rent Collection', desc: 'Automated recurring billing cycles with direct landlord settlement.' },
  { title: 'Maintenance Management', desc: 'On-call resolution of repair requirements.' },
  { title: 'Property Inspections', desc: 'Move-in and move-out visual photo check summaries.' },
  { title: 'Dedicated Property Manager', desc: 'Single point of contact managing the asset locally.' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How is Propasure different from traditional listing portals like MagicBricks or Housing.com?',
    answer: 'Unlike listing portals that earn advertising revenue by selling your contact info to multiple brokers and builders, Propasure represents the buyer\'s interests. We are an advisory and execution platform. We physically audit listings, scan legal deeds using AI, help secure loans, negotiate prices, and complete registrar formalities.'
  },
  {
    question: 'What is the AI Property Score and how is it calculated?',
    answer: 'The AI Property Score is an index from 1 to 100 based on eight weight parameters: location growth indices, builder delivery record, title legal clearance status, price versus registry records, rental occupancy indexes, infrastructure projections, water/power grid access, and local livability scores.'
  },
  {
    question: 'How does the AI Legal Risk Engine identify title issues?',
    answer: 'Our engine runs OCR scans on title deeds, mother deeds, and occupancy certificates, checking them against state land registry databases, RERA tribunals, and municipal records to detect encumbrances, litigation cases, or approval deviations.'
  },
  {
    question: 'Can I choose individual services?',
    answer: 'Yes! We offer standalone services for legal due diligence, custom agreement drafting, pre-delivery inspection audits, and home loan benchmarking. Contact us through our enquiry form to get custom support.'
  },
  {
    question: 'What kind of support is offered for NRIs?',
    answer: 'We provide specialized NRI support including NRO/NRE account guidance, power-of-attorney drafting, virtual site visits, tax advisory on capital gains, and end-to-end property management services.'
  }
];
