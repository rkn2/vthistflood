// src/App.jsx
import React, { useState, useEffect, Fragment } from 'react';
import { siteData } from './data'; // Import siteData
import LandingPage from './pages/LandingPage';
import FundingOptionsPage from './pages/FundingOptionsPage';
import EngineeringMainHubPage from './pages/EngineeringMainHubPage';
import EngineeringSectionAccordionPage from './pages/EngineeringSectionAccordionPage';
import EngineeringStepPage from './pages/EngineeringStepPage';

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
                return <EngineeringSectionAccordionPage data={currentPageData} onNavigate={handleNavigate} siteData={siteData} />;
            case 'engineering-step':
                return <EngineeringStepPage data={currentPageData} onNavigate={handleNavigate} siteData={siteData} />;
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