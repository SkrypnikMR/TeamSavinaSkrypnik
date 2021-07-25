import React from 'react';
import { StSingleSell, StPossition } from './styled';
import { TSingleSell } from './types';

const SingleSell = ({ id, status, getPosibleStep, position }: TSingleSell) => {
    const handleClick = (e) => {
        getPosibleStep(e.target.id);
    };
    return (
        <StSingleSell
            onClick={handleClick}
            id={id}
            color={status?.blackSquare ? 'black' : 'white'}
        >
            {position ? <StPossition/> : position}
            {status?.checker ? status?.checker.blackChecker ? '●' : '○' : null}
            {id}
        </StSingleSell>
    );
};

export default SingleSell;
