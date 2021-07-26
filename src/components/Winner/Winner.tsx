import React from 'react';
import { TWinner } from './types';
import { StWinnerWrapper } from './styled';

function Winner({ winner }: TWinner) {
    return (
        <StWinnerWrapper>
            {winner}
        </StWinnerWrapper>
    );
}

export default Winner;
