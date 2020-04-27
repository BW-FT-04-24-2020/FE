import React from 'react';

import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

export default function Header() {
    // Header Component for pages all across. Has Logo, SearchBar, and Login/Register Buttons
    return (
        <div>
            {/* Links to different parts of the website on the navigation. */}
            <ul>
                <li>
                    <Link to="/">
                        <h2>MedCabinet</h2>
                    </Link>
                </li>
            </ul>
            {/* SearchBar component for the Headers */}
            <SearchBar />
        </div>
    );
}
