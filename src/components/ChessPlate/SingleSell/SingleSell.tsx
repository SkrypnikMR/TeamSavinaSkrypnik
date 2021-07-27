import React, { SyntheticEvent } from 'react';
import { StSingleSell, StPossition } from './styled';
import { TSingleSell } from './types';
import { white, blackPic, BLACKCHECKER, WHITECHECKER } from '../../UI/baseLayout';

const SingleSell = ({ id, status, getPosibleStep, position, doCheckerStep }: TSingleSell) => {
    const handleClick = (e: SyntheticEvent) => {
        if (position) return doCheckerStep(id);
        getPosibleStep(e.target.id);
    };
    return (
        <StSingleSell
            onClick={handleClick}
            id={id}
            color={status?.blackSquare ? `${blackPic}` : `${white}`}
        >
            {position ? <StPossition/> : position}
            {status?.checker ? status?.checker.blackChecker
                ? <img width='45px' id={id} src={WHITECHECKER} />
                : <img width='45px' id={id} src={BLACKCHECKER}/>
                : null}
        </StSingleSell>
    );
};

export default SingleSell;
