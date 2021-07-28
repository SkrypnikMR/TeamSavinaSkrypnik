import styled from 'styled-components';
import { white } from '../UI/baseLayout';

export const StWinnerWrapper = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
        margin-top: 150px;
        color: ${white};
        background: ${({ colors, theme }) => colors[theme].background};

`;
