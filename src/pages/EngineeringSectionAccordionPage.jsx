// src/pages/EngineeringSectionAccordionPage.jsx
import React, { useState } from 'react';
import ActionButton from '../components/ActionButton';
import StepContentDisplay from '../components/StepContentDisplay';
// siteData will be passed as a prop from App.jsx

const EngineeringSectionAccordionPage = ({ data, onNavigate, siteData }) => {
    const [openSteps, setOpenSteps] = useState({});

    const toggleStep = (stepId) => {
        setOpenSteps(prevOpenSteps => ({
            ...prevOpenSteps,
            [stepId]: !prevOpenSteps[stepId]
        }));
    };

    const getNextButtonText = () => {
        if (!data || !data.nextSectionId) return 'Next Section';
        if (data.nextSectionId === 'landing-page') {
            return "Return to Main Menu";
        }
        const nextPage = siteData.find(p => p.id === data.nextSectionId);
        return `Next: ${nextPage?.title || 'Next Section'}`;
    };

    const getNextButtonIcon = () => {
        if (!data || !data.nextSectionId) return "fa-arrow-right";
        if (data.nextSectionId === 'landing-page') {
            return "fa-home";
        }
        return "fa-arrow-right";
    };

    return (
        <section id={data.id} className="py-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">{data.title}</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <p className="text-gray-700 leading-relaxed">{data.introText}</p>
            </div>
            <div className="space-y-3 mb-8">
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
                                <StepContentDisplay content={step.content} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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

export default EngineeringSectionAccordionPage;