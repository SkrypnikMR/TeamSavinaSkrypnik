import styled from 'styled-components';
import { white } from 'src/components/UI/baseLayout';
import { IDiv } from './types';

export const StSingleSell = styled.div < IDiv > `
    width: 75px;
    height: 75px;
    cursor: pointer;
    display: flex;
    font-size: 50px;
    justify-content: center;
    align-items: center;
    ${({ color = `${white}` }) => color && `background-color: ${color}`};
`;

export const StPossition = styled.div`
    width:  74px;
    height: 74px;
    cursor: pointer;
    border: 1px solid green;
    z-index: 1000;
    box-shadow: 0 0 10px 5px rgba(35, 239, 252, 1);
`;
