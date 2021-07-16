import styled from 'styled-components';

import { IDiv } from './types';

export const StGameZone = styled.div < IDiv > `
    background: ${({ colors, theme }) => colors[theme].background};
    color: white;
    margin: 10px 0;
    text-align: end;
    padding: 10px;
    max-height: 100%;
`;
