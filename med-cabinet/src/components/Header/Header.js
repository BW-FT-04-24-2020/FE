import React from 'react';

import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

import styled from 'styled-components';

export default function Header() {
    const FlexedDiv = styled('div')`
        display: grid;
        grid-template-columns: 1fr 2fr;
        justify-items: center;
        align-items: center;
        background-color: DarkSeaGreen;
        h2 {
            color: black;
            text-decoration: none;
            font-size: 3rem;
            margin: 0;
        }
    `;

    // Header Component for pages all across. Has Logo, SearchBar, and Login/Register Buttons
    return (
        <FlexedDiv>
            {/* Links to different parts of the website on the navigation. */}
            <ul>
                <Link to="/home">
                    <h2>MedCabinet</h2>
                </Link>
            </ul>
            {/* SearchBar component for the Headers */}
            <SearchBar />
        </FlexedDiv>
    );
}
