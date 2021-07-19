import styled from 'styled-components';

import { IDiv } from './types';
import { midGrey, bgColorDefault } from '../UI/baseLayout';

export const StAddRoom = styled.div < IDiv > `
    background: ${midGrey};
    bottom: 0px;
    right: 0px;
    padding: 2px;
    font-size: 30px;
    font-weight: bold;
    width: 30px;
    height: 30px;
    color: ${bgColorDefault};
    border-radius: 50%;
    line-height: 33px;
    text-align: center;
    margin: 0 10px 30px;
    cursor: pointer;
    :hover {
        -webkit-transform: scale(1.005);
        -ms-transform: scale(1.005);
        transform: scale(1.005);
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.22);
        transition-duration: 0.3s;
    }
`;
