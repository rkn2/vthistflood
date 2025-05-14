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
        introText: "This section outlines the engineering steps involved in planning and executing flood adaptation projects for historic buildings. Select a category below to explore detailed steps. The conclusion can be found by navigating through all sections.",
        actions: [
            { text: 'Design Phase', icon: 'fa-drafting-compass', target: 'design-section-hub', style: 'bg-blue-600 hover:bg-blue-500' },
            { text: 'Permitting & Bidding', icon: 'fa-file-signature', target: 'permitting-section-hub', style: 'bg-blue-600 hover:bg-blue-500' },
            { text: 'Construction Phase', icon: 'fa-hard-hat', target: 'construction-section-hub', style: 'bg-blue-600 hover:bg-blue-500' },
        ]
    },
    // 4. Design Section Hub (Accordion Style)
    {
        id: 'design-section-hub',
        type: 'engineering-section-accordion',
        title: 'Design Phase',
        previousStepId: 'engineering-hub',
        introText: "The design phase is critical. It involves careful planning, assessment, and developing strategies that balance flood protection with preserving historic character. Expand the steps below for details.",
        steps: [
            {
                id: 'design-step-1', title: 'Hire Design Professionals', // Number removed
                content: { description: 'Engage qualified professionals, including:', items: ['<strong>Structural Engineer:</strong> To assess the building\'s structural integrity and design necessary modifications.', '<strong>Architect:</strong> With expertise in historic preservation to ensure adaptations are sensitive to the building\'s historical significance.'], caution: 'Experience with historic buildings is essential.' }
            },
            {
                id: 'design-step-2', title: 'Feasibility Study', // Number removed
                content: { description: 'Conduct a comprehensive study to understand the flood risks and potential adaptation strategies.', items: [ '<strong>Identify Flood Risk and Define Flood Hazards:</strong> Determine flood elevation, sources of water intrusion, and potential impacts.', '<strong>Identify Relevant Code Requirements:</strong> Research local, state, and federal regulations, including those related to historic preservation and floodplain management.', { text: '<strong>Identify Flood Mitigation Strategies:</strong> Explore various options, such as:', subItems: [ 'Wet Floodproofing: Allowing floodwater to enter the building while minimizing damage.', 'Dry Floodproofing: Making the building watertight.', 'Elevation: Raising the building above the flood level.', 'Relocation: Moving the building to a safer location (least preferred for historic structures).' ] }, '<strong>Recommend Flood Adaptation to Implement:</strong> Select the most suitable strategy based on the building\'s characteristics, risks, and preservation goals.', { text: '<strong>Consider Short-Term Adaptations:</strong> Implement non-permit measures like:', subItems: [ 'Installing flood shields for doors and windows.', 'Relocating valuable items to higher floors.', 'Developing a flood emergency plan.' ] }, '<strong>Obtain a Cost Estimate:</strong> Get a preliminary cost estimate from a contractor or cost estimator.' ] }
            },
            {
                id: 'design-step-3', title: 'Design Development', // Number removed
                content: { description: 'Develop the chosen adaptation strategy into detailed plans.', items: [ '<strong>Develop Drawings and Specifications:</strong> Create detailed architectural and engineering drawings and specifications for the chosen adaptation measures.', '<strong>Confirm Permit Requirements:</strong> Verify all necessary permits, including those for construction and historic preservation.', '<strong>Historic Preservation Review:</strong> Obtain approval from relevant historic preservation authorities to ensure the design complies with preservation guidelines.', '<strong>Construction Permit:</strong> Secure the necessary construction permits.', '<strong>Flood Review:</strong> Ensure the design meets flood insurance requirements (if applicable).', { text: '<strong>Consider Other Requirements:</strong>', subItems: [ '<strong>Energy Requirements:</strong> Evaluate the energy efficiency of the proposed adaptations.', '<strong>Stormwater Management:</strong> Address potential impacts on stormwater runoff.', '<strong>Erosion and Sediment Control:</strong> Plan for erosion and sediment control during construction.', '<strong>Endangered Species:</strong> Assess and mitigate any potential impacts on endangered species or their habitats.' ] }, '<strong>Update Cost Estimate:</strong> Refine the cost estimate based on the detailed design.' ] }
            },
            {
                id: 'design-step-4', title: 'Construction Documents', // Number removed
                content: { description: 'Finalize the design documents for construction.', items: [ '<strong>Complete Drawings and Specifications:</strong> Prepare the final set of drawings and specifications for bidding and construction.', '<strong>Update Cost Estimate:</strong> Update the cost estimate to reflect the final design.' ] }
            }
        ],
        nextSectionId: 'permitting-section-hub'
    },
    // 5. Permitting & Bidding Section Hub (Accordion Style)
    {
        id: 'permitting-section-hub',
        type: 'engineering-section-accordion',
        title: 'Permitting & Bidding',
        previousStepId: 'engineering-hub',
        introText: "This phase involves obtaining necessary permits and selecting a qualified contractor. Expand the step below for details.",
        steps: [
            {
                id: 'permitting-step-1', title: 'Permitting and Contractor Bidding', // Number removed
                content: { description: 'Obtain the necessary permits and select a qualified contractor.', items: [ '<strong>Submit Design Documents to Obtain Required Permits:</strong> Submit the completed design documents to the relevant authorities.', { text: '<strong>Construction:</strong> Be prepared for site inspections during the construction process.', subItems: [ '<strong>Historic Review:</strong> Ensure ongoing compliance with historic preservation guidelines during construction.', '<strong>Floodplain Management:</strong> Adhere to floodplain management regulations (if applicable).', '<strong>Erosion Control:</strong> Implement erosion and sediment control measures as required.', '<strong>Stormwater Management:</strong> Manage stormwater runoff according to the approved plan.' ] }, '<strong>Invite Contractors to Bid on the Project:</strong> Prepare a bid package and invite qualified contractors to submit proposals.', '<strong>Review Bid RFIs:</strong> Address any questions or requests for information from bidding contractors.', '<strong>Review Bids:</strong> Evaluate the bids based on cost, qualifications, experience, and references.', '<strong>Interview Contractors:</strong> Interview shortlisted contractors to assess their suitability for the project.', '<strong>Select Contractor:</strong> Choose the contractor that best meets the project\'s needs and budget.' ] }
            }
        ],
        nextSectionId: 'construction-section-hub'
    },
    // 6. Construction Section Hub (Accordion Style)
    {
        id: 'construction-section-hub',
        type: 'engineering-section-accordion',
        title: 'Construction Phase',
        previousStepId: 'engineering-hub',
        introText: "This phase covers the execution of the flood adaptation project according to the approved design and schedule. Expand the step below for details.",
        steps: [
            {
                id: 'construction-step-1', title: 'Construction', // Number removed
                content: { description: 'Execute the flood adaptation project according to the approved design and schedule.', items: [ '<strong>Review the Construction Schedule & Final Budget:</strong> Ensure the project stays on track and within budget.', '<strong>Build the Flood Adaptation:</strong> Oversee the construction process, ensuring compliance with the design documents, building codes, and historic preservation guidelines.' ] }
            }
        ],
        nextSectionId: 'landing-page'
    },
];


// --- Reusable Button Component ---
const ActionButton = ({ text, icon, onClick, targetId, styleClass = 'bg-blue-600 hover:bg-blue-500', disabled = false, fullWidth = false }) => {
    return (
        <button
            onClick={() => onClick(targetId)}
            disabled={disabled}
            className={`text-lg py-3 px-6 rounded-md font-medium text-white transition-colors duration-300 ease-in-out inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:translate-y-px ${styleClass} ${disabled ? 'bg-gray-400 cursor-not-allowed opacity-70' : ''} ${fullWidth ? 'w-full' : 'sm:w-auto'}`}
            aria-label={text}
        >
            {icon && <i className={`fas ${icon} mr-2`}></i>}
            {text}
        </button>
    );
};

// --- Reusable Step Content Display Component ---
const StepContentDisplay = ({ content }) => {
    if (!content) return null;
    return (
        <div className="mt-2 mb-4 p-4 bg-gray-50 rounded-md border border-gray-200">
            {content.description && <p className="text-gray-700 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: content.description }}></p>}
            {content.items && (
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 pl-2">
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
    );
};

// --- Landing Page Component ---
const LandingPage = ({ data, onNavigate }) => {
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
                    styleClass="bg-gray-600 hover:bg-gray-500"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                {data.actions.map(action => (
                    <ActionButton
                        key={action.target}
                        text={action.text}
                        icon={action.icon}
                        onClick={onNavigate}
                        targetId={action.target}
                        styleClass={`${action.style} py-6 text-xl`}
                        fullWidth={true}
                    />
                ))}
            </div>
            <div className="mt-8 flex flex-col items-center gap-4">
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

// In src/App.jsx, inside the EngineeringSectionAccordionPage component

// --- Engineering Section Accordion Page Component ---
const EngineeringSectionAccordionPage = ({ data, onNavigate }) => {
    const [openSteps, setOpenSteps] = useState({}); // Ensure useState is imported from 'react'

    const toggleStep = (stepId) => {
        setOpenSteps(prevOpenSteps => ({
            ...prevOpenSteps,
            [stepId]: !prevOpenSteps[stepId]
        }));
    };

    // Helper function to determine the text for the "Next" button
    // Assumes 'siteData' is accessible from the module scope where this component is defined
    const getNextButtonText = () => {
        if (!data || !data.nextSectionId) return 'Next Section'; // Defensive check

        if (data.nextSectionId === 'landing-page') {
            return "Return to Main Menu";
        }

        const nextPage = siteData.find(p => p.id === data.nextSectionId);
        return `Next: ${nextPage?.title || 'Next Section'}`; // Safely access title
    };

    // Helper function to determine the icon for the "Next" button
    const getNextButtonIcon = () => {
        if (!data || !data.nextSectionId) return "fa-arrow-right"; // Defensive check

        if (data.nextSectionId === 'landing-page') {
            return "fa-home"; // Home icon for returning to main menu
        }
        return "fa-arrow-right"; // Default next icon
    };


    return (
        <section id={data.id} className="py-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">{data.title}</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <p className="text-gray-700 leading-relaxed">{data.introText}</p>
            </div>
            <div className="space-y-3 mb-8">
                {/* Ensure data.steps is an array before mapping */}
                {Array.isArray(data.steps) && data.steps.map(step => (
                    <div key={step.id} className="border border-gray-300 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleStep(step.id)}
                            className="w-full text-left p-4 bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg flex justify-between items-center transition-colors"
                            aria-expanded={!!openSteps[step.id]}
                            aria-controls={`step-content-${step.id}`}
                        >
                            {step.title}
                            <i className={`fas ${openSteps[step.id] ? 'fa-chevron-up' : 'fa-chevron-down'} transition-transform`}></i>
                        </button>
                        {openSteps[step.id] && (
                            <div id={`step-content-${step.id}`} className="p-1">
                                {/* Ensure StepContentDisplay is defined and imported if necessary */}
                                <StepContentDisplay content={step.content} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Ensure ActionButton is defined and imported if necessary */}
                <ActionButton
                    text="Back to Engineering Guide"
                    icon="fa-arrow-left"
                    onClick={onNavigate}
                    targetId={data.previousStepId}
                    styleClass="bg-gray-600 hover:bg-gray-500"
                />
                {data.nextSectionId && (
                    <ActionButton
                        text={getNextButtonText()}
                        icon={getNextButtonIcon()}
                        onClick={onNavigate}
                        targetId={data.nextSectionId}
                        styleClass="bg-green-600 hover:bg-green-500"
                    />
                )}
            </div>
        </section>
    );
};


// --- Engineering Step Page Component (for standalone steps like Conclusion) ---
const EngineeringStepPage = ({ data, onNavigate }) => {
    const { title, content, previousStepId, nextStepId } = data;

    const getButtonText = (targetId, defaultPrefix) => {
        if (!targetId) return '';
        const targetPage = siteData.find(p => p.id === targetId);
        if (!targetPage) return defaultPrefix;

        if (targetPage.id === 'landing-page') return `Back to Main Menu`;
        if (targetPage.id === 'engineering-hub') return `Back to Engineering Guide`;
        if (targetPage.id === 'construction-section-hub') return `Back to Construction Phase`;

        // Display the title of the target page for other cases
        return `${defaultPrefix}${targetPage.title ? ': ' + targetPage.title.substring(0,30) + (targetPage.title.length > 30 ? '...' : '') : ''}`;
    };

    return (
        <section id={data.id} className="py-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">{title}</h2>
            <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
                <StepContentDisplay content={content} />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
                {previousStepId && (
                    <ActionButton
                        text={getButtonText(previousStepId, 'Previous')}
                        icon="fa-arrow-left"
                        onClick={onNavigate}
                        targetId={previousStepId}
                        styleClass="bg-gray-600 hover:bg-gray-500"
                    />
                )}
                {nextStepId && (
                     <ActionButton
                        text={getButtonText(nextStepId, 'Return')}
                        icon={siteData.find(p=>p.id === nextStepId)?.id === 'landing-page' ? 'fa-home' : 'fa-arrow-right'}
                        onClick={onNavigate}
                        targetId={nextStepId}
                        styleClass="bg-green-600 hover:bg-green-500"
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
        const pageData = siteData.find(p => p.id === activePageId);
        if (pageData) {
            setCurrentPageData(pageData);
        } else {
            // Fallback to landing if current ID is somehow invalid
            setActivePageId(siteData[0].id);
        }
    }, [activePageId]);

    const handleNavigate = (pageId) => {
        if (siteData.find(p => p.id === pageId)) {
            setActivePageId(pageId);
        } else {
            console.warn("Navigation target not found:", pageId, "Returning to landing page.");
            setActivePageId(siteData[0].id); // Fallback to landing page
        }
    };

    const renderPage = () => {
        if (!currentPageData) {
            return <p className="text-gray-700 text-center p-10">Loading page or redirecting...</p>;
        }

        switch (currentPageData.type) {
            case 'landing':
                return <LandingPage data={currentPageData} onNavigate={handleNavigate} />;
            case 'funding':
                return <FundingOptionsPage data={currentPageData} onNavigate={handleNavigate} />;
            case 'engineering-main-hub':
                return <EngineeringMainHubPage data={currentPageData} onNavigate={handleNavigate} />;
            case 'engineering-section-accordion':
                return <EngineeringSectionAccordionPage data={currentPageData} onNavigate={handleNavigate} />;
            case 'engineering-step':
                return <EngineeringStepPage data={currentPageData} onNavigate={handleNavigate} />;
            default:
                console.error("Unknown page type:", currentPageData.type, "for page ID:", currentPageData.id);
                setActivePageId(siteData[0].id); // Fallback to landing page
                return <p className="text-red-500 text-center">Error: Unknown page type "{currentPageData.type}". Redirecting to homepage.</p>;
        }
    };

    return (
        <Fragment>
            {/*
              IMPORTANT: For icons and custom font to work, ensure these are in your main HTML <head>:
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
              <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
            */}
            <style jsx global>{`
                body {
                    font-family: 'Inter', sans-serif;
                    scroll-behavior: smooth;
                    background-color: #f3f4f6; /* bg-gray-100 */
                    color: #1f2937; /* text-gray-800 */
                }
            `}</style>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
                {renderPage()}
            </div>
        </Fragment>
    );
}

export default App;
