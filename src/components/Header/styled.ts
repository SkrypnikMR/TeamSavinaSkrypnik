import styled from 'styled-components';
import { IDiv } from './types';

export const StHeader = styled.div < IDiv > `
    display:flex;
    justify-content: flex-start;
    align-items: center;
    height:10vh;
    background: ${({ colors, theme }) => colors[theme].background};
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`}
`;
