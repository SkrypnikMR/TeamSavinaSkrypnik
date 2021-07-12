import React from 'react';
import PropTypes from 'prop-types';
import { StFormDiv } from './styled';

const Form = ({ children }) => <StFormDiv>{children}</StFormDiv>;

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Form;
