import React from 'react';
import PropTypes from 'prop-types';
import { StFormDiv } from './styled';
import { useTheme } from '../../Hook/useTheme';

const Form = ({ children }) => {
    const { colors, theme } = useTheme();
    return (
        <StFormDiv colors={colors} theme={theme}>{children}</StFormDiv>
    );
};

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Form;
