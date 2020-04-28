import React, { useState } from 'react';

import styled from 'styled-components';

export const initialState = {
    id: 100,
    name: 'blah',
    race: 'hybrid',
    flavors: 'Berry, Blueberry, Citrus',
    positive: 'Hungry, Euphoric, Creative, Aroused',
    negative: 'Dry Mouth',
    medical: 'Pain, Nausea, Headaches',
    rating: 4.2,
    description: 'This is some good stuff.',
};

export const CardSection = styled('section')`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow-x: hidden;
    margin: 1% 4%;
    div {
        border: 1px solid black;
        margin: 2%;
        background-color: rgb(143, 188, 139, 0.2);
    }
`;

const TopStrains = () => {
    const [topStrains, setTopStrains] = useState(initialState);
    return (
        <>
            <h2>Top Strains</h2>
            <CardSection>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
            </CardSection>
        </>
    );
};
export default TopStrains;
