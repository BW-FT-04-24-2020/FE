import React, { useState } from 'react';

import Slider from 'infinite-react-carousel';
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
    border: 1px solid black;
    margin: 2%;
    padding: 0;
`;
export const settings = {
    adaptiveHeight: true,
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
            <div>
                <h2>Top Strains</h2>
                <Slider {...settings}>
                    <CardSection>
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
                    </CardSection>
                    <CardSection>
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
                    </CardSection>{' '}
                    <CardSection>
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
                    </CardSection>{' '}
                    <CardSection>
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
                    </CardSection>{' '}
                    <CardSection>
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
                    </CardSection>{' '}
                    <CardSection>
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
                    </CardSection>{' '}
                    <CardSection>
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
                    </CardSection>{' '}
                    <CardSection>
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
                    </CardSection>{' '}
                </Slider>
            </div>
        );
    }
}
export default TopStrains;
