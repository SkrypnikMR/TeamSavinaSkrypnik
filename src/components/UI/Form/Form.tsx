import React from 'react';
import { StFormDiv } from './styled';
import { IProps } from './types';

import { useTheme } from '../../Hook/useTheme';

const Form = ({ children } : IProps) => {
    const { colors, theme } = useTheme();
    return (
        <StFormDiv colors={colors} theme={theme}>{children}</StFormDiv>
    );
};

export default Form;
