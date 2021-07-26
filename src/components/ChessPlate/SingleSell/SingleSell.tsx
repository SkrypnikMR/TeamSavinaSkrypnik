import React from 'react';
import { StSingleSell, StPossition } from './styled';
import { TSingleSell } from './types';
import { white, blackPic } from '../../UI/baseLayout';

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
            color={status?.blackSquare ? `${blackPic}` : `${white}`}
        >
            {position ? <StPossition/> : position}
            {status?.checker ? status?.checker.blackChecker ? <img width='45px' id={id} src='../../../../public/assets/images/chinese-checkers (4).png'/>
                                                            : <img width='45px' id={id} src='../../../../public/assets/images/chinese-checkers (1).png'/>
                                                            : null}
        </StSingleSell>
    );
};

export default SingleSell;
