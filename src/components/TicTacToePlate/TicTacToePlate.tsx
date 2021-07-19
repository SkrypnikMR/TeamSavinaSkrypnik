import React from 'react';

import SingleSellTicTac from './SingleSellTicTac';

import { StTicTacToePlate } from './styled';

const TicTacToePlate = () => {
    const items = [];
    for (let i = 0; i < 9; i++) {
        items.push(i);
    }
    return (
        <StTicTacToePlate>
            {items.map((item) => <SingleSellTicTac id={item} key={item} />)}
        </StTicTacToePlate>
    );
};

export default TicTacToePlate;
