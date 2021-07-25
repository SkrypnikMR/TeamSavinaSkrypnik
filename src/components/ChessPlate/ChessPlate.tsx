import React from 'react';

import SingleSell from './SingleSell';

import { StChessPlate } from './styled';

const Chessplate = () => {
    const items = [];
    for (let i = 64; i >= 1; i--) {
        items.push(i);
    }
    return (
        <StChessPlate>
            {items.map(item => <SingleSell id={item} key={item} />,
            )}
        </StChessPlate>
    );
};

export default Chessplate;
