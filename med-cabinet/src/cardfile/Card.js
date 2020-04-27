import React, { useState } from 'react';


const initialState = [
    {
    id: '',
    race: '',
    flavors: [''],
    effects: ['']
    }
  ]

MainContainer = () => {
    const [cardData, setCardData] = useState(initialState);
}

return (
    <div>
{
            cardData.map(card =>
                <div key={card.id}>
                    {card.race}
                    {card.flavors.map(value=>{
                        console.log(value)
                    })}

                    {card.effects.map(value=>{
                        console.log(value)
                    })}

                </div>)
      }
        
    </div>
)