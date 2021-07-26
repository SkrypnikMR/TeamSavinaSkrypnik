import React from 'react';
import { StChecker } from './styled';
import { TChecker } from './types';

const Checker = ({ color } : TChecker) => {
    return (
        <StChecker style={{ background: color === 'black' ? 'black' : 'white' }}/>
    );
};

export default Checker;
