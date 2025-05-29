// src/pages/EngineeringStepPage.jsx
import React from 'react';
import ActionButton from '../components/ActionButton';
import StepContentDisplay from '../components/StepContentDisplay';
// siteData will be passed as a prop from App.jsx

const EngineeringStepPage = ({ data, onNavigate, siteData }) => {
    const { title, content, previousStepId, nextStepId } = data;

    const getButtonText = (targetId, defaultPrefix) => {
        if (!targetId) return '';
        const targetPage = siteData.find(p => p.id === targetId);
        if (!targetPage) return defaultPrefix;

        if (targetPage.id === 'landing-page') return `Back to Main Menu`;
        if (targetPage.id === 'engineering-hub') return `Back to Engineering Guide`;
        if (targetPage.id === 'construction-section-hub') return `Back to Construction Phase`;

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

export default EngineeringStepPage;