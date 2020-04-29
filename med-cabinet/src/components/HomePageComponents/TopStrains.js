import React from 'react';
import { settings, CardDiv, CardSection } from './Settings';
import Slider from 'infinite-react-carousel';
import { getStrainsData } from '../../store/actions/index';

// Top Strains that connects to HomePage.js
const TopStrains = (props) => {
    React.useEffect(() => {
        props.getStrainsData();
    }, []);

    console.log('TopStrains props', props);
    return (
        <CardSection>
            <h2>Top Strains</h2>
            {/* Component from infinite-react-carousel */}
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
                    <h6>Medical:</h6>
                    <ul>
                        <li>Effect1</li>
                        <li>Effect2</li>
                        <li>Effect3</li>
                    </ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                    <button>Add to Favorites</button>
                </CardDiv>
            </Slider>
        </CardSection>
    );
};
export default TopStrains;
