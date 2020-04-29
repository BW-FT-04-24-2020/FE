import React, { useState } from 'react';

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