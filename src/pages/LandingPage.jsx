// src/pages/LandingPage.jsx
import React from 'react';
import ActionButton from '../components/ActionButton';

const LandingPage = ({ data, onNavigate }) => {
    return (
        <section id="landing-page" className="text-center py-10">
            {/* Add the image here if heroImageUrl exists in your data */}
            {data.heroImageUrl && (
                <div className="mb-6 max-w-3xl mx-auto"> {/* Added max-w-3xl and mx-auto for consistency */}
                    <img
                        src={data.heroImageUrl}
                        alt={data.heroImageAlt || "Flood resilience for historic buildings"} // Use alt from data or a default
                        className="w-full h-auto max-h-80 sm:max-h-96 object-contain rounded-md" // Use object-contain to ensure full image visibility
                    />
                </div>
            )}

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
                        onClick={onNavigate} // Corrected from () => onNavigate(action.target) to match original if onNavigate directly takes targetId
                        targetId={action.target}
                        styleClass={action.style} // styleClass was used in original ActionButton call
                    />
                ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-8">
                {data.footerText}
            </p>
        </section>
    );
};

export default LandingPage;