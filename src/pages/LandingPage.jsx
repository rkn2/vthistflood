// src/pages/LandingPage.jsx
import React from 'react';
import ActionButton from '../components/ActionButton';

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

export default LandingPage;