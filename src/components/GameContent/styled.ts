import styled from 'styled-components';

import { IDiv } from './types';

export const StGameContent = styled.div < IDiv > `
    background: ${({ colors, theme }) => colors[theme].backgroundSecondary};
    margin: 10px;
    width: 70%;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;
