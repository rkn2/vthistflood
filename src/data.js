// src/data.js
export const siteData = [
    // 1. Landing Page
    {
        id: 'landing-page',
        type: 'landing',
        title: 'Adapting Historic Buildings for Flood Resilience',
        // Add the new image URL property here
        heroImageUrl: '/vthistflood/home-banner.jpg', // Assuming 'home-banner.jpg' is in your 'public' folder
        mainDescription: 'Protecting our heritage requires thoughtful planning and action. Choose your path below to learn more about engineering processes or available funding.',
        actions: [
            { text: 'View Engineering Guide', icon: 'fa-hard-hat', target: 'engineering-hub', style: 'bg-blue-600 hover:bg-blue-500' },
            { text: 'Explore Funding Options', icon: 'fa-dollar-sign', target: 'funding-options', style: 'bg-green-600 hover:bg-green-500' }
        ],
        footerText: 'The engineering guide provides a step-by-step process for planning and executing flood adaptation projects. Funding options explore potential grants, loans, and other financial resources.'
    },
    // 2. Funding Options Page
    {
        id: 'funding-options',
        type: 'funding',
        title: 'Funding Opportunities for Flood Adaptation',
        previousStepId: 'landing-page',
        sources: [
             {
                name: 'HUD CDBG-DR (Community Development Block Grant - Disaster Recovery)',
                eligibility: 'Provides flexible grants to state, local, tribal, or territorial governments to recover from Presidentially declared disasters, especially in low- and moderate-income areas. Funds address unmet needs in long-term recovery, housing, infrastructure, and economic revitalization. Availability is subject to supplemental appropriations by Congress.',
                link: 'https://www.hud.gov/hud-partners/community-cdbg-dr'
            },
            {
                name: 'HUD CDBG Mitigation Funds (CDBG-MIT)',
                eligibility: 'Eligible applicants are state, local, tribal, or territorial governments. These funds are for strategic, high-impact activities to mitigate disaster risks and reduce future losses in areas impacted by recent disasters, with a focus on low- and moderate-income areas.',
                link: 'https://www.hudexchange.info/programs/cdbg-mit/'
            },
            {
                name: 'Land and Water Conservation Fund (LWCF) - State and Local Assistance',
                eligibility: 'Grants are provided to state lead agencies. Local governments and federally recognized Tribal Governments can be subrecipients. Funds support the acquisition and development of public outdoor recreation sites and facilities. Projects must align with a Statewide Comprehensive Outdoor Recreation Plan (SCORP). A 1:1 non-federal match is typically required.',
                link: 'https://lwcfcoalition.org/state-and-local-assistance'
            },
            {
                name: 'US Economic Development Administration (EDA) - Disaster Supplemental',
                eligibility: 'Eligible applicants include Tribal nations, non-profit organizations, colleges/universities, EDD district organizations, and state, county, or city subdivisions involved in economic/infrastructure activities. This program addresses economic challenges in areas with a Presidential major disaster declaration (e.g., from specific 2021/2022 hurricanes, wildfires, floods). Supports long-term economic recovery strategies.',
                link: 'https://sfgrants.eda.gov/s/funding-program/a2j3d0000000twKAAQ/fy-2023-disaster-supplemental'
            },
            {
                name: 'Arts and Humanities Councils & Historic Preservation Funding',
                eligibility: "Funding for historic properties often comes through state historic preservation offices (SHPOs) via the National Park Service's Historic Preservation Fund (HPF).\n<strong>NPS HPF Grants:</strong> Matching grants to states for identification, evaluation, and protection of historic properties. States may pass funds to local projects.\n<strong>Save America's Treasures (NPS):</strong> For nationally significant historic properties (listed on National Register or National Historic Landmarks).\n<strong>FEMA Public Assistance:</strong> After a Presidential disaster declaration, state, local, tribal, territorial governments, and certain private non-profits (like museums) can apply for funds (through their state/tribe/territory) to repair/restore cultural facilities, including mitigation.\nCheck with your State Historic Preservation Office (SHPO) and local/state arts and humanities councils for specific programs.",
                link: null
            },
            {
                name: 'National Recreation and Park Association (NRPA) - Grant Resources',
                eligibility: 'NRPA often lists federal grant opportunities relevant to parks and recreation, which can include flood resilience projects. Eligibility depends on the specific federal program (e.g., FEMA grants like Public Assistance or Flood Mitigation Assistance, or DOI grants like LWCF). Typically, eligible applicants are state, local, tribal governments, and sometimes non-profits.',
                link: 'https://www.nrpa.org/our-work/Grant-Fundraising-Resources/'
            },
            {
                name: 'USDA Rural Development',
                eligibility: "<strong>Community Facilities Program Disaster Grants:</strong> For public bodies, community-based non-profits, and federally recognized Tribes in rural areas (population under 20,000) to repair or replace essential community facilities damaged by Presidentially Declared Disasters (specific years apply).\n<strong>Single Family Housing Rural Disaster Home Repair Grants:</strong> For very-low and low-income homeowners in eligible rural areas to repair homes damaged in a Presidentially Declared Disaster Area (specific years apply).",
                links: [
                    { text: 'USDA Community Facilities Disaster Grants', url: 'https://www.rd.usda.gov/programs-services/community-facilities/community-facilities-program-disaster-grants' },
                    { text: 'USDA Rural Disaster Home Repair Grants', url: 'https://www.rd.usda.gov/programs-services/single-family-housing-programs/single-family-housing-rural-disaster-home-repair-grants' }
                ]
            }
        ]
    },
    // 3. Engineering Guide Main Hub
    {
        id: 'engineering-hub',
        type: 'engineering-main-hub',
        title: 'Engineering Guide',
        previousStepId: 'landing-page',
        introText: "This guide outlines the key phases and steps involved in planning and executing flood adaptation projects for historic buildings. Select a category to begin.",
        actions: [
            { text: 'Understanding Flood Risk', icon: 'fa-water', target: 'understanding-flood-risk-section', style: 'bg-blue-600 hover:bg-blue-500' },
            { text: 'Design Phase', icon: 'fa-drafting-compass', target: 'design-section-hub', style: 'bg-blue-600 hover:bg-blue-500' },
            { text: 'Permitting & Bidding', icon: 'fa-file-signature', target: 'permitting-section-hub', style: 'bg-blue-600 hover:bg-blue-500' },
            { text: 'Construction Phase', icon: 'fa-hard-hat', target: 'construction-section-hub', style: 'bg-blue-600 hover:bg-blue-500' },
        ]
    },
    // NEW SECTION: Understanding Your Flood Risk
    {
        id: 'understanding-flood-risk-section',
        type: 'engineering-section-accordion',
        title: 'Understanding Your Flood Risk',
        previousStepId: 'engineering-hub',
        introText: "Before designing any flood adaptation measures, it's crucial to understand the specific flood risks to your historic property. This involves reviewing official flood maps and potentially undertaking more detailed site assessments.",
        steps: [
            {
                id: 'flood-risk-step-1', title: 'Understanding FEMA Flood Maps',
                content: {
                    description: `The Federal Emergency Management Agency (FEMA) provides Flood Insurance Rate Maps (FIRMs) that identify areas with specific flood risks. You can find your property's flood map on the <a href="https://msc.fema.gov/portal/search" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">FEMA Flood Map Service Center (MSC)</a>. For a detailed guide on reading these maps, refer to FEMA's "How to Read a Flood Insurance Rate Map (FIRM) Tutorial" available at <a href="https://www.fema.gov/sites/default/files/documents/how-to-read-flood-insurance-rate-map-tutorial.pdf" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">this link</a>.`,
                    items: [
                        '<strong>Accessing Maps:</strong> Use the FEMA MSC to search for your address and view the effective flood map for your area.',
                        '<strong>Flood Zones:</strong> Identify your property\'s flood zone (e.g., Zone A, AE, AH, AO, V, VE for high-risk Special Flood Hazard Areas (SFHA); Zone X for moderate to low-risk areas). Each zone has different implications for flood risk and building requirements.',
                        '<strong>Base Flood Elevation (BFE):</strong> If your property is in an SFHA, the map may show a BFE. This is the elevation to which floodwater is anticipated to rise during a base flood (a flood having a 1% chance of being equaled or exceeded in any given year, also known as the 100-year flood).',
                        '<strong>Map Legend & Dates:</strong> Always consult the map\'s legend to understand all symbols and notes. Pay attention to the map\'s effective date, as floodplains can change over time.'
                    ],
                    note: 'Being outside a high-risk flood zone does not mean there is no flood risk. Flood maps are models and actual flooding can vary.'
                }
            },
            {
                id: 'flood-risk-step-2', title: 'Site-Specific Considerations & Advanced Analysis (Conceptual)',
                content: {
                    description: 'While FEMA maps provide a broad overview, a detailed understanding of flood risk for a specific historic building often requires looking at site-specific elevations and may involve more advanced analysis by professionals.',
                    items: [
                        '<strong>Building & Sill Elevation Data:</strong> Knowing the elevation of your building’s lowest floor and critical entry points (like door sills, sometimes referred to as "sill data") in relation to the Base Flood Elevation (BFE) is crucial. This comparison helps determine potential flood depths at your structure.',
                        '<strong>Elevation Certificates (EC):</strong> An Elevation Certificate is a document prepared by a licensed land surveyor, engineer, or architect that provides detailed elevation information for a specific property. This includes the elevation of the lowest floor, lowest adjacent grade (LAG), and highest adjacent grade (HAG). ECs are often required for flood insurance rating and can be vital for designing effective flood mitigation.',
                        '<strong>Advanced GIS Analysis (e.g., ArcGIS):</strong> For complex sites or when highly detailed information is needed, professionals like engineers or floodplain managers might use Geographic Information Systems (GIS) software (such as ArcGIS). Conceptually, this involves:',
                        {
                            text: 'Overlaying various data layers:',
                            subItems: [
                                'FEMA flood hazard data.',
                                'Detailed ground elevation models (DEMs) from sources like LiDAR.',
                                'Building footprints and parcel information.',
                                'Surveyed elevation data for specific structures.'
                            ]
                        },
                        'Analyzing how predicted floodwaters might interact with the specific topography and buildings on and around the property.',
                        'This can help to more accurately visualize potential flood inundation depths and extents, informing the selection and design of appropriate flood adaptation strategies for historic structures.'
                    ],
                    note: 'This type of advanced GIS analysis is a specialized task. The goal for property owners is to understand that such analyses can provide a much more granular view of flood vulnerability, which is essential for making informed decisions about protecting a historic building.'
                }
            }
        ],
        nextSectionId: 'design-section-hub'
    },
    // 4. Design Section Hub (Accordion Style) - (Original ID 4, now effectively 5th in engineering flow)
    {
        id: 'design-section-hub',
        type: 'engineering-section-accordion',
        title: 'Design Phase',
        previousStepId: 'understanding-flood-risk-section', // UPDATED
        introText: "The design phase is critical. It involves careful planning, assessment, and developing strategies that balance flood protection with preserving historic character. Expand the steps below for details.",
        steps: [
            {
                id: 'design-step-1', title: 'Hire Design Professionals',
                content: { description: 'Engage qualified professionals, including:', items: ['<strong>Structural Engineer:</strong> To assess the building\'s structural integrity and design necessary modifications.', '<strong>Architect:</strong> With expertise in historic preservation to ensure adaptations are sensitive to the building\'s historical significance.'], caution: 'Experience with historic buildings is essential.' }
            },
            {
                id: 'design-step-2', title: 'Feasibility Study',
                content: { description: 'Conduct a comprehensive study to understand the flood risks (building on the initial risk assessment) and potential adaptation strategies.', items: [ '<strong>Confirm Flood Risk and Define Flood Hazards:</strong> Solidify understanding of flood elevation, sources of water intrusion, and potential impacts based on previous assessments.', '<strong>Identify Relevant Code Requirements:</strong> Research local, state, and federal regulations, including those related to historic preservation and floodplain management.', { text: '<strong>Identify Flood Mitigation Strategies:</strong> Explore various options, such as:', subItems: [ 'Wet Floodproofing: Allowing floodwater to enter the building while minimizing damage.', 'Dry Floodproofing: Making the building watertight.', 'Elevation: Raising the building above the flood level.', 'Relocation: Moving the building to a safer location (least preferred for historic structures).' ] }, '<strong>Recommend Flood Adaptation to Implement:</strong> Select the most suitable strategy based on the building\'s characteristics, risks, and preservation goals.', { text: '<strong>Consider Short-Term Adaptations:</strong> Implement non-permit measures like:', subItems: [ 'Installing flood shields for doors and windows.', 'Relocating valuable items to higher floors.', 'Developing a flood emergency plan.' ] }, '<strong>Obtain a Cost Estimate:</strong> Get a preliminary cost estimate from a contractor or cost estimator.' ] }
            },
            {
                id: 'design-step-3', title: 'Design Development',
                content: { description: 'Develop the chosen adaptation strategy into detailed plans.', items: [ '<strong>Develop Drawings and Specifications:</strong> Create detailed architectural and engineering drawings and specifications for the chosen adaptation measures.', '<strong>Confirm Permit Requirements:</strong> Verify all necessary permits, including those for construction and historic preservation.', '<strong>Historic Preservation Review:</strong> Obtain approval from relevant historic preservation authorities to ensure the design complies with preservation guidelines.', '<strong>Construction Permit:</strong> Secure the necessary construction permits.', '<strong>Flood Review:</strong> Ensure the design meets flood insurance requirements (if applicable).', { text: '<strong>Consider Other Requirements:</strong>', subItems: [ '<strong>Energy Requirements:</strong> Evaluate the energy efficiency of the proposed adaptations.', '<strong>Stormwater Management:</strong> Address potential impacts on stormwater runoff.', '<strong>Erosion and Sediment Control:</strong> Plan for erosion and sediment control during construction.', '<strong>Endangered Species:</strong> Assess and mitigate any potential impacts on endangered species or their habitats.' ] }, '<strong>Update Cost Estimate:</strong> Refine the cost estimate based on the detailed design.' ] }
            },
            {
                id: 'design-step-4', title: 'Construction Documents',
                content: { description: 'Finalize the design documents for construction.', items: [ '<strong>Complete Drawings and Specifications:</strong> Prepare the final set of drawings and specifications for bidding and construction.', '<strong>Update Cost Estimate:</strong> Update the cost estimate to reflect the final design.' ] }
            }
        ],
        nextSectionId: 'permitting-section-hub'
    },
    // 5. Permitting & Bidding Section Hub (Accordion Style) - (Original ID 5, now effectively 6th)
    {
        id: 'permitting-section-hub',
        type: 'engineering-section-accordion',
        title: 'Permitting & Bidding',
        previousStepId: 'design-section-hub', // This remains correct as Design now leads to Permitting
        introText: "This phase involves obtaining necessary permits and selecting a qualified contractor. Expand the step below for details.",
        steps: [
            {
                id: 'permitting-step-1', title: 'Permitting and Contractor Bidding',
                content: { description: 'Obtain the necessary permits and select a qualified contractor.', items: [ '<strong>Submit Design Documents to Obtain Required Permits:</strong> Submit the completed design documents to the relevant authorities.', { text: '<strong>Construction:</strong> Be prepared for site inspections during the construction process.', subItems: [ '<strong>Historic Review:</strong> Ensure ongoing compliance with historic preservation guidelines during construction.', '<strong>Floodplain Management:</strong> Adhere to floodplain management regulations (if applicable).', '<strong>Erosion Control:</strong> Implement erosion and sediment control measures as required.', '<strong>Stormwater Management:</strong> Manage stormwater runoff according to the approved plan.' ] }, '<strong>Invite Contractors to Bid on the Project:</strong> Prepare a bid package and invite qualified contractors to submit proposals.', '<strong>Review Bid RFIs:</strong> Address any questions or requests for information from bidding contractors.', '<strong>Review Bids:</strong> Evaluate the bids based on cost, qualifications, experience, and references.', '<strong>Interview Contractors:</strong> Interview shortlisted contractors to assess their suitability for the project.', '<strong>Select Contractor:</strong> Choose the contractor that best meets the project\'s needs and budget.' ] }
            }
        ],
        nextSectionId: 'construction-section-hub'
    },
    // 6. Construction Section Hub (Accordion Style) - (Original ID 6, now effectively 7th)
    {
        id: 'construction-section-hub',
        type: 'engineering-section-accordion',
        title: 'Construction Phase',
        previousStepId: 'permitting-section-hub', // This remains correct
        introText: "This phase covers the execution of the flood adaptation project according to the approved design and schedule. Expand the step below for details. The conclusion of the engineering guide will return you to the main menu.",
        steps: [
            {
                id: 'construction-step-1', title: 'Construction',
                content: { description: 'Execute the flood adaptation project according to the approved design and schedule.', items: [ '<strong>Review the Construction Schedule & Final Budget:</strong> Ensure the project stays on track and within budget.', '<strong>Build the Flood Adaptation:</strong> Oversee the construction process, ensuring compliance with the design documents, building codes, and historic preservation guidelines.' ] }
            }
        ],
        nextSectionId: 'landing-page' // Assuming this takes them back to the main menu after the final engineering section.
    },
];