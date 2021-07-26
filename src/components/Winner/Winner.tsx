import React from 'react';
import { TWinner } from './types';
import { useTheme } from '../Hook/useTheme';
import { StWinnerWrapper } from './styled';

function Winner({ winner }: TWinner) {
    const { colors, theme } = useTheme(); 
    return (
        <StWinnerWrapper colors={colors} theme={theme}>
            {winner}
        </StWinnerWrapper>
    );
}

export default Winner;
