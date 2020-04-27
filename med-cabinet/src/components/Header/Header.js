import React from 'react'

import SearchBar from './SearchBar'

export const Header = () => {

    // Header Component for pages all across. Has Logo, SearchBar, and Login/Register Buttons
    return (
        <div>
            <h2>
                MedCabinet
            </h2>
            {/* SearchBar component for the Headers */}
            <SearchBar/>
            {/* Login and Register Buttons (May not need a Register button) */}
        </div>
    );
}