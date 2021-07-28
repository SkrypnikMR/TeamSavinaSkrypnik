import styled from 'styled-components'; 
import { darkGrey } from '../../UI/baseLayout';
import { TSingleStyledTic } from './types';

export const StSingleSellTicTac = styled.div < TSingleStyledTic > `
    border: solid 2px ${darkGrey};
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items:  center;
`;
