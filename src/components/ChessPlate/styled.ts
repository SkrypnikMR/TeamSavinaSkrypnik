import styled from 'styled-components';

import { IDiv } from './types';

export const StChessPlate = styled.div < IDiv > `
    background: white;
    width: 400px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    color: gray; //temporary
    margin: 10px auto;
`;
