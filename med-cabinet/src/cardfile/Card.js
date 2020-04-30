import React, { useState } from 'react';
import Axios from 'axios';

// setting up state for the api data ill be getting back
const initialState = [
    {
        id: '',
        race: '',
        flavors: [''], /*made arrays for flavors and effects becasue they both have additional data */
        effects: ['']
    }
]

const Card = () => {
    const [cardData, setCardData] = useState(initialState);

    cardData = data =>{ 

    axios 
    .put(`https://medcabinet-strain-api.herokuapp.com/strains/all`)
    .then(response => console.log(response))
    .catch(err => console.log(err));
    }
    return (
        <div>
            {
                cardData.map(card =>
                    <div key={card.id}>
                        {card.race}
                        {card.flavors.map(value => {
                            console.log(value)
                        })}

                        {card.effects.map(value => {
                            console.log(value)
                        })}

                    </div>)
            }

        </div>
    )
}
export default Card;