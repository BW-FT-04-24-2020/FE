import React from 'react';
import {
    settings,
    CardDiv,
    CardSection,
    capitalizeFirstLetter,
} from './Settings';

import Slider from 'infinite-react-carousel';

// SleepyStrains that connects to HomePage.js
const SleepyStrains = (props) => {
    console.log(props.props);

    return (
        <CardSection>
            <h2>Strains To Help You Sleep</h2>
            <Slider {...settings}>
                <div></div>
            </Slider>
        </CardSection>
    );
};
export default SleepyStrains;
