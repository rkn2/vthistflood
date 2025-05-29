// src/pages/EngineeringMainHubPage.jsx
import React from 'react';
import ActionButton from '../components/ActionButton';

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

export default EngineeringMainHubPage;