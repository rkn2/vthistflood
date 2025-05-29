// src/components/ActionButton.jsx
import React from 'react';

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

export default ActionButton;