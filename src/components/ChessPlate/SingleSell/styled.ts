import styled from 'styled-components';

import { IDiv } from './types';

export const StSingleSell = styled.div < IDiv > `
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    font-size: 50px;
    justify-content: center;
    align-items: center;
    ${({ color = 'red' }) => color && `background-color: ${color}`};
`;

export const StPossition = styled.div`
    width:  45px;
    height: 45px;
    cursor: pointer;
    border: 5px solid green;
    z-index: 1000;
`;
