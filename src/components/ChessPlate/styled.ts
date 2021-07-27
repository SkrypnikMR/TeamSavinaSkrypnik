import styled from 'styled-components';

import { IDiv } from './types';

export const StChessPlate = styled.div < IDiv > `
    background: white;
    width: 600px;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    color: gray; //temporary
    margin: 10px auto;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1),
        -23px 0 20px -23px rgba(0, 0, 0, .8),
        23px 0 20px -23px rgba(0, 0, 0, .8),
        0 0 40px rgba(0, 0, 0, .1) inset;
`;
