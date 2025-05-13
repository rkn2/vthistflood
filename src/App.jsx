import React, { useState, useEffect, Fragment } from 'react';

// --- Data Definition ---
const siteData = [
    // 1. Landing Page
    {
        id: 'landing-page',
        type: 'landing',
        title: 'Adapting Historic Buildings for Flood Resilience',
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
        introText: "This section outlines the engineering steps involved in planning and executing flood adaptation projects for historic buildings. Select a category below to explore detailed steps.",
        actions: [
            { text: 'Design Phase', icon: 'fa-drafting-compass', target: 'design-section-hub', style: 'bg-blue-600 hover:bg-blue-500' },
            { text: 'Permitting & Bidding', icon: 'fa-file-signature', target: 'permitting-section-hub', style: 'bg-blue-600 hover:bg-blue-500' },
            { text: 'Construction Phase', icon: 'fa-hard-hat', target: 'construction-section-hub', style: 'bg-blue-600 hover:bg-blue-500' },
            { text: 'View Conclusion', icon: 'fa-flag-checkered', target: 'engineering-conclusion', style: 'bg-gray-500 hover:bg-gray-400' }
        ]
    },
    // 4. Design Section Hub
    {
        id: 'design-section-hub',
        type: 'engineering-section-hub',
        title: 'Design Phase Overview',
        previousStepId: 'engineering-hub',
        introText: "The design phase is critical. It involves careful planning, assessment, and developing strategies that balance flood protection with preserving historic character. Explore the steps below.",
        steps: [
            { id: 'design-step-1', title: '1. Hire Design Professionals' },
            { id: 'design-step-2', title: '2. Feasibility Study' },
            { id: 'design-step-3', title: '3. Design Development' },
            { id: 'design-step-4', title: '4. Construction Documents' }
        ]
    },
    // Design Phase Individual Steps
    {
        id: 'design-step-1', type: 'engineering-step', title: '1. Hire Design Professionals', previousStepId: 'design-section-hub', nextStepId: 'design-step-2',
        content: { description: 'Engage qualified professionals, including:', items: ['<strong>Structural Engineer:</strong> To assess the building\'s structural integrity and design necessary modifications.', '<strong>Architect:</strong> With expertise in historic preservation to ensure adaptations are sensitive to the building\'s historical significance.', '<strong>Hydrologist/Civil Engineer:</strong> To analyze flood risks and design appropriate mitigation measures.'], caution: 'Experience with historic buildings is essential.' }
    },
    {
        id: 'design-step-2', type: 'engineering-step', title: '2. Feasibility Study', previousStepId: 'design-step-1', nextStepId: 'design-step-3',
        content: { description: 'Conduct a comprehensive study to understand the flood risks and potential adaptation strategies.', items: [ '<strong>Identify Flood Risk and Define Flood Hazards:</strong> Determine flood elevation, sources of water intrusion, and potential impacts.', '<strong>Identify Relevant Code Requirements:</strong> Research local, state, and federal regulations, including those related to historic preservation and floodplain management.', { text: '<strong>Identify Flood Mitigation Strategies:</strong> Explore various options, such as:', subItems: [ 'Wet Floodproofing: Allowing floodwater to enter the building while minimizing damage.', 'Dry Floodproofing: Making the building watertight.', 'Elevation: Raising the building above the flood level.', 'Relocation: Moving the building to a safer location (least preferred for historic structures).' ] }, '<strong>Recommend Flood Adaptation to Implement:</strong> Select the most suitable strategy based on the building\'s characteristics, risks, and preservation goals.', { text: '<strong>Consider Short-Term Adaptations:</strong> Implement non-permit measures like:', subItems: [ 'Installing flood shields for doors and windows.', 'Relocating valuable items to higher floors.', 'Developing a flood emergency plan.' ] }, '<strong>Obtain a Cost Estimate:</strong> Get a preliminary cost estimate from a contractor or cost estimator.' ] }
    },
    {
        id: 'design-step-3', type: 'engineering-step', title: '3. Design Development', previousStepId: 'design-step-2', nextStepId: 'design-step-4',
        content: { description: 'Develop the chosen adaptation strategy into detailed plans.', items: [ '<strong>Develop Drawings and Specifications:</strong> Create detailed architectural and engineering drawings and specifications for the chosen adaptation measures.', '<strong>Confirm Permit Requirements:</strong> Verify all necessary permits, including those for construction and historic preservation.', '<strong>Historic Preservation Review:</strong> Obtain approval from relevant historic preservation authorities to ensure the design complies with preservation guidelines.', '<strong>Construction Permit:</strong> Secure the necessary construction permits.', '<strong>Flood Review:</strong> Ensure the design meets flood insurance requirements (if applicable).', { text: '<strong>Consider Other Requirements:</strong>', subItems: [ '<strong>Energy Requirements:</strong> Evaluate the energy efficiency of the proposed adaptations.', '<strong>Stormwater Management:</strong> Address potential impacts on stormwater runoff.', '<strong>Erosion and Sediment Control:</strong> Plan for erosion and sediment control during construction.', '<strong>Endangered Species:</strong> Assess and mitigate any potential impacts on endangered species or their habitats.' ] }, '<strong>Update Cost Estimate:</strong> Refine the cost estimate based on the detailed design.' ] }
    },
    {
        id: 'design-step-4', type: 'engineering-step', title: '4. Construction Documents', previousStepId: 'design-step-3', nextStepId: 'design-section-hub', // Last step in section goes back to section hub
        content: { description: 'Finalize the design documents for construction.', items: [ '<strong>Complete Drawings and Specifications:</strong> Prepare the final set of drawings and specifications for bidding and construction.', '<strong>Update Cost Estimate:</strong> Update the cost estimate to reflect the final design.' ] }
    },
    // 5. Permitting & Bidding Section Hub
    {
        id: 'permitting-section-hub',
        type: 'engineering-section-hub',
        title: 'Permitting & Bidding Overview',
        previousStepId: 'engineering-hub',
        introText: "This phase involves obtaining necessary permits and selecting a qualified contractor. Follow the steps outlined below.",
        steps: [
            { id: 'permitting-step-1', title: '5. Permitting and Contractor Bidding' }
        ]
    },
    // Permitting & Bidding Individual Steps
    {
        id: 'permitting-step-1', type: 'engineering-step', title: '5. Permitting and Contractor Bidding', previousStepId: 'permitting-section-hub', nextStepId: 'permitting-section-hub', // Last step in section
        content: { description: 'Obtain the necessary permits and select a qualified contractor.', items: [ '<strong>Submit Design Documents to Obtain Required Permits:</strong> Submit the completed design documents to the relevant authorities.', { text: '<strong>Construction:</strong> Be prepared for site inspections during the construction process.', subItems: [ '<strong>Historic Review:</strong> Ensure ongoing compliance with historic preservation guidelines during construction.', '<strong>Floodplain Management:</strong> Adhere to floodplain management regulations (if applicable).', '<strong>Erosion Control:</strong> Implement erosion and sediment control measures as required.', '<strong>Stormwater Management:</strong> Manage stormwater runoff according to the approved plan.' ] }, '<strong>Invite Contractors to Bid on the Project:</strong> Prepare a bid package and invite qualified contractors to submit proposals.', '<strong>Review Bid RFIs:</strong> Address any questions or requests for information from bidding contractors.', '<strong>Review Bids:</strong> Evaluate the bids based on cost, qualifications, experience, and references.', '<strong>Interview Contractors:</strong> Interview shortlisted contractors to assess their suitability for the project.', '<strong>Select Contractor:</strong> Choose the contractor that best meets the project\'s needs and budget.' ] }
    },
    // 6. Construction Section Hub
    {
        id: 'construction-section-hub',
        type: 'engineering-section-hub',
        title: 'Construction Phase Overview',
        previousStepId: 'engineering-hub',
        introText: "This phase covers the execution of the flood adaptation project according to the approved design and schedule.",
        steps: [
            { id: 'construction-step-1', title: '6. Construction' }
        ]
    },
    // Construction Phase Individual Steps
    {
        id: 'construction-step-1', type: 'engineering-step', title: '6. Construction', previousStepId: 'construction-section-hub', nextStepId: 'construction-section-hub', // Last step in section
        content: { description: 'Execute the flood adaptation project according to the approved design and schedule.', items: [ '<strong>Review the Construction Schedule & Final Budget:</strong> Ensure the project stays on track and within budget.', '<strong>Build the Flood Adaptation:</strong> Oversee the construction process, ensuring compliance with the design documents, building codes, and historic preservation guidelines.' ] }
    },
    // 7. Engineering Guide Conclusion
    {
        id: 'engineering-conclusion',
        type: 'engineering-step', // Reusing for simplicity, could be 'engineering-final'
        title: 'Engineering Guide: Conclusion',
        previousStepId: 'engineering-hub',
        nextStepId: 'landing-page',
        content: { // Structure to match EngineeringStepPage expectation
            description: "Adapting historic buildings to flood risks requires a careful and methodical approach. By following these engineering steps and working with qualified professionals, it's possible to protect these valuable structures for future generations while preserving their unique heritage.",
            note: "This guide provides a general framework. Specific requirements and processes may vary depending on local regulations and the unique characteristics of the historic building."
        }
    }
];


// --- Reusable Button Component ---
const ActionButton = ({ text, icon, onClick, targetId, styleClass = 'bg-blue-600 hover:bg-blue-500', disabled = false, fullWidth = false }) => {
    return (
        <button
            onClick={() => onClick(targetId)}
            disabled={disabled}
            className={`text-lg py-3 px-6 rounded-md font-medium text-white transition-colors duration-300 ease-in-out inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:translate-y-px ${styleClass} ${disabled ? 'bg-gray-400 cursor-not-allowed opacity-70' : ''} ${fullWidth ? 'w-full' : 'sm:w-auto'}`}
        >
            {icon && <i className={`fas ${icon} mr-2`}></i>}
            {text}
        </button>
    );
};

// --- Landing Page Component ---
const LandingPage = ({ data, onNavigate }) => {
    // Same as before
    return (
        <section id="landing-page" className="text-center py-10">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">{data.title}</h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                {data.mainDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                {data.actions.map(action => (
                    <ActionButton
                        key={action.target}
                        text={action.text}
                        icon={action.icon}
                        onClick={onNavigate}
                        targetId={action.target}
                        styleClass={action.style}
                    />
                ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-8">
                {data.footerText}
            </p>
        </section>
    );
};

// --- Funding Options Page Component ---
const FundingOptionsPage = ({ data, onNavigate }) => {
    // Same as before
    return (
        <section id="funding-options" className="py-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-6">{data.title}</h2>
            <div className="space-y-8">
                {data.sources.map(source => (
                    <div key={source.name} className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium text-blue-600 mb-2">{source.name}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: source.eligibility }}></p>
                        {source.link && (
                            <a href={source.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 font-medium underline">
                                Learn more about {source.name.split('(')[0].trim()} <i className="fas fa-external-link-alt text-xs ml-1"></i>
                            </a>
                        )}
                        {source.links && source.links.map(linkItem => (
                             <a key={linkItem.url} href={linkItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 font-medium underline block mt-1">
                                {linkItem.text} <i className="fas fa-external-link-alt text-xs ml-1"></i>
                            </a>
                        ))}
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-start">
                <ActionButton
                    text="Back to Main"
                    icon="fa-arrow-left"
                    onClick={onNavigate}
                    targetId={data.previousStepId}
                />
            </div>
        </section>
    );
};

// --- Engineering Main Hub Page Component ---
const EngineeringMainHubPage = ({ data, onNavigate }) => {
    return (
        <section id={data.id} className="py-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-blue-800 mb-6">{data.title}</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">{data.introText}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                {data.actions.filter(action => action.target !== 'engineering-conclusion').map(action => (
                    <ActionButton
                        key={action.target}
                        text={action.text}
                        icon={action.icon}
                        onClick={onNavigate}
                        targetId={action.target}
                        styleClass={`${action.style} py-6 text-xl`} // Larger buttons for hub
                        fullWidth={true}
                    />
                ))}
            </div>
             <div className="mt-8 flex flex-col items-center gap-4">
                {data.actions.find(action => action.target === 'engineering-conclusion') &&
                    <ActionButton
                        key='engineering-conclusion-btn'
                        text={data.actions.find(action => action.target === 'engineering-conclusion').text}
                        icon={data.actions.find(action => action.target === 'engineering-conclusion').icon}
                        onClick={onNavigate}
                        targetId='engineering-conclusion'
                        styleClass={`${data.actions.find(action => action.target === 'engineering-conclusion').style} sm:w-auto`}
                    />
                }
                <ActionButton
                    text="Back to Main Menu"
                    icon="fa-arrow-left"
                    onClick={onNavigate}
                    targetId={data.previousStepId}
                    styleClass="bg-gray-500 hover:bg-gray-400 sm:w-auto"
                />
            </div>
        </section>
    );
};

// --- Engineering Section Hub Page Component ---
const EngineeringSectionHubPage = ({ data, onNavigate }) => {
    return (
        <section id={data.id} className="py-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">{data.title}</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <p className="text-gray-600 leading-relaxed">{data.introText}</p>
            </div>
            <div className="space-y-4 mb-8">
                {data.steps.map(step => (
                    <ActionButton
                        key={step.id}
                        text={step.title}
                        onClick={onNavigate}
                        targetId={step.id}
                        styleClass="bg-blue-500 hover:bg-blue-400 w-full text-left justify-start"
                        icon="fa-arrow-circle-right"
                    />
                ))}
            </div>
            <ActionButton
                text="Back to Engineering Guide"
                icon="fa-arrow-left"
                onClick={onNavigate}
                targetId={data.previousStepId}
            />
        </section>
    );
};

// --- Engineering Step Page Component (displays individual step content) ---
const EngineeringStepPage = ({ data, onNavigate }) => {
    const { title, content, previousStepId, nextStepId } = data;

    const getButtonText = (targetId, defaultPrefix) => {
        if (!targetId) return '';
        const targetPage = siteData.find(p => p.id === targetId);
        if (!targetPage) return defaultPrefix;

        if (targetPage.type === 'engineering-section-hub') {
            return `Back to ${targetPage.title.replace(' Overview', '')}`;
        }
        if (targetPage.type === 'engineering-main-hub') {
            return `Back to Engineering Guide`;
        }
         if (targetPage.id === 'landing-page') {
            return `Back to Main Menu`;
        }
        return `${defaultPrefix}: ${targetPage.title}`;
    };


    return (
        <section id={data.id} className="py-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">{title}</h2>
            <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
                {content.description && <p className="text-gray-600 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: content.description }}></p>}
                {content.items && (
                    <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1">
                        {content.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                                {typeof item === 'string' ? <span dangerouslySetInnerHTML={{ __html: item }} /> : (
                                    <>
                                        <span dangerouslySetInnerHTML={{ __html: item.text }} />
                                        {item.subItems && (
                                            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                                                {item.subItems.map((subItem, subIdx) => (
                                                    <li key={subIdx} dangerouslySetInnerHTML={{ __html: subItem }} />
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
                {content.caution && (
                    <p className="text-sm mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 font-medium">
                        <i className="fas fa-exclamation-triangle mr-2"></i><span className="font-semibold">Caution:</span> {content.caution}
                    </p>
                )}
                {content.note && (
                     <p className="text-sm mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-700 font-medium">
                        <i className="fas fa-info-circle mr-2"></i><span className="font-semibold">Note:</span> {content.note}
                    </p>
                )}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
                {previousStepId && (
                    <ActionButton
                        text={getButtonText(previousStepId, 'Previous')}
                        icon="fa-arrow-left"
                        onClick={onNavigate}
                        targetId={previousStepId}
                    />
                )}
                {nextStepId && (
                     <ActionButton
                        text={getButtonText(nextStepId, 'Next')}
                        icon={siteData.find(p=>p.id === nextStepId)?.type === 'engineering-main-hub' || siteData.find(p=>p.id === nextStepId)?.type === 'engineering-section-hub' || siteData.find(p=>p.id === nextStepId)?.id === 'landing-page' ? 'fa-level-up-alt' : 'fa-arrow-right'}
                        onClick={onNavigate}
                        targetId={nextStepId}
                    />
                )}
            </div>
        </section>
    );
};

// --- Main App Component ---
function App() {
    const [activePageId, setActivePageId] = useState(siteData[0].id);
    const [currentPageData, setCurrentPageData] = useState(siteData.find(p => p.id === activePageId));

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPageData(siteData.find(p => p.id === activePageId));
    }, [activePageId]);

    const handleNavigate = (pageId) => {
        if (siteData.find(p => p.id === pageId)) {
            setActivePageId(pageId);
        } else {
            console.warn("Navigation target not found:", pageId);
        }
    };

    const renderPage = () => {
        if (!currentPageData) return <p className="text-red-500 text-center">Error: Page data not found for ID "{activePageId}".</p>;

        switch (currentPageData.type) {
            case 'landing':
                return <LandingPage data={currentPageData} onNavigate={handleNavigate} />;
            case 'funding':
                return <FundingOptionsPage data={currentPageData} onNavigate={handleNavigate} />;
            case 'engineering-main-hub':
                return <EngineeringMainHubPage data={currentPageData} onNavigate={handleNavigate} />;
            case 'engineering-section-hub':
                return <EngineeringSectionHubPage data={currentPageData} onNavigate={handleNavigate} />;
            case 'engineering-step':
                return <EngineeringStepPage data={currentPageData} onNavigate={handleNavigate} />;
            default:
                return <p className="text-red-500 text-center">Error: Unknown page type "{currentPageData.type}".</p>;
        }
    };

    return (
        <Fragment>
            <style jsx global>{`
                body {
                    font-family: 'Inter', sans-serif;
                    scroll-behavior: smooth;
                    background-color: #f3f4f6; /* bg-gray-100 */
                    color: #1f2937; /* text-gray-800 */
                }
            `}</style>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
                {/* Progress bar removed for this version due to navigation complexity */}
                {renderPage()}
            </div>
        </Fragment>
    );
}

export default App;