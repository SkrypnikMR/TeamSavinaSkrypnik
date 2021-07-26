import React from 'react';
import { StSingleSell, StPossition } from './styled';
import { TSingleSell } from './types';

const SingleSell = ({ id, status, getPosibleStep, position, doCheckerStep }: TSingleSell) => {
    const handleClick = (e) => {
        if (position) {
           return doCheckerStep(id);
        }
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
        </StSingleSell>
    );
};

export default SingleSell;
