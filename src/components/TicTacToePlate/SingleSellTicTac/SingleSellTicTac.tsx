import React from 'react';

import { StSingleSellTicTac } from './styled';

const SingleSellTicTac = ({ id, doStep, status }) => {
    const handleClick = () => doStep(id);
    return (
        <StSingleSellTicTac id={id} onClick={handleClick}>
            {status}
        </StSingleSellTicTac>
    );
};

export default SingleSellTicTac;
