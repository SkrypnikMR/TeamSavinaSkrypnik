import React from 'react';
import { StSingleSellTicTac } from './styled';
import { TSingleSellTicTac } from './types';
import { CROSS, ZEROTIC } from '../../UI/baseLayout';

const SingleSellTicTac = ({ id, doStep, status }: TSingleSellTicTac) => {
    let item = '';
    switch (status) {
        case 'X': item = CROSS; break;
        case 'O': item = ZEROTIC; break;
        default: break;
    }
    const handleClick = () => doStep(id);
    return (
        <StSingleSellTicTac id={id} onClick={handleClick}>
            <img width="40px" src={item}/>
        </StSingleSellTicTac>
    );
};

export default SingleSellTicTac;
