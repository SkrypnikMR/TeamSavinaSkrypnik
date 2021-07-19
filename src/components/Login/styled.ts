import styled from 'styled-components';

import { IDiv } from './types';

export const StLoginDiv = styled.div < IDiv > `
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ colors, theme }) => colors[theme].backgroundLogReg};
    height: 100vh;
    img{
        height: 40vh;
    }
`;
