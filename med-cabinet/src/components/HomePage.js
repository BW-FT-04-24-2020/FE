import React from 'react';

import Header from './Header/Header';
import TopStrains from './HomePageComponents/TopStrains';
import SavedStrains from './HomePageComponents/SavedStrains';
// Renders the link to '/home'
const HomePage = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* What will be the app tiles that carasel */}
            <TopStrains />
            <SavedStrains />
        </div>
    );
};

export default HomePage;
