import React from 'react';

import SingleSellTicTac from './SingleSellTicTac';
import Button from '../UI/Button';
import { StTicTacToePlate } from './styled';

const TicTacToePlate = ({ deleteRoom }) => {
    const handleClick = () => deleteRoom();
    const items = [];
    for (let i = 0; i < 9; i++) {
        items.push(i);
    }
    return (
        <StTicTacToePlate>
            {items.map(item => <SingleSellTicTac id={item} key={item} />)}
            <Button
                id='exitBtn'
                name='exitBtn'
                content='exit_btn'
                width="100px"
                onClick={handleClick}
            />
        </StTicTacToePlate>
    );
};

export default TicTacToePlate;
