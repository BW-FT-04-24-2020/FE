import React from 'react';
import { settings, CardDiv, CardSection, initialState } from './Settings';
import Slider from 'infinite-react-carousel';
import { authenticAxios } from '../../utils/authenticAxios';

class TopStrains extends React.Component {
    state = {
        id: '',
        name: '',
        race: '',
        flavors: '',
        positive: '',
        negative: '',
        medical: '',
        rating: 4.2,
        description: '',
    };
    componentDidMount() {
        this.getStrainsData();
    }

    getStrainsData = () => {
        authenticAxios()
            .get('/') // ADD THE ENDPOINT WHEN BACKEND GETS IT READY///////////////////////
            .then((res) => {
                console.log('res', res);
            })
            .catch((err) => {
                console.log('error', err);
            });
    };

    render() {
        return (
            <CardSection>
                <h2>Top Strains</h2>
                <Slider {...settings}>
                    {/* Component from infinite-react-carousel */}
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
                    {initialState.forEach((value, i) => {
                        return (
                            <CardDiv key={i}>
                                <h3>{value.name}</h3>
                            </CardDiv>
                        );
                    })}
                </Slider>
            </CardSection>
        );
    }
}
export default TopStrains;
