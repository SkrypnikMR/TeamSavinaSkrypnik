import React from 'react';
import Checker from '../Checher';
import { StSingleSell } from './styled';
import { TSingleSell } from './types';

const SingleSell = ({ id, isChecked, color } : TSingleSell) => {
    const handleClick = (e) => {
        console.log(e.target.id);
    };
    const background = parseInt((id / 8) + id) % 2 === 0 ? 'grey' : 'white';
    return (
        <StSingleSell id={id + 1} backgroungColor={background} onClick={handleClick}>
            {/* <Checker /> */}
            {isChecked ? <Checker color={color}/> : null}
            {id + 1}
        </StSingleSell>
    );
};

export default SingleSell;
