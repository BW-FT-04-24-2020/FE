import React from 'react';

import Header from '../Header/Header';
import TopStrains from './TopStrains';
import SavedStrains from './SavedStrains';
// Renders the link to '/home'
const HomePage = () => {
    return (
        <div>
            <link
                rel="stylesheet"
                href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
            ></link>
            {/* Header */}
            <Header />
            {/* What will be the app tiles that carasel */}
            <TopStrains />
            <SavedStrains />
        </div>
    );
};

export default HomePage;
