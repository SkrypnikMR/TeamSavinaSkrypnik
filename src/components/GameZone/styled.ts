import styled from 'styled-components';
import { white } from '../UI/baseLayout';

import { IDiv } from './types';

export const StGameZone = styled.div < IDiv > `
    background: ${({ colors, theme }) => colors[theme].background};
    color: ${white};
    text-align: end;
    padding: 10px;
    max-height: 100%;
    border-radius: 3px;
`;
