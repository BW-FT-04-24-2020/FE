import React, { useState } from 'react';

const initialState = {
    Afpak: {
        id: 1,
        race: 'hybrid',
        flavors: ['Earthy', 'Chemical', 'Pine'],
        effect: {
            positive: ['Relaxed', 'Hungry', 'Happy', 'Sleepy'],
            negative: ['Dizzy'],
            medical: [
                'Depression',
                'Insomnia',
                'Pain',
                'Stress',
                'Lack of Appetite',
            ],
        },
    },
    African: {
        id: 2,
        race: 'sativa',
        flavors: ['Spicy/Herbal', 'Pungent', 'Earthy'],
        effects: {
            positive: [
                'Euphoric',
                'Happy',
                'Creative',
                'Energetic',
                'Talkative',
            ],
            negative: ['Dry Mouth'],
            medical: ['Depression', 'Pain'],
        },
    },
};

const TopStrains = () => {
    const [topStrains, setTopStrains] = useState(initialState);
    return <section>{console.log(topStrains)}</section>;
};
export default TopStrains;
