// src/pages/FundingOptionsPage.jsx
import React from 'react';
import ActionButton from '../components/ActionButton';

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

export default FundingOptionsPage;