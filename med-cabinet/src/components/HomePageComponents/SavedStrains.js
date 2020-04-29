import React, { useState } from 'react';
import { CardDiv, CardSection, initialState } from './TopStrains';

import Slider from 'infinite-react-carousel';
import { settings } from './TopStrains';

// SavedStrains file that links to HomPage.js
class SavedStrains extends React.Component {
    render() {
        return (
            <CardSection>
                <h2>Saved Strains</h2>
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
export default SavedStrains;
