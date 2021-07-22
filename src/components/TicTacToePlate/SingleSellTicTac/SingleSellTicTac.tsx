import React, { useState } from 'react';

import { StSingleSellTicTac } from './styled';

const SingleSellTicTac = (props) => {
    const { id } = props;
    const handleClick = (e) => {
        console.log(e.target.id);
    };
    return (
        <StSingleSellTicTac id={id} onClick={handleClick}/>    
    );
};

export default SingleSellTicTac;
