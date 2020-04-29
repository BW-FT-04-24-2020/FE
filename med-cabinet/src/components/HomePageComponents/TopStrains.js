import React, { useState } from 'react';

import Slider from 'infinite-react-carousel';
import styled from 'styled-components';

export const initialState = [
    {
        id: 100,
        name: 'blah',
        race: 'hybrid',
        flavors: 'Berry, Blueberry, Citrus',
        positive: 'Hungry, Euphoric, Creative, Aroused',
        negative: 'Dry Mouth',
        medical: 'Pain, Nausea, Headaches',
        rating: 4.2,
        description: 'This is some good stuff.',
    },
    {
        id: 101,
        name: 'blah2',
        race: 'sativa',
        flavors: 'Berry, Blueberry, Citrus',
        positive: 'Hungry, Euphoric, Creative, Aroused',
        negative: 'Dry Mouth',
        medical: 'Pain, Nausea, Headaches',
        rating: 4.2,
        description: 'This is some good stuff.',
    },
];

export const CardDiv = styled('div')`
    border: 1px solid black;
    margin: 2% 0;
    padding: 0;
`;
export const CardSection = styled('section')`
    margin: 2% 0 5%;
`;

export const settings = {
    // adaptiveHeight: true,
    arrows: false,
    arrowsScroll: 5,
    autoplay: true,
    autoplayScroll: 5,
    autoplaySpeed: 5000,
    centerMode: true,
    dots: true,
    duration: 300,
    initialSlide: 3,
    slidesToShow: 5,
};

class TopStrains extends React.Component {
    render() {
        return (
            <CardSection>
                <h2>Top Strains</h2>
                <Slider {...settings}>
                    <CardDiv>
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
                    </CardDiv>
                    <CardDiv>
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
                    </CardDiv>{' '}
                    <CardDiv>
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
                    </CardDiv>{' '}
                    <CardDiv>
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
                    </CardDiv>{' '}
                    <CardDiv>
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
                    </CardDiv>{' '}
                    <CardDiv>
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
                    </CardDiv>{' '}
                    <CardDiv>
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
                    </CardDiv>{' '}
                    <CardDiv>
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
                    </CardDiv>{' '}
                </Slider>
            </CardSection>
        );
    }
}
export default TopStrains;
