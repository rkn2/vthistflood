// src/components/StepContentDisplay.jsx
import React from 'react';

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

export default StepContentDisplay;