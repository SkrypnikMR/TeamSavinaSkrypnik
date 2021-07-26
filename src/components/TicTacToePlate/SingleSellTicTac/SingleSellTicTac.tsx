import React, { useState } from 'react';

import { StSingleSellTicTac } from './styled';

const SingleSellTicTac = ({ id, doStep, status }) => {
    let item = '';
    switch (status) {
        case 'X': item = '../../../../public/assets/images/747953.png'; break;
        case 'O': item = '../../../../public/assets/images/rec.png'; break;
        case '': item = 'poooooook'; break;
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
