import React, { useState } from 'react';

import SingleSellTicTac from './SingleSellTicTac';

import { StTicTacToePlate } from './styled';

const TicTacToePlate = () => {
    const items = [];
    for (let i = 0; i < 9; i++) {
        items.push(i);
    }
    const handleClick = (e) => {
        console.log(e.target);
    };
    return (
        <StTicTacToePlate onClick={handleClick}>
            {items.map((item) => <SingleSellTicTac id={item} key={item}/>)}
        </StTicTacToePlate>
    );
};

export default TicTacToePlate;
