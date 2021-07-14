import React from 'react';
import { StFormDiv } from './styled';
import { IProps } from './types';

const Form = ({ children } : IProps) => <StFormDiv>{children}</StFormDiv>;

export default Form;
