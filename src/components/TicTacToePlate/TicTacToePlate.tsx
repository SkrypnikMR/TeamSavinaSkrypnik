import React, { useState } from 'react';

import SingleSellTicTac from './SingleSellTicTac';
import Button from '../UI/Button';
import { StTicTacToePlate } from './styled';

const TicTacToePlate = () => {
    const items = [];
    for (let i = 0; i < 9; i++) { items.push(i); }
    return (
        <StTicTacToePlate>
            {items.map((item) => <SingleSellTicTac id={item} key={item} />)}
        </StTicTacToePlate>
    );
};

export default TicTacToePlate;
